import type { AsyncThunk } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { lowerCase } from 'lodash';
import staticData from './staticData';

export const waitTime = (time: number = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};

/**
 *
 * @param name action名
 * @param fn 请求函数
 * @returns thunk包裹的action
 * @S 包裹的函数的类型，如果不带参数的话，要填void，不然编译器会报错
 */
export const thunkWrapper = <T = any, S = any>(name: string, fn: (params?: any) => Promise<T>) => {
    return createAsyncThunk(name, async (params?: any) => {
        if (params) {
            const data = await fn(params!);
            return data;
        } else {
            const data = await fn();
            return data;
        }
    }) as AsyncThunk<unknown, S, Record<string, any>>;
};

/**
 * 获取最多两位有效小数
 * @param d 
 * @returns 
 */
export const getMaxTwoZero = (d: number) => {
    return Math.round(d * 100) / 100
}

/**
 * 获取互帮显示的金额
 * @param min 最小金额
 * @param max 最大金额
 * @returns 
 */
export const getHelpMoney = (min: number, max: number) => {
    if (max == 0) {
        if (min == 0) {
            return "待定";
        } else {
            return "￥" + getMaxTwoZero(min) + "元";
        }
    } else {
        return "￥" + getMaxTwoZero(min) + "-" + getMaxTwoZero(max) + "元";
    }
}

/**
 * 根据当前获取时间字符串
 * @param time 时间戳
 * @param defaultValue 默认值
 */
export const getTimeStringByNow = (time: number, defaultValue: string) => {
    if (time <= 0) {
        return defaultValue;
    }
    let date = new Date(time);
    if (date == null) {
        return defaultValue;
    }
    let nowDate = new Date();
    let yesDate = new Date(nowDate.getTime() - (24 * 60 * 60 * 1000));
    let tomorrowDate = new Date(nowDate.getTime() + (24 * 60 * 60 * 1000));
    if (nowDate.getFullYear() === date.getFullYear()
        && nowDate.getMonth() === date.getMonth()
        && nowDate.getDate() === date.getDate()) {
        // 同一天
        return AddZ(date.getHours()) + ":" + AddZ(date.getMinutes());
    } else if (yesDate.getFullYear() === date.getFullYear()
        && yesDate.getMonth() === date.getMonth()
        && yesDate.getDate() === date.getDate()) {
        // 昨天
        return "昨天 " + AddZ(date.getHours()) + ":" + AddZ(date.getMinutes());
    } else if (tomorrowDate.getFullYear() === date.getFullYear()
        && tomorrowDate.getMonth() === date.getMonth()
        && tomorrowDate.getDate() === date.getDate()) {
        // 明天
        return "明天 " + AddZ(date.getHours()) + ":" + AddZ(date.getMinutes());
    } else if (nowDate.getFullYear() === date.getFullYear()) {
        // 同一年
        return AddZ(date.getMonth()) + "月" + AddZ(date.getDate()) + "日 " + AddZ(date.getHours()) + ":" + AddZ(date.getMinutes());
    }
    return date.getFullYear() + "年" + AddZ(date.getMonth()) + "月" + AddZ(date.getDate()) + "日 " + AddZ(date.getHours()) + ":" + AddZ(date.getMinutes());
}

/**
 * 数字小于10 前面补0
 * @param num 
 * @returns 
 */
function AddZ(num: number) {
    if (num < 10) {
        return "0" + num;
    }
    return "" + num;
}

/**
 * 手机号验证
 * @param phone 手机号
 */
export const checkPhone = (phone: string) => {
    if (!phone) {
        return '请输入手机号';
    }
    var myreg = /^1\d{10}$/;
    if (!myreg.test(phone)) {
        console.log("手机号格式错误");
        return '手机号格式错误';
    }
    return '';
}

/**
 * 验证码验证
 * @param code 
 * @returns 
 */
export const checkCode = (code: string) => {
    if (!code) {
        return '请先获取验证码';
    }
    var myreg = /^\d{4,6}$/;
    if (!myreg.test(code)) {
        return '请输入正确的验证码';
    }
    return '';
}

/**
 * 验证密码
 * @param pwd 
 * @returns 
 */
export const checkPwd = (pwd: string) => {
    if (!pwd) {
        return '请输入密码';
    }
    if (pwd.length < 6 || pwd.length > 20) {
        return '请输入6-20位密码';
    }
    var myreg = /^(?=.*[a-zA-Z])(?=.*\d).{6,20}$/;
    if (!myreg.test(pwd)) {
        return '密码格式错误';
    }
    return '';
}

/**
 * 获取滚动条宽度
 * @returns 
 */
export function getScrollbarWidth() {
    var oP = document.createElement('p'),
        styles = {
            width: '100%',
            height: '100%'
        }, i, clientWidth1, clientWidth2, scrollbarWidth;
    for (i in styles) oP.style[i] = styles[i];
    document.body.appendChild(oP);
    clientWidth1 = oP.clientWidth;
    oP.style.overflowY = 'scroll';
    clientWidth2 = oP.clientWidth;
    scrollbarWidth = clientWidth1 - clientWidth2;
    oP.remove();
    return scrollbarWidth;
}

// 根据字符串首字符ascii值获取颜色
export function getColorByString(key: string) {
    let code = key.charCodeAt(0);
    return staticData.colorList[code % staticData.colorList.length];
}

