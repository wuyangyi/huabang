let domain = process.env.API_HOST || '';
// if (typeof window === 'undefined') {
//     domain = domain.replace(/^https/i, 'http');
// }

const Url = {
    staticHost: process.env.STATIC_HOST,
    domain,
    commit: "commit", //学校分类城市等信息获取
    getCircleType: "get_circle_type", //获得圈子类别

    getCode: "get_code", //获取验证码
    pwdLogin: "login", //密码登录
    codeLogin: "quick_login", //验证码登录
    autoLogin: "auto_login", //自动登录
    userInfo: "user/info", //用户信息

    userCircleList: "circle/user_join", //用户加入的圈子
    circleList: "circle/list", //圈子列表

    helperList: "helper/list", //求助列表
    userHelpList: "helper/user/list", // 用户求助列表

};
export default Url;
