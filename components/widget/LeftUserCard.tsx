import { NextPage } from "next";
import styles from '../../styles/components/widget/left_user_card.module.scss';
import { useAppDispatch, useAppSelector } from "../../store/store";
import React, { useState } from "react";
import { showOrHideLogin } from "../../store/slices/loginSlice";

interface ILeftUserCard {
    className?: {},
    descMaxLine?: number
}

const LeftUserCard: NextPage<ILeftUserCard> = ({
    descMaxLine = 4,
    className
}) => {

    const dispatch = useAppDispatch();
    const { isLogin, user } = useAppSelector((state) => state.user);
    const [isSign, setSign] = useState(false);

    const doSign = () => {
        setSign(!isSign);
    }

    const doLogin = () => {
        dispatch(showOrHideLogin(true));
    }

    return <div className={[styles.menuLeft, className].join(" ")}>
        <div className={styles.signUser}>
            <img className={styles.userHeader} src={user?.avatar ? user?.avatar : "/static/images/default_user.png"} alt="" />
            <span>{isLogin && user?.nickname ? user?.nickname : '游客身份'}</span>
        </div>
        <p className={styles.userDesc} style={{ WebkitLineClamp: descMaxLine, maxLines: descMaxLine }}>{isLogin ? user?.description : ""}</p>
        {
            isLogin ?
                <span className={styles.signBtn}
                    style={{ backgroundColor: isSign ? "#F1F2F3" : "#d9e8fc", color: isSign ? "#BABDC3" : "#3388FF" }}
                    onClick={doSign}>
                    {isSign ? '已签到' : '签到'}
                </span> :
                <span className={styles.loginBtn} onClick={doLogin}>登录</span>
        }
    </div>
}

export default LeftUserCard;