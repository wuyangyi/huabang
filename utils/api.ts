import axios, { AxiosRequestConfig } from 'axios';
import { notification } from 'antd';
import { decrypt, encrypt } from './aes';
import { getToken } from './token_util';



const qs = require('qs');

const codeMessage: Record<number, string> = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    405: '请求方法不被允许。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};

const api = {

    getHeader() {
        let token = getToken();
        console.log("token", token);

        let header = {
            now_time: (new Date()).getTime() + '',
            version: '0.1.0',
            client: 'pc',
            token: token,
            did: "HUBANG_PC",
        }
        let aesHeader = "&now_time=" + header["now_time"]
            + "&client=" + header["client"]
            + "&version=" + header["version"]
            + "&did=" + header["did"]
            + "&token=" + header["token"];

        header['sign'] = encrypt(JSON.stringify(aesHeader));
        // header["Connection"] = 'keep-alive';
        header["Access-Control-Allow-Origin"] = '*';
        return header;
    },

    request(config?: AxiosRequestConfig) {
        let headers = this.getHeader();
        let instance = axios.create({
            baseURL: process.env.API_HOST,
            headers: headers,
            timeout: 10000,
        });

        // 请求拦截器
        instance.interceptors.request.use(
            (config) => {
                // 发起请求时，取消掉当前正在进行的相同请求
                const url = [
                    config.method,
                    config.url,
                    qs.stringify(config.params),
                    qs.stringify(config.data),
                ].join('&');
                if (pending.has(url)) {
                    // 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
                    const cancel = pending.get(url);
                    cancel(url);
                    pending.delete(url);
                } else {
                    config.cancelToken =
                        config.cancelToken ||
                        new axios.CancelToken((cancel) => {
                            pending.set(url, cancel);
                        });
                }

                console.log("请求拦截", config.url, config?.headers?.['token']);


                // 转变数据格式
                if (config?.headers?.['Content-Type'] === 'application/x-www-form-urlencoded') {
                    config.transformRequest = (data) => {
                        const str = Object.keys(data).map(
                            (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
                        );
                        return str.join('&');
                    };
                }
                return config;
            },
            function (error) {
                const { response } = error;
                if (response && response.status) {
                    const errorText = codeMessage[response.status] || response.statusText;
                    const { status, url } = response;
                    if (status === 401 || status === 403) {
                        notification.error({
                            message: '未登录或登录已过期，请重新登录。',
                        });
                    }
                    notification.error({
                        message: `请求错误 ${status}: ${url}`,
                        description: errorText,
                    });
                }

                if (!response) {
                    notification.error({
                        description: '您的网络发生异常，无法连接服务器',
                        message: '网络异常',
                    });
                }
            },
        );
        // 响应拦截器即异常处理
        instance.interceptors.response.use((res: any) => {
            const data = res.data;
            if (data != null) {
                if (data.need_decrypt) {
                    const content = JSON.parse(decrypt(data.data));
                    if (content != null) {
                        data.data = content;
                    }
                }
                return data;
            }
            return data;
        });

        return instance(config ? config : {});
    }

}

const pending = new Map();

// 清空 pending 中的请求（在路由跳转时调用）
export const clearPending = () => {
    pending.forEach(function (cancel, url) {
        cancel(url);
    });
    pending.clear();
};


export default api;