exports.id = 950;
exports.ids = [950];
exports.modules = {

/***/ 962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_components_widget_action_button_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6351);
/* harmony import */ var _styles_components_widget_action_button_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_widget_action_button_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



/**
 * 按钮  className设置了背景色后，:hover和:active得自定义
 */
const ActionButton = ({
  onClick,
  value = "确 定",
  className = ''
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
    className: [(_styles_components_widget_action_button_module_scss__WEBPACK_IMPORTED_MODULE_1___default().buttonStyle), className].join(' '),
    onClick: onClick,
    children: value
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionButton);

/***/ }),

/***/ 407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_widget_input_widget_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2740);
/* harmony import */ var _styles_components_widget_input_widget_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_widget_input_widget_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);





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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: (_styles_components_widget_input_widget_module_scss__WEBPACK_IMPORTED_MODULE_2___default().inputContent),
    style: {
      width: width,
      height: height
    },
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: (_styles_components_widget_input_widget_module_scss__WEBPACK_IMPORTED_MODULE_2___default().content),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("input", {
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
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
      className: (_styles_components_widget_input_widget_module_scss__WEBPACK_IMPORTED_MODULE_2___default().clearIcon),
      src: "/static/images/ico_clear.png",
      width: "20px",
      height: "20px",
      style: {
        visibility: text === '' ? 'hidden' : 'visible'
      },
      onClick: clearText,
      alt: ""
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
      className: (_styles_components_widget_input_widget_module_scss__WEBPACK_IMPORTED_MODULE_2___default().pwdShow),
      src: pwdType === "password" ? "/static/images/ico_pwd_hide.png" : "/static/images/ico_pwd_show.png",
      width: "20px",
      height: "15px",
      style: {
        display: inputType === 'password' ? "block" : "none"
      },
      onClick: switchPwdShowOrHide,
      alt: ""
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputWidget);

/***/ }),

/***/ 6351:
/***/ ((module) => {

// Exports
module.exports = {
	"buttonStyle": "action_button_buttonStyle__3kPHQ"
};


/***/ }),

/***/ 2740:
/***/ ((module) => {

// Exports
module.exports = {
	"inputContent": "input_widget_inputContent__36Osc",
	"content": "input_widget_content__mL1Zu",
	"input": "input_widget_input__EaxRA",
	"clearIcon": "input_widget_clearIcon__1HASL",
	"pwdShow": "input_widget_pwdShow__3qIXT"
};


/***/ })

};
;