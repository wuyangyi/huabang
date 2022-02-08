import { Component } from "react";
import styles from '../../styles/components/widget/get_code_widget.module.scss';

interface IGetCode {
    phone: string,
    getCode: (phone: string) => boolean,
    isHidden?: boolean,
    setCanSend: (canSend: boolean) => void,
}

class GetCodeWidget extends Component<IGetCode> {

    state = {
        codeTime: 0
    }

    timerID;
    time = this.state.codeTime;


    componentDidMount() {
        this.props.setCanSend(true); //默认可以点击
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    /**
     * 重新获取验证码倒计时
     */
    startCodeTime() {
        if (this.time <= 0) {
            this.props.setCanSend(false);
            this.time = 60;
            this.setCodeTime(this.time);
            this.timerID = setInterval(() => {
                this.time--;
                this.setCodeTime(this.time);
                if (this.time <= 0) {
                    this.props.setCanSend(true);
                    clearInterval(this.timerID);
                }
            }, 1000);
        }
    }

    setCodeTime(time: number) {
        this.setState({
            codeTime: time
        })
    }

    onClick = () => {
        if (this.time > 0) {
            return;
        }
        var isOk = true;
        if (this.props.getCode != null) {
            isOk = this.props.getCode(this.props.phone);
        }

        if (isOk) {
            this.startCodeTime();
        }
    }

    render() {
        return <span className={styles.codeText}
            style={{
                backgroundColor: (this.state.codeTime <= 0) ? "#F1F7FF" : "#F1F2F3",
                color: (this.state.codeTime <= 0) ? "#3388FF" : "#BABDC3",
                display: this.props.isHidden ? "none" : "block"
            }}
            onClick={this.onClick}>
            {this.state.codeTime <= 0 ? "获取验证码" : (this.state.codeTime + "秒重新获取")}
        </span>
    }
}

export default GetCodeWidget;