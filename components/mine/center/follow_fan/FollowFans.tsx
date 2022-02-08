import { NextPage } from "next";
import { UserBean } from "../../../../store/services/user";
import { useAppSelector } from "../../../../store/store";
import { IMineCenter } from "../MineCenterContent";
import styles from './follow_fans.module.scss';

const FollowFans: NextPage<IMineCenter> = ({ userInfo, isSelf }) => {

    return <div className={styles.followFans}>
        <div className={styles.item}>
            <span className={styles.fan_number}>{userInfo.follow_number}</span>
            <span className={styles.fan_title}>{isSelf ? "我的关注" : "他的关注"}</span>
        </div>
        <div className={styles.line}></div>
        <div className={styles.item}>
            <span className={styles.fan_number}>{userInfo.fan_number}</span>
            <span className={styles.fan_title}>{isSelf ? "我的粉丝" : "他的粉丝"}</span>
        </div>
    </div>
}

export default FollowFans;