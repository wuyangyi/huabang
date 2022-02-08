import api from '../../utils/api';
import Url from '../../utils/url';
import { FetchFn, LimitIdParams, LimitTypeParams } from '../params';
import type { Res } from './home';


export type ListPageBean<T> = {
    total: number,
    list: Array<T>
};

export type CircleBean = {
    id: string;
    circle_name: string;
    avatar: string;
    description: string;
    circle_tag: string;
    circle_background: string;
    owner_id: string;
    type: number;
    status: number;
    out_visiable_level: number;
    need_apply: number;
    create_time: string;
    join_type: number;
};


/**圈子列表 */
export const getCircleList: FetchFn<LimitTypeParams> = (params) => {
    return api.request({
        url: Url.circleList,
        method: "GET",
        params: params,
    });
};

/**用户的圈子列表 */
export const getUserCircleList: FetchFn<LimitIdParams> = (params) => {
    return api.request({
        url: Url.userCircleList,
        method: "GET",
        params: params,
    });
};
