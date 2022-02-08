(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/login/LoginDialog.tsx":
/*!******************************************!*\
  !*** ./components/login/LoginDialog.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _login_dialog_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login_dialog.module.scss */ "./components/login/login_dialog.module.scss");
/* harmony import */ var _login_dialog_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_login_dialog_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ "./store/store.ts");
/* harmony import */ var _store_slices_loginSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/slices/loginSlice */ "./store/slices/loginSlice.ts");
/* harmony import */ var _login_LoginWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/LoginWidget */ "./components/login/login/LoginWidget.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _forget_pwd_ForgetPwdWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forget_pwd/ForgetPwdWidget */ "./components/login/forget_pwd/ForgetPwdWidget.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\components\\login\\LoginDialog.tsx";








const LoginDialog = () => {
  const dispatch = (0,_store_store__WEBPACK_IMPORTED_MODULE_0__.useAppDispatch)();
  const {
    0: showForgetPwd,
    1: setShowForgetPwd
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  /**
   * 关闭登录弹窗
   */

  const closeLogin = () => {
    dispatch((0,_store_slices_loginSlice__WEBPACK_IMPORTED_MODULE_1__.hideLogin)());
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: (_login_dialog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().login),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: (_login_dialog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().loginBody),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_login_dialog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().leftContent),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
          className: (_login_dialog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().logo),
          src: "/static/images/login_logo.png",
          width: "140px",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
          className: (_login_dialog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().downCode),
          src: "/static/images/app_down.png",
          width: "160px",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          className: (_login_dialog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().downHint),
          children: "\u4E0B\u8F7D\u4E92\u5E2EAPP"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          className: (_login_dialog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().downHint),
          children: "\u6709\u66F4\u591A\u529F\u80FD\u7B49\u7740\u4F60"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_login_dialog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().rightContent),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_login_dialog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().loginWidget),
          style: {
            left: showForgetPwd ? '-100%' : '0',
            opacity: showForgetPwd ? '0.4' : '1'
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_login_LoginWidget__WEBPACK_IMPORTED_MODULE_2__.default, {
            switchLogin: switchLogin
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_login_dialog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().loginWidget),
          style: {
            left: showForgetPwd ? '0' : '100%',
            opacity: showForgetPwd ? '1' : '0.4'
          },
          children: showForgetPwd && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_forget_pwd_ForgetPwdWidget__WEBPACK_IMPORTED_MODULE_4__.default, {
            switchLogin: switchLogin
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 46
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
      className: (_login_dialog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dialogClose),
      src: "/static/images/ico_white_close.png",
      width: "30px",
      onClick: closeLogin,
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginDialog);

/***/ }),

/***/ "./components/login/forget_pwd/ForgetPwdWidget.tsx":
/*!*********************************************************!*\
  !*** ./components/login/forget_pwd/ForgetPwdWidget.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/util */ "./utils/util.ts");
/* harmony import */ var _widget_GetCodeWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widget/GetCodeWidget */ "./components/widget/GetCodeWidget.tsx");
/* harmony import */ var _widget_InputWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widget/InputWidget */ "./components/widget/InputWidget.tsx");
/* harmony import */ var _forget_pwd_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forget_pwd.module.scss */ "./components/login/forget_pwd/forget_pwd.module.scss");
/* harmony import */ var _forget_pwd_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_forget_pwd_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _widget_ActionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widget/ActionButton */ "./components/widget/ActionButton.tsx");
/* harmony import */ var _call_us_CallUs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./call_us/CallUs */ "./components/login/forget_pwd/call_us/CallUs.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _find_pwd_FindPwdSuccess__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./find_pwd/FindPwdSuccess */ "./components/login/forget_pwd/find_pwd/FindPwdSuccess.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\components\\login\\forget_pwd\\ForgetPwdWidget.tsx";











const ForgetPwdWidget = ({
  switchLogin
}) => {
  const {
    0: phone,
    1: setPhone
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: code,
    1: setCode
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: errorText,
    1: setErrorText
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: showType,
    1: setShowType
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
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

    const error = (0,_utils_util__WEBPACK_IMPORTED_MODULE_1__.checkPhone)(phone);

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
    let error = (0,_utils_util__WEBPACK_IMPORTED_MODULE_1__.checkPhone)(phone);

    if (error) {
      setErrorText(error);
      return;
    }

    error = (0,_utils_util__WEBPACK_IMPORTED_MODULE_1__.checkCode)(code);

    if (error) {
      setErrorText(error);
      return;
    }

    error = (0,_utils_util__WEBPACK_IMPORTED_MODULE_1__.checkPwd)(password);

    if (error) {
      setErrorText(error);
      return;
    }

    setErrorText('');
    console.log("提交请求");
    setShowType(2);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    className: (_forget_pwd_module_scss__WEBPACK_IMPORTED_MODULE_9___default().forgetWidget),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: (_forget_pwd_module_scss__WEBPACK_IMPORTED_MODULE_9___default().forgetWidgetContent),
      style: {
        left: showType === 0 ? '0' : '-100%',
        opacity: showType === 0 ? '1' : '0.4'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: (_forget_pwd_module_scss__WEBPACK_IMPORTED_MODULE_9___default().title),
        children: "\u91CD\u7F6E\u5BC6\u7801"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: (_forget_pwd_module_scss__WEBPACK_IMPORTED_MODULE_9___default().errorText),
        style: {
          opacity: errorText ? 1 : 0
        },
        children: errorText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: (_forget_pwd_module_scss__WEBPACK_IMPORTED_MODULE_9___default().inputWidget),
        style: {
          marginTop: "40px"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("img", {
          src: "/static/images/ico_login_phone.png",
          height: "20px",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: (_forget_pwd_module_scss__WEBPACK_IMPORTED_MODULE_9___default().inputContent),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_widget_InputWidget__WEBPACK_IMPORTED_MODULE_3__.default, {
            hintText: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7",
            inputType: "tel",
            onTextChange: key => {
              setPhone(key);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_widget_GetCodeWidget__WEBPACK_IMPORTED_MODULE_2__.default, {
          phone: phone,
          getCode: getCode,
          setCanSend: setCanSend
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: (_forget_pwd_module_scss__WEBPACK_IMPORTED_MODULE_9___default().inputWidget),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("img", {
          src: "/static/images/ico_login_code.png",
          height: "20px",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: (_forget_pwd_module_scss__WEBPACK_IMPORTED_MODULE_9___default().inputContent),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_widget_InputWidget__WEBPACK_IMPORTED_MODULE_3__.default, {
            hintText: "\u8F93\u5165\u9A8C\u8BC1\u7801",
            inputType: "text",
            onTextChange: key => {
              setCode(key);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: (_forget_pwd_module_scss__WEBPACK_IMPORTED_MODULE_9___default().inputWidget),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("img", {
          src: "/static/images/ico_login_password.png",
          height: "20px",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: (_forget_pwd_module_scss__WEBPACK_IMPORTED_MODULE_9___default().inputContent),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_widget_InputWidget__WEBPACK_IMPORTED_MODULE_3__.default, {
            hintText: "\u8F93\u5165\u5BC6\u7801 \uFF086-20\u4F4D\u6570\u5B57\u548C\u5B57\u6BCD\uFF09",
            inputType: "password",
            onTextChange: key => {
              setPassword(key);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_widget_ActionButton__WEBPACK_IMPORTED_MODULE_4__.default, {
        className: (_forget_pwd_module_scss__WEBPACK_IMPORTED_MODULE_9___default().loginBtn),
        value: "\u5B8C  \u6210",
        onClick: handleSubmit
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: (_forget_pwd_module_scss__WEBPACK_IMPORTED_MODULE_9___default().hintContent),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
          children: "\u624B\u673A\u53F7\u65E0\u6CD5\u63A5\u53D7\u9A8C\u8BC1\u7801\uFF1F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
          className: (_forget_pwd_module_scss__WEBPACK_IMPORTED_MODULE_9___default().contactUs),
          onClick: showCallUs,
          children: "\u8054\u7CFB\u6211\u4EEC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
        className: (_forget_pwd_module_scss__WEBPACK_IMPORTED_MODULE_9___default().goLogin),
        onClick: goLogin,
        children: "\u8FD4\u56DE\u767B\u5F55\u9875"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: (_forget_pwd_module_scss__WEBPACK_IMPORTED_MODULE_9___default().callUs),
      style: {
        left: showType === 1 ? '0' : '100%',
        opacity: showType === 1 ? '1' : '0.4'
      },
      children: showType === 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_call_us_CallUs__WEBPACK_IMPORTED_MODULE_5__.default, {
        goLogin: goLogin
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 35
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: (_forget_pwd_module_scss__WEBPACK_IMPORTED_MODULE_9___default().callUs),
      style: {
        left: showType === 2 ? '0' : '100%',
        opacity: showType === 2 ? '1' : '0.4'
      },
      children: showType === 2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_find_pwd_FindPwdSuccess__WEBPACK_IMPORTED_MODULE_7__.default, {
        goLogin: goLogin
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 35
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForgetPwdWidget);

/***/ }),

/***/ "./components/login/forget_pwd/call_us/CallUs.tsx":
/*!********************************************************!*\
  !*** ./components/login/forget_pwd/call_us/CallUs.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _call_us_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./call_us.module.scss */ "./components/login/forget_pwd/call_us/call_us.module.scss");
/* harmony import */ var _call_us_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_call_us_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\components\\login\\forget_pwd\\call_us\\CallUs.tsx";



const CallUs = ({
  goLogin
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_call_us_module_scss__WEBPACK_IMPORTED_MODULE_1___default().bodyContent),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_call_us_module_scss__WEBPACK_IMPORTED_MODULE_1___default().content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: (_call_us_module_scss__WEBPACK_IMPORTED_MODULE_1___default().email),
        children: "\u8054\u7CFB\u90AE\u7BB1\uFF1A1207711838@qq.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: (_call_us_module_scss__WEBPACK_IMPORTED_MODULE_1___default().hint),
        children: "\u6536\u5230\u60A8\u7684\u90AE\u4EF6\u540E\uFF0C\u6211\u4EEC\u5C06\u7B2C\u4E00\u65F6\u95F4\u4E3A\u60A8\u670D\u52A1\uFF01"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: (_call_us_module_scss__WEBPACK_IMPORTED_MODULE_1___default().goLogin),
        onClick: goLogin,
        children: "\u8FD4\u56DE\u767B\u5F55\u9875"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 14
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CallUs);

/***/ }),

/***/ "./components/login/forget_pwd/find_pwd/FindPwdSuccess.tsx":
/*!*****************************************************************!*\
  !*** ./components/login/forget_pwd/find_pwd/FindPwdSuccess.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FindPwdSuccess)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _find_pwd_success_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./find_pwd_success.module.scss */ "./components/login/forget_pwd/find_pwd/find_pwd_success.module.scss");
/* harmony import */ var _find_pwd_success_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_find_pwd_success_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _widget_ActionButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../widget/ActionButton */ "./components/widget/ActionButton.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\components\\login\\forget_pwd\\find_pwd\\FindPwdSuccess.tsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class FindPwdSuccess extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      time: 3
    });

    _defineProperty(this, "timerID", void 0);

    _defineProperty(this, "times", 3);
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
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_find_pwd_success_module_scss__WEBPACK_IMPORTED_MODULE_3___default().findPwd),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: (_find_pwd_success_module_scss__WEBPACK_IMPORTED_MODULE_3___default().findContent),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "/static/images/ico_success.png",
          width: 40,
          height: 40,
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: (_find_pwd_success_module_scss__WEBPACK_IMPORTED_MODULE_3___default().hint),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
            children: "\u5BC6\u7801\u8BBE\u7F6E\u6210\u529F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
            style: {
              marginTop: '10px'
            },
            children: "\u4F60\u53EF\u4EE5\u4F7F\u7528\u65B0\u5BC6\u7801\u8FDB\u884C\u767B\u5F55"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_widget_ActionButton__WEBPACK_IMPORTED_MODULE_1__.default, {
        className: (_find_pwd_success_module_scss__WEBPACK_IMPORTED_MODULE_3___default().loginBtn),
        value: "\u7ACB\u5373\u767B\u5F55",
        onClick: this.props.goLogin
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
        className: (_find_pwd_success_module_scss__WEBPACK_IMPORTED_MODULE_3___default().jumpHint),
        children: ["\u9875\u9762\u5C06\u5728", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          className: (_find_pwd_success_module_scss__WEBPACK_IMPORTED_MODULE_3___default().jumpTime),
          children: [this.state.time, "s"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 51
        }, this), "\u540E\u81EA\u52A8\u8DF3\u8F6C\u81F3\u767B\u5F55\u9875"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 16
    }, this);
  }

}

/***/ }),

/***/ "./components/login/login/LoginWidget.tsx":
/*!************************************************!*\
  !*** ./components/login/login/LoginWidget.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _login_widget_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login_widget.module.scss */ "./components/login/login/login_widget.module.scss");
/* harmony import */ var _login_widget_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_login_widget_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _widget_InputWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widget/InputWidget */ "./components/widget/InputWidget.tsx");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/util */ "./utils/util.ts");
/* harmony import */ var _widget_ActionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widget/ActionButton */ "./components/widget/ActionButton.tsx");
/* harmony import */ var _widget_GetCodeWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widget/GetCodeWidget */ "./components/widget/GetCodeWidget.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_services_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/services/user */ "./store/services/user.ts");
/* harmony import */ var _store_slices_userSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/slices/userSlice */ "./store/slices/userSlice.ts");
/* harmony import */ var _utils_aes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/aes */ "./utils/aes.ts");
/* harmony import */ var _store_slices_loginSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../store/slices/loginSlice */ "./store/slices/loginSlice.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\components\\login\\login\\LoginWidget.tsx";













const LoginWidget = ({
  switchLogin
}) => {
  const {
    0: isCodeLogin,
    1: setCodeLogin
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    0: phone,
    1: setPhone
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: code,
    1: setCode
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: errorText,
    1: setErrorText
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
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

    const error = (0,_utils_util__WEBPACK_IMPORTED_MODULE_2__.checkPhone)(phone);

    if (error) {
      setErrorText(error);
      return false;
    }

    setErrorText('');
    const p = (0,_utils_aes__WEBPACK_IMPORTED_MODULE_8__.encrypt)(phone);
    console.log(p);
    dealPhoneCode(p);
    return true;
  };

  async function dealPhoneCode(p) {
    (0,_store_services_user__WEBPACK_IMPORTED_MODULE_6__.getPhoneCode)({
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
    let error = (0,_utils_util__WEBPACK_IMPORTED_MODULE_2__.checkPhone)(phone);

    if (error) {
      setErrorText(error);
      return;
    }

    if (isCodeLogin) {
      error = (0,_utils_util__WEBPACK_IMPORTED_MODULE_2__.checkCode)(code);

      if (error) {
        setErrorText(error);
        return;
      }
    } else {
      error = (0,_utils_util__WEBPACK_IMPORTED_MODULE_2__.checkPwd)(password);

      if (error) {
        setErrorText(error);
        return;
      }
    }

    setErrorText('');
    var request;

    if (isCodeLogin) {
      request = (0,_store_services_user__WEBPACK_IMPORTED_MODULE_6__.codeLogin)({
        phone: (0,_utils_aes__WEBPACK_IMPORTED_MODULE_8__.encrypt)(phone),
        code: (0,_utils_aes__WEBPACK_IMPORTED_MODULE_8__.encrypt)(code)
      });
    } else {
      request = (0,_store_services_user__WEBPACK_IMPORTED_MODULE_6__.pwdLogin)({
        phone: (0,_utils_aes__WEBPACK_IMPORTED_MODULE_8__.encrypt)(phone),
        password: (0,_utils_aes__WEBPACK_IMPORTED_MODULE_8__.encrypt)(password)
      });
    }

    request.then(data => {
      console.log(data);

      if (data.status == 1) {
        dispatch((0,_store_slices_userSlice__WEBPACK_IMPORTED_MODULE_7__.saveUser)(data));
        dispatch((0,_store_slices_loginSlice__WEBPACK_IMPORTED_MODULE_9__.hideLogin)()); // document.location.reload();
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
    className: (_login_widget_module_scss__WEBPACK_IMPORTED_MODULE_11___default().loginWidget),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      className: (_login_widget_module_scss__WEBPACK_IMPORTED_MODULE_11___default().loginStatus),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
        className: (_login_widget_module_scss__WEBPACK_IMPORTED_MODULE_11___default().loginStatusBt),
        style: {
          color: isCodeLogin ? '#3388FF' : '#435b87',
          borderBottomColor: isCodeLogin ? '#3388FF' : 'transparent'
        },
        onClick: () => {
          switchLoginType(true);
        },
        children: "\u9A8C\u8BC1\u7801\u767B\u5F55"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
        className: (_login_widget_module_scss__WEBPACK_IMPORTED_MODULE_11___default().loginStatusBt),
        style: {
          marginLeft: "70px",
          color: isCodeLogin ? '#435b87' : '#3388FF',
          borderBottomColor: isCodeLogin ? 'transparent' : '#3388FF'
        },
        onClick: () => {
          switchLoginType(false);
        },
        children: "\u5BC6\u7801\u767B\u5F55"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      className: (_login_widget_module_scss__WEBPACK_IMPORTED_MODULE_11___default().content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: (_login_widget_module_scss__WEBPACK_IMPORTED_MODULE_11___default().errorText),
        style: {
          opacity: errorText ? 1 : 0
        },
        children: errorText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: (_login_widget_module_scss__WEBPACK_IMPORTED_MODULE_11___default().inputWidget),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
          src: "/static/images/ico_login_phone.png",
          height: "20px",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: (_login_widget_module_scss__WEBPACK_IMPORTED_MODULE_11___default().inputContent),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_widget_InputWidget__WEBPACK_IMPORTED_MODULE_1__.default, {
            height: "36px",
            hintText: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7",
            inputType: "tel",
            onTextChange: key => {
              setPhone(key);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_widget_GetCodeWidget__WEBPACK_IMPORTED_MODULE_4__.default, {
          phone: phone,
          getCode: getCode,
          isHidden: !isCodeLogin,
          setCanSend: setCanSend
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: (_login_widget_module_scss__WEBPACK_IMPORTED_MODULE_11___default().inputWidget),
        style: {
          visibility: isCodeLogin ? 'visible' : 'hidden',
          height: isCodeLogin ? "36px" : '0px',
          margin: "0"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
          src: "/static/images/ico_login_code.png",
          height: "20px",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: (_login_widget_module_scss__WEBPACK_IMPORTED_MODULE_11___default().inputContent),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_widget_InputWidget__WEBPACK_IMPORTED_MODULE_1__.default, {
            hintText: "\u8F93\u5165\u9A8C\u8BC1\u7801",
            inputType: "text",
            onTextChange: key => {
              setCode(key);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: (_login_widget_module_scss__WEBPACK_IMPORTED_MODULE_11___default().inputWidget),
        style: {
          visibility: isCodeLogin ? 'hidden' : 'visible',
          height: isCodeLogin ? "0px" : "36px",
          margin: "0"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
          src: "/static/images/ico_login_password.png",
          height: "20px",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: (_login_widget_module_scss__WEBPACK_IMPORTED_MODULE_11___default().inputContent),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_widget_InputWidget__WEBPACK_IMPORTED_MODULE_1__.default, {
            hintText: "\u8F93\u5165\u5BC6\u7801 \uFF086-20\u4F4D\u6570\u5B57\u548C\u5B57\u6BCD\uFF09",
            inputType: "password",
            onTextChange: key => {
              setPassword(key);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_widget_ActionButton__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: (_login_widget_module_scss__WEBPACK_IMPORTED_MODULE_11___default().loginBtn),
        value: "\u767B  \u5F55",
        onClick: handleLogin
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: (_login_widget_module_scss__WEBPACK_IMPORTED_MODULE_11___default().hintContent),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
          className: (_login_widget_module_scss__WEBPACK_IMPORTED_MODULE_11___default().loginHint),
          style: {
            visibility: isCodeLogin ? 'visible' : 'hidden'
          },
          children: "\u672A\u6CE8\u518C\u7684\u624B\u673A\u53F7\uFF0C\u9ED8\u8BA4\u6CE8\u518C\u7ED1\u5B9A\u3002"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
          className: (_login_widget_module_scss__WEBPACK_IMPORTED_MODULE_11___default().forgetPwd),
          style: {
            visibility: isCodeLogin ? 'hidden' : 'visible'
          },
          onClick: goToForgetPwd,
          children: "\u5FD8\u8BB0\u5BC6\u7801"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: (_login_widget_module_scss__WEBPACK_IMPORTED_MODULE_11___default().otherLogin),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: (_login_widget_module_scss__WEBPACK_IMPORTED_MODULE_11___default().qqLogin)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: (_login_widget_module_scss__WEBPACK_IMPORTED_MODULE_11___default().wechatLogin)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 157,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginWidget);

/***/ }),

/***/ "./components/widget/ActionButton.tsx":
/*!********************************************!*\
  !*** ./components/widget/ActionButton.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_components_widget_action_button_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/components/widget/action_button.module.scss */ "./styles/components/widget/action_button.module.scss");
/* harmony import */ var _styles_components_widget_action_button_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_widget_action_button_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\components\\widget\\ActionButton.tsx";



/**
 * 按钮  className设置了背景色后，:hover和:active得自定义
 */
const ActionButton = ({
  onClick,
  value = "确 定",
  className = ''
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    className: [(_styles_components_widget_action_button_module_scss__WEBPACK_IMPORTED_MODULE_1___default().buttonStyle), className].join(' '),
    onClick: onClick,
    children: value
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionButton);

/***/ }),

/***/ "./components/widget/GetCodeWidget.tsx":
/*!*********************************************!*\
  !*** ./components/widget/GetCodeWidget.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_widget_get_code_widget_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/components/widget/get_code_widget.module.scss */ "./styles/components/widget/get_code_widget.module.scss");
/* harmony import */ var _styles_components_widget_get_code_widget_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_widget_get_code_widget_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\components\\widget\\GetCodeWidget.tsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class GetCodeWidget extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
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
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
      className: (_styles_components_widget_get_code_widget_module_scss__WEBPACK_IMPORTED_MODULE_2___default().codeText),
      style: {
        backgroundColor: this.state.codeTime <= 0 ? "#F1F7FF" : "#F1F2F3",
        color: this.state.codeTime <= 0 ? "#3388FF" : "#BABDC3",
        display: this.props.isHidden ? "none" : "block"
      },
      onClick: this.onClick,
      children: this.state.codeTime <= 0 ? "获取验证码" : this.state.codeTime + "秒重新获取"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 16
    }, this);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetCodeWidget);

/***/ }),

/***/ "./components/widget/InputWidget.tsx":
/*!*******************************************!*\
  !*** ./components/widget/InputWidget.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_widget_input_widget_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/components/widget/input_widget.module.scss */ "./styles/components/widget/input_widget.module.scss");
/* harmony import */ var _styles_components_widget_input_widget_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_widget_input_widget_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\components\\widget\\InputWidget.tsx";




const InputWidget = ({
  hintText = "请输入",
  inputType = 'text',
  width = '100%',
  height = '100%',
  fontSize = '13px',
  textColor = '#363951',
  maxLength,
  onTextChange,
  onFocus
}) => {
  const {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: pwdType,
    1: setPwdType
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('password');

  const handleChange = e => {
    let value = e.target.value;
    setText(value);

    if (onTextChange != null) {
      onTextChange(value);
    }
  };

  const clearText = () => {
    setText('');

    if (onTextChange != null) {
      onTextChange('');
    }
  };

  const switchPwdShowOrHide = () => {
    if (pwdType === "password") {
      setPwdType("text");
    } else {
      setPwdType("password");
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_styles_components_widget_input_widget_module_scss__WEBPACK_IMPORTED_MODULE_2___default().inputContent),
    style: {
      width: width,
      height: height
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_components_widget_input_widget_module_scss__WEBPACK_IMPORTED_MODULE_2___default().content),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
        className: (_styles_components_widget_input_widget_module_scss__WEBPACK_IMPORTED_MODULE_2___default().input),
        type: inputType === "password" ? pwdType : inputType,
        placeholder: hintText,
        style: {
          fontSize: fontSize,
          color: textColor
        },
        value: text,
        maxLength: maxLength,
        onChange: handleChange,
        onFocus: onFocus
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
      className: (_styles_components_widget_input_widget_module_scss__WEBPACK_IMPORTED_MODULE_2___default().clearIcon),
      src: "/static/images/ico_clear.png",
      width: "20px",
      height: "20px",
      style: {
        visibility: text === '' ? 'hidden' : 'visible'
      },
      onClick: clearText,
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
      className: (_styles_components_widget_input_widget_module_scss__WEBPACK_IMPORTED_MODULE_2___default().pwdShow),
      src: pwdType === "password" ? "/static/images/ico_pwd_hide.png" : "/static/images/ico_pwd_show.png",
      width: "20px",
      height: "15px",
      style: {
        display: inputType === 'password' ? "block" : "none"
      },
      onClick: switchPwdShowOrHide,
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputWidget);

/***/ }),

/***/ "./layout/Error.tsx":
/*!**************************!*\
  !*** ./layout/Error.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout */ "./layout/Layout.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\layout\\Error.tsx";

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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_Layout__WEBPACK_IMPORTED_MODULE_0__.default, {
    title: statusCode && errTitle[statusCode],
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Result, {
      status: statusCode,
      title: statusCode
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorPage);

/***/ }),

/***/ "./layout/Layout.tsx":
/*!***************************!*\
  !*** ./layout/Layout.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_layout_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/layout.module.scss */ "./styles/layout.module.scss");
/* harmony import */ var _styles_layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\layout\\Layout.tsx";






const Layout = ({
  title,
  description,
  keywords,
  className,
  children
}) => {
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    window.addEventListener("scroll", () => {
      let toTop = document.getElementById('toTop');

      if (toTop != null) {
        if (window.pageYOffset > 1000) {
          toTop.style.visibility = "visible";
        } else {
          toTop.style.visibility = "hidden";
        }

        if (document.documentElement.clientWidth < 1300) {
          toTop.style.right = document.documentElement.clientWidth - 1300 + window.pageXOffset + "px";
        } else {
          toTop.style.right = "calc((100% - 1300px) / 2 - 50px + " + window.pageXOffset + ")";
        }
      }
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("title", {
        children: title || '互帮'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("meta", {
        name: "keywords",
        content: keywords || ''
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("meta", {
        name: "description",
        content: description || ''
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("meta", {
        property: "og:description",
        content: description || ''
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("meta", {
        property: "og:image",
        content: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("main", {
      className: className,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
      id: "toTop",
      className: (_styles_layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default().toTop),
      src: "/static/images/ico_go_top.png",
      width: "40px",
      title: "\u8FD4\u56DE\u9876\u90E8",
      alt: "",
      onClick: () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./layout/Loading.tsx":
/*!****************************!*\
  !*** ./layout/Loading.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_loading_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/loading.module.scss */ "./styles/loading.module.scss");
/* harmony import */ var _styles_loading_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_loading_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/util */ "./utils/util.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\layout\\Loading.tsx";

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
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (async () => {
      if (!loading && delay) {
        await (0,_utils_util__WEBPACK_IMPORTED_MODULE_1__.waitTime)(delay);
        setSpinning(false);
      }

      setSpinning(loading);
    })();
  }, [loading]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      [(_styles_loading_module_scss__WEBPACK_IMPORTED_MODULE_4___default().preloader)]: true,
      [(_styles_loading_module_scss__WEBPACK_IMPORTED_MODULE_4___default().show)]: spinning,
      [(_styles_loading_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hidden)]: !spinning
    }),
    children: isMobile ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_styles_loading_module_scss__WEBPACK_IMPORTED_MODULE_4___default().spinner),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_loading_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["double-bounce1"])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_loading_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["double-bounce2"])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_styles_loading_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["cs-loader"]),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_loading_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["cs-loader-inner"]),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          children: "\u25CF"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          children: "\u25CF"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          children: "\u25CF"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          children: "\u25CF"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          children: "\u25CF"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          children: "\u25CF"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingPage);

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_Error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/Error */ "./layout/Error.tsx");
/* harmony import */ var _layout_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/Loading */ "./layout/Loading.tsx");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/store */ "./store/store.ts");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/api */ "./utils/api.ts");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_var_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/var.scss */ "./styles/var.scss");
/* harmony import */ var _styles_var_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_var_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_login_LoginDialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/login/LoginDialog */ "./components/login/LoginDialog.tsx");
/* harmony import */ var _store_slices_userSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/slices/userSlice */ "./store/slices/userSlice.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @author: leroy
 * @date: 2021/8/20 20:30
 * @description：_app
 */















function MyApp({
  Component,
  pageProps
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handleStart = url => {
      console.log(`Loading: ${url}`); // 路由切换loading

      setLoading(true);
    };

    const handleStop = () => {
      setLoading(false); // 路由切换清空axios请求池

      (0,_utils_api__WEBPACK_IMPORTED_MODULE_6__.clearPending)();
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
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_layout_Error__WEBPACK_IMPORTED_MODULE_3__.default, {
      statusCode: pageProps.statusCode
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 12
    }, this);
  }

  const isShowLogin = (0,_store_store__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)(state => state.login.isShowLogin);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("meta", {
        name: "Author",
        content: "Leroy"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("meta", {
        name: "baidu-site-verification",
        content: "uGgzMZ4ZfV"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge,chrome=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("meta", {
        httpEquiv: "cleartype",
        content: "on"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("meta", {
        name: "HandheldFriENDly",
        content: "True"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, shrink-to-fit=no, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("meta", {
        content: "yes",
        name: "apple-mobile-web-app-capable"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("meta", {
        content: "yes",
        name: "apple-touch-fullscreen"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_1365762_tc49n8njksp.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_layout_Loading__WEBPACK_IMPORTED_MODULE_4__.default, {
      isMobile: pageProps.isMobile,
      loading: loading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, this), isShowLogin && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_login_LoginDialog__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 24
    }, this)]
  }, void 0, true);
} // Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//


MyApp.getInitialProps = _store_store__WEBPACK_IMPORTED_MODULE_5__.default.getInitialAppProps(store => async ({
  Component,
  ctx
}) => {
  let userAgent;

  if (ctx.req) {
    console.log('------服务端------');

    if (!store.getState().user.isLogin) {
      await store.dispatch((0,_store_slices_userSlice__WEBPACK_IMPORTED_MODULE_11__.fetchAutoLogin)({}));
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_store_store__WEBPACK_IMPORTED_MODULE_5__.default.withRedux(MyApp));

/***/ }),

/***/ "./store/services/circle.ts":
/*!**********************************!*\
  !*** ./store/services/circle.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCircleList": () => (/* binding */ getCircleList),
/* harmony export */   "getUserCircleList": () => (/* binding */ getUserCircleList)
/* harmony export */ });
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.ts");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/url */ "./utils/url.ts");



/**圈子列表 */
const getCircleList = params => {
  return _utils_api__WEBPACK_IMPORTED_MODULE_0__.default.request({
    url: _utils_url__WEBPACK_IMPORTED_MODULE_1__.default.circleList,
    method: "GET",
    params: params
  });
};
/**用户的圈子列表 */

const getUserCircleList = params => {
  return _utils_api__WEBPACK_IMPORTED_MODULE_0__.default.request({
    url: _utils_url__WEBPACK_IMPORTED_MODULE_1__.default.userCircleList,
    method: "GET",
    params: params
  });
};

/***/ }),

/***/ "./store/services/common.ts":
/*!**********************************!*\
  !*** ./store/services/common.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTypeAddressSchool": () => (/* binding */ getTypeAddressSchool),
/* harmony export */   "getCircleType": () => (/* binding */ getCircleType)
/* harmony export */ });
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.ts");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/url */ "./utils/url.ts");



/**获取学校、互帮类型、省市区 */
const getTypeAddressSchool = () => {
  return _utils_api__WEBPACK_IMPORTED_MODULE_0__.default.request({
    url: _utils_url__WEBPACK_IMPORTED_MODULE_1__.default.commit,
    method: "GET"
  });
};
/**获取圈子类别 */

const getCircleType = () => {
  return _utils_api__WEBPACK_IMPORTED_MODULE_0__.default.request({
    url: _utils_url__WEBPACK_IMPORTED_MODULE_1__.default.getCircleType,
    method: "GET"
  });
};

/***/ }),

/***/ "./store/services/helper.ts":
/*!**********************************!*\
  !*** ./store/services/helper.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHelperList": () => (/* binding */ getHelperList),
/* harmony export */   "getUserHelperList": () => (/* binding */ getUserHelperList)
/* harmony export */ });
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.ts");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/url */ "./utils/url.ts");



/**互帮列表 */
const getHelperList = params => {
  return _utils_api__WEBPACK_IMPORTED_MODULE_0__.default.request({
    url: _utils_url__WEBPACK_IMPORTED_MODULE_1__.default.helperList,
    params: params
  });
};
/**获取用户求助列表 */

const getUserHelperList = params => {
  return _utils_api__WEBPACK_IMPORTED_MODULE_0__.default.request({
    url: _utils_url__WEBPACK_IMPORTED_MODULE_1__.default.userHelpList,
    params: params
  });
};

/***/ }),

/***/ "./store/services/mine.ts":
/*!********************************!*\
  !*** ./store/services/mine.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUserInfo": () => (/* binding */ getUserInfo)
/* harmony export */ });
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/url */ "./utils/url.ts");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.ts");


function getUserInfo(params) {
  return _utils_api__WEBPACK_IMPORTED_MODULE_1__.default.request({
    method: 'GET',
    url: _utils_url__WEBPACK_IMPORTED_MODULE_0__.default.userInfo + "?id=" + params.id
  });
}
;

/***/ }),

/***/ "./store/services/user.ts":
/*!********************************!*\
  !*** ./store/services/user.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPhoneCode": () => (/* binding */ getPhoneCode),
/* harmony export */   "pwdLogin": () => (/* binding */ pwdLogin),
/* harmony export */   "codeLogin": () => (/* binding */ codeLogin),
/* harmony export */   "autoLogin": () => (/* binding */ autoLogin)
/* harmony export */ });
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.ts");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/url */ "./utils/url.ts");


function getPhoneCode(params) {
  return _utils_api__WEBPACK_IMPORTED_MODULE_0__.default.request({
    method: 'POST',
    url: _utils_url__WEBPACK_IMPORTED_MODULE_1__.default.getCode,
    data: params,
    headers: {
      'content-type': 'application/json'
    }
  });
}
;
function pwdLogin(params) {
  return _utils_api__WEBPACK_IMPORTED_MODULE_0__.default.request({
    method: 'POST',
    url: _utils_url__WEBPACK_IMPORTED_MODULE_1__.default.pwdLogin,
    data: params
  });
}
;
function codeLogin(params) {
  return _utils_api__WEBPACK_IMPORTED_MODULE_0__.default.request({
    method: 'POST',
    url: _utils_url__WEBPACK_IMPORTED_MODULE_1__.default.codeLogin,
    data: params
  });
}
;
/**自动登录 */

const autoLogin = () => {
  return _utils_api__WEBPACK_IMPORTED_MODULE_0__.default.request({
    method: 'POST',
    url: _utils_url__WEBPACK_IMPORTED_MODULE_1__.default.autoLogin
  });
};

/***/ }),

/***/ "./store/slices/circleSlice.ts":
/*!*************************************!*\
  !*** ./store/slices/circleSlice.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchAllCircleList": () => (/* binding */ fetchAllCircleList),
/* harmony export */   "fetchUserCircleList": () => (/* binding */ fetchUserCircleList),
/* harmony export */   "homeSlice": () => (/* binding */ homeSlice),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/util */ "./utils/util.ts");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/circle */ "./store/services/circle.ts");



 // AsyncThunk<返回的值类型,函数类型void表示不带参数,不清楚>

const fetchAllCircleList = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.thunkWrapper)('clircle/all', _services_circle__WEBPACK_IMPORTED_MODULE_2__.getCircleList);
const fetchUserCircleList = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.thunkWrapper)('clircle/user_list', _services_circle__WEBPACK_IMPORTED_MODULE_2__.getUserCircleList);
const initialState = {
  allCircleData: {
    total: 0,
    list: []
  },
  myCircleList: {
    total: 0,
    list: []
  }
};
const homeSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
  name: 'circle',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllCircleList.fulfilled.type]: (state, action) => {
      state.allCircleData = action.payload.data;
    },
    [fetchUserCircleList.fulfilled.type]: (state, action) => {
      state.myCircleList = action.payload.data;
    }
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeSlice.reducer);

/***/ }),

/***/ "./store/slices/commonSlice.ts":
/*!*************************************!*\
  !*** ./store/slices/commonSlice.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchTypeAddressSchool": () => (/* binding */ fetchTypeAddressSchool),
/* harmony export */   "fetchCircleType": () => (/* binding */ fetchCircleType),
/* harmony export */   "commonSlice": () => (/* binding */ commonSlice),
/* harmony export */   "increment": () => (/* binding */ increment),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/util */ "./utils/util.ts");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common */ "./store/services/common.ts");



// AsyncThunk<返回的值类型,函数类型void表示不带参数,不清楚>
const fetchTypeAddressSchool = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.thunkWrapper)('common/typeAddressSchool', _services_common__WEBPACK_IMPORTED_MODULE_2__.getTypeAddressSchool);
const fetchCircleType = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.thunkWrapper)('common/circleType', _services_common__WEBPACK_IMPORTED_MODULE_2__.getCircleType);
const initialState = {
  circleType: []
};
const commonSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
  name: 'common',
  initialState,
  reducers: {
    increment: () => {}
  },
  extraReducers: {
    // [fetchTypeAddressSchool.fulfilled.type]: (state, action: PayloadAction<Res<TypeAddressSchoolBean>>) => {
    //     console.log("数据", action.payload.data);
    //     state.isLoadData = true;
    //     state.typeAddressSchoolBean = action.payload.data;
    // },
    [fetchCircleType.fulfilled.type]: (state, action) => {
      state.circleType = action.payload.data;
    }
  }
});
const {
  increment
} = commonSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commonSlice.reducer);

/***/ }),

/***/ "./store/slices/homeSlice.ts":
/*!***********************************!*\
  !*** ./store/slices/homeSlice.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchRecommendList": () => (/* binding */ fetchRecommendList),
/* harmony export */   "fetchLikeList": () => (/* binding */ fetchLikeList),
/* harmony export */   "fetchNearbyList": () => (/* binding */ fetchNearbyList),
/* harmony export */   "fetchHortList": () => (/* binding */ fetchHortList),
/* harmony export */   "fetchRecommendCircleList": () => (/* binding */ fetchRecommendCircleList),
/* harmony export */   "homeSlice": () => (/* binding */ homeSlice),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/util */ "./utils/util.ts");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/helper */ "./store/services/helper.ts");
/* harmony import */ var _services_circle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/circle */ "./store/services/circle.ts");



 // AsyncThunk<返回的值类型,函数类型void表示不带参数,不清楚>

const fetchRecommendList = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.thunkWrapper)('home/recommend', _services_helper__WEBPACK_IMPORTED_MODULE_2__.getHelperList);
const fetchLikeList = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.thunkWrapper)('home/like', _services_helper__WEBPACK_IMPORTED_MODULE_2__.getHelperList);
const fetchNearbyList = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.thunkWrapper)('home/nearby', _services_helper__WEBPACK_IMPORTED_MODULE_2__.getHelperList);
const fetchHortList = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.thunkWrapper)('home/hort', _services_helper__WEBPACK_IMPORTED_MODULE_2__.getHelperList);
const fetchRecommendCircleList = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.thunkWrapper)('home/circle/recommend', _services_circle__WEBPACK_IMPORTED_MODULE_3__.getCircleList);
const initialState = {
  isLoad: false,
  recommendData: [],
  likeData: [],
  nearbyData: [],
  hortData: [],
  recommendCircleData: {
    total: 0,
    list: []
  }
};
const homeSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRecommendList.fulfilled.type]: (state, action) => {
      state.isLoad = true;
      state.recommendData = action.payload.data;
      console.log("fetchRecommendList", action.payload.data.length);
    },
    [fetchLikeList.fulfilled.type]: (state, action) => {
      state.likeData = action.payload.data;
      console.log("fetchLikeList", action.payload.data.length);
    },
    [fetchNearbyList.fulfilled.type]: (state, action) => {
      state.nearbyData = action.payload.data;
      console.log("fetchNearbyList", action.payload.data.length);
    },
    [fetchHortList.fulfilled.type]: (state, action) => {
      state.hortData = action.payload.data;
      console.log("fetchHortList", action.payload.data.length);
    },
    [fetchRecommendCircleList.fulfilled.type]: (state, action) => {
      state.recommendCircleData = action.payload.data;
    }
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeSlice.reducer);

/***/ }),

/***/ "./store/slices/loadingSlice.ts":
/*!**************************************!*\
  !*** ./store/slices/loadingSlice.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPendingAction": () => (/* binding */ isPendingAction),
/* harmony export */   "isRejectedAction": () => (/* binding */ isRejectedAction),
/* harmony export */   "isFulfilledAction": () => (/* binding */ isFulfilledAction),
/* harmony export */   "loadingSlice": () => (/* binding */ loadingSlice),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @author: leroy
 * @date: 2021/8/23 16:09
 * @description：监听 AsyncThunk loading 状态
 */

function isPendingAction(action) {
  return action.type.endsWith('/pending');
}
function isRejectedAction(action) {
  return action.type.endsWith('/rejected');
}
function isFulfilledAction(action) {
  return action.type.endsWith('/fulfilled');
}
const initialState = {};
const loadingSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'loading',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: builder => {
    builder.addMatcher(isPendingAction, (state, action) => {
      const type = action.type.replace('/pending', '');
      state[type] = true;
    }).addMatcher(isRejectedAction, (state, action) => {
      const type = action.type.replace('/rejected', '');
      state[type] = false;
    }) // matcher can just return boolean and the matcher can receive a generic argument
    .addMatcher(isFulfilledAction, (state, action) => {
      const type = action.type.replace('/fulfilled', '');
      state[type] = false;
    });
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadingSlice.reducer);

/***/ }),

/***/ "./store/slices/loginSlice.ts":
/*!************************************!*\
  !*** ./store/slices/loginSlice.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loginSlice": () => (/* binding */ loginSlice),
/* harmony export */   "showLogin": () => (/* binding */ showLogin),
/* harmony export */   "hideLogin": () => (/* binding */ hideLogin),
/* harmony export */   "showLoginPage": () => (/* binding */ showLoginPage),
/* harmony export */   "showForgetPwdPage": () => (/* binding */ showForgetPwdPage),
/* harmony export */   "isShowLogin": () => (/* binding */ isShowLogin),
/* harmony export */   "showOrHideLogin": () => (/* binding */ showOrHideLogin),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/util */ "./utils/util.ts");


const initialState = {
  isShowLogin: false,
  showForgetPwd: false
};
const loginSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'login',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    showLogin: state => {
      document.body.style.overflow = 'hidden';

      if (document.documentElement.clientWidth >= 1300) {
        document.body.style.paddingRight = (0,_utils_util__WEBPACK_IMPORTED_MODULE_1__.getScrollbarWidth)() + 'px';
      }

      state.isShowLogin = true;
    },
    hideLogin: state => {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
      state.isShowLogin = false;
    },
    showLoginPage: state => {
      if (state.showForgetPwd) {
        state.showForgetPwd = false;
      }
    },
    showForgetPwdPage: state => {
      if (!state.showForgetPwd) {
        state.showForgetPwd = true;
      }
    }
  }
});
const {
  showLogin,
  hideLogin,
  showLoginPage,
  showForgetPwdPage
} = loginSlice.actions; // The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

const isShowLogin = state => state.login.isShowLogin; // We can also write services by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

const showOrHideLogin = isShow => (dispatch, getState) => {
  const isNowShow = isShowLogin(getState());

  if (isNowShow !== isShow) {
    if (isShow) {
      dispatch(showLogin());
    } else {
      dispatch(hideLogin());
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loginSlice.reducer);

/***/ }),

/***/ "./store/slices/mineSlice.ts":
/*!***********************************!*\
  !*** ./store/slices/mineSlice.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchUserInfo": () => (/* binding */ fetchUserInfo),
/* harmony export */   "fetchMineRecommendCircleList": () => (/* binding */ fetchMineRecommendCircleList),
/* harmony export */   "fetchMineHelperList": () => (/* binding */ fetchMineHelperList),
/* harmony export */   "mineSlice": () => (/* binding */ mineSlice),
/* harmony export */   "switchUserPageSelectIndex": () => (/* binding */ switchUserPageSelectIndex),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/util */ "./utils/util.ts");
/* harmony import */ var _services_circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/circle */ "./store/services/circle.ts");
/* harmony import */ var _services_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/helper */ "./store/services/helper.ts");
/* harmony import */ var _services_mine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/mine */ "./store/services/mine.ts");





const fetchUserInfo = (0,_utils_util__WEBPACK_IMPORTED_MODULE_1__.thunkWrapper)('user/userInfo', _services_mine__WEBPACK_IMPORTED_MODULE_4__.getUserInfo);
const fetchMineRecommendCircleList = (0,_utils_util__WEBPACK_IMPORTED_MODULE_1__.thunkWrapper)('mine/circle/recommend', _services_circle__WEBPACK_IMPORTED_MODULE_2__.getCircleList);
const fetchMineHelperList = (0,_utils_util__WEBPACK_IMPORTED_MODULE_1__.thunkWrapper)('mine/helper', _services_helper__WEBPACK_IMPORTED_MODULE_3__.getUserHelperList);
const initialState = {
  userInfo: undefined,
  recommendCircleData: {
    total: 0,
    list: []
  },
  mineHelperData: {
    total: 0,
    list: []
  },
  userPageSelectIndex: {}
};
const mineSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'mine',
  initialState,
  reducers: {
    switchUserPageSelectIndex: (state, action) => {
      let {
        key,
        index
      } = action.payload;

      if (index > 0) {
        state.userPageSelectIndex[key] = index;
      } else {
        if (key in state.userPageSelectIndex) {
          state.userPageSelectIndex[key] = index;
          delete state.userPageSelectIndex[key];
          console.log("销毁", state.userPageSelectIndex[key]);
        }
      }
    }
  },
  extraReducers: {
    [fetchUserInfo.fulfilled.type]: (state, action) => {
      state.userInfo = action.payload.data;
    },
    [fetchMineRecommendCircleList.fulfilled.type]: (state, action) => {
      state.recommendCircleData = action.payload.data;
    },
    [fetchMineHelperList.fulfilled.type]: (state, action) => {
      state.mineHelperData = action.payload.data;
    }
  }
});
const {
  switchUserPageSelectIndex
} = mineSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mineSlice.reducer);

/***/ }),

/***/ "./store/slices/userSlice.ts":
/*!***********************************!*\
  !*** ./store/slices/userSlice.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchAutoLogin": () => (/* binding */ fetchAutoLogin),
/* harmony export */   "userSlice": () => (/* binding */ userSlice),
/* harmony export */   "outLogin": () => (/* binding */ outLogin),
/* harmony export */   "saveUser": () => (/* binding */ saveUser),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_token_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/token_util */ "./utils/token_util.ts");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/util */ "./utils/util.ts");
/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user */ "./store/services/user.ts");




const fetchAutoLogin = (0,_utils_util__WEBPACK_IMPORTED_MODULE_2__.thunkWrapper)('user/autoLogin', _services_user__WEBPACK_IMPORTED_MODULE_3__.autoLogin);
const initialState = {
  isLogin: false,
  isFinish: false,
  token: '',
  user: undefined
};
const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'user',
  initialState,
  reducers: {
    saveUserInfo: (state, action) => {
      saveUserData(state, action.payload.data);
    },
    // 退出登录
    outLogin: state => {
      console.log("退出登录");
      state.isLogin = false;
      state.isFinish = false;
      state.token = "";
      state.user = undefined;
      (0,_utils_token_util__WEBPACK_IMPORTED_MODULE_1__.removeToken)(); // document.location.reload();
    }
  },
  extraReducers: {
    [fetchAutoLogin.fulfilled.type]: (state, action) => {
      saveUserData(state, action.payload.data);
    }
  }
}); // 保存用户数据

function saveUserData(state, data) {
  console.log("token", data.token);
  state.isLogin = true;
  const token = data.token;
  state.token = token;
  (0,_utils_token_util__WEBPACK_IMPORTED_MODULE_1__.saveToken)(token);
  state.isFinish = data.is_finish === 1;
  state.user = data.user;
}

const {
  saveUserInfo
} = userSlice.actions;
const {
  outLogin
} = userSlice.actions;
const saveUser = data => (dispatch, getState) => {
  dispatch(saveUserInfo(data));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);

/***/ }),

/***/ "./store/store.ts":
/*!************************!*\
  !*** ./store/store.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAppDispatch": () => (/* binding */ useAppDispatch),
/* harmony export */   "useAppSelector": () => (/* binding */ useAppSelector),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _slices_loadingSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slices/loadingSlice */ "./store/slices/loadingSlice.ts");
/* harmony import */ var _slices_homeSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slices/homeSlice */ "./store/slices/homeSlice.ts");
/* harmony import */ var _slices_loginSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slices/loginSlice */ "./store/slices/loginSlice.ts");
/* harmony import */ var _slices_userSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./slices/userSlice */ "./store/slices/userSlice.ts");
/* harmony import */ var _slices_commonSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./slices/commonSlice */ "./store/slices/commonSlice.ts");
/* harmony import */ var _slices_circleSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./slices/circleSlice */ "./store/slices/circleSlice.ts");
/* harmony import */ var _slices_mineSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./slices/mineSlice */ "./store/slices/mineSlice.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @author: leroy
 * @date: 2021/8/23 16:09
 * @description：store
 */











const combinedReducer = (0,redux__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({
  loading: _slices_loadingSlice__WEBPACK_IMPORTED_MODULE_4__.default,
  home: _slices_homeSlice__WEBPACK_IMPORTED_MODULE_5__.default,
  login: _slices_loginSlice__WEBPACK_IMPORTED_MODULE_6__.default,
  user: _slices_userSlice__WEBPACK_IMPORTED_MODULE_7__.default,
  common: _slices_commonSlice__WEBPACK_IMPORTED_MODULE_8__.default,
  circle: _slices_circleSlice__WEBPACK_IMPORTED_MODULE_9__.default,
  mine: _slices_mineSlice__WEBPACK_IMPORTED_MODULE_10__.default
});

const reducer = (state, action) => {
  if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__.HYDRATE) {
    const nextState = _objectSpread(_objectSpread({}, state), action.payload);

    return combinedReducer(nextState, action);
  }

  return combinedReducer(state, action);
};

const makeStore = () => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer,
  devTools: true
});

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch = () => (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__.createWrapper)(makeStore));

/***/ }),

/***/ "./utils/aes.ts":
/*!**********************!*\
  !*** ./utils/aes.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "encrypt": () => (/* binding */ encrypt),
/* harmony export */   "decrypt": () => (/* binding */ decrypt)
/* harmony export */ });
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ "crypto-js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);

const key = crypto_js__WEBPACK_IMPORTED_MODULE_0___default().enc.Utf8.parse('s379e8b551be4ed0');
const iv = crypto_js__WEBPACK_IMPORTED_MODULE_0___default().enc.Utf8.parse('2002038505065588'); // aes 加密

function encrypt(message) {
  let srcs = crypto_js__WEBPACK_IMPORTED_MODULE_0___default().enc.Utf8.parse(message);
  let encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_0___default().AES.encrypt(srcs, key, {
    iv: iv,
    mode: (crypto_js__WEBPACK_IMPORTED_MODULE_0___default().mode.ECB),
    padding: (crypto_js__WEBPACK_IMPORTED_MODULE_0___default().pad.Pkcs7)
  });
  return encrypted.ciphertext.toString((crypto_js__WEBPACK_IMPORTED_MODULE_0___default().enc.Base64));
} // aes 解密

function decrypt(word) {
  let decrypt = crypto_js__WEBPACK_IMPORTED_MODULE_0___default().AES.decrypt(word, key, {
    iv: iv,
    mode: (crypto_js__WEBPACK_IMPORTED_MODULE_0___default().mode.ECB),
    padding: (crypto_js__WEBPACK_IMPORTED_MODULE_0___default().pad.Pkcs7)
  });
  let decryptedStr = decrypt.toString((crypto_js__WEBPACK_IMPORTED_MODULE_0___default().enc.Utf8));
  return decryptedStr.toString();
}

/***/ }),

/***/ "./utils/api.ts":
/*!**********************!*\
  !*** ./utils/api.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearPending": () => (/* binding */ clearPending),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _aes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aes */ "./utils/aes.ts");
/* harmony import */ var _token_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token_util */ "./utils/token_util.ts");





const qs = __webpack_require__(/*! qs */ "qs");

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  405: '请求方法不被允许。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
};
const api = {
  getHeader() {
    let token = (0,_token_util__WEBPACK_IMPORTED_MODULE_3__.getToken)();
    console.log("token", token);
    let header = {
      now_time: new Date().getTime() + '',
      version: '0.1.0',
      client: 'pc',
      token: token,
      did: "HUBANG_PC"
    };
    let aesHeader = "now_time=" + header["now_time"] + "&client=" + header["client"] + "&version=" + header["version"] + "&did=" + header["did"] + "&token=" + header["token"];
    header['sign'] = (0,_aes__WEBPACK_IMPORTED_MODULE_2__.encrypt)(JSON.stringify(aesHeader)); // header["Connection"] = 'keep-alive';

    header["Access-Control-Allow-Origin"] = '*';
    return header;
  },

  request(config) {
    let headers = this.getHeader();
    let instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
      baseURL: "http://local.helpweb.top/api/v1/",
      headers: headers,
      timeout: 10000
    }); // 请求拦截器

    instance.interceptors.request.use(config => {
      var _config$headers, _config$headers2;

      // 发起请求时，取消掉当前正在进行的相同请求
      const url = [config.method, config.url, qs.stringify(config.params), qs.stringify(config.data)].join('&');

      if (pending.has(url)) {
        // 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
        const cancel = pending.get(url);
        cancel(url);
        pending.delete(url);
      } else {
        config.cancelToken = config.cancelToken || new (axios__WEBPACK_IMPORTED_MODULE_0___default().CancelToken)(cancel => {
          pending.set(url, cancel);
        });
      }

      console.log("请求拦截", config.url, config === null || config === void 0 ? void 0 : (_config$headers = config.headers) === null || _config$headers === void 0 ? void 0 : _config$headers['token']); // 转变数据格式

      if ((config === null || config === void 0 ? void 0 : (_config$headers2 = config.headers) === null || _config$headers2 === void 0 ? void 0 : _config$headers2['Content-Type']) === 'application/x-www-form-urlencoded') {
        config.transformRequest = data => {
          const str = Object.keys(data).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`);
          return str.join('&');
        };
      }

      return config;
    }, function (error) {
      const {
        response
      } = error;

      if (response && response.status) {
        const errorText = codeMessage[response.status] || response.statusText;
        const {
          status,
          url
        } = response;

        if (status === 401 || status === 403) {
          antd__WEBPACK_IMPORTED_MODULE_1__.notification.error({
            message: '未登录或登录已过期，请重新登录。'
          });
        }

        antd__WEBPACK_IMPORTED_MODULE_1__.notification.error({
          message: `请求错误 ${status}: ${url}`,
          description: errorText
        });
      }

      if (!response) {
        antd__WEBPACK_IMPORTED_MODULE_1__.notification.error({
          description: '您的网络发生异常，无法连接服务器',
          message: '网络异常'
        });
      }
    }); // 响应拦截器即异常处理

    instance.interceptors.response.use(res => {
      const data = res.data;

      if (data != null) {
        if (data.need_decrypt) {
          const content = JSON.parse((0,_aes__WEBPACK_IMPORTED_MODULE_2__.decrypt)(data.data));

          if (content != null) {
            data.data = content;
          }
        }

        return data;
      }

      return data;
    });
    return instance(config ? config : {});
  }

};
const pending = new Map(); // 清空 pending 中的请求（在路由跳转时调用）

const clearPending = () => {
  pending.forEach(function (cancel, url) {
    cancel(url);
  });
  pending.clear();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);

/***/ }),

/***/ "./utils/staticData.ts":
/*!*****************************!*\
  !*** ./utils/staticData.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const staticData = {
  colorList: ["#ff8282", "#fc2950", "#f44ebf", "#d333be", "#be33d3", "#9933d3", "#7632c3", "#6149f4", "#4663cc", "#569de0", "#56e0de", "#2fcda6", "#2fcdcb", "#4cf092", "#b4f04c", "#e1e73b", "#e7c53b", "#f68f43", "#f64b43", "#c8adac", "#6015b5", "#3d2449", "#3d2449", "#b64ca3", "#6c4665", "#4c7471", "#939d9c"]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (staticData);

/***/ }),

/***/ "./utils/token_util.ts":
/*!*****************************!*\
  !*** ./utils/token_util.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tokenKey": () => (/* binding */ tokenKey),
/* harmony export */   "saveToken": () => (/* binding */ saveToken),
/* harmony export */   "removeToken": () => (/* binding */ removeToken),
/* harmony export */   "getToken": () => (/* binding */ getToken)
/* harmony export */ });
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-cookies */ "react-cookies");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_0__);

const tokenKey = "user_token";
/**
 * 保存token
 * @param token 
 */

const saveToken = token => {
  // console.log("保存token", token);
  react_cookies__WEBPACK_IMPORTED_MODULE_0___default().save(tokenKey, token);
};
/**
 * 移除token
 */

const removeToken = () => {
  react_cookies__WEBPACK_IMPORTED_MODULE_0___default().remove(tokenKey);
};
/**
 * 获取token
 * @returns 
 */

const getToken = () => {
  const token = react_cookies__WEBPACK_IMPORTED_MODULE_0___default().load(tokenKey);
  console.log("获取token", token);
  return token == null ? '' : token;
};

/***/ }),

/***/ "./utils/url.ts":
/*!**********************!*\
  !*** ./utils/url.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let domain = "http://local.helpweb.top/api/v1/" || 0; // if (typeof window === 'undefined') {
//     domain = domain.replace(/^https/i, 'http');
// }

const Url = {
  staticHost: "/static",
  domain,
  commit: "commit",
  //学校分类城市等信息获取
  getCircleType: "get_circle_type",
  //获得圈子类别
  getCode: "get_code",
  //获取验证码
  pwdLogin: "login",
  //密码登录
  codeLogin: "quick_login",
  //验证码登录
  autoLogin: "auto_login",
  //自动登录
  userInfo: "user/info",
  //用户信息
  userCircleList: "circle/user_join",
  //用户加入的圈子
  circleList: "circle/list",
  //圈子列表
  helperList: "helper/list",
  //求助列表
  userHelpList: "helper/user/list" // 用户求助列表

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Url);

/***/ }),

/***/ "./utils/util.ts":
/*!***********************!*\
  !*** ./utils/util.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "waitTime": () => (/* binding */ waitTime),
/* harmony export */   "thunkWrapper": () => (/* binding */ thunkWrapper),
/* harmony export */   "getMaxTwoZero": () => (/* binding */ getMaxTwoZero),
/* harmony export */   "getHelpMoney": () => (/* binding */ getHelpMoney),
/* harmony export */   "getTimeStringByNow": () => (/* binding */ getTimeStringByNow),
/* harmony export */   "checkPhone": () => (/* binding */ checkPhone),
/* harmony export */   "checkCode": () => (/* binding */ checkCode),
/* harmony export */   "checkPwd": () => (/* binding */ checkPwd),
/* harmony export */   "getScrollbarWidth": () => (/* binding */ getScrollbarWidth),
/* harmony export */   "getColorByString": () => (/* binding */ getColorByString)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _staticData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staticData */ "./utils/staticData.ts");


const waitTime = (time = 100) => {
  return new Promise(resolve => {
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

const thunkWrapper = (name, fn) => {
  return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(name, async params => {
    if (params) {
      const data = await fn(params);
      return data;
    } else {
      const data = await fn();
      return data;
    }
  });
};
/**
 * 获取最多两位有效小数
 * @param d 
 * @returns 
 */

const getMaxTwoZero = d => {
  return Math.round(d * 100) / 100;
};
/**
 * 获取互帮显示的金额
 * @param min 最小金额
 * @param max 最大金额
 * @returns 
 */

const getHelpMoney = (min, max) => {
  if (max == 0) {
    if (min == 0) {
      return "待定";
    } else {
      return "￥" + getMaxTwoZero(min) + "元";
    }
  } else {
    return "￥" + getMaxTwoZero(min) + "-" + getMaxTwoZero(max) + "元";
  }
};
/**
 * 根据当前获取时间字符串
 * @param time 时间戳
 * @param defaultValue 默认值
 */

const getTimeStringByNow = (time, defaultValue) => {
  if (time <= 0) {
    return defaultValue;
  }

  let date = new Date(time);

  if (date == null) {
    return defaultValue;
  }

  let nowDate = new Date();
  let yesDate = new Date(nowDate.getTime() - 24 * 60 * 60 * 1000);
  let tomorrowDate = new Date(nowDate.getTime() + 24 * 60 * 60 * 1000);

  if (nowDate.getFullYear() === date.getFullYear() && nowDate.getMonth() === date.getMonth() && nowDate.getDate() === date.getDate()) {
    // 同一天
    return AddZ(date.getHours()) + ":" + AddZ(date.getMinutes());
  } else if (yesDate.getFullYear() === date.getFullYear() && yesDate.getMonth() === date.getMonth() && yesDate.getDate() === date.getDate()) {
    // 昨天
    return "昨天 " + AddZ(date.getHours()) + ":" + AddZ(date.getMinutes());
  } else if (tomorrowDate.getFullYear() === date.getFullYear() && tomorrowDate.getMonth() === date.getMonth() && tomorrowDate.getDate() === date.getDate()) {
    // 明天
    return "明天 " + AddZ(date.getHours()) + ":" + AddZ(date.getMinutes());
  } else if (nowDate.getFullYear() === date.getFullYear()) {
    // 同一年
    return AddZ(date.getMonth()) + "月" + AddZ(date.getDate()) + "日 " + AddZ(date.getHours()) + ":" + AddZ(date.getMinutes());
  }

  return date.getFullYear() + "年" + AddZ(date.getMonth()) + "月" + AddZ(date.getDate()) + "日 " + AddZ(date.getHours()) + ":" + AddZ(date.getMinutes());
};
/**
 * 数字小于10 前面补0
 * @param num 
 * @returns 
 */

function AddZ(num) {
  if (num < 10) {
    return "0" + num;
  }

  return "" + num;
}
/**
 * 手机号验证
 * @param phone 手机号
 */


const checkPhone = phone => {
  if (!phone) {
    return '请输入手机号';
  }

  var myreg = /^1\d{10}$/;

  if (!myreg.test(phone)) {
    console.log("手机号格式错误");
    return '手机号格式错误';
  }

  return '';
};
/**
 * 验证码验证
 * @param code 
 * @returns 
 */

const checkCode = code => {
  if (!code) {
    return '请先获取验证码';
  }

  var myreg = /^\d{4,6}$/;

  if (!myreg.test(code)) {
    return '请输入正确的验证码';
  }

  return '';
};
/**
 * 验证密码
 * @param pwd 
 * @returns 
 */

const checkPwd = pwd => {
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
};
/**
 * 获取滚动条宽度
 * @returns 
 */

function getScrollbarWidth() {
  var oP = document.createElement('p'),
      styles = {
    width: '100%',
    height: '100%'
  },
      i,
      clientWidth1,
      clientWidth2,
      scrollbarWidth;

  for (i in styles) oP.style[i] = styles[i];

  document.body.appendChild(oP);
  clientWidth1 = oP.clientWidth;
  oP.style.overflowY = 'scroll';
  clientWidth2 = oP.clientWidth;
  scrollbarWidth = clientWidth1 - clientWidth2;
  oP.remove();
  return scrollbarWidth;
} // 根据字符串首字符ascii值获取颜色

function getColorByString(key) {
  let code = key.charCodeAt(0);
  return _staticData__WEBPACK_IMPORTED_MODULE_1__.default.colorList[code % _staticData__WEBPACK_IMPORTED_MODULE_1__.default.colorList.length];
}

/***/ }),

/***/ "./components/login/forget_pwd/call_us/call_us.module.scss":
/*!*****************************************************************!*\
  !*** ./components/login/forget_pwd/call_us/call_us.module.scss ***!
  \*****************************************************************/
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

/***/ "./components/login/forget_pwd/find_pwd/find_pwd_success.module.scss":
/*!***************************************************************************!*\
  !*** ./components/login/forget_pwd/find_pwd/find_pwd_success.module.scss ***!
  \***************************************************************************/
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

/***/ "./components/login/forget_pwd/forget_pwd.module.scss":
/*!************************************************************!*\
  !*** ./components/login/forget_pwd/forget_pwd.module.scss ***!
  \************************************************************/
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

/***/ "./components/login/login/login_widget.module.scss":
/*!*********************************************************!*\
  !*** ./components/login/login/login_widget.module.scss ***!
  \*********************************************************/
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

/***/ "./components/login/login_dialog.module.scss":
/*!***************************************************!*\
  !*** ./components/login/login_dialog.module.scss ***!
  \***************************************************/
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

/***/ "./styles/components/widget/action_button.module.scss":
/*!************************************************************!*\
  !*** ./styles/components/widget/action_button.module.scss ***!
  \************************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"buttonStyle": "action_button_buttonStyle__3kPHQ"
};


/***/ }),

/***/ "./styles/components/widget/get_code_widget.module.scss":
/*!**************************************************************!*\
  !*** ./styles/components/widget/get_code_widget.module.scss ***!
  \**************************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"codeText": "get_code_widget_codeText__2vC_r"
};


/***/ }),

/***/ "./styles/components/widget/input_widget.module.scss":
/*!***********************************************************!*\
  !*** ./styles/components/widget/input_widget.module.scss ***!
  \***********************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"inputContent": "input_widget_inputContent__36Osc",
	"content": "input_widget_content__mL1Zu",
	"input": "input_widget_input__EaxRA",
	"clearIcon": "input_widget_clearIcon__1HASL",
	"pwdShow": "input_widget_pwdShow__3qIXT"
};


/***/ }),

/***/ "./styles/layout.module.scss":
/*!***********************************!*\
  !*** ./styles/layout.module.scss ***!
  \***********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"toTop": "layout_toTop__2Yx5P"
};


/***/ }),

/***/ "./styles/loading.module.scss":
/*!************************************!*\
  !*** ./styles/loading.module.scss ***!
  \************************************/
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

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/var.scss":
/*!*************************!*\
  !*** ./styles/var.scss ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ "crypto-js":
/*!****************************!*\
  !*** external "crypto-js" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto-js");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("qs");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-cookies":
/*!********************************!*\
  !*** external "react-cookies" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-cookies");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
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
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUlaQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2h1YmFuZy8uL2NvbXBvbmVudHMvbG9naW4vTG9naW5EaWFsb2cudHN4Iiwid2VicGFjazovL2h1YmFuZy8uL2NvbXBvbmVudHMvbG9naW4vZm9yZ2V0X3B3ZC9Gb3JnZXRQd2RXaWRnZXQudHN4Iiwid2VicGFjazovL2h1YmFuZy8uL2NvbXBvbmVudHMvbG9naW4vZm9yZ2V0X3B3ZC9jYWxsX3VzL0NhbGxVcy50c3giLCJ3ZWJwYWNrOi8vaHViYW5nLy4vY29tcG9uZW50cy9sb2dpbi9mb3JnZXRfcHdkL2ZpbmRfcHdkL0ZpbmRQd2RTdWNjZXNzLnRzeCIsIndlYnBhY2s6Ly9odWJhbmcvLi9jb21wb25lbnRzL2xvZ2luL2xvZ2luL0xvZ2luV2lkZ2V0LnRzeCIsIndlYnBhY2s6Ly9odWJhbmcvLi9jb21wb25lbnRzL3dpZGdldC9BY3Rpb25CdXR0b24udHN4Iiwid2VicGFjazovL2h1YmFuZy8uL2NvbXBvbmVudHMvd2lkZ2V0L0dldENvZGVXaWRnZXQudHN4Iiwid2VicGFjazovL2h1YmFuZy8uL2NvbXBvbmVudHMvd2lkZ2V0L0lucHV0V2lkZ2V0LnRzeCIsIndlYnBhY2s6Ly9odWJhbmcvLi9sYXlvdXQvRXJyb3IudHN4Iiwid2VicGFjazovL2h1YmFuZy8uL2xheW91dC9MYXlvdXQudHN4Iiwid2VicGFjazovL2h1YmFuZy8uL2xheW91dC9Mb2FkaW5nLnRzeCIsIndlYnBhY2s6Ly9odWJhbmcvLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly9odWJhbmcvLi9zdG9yZS9zZXJ2aWNlcy9jaXJjbGUudHMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vc3RvcmUvc2VydmljZXMvY29tbW9uLnRzIiwid2VicGFjazovL2h1YmFuZy8uL3N0b3JlL3NlcnZpY2VzL2hlbHBlci50cyIsIndlYnBhY2s6Ly9odWJhbmcvLi9zdG9yZS9zZXJ2aWNlcy9taW5lLnRzIiwid2VicGFjazovL2h1YmFuZy8uL3N0b3JlL3NlcnZpY2VzL3VzZXIudHMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vc3RvcmUvc2xpY2VzL2NpcmNsZVNsaWNlLnRzIiwid2VicGFjazovL2h1YmFuZy8uL3N0b3JlL3NsaWNlcy9jb21tb25TbGljZS50cyIsIndlYnBhY2s6Ly9odWJhbmcvLi9zdG9yZS9zbGljZXMvaG9tZVNsaWNlLnRzIiwid2VicGFjazovL2h1YmFuZy8uL3N0b3JlL3NsaWNlcy9sb2FkaW5nU2xpY2UudHMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vc3RvcmUvc2xpY2VzL2xvZ2luU2xpY2UudHMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vc3RvcmUvc2xpY2VzL21pbmVTbGljZS50cyIsIndlYnBhY2s6Ly9odWJhbmcvLi9zdG9yZS9zbGljZXMvdXNlclNsaWNlLnRzIiwid2VicGFjazovL2h1YmFuZy8uL3N0b3JlL3N0b3JlLnRzIiwid2VicGFjazovL2h1YmFuZy8uL3V0aWxzL2Flcy50cyIsIndlYnBhY2s6Ly9odWJhbmcvLi91dGlscy9hcGkudHMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vdXRpbHMvc3RhdGljRGF0YS50cyIsIndlYnBhY2s6Ly9odWJhbmcvLi91dGlscy90b2tlbl91dGlsLnRzIiwid2VicGFjazovL2h1YmFuZy8uL3V0aWxzL3VybC50cyIsIndlYnBhY2s6Ly9odWJhbmcvLi91dGlscy91dGlsLnRzIiwid2VicGFjazovL2h1YmFuZy8uL2NvbXBvbmVudHMvbG9naW4vZm9yZ2V0X3B3ZC9jYWxsX3VzL2NhbGxfdXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vY29tcG9uZW50cy9sb2dpbi9mb3JnZXRfcHdkL2ZpbmRfcHdkL2ZpbmRfcHdkX3N1Y2Nlc3MubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vY29tcG9uZW50cy9sb2dpbi9mb3JnZXRfcHdkL2ZvcmdldF9wd2QubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi9sb2dpbl93aWRnZXQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbl9kaWFsb2cubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vc3R5bGVzL2NvbXBvbmVudHMvd2lkZ2V0L2FjdGlvbl9idXR0b24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vc3R5bGVzL2NvbXBvbmVudHMvd2lkZ2V0L2dldF9jb2RlX3dpZGdldC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9odWJhbmcvLi9zdHlsZXMvY29tcG9uZW50cy93aWRnZXQvaW5wdXRfd2lkZ2V0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2h1YmFuZy8uL3N0eWxlcy9sYXlvdXQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vc3R5bGVzL2xvYWRpbmcubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vbm9kZV9tb2R1bGVzL2FudGQvZGlzdC9hbnRkLmNzcyIsIndlYnBhY2s6Ly9odWJhbmcvLi9zdHlsZXMvZ2xvYmFscy5jc3MiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vc3R5bGVzL3Zhci5zY3NzIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcIkByZWR1eGpzL3Rvb2xraXRcIiIsIndlYnBhY2s6Ly9odWJhbmcvZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9odWJhbmcvZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwiY3J5cHRvLWpzXCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9odWJhbmcvZXh0ZXJuYWwgXCJxc1wiIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwicmVhY3QtY29va2llc1wiIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwicmVkdXhcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbG9naW5fZGlhbG9nLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICcuLi8uLi9zdG9yZS9zdG9yZSc7XHJcbmltcG9ydCB7IGhpZGVMb2dpbiB9IGZyb20gJy4uLy4uL3N0b3JlL3NsaWNlcy9sb2dpblNsaWNlJztcclxuaW1wb3J0IExvZ2luV2lkZ2V0IGZyb20gJy4vbG9naW4vTG9naW5XaWRnZXQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZvcmdldFB3ZFdpZGdldCBmcm9tICcuL2ZvcmdldF9wd2QvRm9yZ2V0UHdkV2lkZ2V0JztcclxuXHJcbmNvbnN0IExvZ2luRGlhbG9nOiBOZXh0UGFnZSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3QgW3Nob3dGb3JnZXRQd2QsIHNldFNob3dGb3JnZXRQd2RdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YWz6Zet55m75b2V5by556qXXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGNsb3NlTG9naW4gPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goaGlkZUxvZ2luKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YiH5o2i55m75b2V5oiW6YCJ5oup5a+G56CBXHJcbiAgICAgKiBAcGFyYW0gc2hvd0ZvcmdldCBcclxuICAgICAqL1xyXG4gICAgY29uc3Qgc3dpdGNoTG9naW4gPSAoc2hvd0ZvcmdldDogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgIGlmIChzaG93Rm9yZ2V0ICE9IHNob3dGb3JnZXRQd2QpIHtcclxuICAgICAgICAgICAgc2V0U2hvd0ZvcmdldFB3ZChzaG93Rm9yZ2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5Cb2R5fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gc3JjPVwiL3N0YXRpYy9pbWFnZXMvbG9naW5fbG9nby5wbmdcIiB3aWR0aD1cIjE0MHB4XCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmRvd25Db2RlfSBzcmM9XCIvc3RhdGljL2ltYWdlcy9hcHBfZG93bi5wbmdcIiB3aWR0aD1cIjE2MHB4XCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kb3duSGludH0+5LiL6L295LqS5biuQVBQPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRvd25IaW50fT7mnInmm7TlpJrlip/og73nrYnnnYDkvaA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luV2lkZ2V0fSBzdHlsZT17eyBsZWZ0OiBzaG93Rm9yZ2V0UHdkID8gJy0xMDAlJyA6ICcwJywgb3BhY2l0eTogc2hvd0ZvcmdldFB3ZCA/ICcwLjQnIDogJzEnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9naW5XaWRnZXQgc3dpdGNoTG9naW49e3N3aXRjaExvZ2lufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5XaWRnZXR9IHN0eWxlPXt7IGxlZnQ6IHNob3dGb3JnZXRQd2QgPyAnMCcgOiAnMTAwJScsIG9wYWNpdHk6IHNob3dGb3JnZXRQd2QgPyAnMScgOiAnMC40JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0ZvcmdldFB3ZCAmJiA8Rm9yZ2V0UHdkV2lkZ2V0IHN3aXRjaExvZ2luPXtzd2l0Y2hMb2dpbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmRpYWxvZ0Nsb3NlfVxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvX3doaXRlX2Nsb3NlLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwcHhcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17Y2xvc2VMb2dpbn0gYWx0PVwiXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRGlhbG9nOyIsImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNoZWNrQ29kZSwgY2hlY2tQaG9uZSwgY2hlY2tQd2QgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvdXRpbFwiO1xyXG5pbXBvcnQgR2V0Q29kZVdpZGdldCBmcm9tIFwiLi4vLi4vd2lkZ2V0L0dldENvZGVXaWRnZXRcIjtcclxuaW1wb3J0IElucHV0V2lkZ2V0IGZyb20gXCIuLi8uLi93aWRnZXQvSW5wdXRXaWRnZXRcIjtcclxuaW1wb3J0IHsgSUxvZ2luV2lkZ2V0IH0gZnJvbSBcIi4uL2xvZ2luL0xvZ2luV2lkZ2V0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9mb3JnZXRfcHdkLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IEFjdGlvbkJ1dHRvbiBmcm9tICcuLi8uLi93aWRnZXQvQWN0aW9uQnV0dG9uJztcclxuaW1wb3J0IENhbGxVcyBmcm9tIFwiLi9jYWxsX3VzL0NhbGxVc1wiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgRmluZFB3ZFN1Y2Nlc3MgZnJvbSBcIi4vZmluZF9wd2QvRmluZFB3ZFN1Y2Nlc3NcIjtcclxuXHJcbmNvbnN0IEZvcmdldFB3ZFdpZGdldDogTmV4dFBhZ2U8SUxvZ2luV2lkZ2V0PiA9ICh7XHJcbiAgICBzd2l0Y2hMb2dpblxyXG59KSA9PiB7XHJcbiAgICBjb25zdCBbcGhvbmUsIHNldFBob25lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtjb2RlLCBzZXRDb2RlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2Vycm9yVGV4dCwgc2V0RXJyb3JUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzaG93VHlwZSwgc2V0U2hvd1R5cGVdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIHZhciBpc0NhblNlbmQgPSB0cnVlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6L+U5Zue55m75b2VXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGdvTG9naW4gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycm9yVGV4dCkge1xyXG4gICAgICAgICAgICBzZXRFcnJvclRleHQoXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzd2l0Y2hMb2dpbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaExvZ2luKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd0NhbGxVcyA9ICgpID0+IHtcclxuICAgICAgICBpZiAoc2hvd1R5cGUgIT09IDEpIHtcclxuICAgICAgICAgICAgc2V0U2hvd1R5cGUoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gKiDojrflj5bmiYvmnLrlj7dcclxuICovXHJcbiAgICBjb25zdCBnZXRDb2RlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghaXNDYW5TZW5kKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghcGhvbmUpIHtcclxuICAgICAgICAgICAgc2V0RXJyb3JUZXh0KCfor7fovpPlhaXmiYvmnLrlj7cnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBlcnJvciA9IGNoZWNrUGhvbmUocGhvbmUpO1xyXG4gICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICBzZXRFcnJvclRleHQoZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEVycm9yVGV4dCgnJyk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0Q2FuU2VuZCA9IChjYW5TZW5kOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgaXNDYW5TZW5kID0gY2FuU2VuZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaPkOS6pFxyXG4gICAgICovXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGVycm9yID0gY2hlY2tQaG9uZShwaG9uZSk7XHJcbiAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHNldEVycm9yVGV4dChlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXJyb3IgPSBjaGVja0NvZGUoY29kZSk7XHJcbiAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHNldEVycm9yVGV4dChlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXJyb3IgPSBjaGVja1B3ZChwYXNzd29yZCk7XHJcbiAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHNldEVycm9yVGV4dChlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldEVycm9yVGV4dCgnJylcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLmj5DkuqTor7fmsYJcIik7XHJcbiAgICAgICAgc2V0U2hvd1R5cGUoMik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcmdldFdpZGdldH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JnZXRXaWRnZXRDb250ZW50fSBzdHlsZT17eyBsZWZ0OiBzaG93VHlwZSA9PT0gMCA/ICcwJyA6ICctMTAwJScsIG9wYWNpdHk6IHNob3dUeXBlID09PSAwID8gJzEnIDogJzAuNCcgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PumHjee9ruWvhueggTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVycm9yVGV4dH0gc3R5bGU9e3sgb3BhY2l0eTogZXJyb3JUZXh0ID8gMSA6IDAgfX0+e2Vycm9yVGV4dH08L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRXaWRnZXR9IHN0eWxlPXt7IG1hcmdpblRvcDogXCI0MHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb19sb2dpbl9waG9uZS5wbmdcIiBoZWlnaHQ9XCIyMHB4XCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRXaWRnZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGludFRleHQ9XCLor7fovpPlhaXmiYvmnLrlj7dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGU9XCJ0ZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblRleHRDaGFuZ2U9eyhrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBob25lKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxHZXRDb2RlV2lkZ2V0IHBob25lPXtwaG9uZX0gZ2V0Q29kZT17Z2V0Q29kZX0gc2V0Q2FuU2VuZD17c2V0Q2FuU2VuZH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRXaWRnZXR9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29fbG9naW5fY29kZS5wbmdcIiBoZWlnaHQ9XCIyMHB4XCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRXaWRnZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGludFRleHQ9XCLovpPlhaXpqozor4HnoIFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25UZXh0Q2hhbmdlPXsoa2V5KSA9PiB7IHNldENvZGUoa2V5KSB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0V2lkZ2V0fT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvX2xvZ2luX3Bhc3N3b3JkLnBuZ1wiIGhlaWdodD1cIjIwcHhcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFdpZGdldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaW50VGV4dD1cIui+k+WFpeWvhueggSDvvIg2LTIw5L2N5pWw5a2X5ZKM5a2X5q+N77yJXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRUeXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblRleHRDaGFuZ2U9eyhrZXkpID0+IHsgc2V0UGFzc3dvcmQoa2V5KSB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPEFjdGlvbkJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbkJ0bn0gdmFsdWU9XCLlrowgIOaIkFwiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oaW50Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiA+5omL5py65Y+35peg5rOV5o6l5Y+X6aqM6K+B56CB77yfPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdFVzfSBvbkNsaWNrPXtzaG93Q2FsbFVzfSA+6IGU57O75oiR5LusPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmdvTG9naW59IG9uQ2xpY2s9e2dvTG9naW59Pui/lOWbnueZu+W9lemhtTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYWxsVXN9IHN0eWxlPXt7IGxlZnQ6IHNob3dUeXBlID09PSAxID8gJzAnIDogJzEwMCUnLCBvcGFjaXR5OiBzaG93VHlwZSA9PT0gMSA/ICcxJyA6ICcwLjQnIH19PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzaG93VHlwZSA9PT0gMSAmJiA8Q2FsbFVzIGdvTG9naW49e2dvTG9naW59IC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhbGxVc30gc3R5bGU9e3sgbGVmdDogc2hvd1R5cGUgPT09IDIgPyAnMCcgOiAnMTAwJScsIG9wYWNpdHk6IHNob3dUeXBlID09PSAyID8gJzEnIDogJzAuNCcgfX0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNob3dUeXBlID09PSAyICYmIDxGaW5kUHdkU3VjY2VzcyBnb0xvZ2luPXtnb0xvZ2lufSAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcmdldFB3ZFdpZGdldDsiLCJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jYWxsX3VzLm1vZHVsZS5zY3NzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdvTG9naW4ge1xyXG4gICAgZ29Mb2dpbjogKCkgPT4gdm9pZFxyXG59XHJcblxyXG5jb25zdCBDYWxsVXM6IE5leHRQYWdlPElHb0xvZ2luPiA9ICh7XHJcbiAgICBnb0xvZ2luXHJcbn0pID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHlDb250ZW50fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5lbWFpbH0+6IGU57O76YKu566x77yaMTIwNzcxMTgzOEBxcS5jb208L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmhpbnR9PuaUtuWIsOaCqOeahOmCruS7tuWQju+8jOaIkeS7rOWwhuesrOS4gOaXtumXtOS4uuaCqOacjeWKoe+8gTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdj48c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5nb0xvZ2lufSBvbkNsaWNrPXtnb0xvZ2lufT7ov5Tlm57nmbvlvZXpobU8L3NwYW4+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsbFVzOyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZmluZF9wd2Rfc3VjY2Vzcy5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBBY3Rpb25CdXR0b24gZnJvbSAnLi4vLi4vLi4vd2lkZ2V0L0FjdGlvbkJ1dHRvbic7XHJcbmltcG9ydCB7IElHb0xvZ2luIH0gZnJvbSBcIi4uL2NhbGxfdXMvQ2FsbFVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaW5kUHdkU3VjY2VzcyBleHRlbmRzIENvbXBvbmVudDxJR29Mb2dpbj4ge1xyXG5cclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIHRpbWU6IDMsXHJcbiAgICB9O1xyXG5cclxuICAgIHRpbWVySUQ6IGFueTtcclxuICAgIHRpbWVzID0gMztcclxuXHJcbiAgICBzdGFydFRpbWUoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lcklEID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVzLS07XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgdGltZTogdGhpcy50aW1lc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lcyA8IDApIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklEKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZ29Mb2dpbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwMClcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0VGltZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklEKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmluZFB3ZH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmluZENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29fc3VjY2Vzcy5wbmdcIiB3aWR0aD17NDB9IGhlaWdodD17NDB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhpbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPuWvhueggeiuvue9ruaIkOWKnzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxMHB4JyB9fT7kvaDlj6/ku6Xkvb/nlKjmlrDlr4bnoIHov5vooYznmbvlvZU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8QWN0aW9uQnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luQnRufSB2YWx1ZT1cIueri+WNs+eZu+W9lVwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuZ29Mb2dpbn0gLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuanVtcEhpbnR9PumhtemdouWwhuWcqDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmp1bXBUaW1lfT57dGhpcy5zdGF0ZS50aW1lfXM8L3NwYW4+5ZCO6Ieq5Yqo6Lez6L2s6Iez55m75b2V6aG1PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbG9naW5fd2lkZ2V0Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IElucHV0V2lkZ2V0IGZyb20gJy4uLy4uL3dpZGdldC9JbnB1dFdpZGdldCc7XHJcbmltcG9ydCB7IGNoZWNrUGhvbmUsIGNoZWNrQ29kZSwgY2hlY2tQd2QgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlsJztcclxuaW1wb3J0IEFjdGlvbkJ1dHRvbiBmcm9tICcuLi8uLi93aWRnZXQvQWN0aW9uQnV0dG9uJztcclxuaW1wb3J0IEdldENvZGVXaWRnZXQgZnJvbSBcIi4uLy4uL3dpZGdldC9HZXRDb2RlV2lkZ2V0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGNvZGVMb2dpbiwgTG9naW5CZWFuLCBwd2RMb2dpbiwgVXNlckJlYW4sIGdldFBob25lQ29kZSB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9zZXJ2aWNlcy91c2VyXCI7XHJcbmltcG9ydCB7IFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBSZXMgfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvc2VydmljZXMvaG9tZVwiO1xyXG5pbXBvcnQgeyBBeGlvc1Byb21pc2UsIEF4aW9zUmVzcG9uc2UgfSBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgc2F2ZVVzZXIgfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvc2xpY2VzL3VzZXJTbGljZVwiO1xyXG5pbXBvcnQgeyBlbmNyeXB0IH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2Flc1wiO1xyXG5pbXBvcnQgeyBoaWRlTG9naW4gfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9zbGljZXMvbG9naW5TbGljZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElMb2dpbldpZGdldCB7XHJcbiAgICBzd2l0Y2hMb2dpbjogKHNob3dGb3JnZXQ6IGJvb2xlYW4pID0+IHZvaWQsXHJcbn1cclxuXHJcbmNvbnN0IExvZ2luV2lkZ2V0OiBOZXh0UGFnZTxJTG9naW5XaWRnZXQ+ID0gKHtcclxuICAgIHN3aXRjaExvZ2luXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IFtpc0NvZGVMb2dpbiwgc2V0Q29kZUxvZ2luXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbY29kZSwgc2V0Q29kZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtlcnJvclRleHQsIHNldEVycm9yVGV4dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgdmFyIGlzQ2FuU2VuZCA9IHRydWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliIfmjaLnmbvlvZXmlrnlvI9cclxuICAgICAqIEBwYXJhbSBjb2RlTG9naW4g5piv5ZCm6aqM6K+B56CB55m75b2VXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHN3aXRjaExvZ2luVHlwZShjb2RlTG9naW46IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoaXNDb2RlTG9naW4gIT09IGNvZGVMb2dpbikge1xyXG4gICAgICAgICAgICBzZXRDb2RlTG9naW4oY29kZUxvZ2luKTtcclxuICAgICAgICAgICAgaWYgKGVycm9yVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3JUZXh0KCcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluaJi+acuuWPt1xyXG4gICAgICovXHJcbiAgICBjb25zdCBnZXRDb2RlID0gKHBob25lOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBpZiAoIWlzQ2FuU2VuZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcGhvbmUpIHtcclxuICAgICAgICAgICAgc2V0RXJyb3JUZXh0KCfor7fovpPlhaXmiYvmnLrlj7cnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBlcnJvciA9IGNoZWNrUGhvbmUocGhvbmUpO1xyXG4gICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICBzZXRFcnJvclRleHQoZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEVycm9yVGV4dCgnJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHAgPSBlbmNyeXB0KHBob25lKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwKTtcclxuICAgICAgICBkZWFsUGhvbmVDb2RlKHApO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBkZWFsUGhvbmVDb2RlKHA6IHN0cmluZykge1xyXG4gICAgICAgIGdldFBob25lQ29kZSh7XHJcbiAgICAgICAgICAgIHBob25lOiBwLFxyXG4gICAgICAgICAgICB0eXBlOiAxXHJcbiAgICAgICAgfSkudGhlbigoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgc2V0RXJyb3JUZXh0KFwi5Y+R6YCB5aSx6LSl77yB6K+35qOA5p+l5omL5py65Y+35qC85byP5piv5ZCm5q2j56GuXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW8guW4uFwiLCBlcnIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0Q2FuU2VuZCA9IChjYW5TZW5kOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgaXNDYW5TZW5kID0gY2FuU2VuZDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnmbvlvZVcclxuICAgICAqL1xyXG4gICAgY29uc3QgaGFuZGxlTG9naW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGVycm9yID0gY2hlY2tQaG9uZShwaG9uZSk7XHJcbiAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHNldEVycm9yVGV4dChlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzQ29kZUxvZ2luKSB7XHJcbiAgICAgICAgICAgIGVycm9yID0gY2hlY2tDb2RlKGNvZGUpO1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yVGV4dChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlcnJvciA9IGNoZWNrUHdkKHBhc3N3b3JkKTtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvclRleHQoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRFcnJvclRleHQoJycpO1xyXG5cclxuICAgICAgICB2YXIgcmVxdWVzdDtcclxuICAgICAgICBpZiAoaXNDb2RlTG9naW4pIHtcclxuICAgICAgICAgICAgcmVxdWVzdCA9IGNvZGVMb2dpbih7XHJcbiAgICAgICAgICAgICAgICBwaG9uZTogZW5jcnlwdChwaG9uZSksXHJcbiAgICAgICAgICAgICAgICBjb2RlOiBlbmNyeXB0KGNvZGUpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXF1ZXN0ID0gcHdkTG9naW4oe1xyXG4gICAgICAgICAgICAgICAgcGhvbmU6IGVuY3J5cHQocGhvbmUpLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGVuY3J5cHQocGFzc3dvcmQpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlcXVlc3QudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09IDEpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNhdmVVc2VyKGRhdGEpKTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGhpZGVMb2dpbigpKTtcclxuICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3JUZXh0KGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICBzZXRFcnJvclRleHQoaXNDb2RlTG9naW4gPyBcIui0puWPt+aIlumqjOivgeeggemUmeivr1wiIDogXCLotKblj7fmiJblr4bnoIHplJnor69cIik7XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOi3s+i9rOWIsOW/mOiusOWvhueggVxyXG4gICAgICovXHJcbiAgICBjb25zdCBnb1RvRm9yZ2V0UHdkID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChlcnJvclRleHQpIHtcclxuICAgICAgICAgICAgc2V0RXJyb3JUZXh0KFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3dpdGNoTG9naW4gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzd2l0Y2hMb2dpbih0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5XaWRnZXR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5TdGF0dXN9PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpblN0YXR1c0J0fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogaXNDb2RlTG9naW4gPyAnIzMzODhGRicgOiAnIzQzNWI4NycsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tQ29sb3I6IGlzQ29kZUxvZ2luID8gJyMzMzg4RkYnIDogJ3RyYW5zcGFyZW50J1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hMb2dpblR5cGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fT7pqozor4HnoIHnmbvlvZU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luU3RhdHVzQnR9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiNzBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpc0NvZGVMb2dpbiA/ICcjNDM1Yjg3JyA6ICcjMzM4OEZGJyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b21Db2xvcjogaXNDb2RlTG9naW4gPyAndHJhbnNwYXJlbnQnIDogJyMzMzg4RkYnXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaExvZ2luVHlwZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9fT7lr4bnoIHnmbvlvZU8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lcnJvclRleHR9IHN0eWxlPXt7IG9wYWNpdHk6IGVycm9yVGV4dCA/IDEgOiAwIH19PntlcnJvclRleHR9PC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0V2lkZ2V0fT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvX2xvZ2luX3Bob25lLnBuZ1wiIGhlaWdodD1cIjIwcHhcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFdpZGdldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzNnB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGludFRleHQ9XCLor7fovpPlhaXmiYvmnLrlj7dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGU9XCJ0ZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblRleHRDaGFuZ2U9eyhrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBob25lKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxHZXRDb2RlV2lkZ2V0IHBob25lPXtwaG9uZX0gZ2V0Q29kZT17Z2V0Q29kZX0gaXNIaWRkZW49eyFpc0NvZGVMb2dpbn0gc2V0Q2FuU2VuZD17c2V0Q2FuU2VuZH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRXaWRnZXR9IHN0eWxlPXt7IHZpc2liaWxpdHk6IGlzQ29kZUxvZ2luID8gJ3Zpc2libGUnIDogJ2hpZGRlbicsIGhlaWdodDogaXNDb2RlTG9naW4gPyBcIjM2cHhcIiA6ICcwcHgnLCBtYXJnaW46IFwiMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29fbG9naW5fY29kZS5wbmdcIiBoZWlnaHQ9XCIyMHB4XCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRXaWRnZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGludFRleHQ9XCLovpPlhaXpqozor4HnoIFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25UZXh0Q2hhbmdlPXsoa2V5KSA9PiB7IHNldENvZGUoa2V5KSB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0V2lkZ2V0fSBzdHlsZT17eyB2aXNpYmlsaXR5OiBpc0NvZGVMb2dpbiA/ICdoaWRkZW4nIDogJ3Zpc2libGUnLCBoZWlnaHQ6IGlzQ29kZUxvZ2luID8gXCIwcHhcIiA6IFwiMzZweFwiLCBtYXJnaW46IFwiMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29fbG9naW5fcGFzc3dvcmQucG5nXCIgaGVpZ2h0PVwiMjBweFwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0V2lkZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpbnRUZXh0PVwi6L6T5YWl5a+G56CBIO+8iDYtMjDkvY3mlbDlrZflkozlrZfmr43vvIlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVGV4dENoYW5nZT17KGtleSkgPT4geyBzZXRQYXNzd29yZChrZXkpIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8QWN0aW9uQnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luQnRufSB2YWx1ZT1cIueZuyAg5b2VXCIgb25DbGljaz17aGFuZGxlTG9naW59IC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhpbnRDb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luSGludH0gc3R5bGU9e3sgdmlzaWJpbGl0eTogaXNDb2RlTG9naW4gPyAndmlzaWJsZScgOiAnaGlkZGVuJyB9fSA+5pyq5rOo5YaM55qE5omL5py65Y+377yM6buY6K6k5rOo5YaM57uR5a6a44CCPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZm9yZ2V0UHdkfSBzdHlsZT17eyB2aXNpYmlsaXR5OiBpc0NvZGVMb2dpbiA/ICdoaWRkZW4nIDogJ3Zpc2libGUnIH19IG9uQ2xpY2s9e2dvVG9Gb3JnZXRQd2R9ID7lv5jorrDlr4bnoIE8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdGhlckxvZ2lufT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucXFMb2dpbn0gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2VjaGF0TG9naW59IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luV2lkZ2V0OyIsImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvY29tcG9uZW50cy93aWRnZXQvYWN0aW9uX2J1dHRvbi5tb2R1bGUuc2Nzcyc7XHJcblxyXG5pbnRlcmZhY2UgQnV0dG9uUHJvcCB7XHJcbiAgICB2YWx1ZT86IHN0cmluZyxcclxuICAgIG9uQ2xpY2s/OiAoKSA9PiB2b2lkXHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmjInpkq4gIGNsYXNzTmFtZeiuvue9ruS6huiDjOaZr+iJsuWQju+8jDpob3ZlcuWSjDphY3RpdmXlvpfoh6rlrprkuYlcclxuICovXHJcbmNvbnN0IEFjdGlvbkJ1dHRvbjogTmV4dFBhZ2U8QnV0dG9uUHJvcD4gPSAoXHJcbiAgICB7XHJcbiAgICAgICAgb25DbGljayxcclxuICAgICAgICB2YWx1ZSA9IFwi56GuIOWumlwiLFxyXG4gICAgICAgIGNsYXNzTmFtZSA9ICcnLFxyXG4gICAgfVxyXG4pID0+IHtcclxuXHJcbiAgICByZXR1cm4gPGJ1dHRvbiBjbGFzc05hbWU9e1tzdHlsZXMuYnV0dG9uU3R5bGUsIGNsYXNzTmFtZV0uam9pbignICcpfVxyXG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICA+e3ZhbHVlfTwvYnV0dG9uPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25CdXR0b247IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2NvbXBvbmVudHMvd2lkZ2V0L2dldF9jb2RlX3dpZGdldC5tb2R1bGUuc2Nzcyc7XHJcblxyXG5pbnRlcmZhY2UgSUdldENvZGUge1xyXG4gICAgcGhvbmU6IHN0cmluZyxcclxuICAgIGdldENvZGU6IChwaG9uZTogc3RyaW5nKSA9PiBib29sZWFuLFxyXG4gICAgaXNIaWRkZW4/OiBib29sZWFuLFxyXG4gICAgc2V0Q2FuU2VuZDogKGNhblNlbmQ6IGJvb2xlYW4pID0+IHZvaWQsXHJcbn1cclxuXHJcbmNsYXNzIEdldENvZGVXaWRnZXQgZXh0ZW5kcyBDb21wb25lbnQ8SUdldENvZGU+IHtcclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBjb2RlVGltZTogMFxyXG4gICAgfVxyXG5cclxuICAgIHRpbWVySUQ7XHJcbiAgICB0aW1lID0gdGhpcy5zdGF0ZS5jb2RlVGltZTtcclxuXHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRDYW5TZW5kKHRydWUpOyAvL+m7mOiupOWPr+S7peeCueWHu1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklEKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmHjeaWsOiOt+WPlumqjOivgeeggeWAkuiuoeaXtlxyXG4gICAgICovXHJcbiAgICBzdGFydENvZGVUaW1lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWUgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNldENhblNlbmQoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWUgPSA2MDtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb2RlVGltZSh0aGlzLnRpbWUpO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVySUQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWUtLTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q29kZVRpbWUodGhpcy50aW1lKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbWUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0Q2FuU2VuZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJRCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRDb2RlVGltZSh0aW1lOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgY29kZVRpbWU6IHRpbWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZSA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaXNPayA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZ2V0Q29kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlzT2sgPSB0aGlzLnByb3BzLmdldENvZGUodGhpcy5wcm9wcy5waG9uZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaXNPaykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0Q29kZVRpbWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb2RlVGV4dH1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogKHRoaXMuc3RhdGUuY29kZVRpbWUgPD0gMCkgPyBcIiNGMUY3RkZcIiA6IFwiI0YxRjJGM1wiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICh0aGlzLnN0YXRlLmNvZGVUaW1lIDw9IDApID8gXCIjMzM4OEZGXCIgOiBcIiNCQUJEQzNcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRoaXMucHJvcHMuaXNIaWRkZW4gPyBcIm5vbmVcIiA6IFwiYmxvY2tcIlxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2xpY2t9PlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb2RlVGltZSA8PSAwID8gXCLojrflj5bpqozor4HnoIFcIiA6ICh0aGlzLnN0YXRlLmNvZGVUaW1lICsgXCLnp5Lph43mlrDojrflj5ZcIil9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHZXRDb2RlV2lkZ2V0OyIsImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9jb21wb25lbnRzL3dpZGdldC9pbnB1dF93aWRnZXQubW9kdWxlLnNjc3MnO1xyXG5cclxuaW50ZXJmYWNlIElucHV0RGF0ZSB7XHJcbiAgICBoaW50VGV4dD86IHN0cmluZyxcclxuICAgIGlucHV0VHlwZT86IHN0cmluZyxcclxuICAgIHdpZHRoPzogc3RyaW5nLFxyXG4gICAgaGVpZ2h0Pzogc3RyaW5nLFxyXG4gICAgZm9udFNpemU/OiBzdHJpbmcsXHJcbiAgICB0ZXh0Q29sb3I/OiBzdHJpbmcsXHJcbiAgICBtYXhMZW5ndGg/OiBudW1iZXIsXHJcbiAgICBvblRleHRDaGFuZ2U/OiAoa2V5OiBzdHJpbmcpID0+IHZvaWQsXHJcbiAgICBvbkZvY3VzPzogKCkgPT4gdm9pZCxcclxufVxyXG5cclxuY29uc3QgSW5wdXRXaWRnZXQ6IE5leHRQYWdlPElucHV0RGF0ZT4gPSAoXHJcbiAgICB7XHJcbiAgICAgICAgaGludFRleHQgPSBcIuivt+i+k+WFpVwiLFxyXG4gICAgICAgIGlucHV0VHlwZSA9ICd0ZXh0JyxcclxuICAgICAgICB3aWR0aCA9ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQgPSAnMTAwJScsXHJcbiAgICAgICAgZm9udFNpemUgPSAnMTNweCcsXHJcbiAgICAgICAgdGV4dENvbG9yID0gJyMzNjM5NTEnLFxyXG4gICAgICAgIG1heExlbmd0aCxcclxuICAgICAgICBvblRleHRDaGFuZ2UsXHJcbiAgICAgICAgb25Gb2N1c1xyXG4gICAgfVxyXG4pID0+IHtcclxuXHJcbiAgICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcHdkVHlwZSwgc2V0UHdkVHlwZV0gPSB1c2VTdGF0ZSgncGFzc3dvcmQnKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldFRleHQodmFsdWUpO1xyXG4gICAgICAgIGlmIChvblRleHRDaGFuZ2UgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBvblRleHRDaGFuZ2UodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbGVhclRleHQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VGV4dCgnJyk7XHJcbiAgICAgICAgaWYgKG9uVGV4dENoYW5nZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIG9uVGV4dENoYW5nZSgnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN3aXRjaFB3ZFNob3dPckhpZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHB3ZFR5cGUgPT09IFwicGFzc3dvcmRcIikge1xyXG4gICAgICAgICAgICBzZXRQd2RUeXBlKFwidGV4dFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRQd2RUeXBlKFwicGFzc3dvcmRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0Q29udGVudH0gc3R5bGU9e3sgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgdHlwZT17aW5wdXRUeXBlID09PSBcInBhc3N3b3JkXCIgPyBwd2RUeXBlIDogaW5wdXRUeXBlfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2hpbnRUZXh0fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IGZvbnRTaXplLCBjb2xvcjogdGV4dENvbG9yIH19XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGV4dH1cclxuICAgICAgICAgICAgICAgIG1heExlbmd0aD17bWF4TGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIG9uRm9jdXM9e29uRm9jdXN9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jbGVhckljb259XHJcbiAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb19jbGVhci5wbmdcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjIwcHhcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIyMHB4XCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgdmlzaWJpbGl0eTogdGV4dCA9PT0gJycgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJyB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtjbGVhclRleHR9XHJcbiAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnB3ZFNob3d9XHJcbiAgICAgICAgICAgIHNyYz17cHdkVHlwZSA9PT0gXCJwYXNzd29yZFwiID8gXCIvc3RhdGljL2ltYWdlcy9pY29fcHdkX2hpZGUucG5nXCIgOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb19wd2Rfc2hvdy5wbmdcIn1cclxuICAgICAgICAgICAgd2lkdGg9XCIyMHB4XCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMTVweFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGlucHV0VHlwZSA9PT0gJ3Bhc3N3b3JkJyA/IFwiYmxvY2tcIiA6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3N3aXRjaFB3ZFNob3dPckhpZGV9XHJcbiAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICA8L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0V2lkZ2V0OyIsIi8qKlxyXG4gKiBAYXV0aG9yOiBsZXJveVxyXG4gKiBAZGF0ZTogMjAyMS84LzI3IDE4OjIxXHJcbiAqIEBkZXNjcmlwdGlvbu+8ml9lcnJvclxyXG4gKi9cclxuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vTGF5b3V0JztcclxuaW1wb3J0IHsgUmVzdWx0IH0gZnJvbSAnYW50ZCc7XHJcblxyXG5jb25zdCBlcnJUaXRsZSA9IHtcclxuICA0MDM6ICc0MDMgfCBTb3JyeSwgeW91IGFyZSBub3QgYXV0aG9yaXplZCB0byBhY2Nlc3MgdGhpcyBwYWdlLicsXHJcbiAgNDA0OiAnNDA0IHwgU29ycnksIHRoZSBwYWdlIHlvdSB2aXNpdGVkIGRvZXMgbm90IGV4aXN0LicsXHJcbiAgNTAwOiAnNTAwIHwgU29ycnksIHNvbWV0aGluZyB3ZW50IHdyb25nLicsXHJcbn07XHJcblxyXG5jb25zdCBFcnJvclBhZ2U6IE5leHRQYWdlPHsgc3RhdHVzQ29kZT86IDQwMyB8IDQwNCB8IDUwMCB9PiA9ICh7IHN0YXR1c0NvZGUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPXtzdGF0dXNDb2RlICYmIGVyclRpdGxlW3N0YXR1c0NvZGVdfT5cclxuICAgICAgPFJlc3VsdCBzdGF0dXM9e3N0YXR1c0NvZGV9IHRpdGxlPXtzdGF0dXNDb2RlfSAvPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVycm9yUGFnZTtcclxuIiwiXHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IFJlYWN0Tm9kZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9sYXlvdXQubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgTGF5b3V0OiBOZXh0UGFnZTx7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG4gICAga2V5d29yZHM/OiBzdHJpbmc7XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlIHwgUmVhY3ROb2RlW107XHJcbn0+ID0gKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBrZXl3b3JkcywgY2xhc3NOYW1lLCBjaGlsZHJlbiB9KSA9PiB7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0b1RvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b1RvcCcpO1xyXG4gICAgICAgICAgICBpZiAodG9Ub3AgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDEwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0b1RvcC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvVG9wLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDwgMTMwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvVG9wLnN0eWxlLnJpZ2h0ID0gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCAtIDEzMDAgKyB3aW5kb3cucGFnZVhPZmZzZXQpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0b1RvcC5zdHlsZS5yaWdodCA9IFwiY2FsYygoMTAwJSAtIDEzMDBweCkgLyAyIC0gNTBweCArIFwiICsgd2luZG93LnBhZ2VYT2Zmc2V0ICsgXCIpXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiA8PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+e3RpdGxlIHx8ICfkupLluK4nfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9e2tleXdvcmRzIHx8ICcnfSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbiB8fCAnJ30gLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9uIHx8ICcnfSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57Y2hpbGRyZW59PC9tYWluPlxyXG5cclxuICAgICAgICA8aW1nIGlkPVwidG9Ub3BcIiBjbGFzc05hbWU9e3N0eWxlcy50b1RvcH0gc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvX2dvX3RvcC5wbmdcIiB3aWR0aD1cIjQwcHhcIiB0aXRsZT1cIui/lOWbnumhtumDqFwiIGFsdD1cIlwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfX0gLz5cclxuICAgIDwvPlxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiLyoqXHJcbiAqIEBhdXRob3I6IGxlcm95XHJcbiAqIEBkYXRlOiAyMDIxLzgvMjggMTU6MDNcclxuICogQGRlc2NyaXB0aW9u77yaTG9hZGluZ1xyXG4gKi9cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvbG9hZGluZy5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgd2FpdFRpbWUgfSBmcm9tICcuLi91dGlscy91dGlsJztcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5jb25zdCBMb2FkaW5nUGFnZTogTmV4dFBhZ2U8eyBpc01vYmlsZTogYm9vbGVhbjsgbG9hZGluZzogYm9vbGVhbjsgZGVsYXk/OiBudW1iZXIgfT4gPSAoe1xyXG4gIGlzTW9iaWxlLFxyXG4gIGxvYWRpbmcsXHJcbiAgZGVsYXksXHJcbn0pID0+IHtcclxuICBjb25zdCBbc3Bpbm5pbmcsIHNldFNwaW5uaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCFsb2FkaW5nICYmIGRlbGF5KSB7XHJcbiAgICAgICAgYXdhaXQgd2FpdFRpbWUoZGVsYXkpO1xyXG4gICAgICAgIHNldFNwaW5uaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRTcGlubmluZyhsb2FkaW5nKTtcclxuICAgIH0pKCk7XHJcbiAgfSwgW2xvYWRpbmddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtcclxuICAgICAgICBbc3R5bGVzLnByZWxvYWRlcl06IHRydWUsXHJcbiAgICAgICAgW3N0eWxlcy5zaG93XTogc3Bpbm5pbmcsXHJcbiAgICAgICAgW3N0eWxlcy5oaWRkZW5dOiAhc3Bpbm5pbmcsXHJcbiAgICAgIH0pfVxyXG4gICAgPlxyXG4gICAgICB7aXNNb2JpbGUgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snc3Bpbm5lciddfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2RvdWJsZS1ib3VuY2UxJ119IC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydkb3VibGUtYm91bmNlMiddfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2NzLWxvYWRlciddfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2NzLWxvYWRlci1pbm5lciddfT5cclxuICAgICAgICAgICAgPHNwYW4+4pePPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj7il488L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPuKXjzwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+4pePPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj7il488L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPuKXjzwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdQYWdlO1xyXG4iLCIvKipcbiAqIEBhdXRob3I6IGxlcm95XG4gKiBAZGF0ZTogMjAyMS84LzIwIDIwOjMwXG4gKiBAZGVzY3JpcHRpb27vvJpfYXBwXG4gKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgRXJyb3JQYWdlIGZyb20gJy4uL2xheW91dC9FcnJvcic7XG5pbXBvcnQgTG9hZGluZ1BhZ2UgZnJvbSAnLi4vbGF5b3V0L0xvYWRpbmcnO1xuaW1wb3J0IHdyYXBwZXIsIHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICcuLi9zdG9yZS9zdG9yZSc7XG5pbXBvcnQgeyBjbGVhclBlbmRpbmcgfSBmcm9tICcuLi91dGlscy9hcGknO1xuXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy92YXIuc2Nzcyc7XG5pbXBvcnQgTG9naW5EaWFsb2cgZnJvbSAnLi4vY29tcG9uZW50cy9sb2dpbi9Mb2dpbkRpYWxvZyc7XG5pbXBvcnQgeyBmZXRjaFR5cGVBZGRyZXNzU2Nob29sIH0gZnJvbSAnLi4vc3RvcmUvc2xpY2VzL2NvbW1vblNsaWNlJztcbmltcG9ydCB7IGZldGNoQXV0b0xvZ2luIH0gZnJvbSAnLi4vc3RvcmUvc2xpY2VzL3VzZXJTbGljZSc7XG5pbXBvcnQgeyBnZXRUb2tlbiwgdG9rZW5LZXkgfSBmcm9tICcuLi91dGlscy90b2tlbl91dGlsJztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU3RhcnQgPSAodXJsKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgTG9hZGluZzogJHt1cmx9YCk7XG4gICAgICAvLyDot6/nlLHliIfmjaJsb2FkaW5nXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlU3RvcCA9ICgpID0+IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuXG4gICAgICAvLyDot6/nlLHliIfmjaLmuIXnqbpheGlvc+ivt+axguaxoFxuICAgICAgY2xlYXJQZW5kaW5nKCk7XG4gICAgfTtcblxuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVTdGFydCk7XG4gICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVN0b3ApO1xuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCBoYW5kbGVTdG9wKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVN0YXJ0KTtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlU3RvcCk7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VFcnJvcicsIGhhbmRsZVN0b3ApO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICBpZiAoWzQwMywgNDA0LCA1MDBdLmluY2x1ZGVzKHBhZ2VQcm9wcy5zdGF0dXNDb2RlKSkge1xuICAgIHJldHVybiA8RXJyb3JQYWdlIHN0YXR1c0NvZGU9e3BhZ2VQcm9wcy5zdGF0dXNDb2RlfSAvPjtcbiAgfVxuXG4gIGNvbnN0IGlzU2hvd0xvZ2luID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5sb2dpbi5pc1Nob3dMb2dpbik7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJBdXRob3JcIiBjb250ZW50PVwiTGVyb3lcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiYmFpZHUtc2l0ZS12ZXJpZmljYXRpb25cIiBjb250ZW50PVwidUdnek1aNFpmVlwiIC8+XG4gICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlLGNocm9tZT0xXCIgLz5cbiAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiY2xlYXJ0eXBlXCIgY29udGVudD1cIm9uXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cIkhhbmRoZWxkRnJpRU5EbHlcIiBjb250ZW50PVwiVHJ1ZVwiIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgc2hyaW5rLXRvLWZpdD1ubywgbWluaW11bS1zY2FsZT0xLjAsIG1heGltdW0tc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPW5vXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGEgY29udGVudD1cInllc1wiIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIgLz5cbiAgICAgICAgPG1ldGEgY29udGVudD1cInllc1wiIG5hbWU9XCJhcHBsZS10b3VjaC1mdWxsc2NyZWVuXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzEzNjU3NjJfdGM0OW44bmprc3AuY3NzXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxMb2FkaW5nUGFnZSBpc01vYmlsZT17cGFnZVByb3BzLmlzTW9iaWxlfSBsb2FkaW5nPXtsb2FkaW5nfSAvPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAge1xuICAgICAgICBpc1Nob3dMb2dpbiAmJiA8TG9naW5EaWFsb2cgLz5cbiAgICAgIH1cbiAgICA8Lz5cbiAgKTtcbn1cblxuLy8gT25seSB1bmNvbW1lbnQgdGhpcyBtZXRob2QgaWYgeW91IGhhdmUgYmxvY2tpbmcgZGF0YSByZXF1aXJlbWVudHMgZm9yXG4vLyBldmVyeSBzaW5nbGUgcGFnZSBpbiB5b3VyIGFwcGxpY2F0aW9uLiBUaGlzIGRpc2FibGVzIHRoZSBhYmlsaXR5IHRvXG4vLyBwZXJmb3JtIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLCBjYXVzaW5nIGV2ZXJ5IHBhZ2UgaW4geW91ciBhcHAgdG9cbi8vIGJlIHNlcnZlci1zaWRlIHJlbmRlcmVkLlxuLy9cbk15QXBwLmdldEluaXRpYWxQcm9wcyA9IHdyYXBwZXIuZ2V0SW5pdGlhbEFwcFByb3BzKChzdG9yZSkgPT4gYXN5bmMgKHsgQ29tcG9uZW50LCBjdHggfSkgPT4ge1xuICBsZXQgdXNlckFnZW50O1xuICBpZiAoY3R4LnJlcSkge1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS3mnI3liqHnq68tLS0tLS0nKTtcbiAgICBpZiAoIXN0b3JlLmdldFN0YXRlKCkudXNlci5pc0xvZ2luKSB7XG4gICAgICBhd2FpdCBzdG9yZS5kaXNwYXRjaChmZXRjaEF1dG9Mb2dpbih7fSkpO1xuICAgIH1cbiAgICB1c2VyQWdlbnQgPSBjdHgucmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXTtcbiAgfSBlbHNlIHtcbiAgICB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICB9XG4gIHJldHVybiB7XG4gICAgcGFnZVByb3BzOiB7XG4gICAgICAuLi4oQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA/IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoeyAuLi5jdHgsIHN0b3JlIH0pIDoge30pLFxuICAgICAgaXNNb2JpbGU6IC9Nb2JpbGUvZ2kudGVzdCh1c2VyQWdlbnQpLFxuICAgIH0sXG4gIH07XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApO1xuIiwiaW1wb3J0IGFwaSBmcm9tICcuLi8uLi91dGlscy9hcGknO1xyXG5pbXBvcnQgVXJsIGZyb20gJy4uLy4uL3V0aWxzL3VybCc7XHJcbmltcG9ydCB7IEZldGNoRm4sIExpbWl0SWRQYXJhbXMsIExpbWl0VHlwZVBhcmFtcyB9IGZyb20gJy4uL3BhcmFtcyc7XHJcbmltcG9ydCB0eXBlIHsgUmVzIH0gZnJvbSAnLi9ob21lJztcclxuXHJcblxyXG5leHBvcnQgdHlwZSBMaXN0UGFnZUJlYW48VD4gPSB7XHJcbiAgICB0b3RhbDogbnVtYmVyLFxyXG4gICAgbGlzdDogQXJyYXk8VD5cclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIENpcmNsZUJlYW4gPSB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgY2lyY2xlX25hbWU6IHN0cmluZztcclxuICAgIGF2YXRhcjogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGNpcmNsZV90YWc6IHN0cmluZztcclxuICAgIGNpcmNsZV9iYWNrZ3JvdW5kOiBzdHJpbmc7XHJcbiAgICBvd25lcl9pZDogc3RyaW5nO1xyXG4gICAgdHlwZTogbnVtYmVyO1xyXG4gICAgc3RhdHVzOiBudW1iZXI7XHJcbiAgICBvdXRfdmlzaWFibGVfbGV2ZWw6IG51bWJlcjtcclxuICAgIG5lZWRfYXBwbHk6IG51bWJlcjtcclxuICAgIGNyZWF0ZV90aW1lOiBzdHJpbmc7XHJcbiAgICBqb2luX3R5cGU6IG51bWJlcjtcclxufTtcclxuXHJcblxyXG4vKirlnIjlrZDliJfooaggKi9cclxuZXhwb3J0IGNvbnN0IGdldENpcmNsZUxpc3Q6IEZldGNoRm48TGltaXRUeXBlUGFyYW1zPiA9IChwYXJhbXMpID0+IHtcclxuICAgIHJldHVybiBhcGkucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiBVcmwuY2lyY2xlTGlzdCxcclxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgcGFyYW1zOiBwYXJhbXMsXHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8qKueUqOaIt+eahOWciOWtkOWIl+ihqCAqL1xyXG5leHBvcnQgY29uc3QgZ2V0VXNlckNpcmNsZUxpc3Q6IEZldGNoRm48TGltaXRJZFBhcmFtcz4gPSAocGFyYW1zKSA9PiB7XHJcbiAgICByZXR1cm4gYXBpLnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogVXJsLnVzZXJDaXJjbGVMaXN0LFxyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICBwYXJhbXM6IHBhcmFtcyxcclxuICAgIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgYXBpIGZyb20gJy4uLy4uL3V0aWxzL2FwaSc7XHJcbmltcG9ydCBVcmwgZnJvbSAnLi4vLi4vdXRpbHMvdXJsJztcclxuaW1wb3J0IHsgRmV0Y2hGbiB9IGZyb20gJy4uL3BhcmFtcyc7XHJcbmltcG9ydCB7IEhlbHBUeXBlQmVhbiB9IGZyb20gJy4vaGVscGVyJztcclxuaW1wb3J0IHR5cGUgeyBOYW1lSWRCZWFuLCBSZXMgfSBmcm9tICcuL2hvbWUnO1xyXG5cclxuLy8g5a2m5qChYmVhblxyXG5leHBvcnQgdHlwZSBTY2hvb2xCZWFuID0gTmFtZUlkQmVhbiAmIHtcclxuICAgIHBhcnQ6IHN0cmluZyxcclxufTtcclxuXHJcbi8vIOWcsOWdgGJlYW5cclxuZXhwb3J0IHR5cGUgQWRkcmVzc0JlYW4gPSBOYW1lSWRCZWFuICYge1xyXG4gICAgY2l0aWVzOiBBcnJheTxDaXR5QmVhbj5cclxufTtcclxuXHJcbi8vIOWfjuW4gmJlYW5cclxuZXhwb3J0IHR5cGUgQ2l0eUJlYW4gPSBOYW1lSWRCZWFuICYge1xyXG4gICAgcHJvdmluY2VfaWQ6IG51bWJlcixcclxuICAgIGFyZWE6IEFycmF5PEFyZWFCZWFuPlxyXG59O1xyXG5cclxuLy8g5Yy6YmVhblxyXG5leHBvcnQgdHlwZSBBcmVhQmVhbiA9IE5hbWVJZEJlYW4gJiB7XHJcbiAgICBwcm92aW5jZV9pZDogbnVtYmVyLFxyXG4gICAgY2l0eV9pZDogbnVtYmVyXHJcbn07XHJcblxyXG4vLyDlnIjlrZDnsbvlnotiZWFuXHJcbmV4cG9ydCB0eXBlIENpcmNsZVR5cGVCZWFuID0ge1xyXG4gICAgaWQ6IG51bWJlcixcclxuICAgIHR5cGU6IHN0cmluZyxcclxuICAgIHRhZ3M6IEFycmF5PFRhZ3NCZWFuPlxyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgVGFnc0JlYW4gPSBOYW1lSWRCZWFuICYge1xyXG4gICAgdHlwZV9pZDogbnVtYmVyLFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBUeXBlQWRkcmVzc1NjaG9vbEJlYW4gPSB7XHJcbiAgICB0eXBlOiBBcnJheTxIZWxwVHlwZUJlYW4+LFxyXG4gICAgc2Nob29sOiBBcnJheTxTY2hvb2xCZWFuPixcclxuICAgIGFkZHJlc3M6IEFycmF5PEFkZHJlc3NCZWFuPixcclxuICAgIGhvdF9jaXR5OiBBcnJheTxDaXR5QmVhbj4sXHJcbiAgICBpbmR1c3RyeTogQXJyYXk8TmFtZUlkQmVhbj4sXHJcbiAgICBjaXJjbGVfdHlwZTogQXJyYXk8Q2lyY2xlVHlwZUJlYW4+XHJcbn07XHJcblxyXG5cclxuLyoq6I635Y+W5a2m5qCh44CB5LqS5biu57G75Z6L44CB55yB5biC5Yy6ICovXHJcbmV4cG9ydCBjb25zdCBnZXRUeXBlQWRkcmVzc1NjaG9vbDogRmV0Y2hGbjx1bmtub3duPiA9ICgpID0+IHtcclxuICAgIHJldHVybiBhcGkucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiBVcmwuY29tbWl0LFxyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIlxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5cclxuLyoq6I635Y+W5ZyI5a2Q57G75YirICovXHJcbmV4cG9ydCBjb25zdCBnZXRDaXJjbGVUeXBlOiBGZXRjaEZuPHVua25vd24+ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGFwaS5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IFVybC5nZXRDaXJjbGVUeXBlLFxyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIlxyXG4gICAgfSk7XHJcbn07XHJcbiIsImltcG9ydCB7IE5hbWVJZEJlYW4gfSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCB7IFVzZXJCZWFuIH0gZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uL3V0aWxzL2FwaSc7XHJcbmltcG9ydCBVcmwgZnJvbSAnLi4vLi4vdXRpbHMvdXJsJztcclxuaW1wb3J0IHsgRmV0Y2hGbiwgTGltaXRJZFBhcmFtcywgTGltaXRUeXBlUGFyYW1zIH0gZnJvbSBcIi4uL3BhcmFtc1wiO1xyXG5cclxuXHJcbmV4cG9ydCB0eXBlIEhlbHBUeXBlQmVhbiA9IE5hbWVJZEJlYW4gJiB7XHJcbiAgICBjaGlsZDogTmFtZUlkQmVhbjtcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIEhlbHBlckl0ZW1EYXRhID0ge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHNlbmRlcl9pZDogc3RyaW5nO1xyXG4gICAgc2VuZGVyOiBVc2VyQmVhbjtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBjb250ZW50OiBzdHJpbmc7XHJcbiAgICB0eXBlOiBIZWxwVHlwZUJlYW47XHJcbiAgICBwcm92aW5jZTogTmFtZUlkQmVhbjtcclxuICAgIGNpdHk6IE5hbWVJZEJlYW47XHJcbiAgICBhcmVhOiBOYW1lSWRCZWFuO1xyXG4gICAgYWRkcmVzczogc3RyaW5nO1xyXG4gICAgc3RhcnRfdGltZTogbnVtYmVyO1xyXG4gICAgZW5kX3RpbWU6IG51bWJlcjtcclxuICAgIGxvd2VzdF9wcmljZTogbnVtYmVyO1xyXG4gICAgaGlnaGVzdF9wcmljZTogbnVtYmVyO1xyXG4gICAgaXNfdXJnZW50OiBudW1iZXI7XHJcbiAgICBwZW9wbGVfbnVtYmVyOiBudW1iZXI7XHJcbiAgICBpc190aW1lb3V0X2NhbmNlbDogbnVtYmVyO1xyXG4gICAgZmluaXNoX3Byb3ZlOiBudW1iZXI7XHJcbiAgICBzdGF0dXM6IG51bWJlcjtcclxuICAgIGxvbmdpdHVkZTogbnVtYmVyO1xyXG4gICAgbGF0aXR1ZGU6IG51bWJlcjtcclxufTtcclxuXHJcblxyXG4vKirkupLluK7liJfooaggKi9cclxuZXhwb3J0IGNvbnN0IGdldEhlbHBlckxpc3Q6IEZldGNoRm48TGltaXRUeXBlUGFyYW1zPiA9IChwYXJhbXMpID0+IHtcclxuICAgIHJldHVybiBhcGkucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiBVcmwuaGVscGVyTGlzdCxcclxuICAgICAgICBwYXJhbXM6IHBhcmFtcyxcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLyoq6I635Y+W55So5oi35rGC5Yqp5YiX6KGoICovXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VySGVscGVyTGlzdDogRmV0Y2hGbjxMaW1pdElkUGFyYW1zPiA9IChwYXJhbXMpID0+IHtcclxuICAgIHJldHVybiBhcGkucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiBVcmwudXNlckhlbHBMaXN0LFxyXG4gICAgICAgIHBhcmFtczogcGFyYW1zLFxyXG4gICAgfSk7XHJcbn07IiwiaW1wb3J0IFVybCBmcm9tIFwiLi4vLi4vdXRpbHMvdXJsXCI7XHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vdXRpbHMvYXBpJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VySW5mbyhwYXJhbXM6IHsgaWQ6IHN0cmluZyB9KSB7XHJcbiAgICByZXR1cm4gYXBpLnJlcXVlc3Qoe1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgdXJsOiBVcmwudXNlckluZm8gKyBcIj9pZD1cIiArIHBhcmFtcy5pZCxcclxuICAgIH0pO1xyXG59OyIsImltcG9ydCBhcGkgZnJvbSAnLi4vLi4vdXRpbHMvYXBpJztcclxuaW1wb3J0IFVybCBmcm9tICcuLi8uLi91dGlscy91cmwnO1xyXG5pbXBvcnQgeyBOYW1lSWRCZWFuIH0gZnJvbSAnLi9ob21lJztcclxuXHJcbmV4cG9ydCB0eXBlIFVzZXJCZWFuID0ge1xyXG4gICAgaWQ6IHN0cmluZzsgLy8gaWRcclxuICAgIGFsaWFzOiBzdHJpbmc7IC8vIOWIq+WQjVxyXG4gICAgbmlja25hbWU6IHN0cmluZzsgLy8g5pi156ewXHJcbiAgICBhdmF0YXI6IHN0cmluZzsgLy8g5aS05YOPXHJcbiAgICBzZXg6IG51bWJlcjsgLy8g5oCn5YirXHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nOyAvL+eugOS7i1xyXG4gICAgYmlydGhkYXk6IHN0cmluZzsgIC8vIOeUn+aXpVxyXG4gICAgcHJvdmluY2U6IE5hbWVJZEJlYW47IC8v55yBXHJcbiAgICBjaXR5OiBOYW1lSWRCZWFuO1xyXG4gICAgc2Nob29sOiBOYW1lSWRCZWFuOyAvL+WtpuagoVxyXG4gICAgYXV0aGVudGljYXRpb25fdHlwZTogbnVtYmVyOyAvL+iupOivgeexu+Wei1xyXG4gICAgb25saW5lX3N0YXR1czogbnVtYmVyOyAvL+WcqOe6v+eKtuaAgVxyXG4gICAgY3JlZGl0X3Njb3JlOiBudW1iZXI7IC8vIOS/oeeUqOivhOWIhlxyXG4gICAgb3JkZXJfcmF0ZTogbnVtYmVyOyAvL+aIkOWNleeOh1xyXG4gICAgZm9sbG93X251bWJlcjogbnVtYmVyOyAvL+WFs+azqOaVsOebrlxyXG4gICAgZmFuX251bWJlcjogbnVtYmVyOyAvL+eyieS4neaVsOebrlxyXG4gICAgZm9sbG93ZWQ6IGJvb2xlYW47IC8v5piv5ZCm5bey5YWz5rOoXHJcbiAgICBmb2xsb3dpbmc6IGJvb2xlYW47IC8v5piv5ZCm6KKr5YWz5rOoXHJcbiAgICBwaG9uZTogc3RyaW5nOyAvL+aJi+acuuWPt++8iOS7heeZu+W9leeahOW9k+WJjeeUqOaIt+acie+8iVxyXG59XHJcblxyXG5cclxuZXhwb3J0IHR5cGUgTG9naW5CZWFuID0ge1xyXG4gICAgdG9rZW46IHN0cmluZyxcclxuICAgIHVzZXI6IFVzZXJCZWFuLFxyXG4gICAgaXNfZmluaXNoOiBudW1iZXIsXHJcbn07XHJcblxyXG5cclxudHlwZSBMb2dpblBhcmFtcyA9IHtcclxuICAgIHBob25lPzogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICBjb2RlPzogc3RyaW5nO1xyXG4gICAgdHlwZT86IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQaG9uZUNvZGUocGFyYW1zOiBMb2dpblBhcmFtcykge1xyXG4gICAgcmV0dXJuIGFwaS5yZXF1ZXN0KHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IFVybC5nZXRDb2RlLFxyXG4gICAgICAgIGRhdGE6IHBhcmFtcyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHdkTG9naW4ocGFyYW1zOiBMb2dpblBhcmFtcykge1xyXG4gICAgcmV0dXJuIGFwaS5yZXF1ZXN0KHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IFVybC5wd2RMb2dpbixcclxuICAgICAgICBkYXRhOiBwYXJhbXMsXHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb2RlTG9naW4ocGFyYW1zOiBMb2dpblBhcmFtcykge1xyXG4gICAgcmV0dXJuIGFwaS5yZXF1ZXN0KHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IFVybC5jb2RlTG9naW4sXHJcbiAgICAgICAgZGF0YTogcGFyYW1zLFxyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vKiroh6rliqjnmbvlvZUgKi9cclxuZXhwb3J0IGNvbnN0IGF1dG9Mb2dpbiA9ICgpID0+IHtcclxuICAgIHJldHVybiBhcGkucmVxdWVzdCh7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBVcmwuYXV0b0xvZ2luLFxyXG4gICAgfSk7XHJcbn07IiwiaW1wb3J0IHsgdGh1bmtXcmFwcGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcbmltcG9ydCB0eXBlIHsgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBSZXMgfSBmcm9tICcuLi9zZXJ2aWNlcy9ob21lJztcclxuaW1wb3J0IHsgQ2lyY2xlQmVhbiwgZ2V0VXNlckNpcmNsZUxpc3QsIExpc3RQYWdlQmVhbiB9IGZyb20gJy4uL3NlcnZpY2VzL2NpcmNsZSc7XHJcbmltcG9ydCB7IGdldENpcmNsZUxpc3QgfSBmcm9tICcuLi9zZXJ2aWNlcy9jaXJjbGUnO1xyXG5cclxuLy8gQXN5bmNUaHVuazzov5Tlm57nmoTlgLznsbvlnoss5Ye95pWw57G75Z6Ldm9pZOihqOekuuS4jeW4puWPguaVsCzkuI3muIXmpZo+XHJcbmV4cG9ydCBjb25zdCBmZXRjaEFsbENpcmNsZUxpc3QgPSB0aHVua1dyYXBwZXIoJ2NsaXJjbGUvYWxsJywgZ2V0Q2lyY2xlTGlzdCk7XHJcbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJDaXJjbGVMaXN0ID0gdGh1bmtXcmFwcGVyKCdjbGlyY2xlL3VzZXJfbGlzdCcsIGdldFVzZXJDaXJjbGVMaXN0KTtcclxuXHJcbnR5cGUgSW5pU3RhdGUgPSB7XHJcbiAgICBhbGxDaXJjbGVEYXRhOiBMaXN0UGFnZUJlYW48Q2lyY2xlQmVhbj47XHJcbiAgICBteUNpcmNsZUxpc3Q6IExpc3RQYWdlQmVhbjxDaXJjbGVCZWFuPjtcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogSW5pU3RhdGUgPSB7XHJcbiAgICBhbGxDaXJjbGVEYXRhOiB7IHRvdGFsOiAwLCBsaXN0OiBbXSB9LFxyXG4gICAgbXlDaXJjbGVMaXN0OiB7IHRvdGFsOiAwLCBsaXN0OiBbXSB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhvbWVTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6ICdjaXJjbGUnLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgIH0sXHJcbiAgICBleHRyYVJlZHVjZXJzOiB7XHJcbiAgICAgICAgW2ZldGNoQWxsQ2lyY2xlTGlzdC5mdWxmaWxsZWQudHlwZV06IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFJlczxMaXN0UGFnZUJlYW48Q2lyY2xlQmVhbj4+PikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5hbGxDaXJjbGVEYXRhID0gYWN0aW9uLnBheWxvYWQuZGF0YTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtmZXRjaFVzZXJDaXJjbGVMaXN0LmZ1bGZpbGxlZC50eXBlXTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UmVzPExpc3RQYWdlQmVhbjxDaXJjbGVCZWFuPj4+KSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLm15Q2lyY2xlTGlzdCA9IGFjdGlvbi5wYXlsb2FkLmRhdGE7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9tZVNsaWNlLnJlZHVjZXI7XHJcbiIsImltcG9ydCB7IHRodW5rV3JhcHBlciB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgdHlwZSB7IFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuXHJcbmltcG9ydCB7IENpcmNsZVR5cGVCZWFuLCBnZXRDaXJjbGVUeXBlLCBnZXRUeXBlQWRkcmVzc1NjaG9vbCwgVHlwZUFkZHJlc3NTY2hvb2xCZWFuIH0gZnJvbSAnLi4vc2VydmljZXMvY29tbW9uJztcclxuaW1wb3J0IHsgUmVzIH0gZnJvbSAnLi4vc2VydmljZXMvaG9tZSc7XHJcblxyXG4vLyBBc3luY1RodW5rPOi/lOWbnueahOWAvOexu+Weiyzlh73mlbDnsbvlnot2b2lk6KGo56S65LiN5bim5Y+C5pWwLOS4jea4healmj5cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFR5cGVBZGRyZXNzU2Nob29sID0gdGh1bmtXcmFwcGVyKCdjb21tb24vdHlwZUFkZHJlc3NTY2hvb2wnLCBnZXRUeXBlQWRkcmVzc1NjaG9vbCk7XHJcbmV4cG9ydCBjb25zdCBmZXRjaENpcmNsZVR5cGUgPSB0aHVua1dyYXBwZXIoJ2NvbW1vbi9jaXJjbGVUeXBlJywgZ2V0Q2lyY2xlVHlwZSk7XHJcblxyXG50eXBlIEluaVN0YXRlID0ge1xyXG4gICAgY2lyY2xlVHlwZTogQXJyYXk8Q2lyY2xlVHlwZUJlYW4+XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IEluaVN0YXRlID0ge1xyXG4gICAgY2lyY2xlVHlwZTogW11cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb21tb25TbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6ICdjb21tb24nLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBpbmNyZW1lbnQ6ICgpID0+IHsgfSxcclxuICAgIH0sXHJcbiAgICBleHRyYVJlZHVjZXJzOiB7XHJcbiAgICAgICAgLy8gW2ZldGNoVHlwZUFkZHJlc3NTY2hvb2wuZnVsZmlsbGVkLnR5cGVdOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxSZXM8VHlwZUFkZHJlc3NTY2hvb2xCZWFuPj4pID0+IHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCLmlbDmja5cIiwgYWN0aW9uLnBheWxvYWQuZGF0YSk7XHJcbiAgICAgICAgLy8gICAgIHN0YXRlLmlzTG9hZERhdGEgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICBzdGF0ZS50eXBlQWRkcmVzc1NjaG9vbEJlYW4gPSBhY3Rpb24ucGF5bG9hZC5kYXRhO1xyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgW2ZldGNoQ2lyY2xlVHlwZS5mdWxmaWxsZWQudHlwZV06IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFJlczxBcnJheTxDaXJjbGVUeXBlQmVhbj4+PikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5jaXJjbGVUeXBlID0gYWN0aW9uLnBheWxvYWQuZGF0YTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBpbmNyZW1lbnQgfSA9IGNvbW1vblNsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IGNvbW1vblNsaWNlLnJlZHVjZXI7XHJcbiIsImltcG9ydCB7IHRodW5rV3JhcHBlciB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgdHlwZSB7IFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuXHJcbmltcG9ydCB0eXBlIHsgUmVzIH0gZnJvbSAnLi4vc2VydmljZXMvaG9tZSc7XHJcbmltcG9ydCB0eXBlIHsgSGVscGVySXRlbURhdGEgfSBmcm9tICcuLi9zZXJ2aWNlcy9oZWxwZXInO1xyXG5pbXBvcnQgeyBnZXRIZWxwZXJMaXN0IH0gZnJvbSAnLi4vc2VydmljZXMvaGVscGVyJztcclxuaW1wb3J0IHR5cGUgeyBDaXJjbGVCZWFuLCBMaXN0UGFnZUJlYW4gfSBmcm9tICcuLi9zZXJ2aWNlcy9jaXJjbGUnO1xyXG5pbXBvcnQgeyBnZXRDaXJjbGVMaXN0IH0gZnJvbSAnLi4vc2VydmljZXMvY2lyY2xlJztcclxuXHJcbi8vIEFzeW5jVGh1bms86L+U5Zue55qE5YC857G75Z6LLOWHveaVsOexu+Wei3ZvaWTooajnpLrkuI3luKblj4LmlbAs5LiN5riF5qWaPlxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoUmVjb21tZW5kTGlzdCA9IHRodW5rV3JhcHBlcignaG9tZS9yZWNvbW1lbmQnLCBnZXRIZWxwZXJMaXN0KTtcclxuZXhwb3J0IGNvbnN0IGZldGNoTGlrZUxpc3QgPSB0aHVua1dyYXBwZXIoJ2hvbWUvbGlrZScsIGdldEhlbHBlckxpc3QpO1xyXG5leHBvcnQgY29uc3QgZmV0Y2hOZWFyYnlMaXN0ID0gdGh1bmtXcmFwcGVyKCdob21lL25lYXJieScsIGdldEhlbHBlckxpc3QpO1xyXG5leHBvcnQgY29uc3QgZmV0Y2hIb3J0TGlzdCA9IHRodW5rV3JhcHBlcignaG9tZS9ob3J0JywgZ2V0SGVscGVyTGlzdCk7XHJcbmV4cG9ydCBjb25zdCBmZXRjaFJlY29tbWVuZENpcmNsZUxpc3QgPSB0aHVua1dyYXBwZXIoJ2hvbWUvY2lyY2xlL3JlY29tbWVuZCcsIGdldENpcmNsZUxpc3QpO1xyXG5cclxudHlwZSBJbmlTdGF0ZSA9IHtcclxuICBpc0xvYWQ6IGJvb2xlYW47XHJcbiAgcmVjb21tZW5kRGF0YTogSGVscGVySXRlbURhdGFbXTtcclxuICBsaWtlRGF0YTogSGVscGVySXRlbURhdGFbXTtcclxuICBuZWFyYnlEYXRhOiBIZWxwZXJJdGVtRGF0YVtdO1xyXG4gIGhvcnREYXRhOiBIZWxwZXJJdGVtRGF0YVtdO1xyXG4gIHJlY29tbWVuZENpcmNsZURhdGE6IExpc3RQYWdlQmVhbjxDaXJjbGVCZWFuPjtcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogSW5pU3RhdGUgPSB7XHJcbiAgaXNMb2FkOiBmYWxzZSxcclxuICByZWNvbW1lbmREYXRhOiBbXSxcclxuICBsaWtlRGF0YTogW10sXHJcbiAgbmVhcmJ5RGF0YTogW10sXHJcbiAgaG9ydERhdGE6IFtdLFxyXG4gIHJlY29tbWVuZENpcmNsZURhdGE6IHtcclxuICAgIHRvdGFsOiAwLFxyXG4gICAgbGlzdDogW11cclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhvbWVTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnaG9tZScsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgfSxcclxuICBleHRyYVJlZHVjZXJzOiB7XHJcbiAgICBbZmV0Y2hSZWNvbW1lbmRMaXN0LmZ1bGZpbGxlZC50eXBlXTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UmVzPEFycmF5PEhlbHBlckl0ZW1EYXRhPj4+KSA9PiB7XHJcbiAgICAgIHN0YXRlLmlzTG9hZCA9IHRydWU7XHJcbiAgICAgIHN0YXRlLnJlY29tbWVuZERhdGEgPSBhY3Rpb24ucGF5bG9hZC5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImZldGNoUmVjb21tZW5kTGlzdFwiLCBhY3Rpb24ucGF5bG9hZC5kYXRhLmxlbmd0aCk7XHJcblxyXG4gICAgfSxcclxuICAgIFtmZXRjaExpa2VMaXN0LmZ1bGZpbGxlZC50eXBlXTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UmVzPEhlbHBlckl0ZW1EYXRhW10+PikgPT4ge1xyXG4gICAgICBzdGF0ZS5saWtlRGF0YSA9IGFjdGlvbi5wYXlsb2FkLmRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZmV0Y2hMaWtlTGlzdFwiLCBhY3Rpb24ucGF5bG9hZC5kYXRhLmxlbmd0aCk7XHJcbiAgICB9LFxyXG4gICAgW2ZldGNoTmVhcmJ5TGlzdC5mdWxmaWxsZWQudHlwZV06IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFJlczxIZWxwZXJJdGVtRGF0YVtdPj4pID0+IHtcclxuICAgICAgc3RhdGUubmVhcmJ5RGF0YSA9IGFjdGlvbi5wYXlsb2FkLmRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZmV0Y2hOZWFyYnlMaXN0XCIsIGFjdGlvbi5wYXlsb2FkLmRhdGEubGVuZ3RoKTtcclxuICAgIH0sXHJcbiAgICBbZmV0Y2hIb3J0TGlzdC5mdWxmaWxsZWQudHlwZV06IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFJlczxIZWxwZXJJdGVtRGF0YVtdPj4pID0+IHtcclxuICAgICAgc3RhdGUuaG9ydERhdGEgPSBhY3Rpb24ucGF5bG9hZC5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImZldGNoSG9ydExpc3RcIiwgYWN0aW9uLnBheWxvYWQuZGF0YS5sZW5ndGgpO1xyXG4gICAgfSxcclxuICAgIFtmZXRjaFJlY29tbWVuZENpcmNsZUxpc3QuZnVsZmlsbGVkLnR5cGVdOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxSZXM8TGlzdFBhZ2VCZWFuPENpcmNsZUJlYW4+Pj4pID0+IHtcclxuICAgICAgc3RhdGUucmVjb21tZW5kQ2lyY2xlRGF0YSA9IGFjdGlvbi5wYXlsb2FkLmRhdGE7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9tZVNsaWNlLnJlZHVjZXI7XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yOiBsZXJveVxyXG4gKiBAZGF0ZTogMjAyMS84LzIzIDE2OjA5XHJcbiAqIEBkZXNjcmlwdGlvbu+8muebkeWQrCBBc3luY1RodW5rIGxvYWRpbmcg54q25oCBXHJcbiAqL1xyXG5pbXBvcnQgdHlwZSB7IEFueUFjdGlvbiwgQXN5bmNUaHVuayB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5cclxudHlwZSBHZW5lcmljQXN5bmNUaHVuayA9IEFzeW5jVGh1bms8dW5rbm93biwgdW5rbm93biwgYW55PjtcclxuXHJcbnR5cGUgUGVuZGluZ0FjdGlvbiA9IFJldHVyblR5cGU8R2VuZXJpY0FzeW5jVGh1bmtbJ3BlbmRpbmcnXT47XHJcbnR5cGUgUmVqZWN0ZWRBY3Rpb24gPSBSZXR1cm5UeXBlPEdlbmVyaWNBc3luY1RodW5rWydyZWplY3RlZCddPjtcclxudHlwZSBGdWxmaWxsZWRBY3Rpb24gPSBSZXR1cm5UeXBlPEdlbmVyaWNBc3luY1RodW5rWydmdWxmaWxsZWQnXT47XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNQZW5kaW5nQWN0aW9uKGFjdGlvbjogQW55QWN0aW9uKTogYWN0aW9uIGlzIFBlbmRpbmdBY3Rpb24ge1xyXG4gIHJldHVybiBhY3Rpb24udHlwZS5lbmRzV2l0aCgnL3BlbmRpbmcnKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaXNSZWplY3RlZEFjdGlvbihhY3Rpb246IEFueUFjdGlvbik6IGFjdGlvbiBpcyBSZWplY3RlZEFjdGlvbiB7XHJcbiAgcmV0dXJuIGFjdGlvbi50eXBlLmVuZHNXaXRoKCcvcmVqZWN0ZWQnKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaXNGdWxmaWxsZWRBY3Rpb24oYWN0aW9uOiBBbnlBY3Rpb24pOiBhY3Rpb24gaXMgRnVsZmlsbGVkQWN0aW9uIHtcclxuICByZXR1cm4gYWN0aW9uLnR5cGUuZW5kc1dpdGgoJy9mdWxmaWxsZWQnKTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTG9hZGluZ1N0YXRlID0gUmVjb3JkPHN0cmluZywgYm9vbGVhbj47XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IExvYWRpbmdTdGF0ZSA9IHt9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRpbmdTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnbG9hZGluZycsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIC8vIFRoZSBgcmVkdWNlcnNgIGZpZWxkIGxldHMgdXMgZGVmaW5lIHJlZHVjZXJzIGFuZCBnZW5lcmF0ZSBhc3NvY2lhdGVkIGFjdGlvbnNcclxuICByZWR1Y2Vyczoge30sXHJcbiAgLy8gVGhlIGBleHRyYVJlZHVjZXJzYCBmaWVsZCBsZXRzIHRoZSBzbGljZSBoYW5kbGUgYWN0aW9ucyBkZWZpbmVkIGVsc2V3aGVyZSxcclxuICAvLyBpbmNsdWRpbmcgYWN0aW9ucyBnZW5lcmF0ZWQgYnkgY3JlYXRlQXN5bmNUaHVuayBvciBpbiBvdGhlciBzbGljZXMuXHJcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcclxuICAgIGJ1aWxkZXJcclxuICAgICAgLmFkZE1hdGNoZXIoaXNQZW5kaW5nQWN0aW9uLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBhY3Rpb24udHlwZS5yZXBsYWNlKCcvcGVuZGluZycsICcnKTtcclxuICAgICAgICBzdGF0ZVt0eXBlXSA9IHRydWU7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5hZGRNYXRjaGVyKGlzUmVqZWN0ZWRBY3Rpb24sIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdHlwZSA9IGFjdGlvbi50eXBlLnJlcGxhY2UoJy9yZWplY3RlZCcsICcnKTtcclxuICAgICAgICBzdGF0ZVt0eXBlXSA9IGZhbHNlO1xyXG4gICAgICB9KVxyXG4gICAgICAvLyBtYXRjaGVyIGNhbiBqdXN0IHJldHVybiBib29sZWFuIGFuZCB0aGUgbWF0Y2hlciBjYW4gcmVjZWl2ZSBhIGdlbmVyaWMgYXJndW1lbnRcclxuICAgICAgLmFkZE1hdGNoZXIoaXNGdWxmaWxsZWRBY3Rpb24sIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdHlwZSA9IGFjdGlvbi50eXBlLnJlcGxhY2UoJy9mdWxmaWxsZWQnLCAnJyk7XHJcbiAgICAgICAgc3RhdGVbdHlwZV0gPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkaW5nU2xpY2UucmVkdWNlcjtcclxuIiwiXHJcbmltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IGdldFNjcm9sbGJhcldpZHRoIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcbmltcG9ydCB0eXBlIHsgQXBwU3RhdGUsIEFwcFRodW5rIH0gZnJvbSAnLi4vc3RvcmUnO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9naW5TdGF0ZSB7XHJcbiAgICBpc1Nob3dMb2dpbjogYm9vbGVhbjtcclxuICAgIHNob3dGb3JnZXRQd2Q6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogTG9naW5TdGF0ZSA9IHtcclxuICAgIGlzU2hvd0xvZ2luOiBmYWxzZSxcclxuICAgIHNob3dGb3JnZXRQd2Q6IGZhbHNlLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiAnbG9naW4nLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgLy8gVGhlIGByZWR1Y2Vyc2AgZmllbGQgbGV0cyB1cyBkZWZpbmUgcmVkdWNlcnMgYW5kIGdlbmVyYXRlIGFzc29jaWF0ZWQgYWN0aW9uc1xyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBzaG93TG9naW46IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPj0gMTMwMCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBnZXRTY3JvbGxiYXJXaWR0aCgpICsgJ3B4JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGF0ZS5pc1Nob3dMb2dpbiA9IHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBoaWRlTG9naW46IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcwcHgnO1xyXG4gICAgICAgICAgICBzdGF0ZS5pc1Nob3dMb2dpbiA9IGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0xvZ2luUGFnZTogKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5zaG93Rm9yZ2V0UHdkKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5zaG93Rm9yZ2V0UHdkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzaG93Rm9yZ2V0UHdkUGFnZTogKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc3RhdGUuc2hvd0ZvcmdldFB3ZCkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuc2hvd0ZvcmdldFB3ZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBzaG93TG9naW4sIGhpZGVMb2dpbiwgc2hvd0xvZ2luUGFnZSwgc2hvd0ZvcmdldFB3ZFBhZ2UgfSA9IGxvZ2luU2xpY2UuYWN0aW9ucztcclxuXHJcbi8vIFRoZSBmdW5jdGlvbiBiZWxvdyBpcyBjYWxsZWQgYSBzZWxlY3RvciBhbmQgYWxsb3dzIHVzIHRvIHNlbGVjdCBhIHZhbHVlIGZyb21cclxuLy8gdGhlIHN0YXRlLiBTZWxlY3RvcnMgY2FuIGFsc28gYmUgZGVmaW5lZCBpbmxpbmUgd2hlcmUgdGhleSdyZSB1c2VkIGluc3RlYWQgb2ZcclxuLy8gaW4gdGhlIHNsaWNlIGZpbGUuIEZvciBleGFtcGxlOiBgdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmNvdW50ZXIudmFsdWUpYFxyXG5leHBvcnQgY29uc3QgaXNTaG93TG9naW4gPSAoc3RhdGU6IEFwcFN0YXRlKSA9PiBzdGF0ZS5sb2dpbi5pc1Nob3dMb2dpbjtcclxuXHJcbi8vIFdlIGNhbiBhbHNvIHdyaXRlIHNlcnZpY2VzIGJ5IGhhbmQsIHdoaWNoIG1heSBjb250YWluIGJvdGggc3luYyBhbmQgYXN5bmMgbG9naWMuXHJcbi8vIEhlcmUncyBhbiBleGFtcGxlIG9mIGNvbmRpdGlvbmFsbHkgZGlzcGF0Y2hpbmcgYWN0aW9ucyBiYXNlZCBvbiBjdXJyZW50IHN0YXRlLlxyXG5leHBvcnQgY29uc3Qgc2hvd09ySGlkZUxvZ2luID1cclxuICAgIChpc1Nob3c6IGJvb2xlYW4pOiBBcHBUaHVuayA9PlxyXG4gICAgICAgIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXNOb3dTaG93ID0gaXNTaG93TG9naW4oZ2V0U3RhdGUoKSk7XHJcbiAgICAgICAgICAgIGlmIChpc05vd1Nob3cgIT09IGlzU2hvdykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzU2hvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNob3dMb2dpbigpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goaGlkZUxvZ2luKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvZ2luU2xpY2UucmVkdWNlcjtcclxuIiwiXHJcbmltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmssIFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgdGh1bmtXcmFwcGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcbmltcG9ydCB7IENpcmNsZUJlYW4sIGdldENpcmNsZUxpc3QsIExpc3RQYWdlQmVhbiB9IGZyb20gJy4uL3NlcnZpY2VzL2NpcmNsZSc7XHJcbmltcG9ydCB7IGdldFVzZXJIZWxwZXJMaXN0LCBIZWxwZXJJdGVtRGF0YSB9IGZyb20gJy4uL3NlcnZpY2VzL2hlbHBlcic7XHJcbmltcG9ydCB7IFJlcyB9IGZyb20gJy4uL3NlcnZpY2VzL2hvbWUnO1xyXG5pbXBvcnQgeyBnZXRVc2VySW5mbyB9IGZyb20gJy4uL3NlcnZpY2VzL21pbmUnO1xyXG5pbXBvcnQgeyBVc2VyQmVhbiB9IGZyb20gJy4uL3NlcnZpY2VzL3VzZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoVXNlckluZm8gPSB0aHVua1dyYXBwZXIoJ3VzZXIvdXNlckluZm8nLCBnZXRVc2VySW5mbyk7XHJcbmV4cG9ydCBjb25zdCBmZXRjaE1pbmVSZWNvbW1lbmRDaXJjbGVMaXN0ID0gdGh1bmtXcmFwcGVyKCdtaW5lL2NpcmNsZS9yZWNvbW1lbmQnLCBnZXRDaXJjbGVMaXN0KTtcclxuZXhwb3J0IGNvbnN0IGZldGNoTWluZUhlbHBlckxpc3QgPSB0aHVua1dyYXBwZXIoJ21pbmUvaGVscGVyJywgZ2V0VXNlckhlbHBlckxpc3QpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNaW5lU3RhdGUge1xyXG4gICAgdXNlckluZm8/OiBVc2VyQmVhbixcclxuICAgIHJlY29tbWVuZENpcmNsZURhdGE6IExpc3RQYWdlQmVhbjxDaXJjbGVCZWFuPjtcclxuICAgIG1pbmVIZWxwZXJEYXRhOiBMaXN0UGFnZUJlYW48SGVscGVySXRlbURhdGE+O1xyXG4gICAgdXNlclBhZ2VTZWxlY3RJbmRleDogYW55XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogTWluZVN0YXRlID0ge1xyXG4gICAgdXNlckluZm86IHVuZGVmaW5lZCxcclxuICAgIHJlY29tbWVuZENpcmNsZURhdGE6IHtcclxuICAgICAgICB0b3RhbDogMCxcclxuICAgICAgICBsaXN0OiBbXVxyXG4gICAgfSxcclxuICAgIG1pbmVIZWxwZXJEYXRhOiB7XHJcbiAgICAgICAgdG90YWw6IDAsXHJcbiAgICAgICAgbGlzdDogW11cclxuICAgIH0sXHJcbiAgICB1c2VyUGFnZVNlbGVjdEluZGV4OiB7fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG1pbmVTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6ICdtaW5lJyxcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgc3dpdGNoVXNlclBhZ2VTZWxlY3RJbmRleDogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248eyBrZXk6IHN0cmluZywgaW5kZXg6IG51bWJlciB9PikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgeyBrZXksIGluZGV4IH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUudXNlclBhZ2VTZWxlY3RJbmRleFtrZXldID0gaW5kZXg7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5IGluIHN0YXRlLnVzZXJQYWdlU2VsZWN0SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS51c2VyUGFnZVNlbGVjdEluZGV4W2tleV0gPSBpbmRleDtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgc3RhdGUudXNlclBhZ2VTZWxlY3RJbmRleFtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6ZSA5q+BXCIsIHN0YXRlLnVzZXJQYWdlU2VsZWN0SW5kZXhba2V5XSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBleHRyYVJlZHVjZXJzOiB7XHJcbiAgICAgICAgW2ZldGNoVXNlckluZm8uZnVsZmlsbGVkLnR5cGVdOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxSZXM8VXNlckJlYW4+PikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VySW5mbyA9IGFjdGlvbi5wYXlsb2FkLmRhdGE7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbZmV0Y2hNaW5lUmVjb21tZW5kQ2lyY2xlTGlzdC5mdWxmaWxsZWQudHlwZV06IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFJlczxMaXN0UGFnZUJlYW48Q2lyY2xlQmVhbj4+PikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5yZWNvbW1lbmRDaXJjbGVEYXRhID0gYWN0aW9uLnBheWxvYWQuZGF0YTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtmZXRjaE1pbmVIZWxwZXJMaXN0LmZ1bGZpbGxlZC50eXBlXTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UmVzPExpc3RQYWdlQmVhbjxIZWxwZXJJdGVtRGF0YT4+PikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5taW5lSGVscGVyRGF0YSA9IGFjdGlvbi5wYXlsb2FkLmRhdGE7XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufSk7XHJcbmV4cG9ydCBjb25zdCB7IHN3aXRjaFVzZXJQYWdlU2VsZWN0SW5kZXggfSA9IG1pbmVTbGljZS5hY3Rpb25zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWluZVNsaWNlLnJlZHVjZXI7XHJcbiIsIlxyXG5pbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IHJlbW92ZVRva2VuLCBzYXZlVG9rZW4gfSBmcm9tICcuLi8uLi91dGlscy90b2tlbl91dGlsJztcclxuaW1wb3J0IHsgdGh1bmtXcmFwcGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcbmltcG9ydCB7IFJlcyB9IGZyb20gJy4uL3NlcnZpY2VzL2hvbWUnO1xyXG5pbXBvcnQgeyBVc2VyQmVhbiwgTG9naW5CZWFuLCBhdXRvTG9naW4gfSBmcm9tICcuLi9zZXJ2aWNlcy91c2VyJztcclxuaW1wb3J0IHsgQXBwVGh1bmsgfSBmcm9tICcuLi9zdG9yZSc7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hBdXRvTG9naW4gPSB0aHVua1dyYXBwZXIoJ3VzZXIvYXV0b0xvZ2luJywgYXV0b0xvZ2luKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlclN0YXRlIHtcclxuICAgIGlzTG9naW46IGJvb2xlYW4sXHJcbiAgICBpc0ZpbmlzaDogYm9vbGVhbixcclxuICAgIHRva2VuOiBzdHJpbmcsXHJcbiAgICB1c2VyPzogVXNlckJlYW4sXHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogVXNlclN0YXRlID0ge1xyXG4gICAgaXNMb2dpbjogZmFsc2UsXHJcbiAgICBpc0ZpbmlzaDogZmFsc2UsXHJcbiAgICB0b2tlbjogJycsXHJcbiAgICB1c2VyOiB1bmRlZmluZWRcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiAndXNlcicsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIHNhdmVVc2VySW5mbzogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UmVzPExvZ2luQmVhbj4+KSA9PiB7XHJcbiAgICAgICAgICAgIHNhdmVVc2VyRGF0YShzdGF0ZSwgYWN0aW9uLnBheWxvYWQuZGF0YSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g6YCA5Ye655m75b2VXHJcbiAgICAgICAgb3V0TG9naW46IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIumAgOWHuueZu+W9lVwiKTtcclxuXHJcbiAgICAgICAgICAgIHN0YXRlLmlzTG9naW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgc3RhdGUuaXNGaW5pc2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgc3RhdGUudG9rZW4gPSBcIlwiO1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICByZW1vdmVUb2tlbigpO1xyXG4gICAgICAgICAgICAvLyBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXh0cmFSZWR1Y2Vyczoge1xyXG4gICAgICAgIFtmZXRjaEF1dG9Mb2dpbi5mdWxmaWxsZWQudHlwZV06IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFJlczxMb2dpbkJlYW4+PikgPT4ge1xyXG4gICAgICAgICAgICBzYXZlVXNlckRhdGEoc3RhdGUsIGFjdGlvbi5wYXlsb2FkLmRhdGEpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8g5L+d5a2Y55So5oi35pWw5o2uXHJcbmZ1bmN0aW9uIHNhdmVVc2VyRGF0YShzdGF0ZSwgZGF0YTogTG9naW5CZWFuKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInRva2VuXCIsIGRhdGEudG9rZW4pO1xyXG5cclxuICAgIHN0YXRlLmlzTG9naW4gPSB0cnVlO1xyXG4gICAgY29uc3QgdG9rZW4gPSBkYXRhLnRva2VuO1xyXG4gICAgc3RhdGUudG9rZW4gPSB0b2tlbjtcclxuICAgIHNhdmVUb2tlbih0b2tlbik7XHJcbiAgICBzdGF0ZS5pc0ZpbmlzaCA9IGRhdGEuaXNfZmluaXNoID09PSAxO1xyXG4gICAgc3RhdGUudXNlciA9IGRhdGEudXNlcjtcclxufVxyXG5cclxuY29uc3QgeyBzYXZlVXNlckluZm8gfSA9IHVzZXJTbGljZS5hY3Rpb25zO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgb3V0TG9naW4gfSA9IHVzZXJTbGljZS5hY3Rpb25zO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNhdmVVc2VyID1cclxuICAgIChkYXRhOiBhbnkpOiBBcHBUaHVuayA9PlxyXG4gICAgICAgIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2F2ZVVzZXJJbmZvKGRhdGEpKVxyXG4gICAgICAgIH07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlclNsaWNlLnJlZHVjZXI7XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yOiBsZXJveVxyXG4gKiBAZGF0ZTogMjAyMS84LzIzIDE2OjA5XHJcbiAqIEBkZXNjcmlwdGlvbu+8mnN0b3JlXHJcbiAqL1xyXG5pbXBvcnQgdHlwZSB7IFRodW5rQWN0aW9uLCBBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHR5cGUgeyBUeXBlZFVzZVNlbGVjdG9ySG9vayB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIsIEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5cclxuaW1wb3J0IGxvYWRpbmdSZWR1Y2VyIGZyb20gJy4vc2xpY2VzL2xvYWRpbmdTbGljZSc7XHJcbmltcG9ydCBob21lUmVkdWNlciBmcm9tICcuL3NsaWNlcy9ob21lU2xpY2UnO1xyXG5pbXBvcnQgbG9naW5SZWR1Y2VyIGZyb20gJy4vc2xpY2VzL2xvZ2luU2xpY2UnO1xyXG5pbXBvcnQgdXNlclJlZHVjZXIgZnJvbSAnLi9zbGljZXMvdXNlclNsaWNlJztcclxuaW1wb3J0IGNvbW1vblJlZHVjZXIgZnJvbSAnLi9zbGljZXMvY29tbW9uU2xpY2UnO1xyXG5pbXBvcnQgY2lyY2xlUmVkdWNlciBmcm9tICcuL3NsaWNlcy9jaXJjbGVTbGljZSc7XHJcbmltcG9ydCBtaW5lUmVkdWNlciBmcm9tICcuL3NsaWNlcy9taW5lU2xpY2UnO1xyXG5cclxuY29uc3QgY29tYmluZWRSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGxvYWRpbmc6IGxvYWRpbmdSZWR1Y2VyLFxyXG4gICAgaG9tZTogaG9tZVJlZHVjZXIsXHJcbiAgICBsb2dpbjogbG9naW5SZWR1Y2VyLFxyXG4gICAgdXNlcjogdXNlclJlZHVjZXIsXHJcbiAgICBjb21tb246IGNvbW1vblJlZHVjZXIsXHJcbiAgICBjaXJjbGU6IGNpcmNsZVJlZHVjZXIsXHJcbiAgICBtaW5lOiBtaW5lUmVkdWNlcixcclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gSFlEUkFURSkge1xyXG4gICAgICAgIGNvbnN0IG5leHRTdGF0ZSA9IHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsIC8vIHVzZSBwcmV2aW91cyBzdGF0ZVxyXG4gICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCwgLy8gYXBwbHkgZGVsdGEgZnJvbSBoeWRyYXRpb25cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBjb21iaW5lZFJlZHVjZXIobmV4dFN0YXRlLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbWJpbmVkUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcclxufTtcclxuXHJcbmNvbnN0IG1ha2VTdG9yZSA9ICgpID0+XHJcbiAgICBjb25maWd1cmVTdG9yZSh7XHJcbiAgICAgICAgcmVkdWNlcixcclxuICAgICAgICBkZXZUb29sczogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcsXHJcbiAgICB9KTtcclxuXHJcbmV4cG9ydCB0eXBlIEFwcFN0b3JlID0gUmV0dXJuVHlwZTx0eXBlb2YgbWFrZVN0b3JlPjtcclxuZXhwb3J0IHR5cGUgQXBwU3RhdGUgPSBSZXR1cm5UeXBlPEFwcFN0b3JlWydnZXRTdGF0ZSddPjtcclxuZXhwb3J0IHR5cGUgQXBwRGlzcGF0Y2ggPSBBcHBTdG9yZVsnZGlzcGF0Y2gnXTtcclxuXHJcbmV4cG9ydCB0eXBlIEFwcFRodW5rPFJldHVyblR5cGUgPSB2b2lkPiA9IFRodW5rQWN0aW9uPFxyXG4gICAgUmV0dXJuVHlwZSxcclxuICAgIEFwcFN0YXRlLFxyXG4gICAgdW5rbm93bixcclxuICAgIEFjdGlvbjxzdHJpbmc+XHJcbj47XHJcblxyXG4vLyBVc2UgdGhyb3VnaG91dCB5b3VyIGFwcCBpbnN0ZWFkIG9mIHBsYWluIGB1c2VEaXNwYXRjaGAgYW5kIGB1c2VTZWxlY3RvcmBcclxuZXhwb3J0IGNvbnN0IHVzZUFwcERpc3BhdGNoID0gKCkgPT4gdXNlRGlzcGF0Y2g8QXBwRGlzcGF0Y2g+KCk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXBwU2VsZWN0b3I6IFR5cGVkVXNlU2VsZWN0b3JIb29rPEFwcFN0YXRlPiA9IHVzZVNlbGVjdG9yO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlV3JhcHBlcjxBcHBTdG9yZT4obWFrZVN0b3JlKTtcclxuIiwiaW1wb3J0IENyeXB0b0pTIGZyb20gJ2NyeXB0by1qcyc7XHJcblxyXG5jb25zdCBrZXkgPSBDcnlwdG9KUy5lbmMuVXRmOC5wYXJzZSgnczM3OWU4YjU1MWJlNGVkMCcpO1xyXG5jb25zdCBpdiA9IENyeXB0b0pTLmVuYy5VdGY4LnBhcnNlKCcyMDAyMDM4NTA1MDY1NTg4Jyk7XHJcblxyXG4vLyBhZXMg5Yqg5a+GXHJcbmV4cG9ydCBmdW5jdGlvbiBlbmNyeXB0KG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgbGV0IHNyY3MgPSBDcnlwdG9KUy5lbmMuVXRmOC5wYXJzZShtZXNzYWdlKTtcclxuICAgIGxldCBlbmNyeXB0ZWQgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdChzcmNzLCBrZXksIHtcclxuICAgICAgICBpdjogaXYsXHJcbiAgICAgICAgbW9kZTogQ3J5cHRvSlMubW9kZS5FQ0IsXHJcbiAgICAgICAgcGFkZGluZzogQ3J5cHRvSlMucGFkLlBrY3M3XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBlbmNyeXB0ZWQuY2lwaGVydGV4dC50b1N0cmluZyhDcnlwdG9KUy5lbmMuQmFzZTY0KTtcclxufVxyXG5cclxuLy8gYWVzIOino+WvhlxyXG5leHBvcnQgZnVuY3Rpb24gZGVjcnlwdCh3b3JkOiBzdHJpbmcpIHtcclxuICAgIGxldCBkZWNyeXB0ID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQod29yZCwga2V5LCB7XHJcbiAgICAgICAgaXY6IGl2LFxyXG4gICAgICAgIG1vZGU6IENyeXB0b0pTLm1vZGUuRUNCLFxyXG4gICAgICAgIHBhZGRpbmc6IENyeXB0b0pTLnBhZC5Qa2NzN1xyXG4gICAgfSk7XHJcbiAgICBsZXQgZGVjcnlwdGVkU3RyID0gZGVjcnlwdC50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCk7XHJcbiAgICByZXR1cm4gZGVjcnlwdGVkU3RyLnRvU3RyaW5nKCk7XHJcbn0iLCJpbXBvcnQgYXhpb3MsIHsgQXhpb3NSZXF1ZXN0Q29uZmlnIH0gZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBub3RpZmljYXRpb24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgZGVjcnlwdCwgZW5jcnlwdCB9IGZyb20gJy4vYWVzJztcclxuaW1wb3J0IHsgZ2V0VG9rZW4gfSBmcm9tICcuL3Rva2VuX3V0aWwnO1xyXG5cclxuXHJcblxyXG5jb25zdCBxcyA9IHJlcXVpcmUoJ3FzJyk7XHJcblxyXG5jb25zdCBjb2RlTWVzc2FnZTogUmVjb3JkPG51bWJlciwgc3RyaW5nPiA9IHtcclxuICAgIDIwMDogJ+acjeWKoeWZqOaIkOWKn+i/lOWbnuivt+axgueahOaVsOaNruOAgicsXHJcbiAgICAyMDE6ICfmlrDlu7rmiJbkv67mlLnmlbDmja7miJDlip/jgIInLFxyXG4gICAgMjAyOiAn5LiA5Liq6K+35rGC5bey57uP6L+b5YWl5ZCO5Y+w5o6S6Zif77yI5byC5q2l5Lu75Yqh77yJ44CCJyxcclxuICAgIDIwNDogJ+WIoOmZpOaVsOaNruaIkOWKn+OAgicsXHJcbiAgICA0MDA6ICflj5Hlh7rnmoTor7fmsYLmnInplJnor6/vvIzmnI3liqHlmajmsqHmnInov5vooYzmlrDlu7rmiJbkv67mlLnmlbDmja7nmoTmk43kvZzjgIInLFxyXG4gICAgNDAxOiAn55So5oi35rKh5pyJ5p2D6ZmQ77yI5Luk54mM44CB55So5oi35ZCN44CB5a+G56CB6ZSZ6K+v77yJ44CCJyxcclxuICAgIDQwMzogJ+eUqOaIt+W+l+WIsOaOiOadg++8jOS9huaYr+iuv+mXruaYr+iiq+emgeatoueahOOAgicsXHJcbiAgICA0MDQ6ICflj5Hlh7rnmoTor7fmsYLpkojlr7nnmoTmmK/kuI3lrZjlnKjnmoTorrDlvZXvvIzmnI3liqHlmajmsqHmnInov5vooYzmk43kvZzjgIInLFxyXG4gICAgNDA1OiAn6K+35rGC5pa55rOV5LiN6KKr5YWB6K6444CCJyxcclxuICAgIDQwNjogJ+ivt+axgueahOagvOW8j+S4jeWPr+W+l+OAgicsXHJcbiAgICA0MTA6ICfor7fmsYLnmoTotYTmupDooqvmsLjkuYXliKDpmaTvvIzkuJTkuI3kvJrlho3lvpfliLDnmoTjgIInLFxyXG4gICAgNDIyOiAn5b2T5Yib5bu65LiA5Liq5a+56LGh5pe277yM5Y+R55Sf5LiA5Liq6aqM6K+B6ZSZ6K+v44CCJyxcclxuICAgIDUwMDogJ+acjeWKoeWZqOWPkeeUn+mUmeivr++8jOivt+ajgOafpeacjeWKoeWZqOOAgicsXHJcbiAgICA1MDI6ICfnvZHlhbPplJnor6/jgIInLFxyXG4gICAgNTAzOiAn5pyN5Yqh5LiN5Y+v55So77yM5pyN5Yqh5Zmo5pqC5pe26L+H6L295oiW57u05oqk44CCJyxcclxuICAgIDUwNDogJ+e9keWFs+i2heaXtuOAgicsXHJcbn07XHJcblxyXG5jb25zdCBhcGkgPSB7XHJcblxyXG4gICAgZ2V0SGVhZGVyKCkge1xyXG4gICAgICAgIGxldCB0b2tlbiA9IGdldFRva2VuKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0b2tlblwiLCB0b2tlbik7XHJcblxyXG4gICAgICAgIGxldCBoZWFkZXIgPSB7XHJcbiAgICAgICAgICAgIG5vd190aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpICsgJycsXHJcbiAgICAgICAgICAgIHZlcnNpb246ICcwLjEuMCcsXHJcbiAgICAgICAgICAgIGNsaWVudDogJ3BjJyxcclxuICAgICAgICAgICAgdG9rZW46IHRva2VuLFxyXG4gICAgICAgICAgICBkaWQ6IFwiSFVCQU5HX1BDXCIsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBhZXNIZWFkZXIgPSBcIm5vd190aW1lPVwiICsgaGVhZGVyW1wibm93X3RpbWVcIl1cclxuICAgICAgICAgICAgKyBcIiZjbGllbnQ9XCIgKyBoZWFkZXJbXCJjbGllbnRcIl1cclxuICAgICAgICAgICAgKyBcIiZ2ZXJzaW9uPVwiICsgaGVhZGVyW1widmVyc2lvblwiXVxyXG4gICAgICAgICAgICArIFwiJmRpZD1cIiArIGhlYWRlcltcImRpZFwiXVxyXG4gICAgICAgICAgICArIFwiJnRva2VuPVwiICsgaGVhZGVyW1widG9rZW5cIl07XHJcblxyXG4gICAgICAgIGhlYWRlclsnc2lnbiddID0gZW5jcnlwdChKU09OLnN0cmluZ2lmeShhZXNIZWFkZXIpKTtcclxuICAgICAgICAvLyBoZWFkZXJbXCJDb25uZWN0aW9uXCJdID0gJ2tlZXAtYWxpdmUnO1xyXG4gICAgICAgIGhlYWRlcltcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiXSA9ICcqJztcclxuICAgICAgICByZXR1cm4gaGVhZGVyO1xyXG4gICAgfSxcclxuXHJcbiAgICByZXF1ZXN0KGNvbmZpZz86IEF4aW9zUmVxdWVzdENvbmZpZykge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5nZXRIZWFkZXIoKTtcclxuICAgICAgICBsZXQgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBiYXNlVVJMOiBwcm9jZXNzLmVudi5BUElfSE9TVCxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgICAgICAgICAgdGltZW91dDogMTAwMDAsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIOivt+axguaLpuaIquWZqFxyXG4gICAgICAgIGluc3RhbmNlLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShcclxuICAgICAgICAgICAgKGNvbmZpZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8g5Y+R6LW36K+35rGC5pe277yM5Y+W5raI5o6J5b2T5YmN5q2j5Zyo6L+b6KGM55qE55u45ZCM6K+35rGCXHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLm1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICBjb25maWcudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIHFzLnN0cmluZ2lmeShjb25maWcucGFyYW1zKSxcclxuICAgICAgICAgICAgICAgICAgICBxcy5zdHJpbmdpZnkoY29uZmlnLmRhdGEpLFxyXG4gICAgICAgICAgICAgICAgXS5qb2luKCcmJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGVuZGluZy5oYXModXJsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOWcqCBwZW5kaW5nIOS4reWtmOWcqOW9k+WJjeivt+axguagh+ivhu+8jOmcgOimgeWPlua2iOW9k+WJjeivt+axgu+8jOW5tuS4lOenu+mZpFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbmNlbCA9IHBlbmRpbmcuZ2V0KHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGVuZGluZy5kZWxldGUodXJsKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLmNhbmNlbFRva2VuID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnLmNhbmNlbFRva2VuIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBheGlvcy5DYW5jZWxUb2tlbigoY2FuY2VsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZW5kaW5nLnNldCh1cmwsIGNhbmNlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6K+35rGC5oum5oiqXCIsIGNvbmZpZy51cmwsIGNvbmZpZz8uaGVhZGVycz8uWyd0b2tlbiddKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8g6L2s5Y+Y5pWw5o2u5qC85byPXHJcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnPy5oZWFkZXJzPy5bJ0NvbnRlbnQtVHlwZSddID09PSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0ID0gKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RyID0gT2JqZWN0LmtleXMoZGF0YSkubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGtleSkgPT4gYCR7ZW5jb2RlVVJJQ29tcG9uZW50KGtleSl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSl9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ci5qb2luKCcmJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBjb25maWc7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2Uuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JUZXh0ID0gY29kZU1lc3NhZ2VbcmVzcG9uc2Uuc3RhdHVzXSB8fCByZXNwb25zZS5zdGF0dXNUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgc3RhdHVzLCB1cmwgfSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDQwMSB8fCBzdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb24uZXJyb3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+acqueZu+W9leaIlueZu+W9leW3sui/h+acn++8jOivt+mHjeaWsOeZu+W9leOAgicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb24uZXJyb3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBg6K+35rGC6ZSZ6K+vICR7c3RhdHVzfTogJHt1cmx9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGVycm9yVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLmVycm9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICfmgqjnmoTnvZHnu5zlj5HnlJ/lvILluLjvvIzml6Dms5Xov57mjqXmnI3liqHlmagnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn572R57uc5byC5bi4JyxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICApO1xyXG4gICAgICAgIC8vIOWTjeW6lOaLpuaIquWZqOWNs+W8guW4uOWkhOeQhlxyXG4gICAgICAgIGluc3RhbmNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgaWYgKGRhdGEgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubmVlZF9kZWNyeXB0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IEpTT04ucGFyc2UoZGVjcnlwdChkYXRhLmRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZGF0YSA9IGNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZShjb25maWcgPyBjb25maWcgOiB7fSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCBwZW5kaW5nID0gbmV3IE1hcCgpO1xyXG5cclxuLy8g5riF56m6IHBlbmRpbmcg5Lit55qE6K+35rGC77yI5Zyo6Lev55Sx6Lez6L2s5pe26LCD55So77yJXHJcbmV4cG9ydCBjb25zdCBjbGVhclBlbmRpbmcgPSAoKSA9PiB7XHJcbiAgICBwZW5kaW5nLmZvckVhY2goZnVuY3Rpb24gKGNhbmNlbCwgdXJsKSB7XHJcbiAgICAgICAgY2FuY2VsKHVybCk7XHJcbiAgICB9KTtcclxuICAgIHBlbmRpbmcuY2xlYXIoKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGk7IiwiXHJcbmNvbnN0IHN0YXRpY0RhdGEgPSB7XHJcbiAgICBjb2xvckxpc3Q6IFtcclxuICAgICAgICBcIiNmZjgyODJcIixcclxuICAgICAgICBcIiNmYzI5NTBcIixcclxuICAgICAgICBcIiNmNDRlYmZcIixcclxuICAgICAgICBcIiNkMzMzYmVcIixcclxuICAgICAgICBcIiNiZTMzZDNcIixcclxuICAgICAgICBcIiM5OTMzZDNcIixcclxuICAgICAgICBcIiM3NjMyYzNcIixcclxuICAgICAgICBcIiM2MTQ5ZjRcIixcclxuICAgICAgICBcIiM0NjYzY2NcIixcclxuICAgICAgICBcIiM1NjlkZTBcIixcclxuICAgICAgICBcIiM1NmUwZGVcIixcclxuICAgICAgICBcIiMyZmNkYTZcIixcclxuICAgICAgICBcIiMyZmNkY2JcIixcclxuICAgICAgICBcIiM0Y2YwOTJcIixcclxuICAgICAgICBcIiNiNGYwNGNcIixcclxuICAgICAgICBcIiNlMWU3M2JcIixcclxuICAgICAgICBcIiNlN2M1M2JcIixcclxuICAgICAgICBcIiNmNjhmNDNcIixcclxuICAgICAgICBcIiNmNjRiNDNcIixcclxuICAgICAgICBcIiNjOGFkYWNcIixcclxuICAgICAgICBcIiM2MDE1YjVcIixcclxuICAgICAgICBcIiMzZDI0NDlcIixcclxuICAgICAgICBcIiMzZDI0NDlcIixcclxuICAgICAgICBcIiNiNjRjYTNcIixcclxuICAgICAgICBcIiM2YzQ2NjVcIixcclxuICAgICAgICBcIiM0Yzc0NzFcIixcclxuICAgICAgICBcIiM5MzlkOWNcIixcclxuICAgIF0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0YXRpY0RhdGE7IiwiaW1wb3J0IGNvb2tpZSBmcm9tICdyZWFjdC1jb29raWVzJ1xyXG5leHBvcnQgY29uc3QgdG9rZW5LZXkgPSBcInVzZXJfdG9rZW5cIjtcclxuXHJcbi8qKlxyXG4gKiDkv53lrZh0b2tlblxyXG4gKiBAcGFyYW0gdG9rZW4gXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2F2ZVRva2VuID0gKHRva2VuOiBzdHJpbmcpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwi5L+d5a2YdG9rZW5cIiwgdG9rZW4pO1xyXG4gICAgY29va2llLnNhdmUodG9rZW5LZXksIHRva2VuKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOenu+mZpHRva2VuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVtb3ZlVG9rZW4gPSAoKSA9PiB7XHJcbiAgICBjb29raWUucmVtb3ZlKHRva2VuS2V5KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPlnRva2VuXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldFRva2VuID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSBjb29raWUubG9hZCh0b2tlbktleSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIuiOt+WPlnRva2VuXCIsIHRva2VuKTtcclxuICAgIHJldHVybiB0b2tlbiA9PSBudWxsID8gJycgOiB0b2tlbjtcclxufSIsImxldCBkb21haW4gPSBwcm9jZXNzLmVudi5BUElfSE9TVCB8fCAnJztcclxuLy8gaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbi8vICAgICBkb21haW4gPSBkb21haW4ucmVwbGFjZSgvXmh0dHBzL2ksICdodHRwJyk7XHJcbi8vIH1cclxuXHJcbmNvbnN0IFVybCA9IHtcclxuICAgIHN0YXRpY0hvc3Q6IHByb2Nlc3MuZW52LlNUQVRJQ19IT1NULFxyXG4gICAgZG9tYWluLFxyXG4gICAgY29tbWl0OiBcImNvbW1pdFwiLCAvL+WtpuagoeWIhuexu+WfjuW4guetieS/oeaBr+iOt+WPllxyXG4gICAgZ2V0Q2lyY2xlVHlwZTogXCJnZXRfY2lyY2xlX3R5cGVcIiwgLy/ojrflvpflnIjlrZDnsbvliKtcclxuXHJcbiAgICBnZXRDb2RlOiBcImdldF9jb2RlXCIsIC8v6I635Y+W6aqM6K+B56CBXHJcbiAgICBwd2RMb2dpbjogXCJsb2dpblwiLCAvL+WvhueggeeZu+W9lVxyXG4gICAgY29kZUxvZ2luOiBcInF1aWNrX2xvZ2luXCIsIC8v6aqM6K+B56CB55m75b2VXHJcbiAgICBhdXRvTG9naW46IFwiYXV0b19sb2dpblwiLCAvL+iHquWKqOeZu+W9lVxyXG4gICAgdXNlckluZm86IFwidXNlci9pbmZvXCIsIC8v55So5oi35L+h5oGvXHJcblxyXG4gICAgdXNlckNpcmNsZUxpc3Q6IFwiY2lyY2xlL3VzZXJfam9pblwiLCAvL+eUqOaIt+WKoOWFpeeahOWciOWtkFxyXG4gICAgY2lyY2xlTGlzdDogXCJjaXJjbGUvbGlzdFwiLCAvL+WciOWtkOWIl+ihqFxyXG5cclxuICAgIGhlbHBlckxpc3Q6IFwiaGVscGVyL2xpc3RcIiwgLy/msYLliqnliJfooahcclxuICAgIHVzZXJIZWxwTGlzdDogXCJoZWxwZXIvdXNlci9saXN0XCIsIC8vIOeUqOaIt+axguWKqeWIl+ihqFxyXG5cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVXJsO1xyXG4iLCJpbXBvcnQgdHlwZSB7IEFzeW5jVGh1bmsgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgeyBsb3dlckNhc2UgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgc3RhdGljRGF0YSBmcm9tICcuL3N0YXRpY0RhdGEnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHdhaXRUaW1lID0gKHRpbWU6IG51bWJlciA9IDEwMCkgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgfSwgdGltZSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0gbmFtZSBhY3Rpb27lkI1cclxuICogQHBhcmFtIGZuIOivt+axguWHveaVsFxyXG4gKiBAcmV0dXJucyB0aHVua+WMheijueeahGFjdGlvblxyXG4gKiBAUyDljIXoo7nnmoTlh73mlbDnmoTnsbvlnovvvIzlpoLmnpzkuI3luKblj4LmlbDnmoTor53vvIzopoHloat2b2lk77yM5LiN54S257yW6K+R5Zmo5Lya5oql6ZSZXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdGh1bmtXcmFwcGVyID0gPFQgPSBhbnksIFMgPSBhbnk+KG5hbWU6IHN0cmluZywgZm46IChwYXJhbXM/OiBhbnkpID0+IFByb21pc2U8VD4pID0+IHtcclxuICAgIHJldHVybiBjcmVhdGVBc3luY1RodW5rKG5hbWUsIGFzeW5jIChwYXJhbXM/OiBhbnkpID0+IHtcclxuICAgICAgICBpZiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmbihwYXJhbXMhKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZuKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH1cclxuICAgIH0pIGFzIEFzeW5jVGh1bms8dW5rbm93biwgUywgUmVjb3JkPHN0cmluZywgYW55Pj47XHJcbn07XHJcblxyXG4vKipcclxuICog6I635Y+W5pyA5aSa5Lik5L2N5pyJ5pWI5bCP5pWwXHJcbiAqIEBwYXJhbSBkIFxyXG4gKiBAcmV0dXJucyBcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRNYXhUd29aZXJvID0gKGQ6IG51bWJlcikgPT4ge1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoZCAqIDEwMCkgLyAxMDBcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPluS6kuW4ruaYvuekuueahOmHkeminVxyXG4gKiBAcGFyYW0gbWluIOacgOWwj+mHkeminVxyXG4gKiBAcGFyYW0gbWF4IOacgOWkp+mHkeminVxyXG4gKiBAcmV0dXJucyBcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRIZWxwTW9uZXkgPSAobWluOiBudW1iZXIsIG1heDogbnVtYmVyKSA9PiB7XHJcbiAgICBpZiAobWF4ID09IDApIHtcclxuICAgICAgICBpZiAobWluID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwi5b6F5a6aXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwi77+lXCIgKyBnZXRNYXhUd29aZXJvKG1pbikgKyBcIuWFg1wiO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFwi77+lXCIgKyBnZXRNYXhUd29aZXJvKG1pbikgKyBcIi1cIiArIGdldE1heFR3b1plcm8obWF4KSArIFwi5YWDXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmoLnmja7lvZPliY3ojrflj5bml7bpl7TlrZfnrKbkuLJcclxuICogQHBhcmFtIHRpbWUg5pe26Ze05oizXHJcbiAqIEBwYXJhbSBkZWZhdWx0VmFsdWUg6buY6K6k5YC8XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0VGltZVN0cmluZ0J5Tm93ID0gKHRpbWU6IG51bWJlciwgZGVmYXVsdFZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgIGlmICh0aW1lIDw9IDApIHtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lKTtcclxuICAgIGlmIChkYXRlID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG4gICAgbGV0IG5vd0RhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IHllc0RhdGUgPSBuZXcgRGF0ZShub3dEYXRlLmdldFRpbWUoKSAtICgyNCAqIDYwICogNjAgKiAxMDAwKSk7XHJcbiAgICBsZXQgdG9tb3Jyb3dEYXRlID0gbmV3IERhdGUobm93RGF0ZS5nZXRUaW1lKCkgKyAoMjQgKiA2MCAqIDYwICogMTAwMCkpO1xyXG4gICAgaWYgKG5vd0RhdGUuZ2V0RnVsbFllYXIoKSA9PT0gZGF0ZS5nZXRGdWxsWWVhcigpXHJcbiAgICAgICAgJiYgbm93RGF0ZS5nZXRNb250aCgpID09PSBkYXRlLmdldE1vbnRoKClcclxuICAgICAgICAmJiBub3dEYXRlLmdldERhdGUoKSA9PT0gZGF0ZS5nZXREYXRlKCkpIHtcclxuICAgICAgICAvLyDlkIzkuIDlpKlcclxuICAgICAgICByZXR1cm4gQWRkWihkYXRlLmdldEhvdXJzKCkpICsgXCI6XCIgKyBBZGRaKGRhdGUuZ2V0TWludXRlcygpKTtcclxuICAgIH0gZWxzZSBpZiAoeWVzRGF0ZS5nZXRGdWxsWWVhcigpID09PSBkYXRlLmdldEZ1bGxZZWFyKClcclxuICAgICAgICAmJiB5ZXNEYXRlLmdldE1vbnRoKCkgPT09IGRhdGUuZ2V0TW9udGgoKVxyXG4gICAgICAgICYmIHllc0RhdGUuZ2V0RGF0ZSgpID09PSBkYXRlLmdldERhdGUoKSkge1xyXG4gICAgICAgIC8vIOaYqOWkqVxyXG4gICAgICAgIHJldHVybiBcIuaYqOWkqSBcIiArIEFkZFooZGF0ZS5nZXRIb3VycygpKSArIFwiOlwiICsgQWRkWihkYXRlLmdldE1pbnV0ZXMoKSk7XHJcbiAgICB9IGVsc2UgaWYgKHRvbW9ycm93RGF0ZS5nZXRGdWxsWWVhcigpID09PSBkYXRlLmdldEZ1bGxZZWFyKClcclxuICAgICAgICAmJiB0b21vcnJvd0RhdGUuZ2V0TW9udGgoKSA9PT0gZGF0ZS5nZXRNb250aCgpXHJcbiAgICAgICAgJiYgdG9tb3Jyb3dEYXRlLmdldERhdGUoKSA9PT0gZGF0ZS5nZXREYXRlKCkpIHtcclxuICAgICAgICAvLyDmmI7lpKlcclxuICAgICAgICByZXR1cm4gXCLmmI7lpKkgXCIgKyBBZGRaKGRhdGUuZ2V0SG91cnMoKSkgKyBcIjpcIiArIEFkZFooZGF0ZS5nZXRNaW51dGVzKCkpO1xyXG4gICAgfSBlbHNlIGlmIChub3dEYXRlLmdldEZ1bGxZZWFyKCkgPT09IGRhdGUuZ2V0RnVsbFllYXIoKSkge1xyXG4gICAgICAgIC8vIOWQjOS4gOW5tFxyXG4gICAgICAgIHJldHVybiBBZGRaKGRhdGUuZ2V0TW9udGgoKSkgKyBcIuaciFwiICsgQWRkWihkYXRlLmdldERhdGUoKSkgKyBcIuaXpSBcIiArIEFkZFooZGF0ZS5nZXRIb3VycygpKSArIFwiOlwiICsgQWRkWihkYXRlLmdldE1pbnV0ZXMoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpICsgXCLlubRcIiArIEFkZFooZGF0ZS5nZXRNb250aCgpKSArIFwi5pyIXCIgKyBBZGRaKGRhdGUuZ2V0RGF0ZSgpKSArIFwi5pelIFwiICsgQWRkWihkYXRlLmdldEhvdXJzKCkpICsgXCI6XCIgKyBBZGRaKGRhdGUuZ2V0TWludXRlcygpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOaVsOWtl+Wwj+S6jjEwIOWJjemdouihpTBcclxuICogQHBhcmFtIG51bSBcclxuICogQHJldHVybnMgXHJcbiAqL1xyXG5mdW5jdGlvbiBBZGRaKG51bTogbnVtYmVyKSB7XHJcbiAgICBpZiAobnVtIDwgMTApIHtcclxuICAgICAgICByZXR1cm4gXCIwXCIgKyBudW07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJcIiArIG51bTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOaJi+acuuWPt+mqjOivgVxyXG4gKiBAcGFyYW0gcGhvbmUg5omL5py65Y+3XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY2hlY2tQaG9uZSA9IChwaG9uZTogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAoIXBob25lKSB7XHJcbiAgICAgICAgcmV0dXJuICfor7fovpPlhaXmiYvmnLrlj7cnO1xyXG4gICAgfVxyXG4gICAgdmFyIG15cmVnID0gL14xXFxkezEwfSQvO1xyXG4gICAgaWYgKCFteXJlZy50ZXN0KHBob25lKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5omL5py65Y+35qC85byP6ZSZ6K+vXCIpO1xyXG4gICAgICAgIHJldHVybiAn5omL5py65Y+35qC85byP6ZSZ6K+vJztcclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxufVxyXG5cclxuLyoqXHJcbiAqIOmqjOivgeeggemqjOivgVxyXG4gKiBAcGFyYW0gY29kZSBcclxuICogQHJldHVybnMgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY2hlY2tDb2RlID0gKGNvZGU6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKCFjb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuICfor7flhYjojrflj5bpqozor4HnoIEnO1xyXG4gICAgfVxyXG4gICAgdmFyIG15cmVnID0gL15cXGR7NCw2fSQvO1xyXG4gICAgaWYgKCFteXJlZy50ZXN0KGNvZGUpKSB7XHJcbiAgICAgICAgcmV0dXJuICfor7fovpPlhaXmraPnoa7nmoTpqozor4HnoIEnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG59XHJcblxyXG4vKipcclxuICog6aqM6K+B5a+G56CBXHJcbiAqIEBwYXJhbSBwd2QgXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNoZWNrUHdkID0gKHB3ZDogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAoIXB3ZCkge1xyXG4gICAgICAgIHJldHVybiAn6K+36L6T5YWl5a+G56CBJztcclxuICAgIH1cclxuICAgIGlmIChwd2QubGVuZ3RoIDwgNiB8fCBwd2QubGVuZ3RoID4gMjApIHtcclxuICAgICAgICByZXR1cm4gJ+ivt+i+k+WFpTYtMjDkvY3lr4bnoIEnO1xyXG4gICAgfVxyXG4gICAgdmFyIG15cmVnID0gL14oPz0uKlthLXpBLVpdKSg/PS4qXFxkKS57NiwyMH0kLztcclxuICAgIGlmICghbXlyZWcudGVzdChwd2QpKSB7XHJcbiAgICAgICAgcmV0dXJuICflr4bnoIHmoLzlvI/plJnor68nO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG59XHJcblxyXG4vKipcclxuICog6I635Y+W5rua5Yqo5p2h5a695bqmXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjcm9sbGJhcldpZHRoKCkge1xyXG4gICAgdmFyIG9QID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLFxyXG4gICAgICAgIHN0eWxlcyA9IHtcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJSdcclxuICAgICAgICB9LCBpLCBjbGllbnRXaWR0aDEsIGNsaWVudFdpZHRoMiwgc2Nyb2xsYmFyV2lkdGg7XHJcbiAgICBmb3IgKGkgaW4gc3R5bGVzKSBvUC5zdHlsZVtpXSA9IHN0eWxlc1tpXTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob1ApO1xyXG4gICAgY2xpZW50V2lkdGgxID0gb1AuY2xpZW50V2lkdGg7XHJcbiAgICBvUC5zdHlsZS5vdmVyZmxvd1kgPSAnc2Nyb2xsJztcclxuICAgIGNsaWVudFdpZHRoMiA9IG9QLmNsaWVudFdpZHRoO1xyXG4gICAgc2Nyb2xsYmFyV2lkdGggPSBjbGllbnRXaWR0aDEgLSBjbGllbnRXaWR0aDI7XHJcbiAgICBvUC5yZW1vdmUoKTtcclxuICAgIHJldHVybiBzY3JvbGxiYXJXaWR0aDtcclxufVxyXG5cclxuLy8g5qC55o2u5a2X56ym5Liy6aaW5a2X56ymYXNjaWnlgLzojrflj5bpopzoibJcclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbG9yQnlTdHJpbmcoa2V5OiBzdHJpbmcpIHtcclxuICAgIGxldCBjb2RlID0ga2V5LmNoYXJDb2RlQXQoMCk7XHJcbiAgICByZXR1cm4gc3RhdGljRGF0YS5jb2xvckxpc3RbY29kZSAlIHN0YXRpY0RhdGEuY29sb3JMaXN0Lmxlbmd0aF07XHJcbn1cclxuXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJvZHlDb250ZW50XCI6IFwiY2FsbF91c19ib2R5Q29udGVudF9fM1VEb1RcIixcblx0XCJjb250ZW50XCI6IFwiY2FsbF91c19jb250ZW50X18yczNZZlwiLFxuXHRcImVtYWlsXCI6IFwiY2FsbF91c19lbWFpbF9fbTgwandcIixcblx0XCJoaW50XCI6IFwiY2FsbF91c19oaW50X18yalZQZVwiLFxuXHRcImdvTG9naW5cIjogXCJjYWxsX3VzX2dvTG9naW5fXzNJYXZXXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmaW5kUHdkXCI6IFwiZmluZF9wd2Rfc3VjY2Vzc19maW5kUHdkX18yU1dJcVwiLFxuXHRcImZpbmRDb250ZW50XCI6IFwiZmluZF9wd2Rfc3VjY2Vzc19maW5kQ29udGVudF9fMngtc3BcIixcblx0XCJoaW50XCI6IFwiZmluZF9wd2Rfc3VjY2Vzc19oaW50X18yRHdKUVwiLFxuXHRcImxvZ2luQnRuXCI6IFwiZmluZF9wd2Rfc3VjY2Vzc19sb2dpbkJ0bl9fMWxuWDhcIixcblx0XCJqdW1wSGludFwiOiBcImZpbmRfcHdkX3N1Y2Nlc3NfanVtcEhpbnRfXzE0OGFTXCIsXG5cdFwianVtcFRpbWVcIjogXCJmaW5kX3B3ZF9zdWNjZXNzX2p1bXBUaW1lX19ad0EtMFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9yZ2V0V2lkZ2V0XCI6IFwiZm9yZ2V0X3B3ZF9mb3JnZXRXaWRnZXRfXzJUc1pfXCIsXG5cdFwiZm9yZ2V0V2lkZ2V0Q29udGVudFwiOiBcImZvcmdldF9wd2RfZm9yZ2V0V2lkZ2V0Q29udGVudF9fM0E1My1cIixcblx0XCJ0aXRsZVwiOiBcImZvcmdldF9wd2RfdGl0bGVfXzNRYllmXCIsXG5cdFwiZXJyb3JUZXh0XCI6IFwiZm9yZ2V0X3B3ZF9lcnJvclRleHRfXzJsRENnXCIsXG5cdFwiaW5wdXRXaWRnZXRcIjogXCJmb3JnZXRfcHdkX2lucHV0V2lkZ2V0X18xX0N0UFwiLFxuXHRcImlucHV0Q29udGVudFwiOiBcImZvcmdldF9wd2RfaW5wdXRDb250ZW50X18zS3FhRVwiLFxuXHRcImxvZ2luQnRuXCI6IFwiZm9yZ2V0X3B3ZF9sb2dpbkJ0bl9fMlh3VDlcIixcblx0XCJoaW50Q29udGVudFwiOiBcImZvcmdldF9wd2RfaGludENvbnRlbnRfXy1XOFhPXCIsXG5cdFwiY29udGFjdFVzXCI6IFwiZm9yZ2V0X3B3ZF9jb250YWN0VXNfX0RXaERNXCIsXG5cdFwiZ29Mb2dpblwiOiBcImZvcmdldF9wd2RfZ29Mb2dpbl9fMW54TlNcIixcblx0XCJjYWxsVXNcIjogXCJmb3JnZXRfcHdkX2NhbGxVc19fMUR4MjZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxvZ2luV2lkZ2V0XCI6IFwibG9naW5fd2lkZ2V0X2xvZ2luV2lkZ2V0X18yMFhxZlwiLFxuXHRcImxvZ2luU3RhdHVzXCI6IFwibG9naW5fd2lkZ2V0X2xvZ2luU3RhdHVzX18zVVQxWlwiLFxuXHRcImxvZ2luU3RhdHVzQnRcIjogXCJsb2dpbl93aWRnZXRfbG9naW5TdGF0dXNCdF9fMkdJRHFcIixcblx0XCJjb250ZW50XCI6IFwibG9naW5fd2lkZ2V0X2NvbnRlbnRfXzJMNHBwXCIsXG5cdFwiZXJyb3JUZXh0XCI6IFwibG9naW5fd2lkZ2V0X2Vycm9yVGV4dF9fMzBUY3lcIixcblx0XCJpbnB1dFdpZGdldFwiOiBcImxvZ2luX3dpZGdldF9pbnB1dFdpZGdldF9faW53UUdcIixcblx0XCJpbnB1dENvbnRlbnRcIjogXCJsb2dpbl93aWRnZXRfaW5wdXRDb250ZW50X19iZnJOQVwiLFxuXHRcImxvZ2luQnRuXCI6IFwibG9naW5fd2lkZ2V0X2xvZ2luQnRuX18yUG1BVFwiLFxuXHRcImhpbnRDb250ZW50XCI6IFwibG9naW5fd2lkZ2V0X2hpbnRDb250ZW50X19DRzMySFwiLFxuXHRcImxvZ2luSGludFwiOiBcImxvZ2luX3dpZGdldF9sb2dpbkhpbnRfXzNmRkxZXCIsXG5cdFwiZm9yZ2V0UHdkXCI6IFwibG9naW5fd2lkZ2V0X2ZvcmdldFB3ZF9fMnBxdG5cIixcblx0XCJvdGhlckxvZ2luXCI6IFwibG9naW5fd2lkZ2V0X290aGVyTG9naW5fXzFKM3VJXCIsXG5cdFwicXFMb2dpblwiOiBcImxvZ2luX3dpZGdldF9xcUxvZ2luX18xdjBjNFwiLFxuXHRcIndlY2hhdExvZ2luXCI6IFwibG9naW5fd2lkZ2V0X3dlY2hhdExvZ2luX18yRmNmU1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibG9naW5cIjogXCJsb2dpbl9kaWFsb2dfbG9naW5fXzI0dmRfXCIsXG5cdFwibG9naW5Cb2R5XCI6IFwibG9naW5fZGlhbG9nX2xvZ2luQm9keV9fMldpZ1BcIixcblx0XCJsZWZ0Q29udGVudFwiOiBcImxvZ2luX2RpYWxvZ19sZWZ0Q29udGVudF9fMV9JakdcIixcblx0XCJsb2dvXCI6IFwibG9naW5fZGlhbG9nX2xvZ29fXzFWazM2XCIsXG5cdFwiZG93bkNvZGVcIjogXCJsb2dpbl9kaWFsb2dfZG93bkNvZGVfXzJvYkxCXCIsXG5cdFwiZG93bkhpbnRcIjogXCJsb2dpbl9kaWFsb2dfZG93bkhpbnRfXzFoeHlUXCIsXG5cdFwicmlnaHRDb250ZW50XCI6IFwibG9naW5fZGlhbG9nX3JpZ2h0Q29udGVudF9fM3pWN19cIixcblx0XCJsb2dpbldpZGdldFwiOiBcImxvZ2luX2RpYWxvZ19sb2dpbldpZGdldF9fMjNQVlpcIixcblx0XCJkaWFsb2dDbG9zZVwiOiBcImxvZ2luX2RpYWxvZ19kaWFsb2dDbG9zZV9feDQ5d0VcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ1dHRvblN0eWxlXCI6IFwiYWN0aW9uX2J1dHRvbl9idXR0b25TdHlsZV9fM2tQSFFcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvZGVUZXh0XCI6IFwiZ2V0X2NvZGVfd2lkZ2V0X2NvZGVUZXh0X18ydkNfclwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaW5wdXRDb250ZW50XCI6IFwiaW5wdXRfd2lkZ2V0X2lucHV0Q29udGVudF9fMzZPc2NcIixcblx0XCJjb250ZW50XCI6IFwiaW5wdXRfd2lkZ2V0X2NvbnRlbnRfX21MMVp1XCIsXG5cdFwiaW5wdXRcIjogXCJpbnB1dF93aWRnZXRfaW5wdXRfX0VheFJBXCIsXG5cdFwiY2xlYXJJY29uXCI6IFwiaW5wdXRfd2lkZ2V0X2NsZWFySWNvbl9fMUhBU0xcIixcblx0XCJwd2RTaG93XCI6IFwiaW5wdXRfd2lkZ2V0X3B3ZFNob3dfXzNxSVhUXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0b1RvcFwiOiBcImxheW91dF90b1RvcF9fMll4NVBcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInByZWxvYWRlclwiOiBcImxvYWRpbmdfcHJlbG9hZGVyX18za1VlSlwiLFxuXHRcInNob3dcIjogXCJsb2FkaW5nX3Nob3dfXzNfcFF0XCIsXG5cdFwiaGlkZGVuXCI6IFwibG9hZGluZ19oaWRkZW5fXzFSN0tTXCIsXG5cdFwiY3MtbG9hZGVyXCI6IFwibG9hZGluZ19jcy1sb2FkZXJfXzJxOWlSXCIsXG5cdFwiY3MtbG9hZGVyLWlubmVyXCI6IFwibG9hZGluZ19jcy1sb2FkZXItaW5uZXJfXzM4bUlhXCIsXG5cdFwibG9sXCI6IFwibG9hZGluZ19sb2xfX0tMSExiXCIsXG5cdFwic3Bpbm5lclwiOiBcImxvYWRpbmdfc3Bpbm5lcl9fM0NLaS1cIixcblx0XCJkb3VibGUtYm91bmNlMVwiOiBcImxvYWRpbmdfZG91YmxlLWJvdW5jZTFfXzJ4RDNzXCIsXG5cdFwiZG91YmxlLWJvdW5jZTJcIjogXCJsb2FkaW5nX2RvdWJsZS1ib3VuY2UyX18zUnVReFwiLFxuXHRcImJvdW5jZVwiOiBcImxvYWRpbmdfYm91bmNlX19vdWlONFwiXG59O1xuIiwiIiwiIiwiIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3J5cHRvLWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY29va2llc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7Il0sIm5hbWVzIjpbInN0eWxlcyIsInVzZUFwcERpc3BhdGNoIiwiaGlkZUxvZ2luIiwiTG9naW5XaWRnZXQiLCJ1c2VTdGF0ZSIsIkZvcmdldFB3ZFdpZGdldCIsIkxvZ2luRGlhbG9nIiwiZGlzcGF0Y2giLCJzaG93Rm9yZ2V0UHdkIiwic2V0U2hvd0ZvcmdldFB3ZCIsImNsb3NlTG9naW4iLCJzd2l0Y2hMb2dpbiIsInNob3dGb3JnZXQiLCJsb2dpbiIsImxvZ2luQm9keSIsImxlZnRDb250ZW50IiwibG9nbyIsImRvd25Db2RlIiwiZG93bkhpbnQiLCJyaWdodENvbnRlbnQiLCJsb2dpbldpZGdldCIsImxlZnQiLCJvcGFjaXR5IiwiZGlhbG9nQ2xvc2UiLCJSZWFjdCIsImNoZWNrQ29kZSIsImNoZWNrUGhvbmUiLCJjaGVja1B3ZCIsIkdldENvZGVXaWRnZXQiLCJJbnB1dFdpZGdldCIsIkFjdGlvbkJ1dHRvbiIsIkNhbGxVcyIsInVzZURpc3BhdGNoIiwiRmluZFB3ZFN1Y2Nlc3MiLCJwaG9uZSIsInNldFBob25lIiwiY29kZSIsInNldENvZGUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZXJyb3JUZXh0Iiwic2V0RXJyb3JUZXh0Iiwic2hvd1R5cGUiLCJzZXRTaG93VHlwZSIsImlzQ2FuU2VuZCIsImdvTG9naW4iLCJzaG93Q2FsbFVzIiwiZ2V0Q29kZSIsImVycm9yIiwic2V0Q2FuU2VuZCIsImNhblNlbmQiLCJoYW5kbGVTdWJtaXQiLCJjb25zb2xlIiwibG9nIiwiZm9yZ2V0V2lkZ2V0IiwiZm9yZ2V0V2lkZ2V0Q29udGVudCIsInRpdGxlIiwiaW5wdXRXaWRnZXQiLCJtYXJnaW5Ub3AiLCJpbnB1dENvbnRlbnQiLCJrZXkiLCJsb2dpbkJ0biIsImhpbnRDb250ZW50IiwiY29udGFjdFVzIiwiY2FsbFVzIiwiYm9keUNvbnRlbnQiLCJjb250ZW50IiwiZW1haWwiLCJoaW50IiwiQ29tcG9uZW50IiwidGltZSIsInN0YXJ0VGltZSIsInRpbWVySUQiLCJzZXRJbnRlcnZhbCIsInRpbWVzIiwic2V0U3RhdGUiLCJjbGVhckludGVydmFsIiwicHJvcHMiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVuZGVyIiwiZmluZFB3ZCIsImZpbmRDb250ZW50IiwianVtcEhpbnQiLCJqdW1wVGltZSIsInN0YXRlIiwiY29kZUxvZ2luIiwicHdkTG9naW4iLCJnZXRQaG9uZUNvZGUiLCJzYXZlVXNlciIsImVuY3J5cHQiLCJpc0NvZGVMb2dpbiIsInNldENvZGVMb2dpbiIsInN3aXRjaExvZ2luVHlwZSIsInAiLCJkZWFsUGhvbmVDb2RlIiwidHlwZSIsInRoZW4iLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJoYW5kbGVMb2dpbiIsInJlcXVlc3QiLCJzdGF0dXMiLCJtZXNzYWdlIiwiZ29Ub0ZvcmdldFB3ZCIsImxvZ2luU3RhdHVzIiwibG9naW5TdGF0dXNCdCIsImNvbG9yIiwiYm9yZGVyQm90dG9tQ29sb3IiLCJtYXJnaW5MZWZ0IiwidmlzaWJpbGl0eSIsImhlaWdodCIsIm1hcmdpbiIsImxvZ2luSGludCIsImZvcmdldFB3ZCIsIm90aGVyTG9naW4iLCJxcUxvZ2luIiwid2VjaGF0TG9naW4iLCJvbkNsaWNrIiwidmFsdWUiLCJjbGFzc05hbWUiLCJidXR0b25TdHlsZSIsImpvaW4iLCJjb2RlVGltZSIsImlzT2siLCJzdGFydENvZGVUaW1lIiwic2V0Q29kZVRpbWUiLCJjb2RlVGV4dCIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJpc0hpZGRlbiIsImhpbnRUZXh0IiwiaW5wdXRUeXBlIiwid2lkdGgiLCJmb250U2l6ZSIsInRleHRDb2xvciIsIm1heExlbmd0aCIsIm9uVGV4dENoYW5nZSIsIm9uRm9jdXMiLCJ0ZXh0Iiwic2V0VGV4dCIsInB3ZFR5cGUiLCJzZXRQd2RUeXBlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsImNsZWFyVGV4dCIsInN3aXRjaFB3ZFNob3dPckhpZGUiLCJpbnB1dCIsImNsZWFySWNvbiIsInB3ZFNob3ciLCJMYXlvdXQiLCJSZXN1bHQiLCJlcnJUaXRsZSIsIkVycm9yUGFnZSIsInN0YXR1c0NvZGUiLCJIZWFkIiwidXNlRWZmZWN0IiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkcyIsImNoaWxkcmVuIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvVG9wIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInBhZ2VZT2Zmc2V0Iiwic3R5bGUiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsInJpZ2h0IiwicGFnZVhPZmZzZXQiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwid2FpdFRpbWUiLCJjbGFzc05hbWVzIiwiTG9hZGluZ1BhZ2UiLCJpc01vYmlsZSIsImxvYWRpbmciLCJkZWxheSIsInNwaW5uaW5nIiwic2V0U3Bpbm5pbmciLCJwcmVsb2FkZXIiLCJzaG93IiwiaGlkZGVuIiwidXNlUm91dGVyIiwid3JhcHBlciIsInVzZUFwcFNlbGVjdG9yIiwiY2xlYXJQZW5kaW5nIiwiZmV0Y2hBdXRvTG9naW4iLCJNeUFwcCIsInBhZ2VQcm9wcyIsInJvdXRlciIsInNldExvYWRpbmciLCJoYW5kbGVTdGFydCIsInVybCIsImhhbmRsZVN0b3AiLCJldmVudHMiLCJvbiIsIm9mZiIsImluY2x1ZGVzIiwiaXNTaG93TG9naW4iLCJnZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsQXBwUHJvcHMiLCJzdG9yZSIsImN0eCIsInVzZXJBZ2VudCIsInJlcSIsImdldFN0YXRlIiwidXNlciIsImlzTG9naW4iLCJoZWFkZXJzIiwibmF2aWdhdG9yIiwidGVzdCIsIndpdGhSZWR1eCIsImFwaSIsIlVybCIsImdldENpcmNsZUxpc3QiLCJwYXJhbXMiLCJjaXJjbGVMaXN0IiwibWV0aG9kIiwiZ2V0VXNlckNpcmNsZUxpc3QiLCJ1c2VyQ2lyY2xlTGlzdCIsImdldFR5cGVBZGRyZXNzU2Nob29sIiwiY29tbWl0IiwiZ2V0Q2lyY2xlVHlwZSIsImdldEhlbHBlckxpc3QiLCJoZWxwZXJMaXN0IiwiZ2V0VXNlckhlbHBlckxpc3QiLCJ1c2VySGVscExpc3QiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwiaWQiLCJhdXRvTG9naW4iLCJ0aHVua1dyYXBwZXIiLCJjcmVhdGVTbGljZSIsImZldGNoQWxsQ2lyY2xlTGlzdCIsImZldGNoVXNlckNpcmNsZUxpc3QiLCJpbml0aWFsU3RhdGUiLCJhbGxDaXJjbGVEYXRhIiwidG90YWwiLCJsaXN0IiwibXlDaXJjbGVMaXN0IiwiaG9tZVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiZXh0cmFSZWR1Y2VycyIsImZ1bGZpbGxlZCIsImFjdGlvbiIsInBheWxvYWQiLCJyZWR1Y2VyIiwiZmV0Y2hUeXBlQWRkcmVzc1NjaG9vbCIsImZldGNoQ2lyY2xlVHlwZSIsImNpcmNsZVR5cGUiLCJjb21tb25TbGljZSIsImluY3JlbWVudCIsImFjdGlvbnMiLCJmZXRjaFJlY29tbWVuZExpc3QiLCJmZXRjaExpa2VMaXN0IiwiZmV0Y2hOZWFyYnlMaXN0IiwiZmV0Y2hIb3J0TGlzdCIsImZldGNoUmVjb21tZW5kQ2lyY2xlTGlzdCIsImlzTG9hZCIsInJlY29tbWVuZERhdGEiLCJsaWtlRGF0YSIsIm5lYXJieURhdGEiLCJob3J0RGF0YSIsInJlY29tbWVuZENpcmNsZURhdGEiLCJsZW5ndGgiLCJpc1BlbmRpbmdBY3Rpb24iLCJlbmRzV2l0aCIsImlzUmVqZWN0ZWRBY3Rpb24iLCJpc0Z1bGZpbGxlZEFjdGlvbiIsImxvYWRpbmdTbGljZSIsImJ1aWxkZXIiLCJhZGRNYXRjaGVyIiwicmVwbGFjZSIsImdldFNjcm9sbGJhcldpZHRoIiwibG9naW5TbGljZSIsInNob3dMb2dpbiIsImJvZHkiLCJvdmVyZmxvdyIsInBhZGRpbmdSaWdodCIsInNob3dMb2dpblBhZ2UiLCJzaG93Rm9yZ2V0UHdkUGFnZSIsInNob3dPckhpZGVMb2dpbiIsImlzU2hvdyIsImlzTm93U2hvdyIsImZldGNoVXNlckluZm8iLCJmZXRjaE1pbmVSZWNvbW1lbmRDaXJjbGVMaXN0IiwiZmV0Y2hNaW5lSGVscGVyTGlzdCIsInVuZGVmaW5lZCIsIm1pbmVIZWxwZXJEYXRhIiwidXNlclBhZ2VTZWxlY3RJbmRleCIsIm1pbmVTbGljZSIsInN3aXRjaFVzZXJQYWdlU2VsZWN0SW5kZXgiLCJpbmRleCIsInJlbW92ZVRva2VuIiwic2F2ZVRva2VuIiwiaXNGaW5pc2giLCJ0b2tlbiIsInVzZXJTbGljZSIsInNhdmVVc2VySW5mbyIsInNhdmVVc2VyRGF0YSIsIm91dExvZ2luIiwiaXNfZmluaXNoIiwiY29uZmlndXJlU3RvcmUiLCJ1c2VTZWxlY3RvciIsImNvbWJpbmVSZWR1Y2VycyIsImNyZWF0ZVdyYXBwZXIiLCJIWURSQVRFIiwibG9hZGluZ1JlZHVjZXIiLCJob21lUmVkdWNlciIsImxvZ2luUmVkdWNlciIsInVzZXJSZWR1Y2VyIiwiY29tbW9uUmVkdWNlciIsImNpcmNsZVJlZHVjZXIiLCJtaW5lUmVkdWNlciIsImNvbWJpbmVkUmVkdWNlciIsImhvbWUiLCJjb21tb24iLCJjaXJjbGUiLCJtaW5lIiwibmV4dFN0YXRlIiwibWFrZVN0b3JlIiwiZGV2VG9vbHMiLCJDcnlwdG9KUyIsImVuYyIsIlV0ZjgiLCJwYXJzZSIsIml2Iiwic3JjcyIsImVuY3J5cHRlZCIsIkFFUyIsIm1vZGUiLCJFQ0IiLCJwYWRkaW5nIiwicGFkIiwiUGtjczciLCJjaXBoZXJ0ZXh0IiwidG9TdHJpbmciLCJCYXNlNjQiLCJkZWNyeXB0Iiwid29yZCIsImRlY3J5cHRlZFN0ciIsImF4aW9zIiwibm90aWZpY2F0aW9uIiwiZ2V0VG9rZW4iLCJxcyIsInJlcXVpcmUiLCJjb2RlTWVzc2FnZSIsImdldEhlYWRlciIsImhlYWRlciIsIm5vd190aW1lIiwiRGF0ZSIsImdldFRpbWUiLCJ2ZXJzaW9uIiwiY2xpZW50IiwiZGlkIiwiYWVzSGVhZGVyIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbmZpZyIsImluc3RhbmNlIiwiY3JlYXRlIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJlbnYiLCJBUElfSE9TVCIsInRpbWVvdXQiLCJpbnRlcmNlcHRvcnMiLCJ1c2UiLCJwZW5kaW5nIiwiaGFzIiwiY2FuY2VsIiwiZ2V0IiwiZGVsZXRlIiwiY2FuY2VsVG9rZW4iLCJDYW5jZWxUb2tlbiIsInNldCIsInRyYW5zZm9ybVJlcXVlc3QiLCJzdHIiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVzcG9uc2UiLCJzdGF0dXNUZXh0IiwicmVzIiwibmVlZF9kZWNyeXB0IiwiTWFwIiwiZm9yRWFjaCIsImNsZWFyIiwic3RhdGljRGF0YSIsImNvbG9yTGlzdCIsImNvb2tpZSIsInRva2VuS2V5Iiwic2F2ZSIsInJlbW92ZSIsImxvYWQiLCJkb21haW4iLCJzdGF0aWNIb3N0IiwiU1RBVElDX0hPU1QiLCJjcmVhdGVBc3luY1RodW5rIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiZm4iLCJnZXRNYXhUd29aZXJvIiwiZCIsIk1hdGgiLCJyb3VuZCIsImdldEhlbHBNb25leSIsIm1pbiIsIm1heCIsImdldFRpbWVTdHJpbmdCeU5vdyIsImRlZmF1bHRWYWx1ZSIsImRhdGUiLCJub3dEYXRlIiwieWVzRGF0ZSIsInRvbW9ycm93RGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiQWRkWiIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsIm51bSIsIm15cmVnIiwicHdkIiwib1AiLCJjcmVhdGVFbGVtZW50IiwiaSIsImNsaWVudFdpZHRoMSIsImNsaWVudFdpZHRoMiIsInNjcm9sbGJhcldpZHRoIiwiYXBwZW5kQ2hpbGQiLCJvdmVyZmxvd1kiLCJnZXRDb2xvckJ5U3RyaW5nIiwiY2hhckNvZGVBdCJdLCJzb3VyY2VSb290IjoiIn0=