exports.id = 345;
exports.ids = [345];
exports.modules = {

/***/ 310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_components_widget_left_menu_widget_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4204);
/* harmony import */ var _styles_components_widget_left_menu_widget_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_widget_left_menu_widget_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);




const LeftMenuWidget = ({
  id,
  menuList = [],
  selectIndex = 0,
  menuItemClick
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    id: id,
    className: (_styles_components_widget_left_menu_widget_module_scss__WEBPACK_IMPORTED_MODULE_1___default().contentLeftP),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: (_styles_components_widget_left_menu_widget_module_scss__WEBPACK_IMPORTED_MODULE_1___default().leftMenuListCheck),
      style: {
        top: 5 + selectIndex * 40 + "px"
      }
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
      className: (_styles_components_widget_left_menu_widget_module_scss__WEBPACK_IMPORTED_MODULE_1___default().leftMenuList),
      children: menuList.map((item, index) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
          onClick: () => {
            menuItemClick && menuItemClick(index);
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: (_styles_components_widget_left_menu_widget_module_scss__WEBPACK_IMPORTED_MODULE_1___default().menuItem),
            style: {
              backgroundImage: 'url(' + item.image + ')'
            },
            children: item.title
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: (_styles_components_widget_left_menu_widget_module_scss__WEBPACK_IMPORTED_MODULE_1___default().message),
            style: {
              visibility: item.num <= 0 ? "hidden" : "visible"
            },
            children: item.num
          })]
        }, item.id);
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeftMenuWidget);

/***/ }),

/***/ 2799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_components_widget_left_user_card_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1597);
/* harmony import */ var _styles_components_widget_left_user_card_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_widget_left_user_card_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9341);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_slices_loginSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5014);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const LeftUserCard = ({
  descMaxLine = 4,
  className
}) => {
  const dispatch = (0,_store_store__WEBPACK_IMPORTED_MODULE_0__/* .useAppDispatch */ .TL)();
  const {
    isLogin,
    user
  } = (0,_store_store__WEBPACK_IMPORTED_MODULE_0__/* .useAppSelector */ .CG)(state => state.user);
  const {
    0: isSign,
    1: setSign
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const doSign = () => {
    setSign(!isSign);
  };

  const doLogin = () => {
    dispatch((0,_store_slices_loginSlice__WEBPACK_IMPORTED_MODULE_2__/* .showOrHideLogin */ .Hu)(true));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: [(_styles_components_widget_left_user_card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().menuLeft), className].join(" "),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: (_styles_components_widget_left_user_card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().signUser),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
        className: (_styles_components_widget_left_user_card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().userHeader),
        src: user !== null && user !== void 0 && user.avatar ? user === null || user === void 0 ? void 0 : user.avatar : "/static/images/default_user.png",
        alt: ""
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
        children: isLogin && user !== null && user !== void 0 && user.nickname ? user === null || user === void 0 ? void 0 : user.nickname : '游客身份'
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
      className: (_styles_components_widget_left_user_card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().userDesc),
      style: {
        WebkitLineClamp: descMaxLine,
        maxLines: descMaxLine
      },
      children: isLogin ? user === null || user === void 0 ? void 0 : user.description : ""
    }), isLogin ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
      className: (_styles_components_widget_left_user_card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().signBtn),
      style: {
        backgroundColor: isSign ? "#F1F2F3" : "#d9e8fc",
        color: isSign ? "#BABDC3" : "#3388FF"
      },
      onClick: doSign,
      children: isSign ? '已签到' : '签到'
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
      className: (_styles_components_widget_left_user_card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loginBtn),
      onClick: doLogin,
      children: "\u767B\u5F55"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeftUserCard);

/***/ }),

/***/ 6397:
/***/ ((module) => {

// Exports
module.exports = {
	"body": "Home_body__2ke2g"
};


/***/ }),

/***/ 4204:
/***/ ((module) => {

// Exports
module.exports = {
	"contentLeftP": "left_menu_widget_contentLeftP__1kHwd",
	"leftMenuList": "left_menu_widget_leftMenuList___Hd5i",
	"menuItem": "left_menu_widget_menuItem__2C9Hr",
	"message": "left_menu_widget_message__1SCI6",
	"leftMenuListCheck": "left_menu_widget_leftMenuListCheck__3tI8Y"
};


/***/ }),

/***/ 1597:
/***/ ((module) => {

// Exports
module.exports = {
	"menuLeft": "left_user_card_menuLeft__3JWkA",
	"signUser": "left_user_card_signUser__2nDVV",
	"userHeader": "left_user_card_userHeader__32bfX",
	"userDesc": "left_user_card_userDesc__3S2au",
	"signBtn": "left_user_card_signBtn__CLAf2",
	"loginBtn": "left_user_card_loginBtn__16x19"
};


/***/ })

};
;