import api from '../../utils/api';
import Url from '../../utils/url';
import { NameIdBean } from './home';

export type UserBean = {
    id: string; // id
    alias: string; // 别名
    nickname: string; // 昵称
    avatar: string; // 头像
    sex: number; // 性别
    description: string; //简介
    birthday: string;  // 生日
    province: NameIdBean; //省
    city: NameIdBean;
    school: NameIdBean; //学校
    authentication_type: number; //认证类型
    online_status: number; //在线状态
    credit_score: number; // 信用评分
    order_rate: number; //成单率
    follow_number: number; //关注数目
    fan_number: number; //粉丝数目
    followed: boolean; //是否已关注
    following: boolean; //是否被关注
    phone: string; //手机号（仅登录的当前用户有）
}


export type LoginBean = {
    token: string,
    user: UserBean,
    is_finish: number,
};


type LoginParams = {
    phone?: string;
    password?: string;
    code?: string;
    type?: number;
};

export function getPhoneCode(params: LoginParams) {
    return api.request({
        method: 'POST',
        url: Url.getCode,
        data: params,
        headers: {
            'content-type': 'application/json',
        }
    });
};

export function pwdLogin(params: LoginParams) {
    return api.request({
        method: 'POST',
        url: Url.pwdLogin,
        data: params,
    });
};

export function codeLogin(params: LoginParams) {
    return api.request({
        method: 'POST',
        url: Url.codeLogin,
        data: params,
    });
};

/**自动登录 */
export const autoLogin = () => {
    return api.request({
        method: 'POST',
        url: Url.autoLogin,
    });
};