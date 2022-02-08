import { NextPage } from 'next';
import styles from './login_dialog.module.scss';
import { useAppDispatch } from '../../store/store';
import { hideLogin } from '../../store/slices/loginSlice';
import LoginWidget from './login/LoginWidget';
import { useState } from 'react';
import ForgetPwdWidget from './forget_pwd/ForgetPwdWidget';

const LoginDialog: NextPage = () => {

    const dispatch = useAppDispatch();

    const [showForgetPwd, setShowForgetPwd] = useState(false);

    /**
     * 关闭登录弹窗
     */
    const closeLogin = () => {
        dispatch(hideLogin());
    }

    /**
     * 切换登录或选择密码
     * @param showForget 
     */
    const switchLogin = (showForget: boolean) => {
        if (showForget != showForgetPwd) {
            setShowForgetPwd(showForget);
        }
    }


    return (
        <div className={styles.login}>
            <div className={styles.loginBody}>
                <div className={styles.leftContent}>
                    <img className={styles.logo} src="/static/images/login_logo.png" width="140px" alt="" />
                    <img className={styles.downCode} src="/static/images/app_down.png" width="160px" alt="" />
                    <p className={styles.downHint}>下载互帮APP</p>
                    <p className={styles.downHint}>有更多功能等着你</p>
                </div>
                <div className={styles.rightContent}>
                    <div className={styles.loginWidget} style={{ left: showForgetPwd ? '-100%' : '0', opacity: showForgetPwd ? '0.4' : '1' }}>
                        <LoginWidget switchLogin={switchLogin} />
                    </div>
                    <div className={styles.loginWidget} style={{ left: showForgetPwd ? '0' : '100%', opacity: showForgetPwd ? '1' : '0.4' }}>
                        {
                            showForgetPwd && <ForgetPwdWidget switchLogin={switchLogin} />
                        }
                    </div>
                </div>
            </div>
            <img className={styles.dialogClose}
                src="/static/images/ico_white_close.png"
                width="30px"
                onClick={closeLogin} alt="" />
        </div>
    );
}

export default LoginDialog;