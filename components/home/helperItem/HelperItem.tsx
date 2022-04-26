import { NextPage } from "next";
import style from './helper_item.module.scss';
import type { NameIdBean } from '../../../store/services/home';
import type { HelperItemData } from '../../../store/services/helper';
import { getHelpMoney, getTimeStringByNow } from '../../../utils/util';
import Link from 'next/link';
const staticPath = process.env.STATIC_PATH;

const HelperItem: NextPage<HelperItemData> = (props) => {


    function getHelpTime(start: number, end: number) {
        let startTime = getTimeStringByNow(start, "不限");
        let endTime = getTimeStringByNow(end, "不限");
        if (startTime === "不限" && endTime === "不限") {
            return "不限";
        }
        return startTime + " - " + endTime;
    }

    function getPeopleNumber(num: number) {
        if (num <= 0) {
            return "不限";
        }
        return num + "人";
    }

    function getAddress(province: NameIdBean, city: NameIdBean, area: NameIdBean) {
        if (province == null || province.id <= 0) {
            return "不限";
        } else {
            if (city == null || city.id <= 0) {
                return province.name;
            } else {
                if (area == null || area.id <= 0) {
                    return city.name;
                } else {
                    return city.name + " " + area.name;
                }
            }
        }
    }

    return <div className={style.itemContent}>
        <div className={style.title}>
            <h4 className={style.helpName}>{props.type.child.name + '-' + props.title}</h4>
            <span className={style.helpMoney}>{getHelpMoney(props.lowest_price, props.highest_price)}</span>
        </div>
        <div className={style.helpTime}>
            {"时间：" + getHelpTime(props.start_time, props.end_time)}
            <span className={style.peopleNumber}>{"人数：" + getPeopleNumber(props.people_number)}</span>
            <img className={style.hotImg} src={`${staticPath}/images/ico_zhengming.png`} width="20px" style={{ display: props.finish_prove ? "block" : "none" }} alt="" />
            <img className={style.hotImg} src={`${staticPath}/images/ico_anxious.png`} width="20px" style={{ display: props.is_urgent ? "block" : "none" }} alt="" />
        </div>

        <div className={style.helpUser}>
            <Link href={"/user/" + props.sender.id} >
                <img className={style.userHead}
                    src={props.sender.avatar == null ? "http://wyyhubang.oss-cn-chengdu.aliyuncs.com/default/default_user.png" : props.sender.avatar}
                    height="50px" width="50px" alt="" />
            </Link>
            <span className={style.userName}>
                {props.sender.alias == null ? props.sender.nickname : props.sender.alias}
            </span>
            <span className={style.address}>
                {getAddress(props.province, props.city, props.area)}
            </span>
        </div>
    </div>;
}

export default HelperItem;