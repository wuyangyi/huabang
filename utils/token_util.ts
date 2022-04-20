import Cookies from "js-cookie";

export const tokenKey = "user_token";

/**
 * 保存token
 * @param token 
 */
export const saveToken = (token: string) => {
    // console.log("保存token", token);
    Cookies.set(tokenKey, token, {
      expires: 30,
    });
}

/**
 * 移除token
 */
export const removeToken = () => {
    Cookies.remove(tokenKey);
}

/**
 * 获取token
 * @returns 
 */
export const getToken = () => {
    const token = Cookies.get(tokenKey);
    console.log("获取token", token);
    return token || '';
}