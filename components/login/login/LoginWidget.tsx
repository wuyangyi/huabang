import { NextPage } from "next";
import styles from './login_widget.module.scss';
import { useEffect, useState } from 'react';
import InputWidget from '../../widget/InputWidget';
import { checkPhone, checkCode, checkPwd } from '../../../utils/util';
import ActionButton from '../../widget/ActionButton';
import GetCodeWidget from "../../widget/GetCodeWidget";
import { useDispatch } from "react-redux";
import { codeLogin, LoginBean, pwdLogin, UserBean, getPhoneCode } from "../../../store/services/user";
import { PayloadAction } from "@reduxjs/toolkit";
import { Res } from "../../../store/services/home";
import { AxiosPromise, AxiosResponse } from "axios";
import { saveUser } from "../../../store/slices/userSlice";
import { encrypt } from "../../../utils/aes";
import { hideLogin } from '../../../store/slices/loginSlice';

export interface ILoginWidget {
    switchLogin: (showForget: boolean) => void,
}

const LoginWidget: NextPage<ILoginWidget> = ({
    switchLogin
}) => {
    const [isCodeLogin, setCodeLogin] = useState(true);
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const [errorText, setErrorText] = useState('');
    const dispatch = useDispatch();

    var isCanSend = true;

    /**
     * 切换登录方式
     * @param codeLogin 是否验证码登录
     */
    function switchLoginType(codeLogin: boolean) {
        if (isCodeLogin !== codeLogin) {
            setCodeLogin(codeLogin);
            if (errorText) {
                setErrorText('');
            }
        }
    }

    /**
     * 获取手机号
     */
    const getCode = (phone: string) => {
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

        const p = encrypt(phone);
        console.log(p);
        dealPhoneCode(p);

        return true;
    }

    async function dealPhoneCode(p: string) {
        getPhoneCode({
            phone: p,
            type: 1
        }).then((data: any) => {
            console.log(data);
        }).catch((err) => {
            setErrorText("发送失败！请检查手机号格式是否正确");
            console.log("异常", err);
        })
    }

    const setCanSend = (canSend: boolean) => {
        isCanSend = canSend;
    }


    /**
     * 登录
     */
    const handleLogin = async () => {
        let error = checkPhone(phone);
        if (error) {
            setErrorText(error);
            return;
        }
        if (isCodeLogin) {
            error = checkCode(code);
            if (error) {
                setErrorText(error);
                return;
            }
        } else {
            error = checkPwd(password);
            if (error) {
                setErrorText(error);
                return;
            }
        }

        setErrorText('');

        var request;
        if (isCodeLogin) {
            request = codeLogin({
                phone: encrypt(phone),
                code: encrypt(code),
            });
        } else {
            request = pwdLogin({
                phone: encrypt(phone),
                password: encrypt(password),
            });
        }

        request.then((data) => {
            console.log(data);
            if (data.status == 1) {
                dispatch(saveUser(data));
                dispatch(hideLogin());
                // document.location.reload();
            } else {
                setErrorText(data.message);
            }

        }).catch((err) => {
            console.log(err);
            setErrorText(isCodeLogin ? "账号或验证码错误" : "账号或密码错误");
        })



    }

    /**
     * 跳转到忘记密码
     */
    const goToForgetPwd = () => {
        if (errorText) {
            setErrorText("");
        }
        if (switchLogin != null) {
            switchLogin(true);
        }
    }

    return <div className={styles.loginWidget}>
        <div className={styles.loginStatus}>
            <span className={styles.loginStatusBt}
                style={{
                    color: isCodeLogin ? '#3388FF' : '#435b87',
                    borderBottomColor: isCodeLogin ? '#3388FF' : 'transparent'
                }}
                onClick={() => {
                    switchLoginType(true);
                }}>验证码登录</span>
            <span className={styles.loginStatusBt}
                style={{
                    marginLeft: "70px",
                    color: isCodeLogin ? '#435b87' : '#3388FF',
                    borderBottomColor: isCodeLogin ? 'transparent' : '#3388FF'
                }}
                onClick={() => {
                    switchLoginType(false);
                }}>密码登录</span>
        </div>
        <div className={styles.content}>
            <div className={styles.errorText} style={{ opacity: errorText ? 1 : 0 }}>{errorText}</div>

            <div className={styles.inputWidget}>
                <img src="/static/images/ico_login_phone.png" height="20px" alt="" />
                <div className={styles.inputContent}>
                    <InputWidget
                        height="36px"
                        hintText="请输入手机号"
                        inputType="tel"
                        onTextChange={(key) => {
                            setPhone(key);
                        }} />
                </div>
                <GetCodeWidget phone={phone} getCode={getCode} isHidden={!isCodeLogin} setCanSend={setCanSend} />
            </div>
            <div className={styles.inputWidget} style={{ visibility: isCodeLogin ? 'visible' : 'hidden', height: isCodeLogin ? "36px" : '0px', margin: "0" }}>
                <img src="/static/images/ico_login_code.png" height="20px" alt="" />
                <div className={styles.inputContent}>
                    <InputWidget
                        hintText="输入验证码"
                        inputType="text"
                        onTextChange={(key) => { setCode(key) }} />
                </div>
            </div>
            <div className={styles.inputWidget} style={{ visibility: isCodeLogin ? 'hidden' : 'visible', height: isCodeLogin ? "0px" : "36px", margin: "0" }}>
                <img src="/static/images/ico_login_password.png" height="20px" alt="" />
                <div className={styles.inputContent}>
                    <InputWidget
                        hintText="输入密码 （6-20位数字和字母）"
                        inputType="password"
                        onTextChange={(key) => { setPassword(key) }} />
                </div>
            </div>

            <ActionButton className={styles.loginBtn} value="登  录" onClick={handleLogin} />

            <div className={styles.hintContent}>
                <span className={styles.loginHint} style={{ visibility: isCodeLogin ? 'visible' : 'hidden' }} >未注册的手机号，默认注册绑定。</span>
                <span className={styles.forgetPwd} style={{ visibility: isCodeLogin ? 'hidden' : 'visible' }} onClick={goToForgetPwd} >忘记密码</span>
            </div>

            <div className={styles.otherLogin}>
                <div className={styles.qqLogin} />
                <div className={styles.wechatLogin} />
            </div>
        </div>
    </div>
}

export default LoginWidget;