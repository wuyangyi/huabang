import { Component } from "react";
import styles from './find_pwd_success.module.scss';
import ActionButton from '../../../widget/ActionButton';
import { IGoLogin } from "../call_us/CallUs";
const staticPath = process.env.STATIC_PATH;

export default class FindPwdSuccess extends Component<IGoLogin> {

    state = {
        time: 3,
    };

    timerID: any;
    times = 3;

    startTime() {
        this.timerID = setInterval(() => {
            this.times--;
            this.setState({
                time: this.times
            })
            if (this.times < 0) {
                clearInterval(this.timerID);
                this.props.goLogin();
            }
        }, 1000)
    }

    componentDidMount() {
        this.startTime();
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return <div className={styles.findPwd}>
            <div className={styles.findContent}>
                <img src={`${staticPath}/images/ico_success.png`} width={40} height={40} alt="" />
                <div className={styles.hint}>
                    <span>密码设置成功</span>
                    <span style={{ marginTop: '10px' }}>你可以使用新密码进行登录</span>
                </div>
            </div>

            <ActionButton className={styles.loginBtn} value="立即登录" onClick={this.props.goLogin} />
            <span className={styles.jumpHint}>页面将在<span className={styles.jumpTime}>{this.state.time}s</span>后自动跳转至登录页</span>
        </div>
    }
}