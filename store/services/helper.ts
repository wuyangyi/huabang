import { NameIdBean } from "./home";
import { UserBean } from "./user";
import api from '../../utils/api';
import Url from '../../utils/url';
import { FetchFn, LimitIdParams, LimitTypeParams } from "../params";


export type HelpTypeBean = NameIdBean & {
    child: NameIdBean;
};

export type HelperItemData = {
    id: string;
    sender_id: string;
    sender: UserBean;
    title: string;
    content: string;
    type: HelpTypeBean;
    province: NameIdBean;
    city: NameIdBean;
    area: NameIdBean;
    address: string;
    start_time: number;
    end_time: number;
    lowest_price: number;
    highest_price: number;
    is_urgent: number;
    people_number: number;
    is_timeout_cancel: number;
    finish_prove: number;
    status: number;
    longitude: number;
    latitude: number;
};


/**互帮列表 */
export const getHelperList: FetchFn<LimitTypeParams> = (params) => {
    return api.request({
        url: Url.helperList,
        params: params,
    });
};

/**获取用户求助列表 */
export const getUserHelperList: FetchFn<LimitIdParams> = (params) => {
    return api.request({
        url: Url.userHelpList,
        params: params,
    });
};