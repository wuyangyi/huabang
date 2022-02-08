import { NextPage } from "next";
import styles from './call_us.module.scss';

export interface IGoLogin {
    goLogin: () => void
}

const CallUs: NextPage<IGoLogin> = ({
    goLogin
}) => {
    return <div className={styles.bodyContent}>
        <div className={styles.content}>
            <span className={styles.email}>联系邮箱：1207711838@qq.com</span>
            <span className={styles.hint}>收到您的邮件后，我们将第一时间为您服务！</span>
        </div>

        <div><span className={styles.goLogin} onClick={goLogin}>返回登录页</span></div>
    </div>
}

export default CallUs;