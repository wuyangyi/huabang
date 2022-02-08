(() => {
var exports = {};
exports.id = "pages/circle/create";
exports.ids = ["pages/circle/create"];
exports.modules = {

/***/ "./components/circle/create/CreateCircleContent.tsx":
/*!**********************************************************!*\
  !*** ./components/circle/create/CreateCircleContent.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _widget_ActionButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widget/ActionButton */ "./components/widget/ActionButton.tsx");
/* harmony import */ var _widget_InputWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widget/InputWidget */ "./components/widget/InputWidget.tsx");
/* harmony import */ var _create_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create_circle_content.module.scss */ "./components/circle/create/create_circle_content.module.scss");
/* harmony import */ var _create_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_create_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\components\\circle\\create\\CreateCircleContent.tsx";






const CreateCircleContent = () => {
  const {
    0: desc,
    1: setDesc
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("圈主很懒什么都没留下~");
  const {
    0: circleBg,
    1: setCircleBg
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("http://wyyhubang.oss-cn-chengdu.aliyuncs.com/default/default_circle_bg.png");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: (_create_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contentBody),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_create_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_4___default().titleContent),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
        className: (_create_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
        children: "\u521B\u5EFA\u5708\u5B50"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_create_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_4___default().submitView),
        children: "\u63D0\u4EA4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_create_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_4___default().circleContent),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_create_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_4___default().circleHead),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          className: (_create_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_4___default().name),
          children: "\u5934\u2003\u2003\u50CF\uFF1A"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
          className: (_create_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_4___default().upHeader),
          src: "/static/images/up_header.png",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_create_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_4___default().circleName),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          className: (_create_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_4___default().name),
          children: "\u5E2E\u5708\u540D\u79F0\uFF1A"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_create_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_4___default().nameInput),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_widget_InputWidget__WEBPACK_IMPORTED_MODULE_2__.default, {
            hintText: "\u8D77\u4E2A\u540D\u5B57\u5427~",
            inputType: "text",
            maxLength: 25
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_create_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_4___default().circleMember),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          className: (_create_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_4___default().name),
          children: "\u6DFB\u52A0\u6210\u5458\uFF1A"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_create_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_4___default().members),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
            className: (_create_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_4___default().memberAdd),
            src: "/static/images/ico_group_add.png",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_create_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_4___default().circleBg),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          className: (_create_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_4___default().name),
          children: "\u5708\u5B50\u80CC\u666F\uFF1A"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_create_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_4___default().bg),
          style: {
            outline: circleBg ? "none" : "1px dashed #ccc"
          },
          children: [circleBg && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
            src: circleBg,
            alt: "",
            width: "100%",
            height: "100%"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 37
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: (_create_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_4___default().maskBg),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: (_create_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_4___default().maskBg1)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 25
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: (_create_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_4___default().maskBg2)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 25
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_widget_ActionButton__WEBPACK_IMPORTED_MODULE_1__.default, {
              value: "\u4E0A\u4F20\u80CC\u666F",
              className: (_create_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_4___default().reloadBg)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 25
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_create_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_4___default().circleDesc),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          className: (_create_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_4___default().name),
          children: "\u5E2E\u5708\u7B80\u4ECB\uFF1A"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_create_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_4___default().descInput),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("textarea", {
            className: (_create_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input),
            value: desc,
            maxLength: 255,
            placeholder: "\u8BF4\u70B9\u4EC0\u4E48\u5427~",
            onChange: e => {
              setDesc(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
            className: (_create_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_4___default().descNumber),
            children: [desc.length, "/255"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateCircleContent);

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

/***/ "./layout/Footer.tsx":
/*!***************************!*\
  !*** ./layout/Footer.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/footer.module.scss */ "./styles/footer.module.scss");
/* harmony import */ var _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\layout\\Footer.tsx";





const Footer = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("footer", {
      className: (_styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().footer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
        src: "/static/images/footer.png",
        width: "100%",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().content),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: "\u5173\u4E8E\u6211\u4EEC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              href: "",
              children: "\u7F51\u7AD9\u4ECB\u7ECD"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              href: "",
              children: "\u514D\u8D23\u58F0\u660E"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              href: "",
              children: "\u53CB\u60C5\u94FE\u63A5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: "\u4EA7\u54C1\u670D\u52A1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              href: "",
              children: "\u5E2E\u5708"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              href: "",
              children: "\u5B9E\u540D\u8BA4\u8BC1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              href: "",
              children: "\u6C42\u804C\u62DB\u8058"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              href: "",
              children: "\u66DD\u5149\u53F0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: "\u5E2E\u52A9\u4E2D\u5FC3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              href: "",
              children: "\u5E38\u89C1\u95EE\u9898"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              href: "",
              children: "\u670D\u52A1\u4ECB\u7ECD"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              href: "",
              children: "\u8054\u7CFB\u6211\u4EEC"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().down),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: (_styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().downOther),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: "/static/images/app_down.png",
              width: "80px",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 29
            }, undefined), "APP\u4E0B\u8F7D"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: (_styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().downOther),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: "/static/images/app_down.png",
              width: "80px",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 29
            }, undefined), "\u624B\u673A\u7F51\u9875\u7248"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: (_styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().downOther),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: "/static/images/app_down.png",
              width: "80px",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 29
            }, undefined), "\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        className: (_styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().copy),
        children: [" \xA9 Copyright 2021. \u5434\u6D0B\u6BC5", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
          className: (_styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().copyLink),
          href: "http://beian.miit.gov.cn/",
          target: "blank",
          rel: "nofollow",
          children: "\u9102ICP\u59072021002418\u53F7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./layout/Header.tsx":
/*!***************************!*\
  !*** ./layout/Header.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/header.module.scss */ "./styles/header.module.scss");
/* harmony import */ var _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/store */ "./store/store.ts");
/* harmony import */ var _store_slices_loginSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/slices/loginSlice */ "./store/slices/loginSlice.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/util */ "./utils/util.ts");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_slices_mineSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/slices/mineSlice */ "./store/slices/mineSlice.ts");
/* harmony import */ var _store_slices_userSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/slices/userSlice */ "./store/slices/userSlice.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\layout\\Header.tsx";












const Header = props => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const isShowLogin = (0,_store_store__WEBPACK_IMPORTED_MODULE_0__.useAppSelector)(state => state.login.isShowLogin);
  const {
    isLogin,
    user
  } = (0,_store_store__WEBPACK_IMPORTED_MODULE_0__.useAppSelector)(state => state.user);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  const userCenterList = [{
    id: 0,
    image: "/static/images/ico_my_center.png",
    title: "我的主页",
    link: "/user/" + (user === null || user === void 0 ? void 0 : user.id)
  }, {
    id: 1,
    image: "/static/images/ico_my_circle.png",
    title: "我的帮圈",
    link: "/user/" + (user === null || user === void 0 ? void 0 : user.id)
  }, {
    id: 2,
    image: "/static/images/ico_collect.png",
    title: "我的收藏",
    link: "/user/" + (user === null || user === void 0 ? void 0 : user.id)
  }, {
    id: 3,
    image: "/static/images/ico_setting.png",
    title: "系统设置",
    link: ""
  }, {
    id: 4,
    image: "/static/images/ico_out_login.png",
    title: "退出登录",
    link: ""
  }];
  const sendList = [{
    id: 0,
    image: "/static/images/ico_release_help.png",
    title: "发求助"
  }, {
    id: 1,
    image: "/static/images/ico_release_dynamic.png",
    title: "发动态"
  }, {
    id: 2,
    image: "/static/images/ico_release_wz.png",
    title: "发文章"
  }];
  const {
    0: isShowUserCenter,
    1: setShowUserCenter
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const {
    0: isShowSendDynamic,
    1: setShowSendDynamic
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // 渲染完成回调

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    document.addEventListener('click', hideDialog);
  }, []);

  const hideDialog = ev => {
    let target = ev.target || ev.srcElement;
    let id = target.id;

    if (id !== "userHead") {
      setShowUserCenter(false);
    }

    if (id !== "sendDynamic") {
      setShowSendDynamic(false);
    }
  };

  function userCenterShow() {
    setShowUserCenter(!isShowUserCenter);
  }

  ;

  function sendShow() {
    setShowSendDynamic(!isShowSendDynamic);
  }

  const userCenterItemClick = index => {
    if (index < 3) {
      if (props.userCenterChange) {
        props.userCenterChange(index == 0 ? 0 : index + 1);
      } else {
        if (user) {
          dispatch((0,_store_slices_mineSlice__WEBPACK_IMPORTED_MODULE_7__.switchUserPageSelectIndex)({
            key: user.id,
            index: index == 0 ? 0 : index + 1
          }));
        }

        router.push({
          pathname: userCenterList[index].link
        });
      }
    } else if (index == 3) {
      router.push({
        pathname: userCenterList[index].link
      });
    } else if (index == 4) {
      // 退出登录
      dispatch((0,_store_slices_userSlice__WEBPACK_IMPORTED_MODULE_8__.outLogin)());
    }
  };

  const sendDynamicItemClick = ev => {
    console.log("点击了");
  };

  const showLogin = () => {
    dispatch((0,_store_slices_loginSlice__WEBPACK_IMPORTED_MODULE_1__.showOrHideLogin)(true));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("header", {
    className: (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_10___default().header),
    style: {
      paddingRight: isShowLogin ? (0,_utils_util__WEBPACK_IMPORTED_MODULE_4__.getScrollbarWidth)() + 'px' : '0px'
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      className: (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_10___default().content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
        href: "../",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("img", {
          className: (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_10___default().logo),
          src: "/static/images/logo.png",
          title: "\u4E92\u5E2E",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 31
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("ul", {
        className: (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_10___default().menu),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("li", {
          className: props.page === 0 ? (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_10___default().menuSelect) : '',
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
              className: (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_10___default().menuAHome),
              children: "\u9996\u9875"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 40
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("li", {
          className: props.page === 1 ? (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_10___default().menuSelect) : '',
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
            href: "/helper/list",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
              className: (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_10___default().menuAHelp),
              children: "\u6C42\u52A9"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 51
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("li", {
          className: props.page === 2 ? (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_10___default().menuSelect) : '',
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
            href: "/dynamic",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
              className: (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_10___default().menuADynamic),
              children: "\u52A8\u6001"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 47
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("li", {
          className: props.page === 3 ? (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_10___default().menuSelect) : '',
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
            href: "/circle",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
              className: (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_10___default().menuACircle),
              children: "\u5E2E\u5708"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 46
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_10___default().search),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("input", {
          type: "text",
          placeholder: "\u641C\u7D22 \u6C42\u52A9/\u52A8\u6001/\u5708\u5B50/\u6587\u7AE0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
          className: (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_10___default().searchIcon)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_10___default().userInfo),
        children: isLogin ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("ul", {
          className: (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_10___default().userMenu),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("li", {
            className: (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_10___default().user),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("img", {
              id: "userHead",
              src: user !== null && user !== void 0 && user.avatar ? user === null || user === void 0 ? void 0 : user.avatar : '/static/images/default_user.png',
              onClick: () => {
                userCenterShow();
              },
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 37
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
              className: (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_10___default().userCenter),
              style: {
                visibility: isShowUserCenter ? 'visible' : 'hidden'
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("ul", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("li", {
                  className: (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_10___default().userCenterName),
                  children: user !== null && user !== void 0 && user.nickname ? user === null || user === void 0 ? void 0 : user.nickname : '未登录'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 45
                }, undefined), userCenterList.map((item, index) => {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("li", {
                    className: (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_10___default().userCenterItem),
                    style: {
                      backgroundImage: "url(" + item.image + ")"
                    },
                    onClick: () => {
                      userCenterItemClick(index);
                    },
                    children: item.title
                  }, item.id, false, {
                    fileName: _jsxFileName,
                    lineNumber: 170,
                    columnNumber: 60
                  }, undefined);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 41
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 37
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 33
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("li", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("img", {
              src: "/static/images/header_message.png",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 37
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
              className: (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_10___default().messageHint),
              children: "9"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 37
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 33
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("li", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("img", {
              id: "sendDynamic",
              src: "/static/images/header_send.png",
              onClick: () => {
                sendShow();
              },
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 37
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
              className: (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_10___default().sendDynamic),
              style: {
                visibility: isShowSendDynamic ? 'visible' : 'hidden'
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("ul", {
                children: sendList.map((item, index) => {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("li", {
                    className: (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_10___default().sendDnamicItem),
                    onClick: sendDynamicItemClick,
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("img", {
                      src: item.image,
                      width: "40px",
                      height: "40px",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 194,
                      columnNumber: 57
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
                      children: item.title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 195,
                      columnNumber: 57
                    }, undefined)]
                  }, item.id, true, {
                    fileName: _jsxFileName,
                    lineNumber: 193,
                    columnNumber: 60
                  }, undefined);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 41
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 37
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 33
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 29
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
          className: (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_10___default().downLogin),
          onClick: showLogin,
          children: "\u70B9\u51FB\u767B\u5F55"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 29
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 135,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?5c99"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "./pages/circle/create/index.tsx":
/*!***************************************!*\
  !*** ./pages/circle/create/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layout_Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../layout/Footer */ "./layout/Footer.tsx");
/* harmony import */ var _layout_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../layout/Header */ "./layout/Header.tsx");
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layout/Layout */ "./layout/Layout.tsx");
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/Home.module.scss */ "./styles/Home.module.scss");
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_circle_create_CreateCircleContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/circle/create/CreateCircleContent */ "./components/circle/create/CreateCircleContent.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\pages\\circle\\create\\index.tsx";







const CreateCirclePage = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_layout_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().body),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_layout_Header__WEBPACK_IMPORTED_MODULE_1__.default, {
      page: 3
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_circle_create_CreateCircleContent__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_layout_Footer__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateCirclePage);

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

/***/ "./components/circle/create/create_circle_content.module.scss":
/*!********************************************************************!*\
  !*** ./components/circle/create/create_circle_content.module.scss ***!
  \********************************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"contentBody": "create_circle_content_contentBody__2YzbG",
	"titleContent": "create_circle_content_titleContent__2w8JK",
	"title": "create_circle_content_title__2_DLi",
	"submitView": "create_circle_content_submitView__2Zagi",
	"circleContent": "create_circle_content_circleContent__1INrb",
	"circleHead": "create_circle_content_circleHead__1P8in",
	"name": "create_circle_content_name__GgwHA",
	"upHeader": "create_circle_content_upHeader__1FP-R",
	"circleName": "create_circle_content_circleName__10uaQ",
	"nameInput": "create_circle_content_nameInput__1QQVY",
	"circleMember": "create_circle_content_circleMember__2UGYR",
	"memberAdd": "create_circle_content_memberAdd__5bX9S",
	"circleBg": "create_circle_content_circleBg__3ZA-f",
	"bg": "create_circle_content_bg__1Wgkr",
	"maskBg": "create_circle_content_maskBg__3w97w",
	"maskBg1": "create_circle_content_maskBg1__YmsQR",
	"maskBg2": "create_circle_content_maskBg2__8o86I",
	"reloadBg": "create_circle_content_reloadBg__6D24d",
	"circleDesc": "create_circle_content_circleDesc__2Pp3E",
	"descInput": "create_circle_content_descInput__3j1dp",
	"input": "create_circle_content_input__38FIg",
	"descNumber": "create_circle_content_descNumber__3mYdc"
};


/***/ }),

/***/ "./styles/Home.module.scss":
/*!*********************************!*\
  !*** ./styles/Home.module.scss ***!
  \*********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"body": "Home_body__2ke2g"
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

/***/ "./styles/footer.module.scss":
/*!***********************************!*\
  !*** ./styles/footer.module.scss ***!
  \***********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "footer_footer__1cByA",
	"content": "footer_content__2xVci",
	"down": "footer_down__1TfpK",
	"downOther": "footer_downOther__23EPu",
	"copy": "footer_copy__2sl5u",
	"copyLink": "footer_copyLink__18a1i"
};


/***/ }),

/***/ "./styles/header.module.scss":
/*!***********************************!*\
  !*** ./styles/header.module.scss ***!
  \***********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"header": "header_header__2q1wF",
	"content": "header_content__m34qa",
	"logo": "header_logo__ZHkcG",
	"menu": "header_menu__3Kr7B",
	"menuAHome": "header_menuAHome__1J5fi",
	"menuAHelp": "header_menuAHelp__1nq7S",
	"menuADynamic": "header_menuADynamic__2mixq",
	"menuACircle": "header_menuACircle__39RvX",
	"menuSelect": "header_menuSelect__1CJaa",
	"search": "header_search__1AiSU",
	"searchIcon": "header_searchIcon__1NlPb",
	"userInfo": "header_userInfo__2-3Wj",
	"userMenu": "header_userMenu__3Poy3",
	"userCenter": "header_userCenter__1ktQ0",
	"userCenterName": "header_userCenterName__2x-O9",
	"userCenterItem": "header_userCenterItem__RfUpw",
	"sendDynamic": "header_sendDynamic__1q8kA",
	"sendDnamicItem": "header_sendDnamicItem__19qDJ",
	"messageHint": "header_messageHint__19px5",
	"downLogin": "header_downLogin__21vH4"
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

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


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

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

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

/***/ }),

/***/ "?5c99":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/circle/create/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0k7QUFBQSxtQ0FBSTtBQUFHLGtCQUFJLEVBQUMsRUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEosZUFJSTtBQUFBLG1DQUFJO0FBQUcsa0JBQUksRUFBQyxFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFRSTtBQUFBLGtDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUk7QUFBQSxtQ0FBSTtBQUFHLGtCQUFJLEVBQUMsRUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkosZUFHSTtBQUFBLG1DQUFJO0FBQUcsa0JBQUksRUFBQyxFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFISixlQUlJO0FBQUEsbUNBQUk7QUFBRyxrQkFBSSxFQUFDLEVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpKLGVBS0k7QUFBQSxtQ0FBSTtBQUFHLGtCQUFJLEVBQUMsRUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJKLGVBZ0JJO0FBQUEsa0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFSTtBQUFBLG1DQUFJO0FBQUcsa0JBQUksRUFBQyxFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSixlQUdJO0FBQUEsbUNBQUk7QUFBRyxrQkFBSSxFQUFDLEVBQVI7QUFBQTtBQUFBO0FB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QUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2h1YmFuZy8uL2NvbXBvbmVudHMvY2lyY2xlL2NyZWF0ZS9DcmVhdGVDaXJjbGVDb250ZW50LnRzeCIsIndlYnBhY2s6Ly9odWJhbmcvLi9jb21wb25lbnRzL3dpZGdldC9BY3Rpb25CdXR0b24udHN4Iiwid2VicGFjazovL2h1YmFuZy8uL2NvbXBvbmVudHMvd2lkZ2V0L0lucHV0V2lkZ2V0LnRzeCIsIndlYnBhY2s6Ly9odWJhbmcvLi9sYXlvdXQvRm9vdGVyLnRzeCIsIndlYnBhY2s6Ly9odWJhbmcvLi9sYXlvdXQvSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly9odWJhbmcvLi9sYXlvdXQvTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly9odWJhbmcvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovL2h1YmFuZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly9odWJhbmcvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyLmpzIiwid2VicGFjazovL2h1YmFuZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9odWJhbmcvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL2h1YmFuZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL2h1YmFuZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovL2h1YmFuZy8uL3BhZ2VzL2NpcmNsZS9jcmVhdGUvaW5kZXgudHN4Iiwid2VicGFjazovL2h1YmFuZy8uL3N0b3JlL3NlcnZpY2VzL2NpcmNsZS50cyIsIndlYnBhY2s6Ly9odWJhbmcvLi9zdG9yZS9zZXJ2aWNlcy9jb21tb24udHMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vc3RvcmUvc2VydmljZXMvaGVscGVyLnRzIiwid2VicGFjazovL2h1YmFuZy8uL3N0b3JlL3NlcnZpY2VzL21pbmUudHMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vc3RvcmUvc2VydmljZXMvdXNlci50cyIsIndlYnBhY2s6Ly9odWJhbmcvLi9zdG9yZS9zbGljZXMvY2lyY2xlU2xpY2UudHMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vc3RvcmUvc2xpY2VzL2NvbW1vblNsaWNlLnRzIiwid2VicGFjazovL2h1YmFuZy8uL3N0b3JlL3NsaWNlcy9ob21lU2xpY2UudHMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vc3RvcmUvc2xpY2VzL2xvYWRpbmdTbGljZS50cyIsIndlYnBhY2s6Ly9odWJhbmcvLi9zdG9yZS9zbGljZXMvbG9naW5TbGljZS50cyIsIndlYnBhY2s6Ly9odWJhbmcvLi9zdG9yZS9zbGljZXMvbWluZVNsaWNlLnRzIiwid2VicGFjazovL2h1YmFuZy8uL3N0b3JlL3NsaWNlcy91c2VyU2xpY2UudHMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vc3RvcmUvc3RvcmUudHMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vdXRpbHMvYWVzLnRzIiwid2VicGFjazovL2h1YmFuZy8uL3V0aWxzL2FwaS50cyIsIndlYnBhY2s6Ly9odWJhbmcvLi91dGlscy9zdGF0aWNEYXRhLnRzIiwid2VicGFjazovL2h1YmFuZy8uL3V0aWxzL3Rva2VuX3V0aWwudHMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vdXRpbHMvdXJsLnRzIiwid2VicGFjazovL2h1YmFuZy8uL3V0aWxzL3V0aWwudHMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vY29tcG9uZW50cy9jaXJjbGUvY3JlYXRlL2NyZWF0ZV9jaXJjbGVfY29udGVudC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9odWJhbmcvLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9odWJhbmcvLi9zdHlsZXMvY29tcG9uZW50cy93aWRnZXQvYWN0aW9uX2J1dHRvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9odWJhbmcvLi9zdHlsZXMvY29tcG9uZW50cy93aWRnZXQvaW5wdXRfd2lkZ2V0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2h1YmFuZy8uL3N0eWxlcy9mb290ZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vc3R5bGVzL2hlYWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9odWJhbmcvLi9zdHlsZXMvbGF5b3V0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2h1YmFuZy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly9odWJhbmcvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcImNyeXB0by1qc1wiIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIiIsIndlYnBhY2s6Ly9odWJhbmcvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9odWJhbmcvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qc1wiIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly9odWJhbmcvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9odWJhbmcvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcInFzXCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9odWJhbmcvZXh0ZXJuYWwgXCJyZWFjdC1jb29raWVzXCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9odWJhbmcvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2lnbm9yZWR8RDpcXFZTQ29kZVByb2plY3RcXGh1YmFuZ1xcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxzaGFyZWRcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBY3Rpb25CdXR0b24gZnJvbSBcIi4uLy4uL3dpZGdldC9BY3Rpb25CdXR0b25cIjtcclxuaW1wb3J0IElucHV0V2lkZ2V0IGZyb20gXCIuLi8uLi93aWRnZXQvSW5wdXRXaWRnZXRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NyZWF0ZV9jaXJjbGVfY29udGVudC5tb2R1bGUuc2Nzcyc7XHJcblxyXG5cclxuY29uc3QgQ3JlYXRlQ2lyY2xlQ29udGVudDogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2Rlc2MsIHNldERlc2NdID0gdXNlU3RhdGUoXCLlnIjkuLvlvojmh5Lku4DkuYjpg73msqHnlZnkuIt+XCIpO1xyXG4gICAgY29uc3QgW2NpcmNsZUJnLCBzZXRDaXJjbGVCZ10gPSB1c2VTdGF0ZShcImh0dHA6Ly93eXlodWJhbmcub3NzLWNuLWNoZW5nZHUuYWxpeXVuY3MuY29tL2RlZmF1bHQvZGVmYXVsdF9jaXJjbGVfYmcucG5nXCIpO1xyXG5cclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50Qm9keX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZUNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+5Yib5bu65ZyI5a2QPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWJtaXRWaWV3fT7mj5DkuqQ8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNpcmNsZUNvbnRlbnR9PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaXJjbGVIZWFkfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PuWktCZlbXNwOyZlbXNwO+WDj++8mjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMudXBIZWFkZXJ9IHNyYz1cIi9zdGF0aWMvaW1hZ2VzL3VwX2hlYWRlci5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaXJjbGVOYW1lfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PuW4ruWciOWQjeensO+8mjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmFtZUlucHV0fT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRXaWRnZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGludFRleHQ9XCLotbfkuKrlkI3lrZflkKd+XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRUeXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MjV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2lyY2xlTWVtYmVyfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9Pua3u+WKoOaIkOWRmO+8mjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVtYmVyc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5tZW1iZXJBZGR9IHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb19ncm91cF9hZGQucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2lyY2xlQmd9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+5ZyI5a2Q6IOM5pmv77yaPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iZ30gc3R5bGU9e3sgb3V0bGluZTogY2lyY2xlQmcgPyBcIm5vbmVcIiA6IFwiMXB4IGRhc2hlZCAjY2NjXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaXJjbGVCZyAmJiA8aW1nIHNyYz17Y2lyY2xlQmd9IGFsdD1cIlwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1hc2tCZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFza0JnMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1hc2tCZzJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjdGlvbkJ1dHRvbiB2YWx1ZT1cIuS4iuS8oOiDjOaZr1wiIGNsYXNzTmFtZT17c3R5bGVzLnJlbG9hZEJnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaXJjbGVEZXNjfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PuW4ruWciOeugOS7i++8mjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY0lucHV0fT5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IHZhbHVlPXtkZXNjfSBtYXhMZW5ndGg9ezI1NX0gcGxhY2Vob2xkZXI9XCLor7Tngrnku4DkuYjlkKd+XCIgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldERlc2MoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjTnVtYmVyfT57ZGVzYy5sZW5ndGh9LzI1NTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVDaXJjbGVDb250ZW50OyIsImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvY29tcG9uZW50cy93aWRnZXQvYWN0aW9uX2J1dHRvbi5tb2R1bGUuc2Nzcyc7XHJcblxyXG5pbnRlcmZhY2UgQnV0dG9uUHJvcCB7XHJcbiAgICB2YWx1ZT86IHN0cmluZyxcclxuICAgIG9uQ2xpY2s/OiAoKSA9PiB2b2lkXHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmjInpkq4gIGNsYXNzTmFtZeiuvue9ruS6huiDjOaZr+iJsuWQju+8jDpob3ZlcuWSjDphY3RpdmXlvpfoh6rlrprkuYlcclxuICovXHJcbmNvbnN0IEFjdGlvbkJ1dHRvbjogTmV4dFBhZ2U8QnV0dG9uUHJvcD4gPSAoXHJcbiAgICB7XHJcbiAgICAgICAgb25DbGljayxcclxuICAgICAgICB2YWx1ZSA9IFwi56GuIOWumlwiLFxyXG4gICAgICAgIGNsYXNzTmFtZSA9ICcnLFxyXG4gICAgfVxyXG4pID0+IHtcclxuXHJcbiAgICByZXR1cm4gPGJ1dHRvbiBjbGFzc05hbWU9e1tzdHlsZXMuYnV0dG9uU3R5bGUsIGNsYXNzTmFtZV0uam9pbignICcpfVxyXG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICA+e3ZhbHVlfTwvYnV0dG9uPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25CdXR0b247IiwiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2NvbXBvbmVudHMvd2lkZ2V0L2lucHV0X3dpZGdldC5tb2R1bGUuc2Nzcyc7XHJcblxyXG5pbnRlcmZhY2UgSW5wdXREYXRlIHtcclxuICAgIGhpbnRUZXh0Pzogc3RyaW5nLFxyXG4gICAgaW5wdXRUeXBlPzogc3RyaW5nLFxyXG4gICAgd2lkdGg/OiBzdHJpbmcsXHJcbiAgICBoZWlnaHQ/OiBzdHJpbmcsXHJcbiAgICBmb250U2l6ZT86IHN0cmluZyxcclxuICAgIHRleHRDb2xvcj86IHN0cmluZyxcclxuICAgIG1heExlbmd0aD86IG51bWJlcixcclxuICAgIG9uVGV4dENoYW5nZT86IChrZXk6IHN0cmluZykgPT4gdm9pZCxcclxuICAgIG9uRm9jdXM/OiAoKSA9PiB2b2lkLFxyXG59XHJcblxyXG5jb25zdCBJbnB1dFdpZGdldDogTmV4dFBhZ2U8SW5wdXREYXRlPiA9IChcclxuICAgIHtcclxuICAgICAgICBoaW50VGV4dCA9IFwi6K+36L6T5YWlXCIsXHJcbiAgICAgICAgaW5wdXRUeXBlID0gJ3RleHQnLFxyXG4gICAgICAgIHdpZHRoID0gJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodCA9ICcxMDAlJyxcclxuICAgICAgICBmb250U2l6ZSA9ICcxM3B4JyxcclxuICAgICAgICB0ZXh0Q29sb3IgPSAnIzM2Mzk1MScsXHJcbiAgICAgICAgbWF4TGVuZ3RoLFxyXG4gICAgICAgIG9uVGV4dENoYW5nZSxcclxuICAgICAgICBvbkZvY3VzXHJcbiAgICB9XHJcbikgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwd2RUeXBlLCBzZXRQd2RUeXBlXSA9IHVzZVN0YXRlKCdwYXNzd29yZCcpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0VGV4dCh2YWx1ZSk7XHJcbiAgICAgICAgaWYgKG9uVGV4dENoYW5nZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIG9uVGV4dENoYW5nZSh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsZWFyVGV4dCA9ICgpID0+IHtcclxuICAgICAgICBzZXRUZXh0KCcnKTtcclxuICAgICAgICBpZiAob25UZXh0Q2hhbmdlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgb25UZXh0Q2hhbmdlKCcnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3dpdGNoUHdkU2hvd09ySGlkZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAocHdkVHlwZSA9PT0gXCJwYXNzd29yZFwiKSB7XHJcbiAgICAgICAgICAgIHNldFB3ZFR5cGUoXCJ0ZXh0XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFB3ZFR5cGUoXCJwYXNzd29yZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRDb250ZW50fSBzdHlsZT17eyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXtpbnB1dFR5cGUgPT09IFwicGFzc3dvcmRcIiA/IHB3ZFR5cGUgOiBpbnB1dFR5cGV9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17aGludFRleHR9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogZm9udFNpemUsIGNvbG9yOiB0ZXh0Q29sb3IgfX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0ZXh0fVxyXG4gICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXttYXhMZW5ndGh9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgb25Gb2N1cz17b25Gb2N1c30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNsZWFySWNvbn1cclxuICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvX2NsZWFyLnBuZ1wiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiMjBweFwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjIwcHhcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyB2aXNpYmlsaXR5OiB0ZXh0ID09PSAnJyA/ICdoaWRkZW4nIDogJ3Zpc2libGUnIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2NsZWFyVGV4dH1cclxuICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHdkU2hvd31cclxuICAgICAgICAgICAgc3JjPXtwd2RUeXBlID09PSBcInBhc3N3b3JkXCIgPyBcIi9zdGF0aWMvaW1hZ2VzL2ljb19wd2RfaGlkZS5wbmdcIiA6IFwiL3N0YXRpYy9pbWFnZXMvaWNvX3B3ZF9zaG93LnBuZ1wifVxyXG4gICAgICAgICAgICB3aWR0aD1cIjIwcHhcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIxNXB4XCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogaW5wdXRUeXBlID09PSAncGFzc3dvcmQnID8gXCJibG9ja1wiIDogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgb25DbGljaz17c3dpdGNoUHdkU2hvd09ySGlkZX1cclxuICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgIDwvZGl2PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXRXaWRnZXQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvZm9vdGVyLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2Zvb3Rlci5wbmdcIiB3aWR0aD1cIjEwMCVcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7lhbPkuo7miJHku6w8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIlwiPue9keermeS7i+e7jTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIlwiPuWFjei0o+WjsOaYjjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIlwiPuWPi+aDhemTvuaOpTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPuS6p+WTgeacjeWKoTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiXCI+5biu5ZyIPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiXCI+5a6e5ZCN6K6k6K+BPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiXCI+5rGC6IGM5oub6IGYPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiXCI+5pud5YWJ5Y+wPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+5biu5Yqp5Lit5b+DPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJcIj7luLjop4Hpl67popg8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJcIj7mnI3liqHku4vnu408L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJcIj7ogZTns7vmiJHku6w8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRvd259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRvd25PdGhlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2FwcF9kb3duLnBuZ1wiIHdpZHRoPVwiODBweFwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBUFDkuIvovb1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZG93bk90aGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvYXBwX2Rvd24ucG5nXCIgd2lkdGg9XCI4MHB4XCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOaJi+acuue9kemhteeJiFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kb3duT3RoZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9hcHBfZG93bi5wbmdcIiB3aWR0aD1cIjgwcHhcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5b6u5L+h5bCP56iL5bqPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jb3B5fT4gwqkgQ29weXJpZ2h0IDIwMjEuIOWQtOa0i+avhVxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmNvcHlMaW5rfSBocmVmPVwiaHR0cDovL2JlaWFuLm1paXQuZ292LmNuL1wiIHRhcmdldD1cImJsYW5rXCIgcmVsPVwibm9mb2xsb3dcIj7phIJJQ1DlpIcyMDIxMDAyNDE45Y+3PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvaGVhZGVyLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHdyYXBwZXIsIHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vc3RvcmUvc3RvcmUnO1xyXG5pbXBvcnQgeyBzaG93T3JIaWRlTG9naW4gfSBmcm9tICcuLi9zdG9yZS9zbGljZXMvbG9naW5TbGljZSc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldFNjcm9sbGJhcldpZHRoIH0gZnJvbSAnLi4vdXRpbHMvdXRpbCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgc3dpdGNoVXNlclBhZ2VTZWxlY3RJbmRleCB9IGZyb20gJy4uL3N0b3JlL3NsaWNlcy9taW5lU2xpY2UnO1xyXG5pbXBvcnQgeyBvdXRMb2dpbiB9IGZyb20gJy4uL3N0b3JlL3NsaWNlcy91c2VyU2xpY2UnO1xyXG5cclxuaW50ZXJmYWNlIElIZWFkZXIge1xyXG4gICAgcGFnZTogbnVtYmVyLFxyXG4gICAgdXNlckNlbnRlckNoYW5nZT86IChpbmRleDogbnVtYmVyKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IEhlYWRlcjogTmV4dFBhZ2U8SUhlYWRlcj4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IGlzU2hvd0xvZ2luID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5sb2dpbi5pc1Nob3dMb2dpbik7XHJcbiAgICBjb25zdCB7IGlzTG9naW4sIHVzZXIgfSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCB1c2VyQ2VudGVyTGlzdCA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgICBpbWFnZTogXCIvc3RhdGljL2ltYWdlcy9pY29fbXlfY2VudGVyLnBuZ1wiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLmiJHnmoTkuLvpobVcIixcclxuICAgICAgICAgICAgbGluazogXCIvdXNlci9cIiArIHVzZXI/LmlkXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICBpbWFnZTogXCIvc3RhdGljL2ltYWdlcy9pY29fbXlfY2lyY2xlLnBuZ1wiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLmiJHnmoTluK7lnIhcIixcclxuICAgICAgICAgICAgbGluazogXCIvdXNlci9cIiArIHVzZXI/LmlkXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICBpbWFnZTogXCIvc3RhdGljL2ltYWdlcy9pY29fY29sbGVjdC5wbmdcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwi5oiR55qE5pS26JePXCIsXHJcbiAgICAgICAgICAgIGxpbms6IFwiL3VzZXIvXCIgKyB1c2VyPy5pZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgICAgaW1hZ2U6IFwiL3N0YXRpYy9pbWFnZXMvaWNvX3NldHRpbmcucG5nXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIuezu+e7n+iuvue9rlwiLFxyXG4gICAgICAgICAgICBsaW5rOiBcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiA0LFxyXG4gICAgICAgICAgICBpbWFnZTogXCIvc3RhdGljL2ltYWdlcy9pY29fb3V0X2xvZ2luLnBuZ1wiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLpgIDlh7rnmbvlvZVcIixcclxuICAgICAgICAgICAgbGluazogXCJcIlxyXG4gICAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgY29uc3Qgc2VuZExpc3QgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMCxcclxuICAgICAgICAgICAgaW1hZ2U6IFwiL3N0YXRpYy9pbWFnZXMvaWNvX3JlbGVhc2VfaGVscC5wbmdcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwi5Y+R5rGC5YqpXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb19yZWxlYXNlX2R5bmFtaWMucG5nXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIuWPkeWKqOaAgVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICBpbWFnZTogXCIvc3RhdGljL2ltYWdlcy9pY29fcmVsZWFzZV93ei5wbmdcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwi5Y+R5paH56ugXCJcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IFtpc1Nob3dVc2VyQ2VudGVyLCBzZXRTaG93VXNlckNlbnRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNTaG93U2VuZER5bmFtaWMsIHNldFNob3dTZW5kRHluYW1pY10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgLy8g5riy5p+T5a6M5oiQ5Zue6LCDXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZURpYWxvZyk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBoaWRlRGlhbG9nID0gKGV2OiBhbnkpID0+IHtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZXYudGFyZ2V0IHx8IGV2LnNyY0VsZW1lbnQ7XHJcbiAgICAgICAgbGV0IGlkID0gdGFyZ2V0LmlkO1xyXG4gICAgICAgIGlmIChpZCAhPT0gXCJ1c2VySGVhZFwiKSB7XHJcbiAgICAgICAgICAgIHNldFNob3dVc2VyQ2VudGVyKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlkICE9PSBcInNlbmREeW5hbWljXCIpIHtcclxuICAgICAgICAgICAgc2V0U2hvd1NlbmREeW5hbWljKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXNlckNlbnRlclNob3coKSB7XHJcbiAgICAgICAgc2V0U2hvd1VzZXJDZW50ZXIoIWlzU2hvd1VzZXJDZW50ZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBzZW5kU2hvdygpIHtcclxuICAgICAgICBzZXRTaG93U2VuZER5bmFtaWMoIWlzU2hvd1NlbmREeW5hbWljKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVzZXJDZW50ZXJJdGVtQ2xpY2sgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGlmIChpbmRleCA8IDMpIHtcclxuICAgICAgICAgICAgaWYgKHByb3BzLnVzZXJDZW50ZXJDaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLnVzZXJDZW50ZXJDaGFuZ2UoaW5kZXggPT0gMCA/IDAgOiBpbmRleCArIDEpXHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChzd2l0Y2hVc2VyUGFnZVNlbGVjdEluZGV4KHsga2V5OiB1c2VyLmlkLCBpbmRleDogaW5kZXggPT0gMCA/IDAgOiBpbmRleCArIDEgfSkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IHVzZXJDZW50ZXJMaXN0W2luZGV4XS5saW5rXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PSAzKSB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiB1c2VyQ2VudGVyTGlzdFtpbmRleF0ubGlua1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT0gNCkge1xyXG4gICAgICAgICAgICAvLyDpgIDlh7rnmbvlvZVcclxuICAgICAgICAgICAgZGlzcGF0Y2gob3V0TG9naW4oKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VuZER5bmFtaWNJdGVtQ2xpY2sgPSAoZXY6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi54K55Ye75LqGXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dMb2dpbiA9ICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChzaG93T3JIaWRlTG9naW4odHJ1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9IHN0eWxlPXt7IHBhZGRpbmdSaWdodDogaXNTaG93TG9naW4gPyAoZ2V0U2Nyb2xsYmFyV2lkdGgoKSArICdweCcpIDogJzBweCcgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiLi4vXCI+PGltZyBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSBzcmM9XCIvc3RhdGljL2ltYWdlcy9sb2dvLnBuZ1wiIHRpdGxlPVwi5LqS5biuXCIgYWx0PVwiXCIgLz48L2E+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cHJvcHMucGFnZSA9PT0gMCA/IHN0eWxlcy5tZW51U2VsZWN0IDogJyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhIGNsYXNzTmFtZT17c3R5bGVzLm1lbnVBSG9tZX0+6aaW6aG1PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3Byb3BzLnBhZ2UgPT09IDEgPyBzdHlsZXMubWVudVNlbGVjdCA6ICcnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9oZWxwZXIvbGlzdFwiPjxhIGNsYXNzTmFtZT17c3R5bGVzLm1lbnVBSGVscH0+5rGC5YqpPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3Byb3BzLnBhZ2UgPT09IDIgPyBzdHlsZXMubWVudVNlbGVjdCA6ICcnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9keW5hbWljXCI+PGEgY2xhc3NOYW1lPXtzdHlsZXMubWVudUFEeW5hbWljfT7liqjmgIE8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cHJvcHMucGFnZSA9PT0gMyA/IHN0eWxlcy5tZW51U2VsZWN0IDogJyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NpcmNsZVwiPjxhIGNsYXNzTmFtZT17c3R5bGVzLm1lbnVBQ2lyY2xlfT7luK7lnIg8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNofT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuaQnOe0oiDmsYLliqkv5Yqo5oCBL+WciOWtkC/mlofnq6BcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEljb259Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlckluZm99PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNMb2dpbiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy51c2VyTWVudX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwidXNlckhlYWRcIiBzcmM9e3VzZXI/LmF2YXRhciA/IHVzZXI/LmF2YXRhciA6ICcvc3RhdGljL2ltYWdlcy9kZWZhdWx0X3VzZXIucG5nJ30gb25DbGljaz17KCkgPT4geyB1c2VyQ2VudGVyU2hvdygpIH19IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlckNlbnRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHZpc2liaWxpdHk6IGlzU2hvd1VzZXJDZW50ZXIgPyAndmlzaWJsZScgOiAnaGlkZGVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMudXNlckNlbnRlck5hbWV9Pnt1c2VyPy5uaWNrbmFtZSA/IHVzZXI/Lm5pY2tuYW1lIDogJ+acqueZu+W9lSd9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJDZW50ZXJMaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudXNlckNlbnRlckl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGl0ZW0uaW1hZ2UgKyBcIilcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgdXNlckNlbnRlckl0ZW1DbGljayhpbmRleCkgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2hlYWRlcl9tZXNzYWdlLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2VIaW50fT45PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwic2VuZER5bmFtaWNcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9oZWFkZXJfc2VuZC5wbmdcIiBvbkNsaWNrPXsoKSA9PiB7IHNlbmRTaG93KCkgfX0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZW5kRHluYW1pY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHZpc2liaWxpdHk6IGlzU2hvd1NlbmREeW5hbWljID8gJ3Zpc2libGUnIDogJ2hpZGRlbicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuc2VuZERuYW1pY0l0ZW19IG9uQ2xpY2s9e3NlbmREeW5hbWljSXRlbUNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZX0gd2lkdGg9XCI0MHB4XCIgaGVpZ2h0PVwiNDBweFwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0udGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kb3duTG9naW59IG9uQ2xpY2s9e3Nob3dMb2dpbn0+54K55Ye755m75b2VPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsIlxyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBSZWFjdE5vZGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvbGF5b3V0Lm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IExheW91dDogTmV4dFBhZ2U8e1xyXG4gICAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcclxuICAgIGtleXdvcmRzPzogc3RyaW5nO1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZSB8IFJlYWN0Tm9kZVtdO1xyXG59PiA9ICh7IHRpdGxlLCBkZXNjcmlwdGlvbiwga2V5d29yZHMsIGNsYXNzTmFtZSwgY2hpbGRyZW4gfSkgPT4ge1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdG9Ub3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9Ub3AnKTtcclxuICAgICAgICAgICAgaWYgKHRvVG9wICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9Ub3Auc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0b1RvcC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA8IDEzMDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0b1RvcC5zdHlsZS5yaWdodCA9IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLSAxMzAwICsgd2luZG93LnBhZ2VYT2Zmc2V0KSArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9Ub3Auc3R5bGUucmlnaHQgPSBcImNhbGMoKDEwMCUgLSAxMzAwcHgpIC8gMiAtIDUwcHggKyBcIiArIHdpbmRvdy5wYWdlWE9mZnNldCArIFwiKVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPnt0aXRsZSB8fCAn5LqS5biuJ308L3RpdGxlPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PXtrZXl3b3JkcyB8fCAnJ30gLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb24gfHwgJyd9IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbiB8fCAnJ30gLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2NoaWxkcmVufTwvbWFpbj5cclxuXHJcbiAgICAgICAgPGltZyBpZD1cInRvVG9wXCIgY2xhc3NOYW1lPXtzdHlsZXMudG9Ub3B9IHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb19nb190b3AucG5nXCIgd2lkdGg9XCI0MHB4XCIgdGl0bGU9XCLov5Tlm57pobbpg6hcIiBhbHQ9XCJcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH19IC8+XHJcbiAgICA8Lz5cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKTtcbnZhciBfcm91dGVyMSA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHByZWZldGNoZWQgPSB7XG59O1xuZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm47XG4gICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgY3VyTG9jYWxlID0gb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlO1xufVxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgeyB0YXJnZXQgIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIHJldHVybiB0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnIHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDI7XG59XG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSkge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUgIH0gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwgJiYgYXMuaW5kZXhPZignIycpID49IDApIHtcbiAgICAgICAgc2Nyb2xsID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgICBzaGFsbG93LFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHNjcm9sbFxuICAgIH0pO1xufVxuZnVuY3Rpb24gTGluayhwcm9wcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBocmVmOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHMgPSBPYmplY3Qua2V5cyhyZXF1aXJlZFByb3BzR3VhcmQpO1xuICAgICAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldID09IG51bGwgfHwgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBhczogdHJ1ZSxcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICBzY3JvbGw6IHRydWUsXG4gICAgICAgICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICAgICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgICAgICAgIGxvY2FsZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzID0gT2JqZWN0LmtleXMob3B0aW9uYWxQcm9wc0d1YXJkKTtcbiAgICAgICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV07XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3JlcGxhY2UnIHx8IGtleSA9PT0gJ3Njcm9sbCcgfHwga2V5ID09PSAnc2hhbGxvdycgfHwga2V5ID09PSAncGFzc0hyZWYnIHx8IGtleSA9PT0gJ3ByZWZldGNoJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgICAgIGNvbnN0IGhhc1dhcm5lZCA9IF9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7XG4gICAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlO1xuICAgIGNvbnN0IHJvdXRlciA9ICgwLCBfcm91dGVyMSkudXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBocmVmICwgYXMgIH0gPSBfcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57XG4gICAgICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuaHJlZiwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBhczogcHJvcHMuYXMgPyAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5hcykgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICB9O1xuICAgIH0sIFtcbiAgICAgICAgcm91dGVyLFxuICAgICAgICBwcm9wcy5ocmVmLFxuICAgICAgICBwcm9wcy5hc1xuICAgIF0pO1xuICAgIGxldCB7IGNoaWxkcmVuICwgcmVwbGFjZSAsIHNoYWxsb3cgLCBzY3JvbGwgLCBsb2NhbGUgIH0gPSBwcm9wcztcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgICBjaGlsZHJlbiA9IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIiwgbnVsbCwgY2hpbGRyZW4pO1xuICAgIH1cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBsZXQgY2hpbGQ7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIiBcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkUmVmID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWY7XG4gICAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9ICgwLCBfdXNlSW50ZXJzZWN0aW9uKS51c2VJbnRlcnNlY3Rpb24oe1xuICAgICAgICByb290TWFyZ2luOiAnMjAwcHgnXG4gICAgfSk7XG4gICAgY29uc3Qgc2V0UmVmID0gX3JlYWN0LmRlZmF1bHQudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpO1xuICAgICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGNoaWxkUmVmLFxuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWZcbiAgICBdKTtcbiAgICBfcmVhY3QuZGVmYXVsdC51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiAoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKTtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXTtcbiAgICAgICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGFzLFxuICAgICAgICBocmVmLFxuICAgICAgICBpc1Zpc2libGUsXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgcCxcbiAgICAgICAgcm91dGVyXG4gICAgXSk7XG4gICAgY29uc3QgY2hpbGRQcm9wcyA9IHtcbiAgICAgICAgcmVmOiBzZXRSZWYsXG4gICAgICAgIG9uQ2xpY2s6IChlKT0+e1xuICAgICAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlKT0+e1xuICAgICAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgcHJpb3JpdHk6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAocHJvcHMucGFzc0hyZWYgfHwgY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkge1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgICAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgICAgICBjb25zdCBsb2NhbGVEb21haW4gPSByb3V0ZXIgJiYgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmICgwLCBfcm91dGVyKS5nZXREb21haW5Mb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLCByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXMpO1xuICAgICAgICBjaGlsZFByb3BzLmhyZWYgPSBsb2NhbGVEb21haW4gfHwgKDAsIF9yb3V0ZXIpLmFkZEJhc2VQYXRoKCgwLCBfcm91dGVyKS5hZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSk7XG4gICAgfVxuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcykpO1xufVxudmFyIF9kZWZhdWx0ID0gTGluaztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHZvaWQgMDtcbmZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aDtcbn1cbmNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIID8gKHBhdGgpPT57XG4gICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTtcbiAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJztcbiAgICB9XG59IDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IGV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gdm9pZCAwO1xuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihjYikge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCAxKTtcbn07XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrO1xuY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihpZCkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufTtcbmV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gY2FuY2VsSWRsZUNhbGxiYWNrO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm1hcmtBc3NldEVycm9yID0gbWFya0Fzc2V0RXJyb3I7XG5leHBvcnRzLmlzQXNzZXRFcnJvciA9IGlzQXNzZXRFcnJvcjtcbmV4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCA9IGdldENsaWVudEJ1aWxkTWFuaWZlc3Q7XG5leHBvcnRzLmNyZWF0ZVJvdXRlTG9hZGVyID0gY3JlYXRlUm91dGVMb2FkZXI7XG52YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMDtcbmZ1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LCBtYXAsIGdlbmVyYXRvcikge1xuICAgIGxldCBlbnRyeSA9IG1hcC5nZXQoa2V5KTtcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gZW50cnkuZnV0dXJlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO1xuICAgIH1cbiAgICBsZXQgcmVzb2x2ZXI7XG4gICAgY29uc3QgcHJvbSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICByZXNvbHZlciA9IHJlc29sdmU7XG4gICAgfSk7XG4gICAgbWFwLnNldChrZXksIGVudHJ5ID0ge1xuICAgICAgICByZXNvbHZlOiByZXNvbHZlcixcbiAgICAgICAgZnV0dXJlOiBwcm9tXG4gICAgfSk7XG4gICAgcmV0dXJuIGdlbmVyYXRvciA/IGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKT0+KHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpXG4gICAgKSA6IHByb207XG59XG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgcmV0dXJuKC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISFkb2N1bWVudC5kb2N1bWVudE1vZGUpIHx8IGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuY29uc3QgY2FuUHJlZmV0Y2ggPSBoYXNQcmVmZXRjaCgpO1xuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZiwgYXMsIGxpbmspIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKT0+e1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcygpO1xuICAgICAgICB9XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgICAgIGlmIChhcykgbGluay5hcyA9IGFzO1xuICAgICAgICBsaW5rLnJlbCA9IGBwcmVmZXRjaGA7XG4gICAgICAgIGxpbmsuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICBsaW5rLm9ubG9hZCA9IHJlcztcbiAgICAgICAgbGluay5vbmVycm9yID0gcmVqO1xuICAgICAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgICAgICBsaW5rLmhyZWYgPSBocmVmO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH0pO1xufVxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpO1xuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyO1xufVxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KHNyYywgc2NyaXB0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgICAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgICAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZTtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSAoKT0+cmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG4gICAgICAgIDtcbiAgICAgICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgICAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgICAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICAgICAgc2NyaXB0LnNyYyA9IHNyYztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0pO1xufVxuLy8gV2Ugd2FpdCBmb3IgcGFnZXMgdG8gYmUgYnVpbHQgaW4gZGV2IGJlZm9yZSB3ZSBzdGFydCB0aGUgcm91dGUgdHJhbnNpdGlvblxuLy8gdGltZW91dCB0byBwcmV2ZW50IGFuIHVuLW5lY2Vzc2FyeSBoYXJkIG5hdmlnYXRpb24gaW4gZGV2ZWxvcG1lbnQuXG5sZXQgZGV2QnVpbGRQcm9taXNlO1xuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCwgbXMsIGVycikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIHAudGhlbigocik9PntcbiAgICAgICAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKHIpO1xuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgICAvLyBXZSB3cmFwIHRoZXNlIGNoZWNrcyBzZXBhcmF0ZWx5IGZvciBiZXR0ZXIgZGVhZC1jb2RlIGVsaW1pbmF0aW9uIGluXG4gICAgICAgIC8vIHByb2R1Y3Rpb24gYnVuZGxlcy5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoZGV2QnVpbGRQcm9taXNlIHx8IFByb21pc2UucmVzb2x2ZSgpKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkge1xuICAgIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgIH1cbiAgICBjb25zdCBvbkJ1aWxkTWFuaWZlc3QgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgICAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQjtcbiAgICAgICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCk9PntcbiAgICAgICAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSkpO1xufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICBzY3JpcHRzOiBbXG4gICAgICAgICAgICAgICAgYXNzZXRQcmVmaXggKyAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICsgZW5jb2RlVVJJKCgwLCBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKS5kZWZhdWx0KHJvdXRlLCAnLmpzJykpLCBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICAgICAgICBjc3M6IFtdXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KT0+e1xuICAgICAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKChlbnRyeSk9PmFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmpzJylcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5jc3MnKVxuICAgICAgICAgICAgKVxuICAgICAgICB9O1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpIHtcbiAgICBjb25zdCBlbnRyeXBvaW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBsb2FkZWRTY3JpcHRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHN0eWxlU2hlZXRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHJvdXRlcyA9IG5ldyBNYXAoKTtcbiAgICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKSB7XG4gICAgICAgIGxldCBwcm9tID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZikge1xuICAgICAgICBsZXQgcHJvbSA9IHN0eWxlU2hlZXRzLmdldChocmVmKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIHN0eWxlU2hlZXRzLnNldChocmVmLCBwcm9tID0gZmV0Y2goaHJlZikudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpPT4oe1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0ZXh0XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB3aGVuRW50cnlwb2ludCAocm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRW50cnlwb2ludCAocm91dGUsIGV4ZWN1dGUpIHtcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKChmbik9PmZuKClcbiAgICAgICAgICAgICkudGhlbigoZXhwb3J0cyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0c1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAsIChlcnIpPT4oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkudGhlbigoaW5wdXQpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KTtcbiAgICAgICAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkUm91dGUgKHJvdXRlLCBwcmVmZXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIHJvdXRlcywgKCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUZpbGVzUHJvbWlzZSA9IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKCh7IHNjcmlwdHMgLCBjc3MgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpID8gW10gOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksIFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKChlbnRyeXBvaW50KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogcmVzWzFdXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgICAgICAgICBkZXZCdWlsZFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3V0ZUZpbGVzUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUZpbGVzUHJvbWlzZS5maW5hbGx5KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHJvdXRlRmlsZXNQcm9taXNlLCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7IGVudHJ5cG9pbnQgLCBzdHlsZXMgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiBzdHlsZXNcbiAgICAgICAgICAgICAgICAgICAgfSwgZW50cnlwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBwcmVmZXRjaCAocm91dGUpIHtcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgICAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgICAgICAgIGxldCBjbjtcbiAgICAgICAgICAgIGlmIChjbiA9IG5hdmlnYXRvci5jb25uZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgICAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKChvdXRwdXQpPT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaCA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KT0+cHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JylcbiAgICAgICAgICAgICAgICApIDogW10pXG4gICAgICAgICAgICApLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnRoaXMubG9hZFJvdXRlKHJvdXRlLCB0cnVlKS5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICAgKCk9PntcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbG9hZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ3aXRoUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfd2l0aFJvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuZXhwb3J0cy51c2VSb3V0ZXIgPSB1c2VSb3V0ZXI7XG5leHBvcnRzLmNyZWF0ZVJvdXRlciA9IGNyZWF0ZVJvdXRlcjtcbmV4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlID0gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtcbnZhciBfcm91dGVyQ29udGV4dCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0XCIpO1xudmFyIF93aXRoUm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBzaW5nbGV0b25Sb3V0ZXIgPSB7XG4gICAgcm91dGVyOiBudWxsLFxuICAgIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgICByZWFkeSAoY2IpIHtcbiAgICAgICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKTtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAgICdwYXRobmFtZScsXG4gICAgJ3JvdXRlJyxcbiAgICAncXVlcnknLFxuICAgICdhc1BhdGgnLFxuICAgICdjb21wb25lbnRzJyxcbiAgICAnaXNGYWxsYmFjaycsXG4gICAgJ2Jhc2VQYXRoJyxcbiAgICAnbG9jYWxlJyxcbiAgICAnbG9jYWxlcycsXG4gICAgJ2RlZmF1bHRMb2NhbGUnLFxuICAgICdpc1JlYWR5JyxcbiAgICAnaXNQcmV2aWV3JyxcbiAgICAnaXNMb2NhbGVEb21haW4nLFxuICAgICdkb21haW5Mb2NhbGVzJywgXG5dO1xuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAgICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgICAnaGFzaENoYW5nZUNvbXBsZXRlJywgXG5dO1xuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgICAncHVzaCcsXG4gICAgJ3JlcGxhY2UnLFxuICAgICdyZWxvYWQnLFxuICAgICdiYWNrJyxcbiAgICAncHJlZmV0Y2gnLFxuICAgICdiZWZvcmVQb3BTdGF0ZScsIFxuXTtcbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gICAgZ2V0ICgpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgfVxufSk7XG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuXG4gICAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gICAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gICAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgICAgICBnZXQgKCkge1xuICAgICAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIHNpbmdsZXRvblJvdXRlcltmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO1xuICAgIH07XG59KTtcbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9PntcbiAgICAgICAgX3JvdXRlci5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO1xuICAgICAgICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlcjtcbiAgICAgICAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5mdW5jdGlvbiBnZXRSb3V0ZXIoKSB7XG4gICAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgKyAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG52YXIgX2RlZmF1bHQgPSBzaW5nbGV0b25Sb3V0ZXI7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbmZ1bmN0aW9uIHVzZVJvdXRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlciguLi5hcmdzKSB7XG4gICAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBfcm91dGVyLmRlZmF1bHQoLi4uYXJncyk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKT0+Y2IoKVxuICAgICk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW107XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG5mdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKSB7XG4gICAgY29uc3QgX3JvdXRlcjEgPSByb3V0ZXI7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtcbiAgICAgICAgaWYgKHR5cGVvZiBfcm91dGVyMVtwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKEFycmF5LmlzQXJyYXkoX3JvdXRlcjFbcHJvcGVydHldKSA/IFtdIDoge1xuICAgICAgICAgICAgfSwgX3JvdXRlcjFbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcjFbcHJvcGVydHldO1xuICAgIH1cbiAgICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gICAgaW5zdGFuY2UuZXZlbnRzID0gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgICAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIHJldHVybiBfcm91dGVyMVtmaWVsZF0oLi4uYXJncyk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnVzZUludGVyc2VjdGlvbiA9IHVzZUludGVyc2VjdGlvbjtcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oeyByb290TWFyZ2luICwgZGlzYWJsZWQgIH0pIHtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO1xuICAgIGNvbnN0IHVub2JzZXJ2ZSA9ICgwLCBfcmVhY3QpLnVzZVJlZigpO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9ICgwLCBfcmVhY3QpLnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBzZXRSZWYgPSAoMCwgX3JlYWN0KS51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVybjtcbiAgICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShlbCwgKGlzVmlzaWJsZSk9PmlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSlcbiAgICAgICAgICAgICwge1xuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICByb290TWFyZ2luLFxuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgKDAsIF9yZWFjdCkudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9ICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpPT4oMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLmNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgc2V0UmVmLFxuICAgICAgICB2aXNpYmxlXG4gICAgXTtcbn1cbmZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlkICwgb2JzZXJ2ZXIgLCBlbGVtZW50cyAgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO1xuICAgIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgICAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgICAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucykge1xuICAgIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnO1xuICAgIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKT0+e1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KT0+e1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMDtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBvcHRpb25zKTtcbiAgICBvYnNlcnZlcnMuc2V0KGlkLCBpbnN0YW5jZSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG9ic2VydmVyLFxuICAgICAgICBlbGVtZW50c1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHdpdGhSb3V0ZXI7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KSB7XG4gICAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICByb3V0ZXI6ICgwLCBfcm91dGVyKS51c2VSb3V0ZXIoKVxuICAgICAgICB9LCBwcm9wcykpKTtcbiAgICB9XG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbiAgICAgICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWA7XG4gICAgfVxuICAgIHJldHVybiBXaXRoUm91dGVyV3JhcHBlcjtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldERvbWFpbkxvY2FsZSA9IGdldERvbWFpbkxvY2FsZTtcbmV4cG9ydHMuYWRkTG9jYWxlID0gYWRkTG9jYWxlO1xuZXhwb3J0cy5kZWxMb2NhbGUgPSBkZWxMb2NhbGU7XG5leHBvcnRzLmhhc0Jhc2VQYXRoID0gaGFzQmFzZVBhdGg7XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5leHBvcnRzLmlzTG9jYWxVUkwgPSBpc0xvY2FsVVJMO1xuZXhwb3J0cy5pbnRlcnBvbGF0ZUFzID0gaW50ZXJwb2xhdGVBcztcbmV4cG9ydHMucmVzb2x2ZUhyZWYgPSByZXNvbHZlSHJlZjtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoXCIpO1xudmFyIF9yb3V0ZUxvYWRlciA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO1xudmFyIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoID0gcmVxdWlyZShcIi4uLy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7XG52YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGggPSByZXF1aXJlKFwiLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGhcIik7XG52YXIgX21pdHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG52YXIgX2lzRHluYW1pYyA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG52YXIgX3BhcnNlUmVsYXRpdmVVcmwgPSByZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7XG52YXIgX3F1ZXJ5c3RyaW5nID0gcmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7XG52YXIgX3Jlc29sdmVSZXdyaXRlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlc1wiKSk7XG52YXIgX3JvdXRlTWF0Y2hlciA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7XG52YXIgX3JvdXRlUmVnZXggPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmxldCBkZXRlY3REb21haW5Mb2NhbGU7XG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7XG59XG5jb25zdCBiYXNlUGF0aCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggfHwgJyc7XG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICAgICAgY2FuY2VsbGVkOiB0cnVlXG4gICAgfSk7XG59XG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgsIHByZWZpeCkge1xuICAgIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJykgPyBwYXRoID09PSAnLycgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeCkgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gIDogcGF0aDtcbn1cbmZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShwYXRoLCBsb2NhbGUsIGxvY2FsZXMsIGRvbWFpbkxvY2FsZXMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBsb2NhbGUgPSBsb2NhbGUgfHwgKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO1xuICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSk7XG4gICAgICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aCB8fCAnJ30ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkTG9jYWxlKHBhdGgsIGxvY2FsZSwgZGVmYXVsdExvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJiBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCwgbG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIChwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgfHwgcGF0aExvd2VyID09PSAnLycgKyBsb2NhbGVMb3dlcikgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArIHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpIHtcbiAgICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/Jyk7XG4gICAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleCk7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJyk7XG59XG5mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKSB7XG4gICAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aCk7XG59XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtcbiAgICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YDtcbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsKSB7XG4gICAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykgfHwgdXJsLnN0YXJ0c1dpdGgoJz8nKSkgcmV0dXJuIHRydWU7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICAgICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpIHtcbiAgICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJztcbiAgICBjb25zdCBkeW5hbWljUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzO1xuICAgIGNvbnN0IGR5bmFtaWNNYXRjaGVzID0gLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fCAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnk7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZTtcbiAgICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKTtcbiAgICBpZiAoIXBhcmFtcy5ldmVyeSgocGFyYW0pPT57XG4gICAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJztcbiAgICAgICAgY29uc3QgeyByZXBlYXQgLCBvcHRpb25hbCAgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dO1xuICAgICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gO1xuICAgICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW1xuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiYgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9IGludGVycG9sYXRlZFJvdXRlLnJlcGxhY2UocmVwbGFjZWQsIHJlcGVhdCA/IHZhbHVlLm1hcCgvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgIChzZWdtZW50KT0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICkuam9pbignLycpIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSkgfHwgJy8nKTtcbiAgICB9KSkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4gICAgICAgIDtcbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHBhcmFtcyxcbiAgICAgICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZVxuICAgIH07XG59XG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcykge1xuICAgIGNvbnN0IGZpbHRlcmVkUXVlcnkgPSB7XG4gICAgfTtcbiAgICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbHRlcmVkUXVlcnk7XG59XG5mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsIGhyZWYsIHJlc29sdmVBcykge1xuICAgIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gICAgbGV0IGJhc2U7XG4gICAgbGV0IHVybEFzU3RyaW5nID0gdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpO1xuICAgIC8vIHJlcGVhdGVkIHNsYXNoZXMgYW5kIGJhY2tzbGFzaGVzIGluIHRoZSBVUkwgYXJlIGNvbnNpZGVyZWRcbiAgICAvLyBpbnZhbGlkIGFuZCB3aWxsIG5ldmVyIG1hdGNoIGEgTmV4dC5qcyBwYWdlL2ZpbGVcbiAgICBjb25zdCB1cmxQcm90b01hdGNoID0gdXJsQXNTdHJpbmcubWF0Y2goL15bYS16QS1aXXsxLH06XFwvXFwvLyk7XG4gICAgY29uc3QgdXJsQXNTdHJpbmdOb1Byb3RvID0gdXJsUHJvdG9NYXRjaCA/IHVybEFzU3RyaW5nLnN1YnN0cih1cmxQcm90b01hdGNoWzBdLmxlbmd0aCkgOiB1cmxBc1N0cmluZztcbiAgICBjb25zdCB1cmxQYXJ0cyA9IHVybEFzU3RyaW5nTm9Qcm90by5zcGxpdCgnPycpO1xuICAgIGlmICgodXJsUGFydHNbMF0gfHwgJycpLm1hdGNoKC8oXFwvXFwvfFxcXFwpLykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byBuZXh0L3JvdXRlcjogJHt1cmxBc1N0cmluZ30sIHJlcGVhdGVkIGZvcndhcmQtc2xhc2hlcyAoLy8pIG9yIGJhY2tzbGFzaGVzIFxcXFwgYXJlIG5vdCB2YWxpZCBpbiB0aGUgaHJlZmApO1xuICAgICAgICBjb25zdCBub3JtYWxpemVkVXJsID0gKDAsIF91dGlscykubm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzKHVybEFzU3RyaW5nTm9Qcm90byk7XG4gICAgICAgIHVybEFzU3RyaW5nID0gKHVybFByb3RvTWF0Y2ggPyB1cmxQcm90b01hdGNoWzBdIDogJycpICsgbm9ybWFsaXplZFVybDtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKSA/IHJvdXRlci5hc1BhdGggOiByb3V0ZXIucGF0aG5hbWUsICdodHRwOi8vbicpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgLy8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbiAgICAgICAgYmFzZSA9IG5ldyBVUkwoJy8nLCAnaHR0cDovL24nKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKTtcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKTtcbiAgICAgICAgbGV0IGludGVycG9sYXRlZEFzID0gJyc7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJiByZXNvbHZlQXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gKDAsIF9xdWVyeXN0cmluZykuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO1xuICAgICAgICAgICAgY29uc3QgeyByZXN1bHQgLCBwYXJhbXMgIH0gPSBpbnRlcnBvbGF0ZUFzKGZpbmFsVXJsLnBhdGhuYW1lLCBmaW5hbFVybC5wYXRobmFtZSwgcXVlcnkpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGludGVycG9sYXRlZEFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpbiA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCkgOiBmaW5hbFVybC5ocmVmO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXG4gICAgICAgIF0gOiByZXNvbHZlZEhyZWY7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybCkge1xuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsO1xufVxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlciwgdXJsLCBhcykge1xuICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLCB1cmwsIHRydWUpO1xuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7XG4gICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXM7XG4gICAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtcbiAgICBjb25zdCBwcmVwYXJlZEFzID0gYXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsIGFzKSkgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZjtcbiAgICByZXR1cm4ge1xuICAgICAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgICAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcylcbiAgICB9O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpIHtcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCgoMCwgX2Rlbm9ybWFsaXplUGFnZVBhdGgpLmRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUpKTtcbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgICByZXR1cm4gcGF0aG5hbWU7XG4gICAgfVxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgcGFnZXMuc29tZSgocGFnZSk9PntcbiAgICAgICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGFnZSkgJiYgKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSA9IHBhZ2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSk7XG59XG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJiAhIWZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCB2ID0gJ19fbmV4dCc7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWU7XG4gICAgfSBjYXRjaCAobikge1xuICAgIH1cbn0oKTtcbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJyk7XG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAvL1xuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgICgwLCBfcm91dGVMb2FkZXIpLm1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZTEsIHF1ZXJ5MSwgYXMxLCB7IGluaXRpYWxQcm9wcyAsIHBhZ2VMb2FkZXIgLCBBcHAgLCB3cmFwQXBwICwgQ29tcG9uZW50OiBDb21wb25lbnQxICwgZXJyOiBlcnIxICwgc3Vic2NyaXB0aW9uICwgaXNGYWxsYmFjayAsIGxvY2FsZSAsIGxvY2FsZXMgLCBkZWZhdWx0TG9jYWxlICwgZG9tYWluTG9jYWxlcyAsIGlzUHJldmlldyAgfSl7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge1xuICAgICAgICB9O1xuICAgICAgICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICAgICAgICB0aGlzLnNkciA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5faWR4ID0gMDtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpPT57XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGU7XG4gICAgICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAgICAgICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAgICAgICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGZvcmNlZFNjcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHsgdXJsICwgYXM6IGFzMSAsIG9wdGlvbnMgLCBpZHggIH0gPSBzdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9pZHggPSBpZHg7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgIH0gPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgICAgICAgICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NzciAmJiBhczEgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lMSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAgICAgICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgICAgICAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMxLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIH0sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgfSksIGZvcmNlZFNjcm9sbCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xuICAgICAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge1xuICAgICAgICB9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnI6IGVycjEsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICAgICAgICBDb21wb25lbnQ6IEFwcCxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiBbXVxuICAgICAgICB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTE7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTE7XG4gICAgICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID0gKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lMSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZTEgOiBhczE7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIHRoaXMuaXNSZWFkeSA9ICEhKHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHwgc2VsZi5fX05FWFRfREFUQV9fLmFwcEdpcCAmJiAhc2VsZi5fX05FWFRfREFUQV9fLmdzcCB8fCAhYXV0b0V4cG9ydER5bmFtaWMgJiYgIXNlbGYubG9jYXRpb24uc2VhcmNoICYmICFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTtcbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIWlzUHJldmlldztcbiAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgICAgICAgIGlmIChhczEuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gYXMxICE9PSBwYXRobmFtZTE7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyBwdXNoKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAgICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgYXN5bmMgY2hhbmdlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucywgZm9yY2VkU2Nyb2xsKSB7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaG91bGRSZXNvbHZlSHJlZiA9IHVybCA9PT0gYXMgfHwgb3B0aW9ucy5faCB8fCBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjtcbiAgICAgICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgICAgICBpZiAob3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcmV2TG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSA/IHRoaXMuZGVmYXVsdExvY2FsZSA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlO1xuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKCgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIHZhciByZWY7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICAgICAgICAgIGlmICghKChyZWYgPSB0aGlzLmxvY2FsZXMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICAgICAgICAgIGlmICghZGlkTmF2aWdhdGUgJiYgZGV0ZWN0ZWREb21haW4gJiYgdGhpcy5pc0xvY2FsZURvbWFpbiAmJiBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHthZGRCYXNlUGF0aChgJHt0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke3RoaXMubG9jYWxlfWB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nKX1gO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICBpZiAoX3V0aWxzLlNUKSB7XG4gICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9ZmFsc2UgIH0gPSBvcHRpb25zO1xuICAgICAgICBjb25zdCByb3V0ZVByb3BzID0ge1xuICAgICAgICAgICAgc2hhbGxvd1xuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIG9wdGlvbnMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpKTtcbiAgICAgICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhcztcbiAgICAgICAgbGV0IGxvY2FsZUNoYW5nZSA9IHByZXZMb2NhbGUgIT09IHRoaXMubG9jYWxlO1xuICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4gICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXM7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHBhcnNlZDtcbiAgICAgICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgICAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAgICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICAgICAgbGV0IHBhZ2VzLCByZXdyaXRlcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICB9XG4gICAgICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhcztcbiAgICAgICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgICAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgICAgIHBhdGhuYW1lMSA9IHBhdGhuYW1lMSA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUxKSkgOiBwYXRobmFtZTE7XG4gICAgICAgIGlmIChzaG91bGRSZXNvbHZlSHJlZiAmJiBwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSAoMCwgX3Jlc29sdmVSZXdyaXRlcykuZGVmYXVsdChhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLCB0aGlzLmxvY2FsZSkpLCBwYWdlcywgcmV3cml0ZXMsIHF1ZXJ5MSwgKHApPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKVxuICAgICAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoO1xuICAgICAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lMSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lMSkge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgKyBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcyk7XG4gICAgICAgICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGUgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeTEpIDoge1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCB8fCBzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoKHBhcmFtKT0+IXF1ZXJ5MVtwYXJhbV1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZSA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGUgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgKyBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICB9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5MSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5MSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHJlZiwgcmVmMTtcbiAgICAgICAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIGxldCB7IGVycm9yICwgcHJvcHMgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLnBhZ2VQcm9wcyAmJiBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVDtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZEhyZWYucGF0aG5hbWUsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwgLCBhczogbmV3QXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgZGVzdGluYXRpb24sIGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb247XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXO1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZTtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCc7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8obm90Rm91bmRSb3V0ZSwgbm90Rm91bmRSb3V0ZSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhbGxvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICB3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkID0gYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJiAhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5faCAmJiBwYXRobmFtZTEgPT09ICcvX2Vycm9yJyAmJiAoKHJlZiA9IHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiAocmVmMSA9IHJlZi5wYWdlUHJvcHMpID09PSBudWxsIHx8IHJlZjEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZjEuc3RhdHVzQ29kZSkgPT09IDUwMCAmJiAocHJvcHMgPT09IG51bGwgfHwgcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb3BzLnBhZ2VQcm9wcykpIHtcbiAgICAgICAgICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlO1xuICAgICAgICAgICAgdmFyIF9zY3JvbGw7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRTY3JvbGwgPSAoX3Njcm9sbCA9IG9wdGlvbnMuc2Nyb2xsKSAhPT0gbnVsbCAmJiBfc2Nyb2xsICE9PSB2b2lkIDAgPyBfc2Nyb2xsIDogIWlzVmFsaWRTaGFsbG93Um91dGU7XG4gICAgICAgICAgICBjb25zdCByZXNldFNjcm9sbCA9IHNob3VsZFNjcm9sbCA/IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgIH0gOiBudWxsO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBjbGVhbmVkQXMsIHJvdXRlSW5mbywgZm9yY2VkU2Nyb2xsICE9PSBudWxsICYmIGZvcmNlZFNjcm9sbCAhPT0gdm9pZCAwID8gZm9yY2VkU2Nyb2xsIDogcmVzZXRTY3JvbGwpLmNhdGNoKChlKT0+e1xuICAgICAgICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlO1xuICAgICAgICAgICAgICAgIGVsc2UgdGhyb3cgZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICBpZiAoZXJyMS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnIxO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8ICgwLCBfdXRpbHMpLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvdztcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxXG4gICAgICAgICAgICB9LCAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCgwLCBfcm91dGVMb2FkZXIpLmlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBDb21wb25lbnQxO1xuICAgICAgICAgICAgbGV0IHN0eWxlU2hlZXRzO1xuICAgICAgICAgICAgbGV0IHByb3BzO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBDb21wb25lbnQxID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygc3R5bGVTaGVldHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgKHsgcGFnZTogQ29tcG9uZW50MSAsIHN0eWxlU2hlZXRzICB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHtcbiAgICAgICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycik7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvID8gdW5kZWZpbmVkIDogZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm8gPyBjYWNoZWRSb3V0ZUluZm8gOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGF0YUhyZWY7XG4gICAgICAgICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgICAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgICAgICB9KSwgcmVzb2x2ZWRBcywgX19OX1NTRywgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhKCgpPT5fX05fU1NHID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZikgOiBfX05fU1NQID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZikgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGVzOiB0aGlzLmxvY2FsZXMsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU6IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAoZXJyMikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyMiwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBkYXRhLCByZXNldFNjcm9sbCkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqLyBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpO1xuICAgICAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgICAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgICAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgICAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgICAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaDtcbiAgICB9XG4gICAgc2Nyb2xsVG9IYXNoKGFzKSB7XG4gICAgICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi8gYXN5bmMgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTIgIH0gPSBwYXJzZWQ7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lMiwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICBsZXQgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgICAgIGFzUGF0aCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgbGV0IHJld3JpdGVzO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSAoMCwgX3Jlc29sdmVSZXdyaXRlcykuZGVmYXVsdChhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLCBwYWdlcywgcmV3cml0ZXMsIHBhcnNlZC5xdWVyeSwgKHApPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKVxuICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKTtcbiAgICAgICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lMikge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUyKTtcbiAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBpc1NzZyA/IHRoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCwgcmVzb2x2ZWRBcywgdHJ1ZSwgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogdGhpcy5sb2NhbGUpKSA6IGZhbHNlO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksIFxuICAgICAgICBdKTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSB0aGlzLmNsYyA9ICgpPT57XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7XG4gICAgICAgICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0O1xuICAgIH1cbiAgICBfZ2V0RGF0YShmbikge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpPT57XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycjIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIHtcbiAgICAgICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgIXRoaXMuaXNQcmV2aWV3ICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIHtcbiAgICAgICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSkuY2F0Y2goKGVycjIpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwMSAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwMSk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMpLmxvYWRHZXRJbml0aWFsUHJvcHMoQXBwMSwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWJvcnRDb21wb25lbnRMb2FkKGFzLCByb3V0ZVByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNsYygpO1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5vdGlmeShkYXRhLCByZXNldFNjcm9sbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbn1cblJvdXRlci5ldmVudHMgPSAoMCwgX21pdHQpLmRlZmF1bHQoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlcjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi8uLi9sYXlvdXQvRm9vdGVyJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uLy4uL2xheW91dC9IZWFkZXInXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vbGF5b3V0L0xheW91dCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBDcmVhdGVDaXJjbGVDb250ZW50IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2NpcmNsZS9jcmVhdGUvQ3JlYXRlQ2lyY2xlQ29udGVudFwiO1xyXG5cclxuY29uc3QgQ3JlYXRlQ2lyY2xlUGFnZTogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPExheW91dCBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fT5cclxuICAgICAgICA8SGVhZGVyIHBhZ2U9ezN9IC8+XHJcbiAgICAgICAgPENyZWF0ZUNpcmNsZUNvbnRlbnQgLz5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L0xheW91dD5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlQ2lyY2xlUGFnZTsiLCJpbXBvcnQgYXBpIGZyb20gJy4uLy4uL3V0aWxzL2FwaSc7XHJcbmltcG9ydCBVcmwgZnJvbSAnLi4vLi4vdXRpbHMvdXJsJztcclxuaW1wb3J0IHsgRmV0Y2hGbiwgTGltaXRJZFBhcmFtcywgTGltaXRUeXBlUGFyYW1zIH0gZnJvbSAnLi4vcGFyYW1zJztcclxuaW1wb3J0IHR5cGUgeyBSZXMgfSBmcm9tICcuL2hvbWUnO1xyXG5cclxuXHJcbmV4cG9ydCB0eXBlIExpc3RQYWdlQmVhbjxUPiA9IHtcclxuICAgIHRvdGFsOiBudW1iZXIsXHJcbiAgICBsaXN0OiBBcnJheTxUPlxyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgQ2lyY2xlQmVhbiA9IHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBjaXJjbGVfbmFtZTogc3RyaW5nO1xyXG4gICAgYXZhdGFyOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgY2lyY2xlX3RhZzogc3RyaW5nO1xyXG4gICAgY2lyY2xlX2JhY2tncm91bmQ6IHN0cmluZztcclxuICAgIG93bmVyX2lkOiBzdHJpbmc7XHJcbiAgICB0eXBlOiBudW1iZXI7XHJcbiAgICBzdGF0dXM6IG51bWJlcjtcclxuICAgIG91dF92aXNpYWJsZV9sZXZlbDogbnVtYmVyO1xyXG4gICAgbmVlZF9hcHBseTogbnVtYmVyO1xyXG4gICAgY3JlYXRlX3RpbWU6IHN0cmluZztcclxuICAgIGpvaW5fdHlwZTogbnVtYmVyO1xyXG59O1xyXG5cclxuXHJcbi8qKuWciOWtkOWIl+ihqCAqL1xyXG5leHBvcnQgY29uc3QgZ2V0Q2lyY2xlTGlzdDogRmV0Y2hGbjxMaW1pdFR5cGVQYXJhbXM+ID0gKHBhcmFtcykgPT4ge1xyXG4gICAgcmV0dXJuIGFwaS5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IFVybC5jaXJjbGVMaXN0LFxyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICBwYXJhbXM6IHBhcmFtcyxcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLyoq55So5oi355qE5ZyI5a2Q5YiX6KGoICovXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyQ2lyY2xlTGlzdDogRmV0Y2hGbjxMaW1pdElkUGFyYW1zPiA9IChwYXJhbXMpID0+IHtcclxuICAgIHJldHVybiBhcGkucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiBVcmwudXNlckNpcmNsZUxpc3QsXHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIHBhcmFtczogcGFyYW1zLFxyXG4gICAgfSk7XHJcbn07XHJcbiIsImltcG9ydCBhcGkgZnJvbSAnLi4vLi4vdXRpbHMvYXBpJztcclxuaW1wb3J0IFVybCBmcm9tICcuLi8uLi91dGlscy91cmwnO1xyXG5pbXBvcnQgeyBGZXRjaEZuIH0gZnJvbSAnLi4vcGFyYW1zJztcclxuaW1wb3J0IHsgSGVscFR5cGVCZWFuIH0gZnJvbSAnLi9oZWxwZXInO1xyXG5pbXBvcnQgdHlwZSB7IE5hbWVJZEJlYW4sIFJlcyB9IGZyb20gJy4vaG9tZSc7XHJcblxyXG4vLyDlrabmoKFiZWFuXHJcbmV4cG9ydCB0eXBlIFNjaG9vbEJlYW4gPSBOYW1lSWRCZWFuICYge1xyXG4gICAgcGFydDogc3RyaW5nLFxyXG59O1xyXG5cclxuLy8g5Zyw5Z2AYmVhblxyXG5leHBvcnQgdHlwZSBBZGRyZXNzQmVhbiA9IE5hbWVJZEJlYW4gJiB7XHJcbiAgICBjaXRpZXM6IEFycmF5PENpdHlCZWFuPlxyXG59O1xyXG5cclxuLy8g5Z+O5biCYmVhblxyXG5leHBvcnQgdHlwZSBDaXR5QmVhbiA9IE5hbWVJZEJlYW4gJiB7XHJcbiAgICBwcm92aW5jZV9pZDogbnVtYmVyLFxyXG4gICAgYXJlYTogQXJyYXk8QXJlYUJlYW4+XHJcbn07XHJcblxyXG4vLyDljLpiZWFuXHJcbmV4cG9ydCB0eXBlIEFyZWFCZWFuID0gTmFtZUlkQmVhbiAmIHtcclxuICAgIHByb3ZpbmNlX2lkOiBudW1iZXIsXHJcbiAgICBjaXR5X2lkOiBudW1iZXJcclxufTtcclxuXHJcbi8vIOWciOWtkOexu+Wei2JlYW5cclxuZXhwb3J0IHR5cGUgQ2lyY2xlVHlwZUJlYW4gPSB7XHJcbiAgICBpZDogbnVtYmVyLFxyXG4gICAgdHlwZTogc3RyaW5nLFxyXG4gICAgdGFnczogQXJyYXk8VGFnc0JlYW4+XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBUYWdzQmVhbiA9IE5hbWVJZEJlYW4gJiB7XHJcbiAgICB0eXBlX2lkOiBudW1iZXIsXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFR5cGVBZGRyZXNzU2Nob29sQmVhbiA9IHtcclxuICAgIHR5cGU6IEFycmF5PEhlbHBUeXBlQmVhbj4sXHJcbiAgICBzY2hvb2w6IEFycmF5PFNjaG9vbEJlYW4+LFxyXG4gICAgYWRkcmVzczogQXJyYXk8QWRkcmVzc0JlYW4+LFxyXG4gICAgaG90X2NpdHk6IEFycmF5PENpdHlCZWFuPixcclxuICAgIGluZHVzdHJ5OiBBcnJheTxOYW1lSWRCZWFuPixcclxuICAgIGNpcmNsZV90eXBlOiBBcnJheTxDaXJjbGVUeXBlQmVhbj5cclxufTtcclxuXHJcblxyXG4vKirojrflj5blrabmoKHjgIHkupLluK7nsbvlnovjgIHnnIHluILljLogKi9cclxuZXhwb3J0IGNvbnN0IGdldFR5cGVBZGRyZXNzU2Nob29sOiBGZXRjaEZuPHVua25vd24+ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGFwaS5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IFVybC5jb21taXQsXHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiXHJcbiAgICB9KTtcclxufTtcclxuXHJcblxyXG4vKirojrflj5blnIjlrZDnsbvliKsgKi9cclxuZXhwb3J0IGNvbnN0IGdldENpcmNsZVR5cGU6IEZldGNoRm48dW5rbm93bj4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXBpLnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogVXJsLmdldENpcmNsZVR5cGUsXHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiXHJcbiAgICB9KTtcclxufTtcclxuIiwiaW1wb3J0IHsgTmFtZUlkQmVhbiB9IGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IHsgVXNlckJlYW4gfSBmcm9tIFwiLi91c2VyXCI7XHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vdXRpbHMvYXBpJztcclxuaW1wb3J0IFVybCBmcm9tICcuLi8uLi91dGlscy91cmwnO1xyXG5pbXBvcnQgeyBGZXRjaEZuLCBMaW1pdElkUGFyYW1zLCBMaW1pdFR5cGVQYXJhbXMgfSBmcm9tIFwiLi4vcGFyYW1zXCI7XHJcblxyXG5cclxuZXhwb3J0IHR5cGUgSGVscFR5cGVCZWFuID0gTmFtZUlkQmVhbiAmIHtcclxuICAgIGNoaWxkOiBOYW1lSWRCZWFuO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgSGVscGVySXRlbURhdGEgPSB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgc2VuZGVyX2lkOiBzdHJpbmc7XHJcbiAgICBzZW5kZXI6IFVzZXJCZWFuO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGNvbnRlbnQ6IHN0cmluZztcclxuICAgIHR5cGU6IEhlbHBUeXBlQmVhbjtcclxuICAgIHByb3ZpbmNlOiBOYW1lSWRCZWFuO1xyXG4gICAgY2l0eTogTmFtZUlkQmVhbjtcclxuICAgIGFyZWE6IE5hbWVJZEJlYW47XHJcbiAgICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgICBzdGFydF90aW1lOiBudW1iZXI7XHJcbiAgICBlbmRfdGltZTogbnVtYmVyO1xyXG4gICAgbG93ZXN0X3ByaWNlOiBudW1iZXI7XHJcbiAgICBoaWdoZXN0X3ByaWNlOiBudW1iZXI7XHJcbiAgICBpc191cmdlbnQ6IG51bWJlcjtcclxuICAgIHBlb3BsZV9udW1iZXI6IG51bWJlcjtcclxuICAgIGlzX3RpbWVvdXRfY2FuY2VsOiBudW1iZXI7XHJcbiAgICBmaW5pc2hfcHJvdmU6IG51bWJlcjtcclxuICAgIHN0YXR1czogbnVtYmVyO1xyXG4gICAgbG9uZ2l0dWRlOiBudW1iZXI7XHJcbiAgICBsYXRpdHVkZTogbnVtYmVyO1xyXG59O1xyXG5cclxuXHJcbi8qKuS6kuW4ruWIl+ihqCAqL1xyXG5leHBvcnQgY29uc3QgZ2V0SGVscGVyTGlzdDogRmV0Y2hGbjxMaW1pdFR5cGVQYXJhbXM+ID0gKHBhcmFtcykgPT4ge1xyXG4gICAgcmV0dXJuIGFwaS5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IFVybC5oZWxwZXJMaXN0LFxyXG4gICAgICAgIHBhcmFtczogcGFyYW1zLFxyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vKirojrflj5bnlKjmiLfmsYLliqnliJfooaggKi9cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJIZWxwZXJMaXN0OiBGZXRjaEZuPExpbWl0SWRQYXJhbXM+ID0gKHBhcmFtcykgPT4ge1xyXG4gICAgcmV0dXJuIGFwaS5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IFVybC51c2VySGVscExpc3QsXHJcbiAgICAgICAgcGFyYW1zOiBwYXJhbXMsXHJcbiAgICB9KTtcclxufTsiLCJpbXBvcnQgVXJsIGZyb20gXCIuLi8uLi91dGlscy91cmxcIjtcclxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi91dGlscy9hcGknO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJJbmZvKHBhcmFtczogeyBpZDogc3RyaW5nIH0pIHtcclxuICAgIHJldHVybiBhcGkucmVxdWVzdCh7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICB1cmw6IFVybC51c2VySW5mbyArIFwiP2lkPVwiICsgcGFyYW1zLmlkLFxyXG4gICAgfSk7XHJcbn07IiwiaW1wb3J0IGFwaSBmcm9tICcuLi8uLi91dGlscy9hcGknO1xyXG5pbXBvcnQgVXJsIGZyb20gJy4uLy4uL3V0aWxzL3VybCc7XHJcbmltcG9ydCB7IE5hbWVJZEJlYW4gfSBmcm9tICcuL2hvbWUnO1xyXG5cclxuZXhwb3J0IHR5cGUgVXNlckJlYW4gPSB7XHJcbiAgICBpZDogc3RyaW5nOyAvLyBpZFxyXG4gICAgYWxpYXM6IHN0cmluZzsgLy8g5Yir5ZCNXHJcbiAgICBuaWNrbmFtZTogc3RyaW5nOyAvLyDmmLXnp7BcclxuICAgIGF2YXRhcjogc3RyaW5nOyAvLyDlpLTlg49cclxuICAgIHNleDogbnVtYmVyOyAvLyDmgKfliKtcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7IC8v566A5LuLXHJcbiAgICBiaXJ0aGRheTogc3RyaW5nOyAgLy8g55Sf5pelXHJcbiAgICBwcm92aW5jZTogTmFtZUlkQmVhbjsgLy/nnIFcclxuICAgIGNpdHk6IE5hbWVJZEJlYW47XHJcbiAgICBzY2hvb2w6IE5hbWVJZEJlYW47IC8v5a2m5qChXHJcbiAgICBhdXRoZW50aWNhdGlvbl90eXBlOiBudW1iZXI7IC8v6K6k6K+B57G75Z6LXHJcbiAgICBvbmxpbmVfc3RhdHVzOiBudW1iZXI7IC8v5Zyo57q/54q25oCBXHJcbiAgICBjcmVkaXRfc2NvcmU6IG51bWJlcjsgLy8g5L+h55So6K+E5YiGXHJcbiAgICBvcmRlcl9yYXRlOiBudW1iZXI7IC8v5oiQ5Y2V546HXHJcbiAgICBmb2xsb3dfbnVtYmVyOiBudW1iZXI7IC8v5YWz5rOo5pWw55uuXHJcbiAgICBmYW5fbnVtYmVyOiBudW1iZXI7IC8v57KJ5Lid5pWw55uuXHJcbiAgICBmb2xsb3dlZDogYm9vbGVhbjsgLy/mmK/lkKblt7LlhbPms6hcclxuICAgIGZvbGxvd2luZzogYm9vbGVhbjsgLy/mmK/lkKbooqvlhbPms6hcclxuICAgIHBob25lOiBzdHJpbmc7IC8v5omL5py65Y+377yI5LuF55m75b2V55qE5b2T5YmN55So5oi35pyJ77yJXHJcbn1cclxuXHJcblxyXG5leHBvcnQgdHlwZSBMb2dpbkJlYW4gPSB7XHJcbiAgICB0b2tlbjogc3RyaW5nLFxyXG4gICAgdXNlcjogVXNlckJlYW4sXHJcbiAgICBpc19maW5pc2g6IG51bWJlcixcclxufTtcclxuXHJcblxyXG50eXBlIExvZ2luUGFyYW1zID0ge1xyXG4gICAgcGhvbmU/OiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZD86IHN0cmluZztcclxuICAgIGNvZGU/OiBzdHJpbmc7XHJcbiAgICB0eXBlPzogbnVtYmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBob25lQ29kZShwYXJhbXM6IExvZ2luUGFyYW1zKSB7XHJcbiAgICByZXR1cm4gYXBpLnJlcXVlc3Qoe1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogVXJsLmdldENvZGUsXHJcbiAgICAgICAgZGF0YTogcGFyYW1zLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwd2RMb2dpbihwYXJhbXM6IExvZ2luUGFyYW1zKSB7XHJcbiAgICByZXR1cm4gYXBpLnJlcXVlc3Qoe1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogVXJsLnB3ZExvZ2luLFxyXG4gICAgICAgIGRhdGE6IHBhcmFtcyxcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvZGVMb2dpbihwYXJhbXM6IExvZ2luUGFyYW1zKSB7XHJcbiAgICByZXR1cm4gYXBpLnJlcXVlc3Qoe1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogVXJsLmNvZGVMb2dpbixcclxuICAgICAgICBkYXRhOiBwYXJhbXMsXHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8qKuiHquWKqOeZu+W9lSAqL1xyXG5leHBvcnQgY29uc3QgYXV0b0xvZ2luID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGFwaS5yZXF1ZXN0KHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IFVybC5hdXRvTG9naW4sXHJcbiAgICB9KTtcclxufTsiLCJpbXBvcnQgeyB0aHVua1dyYXBwZXIgfSBmcm9tICcuLi8uLi91dGlscy91dGlsJztcclxuaW1wb3J0IHR5cGUgeyBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcblxyXG5pbXBvcnQgdHlwZSB7IFJlcyB9IGZyb20gJy4uL3NlcnZpY2VzL2hvbWUnO1xyXG5pbXBvcnQgeyBDaXJjbGVCZWFuLCBnZXRVc2VyQ2lyY2xlTGlzdCwgTGlzdFBhZ2VCZWFuIH0gZnJvbSAnLi4vc2VydmljZXMvY2lyY2xlJztcclxuaW1wb3J0IHsgZ2V0Q2lyY2xlTGlzdCB9IGZyb20gJy4uL3NlcnZpY2VzL2NpcmNsZSc7XHJcblxyXG4vLyBBc3luY1RodW5rPOi/lOWbnueahOWAvOexu+Weiyzlh73mlbDnsbvlnot2b2lk6KGo56S65LiN5bim5Y+C5pWwLOS4jea4healmj5cclxuZXhwb3J0IGNvbnN0IGZldGNoQWxsQ2lyY2xlTGlzdCA9IHRodW5rV3JhcHBlcignY2xpcmNsZS9hbGwnLCBnZXRDaXJjbGVMaXN0KTtcclxuZXhwb3J0IGNvbnN0IGZldGNoVXNlckNpcmNsZUxpc3QgPSB0aHVua1dyYXBwZXIoJ2NsaXJjbGUvdXNlcl9saXN0JywgZ2V0VXNlckNpcmNsZUxpc3QpO1xyXG5cclxudHlwZSBJbmlTdGF0ZSA9IHtcclxuICAgIGFsbENpcmNsZURhdGE6IExpc3RQYWdlQmVhbjxDaXJjbGVCZWFuPjtcclxuICAgIG15Q2lyY2xlTGlzdDogTGlzdFBhZ2VCZWFuPENpcmNsZUJlYW4+O1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBJbmlTdGF0ZSA9IHtcclxuICAgIGFsbENpcmNsZURhdGE6IHsgdG90YWw6IDAsIGxpc3Q6IFtdIH0sXHJcbiAgICBteUNpcmNsZUxpc3Q6IHsgdG90YWw6IDAsIGxpc3Q6IFtdIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaG9tZVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ2NpcmNsZScsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgfSxcclxuICAgIGV4dHJhUmVkdWNlcnM6IHtcclxuICAgICAgICBbZmV0Y2hBbGxDaXJjbGVMaXN0LmZ1bGZpbGxlZC50eXBlXTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UmVzPExpc3RQYWdlQmVhbjxDaXJjbGVCZWFuPj4+KSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLmFsbENpcmNsZURhdGEgPSBhY3Rpb24ucGF5bG9hZC5kYXRhO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW2ZldGNoVXNlckNpcmNsZUxpc3QuZnVsZmlsbGVkLnR5cGVdOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxSZXM8TGlzdFBhZ2VCZWFuPENpcmNsZUJlYW4+Pj4pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUubXlDaXJjbGVMaXN0ID0gYWN0aW9uLnBheWxvYWQuZGF0YTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lU2xpY2UucmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgdGh1bmtXcmFwcGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcbmltcG9ydCB0eXBlIHsgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5cclxuaW1wb3J0IHsgQ2lyY2xlVHlwZUJlYW4sIGdldENpcmNsZVR5cGUsIGdldFR5cGVBZGRyZXNzU2Nob29sLCBUeXBlQWRkcmVzc1NjaG9vbEJlYW4gfSBmcm9tICcuLi9zZXJ2aWNlcy9jb21tb24nO1xyXG5pbXBvcnQgeyBSZXMgfSBmcm9tICcuLi9zZXJ2aWNlcy9ob21lJztcclxuXHJcbi8vIEFzeW5jVGh1bms86L+U5Zue55qE5YC857G75Z6LLOWHveaVsOexu+Wei3ZvaWTooajnpLrkuI3luKblj4LmlbAs5LiN5riF5qWaPlxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoVHlwZUFkZHJlc3NTY2hvb2wgPSB0aHVua1dyYXBwZXIoJ2NvbW1vbi90eXBlQWRkcmVzc1NjaG9vbCcsIGdldFR5cGVBZGRyZXNzU2Nob29sKTtcclxuZXhwb3J0IGNvbnN0IGZldGNoQ2lyY2xlVHlwZSA9IHRodW5rV3JhcHBlcignY29tbW9uL2NpcmNsZVR5cGUnLCBnZXRDaXJjbGVUeXBlKTtcclxuXHJcbnR5cGUgSW5pU3RhdGUgPSB7XHJcbiAgICBjaXJjbGVUeXBlOiBBcnJheTxDaXJjbGVUeXBlQmVhbj5cclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogSW5pU3RhdGUgPSB7XHJcbiAgICBjaXJjbGVUeXBlOiBbXVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbW1vblNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ2NvbW1vbicsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIGluY3JlbWVudDogKCkgPT4geyB9LFxyXG4gICAgfSxcclxuICAgIGV4dHJhUmVkdWNlcnM6IHtcclxuICAgICAgICAvLyBbZmV0Y2hUeXBlQWRkcmVzc1NjaG9vbC5mdWxmaWxsZWQudHlwZV06IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFJlczxUeXBlQWRkcmVzc1NjaG9vbEJlYW4+PikgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIuaVsOaNrlwiLCBhY3Rpb24ucGF5bG9hZC5kYXRhKTtcclxuICAgICAgICAvLyAgICAgc3RhdGUuaXNMb2FkRGF0YSA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIHN0YXRlLnR5cGVBZGRyZXNzU2Nob29sQmVhbiA9IGFjdGlvbi5wYXlsb2FkLmRhdGE7XHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICBbZmV0Y2hDaXJjbGVUeXBlLmZ1bGZpbGxlZC50eXBlXTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UmVzPEFycmF5PENpcmNsZVR5cGVCZWFuPj4+KSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLmNpcmNsZVR5cGUgPSBhY3Rpb24ucGF5bG9hZC5kYXRhO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IGluY3JlbWVudCB9ID0gY29tbW9uU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgY29tbW9uU2xpY2UucmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgdGh1bmtXcmFwcGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcbmltcG9ydCB0eXBlIHsgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBSZXMgfSBmcm9tICcuLi9zZXJ2aWNlcy9ob21lJztcclxuaW1wb3J0IHR5cGUgeyBIZWxwZXJJdGVtRGF0YSB9IGZyb20gJy4uL3NlcnZpY2VzL2hlbHBlcic7XHJcbmltcG9ydCB7IGdldEhlbHBlckxpc3QgfSBmcm9tICcuLi9zZXJ2aWNlcy9oZWxwZXInO1xyXG5pbXBvcnQgdHlwZSB7IENpcmNsZUJlYW4sIExpc3RQYWdlQmVhbiB9IGZyb20gJy4uL3NlcnZpY2VzL2NpcmNsZSc7XHJcbmltcG9ydCB7IGdldENpcmNsZUxpc3QgfSBmcm9tICcuLi9zZXJ2aWNlcy9jaXJjbGUnO1xyXG5cclxuLy8gQXN5bmNUaHVuazzov5Tlm57nmoTlgLznsbvlnoss5Ye95pWw57G75Z6Ldm9pZOihqOekuuS4jeW4puWPguaVsCzkuI3muIXmpZo+XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hSZWNvbW1lbmRMaXN0ID0gdGh1bmtXcmFwcGVyKCdob21lL3JlY29tbWVuZCcsIGdldEhlbHBlckxpc3QpO1xyXG5leHBvcnQgY29uc3QgZmV0Y2hMaWtlTGlzdCA9IHRodW5rV3JhcHBlcignaG9tZS9saWtlJywgZ2V0SGVscGVyTGlzdCk7XHJcbmV4cG9ydCBjb25zdCBmZXRjaE5lYXJieUxpc3QgPSB0aHVua1dyYXBwZXIoJ2hvbWUvbmVhcmJ5JywgZ2V0SGVscGVyTGlzdCk7XHJcbmV4cG9ydCBjb25zdCBmZXRjaEhvcnRMaXN0ID0gdGh1bmtXcmFwcGVyKCdob21lL2hvcnQnLCBnZXRIZWxwZXJMaXN0KTtcclxuZXhwb3J0IGNvbnN0IGZldGNoUmVjb21tZW5kQ2lyY2xlTGlzdCA9IHRodW5rV3JhcHBlcignaG9tZS9jaXJjbGUvcmVjb21tZW5kJywgZ2V0Q2lyY2xlTGlzdCk7XHJcblxyXG50eXBlIEluaVN0YXRlID0ge1xyXG4gIGlzTG9hZDogYm9vbGVhbjtcclxuICByZWNvbW1lbmREYXRhOiBIZWxwZXJJdGVtRGF0YVtdO1xyXG4gIGxpa2VEYXRhOiBIZWxwZXJJdGVtRGF0YVtdO1xyXG4gIG5lYXJieURhdGE6IEhlbHBlckl0ZW1EYXRhW107XHJcbiAgaG9ydERhdGE6IEhlbHBlckl0ZW1EYXRhW107XHJcbiAgcmVjb21tZW5kQ2lyY2xlRGF0YTogTGlzdFBhZ2VCZWFuPENpcmNsZUJlYW4+O1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBJbmlTdGF0ZSA9IHtcclxuICBpc0xvYWQ6IGZhbHNlLFxyXG4gIHJlY29tbWVuZERhdGE6IFtdLFxyXG4gIGxpa2VEYXRhOiBbXSxcclxuICBuZWFyYnlEYXRhOiBbXSxcclxuICBob3J0RGF0YTogW10sXHJcbiAgcmVjb21tZW5kQ2lyY2xlRGF0YToge1xyXG4gICAgdG90YWw6IDAsXHJcbiAgICBsaXN0OiBbXVxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaG9tZVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdob21lJyxcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICB9LFxyXG4gIGV4dHJhUmVkdWNlcnM6IHtcclxuICAgIFtmZXRjaFJlY29tbWVuZExpc3QuZnVsZmlsbGVkLnR5cGVdOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxSZXM8QXJyYXk8SGVscGVySXRlbURhdGE+Pj4pID0+IHtcclxuICAgICAgc3RhdGUuaXNMb2FkID0gdHJ1ZTtcclxuICAgICAgc3RhdGUucmVjb21tZW5kRGF0YSA9IGFjdGlvbi5wYXlsb2FkLmRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZmV0Y2hSZWNvbW1lbmRMaXN0XCIsIGFjdGlvbi5wYXlsb2FkLmRhdGEubGVuZ3RoKTtcclxuXHJcbiAgICB9LFxyXG4gICAgW2ZldGNoTGlrZUxpc3QuZnVsZmlsbGVkLnR5cGVdOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxSZXM8SGVscGVySXRlbURhdGFbXT4+KSA9PiB7XHJcbiAgICAgIHN0YXRlLmxpa2VEYXRhID0gYWN0aW9uLnBheWxvYWQuZGF0YTtcclxuICAgICAgY29uc29sZS5sb2coXCJmZXRjaExpa2VMaXN0XCIsIGFjdGlvbi5wYXlsb2FkLmRhdGEubGVuZ3RoKTtcclxuICAgIH0sXHJcbiAgICBbZmV0Y2hOZWFyYnlMaXN0LmZ1bGZpbGxlZC50eXBlXTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UmVzPEhlbHBlckl0ZW1EYXRhW10+PikgPT4ge1xyXG4gICAgICBzdGF0ZS5uZWFyYnlEYXRhID0gYWN0aW9uLnBheWxvYWQuZGF0YTtcclxuICAgICAgY29uc29sZS5sb2coXCJmZXRjaE5lYXJieUxpc3RcIiwgYWN0aW9uLnBheWxvYWQuZGF0YS5sZW5ndGgpO1xyXG4gICAgfSxcclxuICAgIFtmZXRjaEhvcnRMaXN0LmZ1bGZpbGxlZC50eXBlXTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UmVzPEhlbHBlckl0ZW1EYXRhW10+PikgPT4ge1xyXG4gICAgICBzdGF0ZS5ob3J0RGF0YSA9IGFjdGlvbi5wYXlsb2FkLmRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZmV0Y2hIb3J0TGlzdFwiLCBhY3Rpb24ucGF5bG9hZC5kYXRhLmxlbmd0aCk7XHJcbiAgICB9LFxyXG4gICAgW2ZldGNoUmVjb21tZW5kQ2lyY2xlTGlzdC5mdWxmaWxsZWQudHlwZV06IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFJlczxMaXN0UGFnZUJlYW48Q2lyY2xlQmVhbj4+PikgPT4ge1xyXG4gICAgICBzdGF0ZS5yZWNvbW1lbmRDaXJjbGVEYXRhID0gYWN0aW9uLnBheWxvYWQuZGF0YTtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lU2xpY2UucmVkdWNlcjtcclxuIiwiLyoqXHJcbiAqIEBhdXRob3I6IGxlcm95XHJcbiAqIEBkYXRlOiAyMDIxLzgvMjMgMTY6MDlcclxuICogQGRlc2NyaXB0aW9u77ya55uR5ZCsIEFzeW5jVGh1bmsgbG9hZGluZyDnirbmgIFcclxuICovXHJcbmltcG9ydCB0eXBlIHsgQW55QWN0aW9uLCBBc3luY1RodW5rIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcblxyXG50eXBlIEdlbmVyaWNBc3luY1RodW5rID0gQXN5bmNUaHVuazx1bmtub3duLCB1bmtub3duLCBhbnk+O1xyXG5cclxudHlwZSBQZW5kaW5nQWN0aW9uID0gUmV0dXJuVHlwZTxHZW5lcmljQXN5bmNUaHVua1sncGVuZGluZyddPjtcclxudHlwZSBSZWplY3RlZEFjdGlvbiA9IFJldHVyblR5cGU8R2VuZXJpY0FzeW5jVGh1bmtbJ3JlamVjdGVkJ10+O1xyXG50eXBlIEZ1bGZpbGxlZEFjdGlvbiA9IFJldHVyblR5cGU8R2VuZXJpY0FzeW5jVGh1bmtbJ2Z1bGZpbGxlZCddPjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1BlbmRpbmdBY3Rpb24oYWN0aW9uOiBBbnlBY3Rpb24pOiBhY3Rpb24gaXMgUGVuZGluZ0FjdGlvbiB7XHJcbiAgcmV0dXJuIGFjdGlvbi50eXBlLmVuZHNXaXRoKCcvcGVuZGluZycpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpc1JlamVjdGVkQWN0aW9uKGFjdGlvbjogQW55QWN0aW9uKTogYWN0aW9uIGlzIFJlamVjdGVkQWN0aW9uIHtcclxuICByZXR1cm4gYWN0aW9uLnR5cGUuZW5kc1dpdGgoJy9yZWplY3RlZCcpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bGZpbGxlZEFjdGlvbihhY3Rpb246IEFueUFjdGlvbik6IGFjdGlvbiBpcyBGdWxmaWxsZWRBY3Rpb24ge1xyXG4gIHJldHVybiBhY3Rpb24udHlwZS5lbmRzV2l0aCgnL2Z1bGZpbGxlZCcpO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBMb2FkaW5nU3RhdGUgPSBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogTG9hZGluZ1N0YXRlID0ge307XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGluZ1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdsb2FkaW5nJyxcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgLy8gVGhlIGByZWR1Y2Vyc2AgZmllbGQgbGV0cyB1cyBkZWZpbmUgcmVkdWNlcnMgYW5kIGdlbmVyYXRlIGFzc29jaWF0ZWQgYWN0aW9uc1xyXG4gIHJlZHVjZXJzOiB7fSxcclxuICAvLyBUaGUgYGV4dHJhUmVkdWNlcnNgIGZpZWxkIGxldHMgdGhlIHNsaWNlIGhhbmRsZSBhY3Rpb25zIGRlZmluZWQgZWxzZXdoZXJlLFxyXG4gIC8vIGluY2x1ZGluZyBhY3Rpb25zIGdlbmVyYXRlZCBieSBjcmVhdGVBc3luY1RodW5rIG9yIGluIG90aGVyIHNsaWNlcy5cclxuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xyXG4gICAgYnVpbGRlclxyXG4gICAgICAuYWRkTWF0Y2hlcihpc1BlbmRpbmdBY3Rpb24sIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdHlwZSA9IGFjdGlvbi50eXBlLnJlcGxhY2UoJy9wZW5kaW5nJywgJycpO1xyXG4gICAgICAgIHN0YXRlW3R5cGVdID0gdHJ1ZTtcclxuICAgICAgfSlcclxuICAgICAgLmFkZE1hdGNoZXIoaXNSZWplY3RlZEFjdGlvbiwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB0eXBlID0gYWN0aW9uLnR5cGUucmVwbGFjZSgnL3JlamVjdGVkJywgJycpO1xyXG4gICAgICAgIHN0YXRlW3R5cGVdID0gZmFsc2U7XHJcbiAgICAgIH0pXHJcbiAgICAgIC8vIG1hdGNoZXIgY2FuIGp1c3QgcmV0dXJuIGJvb2xlYW4gYW5kIHRoZSBtYXRjaGVyIGNhbiByZWNlaXZlIGEgZ2VuZXJpYyBhcmd1bWVudFxyXG4gICAgICAuYWRkTWF0Y2hlcihpc0Z1bGZpbGxlZEFjdGlvbiwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB0eXBlID0gYWN0aW9uLnR5cGUucmVwbGFjZSgnL2Z1bGZpbGxlZCcsICcnKTtcclxuICAgICAgICBzdGF0ZVt0eXBlXSA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRpbmdTbGljZS5yZWR1Y2VyO1xyXG4iLCJcclxuaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgZ2V0U2Nyb2xsYmFyV2lkdGggfSBmcm9tICcuLi8uLi91dGlscy91dGlsJztcclxuaW1wb3J0IHR5cGUgeyBBcHBTdGF0ZSwgQXBwVGh1bmsgfSBmcm9tICcuLi9zdG9yZSc7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMb2dpblN0YXRlIHtcclxuICAgIGlzU2hvd0xvZ2luOiBib29sZWFuO1xyXG4gICAgc2hvd0ZvcmdldFB3ZDogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBMb2dpblN0YXRlID0ge1xyXG4gICAgaXNTaG93TG9naW46IGZhbHNlLFxyXG4gICAgc2hvd0ZvcmdldFB3ZDogZmFsc2UsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5TbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6ICdsb2dpbicsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICAvLyBUaGUgYHJlZHVjZXJzYCBmaWVsZCBsZXRzIHVzIGRlZmluZSByZWR1Y2VycyBhbmQgZ2VuZXJhdGUgYXNzb2NpYXRlZCBhY3Rpb25zXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIHNob3dMb2dpbjogKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA+PSAxMzAwKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGdldFNjcm9sbGJhcldpZHRoKCkgKyAncHgnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0YXRlLmlzU2hvd0xvZ2luID0gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhpZGVMb2dpbjogKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJzBweCc7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzU2hvd0xvZ2luID0gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93TG9naW5QYWdlOiAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLnNob3dGb3JnZXRQd2QpIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnNob3dGb3JnZXRQd2QgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNob3dGb3JnZXRQd2RQYWdlOiAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzdGF0ZS5zaG93Rm9yZ2V0UHdkKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5zaG93Rm9yZ2V0UHdkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IHNob3dMb2dpbiwgaGlkZUxvZ2luLCBzaG93TG9naW5QYWdlLCBzaG93Rm9yZ2V0UHdkUGFnZSB9ID0gbG9naW5TbGljZS5hY3Rpb25zO1xyXG5cclxuLy8gVGhlIGZ1bmN0aW9uIGJlbG93IGlzIGNhbGxlZCBhIHNlbGVjdG9yIGFuZCBhbGxvd3MgdXMgdG8gc2VsZWN0IGEgdmFsdWUgZnJvbVxyXG4vLyB0aGUgc3RhdGUuIFNlbGVjdG9ycyBjYW4gYWxzbyBiZSBkZWZpbmVkIGlubGluZSB3aGVyZSB0aGV5J3JlIHVzZWQgaW5zdGVhZCBvZlxyXG4vLyBpbiB0aGUgc2xpY2UgZmlsZS4gRm9yIGV4YW1wbGU6IGB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuY291bnRlci52YWx1ZSlgXHJcbmV4cG9ydCBjb25zdCBpc1Nob3dMb2dpbiA9IChzdGF0ZTogQXBwU3RhdGUpID0+IHN0YXRlLmxvZ2luLmlzU2hvd0xvZ2luO1xyXG5cclxuLy8gV2UgY2FuIGFsc28gd3JpdGUgc2VydmljZXMgYnkgaGFuZCwgd2hpY2ggbWF5IGNvbnRhaW4gYm90aCBzeW5jIGFuZCBhc3luYyBsb2dpYy5cclxuLy8gSGVyZSdzIGFuIGV4YW1wbGUgb2YgY29uZGl0aW9uYWxseSBkaXNwYXRjaGluZyBhY3Rpb25zIGJhc2VkIG9uIGN1cnJlbnQgc3RhdGUuXHJcbmV4cG9ydCBjb25zdCBzaG93T3JIaWRlTG9naW4gPVxyXG4gICAgKGlzU2hvdzogYm9vbGVhbik6IEFwcFRodW5rID0+XHJcbiAgICAgICAgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc05vd1Nob3cgPSBpc1Nob3dMb2dpbihnZXRTdGF0ZSgpKTtcclxuICAgICAgICAgICAgaWYgKGlzTm93U2hvdyAhPT0gaXNTaG93KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNTaG93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goc2hvd0xvZ2luKCkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChoaWRlTG9naW4oKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9naW5TbGljZS5yZWR1Y2VyO1xyXG4iLCJcclxuaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuaywgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgeyB0aHVua1dyYXBwZXIgfSBmcm9tICcuLi8uLi91dGlscy91dGlsJztcclxuaW1wb3J0IHsgQ2lyY2xlQmVhbiwgZ2V0Q2lyY2xlTGlzdCwgTGlzdFBhZ2VCZWFuIH0gZnJvbSAnLi4vc2VydmljZXMvY2lyY2xlJztcclxuaW1wb3J0IHsgZ2V0VXNlckhlbHBlckxpc3QsIEhlbHBlckl0ZW1EYXRhIH0gZnJvbSAnLi4vc2VydmljZXMvaGVscGVyJztcclxuaW1wb3J0IHsgUmVzIH0gZnJvbSAnLi4vc2VydmljZXMvaG9tZSc7XHJcbmltcG9ydCB7IGdldFVzZXJJbmZvIH0gZnJvbSAnLi4vc2VydmljZXMvbWluZSc7XHJcbmltcG9ydCB7IFVzZXJCZWFuIH0gZnJvbSAnLi4vc2VydmljZXMvdXNlcic7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hVc2VySW5mbyA9IHRodW5rV3JhcHBlcigndXNlci91c2VySW5mbycsIGdldFVzZXJJbmZvKTtcclxuZXhwb3J0IGNvbnN0IGZldGNoTWluZVJlY29tbWVuZENpcmNsZUxpc3QgPSB0aHVua1dyYXBwZXIoJ21pbmUvY2lyY2xlL3JlY29tbWVuZCcsIGdldENpcmNsZUxpc3QpO1xyXG5leHBvcnQgY29uc3QgZmV0Y2hNaW5lSGVscGVyTGlzdCA9IHRodW5rV3JhcHBlcignbWluZS9oZWxwZXInLCBnZXRVc2VySGVscGVyTGlzdCk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1pbmVTdGF0ZSB7XHJcbiAgICB1c2VySW5mbz86IFVzZXJCZWFuLFxyXG4gICAgcmVjb21tZW5kQ2lyY2xlRGF0YTogTGlzdFBhZ2VCZWFuPENpcmNsZUJlYW4+O1xyXG4gICAgbWluZUhlbHBlckRhdGE6IExpc3RQYWdlQmVhbjxIZWxwZXJJdGVtRGF0YT47XHJcbiAgICB1c2VyUGFnZVNlbGVjdEluZGV4OiBhbnlcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBNaW5lU3RhdGUgPSB7XHJcbiAgICB1c2VySW5mbzogdW5kZWZpbmVkLFxyXG4gICAgcmVjb21tZW5kQ2lyY2xlRGF0YToge1xyXG4gICAgICAgIHRvdGFsOiAwLFxyXG4gICAgICAgIGxpc3Q6IFtdXHJcbiAgICB9LFxyXG4gICAgbWluZUhlbHBlckRhdGE6IHtcclxuICAgICAgICB0b3RhbDogMCxcclxuICAgICAgICBsaXN0OiBbXVxyXG4gICAgfSxcclxuICAgIHVzZXJQYWdlU2VsZWN0SW5kZXg6IHt9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbWluZVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ21pbmUnLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBzd2l0Y2hVc2VyUGFnZVNlbGVjdEluZGV4OiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7IGtleTogc3RyaW5nLCBpbmRleDogbnVtYmVyIH0+KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB7IGtleSwgaW5kZXggfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS51c2VyUGFnZVNlbGVjdEluZGV4W2tleV0gPSBpbmRleDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgaW4gc3RhdGUudXNlclBhZ2VTZWxlY3RJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJQYWdlU2VsZWN0SW5kZXhba2V5XSA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzdGF0ZS51c2VyUGFnZVNlbGVjdEluZGV4W2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLplIDmr4FcIiwgc3RhdGUudXNlclBhZ2VTZWxlY3RJbmRleFtrZXldKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGV4dHJhUmVkdWNlcnM6IHtcclxuICAgICAgICBbZmV0Y2hVc2VySW5mby5mdWxmaWxsZWQudHlwZV06IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFJlczxVc2VyQmVhbj4+KSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJJbmZvID0gYWN0aW9uLnBheWxvYWQuZGF0YTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtmZXRjaE1pbmVSZWNvbW1lbmRDaXJjbGVMaXN0LmZ1bGZpbGxlZC50eXBlXTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UmVzPExpc3RQYWdlQmVhbjxDaXJjbGVCZWFuPj4+KSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnJlY29tbWVuZENpcmNsZURhdGEgPSBhY3Rpb24ucGF5bG9hZC5kYXRhO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW2ZldGNoTWluZUhlbHBlckxpc3QuZnVsZmlsbGVkLnR5cGVdOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxSZXM8TGlzdFBhZ2VCZWFuPEhlbHBlckl0ZW1EYXRhPj4+KSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLm1pbmVIZWxwZXJEYXRhID0gYWN0aW9uLnBheWxvYWQuZGF0YTtcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59KTtcclxuZXhwb3J0IGNvbnN0IHsgc3dpdGNoVXNlclBhZ2VTZWxlY3RJbmRleCB9ID0gbWluZVNsaWNlLmFjdGlvbnM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtaW5lU2xpY2UucmVkdWNlcjtcclxuIiwiXHJcbmltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmssIFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgcmVtb3ZlVG9rZW4sIHNhdmVUb2tlbiB9IGZyb20gJy4uLy4uL3V0aWxzL3Rva2VuX3V0aWwnO1xyXG5pbXBvcnQgeyB0aHVua1dyYXBwZXIgfSBmcm9tICcuLi8uLi91dGlscy91dGlsJztcclxuaW1wb3J0IHsgUmVzIH0gZnJvbSAnLi4vc2VydmljZXMvaG9tZSc7XHJcbmltcG9ydCB7IFVzZXJCZWFuLCBMb2dpbkJlYW4sIGF1dG9Mb2dpbiB9IGZyb20gJy4uL3NlcnZpY2VzL3VzZXInO1xyXG5pbXBvcnQgeyBBcHBUaHVuayB9IGZyb20gJy4uL3N0b3JlJztcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaEF1dG9Mb2dpbiA9IHRodW5rV3JhcHBlcigndXNlci9hdXRvTG9naW4nLCBhdXRvTG9naW4pO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VyU3RhdGUge1xyXG4gICAgaXNMb2dpbjogYm9vbGVhbixcclxuICAgIGlzRmluaXNoOiBib29sZWFuLFxyXG4gICAgdG9rZW46IHN0cmluZyxcclxuICAgIHVzZXI/OiBVc2VyQmVhbixcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBVc2VyU3RhdGUgPSB7XHJcbiAgICBpc0xvZ2luOiBmYWxzZSxcclxuICAgIGlzRmluaXNoOiBmYWxzZSxcclxuICAgIHRva2VuOiAnJyxcclxuICAgIHVzZXI6IHVuZGVmaW5lZFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6ICd1c2VyJyxcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgc2F2ZVVzZXJJbmZvOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxSZXM8TG9naW5CZWFuPj4pID0+IHtcclxuICAgICAgICAgICAgc2F2ZVVzZXJEYXRhKHN0YXRlLCBhY3Rpb24ucGF5bG9hZC5kYXRhKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyDpgIDlh7rnmbvlvZVcclxuICAgICAgICBvdXRMb2dpbjogKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6YCA5Ye655m75b2VXCIpO1xyXG5cclxuICAgICAgICAgICAgc3RhdGUuaXNMb2dpbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzdGF0ZS5pc0ZpbmlzaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzdGF0ZS50b2tlbiA9IFwiXCI7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHJlbW92ZVRva2VuKCk7XHJcbiAgICAgICAgICAgIC8vIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBleHRyYVJlZHVjZXJzOiB7XHJcbiAgICAgICAgW2ZldGNoQXV0b0xvZ2luLmZ1bGZpbGxlZC50eXBlXTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UmVzPExvZ2luQmVhbj4+KSA9PiB7XHJcbiAgICAgICAgICAgIHNhdmVVc2VyRGF0YShzdGF0ZSwgYWN0aW9uLnBheWxvYWQuZGF0YSk7XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufSk7XHJcblxyXG4vLyDkv53lrZjnlKjmiLfmlbDmja5cclxuZnVuY3Rpb24gc2F2ZVVzZXJEYXRhKHN0YXRlLCBkYXRhOiBMb2dpbkJlYW4pIHtcclxuICAgIGNvbnNvbGUubG9nKFwidG9rZW5cIiwgZGF0YS50b2tlbik7XHJcblxyXG4gICAgc3RhdGUuaXNMb2dpbiA9IHRydWU7XHJcbiAgICBjb25zdCB0b2tlbiA9IGRhdGEudG9rZW47XHJcbiAgICBzdGF0ZS50b2tlbiA9IHRva2VuO1xyXG4gICAgc2F2ZVRva2VuKHRva2VuKTtcclxuICAgIHN0YXRlLmlzRmluaXNoID0gZGF0YS5pc19maW5pc2ggPT09IDE7XHJcbiAgICBzdGF0ZS51c2VyID0gZGF0YS51c2VyO1xyXG59XHJcblxyXG5jb25zdCB7IHNhdmVVc2VySW5mbyB9ID0gdXNlclNsaWNlLmFjdGlvbnM7XHJcblxyXG5leHBvcnQgY29uc3QgeyBvdXRMb2dpbiB9ID0gdXNlclNsaWNlLmFjdGlvbnM7XHJcblxyXG5leHBvcnQgY29uc3Qgc2F2ZVVzZXIgPVxyXG4gICAgKGRhdGE6IGFueSk6IEFwcFRodW5rID0+XHJcbiAgICAgICAgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzYXZlVXNlckluZm8oZGF0YSkpXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VyU2xpY2UucmVkdWNlcjtcclxuIiwiLyoqXHJcbiAqIEBhdXRob3I6IGxlcm95XHJcbiAqIEBkYXRlOiAyMDIxLzgvMjMgMTY6MDlcclxuICogQGRlc2NyaXB0aW9u77yac3RvcmVcclxuICovXHJcbmltcG9ydCB0eXBlIHsgVGh1bmtBY3Rpb24sIEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgdHlwZSB7IFR5cGVkVXNlU2VsZWN0b3JIb29rIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciwgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcblxyXG5pbXBvcnQgbG9hZGluZ1JlZHVjZXIgZnJvbSAnLi9zbGljZXMvbG9hZGluZ1NsaWNlJztcclxuaW1wb3J0IGhvbWVSZWR1Y2VyIGZyb20gJy4vc2xpY2VzL2hvbWVTbGljZSc7XHJcbmltcG9ydCBsb2dpblJlZHVjZXIgZnJvbSAnLi9zbGljZXMvbG9naW5TbGljZSc7XHJcbmltcG9ydCB1c2VyUmVkdWNlciBmcm9tICcuL3NsaWNlcy91c2VyU2xpY2UnO1xyXG5pbXBvcnQgY29tbW9uUmVkdWNlciBmcm9tICcuL3NsaWNlcy9jb21tb25TbGljZSc7XHJcbmltcG9ydCBjaXJjbGVSZWR1Y2VyIGZyb20gJy4vc2xpY2VzL2NpcmNsZVNsaWNlJztcclxuaW1wb3J0IG1pbmVSZWR1Y2VyIGZyb20gJy4vc2xpY2VzL21pbmVTbGljZSc7XHJcblxyXG5jb25zdCBjb21iaW5lZFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgbG9hZGluZzogbG9hZGluZ1JlZHVjZXIsXHJcbiAgICBob21lOiBob21lUmVkdWNlcixcclxuICAgIGxvZ2luOiBsb2dpblJlZHVjZXIsXHJcbiAgICB1c2VyOiB1c2VyUmVkdWNlcixcclxuICAgIGNvbW1vbjogY29tbW9uUmVkdWNlcixcclxuICAgIGNpcmNsZTogY2lyY2xlUmVkdWNlcixcclxuICAgIG1pbmU6IG1pbmVSZWR1Y2VyLFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBIWURSQVRFKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dFN0YXRlID0ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSwgLy8gdXNlIHByZXZpb3VzIHN0YXRlXHJcbiAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLCAvLyBhcHBseSBkZWx0YSBmcm9tIGh5ZHJhdGlvblxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGNvbWJpbmVkUmVkdWNlcihuZXh0U3RhdGUsIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29tYmluZWRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG59O1xyXG5cclxuY29uc3QgbWFrZVN0b3JlID0gKCkgPT5cclxuICAgIGNvbmZpZ3VyZVN0b3JlKHtcclxuICAgICAgICByZWR1Y2VyLFxyXG4gICAgICAgIGRldlRvb2xzOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcclxuICAgIH0pO1xyXG5cclxuZXhwb3J0IHR5cGUgQXBwU3RvcmUgPSBSZXR1cm5UeXBlPHR5cGVvZiBtYWtlU3RvcmU+O1xyXG5leHBvcnQgdHlwZSBBcHBTdGF0ZSA9IFJldHVyblR5cGU8QXBwU3RvcmVbJ2dldFN0YXRlJ10+O1xyXG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IEFwcFN0b3JlWydkaXNwYXRjaCddO1xyXG5cclxuZXhwb3J0IHR5cGUgQXBwVGh1bms8UmV0dXJuVHlwZSA9IHZvaWQ+ID0gVGh1bmtBY3Rpb248XHJcbiAgICBSZXR1cm5UeXBlLFxyXG4gICAgQXBwU3RhdGUsXHJcbiAgICB1bmtub3duLFxyXG4gICAgQWN0aW9uPHN0cmluZz5cclxuPjtcclxuXHJcbi8vIFVzZSB0aHJvdWdob3V0IHlvdXIgYXBwIGluc3RlYWQgb2YgcGxhaW4gYHVzZURpc3BhdGNoYCBhbmQgYHVzZVNlbGVjdG9yYFxyXG5leHBvcnQgY29uc3QgdXNlQXBwRGlzcGF0Y2ggPSAoKSA9PiB1c2VEaXNwYXRjaDxBcHBEaXNwYXRjaD4oKTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBcHBTZWxlY3RvcjogVHlwZWRVc2VTZWxlY3Rvckhvb2s8QXBwU3RhdGU+ID0gdXNlU2VsZWN0b3I7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVXcmFwcGVyPEFwcFN0b3JlPihtYWtlU3RvcmUpO1xyXG4iLCJpbXBvcnQgQ3J5cHRvSlMgZnJvbSAnY3J5cHRvLWpzJztcclxuXHJcbmNvbnN0IGtleSA9IENyeXB0b0pTLmVuYy5VdGY4LnBhcnNlKCdzMzc5ZThiNTUxYmU0ZWQwJyk7XHJcbmNvbnN0IGl2ID0gQ3J5cHRvSlMuZW5jLlV0ZjgucGFyc2UoJzIwMDIwMzg1MDUwNjU1ODgnKTtcclxuXHJcbi8vIGFlcyDliqDlr4ZcclxuZXhwb3J0IGZ1bmN0aW9uIGVuY3J5cHQobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICBsZXQgc3JjcyA9IENyeXB0b0pTLmVuYy5VdGY4LnBhcnNlKG1lc3NhZ2UpO1xyXG4gICAgbGV0IGVuY3J5cHRlZCA9IENyeXB0b0pTLkFFUy5lbmNyeXB0KHNyY3MsIGtleSwge1xyXG4gICAgICAgIGl2OiBpdixcclxuICAgICAgICBtb2RlOiBDcnlwdG9KUy5tb2RlLkVDQixcclxuICAgICAgICBwYWRkaW5nOiBDcnlwdG9KUy5wYWQuUGtjczdcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGVuY3J5cHRlZC5jaXBoZXJ0ZXh0LnRvU3RyaW5nKENyeXB0b0pTLmVuYy5CYXNlNjQpO1xyXG59XHJcblxyXG4vLyBhZXMg6Kej5a+GXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWNyeXB0KHdvcmQ6IHN0cmluZykge1xyXG4gICAgbGV0IGRlY3J5cHQgPSBDcnlwdG9KUy5BRVMuZGVjcnlwdCh3b3JkLCBrZXksIHtcclxuICAgICAgICBpdjogaXYsXHJcbiAgICAgICAgbW9kZTogQ3J5cHRvSlMubW9kZS5FQ0IsXHJcbiAgICAgICAgcGFkZGluZzogQ3J5cHRvSlMucGFkLlBrY3M3XHJcbiAgICB9KTtcclxuICAgIGxldCBkZWNyeXB0ZWRTdHIgPSBkZWNyeXB0LnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcclxuICAgIHJldHVybiBkZWNyeXB0ZWRTdHIudG9TdHJpbmcoKTtcclxufSIsImltcG9ydCBheGlvcywgeyBBeGlvc1JlcXVlc3RDb25maWcgfSBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IG5vdGlmaWNhdGlvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBkZWNyeXB0LCBlbmNyeXB0IH0gZnJvbSAnLi9hZXMnO1xyXG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gJy4vdG9rZW5fdXRpbCc7XHJcblxyXG5cclxuXHJcbmNvbnN0IHFzID0gcmVxdWlyZSgncXMnKTtcclxuXHJcbmNvbnN0IGNvZGVNZXNzYWdlOiBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+ID0ge1xyXG4gICAgMjAwOiAn5pyN5Yqh5Zmo5oiQ5Yqf6L+U5Zue6K+35rGC55qE5pWw5o2u44CCJyxcclxuICAgIDIwMTogJ+aWsOW7uuaIluS/ruaUueaVsOaNruaIkOWKn+OAgicsXHJcbiAgICAyMDI6ICfkuIDkuKror7fmsYLlt7Lnu4/ov5vlhaXlkI7lj7DmjpLpmJ/vvIjlvILmraXku7vliqHvvInjgIInLFxyXG4gICAgMjA0OiAn5Yig6Zmk5pWw5o2u5oiQ5Yqf44CCJyxcclxuICAgIDQwMDogJ+WPkeWHuueahOivt+axguaciemUmeivr++8jOacjeWKoeWZqOayoeaciei/m+ihjOaWsOW7uuaIluS/ruaUueaVsOaNrueahOaTjeS9nOOAgicsXHJcbiAgICA0MDE6ICfnlKjmiLfmsqHmnInmnYPpmZDvvIjku6TniYzjgIHnlKjmiLflkI3jgIHlr4bnoIHplJnor6/vvInjgIInLFxyXG4gICAgNDAzOiAn55So5oi35b6X5Yiw5o6I5p2D77yM5L2G5piv6K6/6Zeu5piv6KKr56aB5q2i55qE44CCJyxcclxuICAgIDQwNDogJ+WPkeWHuueahOivt+axgumSiOWvueeahOaYr+S4jeWtmOWcqOeahOiusOW9le+8jOacjeWKoeWZqOayoeaciei/m+ihjOaTjeS9nOOAgicsXHJcbiAgICA0MDU6ICfor7fmsYLmlrnms5XkuI3ooqvlhYHorrjjgIInLFxyXG4gICAgNDA2OiAn6K+35rGC55qE5qC85byP5LiN5Y+v5b6X44CCJyxcclxuICAgIDQxMDogJ+ivt+axgueahOi1hOa6kOiiq+awuOS5heWIoOmZpO+8jOS4lOS4jeS8muWGjeW+l+WIsOeahOOAgicsXHJcbiAgICA0MjI6ICflvZPliJvlu7rkuIDkuKrlr7nosaHml7bvvIzlj5HnlJ/kuIDkuKrpqozor4HplJnor6/jgIInLFxyXG4gICAgNTAwOiAn5pyN5Yqh5Zmo5Y+R55Sf6ZSZ6K+v77yM6K+35qOA5p+l5pyN5Yqh5Zmo44CCJyxcclxuICAgIDUwMjogJ+e9keWFs+mUmeivr+OAgicsXHJcbiAgICA1MDM6ICfmnI3liqHkuI3lj6/nlKjvvIzmnI3liqHlmajmmoLml7bov4fovb3miJbnu7TmiqTjgIInLFxyXG4gICAgNTA0OiAn572R5YWz6LaF5pe244CCJyxcclxufTtcclxuXHJcbmNvbnN0IGFwaSA9IHtcclxuXHJcbiAgICBnZXRIZWFkZXIoKSB7XHJcbiAgICAgICAgbGV0IHRva2VuID0gZ2V0VG9rZW4oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuXCIsIHRva2VuKTtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlciA9IHtcclxuICAgICAgICAgICAgbm93X3RpbWU6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgKyAnJyxcclxuICAgICAgICAgICAgdmVyc2lvbjogJzAuMS4wJyxcclxuICAgICAgICAgICAgY2xpZW50OiAncGMnLFxyXG4gICAgICAgICAgICB0b2tlbjogdG9rZW4sXHJcbiAgICAgICAgICAgIGRpZDogXCJIVUJBTkdfUENcIixcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGFlc0hlYWRlciA9IFwibm93X3RpbWU9XCIgKyBoZWFkZXJbXCJub3dfdGltZVwiXVxyXG4gICAgICAgICAgICArIFwiJmNsaWVudD1cIiArIGhlYWRlcltcImNsaWVudFwiXVxyXG4gICAgICAgICAgICArIFwiJnZlcnNpb249XCIgKyBoZWFkZXJbXCJ2ZXJzaW9uXCJdXHJcbiAgICAgICAgICAgICsgXCImZGlkPVwiICsgaGVhZGVyW1wiZGlkXCJdXHJcbiAgICAgICAgICAgICsgXCImdG9rZW49XCIgKyBoZWFkZXJbXCJ0b2tlblwiXTtcclxuXHJcbiAgICAgICAgaGVhZGVyWydzaWduJ10gPSBlbmNyeXB0KEpTT04uc3RyaW5naWZ5KGFlc0hlYWRlcikpO1xyXG4gICAgICAgIC8vIGhlYWRlcltcIkNvbm5lY3Rpb25cIl0gPSAna2VlcC1hbGl2ZSc7XHJcbiAgICAgICAgaGVhZGVyW1wiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCJdID0gJyonO1xyXG4gICAgICAgIHJldHVybiBoZWFkZXI7XHJcbiAgICB9LFxyXG5cclxuICAgIHJlcXVlc3QoY29uZmlnPzogQXhpb3NSZXF1ZXN0Q29uZmlnKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmdldEhlYWRlcigpO1xyXG4gICAgICAgIGxldCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGJhc2VVUkw6IHByb2Nlc3MuZW52LkFQSV9IT1NULFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgICAgICB0aW1lb3V0OiAxMDAwMCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8g6K+35rGC5oum5oiq5ZmoXHJcbiAgICAgICAgaW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKFxyXG4gICAgICAgICAgICAoY29uZmlnKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyDlj5Hotbfor7fmsYLml7bvvIzlj5bmtojmjonlvZPliY3mraPlnKjov5vooYznmoTnm7jlkIzor7fmsYJcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IFtcclxuICAgICAgICAgICAgICAgICAgICBjb25maWcubWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy51cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgcXMuc3RyaW5naWZ5KGNvbmZpZy5wYXJhbXMpLFxyXG4gICAgICAgICAgICAgICAgICAgIHFzLnN0cmluZ2lmeShjb25maWcuZGF0YSksXHJcbiAgICAgICAgICAgICAgICBdLmpvaW4oJyYnKTtcclxuICAgICAgICAgICAgICAgIGlmIChwZW5kaW5nLmhhcyh1cmwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5ZyoIHBlbmRpbmcg5Lit5a2Y5Zyo5b2T5YmN6K+35rGC5qCH6K+G77yM6ZyA6KaB5Y+W5raI5b2T5YmN6K+35rGC77yM5bm25LiU56e76ZmkXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FuY2VsID0gcGVuZGluZy5nZXQodXJsKTtcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWwodXJsKTtcclxuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nLmRlbGV0ZSh1cmwpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25maWcuY2FuY2VsVG9rZW4gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWcuY2FuY2VsVG9rZW4gfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IGF4aW9zLkNhbmNlbFRva2VuKChjYW5jZWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlbmRpbmcuc2V0KHVybCwgY2FuY2VsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLor7fmsYLmi6bmiKpcIiwgY29uZmlnLnVybCwgY29uZmlnPy5oZWFkZXJzPy5bJ3Rva2VuJ10pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyDovazlj5jmlbDmja7moLzlvI9cclxuICAgICAgICAgICAgICAgIGlmIChjb25maWc/LmhlYWRlcnM/LlsnQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3QgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHIgPSBPYmplY3Qua2V5cyhkYXRhKS5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoa2V5KSA9PiBgJHtlbmNvZGVVUklDb21wb25lbnQoa2V5KX09JHtlbmNvZGVVUklDb21wb25lbnQoZGF0YVtrZXldKX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RyLmpvaW4oJyYnKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbmZpZztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSBlcnJvcjtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvclRleHQgPSBjb2RlTWVzc2FnZVtyZXNwb25zZS5zdGF0dXNdIHx8IHJlc3BvbnNlLnN0YXR1c1RleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBzdGF0dXMsIHVybCB9ID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gNDAxIHx8IHN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5lcnJvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn5pyq55m75b2V5oiW55m75b2V5bey6L+H5pyf77yM6K+36YeN5paw55m75b2V44CCJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5lcnJvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGDor7fmsYLplJnor68gJHtzdGF0dXN9OiAke3VybH1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZXJyb3JUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb24uZXJyb3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ+aCqOeahOe9kee7nOWPkeeUn+W8guW4uO+8jOaXoOazlei/nuaOpeacjeWKoeWZqCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfnvZHnu5zlvILluLgnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy8g5ZON5bqU5oum5oiq5Zmo5Y2z5byC5bi45aSE55CGXHJcbiAgICAgICAgaW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoZGF0YSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5uZWVkX2RlY3J5cHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gSlNPTi5wYXJzZShkZWNyeXB0KGRhdGEuZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5kYXRhID0gY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlKGNvbmZpZyA/IGNvbmZpZyA6IHt9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IHBlbmRpbmcgPSBuZXcgTWFwKCk7XHJcblxyXG4vLyDmuIXnqbogcGVuZGluZyDkuK3nmoTor7fmsYLvvIjlnKjot6/nlLHot7Povazml7bosIPnlKjvvIlcclxuZXhwb3J0IGNvbnN0IGNsZWFyUGVuZGluZyA9ICgpID0+IHtcclxuICAgIHBlbmRpbmcuZm9yRWFjaChmdW5jdGlvbiAoY2FuY2VsLCB1cmwpIHtcclxuICAgICAgICBjYW5jZWwodXJsKTtcclxuICAgIH0pO1xyXG4gICAgcGVuZGluZy5jbGVhcigpO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwaTsiLCJcclxuY29uc3Qgc3RhdGljRGF0YSA9IHtcclxuICAgIGNvbG9yTGlzdDogW1xyXG4gICAgICAgIFwiI2ZmODI4MlwiLFxyXG4gICAgICAgIFwiI2ZjMjk1MFwiLFxyXG4gICAgICAgIFwiI2Y0NGViZlwiLFxyXG4gICAgICAgIFwiI2QzMzNiZVwiLFxyXG4gICAgICAgIFwiI2JlMzNkM1wiLFxyXG4gICAgICAgIFwiIzk5MzNkM1wiLFxyXG4gICAgICAgIFwiIzc2MzJjM1wiLFxyXG4gICAgICAgIFwiIzYxNDlmNFwiLFxyXG4gICAgICAgIFwiIzQ2NjNjY1wiLFxyXG4gICAgICAgIFwiIzU2OWRlMFwiLFxyXG4gICAgICAgIFwiIzU2ZTBkZVwiLFxyXG4gICAgICAgIFwiIzJmY2RhNlwiLFxyXG4gICAgICAgIFwiIzJmY2RjYlwiLFxyXG4gICAgICAgIFwiIzRjZjA5MlwiLFxyXG4gICAgICAgIFwiI2I0ZjA0Y1wiLFxyXG4gICAgICAgIFwiI2UxZTczYlwiLFxyXG4gICAgICAgIFwiI2U3YzUzYlwiLFxyXG4gICAgICAgIFwiI2Y2OGY0M1wiLFxyXG4gICAgICAgIFwiI2Y2NGI0M1wiLFxyXG4gICAgICAgIFwiI2M4YWRhY1wiLFxyXG4gICAgICAgIFwiIzYwMTViNVwiLFxyXG4gICAgICAgIFwiIzNkMjQ0OVwiLFxyXG4gICAgICAgIFwiIzNkMjQ0OVwiLFxyXG4gICAgICAgIFwiI2I2NGNhM1wiLFxyXG4gICAgICAgIFwiIzZjNDY2NVwiLFxyXG4gICAgICAgIFwiIzRjNzQ3MVwiLFxyXG4gICAgICAgIFwiIzkzOWQ5Y1wiLFxyXG4gICAgXSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RhdGljRGF0YTsiLCJpbXBvcnQgY29va2llIGZyb20gJ3JlYWN0LWNvb2tpZXMnXHJcbmV4cG9ydCBjb25zdCB0b2tlbktleSA9IFwidXNlcl90b2tlblwiO1xyXG5cclxuLyoqXHJcbiAqIOS/neWtmHRva2VuXHJcbiAqIEBwYXJhbSB0b2tlbiBcclxuICovXHJcbmV4cG9ydCBjb25zdCBzYXZlVG9rZW4gPSAodG9rZW46IHN0cmluZykgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCLkv53lrZh0b2tlblwiLCB0b2tlbik7XHJcbiAgICBjb29raWUuc2F2ZSh0b2tlbktleSwgdG9rZW4pO1xyXG59XHJcblxyXG4vKipcclxuICog56e76ZmkdG9rZW5cclxuICovXHJcbmV4cG9ydCBjb25zdCByZW1vdmVUb2tlbiA9ICgpID0+IHtcclxuICAgIGNvb2tpZS5yZW1vdmUodG9rZW5LZXkpO1xyXG59XHJcblxyXG4vKipcclxuICog6I635Y+WdG9rZW5cclxuICogQHJldHVybnMgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0VG9rZW4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGNvb2tpZS5sb2FkKHRva2VuS2V5KTtcclxuICAgIGNvbnNvbGUubG9nKFwi6I635Y+WdG9rZW5cIiwgdG9rZW4pO1xyXG4gICAgcmV0dXJuIHRva2VuID09IG51bGwgPyAnJyA6IHRva2VuO1xyXG59IiwibGV0IGRvbWFpbiA9IHByb2Nlc3MuZW52LkFQSV9IT1NUIHx8ICcnO1xyXG4vLyBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuLy8gICAgIGRvbWFpbiA9IGRvbWFpbi5yZXBsYWNlKC9eaHR0cHMvaSwgJ2h0dHAnKTtcclxuLy8gfVxyXG5cclxuY29uc3QgVXJsID0ge1xyXG4gICAgc3RhdGljSG9zdDogcHJvY2Vzcy5lbnYuU1RBVElDX0hPU1QsXHJcbiAgICBkb21haW4sXHJcbiAgICBjb21taXQ6IFwiY29tbWl0XCIsIC8v5a2m5qCh5YiG57G75Z+O5biC562J5L+h5oGv6I635Y+WXHJcbiAgICBnZXRDaXJjbGVUeXBlOiBcImdldF9jaXJjbGVfdHlwZVwiLCAvL+iOt+W+l+WciOWtkOexu+WIq1xyXG5cclxuICAgIGdldENvZGU6IFwiZ2V0X2NvZGVcIiwgLy/ojrflj5bpqozor4HnoIFcclxuICAgIHB3ZExvZ2luOiBcImxvZ2luXCIsIC8v5a+G56CB55m75b2VXHJcbiAgICBjb2RlTG9naW46IFwicXVpY2tfbG9naW5cIiwgLy/pqozor4HnoIHnmbvlvZVcclxuICAgIGF1dG9Mb2dpbjogXCJhdXRvX2xvZ2luXCIsIC8v6Ieq5Yqo55m75b2VXHJcbiAgICB1c2VySW5mbzogXCJ1c2VyL2luZm9cIiwgLy/nlKjmiLfkv6Hmga9cclxuXHJcbiAgICB1c2VyQ2lyY2xlTGlzdDogXCJjaXJjbGUvdXNlcl9qb2luXCIsIC8v55So5oi35Yqg5YWl55qE5ZyI5a2QXHJcbiAgICBjaXJjbGVMaXN0OiBcImNpcmNsZS9saXN0XCIsIC8v5ZyI5a2Q5YiX6KGoXHJcblxyXG4gICAgaGVscGVyTGlzdDogXCJoZWxwZXIvbGlzdFwiLCAvL+axguWKqeWIl+ihqFxyXG4gICAgdXNlckhlbHBMaXN0OiBcImhlbHBlci91c2VyL2xpc3RcIiwgLy8g55So5oi35rGC5Yqp5YiX6KGoXHJcblxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBVcmw7XHJcbiIsImltcG9ydCB0eXBlIHsgQXN5bmNUaHVuayB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IGxvd2VyQ2FzZSB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBzdGF0aWNEYXRhIGZyb20gJy4vc3RhdGljRGF0YSc7XHJcblxyXG5leHBvcnQgY29uc3Qgd2FpdFRpbWUgPSAodGltZTogbnVtYmVyID0gMTAwKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICB9LCB0aW1lKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBuYW1lIGFjdGlvbuWQjVxyXG4gKiBAcGFyYW0gZm4g6K+35rGC5Ye95pWwXHJcbiAqIEByZXR1cm5zIHRodW5r5YyF6KO555qEYWN0aW9uXHJcbiAqIEBTIOWMheijueeahOWHveaVsOeahOexu+Wei++8jOWmguaenOS4jeW4puWPguaVsOeahOivne+8jOimgeWhq3ZvaWTvvIzkuI3nhLbnvJbor5HlmajkvJrmiqXplJlcclxuICovXHJcbmV4cG9ydCBjb25zdCB0aHVua1dyYXBwZXIgPSA8VCA9IGFueSwgUyA9IGFueT4obmFtZTogc3RyaW5nLCBmbjogKHBhcmFtcz86IGFueSkgPT4gUHJvbWlzZTxUPikgPT4ge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUFzeW5jVGh1bmsobmFtZSwgYXN5bmMgKHBhcmFtcz86IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZuKHBhcmFtcyEpO1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZm4oKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgfSkgYXMgQXN5bmNUaHVuazx1bmtub3duLCBTLCBSZWNvcmQ8c3RyaW5nLCBhbnk+PjtcclxufTtcclxuXHJcbi8qKlxyXG4gKiDojrflj5bmnIDlpJrkuKTkvY3mnInmlYjlsI/mlbBcclxuICogQHBhcmFtIGQgXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldE1heFR3b1plcm8gPSAoZDogbnVtYmVyKSA9PiB7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChkICogMTAwKSAvIDEwMFxyXG59XHJcblxyXG4vKipcclxuICog6I635Y+W5LqS5biu5pi+56S655qE6YeR6aKdXHJcbiAqIEBwYXJhbSBtaW4g5pyA5bCP6YeR6aKdXHJcbiAqIEBwYXJhbSBtYXgg5pyA5aSn6YeR6aKdXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldEhlbHBNb25leSA9IChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpID0+IHtcclxuICAgIGlmIChtYXggPT0gMCkge1xyXG4gICAgICAgIGlmIChtaW4gPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCLlvoXlrppcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gXCLvv6VcIiArIGdldE1heFR3b1plcm8obWluKSArIFwi5YWDXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gXCLvv6VcIiArIGdldE1heFR3b1plcm8obWluKSArIFwiLVwiICsgZ2V0TWF4VHdvWmVybyhtYXgpICsgXCLlhYNcIjtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOagueaNruW9k+WJjeiOt+WPluaXtumXtOWtl+espuS4slxyXG4gKiBAcGFyYW0gdGltZSDml7bpl7TmiLNcclxuICogQHBhcmFtIGRlZmF1bHRWYWx1ZSDpu5jorqTlgLxcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRUaW1lU3RyaW5nQnlOb3cgPSAodGltZTogbnVtYmVyLCBkZWZhdWx0VmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKHRpbWUgPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICB9XHJcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHRpbWUpO1xyXG4gICAgaWYgKGRhdGUgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICB9XHJcbiAgICBsZXQgbm93RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgeWVzRGF0ZSA9IG5ldyBEYXRlKG5vd0RhdGUuZ2V0VGltZSgpIC0gKDI0ICogNjAgKiA2MCAqIDEwMDApKTtcclxuICAgIGxldCB0b21vcnJvd0RhdGUgPSBuZXcgRGF0ZShub3dEYXRlLmdldFRpbWUoKSArICgyNCAqIDYwICogNjAgKiAxMDAwKSk7XHJcbiAgICBpZiAobm93RGF0ZS5nZXRGdWxsWWVhcigpID09PSBkYXRlLmdldEZ1bGxZZWFyKClcclxuICAgICAgICAmJiBub3dEYXRlLmdldE1vbnRoKCkgPT09IGRhdGUuZ2V0TW9udGgoKVxyXG4gICAgICAgICYmIG5vd0RhdGUuZ2V0RGF0ZSgpID09PSBkYXRlLmdldERhdGUoKSkge1xyXG4gICAgICAgIC8vIOWQjOS4gOWkqVxyXG4gICAgICAgIHJldHVybiBBZGRaKGRhdGUuZ2V0SG91cnMoKSkgKyBcIjpcIiArIEFkZFooZGF0ZS5nZXRNaW51dGVzKCkpO1xyXG4gICAgfSBlbHNlIGlmICh5ZXNEYXRlLmdldEZ1bGxZZWFyKCkgPT09IGRhdGUuZ2V0RnVsbFllYXIoKVxyXG4gICAgICAgICYmIHllc0RhdGUuZ2V0TW9udGgoKSA9PT0gZGF0ZS5nZXRNb250aCgpXHJcbiAgICAgICAgJiYgeWVzRGF0ZS5nZXREYXRlKCkgPT09IGRhdGUuZ2V0RGF0ZSgpKSB7XHJcbiAgICAgICAgLy8g5pio5aSpXHJcbiAgICAgICAgcmV0dXJuIFwi5pio5aSpIFwiICsgQWRkWihkYXRlLmdldEhvdXJzKCkpICsgXCI6XCIgKyBBZGRaKGRhdGUuZ2V0TWludXRlcygpKTtcclxuICAgIH0gZWxzZSBpZiAodG9tb3Jyb3dEYXRlLmdldEZ1bGxZZWFyKCkgPT09IGRhdGUuZ2V0RnVsbFllYXIoKVxyXG4gICAgICAgICYmIHRvbW9ycm93RGF0ZS5nZXRNb250aCgpID09PSBkYXRlLmdldE1vbnRoKClcclxuICAgICAgICAmJiB0b21vcnJvd0RhdGUuZ2V0RGF0ZSgpID09PSBkYXRlLmdldERhdGUoKSkge1xyXG4gICAgICAgIC8vIOaYjuWkqVxyXG4gICAgICAgIHJldHVybiBcIuaYjuWkqSBcIiArIEFkZFooZGF0ZS5nZXRIb3VycygpKSArIFwiOlwiICsgQWRkWihkYXRlLmdldE1pbnV0ZXMoKSk7XHJcbiAgICB9IGVsc2UgaWYgKG5vd0RhdGUuZ2V0RnVsbFllYXIoKSA9PT0gZGF0ZS5nZXRGdWxsWWVhcigpKSB7XHJcbiAgICAgICAgLy8g5ZCM5LiA5bm0XHJcbiAgICAgICAgcmV0dXJuIEFkZFooZGF0ZS5nZXRNb250aCgpKSArIFwi5pyIXCIgKyBBZGRaKGRhdGUuZ2V0RGF0ZSgpKSArIFwi5pelIFwiICsgQWRkWihkYXRlLmdldEhvdXJzKCkpICsgXCI6XCIgKyBBZGRaKGRhdGUuZ2V0TWludXRlcygpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCkgKyBcIuW5tFwiICsgQWRkWihkYXRlLmdldE1vbnRoKCkpICsgXCLmnIhcIiArIEFkZFooZGF0ZS5nZXREYXRlKCkpICsgXCLml6UgXCIgKyBBZGRaKGRhdGUuZ2V0SG91cnMoKSkgKyBcIjpcIiArIEFkZFooZGF0ZS5nZXRNaW51dGVzKCkpO1xyXG59XHJcblxyXG4vKipcclxuICog5pWw5a2X5bCP5LqOMTAg5YmN6Z2i6KGlMFxyXG4gKiBAcGFyYW0gbnVtIFxyXG4gKiBAcmV0dXJucyBcclxuICovXHJcbmZ1bmN0aW9uIEFkZFoobnVtOiBudW1iZXIpIHtcclxuICAgIGlmIChudW0gPCAxMCkge1xyXG4gICAgICAgIHJldHVybiBcIjBcIiArIG51bTtcclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiICsgbnVtO1xyXG59XHJcblxyXG4vKipcclxuICog5omL5py65Y+36aqM6K+BXHJcbiAqIEBwYXJhbSBwaG9uZSDmiYvmnLrlj7dcclxuICovXHJcbmV4cG9ydCBjb25zdCBjaGVja1Bob25lID0gKHBob25lOiBzdHJpbmcpID0+IHtcclxuICAgIGlmICghcGhvbmUpIHtcclxuICAgICAgICByZXR1cm4gJ+ivt+i+k+WFpeaJi+acuuWPtyc7XHJcbiAgICB9XHJcbiAgICB2YXIgbXlyZWcgPSAvXjFcXGR7MTB9JC87XHJcbiAgICBpZiAoIW15cmVnLnRlc3QocGhvbmUpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLmiYvmnLrlj7fmoLzlvI/plJnor69cIik7XHJcbiAgICAgICAgcmV0dXJuICfmiYvmnLrlj7fmoLzlvI/plJnor68nO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG59XHJcblxyXG4vKipcclxuICog6aqM6K+B56CB6aqM6K+BXHJcbiAqIEBwYXJhbSBjb2RlIFxyXG4gKiBAcmV0dXJucyBcclxuICovXHJcbmV4cG9ydCBjb25zdCBjaGVja0NvZGUgPSAoY29kZTogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAoIWNvZGUpIHtcclxuICAgICAgICByZXR1cm4gJ+ivt+WFiOiOt+WPlumqjOivgeeggSc7XHJcbiAgICB9XHJcbiAgICB2YXIgbXlyZWcgPSAvXlxcZHs0LDZ9JC87XHJcbiAgICBpZiAoIW15cmVnLnRlc3QoY29kZSkpIHtcclxuICAgICAgICByZXR1cm4gJ+ivt+i+k+WFpeato+ehrueahOmqjOivgeeggSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDpqozor4Hlr4bnoIFcclxuICogQHBhcmFtIHB3ZCBcclxuICogQHJldHVybnMgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY2hlY2tQd2QgPSAocHdkOiBzdHJpbmcpID0+IHtcclxuICAgIGlmICghcHdkKSB7XHJcbiAgICAgICAgcmV0dXJuICfor7fovpPlhaXlr4bnoIEnO1xyXG4gICAgfVxyXG4gICAgaWYgKHB3ZC5sZW5ndGggPCA2IHx8IHB3ZC5sZW5ndGggPiAyMCkge1xyXG4gICAgICAgIHJldHVybiAn6K+36L6T5YWlNi0yMOS9jeWvhueggSc7XHJcbiAgICB9XHJcbiAgICB2YXIgbXlyZWcgPSAvXig/PS4qW2EtekEtWl0pKD89LipcXGQpLns2LDIwfSQvO1xyXG4gICAgaWYgKCFteXJlZy50ZXN0KHB3ZCkpIHtcclxuICAgICAgICByZXR1cm4gJ+WvhueggeagvOW8j+mUmeivryc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDojrflj5bmu5rliqjmnaHlrr3luqZcclxuICogQHJldHVybnMgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Nyb2xsYmFyV2lkdGgoKSB7XHJcbiAgICB2YXIgb1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyksXHJcbiAgICAgICAgc3R5bGVzID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xyXG4gICAgICAgIH0sIGksIGNsaWVudFdpZHRoMSwgY2xpZW50V2lkdGgyLCBzY3JvbGxiYXJXaWR0aDtcclxuICAgIGZvciAoaSBpbiBzdHlsZXMpIG9QLnN0eWxlW2ldID0gc3R5bGVzW2ldO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvUCk7XHJcbiAgICBjbGllbnRXaWR0aDEgPSBvUC5jbGllbnRXaWR0aDtcclxuICAgIG9QLnN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnO1xyXG4gICAgY2xpZW50V2lkdGgyID0gb1AuY2xpZW50V2lkdGg7XHJcbiAgICBzY3JvbGxiYXJXaWR0aCA9IGNsaWVudFdpZHRoMSAtIGNsaWVudFdpZHRoMjtcclxuICAgIG9QLnJlbW92ZSgpO1xyXG4gICAgcmV0dXJuIHNjcm9sbGJhcldpZHRoO1xyXG59XHJcblxyXG4vLyDmoLnmja7lrZfnrKbkuLLpppblrZfnrKZhc2NpaeWAvOiOt+WPluminOiJslxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29sb3JCeVN0cmluZyhrZXk6IHN0cmluZykge1xyXG4gICAgbGV0IGNvZGUgPSBrZXkuY2hhckNvZGVBdCgwKTtcclxuICAgIHJldHVybiBzdGF0aWNEYXRhLmNvbG9yTGlzdFtjb2RlICUgc3RhdGljRGF0YS5jb2xvckxpc3QubGVuZ3RoXTtcclxufVxyXG5cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGVudEJvZHlcIjogXCJjcmVhdGVfY2lyY2xlX2NvbnRlbnRfY29udGVudEJvZHlfXzJZemJHXCIsXG5cdFwidGl0bGVDb250ZW50XCI6IFwiY3JlYXRlX2NpcmNsZV9jb250ZW50X3RpdGxlQ29udGVudF9fMnc4SktcIixcblx0XCJ0aXRsZVwiOiBcImNyZWF0ZV9jaXJjbGVfY29udGVudF90aXRsZV9fMl9ETGlcIixcblx0XCJzdWJtaXRWaWV3XCI6IFwiY3JlYXRlX2NpcmNsZV9jb250ZW50X3N1Ym1pdFZpZXdfXzJaYWdpXCIsXG5cdFwiY2lyY2xlQ29udGVudFwiOiBcImNyZWF0ZV9jaXJjbGVfY29udGVudF9jaXJjbGVDb250ZW50X18xSU5yYlwiLFxuXHRcImNpcmNsZUhlYWRcIjogXCJjcmVhdGVfY2lyY2xlX2NvbnRlbnRfY2lyY2xlSGVhZF9fMVA4aW5cIixcblx0XCJuYW1lXCI6IFwiY3JlYXRlX2NpcmNsZV9jb250ZW50X25hbWVfX0dnd0hBXCIsXG5cdFwidXBIZWFkZXJcIjogXCJjcmVhdGVfY2lyY2xlX2NvbnRlbnRfdXBIZWFkZXJfXzFGUC1SXCIsXG5cdFwiY2lyY2xlTmFtZVwiOiBcImNyZWF0ZV9jaXJjbGVfY29udGVudF9jaXJjbGVOYW1lX18xMHVhUVwiLFxuXHRcIm5hbWVJbnB1dFwiOiBcImNyZWF0ZV9jaXJjbGVfY29udGVudF9uYW1lSW5wdXRfXzFRUVZZXCIsXG5cdFwiY2lyY2xlTWVtYmVyXCI6IFwiY3JlYXRlX2NpcmNsZV9jb250ZW50X2NpcmNsZU1lbWJlcl9fMlVHWVJcIixcblx0XCJtZW1iZXJBZGRcIjogXCJjcmVhdGVfY2lyY2xlX2NvbnRlbnRfbWVtYmVyQWRkX181Ylg5U1wiLFxuXHRcImNpcmNsZUJnXCI6IFwiY3JlYXRlX2NpcmNsZV9jb250ZW50X2NpcmNsZUJnX18zWkEtZlwiLFxuXHRcImJnXCI6IFwiY3JlYXRlX2NpcmNsZV9jb250ZW50X2JnX18xV2drclwiLFxuXHRcIm1hc2tCZ1wiOiBcImNyZWF0ZV9jaXJjbGVfY29udGVudF9tYXNrQmdfXzN3OTd3XCIsXG5cdFwibWFza0JnMVwiOiBcImNyZWF0ZV9jaXJjbGVfY29udGVudF9tYXNrQmcxX19ZbXNRUlwiLFxuXHRcIm1hc2tCZzJcIjogXCJjcmVhdGVfY2lyY2xlX2NvbnRlbnRfbWFza0JnMl9fOG84NklcIixcblx0XCJyZWxvYWRCZ1wiOiBcImNyZWF0ZV9jaXJjbGVfY29udGVudF9yZWxvYWRCZ19fNkQyNGRcIixcblx0XCJjaXJjbGVEZXNjXCI6IFwiY3JlYXRlX2NpcmNsZV9jb250ZW50X2NpcmNsZURlc2NfXzJQcDNFXCIsXG5cdFwiZGVzY0lucHV0XCI6IFwiY3JlYXRlX2NpcmNsZV9jb250ZW50X2Rlc2NJbnB1dF9fM2oxZHBcIixcblx0XCJpbnB1dFwiOiBcImNyZWF0ZV9jaXJjbGVfY29udGVudF9pbnB1dF9fMzhGSWdcIixcblx0XCJkZXNjTnVtYmVyXCI6IFwiY3JlYXRlX2NpcmNsZV9jb250ZW50X2Rlc2NOdW1iZXJfXzNtWWRjXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJib2R5XCI6IFwiSG9tZV9ib2R5X18ya2UyZ1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYnV0dG9uU3R5bGVcIjogXCJhY3Rpb25fYnV0dG9uX2J1dHRvblN0eWxlX18za1BIUVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaW5wdXRDb250ZW50XCI6IFwiaW5wdXRfd2lkZ2V0X2lucHV0Q29udGVudF9fMzZPc2NcIixcblx0XCJjb250ZW50XCI6IFwiaW5wdXRfd2lkZ2V0X2NvbnRlbnRfX21MMVp1XCIsXG5cdFwiaW5wdXRcIjogXCJpbnB1dF93aWRnZXRfaW5wdXRfX0VheFJBXCIsXG5cdFwiY2xlYXJJY29uXCI6IFwiaW5wdXRfd2lkZ2V0X2NsZWFySWNvbl9fMUhBU0xcIixcblx0XCJwd2RTaG93XCI6IFwiaW5wdXRfd2lkZ2V0X3B3ZFNob3dfXzNxSVhUXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb290ZXJcIjogXCJmb290ZXJfZm9vdGVyX18xY0J5QVwiLFxuXHRcImNvbnRlbnRcIjogXCJmb290ZXJfY29udGVudF9fMnhWY2lcIixcblx0XCJkb3duXCI6IFwiZm9vdGVyX2Rvd25fXzFUZnBLXCIsXG5cdFwiZG93bk90aGVyXCI6IFwiZm9vdGVyX2Rvd25PdGhlcl9fMjNFUHVcIixcblx0XCJjb3B5XCI6IFwiZm9vdGVyX2NvcHlfXzJzbDV1XCIsXG5cdFwiY29weUxpbmtcIjogXCJmb290ZXJfY29weUxpbmtfXzE4YTFpXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkZXJcIjogXCJoZWFkZXJfaGVhZGVyX18ycTF3RlwiLFxuXHRcImNvbnRlbnRcIjogXCJoZWFkZXJfY29udGVudF9fbTM0cWFcIixcblx0XCJsb2dvXCI6IFwiaGVhZGVyX2xvZ29fX1pIa2NHXCIsXG5cdFwibWVudVwiOiBcImhlYWRlcl9tZW51X18zS3I3QlwiLFxuXHRcIm1lbnVBSG9tZVwiOiBcImhlYWRlcl9tZW51QUhvbWVfXzFKNWZpXCIsXG5cdFwibWVudUFIZWxwXCI6IFwiaGVhZGVyX21lbnVBSGVscF9fMW5xN1NcIixcblx0XCJtZW51QUR5bmFtaWNcIjogXCJoZWFkZXJfbWVudUFEeW5hbWljX18ybWl4cVwiLFxuXHRcIm1lbnVBQ2lyY2xlXCI6IFwiaGVhZGVyX21lbnVBQ2lyY2xlX18zOVJ2WFwiLFxuXHRcIm1lbnVTZWxlY3RcIjogXCJoZWFkZXJfbWVudVNlbGVjdF9fMUNKYWFcIixcblx0XCJzZWFyY2hcIjogXCJoZWFkZXJfc2VhcmNoX18xQWlTVVwiLFxuXHRcInNlYXJjaEljb25cIjogXCJoZWFkZXJfc2VhcmNoSWNvbl9fMU5sUGJcIixcblx0XCJ1c2VySW5mb1wiOiBcImhlYWRlcl91c2VySW5mb19fMi0zV2pcIixcblx0XCJ1c2VyTWVudVwiOiBcImhlYWRlcl91c2VyTWVudV9fM1BveTNcIixcblx0XCJ1c2VyQ2VudGVyXCI6IFwiaGVhZGVyX3VzZXJDZW50ZXJfXzFrdFEwXCIsXG5cdFwidXNlckNlbnRlck5hbWVcIjogXCJoZWFkZXJfdXNlckNlbnRlck5hbWVfXzJ4LU85XCIsXG5cdFwidXNlckNlbnRlckl0ZW1cIjogXCJoZWFkZXJfdXNlckNlbnRlckl0ZW1fX1JmVXB3XCIsXG5cdFwic2VuZER5bmFtaWNcIjogXCJoZWFkZXJfc2VuZER5bmFtaWNfXzFxOGtBXCIsXG5cdFwic2VuZERuYW1pY0l0ZW1cIjogXCJoZWFkZXJfc2VuZERuYW1pY0l0ZW1fXzE5cURKXCIsXG5cdFwibWVzc2FnZUhpbnRcIjogXCJoZWFkZXJfbWVzc2FnZUhpbnRfXzE5cHg1XCIsXG5cdFwiZG93bkxvZ2luXCI6IFwiaGVhZGVyX2Rvd25Mb2dpbl9fMjF2SDRcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRvVG9wXCI6IFwibGF5b3V0X3RvVG9wX18yWXg1UFwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyeXB0by1qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInFzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvb2tpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkFjdGlvbkJ1dHRvbiIsIklucHV0V2lkZ2V0Iiwic3R5bGVzIiwiQ3JlYXRlQ2lyY2xlQ29udGVudCIsImRlc2MiLCJzZXREZXNjIiwiY2lyY2xlQmciLCJzZXRDaXJjbGVCZyIsImNvbnRlbnRCb2R5IiwidGl0bGVDb250ZW50IiwidGl0bGUiLCJzdWJtaXRWaWV3IiwiY2lyY2xlQ29udGVudCIsImNpcmNsZUhlYWQiLCJuYW1lIiwidXBIZWFkZXIiLCJjaXJjbGVOYW1lIiwibmFtZUlucHV0IiwiY2lyY2xlTWVtYmVyIiwibWVtYmVycyIsIm1lbWJlckFkZCIsImJnIiwib3V0bGluZSIsIm1hc2tCZyIsIm1hc2tCZzEiLCJtYXNrQmcyIiwicmVsb2FkQmciLCJjaXJjbGVEZXNjIiwiZGVzY0lucHV0IiwiaW5wdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJkZXNjTnVtYmVyIiwibGVuZ3RoIiwib25DbGljayIsImNsYXNzTmFtZSIsImJ1dHRvblN0eWxlIiwiam9pbiIsImhpbnRUZXh0IiwiaW5wdXRUeXBlIiwid2lkdGgiLCJoZWlnaHQiLCJmb250U2l6ZSIsInRleHRDb2xvciIsIm1heExlbmd0aCIsIm9uVGV4dENoYW5nZSIsIm9uRm9jdXMiLCJ0ZXh0Iiwic2V0VGV4dCIsInB3ZFR5cGUiLCJzZXRQd2RUeXBlIiwiaGFuZGxlQ2hhbmdlIiwiY2xlYXJUZXh0Iiwic3dpdGNoUHdkU2hvd09ySGlkZSIsImlucHV0Q29udGVudCIsImNvbnRlbnQiLCJjb2xvciIsImNsZWFySWNvbiIsInZpc2liaWxpdHkiLCJwd2RTaG93IiwiZGlzcGxheSIsIlJlYWN0IiwiRm9vdGVyIiwiZm9vdGVyIiwiZG93biIsImRvd25PdGhlciIsImNvcHkiLCJjb3B5TGluayIsInVzZUFwcFNlbGVjdG9yIiwic2hvd09ySGlkZUxvZ2luIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJnZXRTY3JvbGxiYXJXaWR0aCIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJzd2l0Y2hVc2VyUGFnZVNlbGVjdEluZGV4Iiwib3V0TG9naW4iLCJIZWFkZXIiLCJwcm9wcyIsImRpc3BhdGNoIiwiaXNTaG93TG9naW4iLCJzdGF0ZSIsImxvZ2luIiwiaXNMb2dpbiIsInVzZXIiLCJyb3V0ZXIiLCJ1c2VyQ2VudGVyTGlzdCIsImlkIiwiaW1hZ2UiLCJsaW5rIiwic2VuZExpc3QiLCJpc1Nob3dVc2VyQ2VudGVyIiwic2V0U2hvd1VzZXJDZW50ZXIiLCJpc1Nob3dTZW5kRHluYW1pYyIsInNldFNob3dTZW5kRHluYW1pYyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhpZGVEaWFsb2ciLCJldiIsInNyY0VsZW1lbnQiLCJ1c2VyQ2VudGVyU2hvdyIsInNlbmRTaG93IiwidXNlckNlbnRlckl0ZW1DbGljayIsImluZGV4IiwidXNlckNlbnRlckNoYW5nZSIsImtleSIsInB1c2giLCJwYXRobmFtZSIsInNlbmREeW5hbWljSXRlbUNsaWNrIiwiY29uc29sZSIsImxvZyIsInNob3dMb2dpbiIsImhlYWRlciIsInBhZGRpbmdSaWdodCIsImxvZ28iLCJtZW51IiwicGFnZSIsIm1lbnVTZWxlY3QiLCJtZW51QUhvbWUiLCJtZW51QUhlbHAiLCJtZW51QUR5bmFtaWMiLCJtZW51QUNpcmNsZSIsInNlYXJjaCIsInNlYXJjaEljb24iLCJ1c2VySW5mbyIsInVzZXJNZW51IiwiYXZhdGFyIiwidXNlckNlbnRlciIsInVzZXJDZW50ZXJOYW1lIiwibmlja25hbWUiLCJtYXAiLCJpdGVtIiwidXNlckNlbnRlckl0ZW0iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJtZXNzYWdlSGludCIsInNlbmREeW5hbWljIiwic2VuZERuYW1pY0l0ZW0iLCJkb3duTG9naW4iLCJIZWFkIiwiTGF5b3V0IiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkcyIsImNoaWxkcmVuIiwid2luZG93IiwidG9Ub3AiLCJnZXRFbGVtZW50QnlJZCIsInBhZ2VZT2Zmc2V0Iiwic3R5bGUiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsInJpZ2h0IiwicGFnZVhPZmZzZXQiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX3JvdXRlciIsIl9yb3V0ZXIxIiwiX3VzZUludGVyc2VjdGlvbiIsIm9iaiIsIl9fZXNNb2R1bGUiLCJwcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJocmVmIiwiYXMiLCJvcHRpb25zIiwiaXNMb2NhbFVSTCIsImNhdGNoIiwiZXJyIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsImluZGV4T2YiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiRXJyb3IiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJrZXlzIiwiZm9yRWFjaCIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwidXNlUmVmIiwiY3VycmVudCIsIndhcm4iLCJwIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwicmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwiaXNWaXNpYmxlIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsInNldFJlZiIsInVzZUNhbGxiYWNrIiwiZWwiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJ0eXBlIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInBhdGgiLCJlbmRzV2l0aCIsInNsaWNlIiwicHJvY2VzcyIsImVudiIsIl9fTkVYVF9UUkFJTElOR19TTEFTSCIsInRlc3QiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJtYXgiLCJjbGVhclRpbWVvdXQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJjcmVhdGVSb3V0ZUxvYWRlciIsIl9nZXRBc3NldFBhdGhGcm9tUm91dGUiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwid2l0aEZ1dHVyZSIsImdlbmVyYXRvciIsImVudHJ5IiwiZ2V0IiwiZnV0dXJlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZXNvbHZlciIsInByb20iLCJzZXQiLCJ0aGVuIiwiaGFzUHJlZmV0Y2giLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZXMiLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwicmVsIiwiY3Jvc3NPcmlnaW4iLCJfX05FWFRfQ1JPU1NfT1JJR0lOIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhcHBlbmRTY3JpcHQiLCJzcmMiLCJzY3JpcHQiLCJyZWplY3QiLCJib2R5IiwiZGV2QnVpbGRQcm9taXNlIiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsImZpbHRlciIsInYiLCJlbnRyeXBvaW50cyIsIk1hcCIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImVycm9yIiwib2xkIiwibG9hZFJvdXRlIiwicm91dGVGaWxlc1Byb21pc2UiLCJhbGwiLCJoYXMiLCJlbnRyeXBvaW50IiwiZmluYWxseSIsImFzc2lnbiIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsImVudW1lcmFibGUiLCJfd2l0aFJvdXRlciIsImNyZWF0ZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIl9yb3V0ZXJDb250ZXh0Iiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidW5kZWZpbmVkIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZGlzcGxheU5hbWUiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaW50ZXJwb2xhdGVBcyIsIl9ub3JtYWxpemVUcmFpbGluZ1NsYXNoIiwiX3JvdXRlTG9hZGVyIiwiX2Rlbm9ybWFsaXplUGFnZVBhdGgiLCJfbm9ybWFsaXplTG9jYWxlUGF0aCIsIl9taXR0IiwiX3V0aWxzIiwiX2lzRHluYW1pYyIsIl9wYXJzZVJlbGF0aXZlVXJsIiwiX3F1ZXJ5c3RyaW5nIiwiX3Jlc29sdmVSZXdyaXRlcyIsIl9yb3V0ZU1hdGNoZXIiLCJfcm91dGVSZWdleCIsImRldGVjdERvbWFpbkxvY2FsZSIsIl9fTkVYVF9JMThOX1NVUFBPUlQiLCJiYXNlUGF0aCIsIl9fTkVYVF9ST1VURVJfQkFTRVBBVEgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJwYXRoTm9RdWVyeUhhc2giLCJub3JtYWxpemVMb2NhbGVQYXRoIiwiZGV0ZWN0ZWRMb2NhbGUiLCJkZXRlY3RlZERvbWFpbiIsImh0dHAiLCJkb21haW4iLCJwYXRoTG93ZXIiLCJ0b0xvd2VyQ2FzZSIsImxvY2FsZUxvd2VyIiwic3Vic3RyIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsInBhcmFtcyIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3VsdCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJpbmNsdWRlcyIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwidXJsUHJvdG9NYXRjaCIsIm1hdGNoIiwidXJsQXNTdHJpbmdOb1Byb3RvIiwidXJsUGFydHMiLCJzcGxpdCIsIm5vcm1hbGl6ZWRVcmwiLCJub3JtYWxpemVSZXBlYXRlZFNsYXNoZXMiLCJhc1BhdGgiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaXNEeW5hbWljUm91dGUiLCJzZWFyY2hQYXJhbXMiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IiwiaGFzaCIsInN0cmlwT3JpZ2luIiwicHJlcGFyZVVybEFzIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJwcmVwYXJlZEFzIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhZ2VzIiwiY2xlYW5QYXRobmFtZSIsImRlbm9ybWFsaXplUGFnZVBhdGgiLCJzb21lIiwicmUiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIl9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04iLCJoaXN0b3J5Iiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsIm4iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwicGF0aG5hbWUxIiwicXVlcnkxIiwiYXMxIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJDb21wb25lbnQxIiwiZXJyMSIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJzZGMiLCJzZHIiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwiSlNPTiIsInN0cmluZ2lmeSIsIngiLCJ5IiwiZ2V0SXRlbSIsInBhcnNlIiwicGFyc2VSZWxhdGl2ZVVybCIsImlzU3NyIiwiX2JwcyIsImNoYW5nZSIsIl9zaGFsbG93IiwiY29tcG9uZW50cyIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJzdWIiLCJjbGMiLCJfd3JhcEFwcCIsImlzUmVhZHkiLCJnc3NwIiwiZ2lwIiwiYXBwR2lwIiwiZ3NwIiwibG9jYXRpb24iLCJfX05FWFRfSEFTX1JFV1JJVEVTIiwiaG9zdG5hbWUiLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJzY3JvbGxSZXN0b3JhdGlvbiIsInJlbG9hZCIsImJhY2siLCJtZXRob2QiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwicHJldkxvY2FsZSIsInBhcnNlZEFzIiwibG9jYWxlUGF0aFJlc3VsdCIsImRpZE5hdmlnYXRlIiwiYXNOb0Jhc2VQYXRoIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiX2luRmxpZ2h0Um91dGUiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJsb2NhbGVDaGFuZ2UiLCJvbmx5QUhhc2hDaGFuZ2UiLCJlbWl0Iiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInJld3JpdGVzUmVzdWx0IiwibWF0Y2hlZFBhZ2UiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJlZjEiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJfc2Nyb2xsIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJsYW5nIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImVycjIiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaWRFbCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwYXRobmFtZTIiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcDEiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIkNyZWF0ZUNpcmNsZVBhZ2UiLCJhcGkiLCJVcmwiLCJnZXRDaXJjbGVMaXN0IiwicmVxdWVzdCIsImNpcmNsZUxpc3QiLCJnZXRVc2VyQ2lyY2xlTGlzdCIsInVzZXJDaXJjbGVMaXN0IiwiZ2V0VHlwZUFkZHJlc3NTY2hvb2wiLCJjb21taXQiLCJnZXRDaXJjbGVUeXBlIiwiZ2V0SGVscGVyTGlzdCIsImhlbHBlckxpc3QiLCJnZXRVc2VySGVscGVyTGlzdCIsInVzZXJIZWxwTGlzdCIsImdldFVzZXJJbmZvIiwiZ2V0UGhvbmVDb2RlIiwiZ2V0Q29kZSIsImhlYWRlcnMiLCJwd2RMb2dpbiIsImNvZGVMb2dpbiIsImF1dG9Mb2dpbiIsInRodW5rV3JhcHBlciIsImNyZWF0ZVNsaWNlIiwiZmV0Y2hBbGxDaXJjbGVMaXN0IiwiZmV0Y2hVc2VyQ2lyY2xlTGlzdCIsImluaXRpYWxTdGF0ZSIsImFsbENpcmNsZURhdGEiLCJ0b3RhbCIsImxpc3QiLCJteUNpcmNsZUxpc3QiLCJob21lU2xpY2UiLCJyZWR1Y2VycyIsImV4dHJhUmVkdWNlcnMiLCJmdWxmaWxsZWQiLCJhY3Rpb24iLCJwYXlsb2FkIiwicmVkdWNlciIsImZldGNoVHlwZUFkZHJlc3NTY2hvb2wiLCJmZXRjaENpcmNsZVR5cGUiLCJjaXJjbGVUeXBlIiwiY29tbW9uU2xpY2UiLCJpbmNyZW1lbnQiLCJhY3Rpb25zIiwiZmV0Y2hSZWNvbW1lbmRMaXN0IiwiZmV0Y2hMaWtlTGlzdCIsImZldGNoTmVhcmJ5TGlzdCIsImZldGNoSG9ydExpc3QiLCJmZXRjaFJlY29tbWVuZENpcmNsZUxpc3QiLCJpc0xvYWQiLCJyZWNvbW1lbmREYXRhIiwibGlrZURhdGEiLCJuZWFyYnlEYXRhIiwiaG9ydERhdGEiLCJyZWNvbW1lbmRDaXJjbGVEYXRhIiwiaXNQZW5kaW5nQWN0aW9uIiwiaXNSZWplY3RlZEFjdGlvbiIsImlzRnVsZmlsbGVkQWN0aW9uIiwibG9hZGluZ1NsaWNlIiwiYnVpbGRlciIsImFkZE1hdGNoZXIiLCJzaG93Rm9yZ2V0UHdkIiwibG9naW5TbGljZSIsIm92ZXJmbG93IiwiaGlkZUxvZ2luIiwic2hvd0xvZ2luUGFnZSIsInNob3dGb3JnZXRQd2RQYWdlIiwiaXNTaG93IiwiZ2V0U3RhdGUiLCJpc05vd1Nob3ciLCJmZXRjaFVzZXJJbmZvIiwiZmV0Y2hNaW5lUmVjb21tZW5kQ2lyY2xlTGlzdCIsImZldGNoTWluZUhlbHBlckxpc3QiLCJtaW5lSGVscGVyRGF0YSIsInVzZXJQYWdlU2VsZWN0SW5kZXgiLCJtaW5lU2xpY2UiLCJyZW1vdmVUb2tlbiIsInNhdmVUb2tlbiIsImZldGNoQXV0b0xvZ2luIiwiaXNGaW5pc2giLCJ0b2tlbiIsInVzZXJTbGljZSIsInNhdmVVc2VySW5mbyIsInNhdmVVc2VyRGF0YSIsImlzX2ZpbmlzaCIsInNhdmVVc2VyIiwiY29uZmlndXJlU3RvcmUiLCJ1c2VTZWxlY3RvciIsImNvbWJpbmVSZWR1Y2VycyIsImNyZWF0ZVdyYXBwZXIiLCJIWURSQVRFIiwibG9hZGluZ1JlZHVjZXIiLCJob21lUmVkdWNlciIsImxvZ2luUmVkdWNlciIsInVzZXJSZWR1Y2VyIiwiY29tbW9uUmVkdWNlciIsImNpcmNsZVJlZHVjZXIiLCJtaW5lUmVkdWNlciIsImNvbWJpbmVkUmVkdWNlciIsImxvYWRpbmciLCJob21lIiwiY29tbW9uIiwiY2lyY2xlIiwibWluZSIsIm5leHRTdGF0ZSIsIm1ha2VTdG9yZSIsImRldlRvb2xzIiwidXNlQXBwRGlzcGF0Y2giLCJDcnlwdG9KUyIsImVuYyIsIlV0ZjgiLCJpdiIsImVuY3J5cHQiLCJzcmNzIiwiZW5jcnlwdGVkIiwiQUVTIiwibW9kZSIsIkVDQiIsInBhZGRpbmciLCJwYWQiLCJQa2NzNyIsImNpcGhlcnRleHQiLCJ0b1N0cmluZyIsIkJhc2U2NCIsImRlY3J5cHQiLCJ3b3JkIiwiZGVjcnlwdGVkU3RyIiwiYXhpb3MiLCJub3RpZmljYXRpb24iLCJnZXRUb2tlbiIsInFzIiwiY29kZU1lc3NhZ2UiLCJnZXRIZWFkZXIiLCJub3dfdGltZSIsImdldFRpbWUiLCJ2ZXJzaW9uIiwiY2xpZW50IiwiZGlkIiwiYWVzSGVhZGVyIiwiY29uZmlnIiwiY3JlYXRlIiwiYmFzZVVSTCIsIkFQSV9IT1NUIiwidGltZW91dCIsImludGVyY2VwdG9ycyIsInVzZSIsInBlbmRpbmciLCJjYW5jZWxUb2tlbiIsIkNhbmNlbFRva2VuIiwidHJhbnNmb3JtUmVxdWVzdCIsInN0ciIsInJlc3BvbnNlIiwiZXJyb3JUZXh0Iiwic3RhdHVzVGV4dCIsIm5lZWRfZGVjcnlwdCIsImNsZWFyUGVuZGluZyIsImNsZWFyIiwic3RhdGljRGF0YSIsImNvbG9yTGlzdCIsImNvb2tpZSIsInRva2VuS2V5Iiwic2F2ZSIsInJlbW92ZSIsImxvYWQiLCJzdGF0aWNIb3N0IiwiU1RBVElDX0hPU1QiLCJjcmVhdGVBc3luY1RodW5rIiwid2FpdFRpbWUiLCJ0aW1lIiwiZ2V0TWF4VHdvWmVybyIsImQiLCJyb3VuZCIsImdldEhlbHBNb25leSIsIm1pbiIsImdldFRpbWVTdHJpbmdCeU5vdyIsImRlZmF1bHRWYWx1ZSIsImRhdGUiLCJub3dEYXRlIiwieWVzRGF0ZSIsInRvbW9ycm93RGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiQWRkWiIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsIm51bSIsImNoZWNrUGhvbmUiLCJwaG9uZSIsIm15cmVnIiwiY2hlY2tDb2RlIiwiY29kZSIsImNoZWNrUHdkIiwicHdkIiwib1AiLCJpIiwiY2xpZW50V2lkdGgxIiwiY2xpZW50V2lkdGgyIiwic2Nyb2xsYmFyV2lkdGgiLCJvdmVyZmxvd1kiLCJnZXRDb2xvckJ5U3RyaW5nIiwiY2hhckNvZGVBdCJdLCJzb3VyY2VSb290IjoiIn0=