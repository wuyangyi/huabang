exports.id = 608;
exports.ids = [608];
exports.modules = {

/***/ 9608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_slices_circleSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4746);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9341);
/* harmony import */ var _my_circle_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8971);
/* harmony import */ var _my_circle_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_my_circle_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _item_circle_BigCircleItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(373);
/* harmony import */ var _widget_EmptyView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4199);
/* harmony import */ var _widget_MyPagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(135);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const MyCircle = ({
  id,
  showTitle
}) => {
  const {
    myCircleList
  } = (0,_store_store__WEBPACK_IMPORTED_MODULE_2__/* .useAppSelector */ .CG)(state => state.circle);
  const dispatch = (0,_store_store__WEBPACK_IMPORTED_MODULE_2__/* .useAppDispatch */ .TL)();
  const {
    0: currentPage,
    1: setCurrentPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1); // useEffect(() => {
  //     loadMyCircle(1, 20);
  // }, [])

  function loadMyCircle(page, limit) {
    if (id) {
      dispatch((0,_store_slices_circleSlice__WEBPACK_IMPORTED_MODULE_1__/* .fetchUserCircleList */ .Uy)({
        page: page,
        limit: limit,
        id: id
      }));
    }
  }

  const pageChange = (page, pageSize) => {
    setCurrentPage(page);
    loadMyCircle(page, pageSize);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    children: [showTitle && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      className: (_my_circle_module_scss__WEBPACK_IMPORTED_MODULE_7___default().content_title),
      children: "\u6211\u7684\u5E2E\u5708"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: (_my_circle_module_scss__WEBPACK_IMPORTED_MODULE_7___default().my_cirlce_content),
      children: [myCircleList.list.length > 0 ? myCircleList.list.map(item => {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_item_circle_BigCircleItem__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, _objectSpread({}, item), item.id);
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_widget_EmptyView__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
        type: 0
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: (_my_circle_module_scss__WEBPACK_IMPORTED_MODULE_7___default().no_more),
        style: {
          display: myCircleList.list.length > 0 && myCircleList.list.length < 20 ? 'block' : 'none'
        },
        children: "\u6CA1\u6709\u66F4\u591A\u4E86~"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_widget_MyPagination__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
      total: myCircleList.total,
      pageSize: 20,
      showSizeChanger: false,
      current: currentPage,
      onChange: pageChange
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyCircle);

/***/ }),

/***/ 373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ circle_BigCircleItem)
});

// EXTERNAL MODULE: ./components/item/circle/big_circle_item.module.scss
var big_circle_item_module = __webpack_require__(2798);
var big_circle_item_module_default = /*#__PURE__*/__webpack_require__.n(big_circle_item_module);
// EXTERNAL MODULE: ./utils/util.ts + 1 modules
var util = __webpack_require__(5505);
// EXTERNAL MODULE: ./components/item/circle/tag/circle_tag_item.module.scss
var circle_tag_item_module = __webpack_require__(485);
var circle_tag_item_module_default = /*#__PURE__*/__webpack_require__.n(circle_tag_item_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/item/circle/tag/CircleTagItem.tsx




const CircleTagItem = ({
  title
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (circle_tag_item_module_default()).circle_tag,
    style: {
      backgroundColor: (0,util/* getColorByString */.dH)(title) + 'BB'
    },
    children: title
  });
};

/* harmony default export */ const tag_CircleTagItem = (CircleTagItem);
;// CONCATENATED MODULE: ./components/item/circle/BigCircleItem.tsx





const BigCircleItem = props => {
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

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (big_circle_item_module_default()).circleItem,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (big_circle_item_module_default()).lineContent,
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        className: (big_circle_item_module_default()).logo,
        src: props.avatar == null ? "http://wyyhubang.oss-cn-chengdu.aliyuncs.com/default/default_group.png" : props.avatar,
        width: "80px",
        height: "80px",
        alt: ""
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (big_circle_item_module_default()).circleContent,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (big_circle_item_module_default()).centerContent,
          children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
            className: (big_circle_item_module_default()).circleName,
            children: props.circle_name
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (big_circle_item_module_default()).tags,
            children: props.circle_tag.split(',').map((item, index) => {
              return /*#__PURE__*/jsx_runtime_.jsx(tag_CircleTagItem, {
                title: item
              }, index);
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (big_circle_item_module_default()).desc,
            children: props.description == null ? "群主很神秘，什么都没写~" : props.description
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (big_circle_item_module_default()).follow,
          style: {
            color: props.join_type == 0 ? '#3388FF' : '#CBCFDD',
            borderColor: props.join_type == 0 ? '#3388FF' : '#CBCFDD'
          },
          children: getFollow(props.join_type)
        })]
      })]
    })
  });
};

/* harmony default export */ const circle_BigCircleItem = (BigCircleItem);

/***/ }),

/***/ 4199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_components_widget_empty_view_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3706);
/* harmony import */ var _styles_components_widget_empty_view_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_widget_empty_view_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



const EmptyView = ({
  type = 0
}) => {
  function getErrorImg() {
    let img = "";

    if (type == 0) {
      //无内容
      img = "/static/images/ico_empty.png";
    }

    return img;
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: (_styles_components_widget_empty_view_module_scss__WEBPACK_IMPORTED_MODULE_1___default().empty_content),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
      className: (_styles_components_widget_empty_view_module_scss__WEBPACK_IMPORTED_MODULE_1___default().image),
      src: getErrorImg(),
      width: "50%",
      alt: ""
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmptyView);

/***/ }),

/***/ 135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(953);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_widget_my_pagination_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8504);
/* harmony import */ var _styles_components_widget_my_pagination_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_widget_my_pagination_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const MyPagination = props => {
  function getItemRender(current, type, originalElement) {
    if (type === 'prev') {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
        children: "\u4E0A\u4E00\u9875"
      });
    } else if (type === 'next') {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
        children: "\u4E0B\u4E00\u9875"
      });
    }

    return originalElement;
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
    className: (_styles_components_widget_my_pagination_module_scss__WEBPACK_IMPORTED_MODULE_2___default().pagination),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Pagination, _objectSpread({}, props))
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyPagination);

/***/ }),

/***/ 8971:
/***/ ((module) => {

// Exports
module.exports = {
	"content_title": "my_circle_content_title__3OA0x",
	"my_cirlce_content": "my_circle_my_cirlce_content__2CPrn",
	"no_more": "my_circle_no_more__1cM0k"
};


/***/ }),

/***/ 2798:
/***/ ((module) => {

// Exports
module.exports = {
	"circleItem": "big_circle_item_circleItem__1znGY",
	"lineContent": "big_circle_item_lineContent__3jcla",
	"logo": "big_circle_item_logo__3lWC0",
	"circleContent": "big_circle_item_circleContent__16MbT",
	"centerContent": "big_circle_item_centerContent__2LUPB",
	"circleName": "big_circle_item_circleName__1u9h4",
	"tags": "big_circle_item_tags__3pHZh",
	"desc": "big_circle_item_desc__1r_3d",
	"follow": "big_circle_item_follow__2EPoD"
};


/***/ }),

/***/ 485:
/***/ ((module) => {

// Exports
module.exports = {
	"circle_tag": "circle_tag_item_circle_tag__33_Kg"
};


/***/ }),

/***/ 3706:
/***/ ((module) => {

// Exports
module.exports = {
	"empty_content": "empty_view_empty_content__1sYxi"
};


/***/ }),

/***/ 8504:
/***/ ((module) => {

// Exports
module.exports = {
	"pagination": "my_pagination_pagination__3e7L-"
};


/***/ })

};
;