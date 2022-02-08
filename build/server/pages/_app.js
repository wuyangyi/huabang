(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./layout/Layout.tsx
var Layout = __webpack_require__(5618);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./layout/Error.tsx
/**
 * @author: leroy
 * @date: 2021/8/27 18:21
 * @description：_error
 */



const errTitle = {
  403: '403 | Sorry, you are not authorized to access this page.',
  404: '404 | Sorry, the page you visited does not exist.',
  500: '500 | Sorry, something went wrong.'
};

const ErrorPage = ({
  statusCode
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(Layout/* default */.Z, {
    title: statusCode && errTitle[statusCode],
    children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Result, {
      status: statusCode,
      title: statusCode
    })
  });
};

/* harmony default export */ const Error = (ErrorPage);
// EXTERNAL MODULE: ./styles/loading.module.scss
var loading_module = __webpack_require__(5614);
var loading_module_default = /*#__PURE__*/__webpack_require__.n(loading_module);
// EXTERNAL MODULE: ./utils/util.ts + 1 modules
var util = __webpack_require__(5505);
;// CONCATENATED MODULE: external "classnames"
const external_classnames_namespaceObject = require("classnames");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_namespaceObject);
;// CONCATENATED MODULE: ./layout/Loading.tsx
/**
 * @author: leroy
 * @date: 2021/8/28 15:03
 * @description：Loading
 */







const LoadingPage = ({
  isMobile,
  loading,
  delay
}) => {
  const {
    0: spinning,
    1: setSpinning
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    (async () => {
      if (!loading && delay) {
        await (0,util/* waitTime */.pQ)(delay);
        setSpinning(false);
      }

      setSpinning(loading);
    })();
  }, [loading]);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: external_classnames_default()({
      [(loading_module_default()).preloader]: true,
      [(loading_module_default()).show]: spinning,
      [(loading_module_default()).hidden]: !spinning
    }),
    children: isMobile ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (loading_module_default()).spinner,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (loading_module_default())["double-bounce1"]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (loading_module_default())["double-bounce2"]
      })]
    }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (loading_module_default())["cs-loader"],
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (loading_module_default())["cs-loader-inner"],
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "\u25CF"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "\u25CF"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "\u25CF"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "\u25CF"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "\u25CF"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "\u25CF"
        })]
      })
    })
  });
};

/* harmony default export */ const Loading = (LoadingPage);
// EXTERNAL MODULE: ./store/store.ts + 1 modules
var store = __webpack_require__(9341);
// EXTERNAL MODULE: ./utils/api.ts
var api = __webpack_require__(8981);
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(4722);
// EXTERNAL MODULE: ./components/login/login_dialog.module.scss
var login_dialog_module = __webpack_require__(4248);
var login_dialog_module_default = /*#__PURE__*/__webpack_require__.n(login_dialog_module);
// EXTERNAL MODULE: ./store/slices/loginSlice.ts
var loginSlice = __webpack_require__(5014);
// EXTERNAL MODULE: ./components/login/login/login_widget.module.scss
var login_widget_module = __webpack_require__(9117);
var login_widget_module_default = /*#__PURE__*/__webpack_require__.n(login_widget_module);
// EXTERNAL MODULE: ./components/widget/InputWidget.tsx
var InputWidget = __webpack_require__(407);
// EXTERNAL MODULE: ./components/widget/ActionButton.tsx
var ActionButton = __webpack_require__(962);
// EXTERNAL MODULE: ./styles/components/widget/get_code_widget.module.scss
var get_code_widget_module = __webpack_require__(9704);
var get_code_widget_module_default = /*#__PURE__*/__webpack_require__.n(get_code_widget_module);
;// CONCATENATED MODULE: ./components/widget/GetCodeWidget.tsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class GetCodeWidget extends external_react_.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      codeTime: 0
    });

    _defineProperty(this, "timerID", void 0);

    _defineProperty(this, "time", this.state.codeTime);

    _defineProperty(this, "onClick", () => {
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
    });
  }

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

  setCodeTime(time) {
    this.setState({
      codeTime: time
    });
  }

  render() {
    return /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: (get_code_widget_module_default()).codeText,
      style: {
        backgroundColor: this.state.codeTime <= 0 ? "#F1F7FF" : "#F1F2F3",
        color: this.state.codeTime <= 0 ? "#3388FF" : "#BABDC3",
        display: this.props.isHidden ? "none" : "block"
      },
      onClick: this.onClick,
      children: this.state.codeTime <= 0 ? "获取验证码" : this.state.codeTime + "秒重新获取"
    });
  }

}

/* harmony default export */ const widget_GetCodeWidget = (GetCodeWidget);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./store/services/user.ts
var user = __webpack_require__(9517);
// EXTERNAL MODULE: ./store/slices/userSlice.ts
var userSlice = __webpack_require__(3083);
// EXTERNAL MODULE: ./utils/aes.ts
var aes = __webpack_require__(4630);
;// CONCATENATED MODULE: ./components/login/login/LoginWidget.tsx














const LoginWidget = ({
  switchLogin
}) => {
  const {
    0: isCodeLogin,
    1: setCodeLogin
  } = (0,external_react_.useState)(true);
  const {
    0: phone,
    1: setPhone
  } = (0,external_react_.useState)('');
  const {
    0: code,
    1: setCode
  } = (0,external_react_.useState)('');
  const {
    0: password,
    1: setPassword
  } = (0,external_react_.useState)('');
  const {
    0: errorText,
    1: setErrorText
  } = (0,external_react_.useState)('');
  const dispatch = (0,external_react_redux_.useDispatch)();
  var isCanSend = true;
  /**
   * 切换登录方式
   * @param codeLogin 是否验证码登录
   */

  function switchLoginType(codeLogin) {
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


  const getCode = phone => {
    if (!isCanSend) {
      return false;
    }

    if (!phone) {
      setErrorText('请输入手机号');
      return false;
    }

    const error = (0,util/* checkPhone */.aH)(phone);

    if (error) {
      setErrorText(error);
      return false;
    }

    setErrorText('');
    const p = (0,aes/* encrypt */.H)(phone);
    console.log(p);
    dealPhoneCode(p);
    return true;
  };

  async function dealPhoneCode(p) {
    (0,user/* getPhoneCode */.Sy)({
      phone: p,
      type: 1
    }).then(data => {
      console.log(data);
    }).catch(err => {
      setErrorText("发送失败！请检查手机号格式是否正确");
      console.log("异常", err);
    });
  }

  const setCanSend = canSend => {
    isCanSend = canSend;
  };
  /**
   * 登录
   */


  const handleLogin = async () => {
    let error = (0,util/* checkPhone */.aH)(phone);

    if (error) {
      setErrorText(error);
      return;
    }

    if (isCodeLogin) {
      error = (0,util/* checkCode */.Pw)(code);

      if (error) {
        setErrorText(error);
        return;
      }
    } else {
      error = (0,util/* checkPwd */.ir)(password);

      if (error) {
        setErrorText(error);
        return;
      }
    }

    setErrorText('');
    var request;

    if (isCodeLogin) {
      request = (0,user/* codeLogin */.fQ)({
        phone: (0,aes/* encrypt */.H)(phone),
        code: (0,aes/* encrypt */.H)(code)
      });
    } else {
      request = (0,user/* pwdLogin */.k)({
        phone: (0,aes/* encrypt */.H)(phone),
        password: (0,aes/* encrypt */.H)(password)
      });
    }

    request.then(data => {
      console.log(data);

      if (data.status == 1) {
        dispatch((0,userSlice/* saveUser */.JR)(data));
        dispatch((0,loginSlice/* hideLogin */.hQ)()); // document.location.reload();
      } else {
        setErrorText(data.message);
      }
    }).catch(err => {
      console.log(err);
      setErrorText(isCodeLogin ? "账号或验证码错误" : "账号或密码错误");
    });
  };
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
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (login_widget_module_default()).loginWidget,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (login_widget_module_default()).loginStatus,
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: (login_widget_module_default()).loginStatusBt,
        style: {
          color: isCodeLogin ? '#3388FF' : '#435b87',
          borderBottomColor: isCodeLogin ? '#3388FF' : 'transparent'
        },
        onClick: () => {
          switchLoginType(true);
        },
        children: "\u9A8C\u8BC1\u7801\u767B\u5F55"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: (login_widget_module_default()).loginStatusBt,
        style: {
          marginLeft: "70px",
          color: isCodeLogin ? '#435b87' : '#3388FF',
          borderBottomColor: isCodeLogin ? 'transparent' : '#3388FF'
        },
        onClick: () => {
          switchLoginType(false);
        },
        children: "\u5BC6\u7801\u767B\u5F55"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (login_widget_module_default()).content,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (login_widget_module_default()).errorText,
        style: {
          opacity: errorText ? 1 : 0
        },
        children: errorText
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (login_widget_module_default()).inputWidget,
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/static/images/ico_login_phone.png",
          height: "20px",
          alt: ""
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (login_widget_module_default()).inputContent,
          children: /*#__PURE__*/jsx_runtime_.jsx(InputWidget/* default */.Z, {
            height: "36px",
            hintText: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7",
            inputType: "tel",
            onTextChange: key => {
              setPhone(key);
            }
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(widget_GetCodeWidget, {
          phone: phone,
          getCode: getCode,
          isHidden: !isCodeLogin,
          setCanSend: setCanSend
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (login_widget_module_default()).inputWidget,
        style: {
          visibility: isCodeLogin ? 'visible' : 'hidden',
          height: isCodeLogin ? "36px" : '0px',
          margin: "0"
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/static/images/ico_login_code.png",
          height: "20px",
          alt: ""
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (login_widget_module_default()).inputContent,
          children: /*#__PURE__*/jsx_runtime_.jsx(InputWidget/* default */.Z, {
            hintText: "\u8F93\u5165\u9A8C\u8BC1\u7801",
            inputType: "text",
            onTextChange: key => {
              setCode(key);
            }
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (login_widget_module_default()).inputWidget,
        style: {
          visibility: isCodeLogin ? 'hidden' : 'visible',
          height: isCodeLogin ? "0px" : "36px",
          margin: "0"
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/static/images/ico_login_password.png",
          height: "20px",
          alt: ""
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (login_widget_module_default()).inputContent,
          children: /*#__PURE__*/jsx_runtime_.jsx(InputWidget/* default */.Z, {
            hintText: "\u8F93\u5165\u5BC6\u7801 \uFF086-20\u4F4D\u6570\u5B57\u548C\u5B57\u6BCD\uFF09",
            inputType: "password",
            onTextChange: key => {
              setPassword(key);
            }
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(ActionButton/* default */.Z, {
        className: (login_widget_module_default()).loginBtn,
        value: "\u767B  \u5F55",
        onClick: handleLogin
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (login_widget_module_default()).hintContent,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (login_widget_module_default()).loginHint,
          style: {
            visibility: isCodeLogin ? 'visible' : 'hidden'
          },
          children: "\u672A\u6CE8\u518C\u7684\u624B\u673A\u53F7\uFF0C\u9ED8\u8BA4\u6CE8\u518C\u7ED1\u5B9A\u3002"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (login_widget_module_default()).forgetPwd,
          style: {
            visibility: isCodeLogin ? 'hidden' : 'visible'
          },
          onClick: goToForgetPwd,
          children: "\u5FD8\u8BB0\u5BC6\u7801"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (login_widget_module_default()).otherLogin,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (login_widget_module_default()).qqLogin
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (login_widget_module_default()).wechatLogin
        })]
      })]
    })]
  });
};

/* harmony default export */ const login_LoginWidget = (LoginWidget);
// EXTERNAL MODULE: ./components/login/forget_pwd/forget_pwd.module.scss
var forget_pwd_module = __webpack_require__(4453);
var forget_pwd_module_default = /*#__PURE__*/__webpack_require__.n(forget_pwd_module);
// EXTERNAL MODULE: ./components/login/forget_pwd/call_us/call_us.module.scss
var call_us_module = __webpack_require__(6245);
var call_us_module_default = /*#__PURE__*/__webpack_require__.n(call_us_module);
;// CONCATENATED MODULE: ./components/login/forget_pwd/call_us/CallUs.tsx




const CallUs = ({
  goLogin
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (call_us_module_default()).bodyContent,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (call_us_module_default()).content,
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: (call_us_module_default()).email,
        children: "\u8054\u7CFB\u90AE\u7BB1\uFF1A1207711838@qq.com"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: (call_us_module_default()).hint,
        children: "\u6536\u5230\u60A8\u7684\u90AE\u4EF6\u540E\uFF0C\u6211\u4EEC\u5C06\u7B2C\u4E00\u65F6\u95F4\u4E3A\u60A8\u670D\u52A1\uFF01"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: (call_us_module_default()).goLogin,
        onClick: goLogin,
        children: "\u8FD4\u56DE\u767B\u5F55\u9875"
      })
    })]
  });
};

/* harmony default export */ const call_us_CallUs = (CallUs);
// EXTERNAL MODULE: ./components/login/forget_pwd/find_pwd/find_pwd_success.module.scss
var find_pwd_success_module = __webpack_require__(8217);
var find_pwd_success_module_default = /*#__PURE__*/__webpack_require__.n(find_pwd_success_module);
;// CONCATENATED MODULE: ./components/login/forget_pwd/find_pwd/FindPwdSuccess.tsx
function FindPwdSuccess_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class FindPwdSuccess extends external_react_.Component {
  constructor(...args) {
    super(...args);

    FindPwdSuccess_defineProperty(this, "state", {
      time: 3
    });

    FindPwdSuccess_defineProperty(this, "timerID", void 0);

    FindPwdSuccess_defineProperty(this, "times", 3);
  }

  startTime() {
    this.timerID = setInterval(() => {
      this.times--;
      this.setState({
        time: this.times
      });

      if (this.times < 0) {
        clearInterval(this.timerID);
        this.props.goLogin();
      }
    }, 1000);
  }

  componentDidMount() {
    this.startTime();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (find_pwd_success_module_default()).findPwd,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (find_pwd_success_module_default()).findContent,
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/static/images/ico_success.png",
          width: 40,
          height: 40,
          alt: ""
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (find_pwd_success_module_default()).hint,
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "\u5BC6\u7801\u8BBE\u7F6E\u6210\u529F"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            style: {
              marginTop: '10px'
            },
            children: "\u4F60\u53EF\u4EE5\u4F7F\u7528\u65B0\u5BC6\u7801\u8FDB\u884C\u767B\u5F55"
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(ActionButton/* default */.Z, {
        className: (find_pwd_success_module_default()).loginBtn,
        value: "\u7ACB\u5373\u767B\u5F55",
        onClick: this.props.goLogin
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: (find_pwd_success_module_default()).jumpHint,
        children: ["\u9875\u9762\u5C06\u5728", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: (find_pwd_success_module_default()).jumpTime,
          children: [this.state.time, "s"]
        }), "\u540E\u81EA\u52A8\u8DF3\u8F6C\u81F3\u767B\u5F55\u9875"]
      })]
    });
  }

}
;// CONCATENATED MODULE: ./components/login/forget_pwd/ForgetPwdWidget.tsx












const ForgetPwdWidget = ({
  switchLogin
}) => {
  const {
    0: phone,
    1: setPhone
  } = (0,external_react_.useState)('');
  const {
    0: code,
    1: setCode
  } = (0,external_react_.useState)('');
  const {
    0: password,
    1: setPassword
  } = (0,external_react_.useState)('');
  const {
    0: errorText,
    1: setErrorText
  } = (0,external_react_.useState)('');
  const {
    0: showType,
    1: setShowType
  } = (0,external_react_.useState)(0);
  const dispatch = (0,external_react_redux_.useDispatch)();
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
  };

  const showCallUs = () => {
    if (showType !== 1) {
      setShowType(1);
    }
  };
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

    const error = (0,util/* checkPhone */.aH)(phone);

    if (error) {
      setErrorText(error);
      return false;
    }

    setErrorText('');
    return true;
  };

  const setCanSend = canSend => {
    isCanSend = canSend;
  };
  /**
   * 提交
   */


  const handleSubmit = () => {
    let error = (0,util/* checkPhone */.aH)(phone);

    if (error) {
      setErrorText(error);
      return;
    }

    error = (0,util/* checkCode */.Pw)(code);

    if (error) {
      setErrorText(error);
      return;
    }

    error = (0,util/* checkPwd */.ir)(password);

    if (error) {
      setErrorText(error);
      return;
    }

    setErrorText('');
    console.log("提交请求");
    setShowType(2);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (forget_pwd_module_default()).forgetWidget,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (forget_pwd_module_default()).forgetWidgetContent,
      style: {
        left: showType === 0 ? '0' : '-100%',
        opacity: showType === 0 ? '1' : '0.4'
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (forget_pwd_module_default()).title,
        children: "\u91CD\u7F6E\u5BC6\u7801"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (forget_pwd_module_default()).errorText,
        style: {
          opacity: errorText ? 1 : 0
        },
        children: errorText
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (forget_pwd_module_default()).inputWidget,
        style: {
          marginTop: "40px"
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/static/images/ico_login_phone.png",
          height: "20px",
          alt: ""
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (forget_pwd_module_default()).inputContent,
          children: /*#__PURE__*/jsx_runtime_.jsx(InputWidget/* default */.Z, {
            hintText: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7",
            inputType: "tel",
            onTextChange: key => {
              setPhone(key);
            }
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(widget_GetCodeWidget, {
          phone: phone,
          getCode: getCode,
          setCanSend: setCanSend
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (forget_pwd_module_default()).inputWidget,
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/static/images/ico_login_code.png",
          height: "20px",
          alt: ""
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (forget_pwd_module_default()).inputContent,
          children: /*#__PURE__*/jsx_runtime_.jsx(InputWidget/* default */.Z, {
            hintText: "\u8F93\u5165\u9A8C\u8BC1\u7801",
            inputType: "text",
            onTextChange: key => {
              setCode(key);
            }
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (forget_pwd_module_default()).inputWidget,
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/static/images/ico_login_password.png",
          height: "20px",
          alt: ""
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (forget_pwd_module_default()).inputContent,
          children: /*#__PURE__*/jsx_runtime_.jsx(InputWidget/* default */.Z, {
            hintText: "\u8F93\u5165\u5BC6\u7801 \uFF086-20\u4F4D\u6570\u5B57\u548C\u5B57\u6BCD\uFF09",
            inputType: "password",
            onTextChange: key => {
              setPassword(key);
            }
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(ActionButton/* default */.Z, {
        className: (forget_pwd_module_default()).loginBtn,
        value: "\u5B8C  \u6210",
        onClick: handleSubmit
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (forget_pwd_module_default()).hintContent,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "\u624B\u673A\u53F7\u65E0\u6CD5\u63A5\u53D7\u9A8C\u8BC1\u7801\uFF1F"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (forget_pwd_module_default()).contactUs,
          onClick: showCallUs,
          children: "\u8054\u7CFB\u6211\u4EEC"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: (forget_pwd_module_default()).goLogin,
        onClick: goLogin,
        children: "\u8FD4\u56DE\u767B\u5F55\u9875"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (forget_pwd_module_default()).callUs,
      style: {
        left: showType === 1 ? '0' : '100%',
        opacity: showType === 1 ? '1' : '0.4'
      },
      children: showType === 1 && /*#__PURE__*/jsx_runtime_.jsx(call_us_CallUs, {
        goLogin: goLogin
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (forget_pwd_module_default()).callUs,
      style: {
        left: showType === 2 ? '0' : '100%',
        opacity: showType === 2 ? '1' : '0.4'
      },
      children: showType === 2 && /*#__PURE__*/jsx_runtime_.jsx(FindPwdSuccess, {
        goLogin: goLogin
      })
    })]
  });
};

/* harmony default export */ const forget_pwd_ForgetPwdWidget = (ForgetPwdWidget);
;// CONCATENATED MODULE: ./components/login/LoginDialog.tsx









const LoginDialog = () => {
  const dispatch = (0,store/* useAppDispatch */.TL)();
  const {
    0: showForgetPwd,
    1: setShowForgetPwd
  } = (0,external_react_.useState)(false);
  /**
   * 关闭登录弹窗
   */

  const closeLogin = () => {
    dispatch((0,loginSlice/* hideLogin */.hQ)());
  };
  /**
   * 切换登录或选择密码
   * @param showForget 
   */


  const switchLogin = showForget => {
    if (showForget != showForgetPwd) {
      setShowForgetPwd(showForget);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (login_dialog_module_default()).login,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (login_dialog_module_default()).loginBody,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (login_dialog_module_default()).leftContent,
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          className: (login_dialog_module_default()).logo,
          src: "/static/images/login_logo.png",
          width: "140px",
          alt: ""
        }), /*#__PURE__*/jsx_runtime_.jsx("img", {
          className: (login_dialog_module_default()).downCode,
          src: "/static/images/app_down.png",
          width: "160px",
          alt: ""
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: (login_dialog_module_default()).downHint,
          children: "\u4E0B\u8F7D\u4E92\u5E2EAPP"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: (login_dialog_module_default()).downHint,
          children: "\u6709\u66F4\u591A\u529F\u80FD\u7B49\u7740\u4F60"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (login_dialog_module_default()).rightContent,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (login_dialog_module_default()).loginWidget,
          style: {
            left: showForgetPwd ? '-100%' : '0',
            opacity: showForgetPwd ? '0.4' : '1'
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(login_LoginWidget, {
            switchLogin: switchLogin
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (login_dialog_module_default()).loginWidget,
          style: {
            left: showForgetPwd ? '0' : '100%',
            opacity: showForgetPwd ? '1' : '0.4'
          },
          children: showForgetPwd && /*#__PURE__*/jsx_runtime_.jsx(forget_pwd_ForgetPwdWidget, {
            switchLogin: switchLogin
          })
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("img", {
      className: (login_dialog_module_default()).dialogClose,
      src: "/static/images/ico_white_close.png",
      width: "30px",
      onClick: closeLogin,
      alt: ""
    })]
  });
};

/* harmony default export */ const login_LoginDialog = (LoginDialog);
;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @author: leroy
 * @date: 2021/8/20 20:30
 * @description：_app
 */
















function MyApp({
  Component,
  pageProps
}) {
  const router = (0,router_.useRouter)();
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    const handleStart = url => {
      console.log(`Loading: ${url}`); // 路由切换loading

      setLoading(true);
    };

    const handleStop = () => {
      setLoading(false); // 路由切换清空axios请求池

      (0,api/* clearPending */.w)();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, []);

  if ([403, 404, 500].includes(pageProps.statusCode)) {
    return /*#__PURE__*/jsx_runtime_.jsx(Error, {
      statusCode: pageProps.statusCode
    });
  }

  const isShowLogin = (0,store/* useAppSelector */.CG)(state => state.login.isShowLogin);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        charSet: "utf-8"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "Author",
        content: "Leroy"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "baidu-site-verification",
        content: "uGgzMZ4ZfV"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge,chrome=1"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        httpEquiv: "cleartype",
        content: "on"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "HandheldFriENDly",
        content: "True"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, shrink-to-fit=no, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        content: "yes",
        name: "apple-mobile-web-app-capable"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        content: "yes",
        name: "apple-touch-fullscreen"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_1365762_tc49n8njksp.css"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Loading, {
      isMobile: pageProps.isMobile,
      loading: loading
    }), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps)), isShowLogin && /*#__PURE__*/jsx_runtime_.jsx(login_LoginDialog, {})]
  });
} // Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//


MyApp.getInitialProps = store/* default.getInitialAppProps */.ZP.getInitialAppProps(store => async ({
  Component,
  ctx
}) => {
  let userAgent;

  if (ctx.req) {
    console.log('------服务端------');

    if (!store.getState().user.isLogin) {
      await store.dispatch((0,userSlice/* fetchAutoLogin */.hG)({}));
    }

    userAgent = ctx.req.headers['user-agent'];
  } else {
    userAgent = navigator.userAgent;
  }

  return {
    pageProps: _objectSpread(_objectSpread({}, Component.getInitialProps ? await Component.getInitialProps(_objectSpread(_objectSpread({}, ctx), {}, {
      store
    })) : {}), {}, {
      isMobile: /Mobile/gi.test(userAgent)
    })
  };
});
/* harmony default export */ const _app = (store/* default.withRedux */.ZP.withRedux(MyApp));

/***/ }),

/***/ 6245:
/***/ ((module) => {

// Exports
module.exports = {
	"bodyContent": "call_us_bodyContent__3UDoT",
	"content": "call_us_content__2s3Yf",
	"email": "call_us_email__m80jw",
	"hint": "call_us_hint__2jVPe",
	"goLogin": "call_us_goLogin__3IavW"
};


/***/ }),

/***/ 8217:
/***/ ((module) => {

// Exports
module.exports = {
	"findPwd": "find_pwd_success_findPwd__2SWIq",
	"findContent": "find_pwd_success_findContent__2x-sp",
	"hint": "find_pwd_success_hint__2DwJQ",
	"loginBtn": "find_pwd_success_loginBtn__1lnX8",
	"jumpHint": "find_pwd_success_jumpHint__148aS",
	"jumpTime": "find_pwd_success_jumpTime__ZwA-0"
};


/***/ }),

/***/ 4453:
/***/ ((module) => {

// Exports
module.exports = {
	"forgetWidget": "forget_pwd_forgetWidget__2TsZ_",
	"forgetWidgetContent": "forget_pwd_forgetWidgetContent__3A53-",
	"title": "forget_pwd_title__3QbYf",
	"errorText": "forget_pwd_errorText__2lDCg",
	"inputWidget": "forget_pwd_inputWidget__1_CtP",
	"inputContent": "forget_pwd_inputContent__3KqaE",
	"loginBtn": "forget_pwd_loginBtn__2XwT9",
	"hintContent": "forget_pwd_hintContent__-W8XO",
	"contactUs": "forget_pwd_contactUs__DWhDM",
	"goLogin": "forget_pwd_goLogin__1nxNS",
	"callUs": "forget_pwd_callUs__1Dx26"
};


/***/ }),

/***/ 9117:
/***/ ((module) => {

// Exports
module.exports = {
	"loginWidget": "login_widget_loginWidget__20Xqf",
	"loginStatus": "login_widget_loginStatus__3UT1Z",
	"loginStatusBt": "login_widget_loginStatusBt__2GIDq",
	"content": "login_widget_content__2L4pp",
	"errorText": "login_widget_errorText__30Tcy",
	"inputWidget": "login_widget_inputWidget__inwQG",
	"inputContent": "login_widget_inputContent__bfrNA",
	"loginBtn": "login_widget_loginBtn__2PmAT",
	"hintContent": "login_widget_hintContent__CG32H",
	"loginHint": "login_widget_loginHint__3fFLY",
	"forgetPwd": "login_widget_forgetPwd__2pqtn",
	"otherLogin": "login_widget_otherLogin__1J3uI",
	"qqLogin": "login_widget_qqLogin__1v0c4",
	"wechatLogin": "login_widget_wechatLogin__2FcfS"
};


/***/ }),

/***/ 4248:
/***/ ((module) => {

// Exports
module.exports = {
	"login": "login_dialog_login__24vd_",
	"loginBody": "login_dialog_loginBody__2WigP",
	"leftContent": "login_dialog_leftContent__1_IjG",
	"logo": "login_dialog_logo__1Vk36",
	"downCode": "login_dialog_downCode__2obLB",
	"downHint": "login_dialog_downHint__1hxyT",
	"rightContent": "login_dialog_rightContent__3zV7_",
	"loginWidget": "login_dialog_loginWidget__23PVZ",
	"dialogClose": "login_dialog_dialogClose__x49wE"
};


/***/ }),

/***/ 9704:
/***/ ((module) => {

// Exports
module.exports = {
	"codeText": "get_code_widget_codeText__2vC_r"
};


/***/ }),

/***/ 5614:
/***/ ((module) => {

// Exports
module.exports = {
	"preloader": "loading_preloader__3kUeJ",
	"show": "loading_show__3_pQt",
	"hidden": "loading_hidden__1R7KS",
	"cs-loader": "loading_cs-loader__2q9iR",
	"cs-loader-inner": "loading_cs-loader-inner__38mIa",
	"lol": "loading_lol__KLHLb",
	"spinner": "loading_spinner__3CKi-",
	"double-bounce1": "loading_double-bounce1__2xD3s",
	"double-bounce2": "loading_double-bounce2__3RuQx",
	"bounce": "loading_bounce__ouiN4"
};


/***/ }),

/***/ 4722:
/***/ (() => {



/***/ }),

/***/ 6139:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 953:
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ 2376:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 419:
/***/ ((module) => {

"use strict";
module.exports = require("crypto-js");

/***/ }),

/***/ 2744:
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6850:
/***/ ((module) => {

"use strict";
module.exports = require("qs");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5287:
/***/ ((module) => {

"use strict";
module.exports = require("react-cookies");

/***/ }),

/***/ 79:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7561:
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [707,950], () => (__webpack_exec__(3249)));
module.exports = __webpack_exports__;

})();