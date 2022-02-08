import { NextPage } from "next";
import styles from '../../styles/components/widget/action_button.module.scss';

interface ButtonProp {
    value?: string,
    onClick?: () => void
    className?: string,
}

/**
 * 按钮  className设置了背景色后，:hover和:active得自定义
 */
const ActionButton: NextPage<ButtonProp> = (
    {
        onClick,
        value = "确 定",
        className = '',
    }
) => {

    return <button className={[styles.buttonStyle, className].join(' ')}
        onClick={onClick}
    >{value}</button>
}

export default ActionButton;