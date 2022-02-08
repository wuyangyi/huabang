exports.id = 511;
exports.ids = [511];
exports.modules = {

/***/ 2013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ recommend_circle_RecommendCircle)
});

// EXTERNAL MODULE: ./components/circle/recommend_circle/recommend_circle.module.scss
var recommend_circle_module = __webpack_require__(2318);
var recommend_circle_module_default = /*#__PURE__*/__webpack_require__.n(recommend_circle_module);
// EXTERNAL MODULE: ./components/module_title/ModuleTitle.tsx
var ModuleTitle = __webpack_require__(445);
// EXTERNAL MODULE: ./components/item/circle/circle_item.module.scss
var circle_item_module = __webpack_require__(9815);
var circle_item_module_default = /*#__PURE__*/__webpack_require__.n(circle_item_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/item/circle/CircleItem.tsx




const CircleItem = props => {
  function getFollow(type) {
    if (type == -1) {
      return "已申请";
    } else if (type == 1 || type == 2) {
      return "已加入";
    } else if (type == 3) {
      return "圈主";
    }

    return "申请";
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (circle_item_module_default()).circleItem,
    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
      className: (circle_item_module_default()).logo,
      src: props.avatar == null ? "http://wyyhubang.oss-cn-chengdu.aliyuncs.com/default/default_group.png" : props.avatar,
      width: "35px",
      height: "35px",
      alt: ""
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (circle_item_module_default()).circleContent,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (circle_item_module_default()).centerContent,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
          className: (circle_item_module_default()).circleName,
          children: props.circle_name
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (circle_item_module_default()).desc,
          children: props.description == null ? "群主很神秘，什么都没写~" : props.description
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: (circle_item_module_default()).follow,
        style: {
          color: props.join_type == 0 ? '#3388FF' : '#CBCFDD',
          borderColor: props.join_type == 0 ? '#3388FF' : '#CBCFDD'
        },
        children: getFollow(props.join_type)
      })]
    })]
  });
};

/* harmony default export */ const circle_CircleItem = (CircleItem);
;// CONCATENATED MODULE: ./components/circle/recommend_circle/RecommendCircle.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const RecommendCircle = recommendCircle => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (recommend_circle_module_default()).recommendCircle,
    children: [/*#__PURE__*/jsx_runtime_.jsx(ModuleTitle/* default */.Z, {
      title: "\u63A8\u8350\u5708\u5B50",
      link: "/circle"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (recommend_circle_module_default()).recommendCircleContent,
      children: recommendCircle.list.map((item, index) => {
        return /*#__PURE__*/jsx_runtime_.jsx(circle_CircleItem, _objectSpread({}, item), item.id);
      })
    })]
  });
};

/* harmony default export */ const recommend_circle_RecommendCircle = (RecommendCircle);

/***/ }),

/***/ 2931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper_item_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7871);
/* harmony import */ var _helper_item_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_helper_item_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5505);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);






const HelperItem = props => {
  function getHelpTime(start, end) {
    let startTime = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__/* .getTimeStringByNow */ .Rd)(start, "不限");
    let endTime = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__/* .getTimeStringByNow */ .Rd)(end, "不限");

    if (startTime === "不限" && endTime === "不限") {
      return "不限";
    }

    return startTime + " - " + endTime;
  }

  function getPeopleNumber(num) {
    if (num <= 0) {
      return "不限";
    }

    return num + "人";
  }

  function getAddress(province, city, area) {
    if (province == null || province.id <= 0) {
      return "不限";
    } else {
      if (city == null || city.id <= 0) {
        return province.name;
      } else {
        if (area == null || area.id <= 0) {
          return city.name;
        } else {
          return city.name + " " + area.name;
        }
      }
    }
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: (_helper_item_module_scss__WEBPACK_IMPORTED_MODULE_3___default().itemContent),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: (_helper_item_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h4", {
        className: (_helper_item_module_scss__WEBPACK_IMPORTED_MODULE_3___default().helpName),
        children: props.type.child.name + '-' + props.title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
        className: (_helper_item_module_scss__WEBPACK_IMPORTED_MODULE_3___default().helpMoney),
        children: (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__/* .getHelpMoney */ .Im)(props.lowest_price, props.highest_price)
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: (_helper_item_module_scss__WEBPACK_IMPORTED_MODULE_3___default().helpTime),
      children: ["时间：" + getHelpTime(props.start_time, props.end_time), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
        className: (_helper_item_module_scss__WEBPACK_IMPORTED_MODULE_3___default().peopleNumber),
        children: "人数：" + getPeopleNumber(props.people_number)
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
        className: (_helper_item_module_scss__WEBPACK_IMPORTED_MODULE_3___default().hotImg),
        src: "/static/images/ico_zhengming.png",
        width: "20px",
        style: {
          display: props.finish_prove ? "block" : "none"
        },
        alt: ""
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
        className: (_helper_item_module_scss__WEBPACK_IMPORTED_MODULE_3___default().hotImg),
        src: "/static/images/ico_anxious.png",
        width: "20px",
        style: {
          display: props.is_urgent ? "block" : "none"
        },
        alt: ""
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: (_helper_item_module_scss__WEBPACK_IMPORTED_MODULE_3___default().helpUser),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
        href: "/user/" + props.sender.id,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
          className: (_helper_item_module_scss__WEBPACK_IMPORTED_MODULE_3___default().userHead),
          src: props.sender.avatar == null ? "http://wyyhubang.oss-cn-chengdu.aliyuncs.com/default/default_user.png" : props.sender.avatar,
          height: "50px",
          width: "50px",
          alt: ""
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
        className: (_helper_item_module_scss__WEBPACK_IMPORTED_MODULE_3___default().userName),
        children: props.sender.alias == null ? props.sender.nickname : props.sender.alias
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
        className: (_helper_item_module_scss__WEBPACK_IMPORTED_MODULE_3___default().address),
        children: getAddress(props.province, props.city, props.area)
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HelperItem);

/***/ }),

/***/ 445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _module_title_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8081);
/* harmony import */ var _module_title_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_module_title_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);





const ModuleTitle = props => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: (_module_title_module_scss__WEBPACK_IMPORTED_MODULE_2___default().titleContent),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: (_module_title_module_scss__WEBPACK_IMPORTED_MODULE_2___default().leftBorder)
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
      className: (_module_title_module_scss__WEBPACK_IMPORTED_MODULE_2___default().title),
      style: {
        backgroundImage: props.image == null ? "" : "url(" + props.image + ")"
      },
      children: props.title
    }), props.link && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
      className: (_module_title_module_scss__WEBPACK_IMPORTED_MODULE_2___default().more),
      href: props.link,
      children: "\u66F4\u591A"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModuleTitle);

/***/ }),

/***/ 2318:
/***/ ((module) => {

// Exports
module.exports = {
	"recommendCircle": "recommend_circle_recommendCircle__2PhBp",
	"recommendCircleContent": "recommend_circle_recommendCircleContent__18uTm"
};


/***/ }),

/***/ 7871:
/***/ ((module) => {

// Exports
module.exports = {
	"itemContent": "helper_item_itemContent__PbK3I",
	"title": "helper_item_title__3XV8c",
	"helpName": "helper_item_helpName__TchcE",
	"helpMoney": "helper_item_helpMoney__1naIL",
	"helpTime": "helper_item_helpTime__2Pq38",
	"peopleNumber": "helper_item_peopleNumber__1MZFo",
	"hotImg": "helper_item_hotImg__3QTpn",
	"helpUser": "helper_item_helpUser__1rEFv",
	"userHead": "helper_item_userHead__30Jb9",
	"userName": "helper_item_userName__10Adm",
	"address": "helper_item_address__3skLf"
};


/***/ }),

/***/ 9815:
/***/ ((module) => {

// Exports
module.exports = {
	"circleItem": "circle_item_circleItem__3oAu-",
	"logo": "circle_item_logo__ILXf6",
	"circleContent": "circle_item_circleContent__1g127",
	"centerContent": "circle_item_centerContent__1SDTn",
	"circleName": "circle_item_circleName__1OqEu",
	"desc": "circle_item_desc__2-EHI",
	"follow": "circle_item_follow__2-tQH"
};


/***/ }),

/***/ 8081:
/***/ ((module) => {

// Exports
module.exports = {
	"titleContent": "module_title_titleContent__qLbTG",
	"leftBorder": "module_title_leftBorder__f0ECY",
	"title": "module_title_title__3RlVt",
	"more": "module_title_more__1QpXy"
};


/***/ })

};
;