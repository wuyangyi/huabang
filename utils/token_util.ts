import cookie from 'react-cookies'
export const tokenKey = "user_token";

/**
 * 保存token
 * @param token 
 */
export const saveToken = (token: string) => {
    // console.log("保存token", token);
    cookie.save(tokenKey, token);
}

/**
 * 移除token
 */
export const removeToken = () => {
    cookie.remove(tokenKey);
}

/**
 * 获取token
 * @returns 
 */
export const getToken = () => {
    const token = cookie.load(tokenKey);
    console.log("获取token", token);
    return token == null ? '' : token;
}