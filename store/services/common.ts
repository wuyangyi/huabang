import api from '../../utils/api';
import Url from '../../utils/url';
import { FetchFn } from '../params';
import { HelpTypeBean } from './helper';
import type { NameIdBean, Res } from './home';

// 学校bean
export type SchoolBean = NameIdBean & {
    part: string,
};

// 地址bean
export type AddressBean = NameIdBean & {
    cities: Array<CityBean>
};

// 城市bean
export type CityBean = NameIdBean & {
    province_id: number,
    area: Array<AreaBean>
};

// 区bean
export type AreaBean = NameIdBean & {
    province_id: number,
    city_id: number
};

// 圈子类型bean
export type CircleTypeBean = {
    id: number,
    type: string,
    tags: Array<TagsBean>
};

export type TagsBean = NameIdBean & {
    type_id: number,
}

export type TypeAddressSchoolBean = {
    type: Array<HelpTypeBean>,
    school: Array<SchoolBean>,
    address: Array<AddressBean>,
    hot_city: Array<CityBean>,
    industry: Array<NameIdBean>,
    circle_type: Array<CircleTypeBean>
};


/**获取学校、互帮类型、省市区 */
export const getTypeAddressSchool: FetchFn<unknown> = () => {
    return api.request({
        url: Url.commit,
        method: "GET"
    });
};


/**获取圈子类别 */
export const getCircleType: FetchFn<unknown> = () => {
    return api.request({
        url: Url.getCircleType,
        method: "GET"
    });
};
