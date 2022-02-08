import { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from '../../styles/components/widget/input_widget.module.scss';

interface InputDate {
    hintText?: string,
    inputType?: string,
    width?: string,
    height?: string,
    fontSize?: string,
    textColor?: string,
    maxLength?: number,
    onTextChange?: (key: string) => void,
    onFocus?: () => void,
}

const InputWidget: NextPage<InputDate> = (
    {
        hintText = "请输入",
        inputType = 'text',
        width = '100%',
        height = '100%',
        fontSize = '13px',
        textColor = '#363951',
        maxLength,
        onTextChange,
        onFocus
    }
) => {

    const [text, setText] = useState('');
    const [pwdType, setPwdType] = useState('password');

    const handleChange = (e) => {
        let value = e.target.value;
        setText(value);
        if (onTextChange != null) {
            onTextChange(value);
        }
    }

    const clearText = () => {
        setText('');
        if (onTextChange != null) {
            onTextChange('');
        }
    }

    const switchPwdShowOrHide = () => {
        if (pwdType === "password") {
            setPwdType("text");
        } else {
            setPwdType("password");
        }
    }

    return <div className={styles.inputContent} style={{ width: width, height: height }}>
        <div className={styles.content}>
            <input
                className={styles.input}
                type={inputType === "password" ? pwdType : inputType}
                placeholder={hintText}
                style={{ fontSize: fontSize, color: textColor }}
                value={text}
                maxLength={maxLength}
                onChange={handleChange}
                onFocus={onFocus} />
        </div>
        <img
            className={styles.clearIcon}
            src="/static/images/ico_clear.png"
            width="20px"
            height="20px"
            style={{ visibility: text === '' ? 'hidden' : 'visible' }}
            onClick={clearText}
            alt=""
        />
        <img
            className={styles.pwdShow}
            src={pwdType === "password" ? "/static/images/ico_pwd_hide.png" : "/static/images/ico_pwd_show.png"}
            width="20px"
            height="15px"
            style={{ display: inputType === 'password' ? "block" : "none" }}
            onClick={switchPwdShowOrHide}
            alt=""
        />

    </div>;
}

export default InputWidget;