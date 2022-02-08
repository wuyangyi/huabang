import { NextPage } from "next";
import style from './circle_item.module.scss';
import type { CircleBean } from '../../../store/services/circle';

const CircleItem: NextPage<CircleBean> = (props) => {

    function getFollow(type: number) {
        if (type == -1) {
            return "已申请";
        } else if (type == 1 || type == 2) {
            return "已加入";
        } else if (type == 3) {
            return "圈主";
        }
        return "申请";
    }

    return <div className={style.circleItem}>
        <img className={style.logo}
            src={props.avatar == null ? "http://wyyhubang.oss-cn-chengdu.aliyuncs.com/default/default_group.png" : props.avatar}
            width="35px"
            height="35px"
            alt="" />

        <div className={style.circleContent}>
            <div className={style.centerContent}>
                <h4 className={style.circleName}>{props.circle_name}</h4>
                <span className={style.desc}>{props.description == null ? "群主很神秘，什么都没写~" : props.description}</span>
            </div>

            <span className={style.follow}
                style={{
                    color: props.join_type == 0 ? '#3388FF' : '#CBCFDD',
                    borderColor: props.join_type == 0 ? '#3388FF' : '#CBCFDD',
                }}>
                {getFollow(props.join_type)}
            </span>
        </div>
    </div>;
}

export default CircleItem;