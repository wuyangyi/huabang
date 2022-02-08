import Url from "../../utils/url";
import api from '../../utils/api';

export function getUserInfo(params: { id: string }) {
    return api.request({
        method: 'GET',
        url: Url.userInfo + "?id=" + params.id,
    });
};