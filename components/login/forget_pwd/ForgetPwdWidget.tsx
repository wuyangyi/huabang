import { NextPage } from "next";
import React, { useState } from "react";
import { checkCode, checkPhone, checkPwd } from "../../../utils/util";
import GetCodeWidget from "../../widget/GetCodeWidget";
import InputWidget from "../../widget/InputWidget";
import { ILoginWidget } from "../login/LoginWidget";
import styles from './forget_pwd.module.scss';
import ActionButton from '../../widget/ActionButton';
import CallUs from "./call_us/CallUs";
import { useDispatch } from "react-redux";
import FindPwdSuccess from "./find_pwd/FindPwdSuccess";
const staticPath = process.env.STATIC_PATH;

const ForgetPwdWidget: NextPage<ILoginWidget> = ({
    switchLogin
}) => {
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const [errorText, setErrorText] = useState('');
    const [showType, setShowType] = useState(0);

    const dispatch = useDispatch();

    var isCanSend = true;

    /**
     * 返回登录
     */
    const goLogin = () => {
        if (errorText) {
            setErrorText("");
        }
        if (switchLogin != null) {
            switchLogin(false);
        }
    }

    const showCallUs = () => {
        if (showType !== 1) {
            setShowType(1);
        }
    }

    /**
 * 获取手机号
 */
    const getCode = () => {
        if (!isCanSend) {
            return false;
        }

        if (!phone) {
            setErrorText('请输入手机号');
            return false;
        }
        const error = checkPhone(phone);
        if (error) {
            setErrorText(error);
            return false;
        }
        setErrorText('');
        return true;
    }

    const setCanSend = (canSend: boolean) => {
        isCanSend = canSend;
    }

    /**
     * 提交
     */
    const handleSubmit = () => {
        let error = checkPhone(phone);
        if (error) {
            setErrorText(error);
            return;
        }
        error = checkCode(code);
        if (error) {
            setErrorText(error);
            return;
        }
        error = checkPwd(password);
        if (error) {
            setErrorText(error);
            return;
        }

        setErrorText('')

        console.log("提交请求");
        setShowType(2);

    }

    return <div className={styles.forgetWidget}>
        <div className={styles.forgetWidgetContent} style={{ left: showType === 0 ? '0' : '-100%', opacity: showType === 0 ? '1' : '0.4' }}>
            <div className={styles.title}>重置密码</div>
            <div className={styles.errorText} style={{ opacity: errorText ? 1 : 0 }}>{errorText}</div>

            <div className={styles.inputWidget} style={{ marginTop: "40px" }}>
                <img src={`${staticPath}/images/ico_login_phone.png`} height="20px" alt="" />
                <div className={styles.inputContent}>
                    <InputWidget
                        hintText="请输入手机号"
                        inputType="tel"
                        onTextChange={(key) => {
                            setPhone(key);
                        }} />
                </div>
                <GetCodeWidget phone={phone} getCode={getCode} setCanSend={setCanSend} />
            </div>
            <div className={styles.inputWidget}>
                <img src={`${staticPath}/images/ico_login_code.png`} height="20px" alt="" />
                <div className={styles.inputContent}>
                    <InputWidget
                        hintText="输入验证码"
                        inputType="text"
                        onTextChange={(key) => { setCode(key) }} />
                </div>
            </div>
            <div className={styles.inputWidget}>
                <img src={`${staticPath}/images/ico_login_password.png`} height="20px" alt="" />
                <div className={styles.inputContent}>
                    <InputWidget
                        hintText="输入密码 （6-20位数字和字母）"
                        inputType="password"
                        onTextChange={(key) => { setPassword(key) }} />
                </div>
            </div>

            <ActionButton className={styles.loginBtn} value="完  成" onClick={handleSubmit} />
            <div className={styles.hintContent}>
                <span >手机号无法接受验证码？</span>
                <span className={styles.contactUs} onClick={showCallUs} >联系我们</span>
            </div>

            <span className={styles.goLogin} onClick={goLogin}>返回登录页</span>
        </div>

        <div className={styles.callUs} style={{ left: showType === 1 ? '0' : '100%', opacity: showType === 1 ? '1' : '0.4' }}>
            {
                showType === 1 && <CallUs goLogin={goLogin} />
            }
        </div>
        <div className={styles.callUs} style={{ left: showType === 2 ? '0' : '100%', opacity: showType === 2 ? '1' : '0.4' }}>
            {
                showType === 2 && <FindPwdSuccess goLogin={goLogin} />
            }
        </div>
    </div>;
}

export default ForgetPwdWidget;