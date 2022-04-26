import { NextPage } from "next";
import { UserBean } from "../../../../store/services/user";
import { useAppSelector } from "../../../../store/store";
import { IMineCenter } from "../MineCenterContent";
import styles from './top_user_info.module.scss';
const staticPath = process.env.STATIC_PATH;


const TopUserInfo: NextPage<IMineCenter> = ({ userInfo, isSelf }) => {

    const { user } = useAppSelector((state) => state.user);


    function getRz() {
        if (userInfo?.authentication_type == 1) {
            return '已认证';
        } else if (userInfo?.authentication_type == 2) {
            return '企业认证';
        }
        return "未认证";
    }

    return <div className={styles.infoContent}>
        <div className={styles.mask} />
        {
            isSelf && <span className={styles.updata_center_pic} >更换封面</span>
        }
        <div className={styles.userInfo}>
            <img className={styles.userHeader} src={userInfo?.avatar ? userInfo?.avatar : "http://wyyhubang.oss-cn-chengdu.aliyuncs.com/default/default_user.png"} alt="" />
            <div className={styles.info}>
                <div className={styles.name}>
                    <span className={styles.nickname}>{userInfo?.nickname}</span>
                    {
                        userInfo?.sex && <img className={styles.sex} src={userInfo?.sex == 2 ? `${staticPath}/images/img_girl_icon.png` : `${staticPath}/images/img_boy_icon.png`} alt="" />
                    }
                </div>
                <span className={styles.credit_score}>{getRz()} / 成单率{userInfo?.order_rate}% / 信用{userInfo?.credit_score}</span>
                <span className={styles.description}>{userInfo?.description ?? "这个人很懒，什么都没写~"}</span>
            </div>
            {
                isSelf ?
                    <span className={[styles.edit, styles.flexEnd].join(' ')}>编辑</span> :
                    userInfo.followed ?
                        <span className={[styles.follow, styles.flexEnd].join(' ')}>已关注</span> :
                        <img className={styles.flexEnd} src={`${staticPath}/images/ico_follow.png`} width={40} alt="" />
            }
        </div>
    </div>
}

export default TopUserInfo;