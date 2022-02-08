(() => {
var exports = {};
exports.id = "pages/user/[id]";
exports.ids = ["pages/user/[id]"];
exports.modules = {

/***/ "./components/circle/list_content/my_circle/MyCircle.tsx":
/*!***************************************************************!*\
  !*** ./components/circle/list_content/my_circle/MyCircle.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_slices_circleSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../store/slices/circleSlice */ "./store/slices/circleSlice.ts");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store/store */ "./store/store.ts");
/* harmony import */ var _my_circle_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my_circle.module.scss */ "./components/circle/list_content/my_circle/my_circle.module.scss");
/* harmony import */ var _my_circle_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_my_circle_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _item_circle_BigCircleItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../item/circle/BigCircleItem */ "./components/item/circle/BigCircleItem.tsx");
/* harmony import */ var _widget_EmptyView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../widget/EmptyView */ "./components/widget/EmptyView.tsx");
/* harmony import */ var _widget_MyPagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../widget/MyPagination */ "./components/widget/MyPagination.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\components\\circle\\list_content\\my_circle\\MyCircle.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const MyCircle = ({
  id,
  showTitle
}) => {
  const {
    myCircleList
  } = (0,_store_store__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(state => state.circle);
  const dispatch = (0,_store_store__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();
  const {
    0: currentPage,
    1: setCurrentPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1); // useEffect(() => {
  //     loadMyCircle(1, 20);
  // }, [])

  function loadMyCircle(page, limit) {
    if (id) {
      dispatch((0,_store_slices_circleSlice__WEBPACK_IMPORTED_MODULE_1__.fetchUserCircleList)({
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    children: [showTitle && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: (_my_circle_module_scss__WEBPACK_IMPORTED_MODULE_7___default().content_title),
      children: "\u6211\u7684\u5E2E\u5708"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 26
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: (_my_circle_module_scss__WEBPACK_IMPORTED_MODULE_7___default().my_cirlce_content),
      children: [myCircleList.list.length > 0 ? myCircleList.list.map(item => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_item_circle_BigCircleItem__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread({}, item), item.id, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 32
        }, undefined);
      }) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_widget_EmptyView__WEBPACK_IMPORTED_MODULE_4__.default, {
        type: 0
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_my_circle_module_scss__WEBPACK_IMPORTED_MODULE_7___default().no_more),
        style: {
          display: myCircleList.list.length > 0 && myCircleList.list.length < 20 ? 'block' : 'none'
        },
        children: "\u6CA1\u6709\u66F4\u591A\u4E86~"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_widget_MyPagination__WEBPACK_IMPORTED_MODULE_5__.default, {
      total: myCircleList.total,
      pageSize: 20,
      showSizeChanger: false,
      current: currentPage,
      onChange: pageChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyCircle);

/***/ }),

/***/ "./components/circle/recommend_circle/RecommendCircle.tsx":
/*!****************************************************************!*\
  !*** ./components/circle/recommend_circle/RecommendCircle.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _recommend_circle_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recommend_circle.module.scss */ "./components/circle/recommend_circle/recommend_circle.module.scss");
/* harmony import */ var _recommend_circle_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_recommend_circle_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _module_title_ModuleTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../module_title/ModuleTitle */ "./components/module_title/ModuleTitle.tsx");
/* harmony import */ var _item_circle_CircleItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../item/circle/CircleItem */ "./components/item/circle/CircleItem.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\components\\circle\\recommend_circle\\RecommendCircle.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const RecommendCircle = recommendCircle => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_recommend_circle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().recommendCircle),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_module_title_ModuleTitle__WEBPACK_IMPORTED_MODULE_0__.default, {
      title: "\u63A8\u8350\u5708\u5B50",
      link: "/circle"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_recommend_circle_module_scss__WEBPACK_IMPORTED_MODULE_3___default().recommendCircleContent),
      children: recommendCircle.list.map((item, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_item_circle_CircleItem__WEBPACK_IMPORTED_MODULE_1__.default, _objectSpread({}, item), item.id, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 28
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecommendCircle);

/***/ }),

/***/ "./components/home/helperItem/HelperItem.tsx":
/*!***************************************************!*\
  !*** ./components/home/helperItem/HelperItem.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper_item_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper_item.module.scss */ "./components/home/helperItem/helper_item.module.scss");
/* harmony import */ var _helper_item_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_helper_item_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/util */ "./utils/util.ts");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\components\\home\\helperItem\\HelperItem.tsx";





const HelperItem = props => {
  function getHelpTime(start, end) {
    let startTime = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.getTimeStringByNow)(start, "不限");
    let endTime = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.getTimeStringByNow)(end, "不限");

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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_helper_item_module_scss__WEBPACK_IMPORTED_MODULE_3___default().itemContent),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_helper_item_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
        className: (_helper_item_module_scss__WEBPACK_IMPORTED_MODULE_3___default().helpName),
        children: props.type.child.name + '-' + props.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
        className: (_helper_item_module_scss__WEBPACK_IMPORTED_MODULE_3___default().helpMoney),
        children: (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.getHelpMoney)(props.lowest_price, props.highest_price)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_helper_item_module_scss__WEBPACK_IMPORTED_MODULE_3___default().helpTime),
      children: ["时间：" + getHelpTime(props.start_time, props.end_time), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
        className: (_helper_item_module_scss__WEBPACK_IMPORTED_MODULE_3___default().peopleNumber),
        children: "人数：" + getPeopleNumber(props.people_number)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
        className: (_helper_item_module_scss__WEBPACK_IMPORTED_MODULE_3___default().hotImg),
        src: "/static/images/ico_zhengming.png",
        width: "20px",
        style: {
          display: props.finish_prove ? "block" : "none"
        },
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
        className: (_helper_item_module_scss__WEBPACK_IMPORTED_MODULE_3___default().hotImg),
        src: "/static/images/ico_anxious.png",
        width: "20px",
        style: {
          display: props.is_urgent ? "block" : "none"
        },
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_helper_item_module_scss__WEBPACK_IMPORTED_MODULE_3___default().helpUser),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/user/" + props.sender.id,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          className: (_helper_item_module_scss__WEBPACK_IMPORTED_MODULE_3___default().userHead),
          src: props.sender.avatar == null ? "http://wyyhubang.oss-cn-chengdu.aliyuncs.com/default/default_user.png" : props.sender.avatar,
          height: "50px",
          width: "50px",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
        className: (_helper_item_module_scss__WEBPACK_IMPORTED_MODULE_3___default().userName),
        children: props.sender.alias == null ? props.sender.nickname : props.sender.alias
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
        className: (_helper_item_module_scss__WEBPACK_IMPORTED_MODULE_3___default().address),
        children: getAddress(props.province, props.city, props.area)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HelperItem);

/***/ }),

/***/ "./components/item/circle/BigCircleItem.tsx":
/*!**************************************************!*\
  !*** ./components/item/circle/BigCircleItem.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _big_circle_item_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./big_circle_item.module.scss */ "./components/item/circle/big_circle_item.module.scss");
/* harmony import */ var _big_circle_item_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_big_circle_item_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tag_CircleTagItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag/CircleTagItem */ "./components/item/circle/tag/CircleTagItem.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\components\\item\\circle\\BigCircleItem.tsx";




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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_big_circle_item_module_scss__WEBPACK_IMPORTED_MODULE_2___default().circleItem),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_big_circle_item_module_scss__WEBPACK_IMPORTED_MODULE_2___default().lineContent),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
        className: (_big_circle_item_module_scss__WEBPACK_IMPORTED_MODULE_2___default().logo),
        src: props.avatar == null ? "http://wyyhubang.oss-cn-chengdu.aliyuncs.com/default/default_group.png" : props.avatar,
        width: "80px",
        height: "80px",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_big_circle_item_module_scss__WEBPACK_IMPORTED_MODULE_2___default().circleContent),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_big_circle_item_module_scss__WEBPACK_IMPORTED_MODULE_2___default().centerContent),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
            className: (_big_circle_item_module_scss__WEBPACK_IMPORTED_MODULE_2___default().circleName),
            children: props.circle_name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: (_big_circle_item_module_scss__WEBPACK_IMPORTED_MODULE_2___default().tags),
            children: props.circle_tag.split(',').map((item, index) => {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_tag_CircleTagItem__WEBPACK_IMPORTED_MODULE_0__.default, {
                title: item
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 40
              }, undefined);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
            className: (_big_circle_item_module_scss__WEBPACK_IMPORTED_MODULE_2___default().desc),
            children: props.description == null ? "群主很神秘，什么都没写~" : props.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          className: (_big_circle_item_module_scss__WEBPACK_IMPORTED_MODULE_2___default().follow),
          style: {
            color: props.join_type == 0 ? '#3388FF' : '#CBCFDD',
            borderColor: props.join_type == 0 ? '#3388FF' : '#CBCFDD'
          },
          children: getFollow(props.join_type)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BigCircleItem);

/***/ }),

/***/ "./components/item/circle/CircleItem.tsx":
/*!***********************************************!*\
  !*** ./components/item/circle/CircleItem.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _circle_item_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circle_item.module.scss */ "./components/item/circle/circle_item.module.scss");
/* harmony import */ var _circle_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_circle_item_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\components\\item\\circle\\CircleItem.tsx";



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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_circle_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default().circleItem),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      className: (_circle_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default().logo),
      src: props.avatar == null ? "http://wyyhubang.oss-cn-chengdu.aliyuncs.com/default/default_group.png" : props.avatar,
      width: "35px",
      height: "35px",
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_circle_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default().circleContent),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_circle_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default().centerContent),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
          className: (_circle_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default().circleName),
          children: props.circle_name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_circle_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default().desc),
          children: props.description == null ? "群主很神秘，什么都没写~" : props.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: (_circle_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default().follow),
        style: {
          color: props.join_type == 0 ? '#3388FF' : '#CBCFDD',
          borderColor: props.join_type == 0 ? '#3388FF' : '#CBCFDD'
        },
        children: getFollow(props.join_type)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CircleItem);

/***/ }),

/***/ "./components/item/circle/tag/CircleTagItem.tsx":
/*!******************************************************!*\
  !*** ./components/item/circle/tag/CircleTagItem.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/util */ "./utils/util.ts");
/* harmony import */ var _circle_tag_item_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./circle_tag_item.module.scss */ "./components/item/circle/tag/circle_tag_item.module.scss");
/* harmony import */ var _circle_tag_item_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_circle_tag_item_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\components\\item\\circle\\tag\\CircleTagItem.tsx";




const CircleTagItem = ({
  title
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_circle_tag_item_module_scss__WEBPACK_IMPORTED_MODULE_2___default().circle_tag),
    style: {
      backgroundColor: (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.getColorByString)(title) + 'BB'
    },
    children: title
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CircleTagItem);

/***/ }),

/***/ "./components/mine/center/MineCenterContent.tsx":
/*!******************************************************!*\
  !*** ./components/mine/center/MineCenterContent.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store/store */ "./store/store.ts");
/* harmony import */ var _circle_recommend_circle_RecommendCircle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../circle/recommend_circle/RecommendCircle */ "./components/circle/recommend_circle/RecommendCircle.tsx");
/* harmony import */ var _module_title_ModuleTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../module_title/ModuleTitle */ "./components/module_title/ModuleTitle.tsx");
/* harmony import */ var _follow_fan_FollowFans__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./follow_fan/FollowFans */ "./components/mine/center/follow_fan/FollowFans.tsx");
/* harmony import */ var _mine_center_content_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mine_center_content.module.scss */ "./components/mine/center/mine_center_content.module.scss");
/* harmony import */ var _mine_center_content_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mine_center_content_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mine_content_MineContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mine_content/MineContent */ "./components/mine/center/mine_content/MineContent.tsx");
/* harmony import */ var _top_info_TopUserInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./top_info/TopUserInfo */ "./components/mine/center/top_info/TopUserInfo.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\components\\mine\\center\\MineCenterContent.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const MineCenterContent = ({
  userInfo,
  selectIndex,
  pageChange,
  isSelf
}) => {
  const {
    recommendCircleData
  } = (0,_store_store__WEBPACK_IMPORTED_MODULE_0__.useAppSelector)(state => state.mine);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: (_mine_center_content_module_scss__WEBPACK_IMPORTED_MODULE_7___default().contentBody),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: (_mine_center_content_module_scss__WEBPACK_IMPORTED_MODULE_7___default().center),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_top_info_TopUserInfo__WEBPACK_IMPORTED_MODULE_5__.default, {
        userInfo: userInfo,
        isSelf: isSelf
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mine_content_MineContent__WEBPACK_IMPORTED_MODULE_4__.default, {
        userId: userInfo.id,
        isSelf: isSelf,
        selectIndex: selectIndex,
        pageChange: pageChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: (_mine_center_content_module_scss__WEBPACK_IMPORTED_MODULE_7___default().right),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_follow_fan_FollowFans__WEBPACK_IMPORTED_MODULE_3__.default, {
        userInfo: userInfo,
        isSelf: isSelf
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }, undefined), !isSelf && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_mine_center_content_module_scss__WEBPACK_IMPORTED_MODULE_7___default().about_me),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_module_title_ModuleTitle__WEBPACK_IMPORTED_MODULE_2__.default, {
          title: "\u4E0E\u6211\u76F8\u5173",
          link: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_mine_center_content_module_scss__WEBPACK_IMPORTED_MODULE_7___default().aboutContent),
          children: "\u6682\u65E0\u76F8\u5173~"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, undefined), recommendCircleData && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_circle_recommend_circle_RecommendCircle__WEBPACK_IMPORTED_MODULE_1__.default, _objectSpread({}, recommendCircleData), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 40
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MineCenterContent);

/***/ }),

/***/ "./components/mine/center/follow_fan/FollowFans.tsx":
/*!**********************************************************!*\
  !*** ./components/mine/center/follow_fan/FollowFans.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _follow_fans_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./follow_fans.module.scss */ "./components/mine/center/follow_fan/follow_fans.module.scss");
/* harmony import */ var _follow_fans_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_follow_fans_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\components\\mine\\center\\follow_fan\\FollowFans.tsx";



const FollowFans = ({
  userInfo,
  isSelf
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_follow_fans_module_scss__WEBPACK_IMPORTED_MODULE_1___default().followFans),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_follow_fans_module_scss__WEBPACK_IMPORTED_MODULE_1___default().item),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: (_follow_fans_module_scss__WEBPACK_IMPORTED_MODULE_1___default().fan_number),
        children: userInfo.follow_number
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: (_follow_fans_module_scss__WEBPACK_IMPORTED_MODULE_1___default().fan_title),
        children: isSelf ? "我的关注" : "他的关注"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_follow_fans_module_scss__WEBPACK_IMPORTED_MODULE_1___default().line)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_follow_fans_module_scss__WEBPACK_IMPORTED_MODULE_1___default().item),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: (_follow_fans_module_scss__WEBPACK_IMPORTED_MODULE_1___default().fan_number),
        children: userInfo.fan_number
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: (_follow_fans_module_scss__WEBPACK_IMPORTED_MODULE_1___default().fan_title),
        children: isSelf ? "我的粉丝" : "他的粉丝"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FollowFans);

/***/ }),

/***/ "./components/mine/center/mine_content/MineContent.tsx":
/*!*************************************************************!*\
  !*** ./components/mine/center/mine_content/MineContent.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _circle_list_content_my_circle_MyCircle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../circle/list_content/my_circle/MyCircle */ "./components/circle/list_content/my_circle/MyCircle.tsx");
/* harmony import */ var _mine_content_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mine_content.module.scss */ "./components/mine/center/mine_content/mine_content.module.scss");
/* harmony import */ var _mine_content_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mine_content_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mine_helper_MineHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mine_helper/MineHelper */ "./components/mine/center/mine_content/mine_helper/MineHelper.tsx");
/* harmony import */ var _personal_dynamic_PersonalDynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personal_dynamic/PersonalDynamic */ "./components/mine/center/mine_content/personal_dynamic/PersonalDynamic.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\components\\mine\\center\\mine_content\\MineContent.tsx";






const MineContent = ({
  isSelf,
  userId,
  selectIndex,
  pageChange
}) => {
  const tabs = [{
    id: 0,
    title: isSelf ? "个人动态" : "他的动态",
    type: "center"
  }, {
    id: 1,
    title: isSelf ? "我的求助" : "他的求助",
    type: "helper"
  }, {
    id: 2,
    title: isSelf ? "我的帮圈" : "他的帮圈",
    type: "circle"
  }];

  if (isSelf) {
    tabs.push({
      id: 3,
      title: "内容收藏",
      type: "collect"
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: (_mine_content_module_scss__WEBPACK_IMPORTED_MODULE_4___default().centerContent),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_mine_content_module_scss__WEBPACK_IMPORTED_MODULE_4___default().mineTab),
      children: [tabs.map((item, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          className: (_mine_content_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tabItem),
          style: {
            color: index == selectIndex ? "#363951" : "#676D84",
            fontWeight: index == selectIndex ? "bold" : "normal"
          },
          onClick: () => {
            pageChange && pageChange(index);
          },
          children: item.title
        }, item.id, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 28
        }, undefined);
      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_mine_content_module_scss__WEBPACK_IMPORTED_MODULE_4___default().indicator),
        style: {
          left: selectIndex * 120 + 20 + 'px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }, undefined), selectIndex == 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_personal_dynamic_PersonalDynamic__WEBPACK_IMPORTED_MODULE_2__.default, {
      isSelf: isSelf,
      userId: userId
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 32
    }, undefined) : selectIndex == 1 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mine_helper_MineHelper__WEBPACK_IMPORTED_MODULE_1__.default, {
      isSelf: isSelf,
      userId: userId
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 38
    }, undefined) : selectIndex == 2 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_circle_list_content_my_circle_MyCircle__WEBPACK_IMPORTED_MODULE_0__.default, {
      id: userId
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 42
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_personal_dynamic_PersonalDynamic__WEBPACK_IMPORTED_MODULE_2__.default, {
      isSelf: isSelf,
      userId: userId
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 69
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MineContent);

/***/ }),

/***/ "./components/mine/center/mine_content/mine_helper/MineHelper.tsx":
/*!************************************************************************!*\
  !*** ./components/mine/center/mine_content/mine_helper/MineHelper.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _widget_EmptyView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../widget/EmptyView */ "./components/widget/EmptyView.tsx");
/* harmony import */ var _mine_helper_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mine_helper.module.scss */ "./components/mine/center/mine_content/mine_helper/mine_helper.module.scss");
/* harmony import */ var _mine_helper_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mine_helper_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../store/store */ "./store/store.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_slices_mineSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../store/slices/mineSlice */ "./store/slices/mineSlice.ts");
/* harmony import */ var _home_helperItem_HelperItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../home/helperItem/HelperItem */ "./components/home/helperItem/HelperItem.tsx");
/* harmony import */ var _widget_MyPagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../widget/MyPagination */ "./components/widget/MyPagination.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\components\\mine\\center\\mine_content\\mine_helper\\MineHelper.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const MineHelper = ({
  isSelf,
  userId
}) => {
  const {
    mineHelperData
  } = (0,_store_store__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)(state => state.mine);
  const dispatch = (0,_store_store__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();
  const {
    0: currentPage,
    1: setCurrentPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    loadData(currentPage, 20);
  }, []);

  const pageChange = (page, pageSize) => {
    setCurrentPage(page);
    loadData(page, pageSize);
  }; // 获取数据


  function loadData(page, pageSize) {
    dispatch((0,_store_slices_mineSlice__WEBPACK_IMPORTED_MODULE_3__.fetchMineHelperList)({
      id: userId,
      page: page,
      limit: pageSize
    }));
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: (_mine_helper_module_scss__WEBPACK_IMPORTED_MODULE_7___default().mineHelpContent),
    children: [mineHelperData.list.length == 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_widget_EmptyView__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 47
    }, undefined) : mineHelperData.list.map(item => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_home_helperItem_HelperItem__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread({}, item), item.id, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 28
      }, undefined);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_widget_MyPagination__WEBPACK_IMPORTED_MODULE_5__.default, {
      total: mineHelperData.total,
      pageSize: 20,
      showSizeChanger: false,
      current: currentPage,
      onChange: pageChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MineHelper);

/***/ }),

/***/ "./components/mine/center/mine_content/personal_dynamic/PersonalDynamic.tsx":
/*!**********************************************************************************!*\
  !*** ./components/mine/center/mine_content/personal_dynamic/PersonalDynamic.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _widget_EmptyView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../widget/EmptyView */ "./components/widget/EmptyView.tsx");
/* harmony import */ var _personal_dynamic_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personal_dynamic.module.scss */ "./components/mine/center/mine_content/personal_dynamic/personal_dynamic.module.scss");
/* harmony import */ var _personal_dynamic_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_personal_dynamic_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\components\\mine\\center\\mine_content\\personal_dynamic\\PersonalDynamic.tsx";




const PersonalDynamic = ({
  isSelf,
  userId
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_personal_dynamic_module_scss__WEBPACK_IMPORTED_MODULE_2___default().personalContent),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_widget_EmptyView__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PersonalDynamic);

/***/ }),

/***/ "./components/mine/center/top_info/TopUserInfo.tsx":
/*!*********************************************************!*\
  !*** ./components/mine/center/top_info/TopUserInfo.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../store/store */ "./store/store.ts");
/* harmony import */ var _top_user_info_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top_user_info.module.scss */ "./components/mine/center/top_info/top_user_info.module.scss");
/* harmony import */ var _top_user_info_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_top_user_info_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\components\\mine\\center\\top_info\\TopUserInfo.tsx";




const TopUserInfo = ({
  userInfo,
  isSelf
}) => {
  var _userInfo$description;

  const {
    user
  } = (0,_store_store__WEBPACK_IMPORTED_MODULE_0__.useAppSelector)(state => state.user);

  function getRz() {
    if ((userInfo === null || userInfo === void 0 ? void 0 : userInfo.authentication_type) == 1) {
      return '已认证';
    } else if ((userInfo === null || userInfo === void 0 ? void 0 : userInfo.authentication_type) == 2) {
      return '企业认证';
    }

    return "未认证";
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_top_user_info_module_scss__WEBPACK_IMPORTED_MODULE_2___default().infoContent),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_top_user_info_module_scss__WEBPACK_IMPORTED_MODULE_2___default().mask)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, undefined), isSelf && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
      className: (_top_user_info_module_scss__WEBPACK_IMPORTED_MODULE_2___default().updata_center_pic),
      children: "\u66F4\u6362\u5C01\u9762"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 23
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_top_user_info_module_scss__WEBPACK_IMPORTED_MODULE_2___default().userInfo),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
        className: (_top_user_info_module_scss__WEBPACK_IMPORTED_MODULE_2___default().userHeader),
        src: userInfo !== null && userInfo !== void 0 && userInfo.avatar ? userInfo === null || userInfo === void 0 ? void 0 : userInfo.avatar : "http://wyyhubang.oss-cn-chengdu.aliyuncs.com/default/default_user.png",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_top_user_info_module_scss__WEBPACK_IMPORTED_MODULE_2___default().info),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_top_user_info_module_scss__WEBPACK_IMPORTED_MODULE_2___default().name),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
            className: (_top_user_info_module_scss__WEBPACK_IMPORTED_MODULE_2___default().nickname),
            children: userInfo === null || userInfo === void 0 ? void 0 : userInfo.nickname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 21
          }, undefined), (userInfo === null || userInfo === void 0 ? void 0 : userInfo.sex) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
            className: (_top_user_info_module_scss__WEBPACK_IMPORTED_MODULE_2___default().sex),
            src: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.sex) == 2 ? '/static/images/img_girl_icon.png' : '/static/images/img_boy_icon.png',
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 42
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          className: (_top_user_info_module_scss__WEBPACK_IMPORTED_MODULE_2___default().credit_score),
          children: [getRz(), " / \u6210\u5355\u7387", userInfo === null || userInfo === void 0 ? void 0 : userInfo.order_rate, "% / \u4FE1\u7528", userInfo === null || userInfo === void 0 ? void 0 : userInfo.credit_score]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          className: (_top_user_info_module_scss__WEBPACK_IMPORTED_MODULE_2___default().description),
          children: (_userInfo$description = userInfo === null || userInfo === void 0 ? void 0 : userInfo.description) !== null && _userInfo$description !== void 0 ? _userInfo$description : "这个人很懒，什么都没写~"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }, undefined), isSelf ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
        className: [(_top_user_info_module_scss__WEBPACK_IMPORTED_MODULE_2___default().edit), (_top_user_info_module_scss__WEBPACK_IMPORTED_MODULE_2___default().flexEnd)].join(' '),
        children: "\u7F16\u8F91"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }, undefined) : userInfo.followed ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
        className: [(_top_user_info_module_scss__WEBPACK_IMPORTED_MODULE_2___default().follow), (_top_user_info_module_scss__WEBPACK_IMPORTED_MODULE_2___default().flexEnd)].join(' '),
        children: "\u5DF2\u5173\u6CE8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 25
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
        className: (_top_user_info_module_scss__WEBPACK_IMPORTED_MODULE_2___default().flexEnd),
        src: "/static/images/ico_follow.png",
        width: 40,
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 25
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopUserInfo);

/***/ }),

/***/ "./components/module_title/ModuleTitle.tsx":
/*!*************************************************!*\
  !*** ./components/module_title/ModuleTitle.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _module_title_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module_title.module.scss */ "./components/module_title/module_title.module.scss");
/* harmony import */ var _module_title_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_module_title_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\components\\module_title\\ModuleTitle.tsx";




const ModuleTitle = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_module_title_module_scss__WEBPACK_IMPORTED_MODULE_2___default().titleContent),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_module_title_module_scss__WEBPACK_IMPORTED_MODULE_2___default().leftBorder)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
      className: (_module_title_module_scss__WEBPACK_IMPORTED_MODULE_2___default().title),
      style: {
        backgroundImage: props.image == null ? "" : "url(" + props.image + ")"
      },
      children: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, undefined), props.link && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
      className: (_module_title_module_scss__WEBPACK_IMPORTED_MODULE_2___default().more),
      href: props.link,
      children: "\u66F4\u591A"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 27
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModuleTitle);

/***/ }),

/***/ "./components/widget/EmptyView.tsx":
/*!*****************************************!*\
  !*** ./components/widget/EmptyView.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_components_widget_empty_view_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/components/widget/empty_view.module.scss */ "./styles/components/widget/empty_view.module.scss");
/* harmony import */ var _styles_components_widget_empty_view_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_widget_empty_view_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\components\\widget\\EmptyView.tsx";



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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_components_widget_empty_view_module_scss__WEBPACK_IMPORTED_MODULE_1___default().empty_content),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      className: (_styles_components_widget_empty_view_module_scss__WEBPACK_IMPORTED_MODULE_1___default().image),
      src: getErrorImg(),
      width: "50%",
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmptyView);

/***/ }),

/***/ "./components/widget/MyPagination.tsx":
/*!********************************************!*\
  !*** ./components/widget/MyPagination.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_widget_my_pagination_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/components/widget/my_pagination.module.scss */ "./styles/components/widget/my_pagination.module.scss");
/* harmony import */ var _styles_components_widget_my_pagination_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_widget_my_pagination_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\components\\widget\\MyPagination.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const MyPagination = props => {
  function getItemRender(current, type, originalElement) {
    if (type === 'prev') {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
        children: "\u4E0A\u4E00\u9875"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 20
      }, this);
    } else if (type === 'next') {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
        children: "\u4E0B\u4E00\u9875"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 20
      }, this);
    }

    return originalElement;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_styles_components_widget_my_pagination_module_scss__WEBPACK_IMPORTED_MODULE_2___default().pagination),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_0__.Pagination, _objectSpread({}, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyPagination);

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

/***/ "./pages/user/[id].tsx":
/*!*****************************!*\
  !*** ./pages/user/[id].tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_mine_center_MineCenterContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/mine/center/MineCenterContent */ "./components/mine/center/MineCenterContent.tsx");
/* harmony import */ var _layout_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layout/Footer */ "./layout/Footer.tsx");
/* harmony import */ var _layout_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layout/Header */ "./layout/Header.tsx");
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layout/Layout */ "./layout/Layout.tsx");
/* harmony import */ var _store_slices_circleSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/slices/circleSlice */ "./store/slices/circleSlice.ts");
/* harmony import */ var _store_slices_mineSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/slices/mineSlice */ "./store/slices/mineSlice.ts");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/store */ "./store/store.ts");
/* harmony import */ var _styles_Mine_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../styles/Mine.module.scss */ "./styles/Mine.module.scss");
/* harmony import */ var _styles_Mine_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Mine_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\pages\\user\\[id].tsx";













const MineCenter = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const {
    user
  } = (0,_store_store__WEBPACK_IMPORTED_MODULE_9__.useAppSelector)(state => state.user);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

  function isSelf() {
    return userInfo && user && user.id == userInfo.id ? true : false;
  }

  function getUserId() {
    const userId = router.query.id;

    if (!userId) {
      return "";
    }

    return userId === null || userId === void 0 ? void 0 : userId.toString();
  }

  const {
    userInfo
  } = (0,_store_store__WEBPACK_IMPORTED_MODULE_9__.useAppSelector)(state => state.mine);
  const selectIndex = (0,_store_store__WEBPACK_IMPORTED_MODULE_9__.useAppSelector)(state => {
    const id = getUserId();

    if (id && id in state.mine.userPageSelectIndex) {
      return state.mine.userPageSelectIndex[getUserId()];
    }

    return 0;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    return () => {
      dispatch((0,_store_slices_mineSlice__WEBPACK_IMPORTED_MODULE_8__.switchUserPageSelectIndex)({
        key: getUserId(),
        index: 0
      }));
    };
  }, []);

  const userCenterPageChange = index => {
    if (selectIndex != index && userInfo) {
      // setSelectIndex(index);
      dispatch((0,_store_slices_mineSlice__WEBPACK_IMPORTED_MODULE_8__.switchUserPageSelectIndex)({
        key: userInfo.id,
        index: index
      }));
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_layout_Layout__WEBPACK_IMPORTED_MODULE_6__.default, {
    className: (_styles_Mine_module_scss__WEBPACK_IMPORTED_MODULE_11___default().body),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_layout_Header__WEBPACK_IMPORTED_MODULE_5__.default, {
      page: -1,
      userCenterChange: isSelf() ? userCenterPageChange : undefined
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }, undefined), userInfo && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_mine_center_MineCenterContent__WEBPACK_IMPORTED_MODULE_3__.default, {
      userInfo: userInfo,
      isSelf: isSelf(),
      selectIndex: selectIndex,
      pageChange: userCenterPageChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_layout_Footer__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 12
  }, undefined);
};

MineCenter.getInitialProps = _store_store__WEBPACK_IMPORTED_MODULE_9__.default.getInitialPageProps(store => async context => {
  await Promise.all([store.dispatch((0,_store_slices_mineSlice__WEBPACK_IMPORTED_MODULE_8__.fetchUserInfo)({
    id: context.query.id
  })), store.dispatch((0,_store_slices_mineSlice__WEBPACK_IMPORTED_MODULE_8__.fetchMineRecommendCircleList)({
    limit: 8,
    page: 1,
    type: "recommend"
  })), store.dispatch((0,_store_slices_circleSlice__WEBPACK_IMPORTED_MODULE_7__.fetchUserCircleList)({
    page: 1,
    limit: 20,
    id: context.query.id
  }))]);
  return {};
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MineCenter);

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

/***/ "./components/circle/list_content/my_circle/my_circle.module.scss":
/*!************************************************************************!*\
  !*** ./components/circle/list_content/my_circle/my_circle.module.scss ***!
  \************************************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"content_title": "my_circle_content_title__3OA0x",
	"my_cirlce_content": "my_circle_my_cirlce_content__2CPrn",
	"no_more": "my_circle_no_more__1cM0k"
};


/***/ }),

/***/ "./components/circle/recommend_circle/recommend_circle.module.scss":
/*!*************************************************************************!*\
  !*** ./components/circle/recommend_circle/recommend_circle.module.scss ***!
  \*************************************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"recommendCircle": "recommend_circle_recommendCircle__2PhBp",
	"recommendCircleContent": "recommend_circle_recommendCircleContent__18uTm"
};


/***/ }),

/***/ "./components/home/helperItem/helper_item.module.scss":
/*!************************************************************!*\
  !*** ./components/home/helperItem/helper_item.module.scss ***!
  \************************************************************/
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

/***/ "./components/item/circle/big_circle_item.module.scss":
/*!************************************************************!*\
  !*** ./components/item/circle/big_circle_item.module.scss ***!
  \************************************************************/
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

/***/ "./components/item/circle/circle_item.module.scss":
/*!********************************************************!*\
  !*** ./components/item/circle/circle_item.module.scss ***!
  \********************************************************/
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

/***/ "./components/item/circle/tag/circle_tag_item.module.scss":
/*!****************************************************************!*\
  !*** ./components/item/circle/tag/circle_tag_item.module.scss ***!
  \****************************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"circle_tag": "circle_tag_item_circle_tag__33_Kg"
};


/***/ }),

/***/ "./components/mine/center/follow_fan/follow_fans.module.scss":
/*!*******************************************************************!*\
  !*** ./components/mine/center/follow_fan/follow_fans.module.scss ***!
  \*******************************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"followFans": "follow_fans_followFans__3X1xs",
	"line": "follow_fans_line__18UnU",
	"item": "follow_fans_item__30it_",
	"fan_number": "follow_fans_fan_number__IrSus",
	"fan_title": "follow_fans_fan_title__35NLj"
};


/***/ }),

/***/ "./components/mine/center/mine_center_content.module.scss":
/*!****************************************************************!*\
  !*** ./components/mine/center/mine_center_content.module.scss ***!
  \****************************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"contentBody": "mine_center_content_contentBody__2UGrX",
	"left": "mine_center_content_left__lKs-7",
	"center": "mine_center_content_center__aSv_R",
	"centerContent": "mine_center_content_centerContent__25RXI",
	"right": "mine_center_content_right__UMCGn",
	"about_me": "mine_center_content_about_me__34Sr8",
	"aboutContent": "mine_center_content_aboutContent__2H6MH"
};


/***/ }),

/***/ "./components/mine/center/mine_content/mine_content.module.scss":
/*!**********************************************************************!*\
  !*** ./components/mine/center/mine_content/mine_content.module.scss ***!
  \**********************************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"centerContent": "mine_content_centerContent__CgTqB",
	"mineTab": "mine_content_mineTab__1B1Tb",
	"tabItem": "mine_content_tabItem__2d6WD",
	"indicator": "mine_content_indicator__oZw02"
};


/***/ }),

/***/ "./components/mine/center/mine_content/mine_helper/mine_helper.module.scss":
/*!*********************************************************************************!*\
  !*** ./components/mine/center/mine_content/mine_helper/mine_helper.module.scss ***!
  \*********************************************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"mineHelpContent": "mine_helper_mineHelpContent__3Zgri"
};


/***/ }),

/***/ "./components/mine/center/mine_content/personal_dynamic/personal_dynamic.module.scss":
/*!*******************************************************************************************!*\
  !*** ./components/mine/center/mine_content/personal_dynamic/personal_dynamic.module.scss ***!
  \*******************************************************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"personalContent": "personal_dynamic_personalContent__27Zux"
};


/***/ }),

/***/ "./components/mine/center/top_info/top_user_info.module.scss":
/*!*******************************************************************!*\
  !*** ./components/mine/center/top_info/top_user_info.module.scss ***!
  \*******************************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"infoContent": "top_user_info_infoContent__1aL5y",
	"mask": "top_user_info_mask__oym8z",
	"updata_center_pic": "top_user_info_updata_center_pic__CPAyt",
	"userInfo": "top_user_info_userInfo__3RzGc",
	"userHeader": "top_user_info_userHeader__1Kf3J",
	"info": "top_user_info_info__SuIND",
	"name": "top_user_info_name__2qjcP",
	"nickname": "top_user_info_nickname__3-tsf",
	"sex": "top_user_info_sex__3AcAD",
	"credit_score": "top_user_info_credit_score__uw_XC",
	"description": "top_user_info_description__2EC68",
	"flexEnd": "top_user_info_flexEnd__2u_Fo",
	"edit": "top_user_info_edit__aqNui",
	"follow": "top_user_info_follow__3uvS6"
};


/***/ }),

/***/ "./components/module_title/module_title.module.scss":
/*!**********************************************************!*\
  !*** ./components/module_title/module_title.module.scss ***!
  \**********************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"titleContent": "module_title_titleContent__qLbTG",
	"leftBorder": "module_title_leftBorder__f0ECY",
	"title": "module_title_title__3RlVt",
	"more": "module_title_more__1QpXy"
};


/***/ }),

/***/ "./styles/Mine.module.scss":
/*!*********************************!*\
  !*** ./styles/Mine.module.scss ***!
  \*********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"body": "Mine_body__3a-e4"
};


/***/ }),

/***/ "./styles/components/widget/empty_view.module.scss":
/*!*********************************************************!*\
  !*** ./styles/components/widget/empty_view.module.scss ***!
  \*********************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"empty_content": "empty_view_empty_content__1sYxi"
};


/***/ }),

/***/ "./styles/components/widget/my_pagination.module.scss":
/*!************************************************************!*\
  !*** ./styles/components/widget/my_pagination.module.scss ***!
  \************************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"pagination": "my_pagination_pagination__3e7L-"
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
var __webpack_exports__ = (__webpack_exec__("./pages/user/[id].tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBLHlHQUE4Qzs7Ozs7Ozs7Ozs7O0FDQTlDOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9odWJhbmcvLi9jb21wb25lbnRzL2NpcmNsZS9saXN0X2NvbnRlbnQvbXlfY2lyY2xlL015Q2lyY2xlLnRzeCIsIndlYnBhY2s6Ly9odWJhbmcvLi9jb21wb25lbnRzL2NpcmNsZS9yZWNvbW1lbmRfY2lyY2xlL1JlY29tbWVuZENpcmNsZS50c3giLCJ3ZWJwYWNrOi8vaHViYW5nLy4vY29tcG9uZW50cy9ob21lL2hlbHBlckl0ZW0vSGVscGVySXRlbS50c3giLCJ3ZWJwYWNrOi8vaHViYW5nLy4vY29tcG9uZW50cy9pdGVtL2NpcmNsZS9CaWdDaXJjbGVJdGVtLnRzeCIsIndlYnBhY2s6Ly9odWJhbmcvLi9jb21wb25lbnRzL2l0ZW0vY2lyY2xlL0NpcmNsZUl0ZW0udHN4Iiwid2VicGFjazovL2h1YmFuZy8uL2NvbXBvbmVudHMvaXRlbS9jaXJjbGUvdGFnL0NpcmNsZVRhZ0l0ZW0udHN4Iiwid2VicGFjazovL2h1YmFuZy8uL2NvbXBvbmVudHMvbWluZS9jZW50ZXIvTWluZUNlbnRlckNvbnRlbnQudHN4Iiwid2VicGFjazovL2h1YmFuZy8uL2NvbXBvbmVudHMvbWluZS9jZW50ZXIvZm9sbG93X2Zhbi9Gb2xsb3dGYW5zLnRzeCIsIndlYnBhY2s6Ly9odWJhbmcvLi9jb21wb25lbnRzL21pbmUvY2VudGVyL21pbmVfY29udGVudC9NaW5lQ29udGVudC50c3giLCJ3ZWJwYWNrOi8vaHViYW5nLy4vY29tcG9uZW50cy9taW5lL2NlbnRlci9taW5lX2NvbnRlbnQvbWluZV9oZWxwZXIvTWluZUhlbHBlci50c3giLCJ3ZWJwYWNrOi8vaHViYW5nLy4vY29tcG9uZW50cy9taW5lL2NlbnRlci9taW5lX2NvbnRlbnQvcGVyc29uYWxfZHluYW1pYy9QZXJzb25hbER5bmFtaWMudHN4Iiwid2VicGFjazovL2h1YmFuZy8uL2NvbXBvbmVudHMvbWluZS9jZW50ZXIvdG9wX2luZm8vVG9wVXNlckluZm8udHN4Iiwid2VicGFjazovL2h1YmFuZy8uL2NvbXBvbmVudHMvbW9kdWxlX3RpdGxlL01vZHVsZVRpdGxlLnRzeCIsIndlYnBhY2s6Ly9odWJhbmcvLi9jb21wb25lbnRzL3dpZGdldC9FbXB0eVZpZXcudHN4Iiwid2VicGFjazovL2h1YmFuZy8uL2NvbXBvbmVudHMvd2lkZ2V0L015UGFnaW5hdGlvbi50c3giLCJ3ZWJwYWNrOi8vaHViYW5nLy4vbGF5b3V0L0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vaHViYW5nLy4vbGF5b3V0L0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vaHViYW5nLy4vbGF5b3V0L0xheW91dC50c3giLCJ3ZWJwYWNrOi8vaHViYW5nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9odWJhbmcvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL2h1YmFuZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9odWJhbmcvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9odWJhbmcvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9odWJhbmcvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9odWJhbmcvLi9wYWdlcy91c2VyL1tpZF0udHN4Iiwid2VicGFjazovL2h1YmFuZy8uL3N0b3JlL3NlcnZpY2VzL2NpcmNsZS50cyIsIndlYnBhY2s6Ly9odWJhbmcvLi9zdG9yZS9zZXJ2aWNlcy9jb21tb24udHMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vc3RvcmUvc2VydmljZXMvaGVscGVyLnRzIiwid2VicGFjazovL2h1YmFuZy8uL3N0b3JlL3NlcnZpY2VzL21pbmUudHMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vc3RvcmUvc2VydmljZXMvdXNlci50cyIsIndlYnBhY2s6Ly9odWJhbmcvLi9zdG9yZS9zbGljZXMvY2lyY2xlU2xpY2UudHMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vc3RvcmUvc2xpY2VzL2NvbW1vblNsaWNlLnRzIiwid2VicGFjazovL2h1YmFuZy8uL3N0b3JlL3NsaWNlcy9ob21lU2xpY2UudHMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vc3RvcmUvc2xpY2VzL2xvYWRpbmdTbGljZS50cyIsIndlYnBhY2s6Ly9odWJhbmcvLi9zdG9yZS9zbGljZXMvbG9naW5TbGljZS50cyIsIndlYnBhY2s6Ly9odWJhbmcvLi9zdG9yZS9zbGljZXMvbWluZVNsaWNlLnRzIiwid2VicGFjazovL2h1YmFuZy8uL3N0b3JlL3NsaWNlcy91c2VyU2xpY2UudHMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vc3RvcmUvc3RvcmUudHMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vdXRpbHMvYWVzLnRzIiwid2VicGFjazovL2h1YmFuZy8uL3V0aWxzL2FwaS50cyIsIndlYnBhY2s6Ly9odWJhbmcvLi91dGlscy9zdGF0aWNEYXRhLnRzIiwid2VicGFjazovL2h1YmFuZy8uL3V0aWxzL3Rva2VuX3V0aWwudHMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vdXRpbHMvdXJsLnRzIiwid2VicGFjazovL2h1YmFuZy8uL3V0aWxzL3V0aWwudHMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vY29tcG9uZW50cy9jaXJjbGUvbGlzdF9jb250ZW50L215X2NpcmNsZS9teV9jaXJjbGUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vY29tcG9uZW50cy9jaXJjbGUvcmVjb21tZW5kX2NpcmNsZS9yZWNvbW1lbmRfY2lyY2xlLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2h1YmFuZy8uL2NvbXBvbmVudHMvaG9tZS9oZWxwZXJJdGVtL2hlbHBlcl9pdGVtLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2h1YmFuZy8uL2NvbXBvbmVudHMvaXRlbS9jaXJjbGUvYmlnX2NpcmNsZV9pdGVtLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2h1YmFuZy8uL2NvbXBvbmVudHMvaXRlbS9jaXJjbGUvY2lyY2xlX2l0ZW0ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vY29tcG9uZW50cy9pdGVtL2NpcmNsZS90YWcvY2lyY2xlX3RhZ19pdGVtLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2h1YmFuZy8uL2NvbXBvbmVudHMvbWluZS9jZW50ZXIvZm9sbG93X2Zhbi9mb2xsb3dfZmFucy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9odWJhbmcvLi9jb21wb25lbnRzL21pbmUvY2VudGVyL21pbmVfY2VudGVyX2NvbnRlbnQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vY29tcG9uZW50cy9taW5lL2NlbnRlci9taW5lX2NvbnRlbnQvbWluZV9jb250ZW50Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2h1YmFuZy8uL2NvbXBvbmVudHMvbWluZS9jZW50ZXIvbWluZV9jb250ZW50L21pbmVfaGVscGVyL21pbmVfaGVscGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2h1YmFuZy8uL2NvbXBvbmVudHMvbWluZS9jZW50ZXIvbWluZV9jb250ZW50L3BlcnNvbmFsX2R5bmFtaWMvcGVyc29uYWxfZHluYW1pYy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9odWJhbmcvLi9jb21wb25lbnRzL21pbmUvY2VudGVyL3RvcF9pbmZvL3RvcF91c2VyX2luZm8ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vY29tcG9uZW50cy9tb2R1bGVfdGl0bGUvbW9kdWxlX3RpdGxlLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2h1YmFuZy8uL3N0eWxlcy9NaW5lLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2h1YmFuZy8uL3N0eWxlcy9jb21wb25lbnRzL3dpZGdldC9lbXB0eV92aWV3Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2h1YmFuZy8uL3N0eWxlcy9jb21wb25lbnRzL3dpZGdldC9teV9wYWdpbmF0aW9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2h1YmFuZy8uL3N0eWxlcy9mb290ZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vc3R5bGVzL2hlYWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9odWJhbmcvLi9zdHlsZXMvbGF5b3V0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2h1YmFuZy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly9odWJhbmcvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcImNyeXB0by1qc1wiIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIiIsIndlYnBhY2s6Ly9odWJhbmcvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9odWJhbmcvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qc1wiIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly9odWJhbmcvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9odWJhbmcvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcInFzXCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9odWJhbmcvZXh0ZXJuYWwgXCJyZWFjdC1jb29raWVzXCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9odWJhbmcvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2lnbm9yZWR8RDpcXFZTQ29kZVByb2plY3RcXGh1YmFuZ1xcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxzaGFyZWRcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZmV0Y2hVc2VyQ2lyY2xlTGlzdCB9IGZyb20gXCIuLi8uLi8uLi8uLi9zdG9yZS9zbGljZXMvY2lyY2xlU2xpY2VcIjtcclxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3N0b3JlL3N0b3JlXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9teV9jaXJjbGUubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgQmlnQ2lyY2xlSXRlbSBmcm9tIFwiLi4vLi4vLi4vaXRlbS9jaXJjbGUvQmlnQ2lyY2xlSXRlbVwiO1xyXG5pbXBvcnQgRW1wdHlWaWV3IGZyb20gXCIuLi8uLi8uLi93aWRnZXQvRW1wdHlWaWV3XCI7XHJcbmltcG9ydCBNeVBhZ2luYXRpb24gZnJvbSBcIi4uLy4uLy4uL3dpZGdldC9NeVBhZ2luYXRpb25cIjtcclxuXHJcbmNvbnN0IE15Q2lyY2xlOiBOZXh0UGFnZTx7IGlkOiBzdHJpbmcgfCB1bmRlZmluZWQsIHNob3dUaXRsZT86IGJvb2xlYW4gfT4gPSAoeyBpZCwgc2hvd1RpdGxlIH0pID0+IHtcclxuICAgIGNvbnN0IHsgbXlDaXJjbGVMaXN0IH0gPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNpcmNsZSk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIGxvYWRNeUNpcmNsZSgxLCAyMCk7XHJcbiAgICAvLyB9LCBbXSlcclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkTXlDaXJjbGUocGFnZTogbnVtYmVyLCBsaW1pdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGZldGNoVXNlckNpcmNsZUxpc3Qoe1xyXG4gICAgICAgICAgICAgICAgcGFnZTogcGFnZSxcclxuICAgICAgICAgICAgICAgIGxpbWl0OiBsaW1pdCxcclxuICAgICAgICAgICAgICAgIGlkOiBpZFxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IHBhZ2VDaGFuZ2UgPSAocGFnZSwgcGFnZVNpemUpID0+IHtcclxuICAgICAgICBzZXRDdXJyZW50UGFnZShwYWdlKTtcclxuICAgICAgICBsb2FkTXlDaXJjbGUocGFnZSwgcGFnZVNpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2hvd1RpdGxlICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudF90aXRsZX0+5oiR55qE5biu5ZyIPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubXlfY2lybGNlX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBteUNpcmNsZUxpc3QubGlzdC5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgICAgICAgICBteUNpcmNsZUxpc3QubGlzdC5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8QmlnQ2lyY2xlSXRlbSBrZXk9e2l0ZW0uaWR9IHsuLi5pdGVtfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH0pIDpcclxuICAgICAgICAgICAgICAgICAgICA8RW1wdHlWaWV3IHR5cGU9ezB9IC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ub19tb3JlfSBzdHlsZT17eyBkaXNwbGF5OiBteUNpcmNsZUxpc3QubGlzdC5sZW5ndGggPiAwICYmIG15Q2lyY2xlTGlzdC5saXN0Lmxlbmd0aCA8IDIwID8gJ2Jsb2NrJyA6ICdub25lJyB9fT7msqHmnInmm7TlpJrkuoZ+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE15UGFnaW5hdGlvbiB0b3RhbD17bXlDaXJjbGVMaXN0LnRvdGFsfSBwYWdlU2l6ZT17MjB9IHNob3dTaXplQ2hhbmdlcj17ZmFsc2V9IGN1cnJlbnQ9e2N1cnJlbnRQYWdlfSBvbkNoYW5nZT17cGFnZUNoYW5nZX0gLz5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUNpcmNsZTsiLCJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9yZWNvbW1lbmRfY2lyY2xlLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IE1vZHVsZVRpdGxlIGZyb20gXCIuLi8uLi9tb2R1bGVfdGl0bGUvTW9kdWxlVGl0bGVcIjtcclxuaW1wb3J0IENpcmNsZUl0ZW0gZnJvbSBcIi4uLy4uL2l0ZW0vY2lyY2xlL0NpcmNsZUl0ZW1cIjtcclxuaW1wb3J0IHsgQ2lyY2xlQmVhbiwgTGlzdFBhZ2VCZWFuIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL3NlcnZpY2VzL2NpcmNsZVwiO1xyXG5cclxuY29uc3QgUmVjb21tZW5kQ2lyY2xlOiBOZXh0UGFnZTxMaXN0UGFnZUJlYW48Q2lyY2xlQmVhbj4+ID0gKHJlY29tbWVuZENpcmNsZSkgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVjb21tZW5kQ2lyY2xlfT5cclxuICAgICAgICA8TW9kdWxlVGl0bGUgdGl0bGU9XCLmjqjojZDlnIjlrZBcIiBsaW5rPVwiL2NpcmNsZVwiIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWNvbW1lbmRDaXJjbGVDb250ZW50fT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVjb21tZW5kQ2lyY2xlLmxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q2lyY2xlSXRlbSBrZXk9e2l0ZW0uaWR9IHsuLi5pdGVtfSAvPlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlY29tbWVuZENpcmNsZTsiLCJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBzdHlsZSBmcm9tICcuL2hlbHBlcl9pdGVtLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHR5cGUgeyBOYW1lSWRCZWFuIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvc2VydmljZXMvaG9tZSc7XHJcbmltcG9ydCB0eXBlIHsgSGVscGVySXRlbURhdGEgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9zZXJ2aWNlcy9oZWxwZXInO1xyXG5pbXBvcnQgeyBnZXRIZWxwTW9uZXksIGdldFRpbWVTdHJpbmdCeU5vdyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgSGVscGVySXRlbTogTmV4dFBhZ2U8SGVscGVySXRlbURhdGE+ID0gKHByb3BzKSA9PiB7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEhlbHBUaW1lKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHN0YXJ0VGltZSA9IGdldFRpbWVTdHJpbmdCeU5vdyhzdGFydCwgXCLkuI3pmZBcIik7XHJcbiAgICAgICAgbGV0IGVuZFRpbWUgPSBnZXRUaW1lU3RyaW5nQnlOb3coZW5kLCBcIuS4jemZkFwiKTtcclxuICAgICAgICBpZiAoc3RhcnRUaW1lID09PSBcIuS4jemZkFwiICYmIGVuZFRpbWUgPT09IFwi5LiN6ZmQXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwi5LiN6ZmQXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdGFydFRpbWUgKyBcIiAtIFwiICsgZW5kVGltZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQZW9wbGVOdW1iZXIobnVtOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAobnVtIDw9IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwi5LiN6ZmQXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudW0gKyBcIuS6ulwiO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEFkZHJlc3MocHJvdmluY2U6IE5hbWVJZEJlYW4sIGNpdHk6IE5hbWVJZEJlYW4sIGFyZWE6IE5hbWVJZEJlYW4pIHtcclxuICAgICAgICBpZiAocHJvdmluY2UgPT0gbnVsbCB8fCBwcm92aW5jZS5pZCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIuS4jemZkFwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChjaXR5ID09IG51bGwgfHwgY2l0eS5pZCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvdmluY2UubmFtZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChhcmVhID09IG51bGwgfHwgYXJlYS5pZCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNpdHkubmFtZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNpdHkubmFtZSArIFwiIFwiICsgYXJlYS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaXRlbUNvbnRlbnR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50aXRsZX0+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e3N0eWxlLmhlbHBOYW1lfT57cHJvcHMudHlwZS5jaGlsZC5uYW1lICsgJy0nICsgcHJvcHMudGl0bGV9PC9oND5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5oZWxwTW9uZXl9PntnZXRIZWxwTW9uZXkocHJvcHMubG93ZXN0X3ByaWNlLCBwcm9wcy5oaWdoZXN0X3ByaWNlKX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmhlbHBUaW1lfT5cclxuICAgICAgICAgICAge1wi5pe26Ze077yaXCIgKyBnZXRIZWxwVGltZShwcm9wcy5zdGFydF90aW1lLCBwcm9wcy5lbmRfdGltZSl9XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUucGVvcGxlTnVtYmVyfT57XCLkurrmlbDvvJpcIiArIGdldFBlb3BsZU51bWJlcihwcm9wcy5wZW9wbGVfbnVtYmVyKX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZS5ob3RJbWd9IHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb196aGVuZ21pbmcucG5nXCIgd2lkdGg9XCIyMHB4XCIgc3R5bGU9e3sgZGlzcGxheTogcHJvcHMuZmluaXNoX3Byb3ZlID8gXCJibG9ja1wiIDogXCJub25lXCIgfX0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlLmhvdEltZ30gc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvX2FueGlvdXMucG5nXCIgd2lkdGg9XCIyMHB4XCIgc3R5bGU9e3sgZGlzcGxheTogcHJvcHMuaXNfdXJnZW50ID8gXCJibG9ja1wiIDogXCJub25lXCIgfX0gYWx0PVwiXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmhlbHBVc2VyfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvdXNlci9cIiArIHByb3BzLnNlbmRlci5pZH0gPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlLnVzZXJIZWFkfVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJvcHMuc2VuZGVyLmF2YXRhciA9PSBudWxsID8gXCJodHRwOi8vd3l5aHViYW5nLm9zcy1jbi1jaGVuZ2R1LmFsaXl1bmNzLmNvbS9kZWZhdWx0L2RlZmF1bHRfdXNlci5wbmdcIiA6IHByb3BzLnNlbmRlci5hdmF0YXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNTBweFwiIHdpZHRoPVwiNTBweFwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS51c2VyTmFtZX0+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuc2VuZGVyLmFsaWFzID09IG51bGwgPyBwcm9wcy5zZW5kZXIubmlja25hbWUgOiBwcm9wcy5zZW5kZXIuYWxpYXN9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5hZGRyZXNzfT5cclxuICAgICAgICAgICAgICAgIHtnZXRBZGRyZXNzKHByb3BzLnByb3ZpbmNlLCBwcm9wcy5jaXR5LCBwcm9wcy5hcmVhKX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWxwZXJJdGVtOyIsImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4vYmlnX2NpcmNsZV9pdGVtLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHR5cGUgeyBDaXJjbGVCZWFuIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvc2VydmljZXMvY2lyY2xlJztcclxuaW1wb3J0IENpcmNsZVRhZ0l0ZW0gZnJvbSBcIi4vdGFnL0NpcmNsZVRhZ0l0ZW1cIjtcclxuXHJcbmNvbnN0IEJpZ0NpcmNsZUl0ZW06IE5leHRQYWdlPENpcmNsZUJlYW4+ID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Rm9sbG93KHR5cGU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0eXBlID09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIuW3sueUs+ivt1wiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSAxIHx8IHR5cGUgPT0gMikge1xyXG4gICAgICAgICAgICByZXR1cm4gXCLlt7LliqDlhaVcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gMykge1xyXG4gICAgICAgICAgICByZXR1cm4gXCLlnIjkuLtcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwi55Sz6K+3XCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jaXJjbGVJdGVtfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubGluZUNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGUubG9nb31cclxuICAgICAgICAgICAgICAgIHNyYz17cHJvcHMuYXZhdGFyID09IG51bGwgPyBcImh0dHA6Ly93eXlodWJhbmcub3NzLWNuLWNoZW5nZHUuYWxpeXVuY3MuY29tL2RlZmF1bHQvZGVmYXVsdF9ncm91cC5wbmdcIiA6IHByb3BzLmF2YXRhcn1cclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiODBweFwiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI4MHB4XCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIlwiIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2lyY2xlQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2VudGVyQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGUuY2lyY2xlTmFtZX0+e3Byb3BzLmNpcmNsZV9uYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRhZ3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5jaXJjbGVfdGFnLnNwbGl0KCcsJykubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q2lyY2xlVGFnSXRlbSBrZXk9e2luZGV4fSB0aXRsZT17aXRlbX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLmRlc2N9Pntwcm9wcy5kZXNjcmlwdGlvbiA9PSBudWxsID8gXCLnvqTkuLvlvojnpZ7np5jvvIzku4DkuYjpg73msqHlhpl+XCIgOiBwcm9wcy5kZXNjcmlwdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLmZvbGxvd31cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcHJvcHMuam9pbl90eXBlID09IDAgPyAnIzMzODhGRicgOiAnI0NCQ0ZERCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBwcm9wcy5qb2luX3R5cGUgPT0gMCA/ICcjMzM4OEZGJyA6ICcjQ0JDRkREJyxcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0Rm9sbG93KHByb3BzLmpvaW5fdHlwZSl9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCaWdDaXJjbGVJdGVtOyIsImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4vY2lyY2xlX2l0ZW0ubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgdHlwZSB7IENpcmNsZUJlYW4gfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9zZXJ2aWNlcy9jaXJjbGUnO1xyXG5cclxuY29uc3QgQ2lyY2xlSXRlbTogTmV4dFBhZ2U8Q2lyY2xlQmVhbj4gPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRGb2xsb3codHlwZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHR5cGUgPT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwi5bey55Sz6K+3XCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09IDEgfHwgdHlwZSA9PSAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIuW3suWKoOWFpVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSAzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIuWciOS4u1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCLnlLPor7dcIjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNpcmNsZUl0ZW19PlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZS5sb2dvfVxyXG4gICAgICAgICAgICBzcmM9e3Byb3BzLmF2YXRhciA9PSBudWxsID8gXCJodHRwOi8vd3l5aHViYW5nLm9zcy1jbi1jaGVuZ2R1LmFsaXl1bmNzLmNvbS9kZWZhdWx0L2RlZmF1bHRfZ3JvdXAucG5nXCIgOiBwcm9wcy5hdmF0YXJ9XHJcbiAgICAgICAgICAgIHdpZHRoPVwiMzVweFwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjM1cHhcIlxyXG4gICAgICAgICAgICBhbHQ9XCJcIiAvPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2lyY2xlQ29udGVudH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jZW50ZXJDb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e3N0eWxlLmNpcmNsZU5hbWV9Pntwcm9wcy5jaXJjbGVfbmFtZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5kZXNjfT57cHJvcHMuZGVzY3JpcHRpb24gPT0gbnVsbCA/IFwi576k5Li75b6I56We56eY77yM5LuA5LmI6YO95rKh5YaZflwiIDogcHJvcHMuZGVzY3JpcHRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUuZm9sbG93fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcHJvcHMuam9pbl90eXBlID09IDAgPyAnIzMzODhGRicgOiAnI0NCQ0ZERCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHByb3BzLmpvaW5fdHlwZSA9PSAwID8gJyMzMzg4RkYnIDogJyNDQkNGREQnLFxyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICB7Z2V0Rm9sbG93KHByb3BzLmpvaW5fdHlwZSl9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2lyY2xlSXRlbTsiLCJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IGdldENvbG9yQnlTdHJpbmcgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbHMvdXRpbFwiO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9jaXJjbGVfdGFnX2l0ZW0ubW9kdWxlLnNjc3MnO1xyXG5cclxudHlwZSBJQ2lyY2xlVGFnSXRlbSA9IHtcclxuICAgIHRpdGxlOiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgQ2lyY2xlVGFnSXRlbTogTmV4dFBhZ2U8SUNpcmNsZVRhZ0l0ZW0+ID0gKHtcclxuICAgIHRpdGxlXHJcbn0pID0+IHtcclxuXHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jaXJjbGVfdGFnfSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGdldENvbG9yQnlTdHJpbmcodGl0bGUpICsgJ0JCJyB9fT5cclxuICAgICAgICB7dGl0bGV9XHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2lyY2xlVGFnSXRlbTsiLCJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IFVzZXJCZWFuIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL3NlcnZpY2VzL3VzZXJcIjtcclxuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvc3RvcmVcIjtcclxuaW1wb3J0IFJlY29tbWVuZENpcmNsZSBmcm9tIFwiLi4vLi4vY2lyY2xlL3JlY29tbWVuZF9jaXJjbGUvUmVjb21tZW5kQ2lyY2xlXCI7XHJcbmltcG9ydCBNb2R1bGVUaXRsZSBmcm9tIFwiLi4vLi4vbW9kdWxlX3RpdGxlL01vZHVsZVRpdGxlXCI7XHJcbmltcG9ydCBGb2xsb3dGYW5zIGZyb20gXCIuL2ZvbGxvd19mYW4vRm9sbG93RmFuc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbWluZV9jZW50ZXJfY29udGVudC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBNaW5lQ29udGVudCBmcm9tIFwiLi9taW5lX2NvbnRlbnQvTWluZUNvbnRlbnRcIjtcclxuaW1wb3J0IFRvcFVzZXJJbmZvIGZyb20gXCIuL3RvcF9pbmZvL1RvcFVzZXJJbmZvXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElNaW5lQ2VudGVyIHtcclxuICAgIHVzZXJJbmZvOiBVc2VyQmVhbixcclxuICAgIGlzU2VsZj86IGJvb2xlYW4sXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVVzZXJDZW50ZXIge1xyXG4gICAgdXNlckluZm86IFVzZXJCZWFuLFxyXG4gICAgaXNTZWxmOiBib29sZWFuLFxyXG4gICAgc2VsZWN0SW5kZXg6IG51bWJlcixcclxuICAgIHBhZ2VDaGFuZ2U/OiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZFxyXG59XHJcblxyXG5jb25zdCBNaW5lQ2VudGVyQ29udGVudDogTmV4dFBhZ2U8SVVzZXJDZW50ZXI+ID0gKHsgdXNlckluZm8sIHNlbGVjdEluZGV4LCBwYWdlQ2hhbmdlLCBpc1NlbGYgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgcmVjb21tZW5kQ2lyY2xlRGF0YSB9ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5taW5lKTtcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50Qm9keX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PlxyXG4gICAgICAgICAgICA8VG9wVXNlckluZm8gdXNlckluZm89e3VzZXJJbmZvfSBpc1NlbGY9e2lzU2VsZn0gLz5cclxuICAgICAgICAgICAgPE1pbmVDb250ZW50IHVzZXJJZD17dXNlckluZm8uaWR9IGlzU2VsZj17aXNTZWxmfSBzZWxlY3RJbmRleD17c2VsZWN0SW5kZXh9IHBhZ2VDaGFuZ2U9e3BhZ2VDaGFuZ2V9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodH0+XHJcbiAgICAgICAgICAgIDxGb2xsb3dGYW5zIHVzZXJJbmZvPXt1c2VySW5mb30gaXNTZWxmPXtpc1NlbGZ9IC8+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICFpc1NlbGYgJiZcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWJvdXRfbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2R1bGVUaXRsZSB0aXRsZT1cIuS4juaIkeebuOWFs1wiIGxpbms9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWJvdXRDb250ZW50fT7mmoLml6Dnm7jlhbN+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZWNvbW1lbmRDaXJjbGVEYXRhICYmIDxSZWNvbW1lbmRDaXJjbGUgey4uLnJlY29tbWVuZENpcmNsZURhdGF9IC8+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWluZUNlbnRlckNvbnRlbnQ7IiwiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyBVc2VyQmVhbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9zdG9yZS9zZXJ2aWNlcy91c2VyXCI7XHJcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3N0b3JlL3N0b3JlXCI7XHJcbmltcG9ydCB7IElNaW5lQ2VudGVyIH0gZnJvbSBcIi4uL01pbmVDZW50ZXJDb250ZW50XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9mb2xsb3dfZmFucy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBGb2xsb3dGYW5zOiBOZXh0UGFnZTxJTWluZUNlbnRlcj4gPSAoeyB1c2VySW5mbywgaXNTZWxmIH0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb2xsb3dGYW5zfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLml0ZW19PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5mYW5fbnVtYmVyfT57dXNlckluZm8uZm9sbG93X251bWJlcn08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmZhbl90aXRsZX0+e2lzU2VsZiA/IFwi5oiR55qE5YWz5rOoXCIgOiBcIuS7lueahOWFs+azqFwifTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmV9PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbX0+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmZhbl9udW1iZXJ9Pnt1c2VySW5mby5mYW5fbnVtYmVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZmFuX3RpdGxlfT57aXNTZWxmID8gXCLmiJHnmoTnsonkuJ1cIiA6IFwi5LuW55qE57KJ5LidXCJ9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd0ZhbnM7IiwiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTXlDaXJjbGUgZnJvbSBcIi4uLy4uLy4uL2NpcmNsZS9saXN0X2NvbnRlbnQvbXlfY2lyY2xlL015Q2lyY2xlXCI7XHJcbmltcG9ydCB7IElNaW5lQ2VudGVyIH0gZnJvbSBcIi4uL01pbmVDZW50ZXJDb250ZW50XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9taW5lX2NvbnRlbnQubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgTWluZUhlbHBlciBmcm9tIFwiLi9taW5lX2hlbHBlci9NaW5lSGVscGVyXCI7XHJcbmltcG9ydCBQZXJzb25hbER5bmFtaWMgZnJvbSBcIi4vcGVyc29uYWxfZHluYW1pYy9QZXJzb25hbER5bmFtaWNcIjtcclxuXHJcbmNvbnN0IE1pbmVDb250ZW50OiBOZXh0UGFnZTx7IGlzU2VsZjogYm9vbGVhbiwgdXNlcklkOiBzdHJpbmcsIHNlbGVjdEluZGV4OiBudW1iZXIsIHBhZ2VDaGFuZ2U/OiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZCB9PiA9ICh7IGlzU2VsZiwgdXNlcklkLCBzZWxlY3RJbmRleCwgcGFnZUNoYW5nZSB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgdGFicyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgICB0aXRsZTogaXNTZWxmID8gXCLkuKrkurrliqjmgIFcIiA6IFwi5LuW55qE5Yqo5oCBXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiY2VudGVyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgIHRpdGxlOiBpc1NlbGYgPyBcIuaIkeeahOaxguWKqVwiIDogXCLku5bnmoTmsYLliqlcIixcclxuICAgICAgICAgICAgdHlwZTogXCJoZWxwZXJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgdGl0bGU6IGlzU2VsZiA/IFwi5oiR55qE5biu5ZyIXCIgOiBcIuS7lueahOW4ruWciFwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcImNpcmNsZVwiXHJcbiAgICAgICAgfSxcclxuICAgIF07XHJcblxyXG4gICAgaWYgKGlzU2VsZikge1xyXG4gICAgICAgIHRhYnMucHVzaCh7XHJcbiAgICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLlhoXlrrnmlLbol49cIixcclxuICAgICAgICAgICAgdHlwZTogXCJjb2xsZWN0XCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJDb250ZW50fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1pbmVUYWJ9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0YWJzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50YWJJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogaW5kZXggPT0gc2VsZWN0SW5kZXggPyBcIiMzNjM5NTFcIiA6IFwiIzY3NkQ4NFwiLCBmb250V2VpZ2h0OiBpbmRleCA9PSBzZWxlY3RJbmRleCA/IFwiYm9sZFwiIDogXCJub3JtYWxcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHBhZ2VDaGFuZ2UgJiYgcGFnZUNoYW5nZShpbmRleCkgfX0+e2l0ZW0udGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZGljYXRvcn0gc3R5bGU9e3sgbGVmdDogc2VsZWN0SW5kZXggKiAxMjAgKyAyMCArICdweCcgfX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNlbGVjdEluZGV4ID09IDAgPyA8UGVyc29uYWxEeW5hbWljIGlzU2VsZj17aXNTZWxmfSB1c2VySWQ9e3VzZXJJZH0gLz5cclxuICAgICAgICAgICAgICAgIDogc2VsZWN0SW5kZXggPT0gMSA/IDxNaW5lSGVscGVyIGlzU2VsZj17aXNTZWxmfSB1c2VySWQ9e3VzZXJJZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA6IHNlbGVjdEluZGV4ID09IDIgPyA8TXlDaXJjbGUgaWQ9e3VzZXJJZH0gLz4gOiA8UGVyc29uYWxEeW5hbWljIGlzU2VsZj17aXNTZWxmfSB1c2VySWQ9e3VzZXJJZH0gLz5cclxuICAgICAgICB9XHJcbiAgICA8L2Rpdj5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNaW5lQ29udGVudDsiLCJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBFbXB0eVZpZXcgZnJvbSBcIi4uLy4uLy4uLy4uL3dpZGdldC9FbXB0eVZpZXdcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL21pbmVfaGVscGVyLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RvcmUvc3RvcmUnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGZldGNoTWluZUhlbHBlckxpc3QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vc3RvcmUvc2xpY2VzL21pbmVTbGljZVwiO1xyXG5pbXBvcnQgSGVscGVySXRlbSBmcm9tIFwiLi4vLi4vLi4vLi4vaG9tZS9oZWxwZXJJdGVtL0hlbHBlckl0ZW1cIjtcclxuaW1wb3J0IE15UGFnaW5hdGlvbiBmcm9tIFwiLi4vLi4vLi4vLi4vd2lkZ2V0L015UGFnaW5hdGlvblwiO1xyXG5cclxuY29uc3QgTWluZUhlbHBlcjogTmV4dFBhZ2U8eyBpc1NlbGY6IGJvb2xlYW4sIHVzZXJJZDogc3RyaW5nIH0+ID0gKHtcclxuICAgIGlzU2VsZiwgdXNlcklkXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IHsgbWluZUhlbHBlckRhdGEgfSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubWluZSk7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxvYWREYXRhKGN1cnJlbnRQYWdlLCAyMCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgcGFnZUNoYW5nZSA9IChwYWdlLCBwYWdlU2l6ZSkgPT4ge1xyXG4gICAgICAgIHNldEN1cnJlbnRQYWdlKHBhZ2UpO1xyXG4gICAgICAgIGxvYWREYXRhKHBhZ2UsIHBhZ2VTaXplKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8g6I635Y+W5pWw5o2uXHJcbiAgICBmdW5jdGlvbiBsb2FkRGF0YShwYWdlOiBudW1iZXIsIHBhZ2VTaXplOiBudW1iZXIpIHtcclxuICAgICAgICBkaXNwYXRjaChmZXRjaE1pbmVIZWxwZXJMaXN0KHtcclxuICAgICAgICAgICAgaWQ6IHVzZXJJZCxcclxuICAgICAgICAgICAgcGFnZTogcGFnZSxcclxuICAgICAgICAgICAgbGltaXQ6IHBhZ2VTaXplXHJcbiAgICAgICAgfSkpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWluZUhlbHBDb250ZW50fT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1pbmVIZWxwZXJEYXRhLmxpc3QubGVuZ3RoID09IDAgPyA8RW1wdHlWaWV3IC8+IDpcclxuICAgICAgICAgICAgICAgIG1pbmVIZWxwZXJEYXRhLmxpc3QubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8SGVscGVySXRlbSBrZXk9e2l0ZW0uaWR9IHsuLi5pdGVtfSAvPlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgPE15UGFnaW5hdGlvbiB0b3RhbD17bWluZUhlbHBlckRhdGEudG90YWx9IHBhZ2VTaXplPXsyMH0gc2hvd1NpemVDaGFuZ2VyPXtmYWxzZX0gY3VycmVudD17Y3VycmVudFBhZ2V9IG9uQ2hhbmdlPXtwYWdlQ2hhbmdlfSAvPlxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNaW5lSGVscGVyOyIsImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IEVtcHR5VmlldyBmcm9tIFwiLi4vLi4vLi4vLi4vd2lkZ2V0L0VtcHR5Vmlld1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcGVyc29uYWxfZHluYW1pYy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBQZXJzb25hbER5bmFtaWM6IE5leHRQYWdlPHsgaXNTZWxmOiBib29sZWFuLCB1c2VySWQ6IHN0cmluZyB9PiA9ICh7XHJcbiAgICBpc1NlbGYsIHVzZXJJZFxyXG59KSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wZXJzb25hbENvbnRlbnR9PlxyXG4gICAgICAgIDxFbXB0eVZpZXcgLz5cclxuICAgIDwvZGl2PlxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBlcnNvbmFsRHluYW1pYzsiLCJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IFVzZXJCZWFuIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3N0b3JlL3NlcnZpY2VzL3VzZXJcIjtcclxuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmUvc3RvcmVcIjtcclxuaW1wb3J0IHsgSU1pbmVDZW50ZXIgfSBmcm9tIFwiLi4vTWluZUNlbnRlckNvbnRlbnRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3RvcF91c2VyX2luZm8ubW9kdWxlLnNjc3MnO1xyXG5cclxuXHJcbmNvbnN0IFRvcFVzZXJJbmZvOiBOZXh0UGFnZTxJTWluZUNlbnRlcj4gPSAoeyB1c2VySW5mbywgaXNTZWxmIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCB7IHVzZXIgfSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFJ6KCkge1xyXG4gICAgICAgIGlmICh1c2VySW5mbz8uYXV0aGVudGljYXRpb25fdHlwZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAn5bey6K6k6K+BJztcclxuICAgICAgICB9IGVsc2UgaWYgKHVzZXJJbmZvPy5hdXRoZW50aWNhdGlvbl90eXBlID09IDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuICfkvIHkuJrorqTor4EnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCLmnKrorqTor4FcIjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvQ29udGVudH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXNrfSAvPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaXNTZWxmICYmIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnVwZGF0YV9jZW50ZXJfcGljfSA+5pu05o2i5bCB6Z2iPC9zcGFuPlxyXG4gICAgICAgIH1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJJbmZvfT5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy51c2VySGVhZGVyfSBzcmM9e3VzZXJJbmZvPy5hdmF0YXIgPyB1c2VySW5mbz8uYXZhdGFyIDogXCJodHRwOi8vd3l5aHViYW5nLm9zcy1jbi1jaGVuZ2R1LmFsaXl1bmNzLmNvbS9kZWZhdWx0L2RlZmF1bHRfdXNlci5wbmdcIn0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubmlja25hbWV9Pnt1c2VySW5mbz8ubmlja25hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlckluZm8/LnNleCAmJiA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLnNleH0gc3JjPXt1c2VySW5mbz8uc2V4ID09IDIgPyAnL3N0YXRpYy9pbWFnZXMvaW1nX2dpcmxfaWNvbi5wbmcnIDogJy9zdGF0aWMvaW1hZ2VzL2ltZ19ib3lfaWNvbi5wbmcnfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY3JlZGl0X3Njb3JlfT57Z2V0UnooKX0gLyDmiJDljZXnjod7dXNlckluZm8/Lm9yZGVyX3JhdGV9JSAvIOS/oeeUqHt1c2VySW5mbz8uY3JlZGl0X3Njb3JlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT57dXNlckluZm8/LmRlc2NyaXB0aW9uID8/IFwi6L+Z5Liq5Lq65b6I5oeS77yM5LuA5LmI6YO95rKh5YaZflwifTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlzU2VsZiA/XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtbc3R5bGVzLmVkaXQsIHN0eWxlcy5mbGV4RW5kXS5qb2luKCcgJyl9Pue8lui+kTwvc3Bhbj4gOlxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJbmZvLmZvbGxvd2VkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtbc3R5bGVzLmZvbGxvdywgc3R5bGVzLmZsZXhFbmRdLmpvaW4oJyAnKX0+5bey5YWz5rOoPC9zcGFuPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuZmxleEVuZH0gc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvX2ZvbGxvdy5wbmdcIiB3aWR0aD17NDB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BVc2VySW5mbzsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9tb2R1bGVfdGl0bGUubW9kdWxlLnNjc3MnO1xyXG5cclxuaW50ZXJmYWNlIElNb2R1bGVUaXRsZSB7XHJcbiAgICB0aXRsZTogc3RyaW5nLFxyXG4gICAgbGluazogc3RyaW5nLFxyXG4gICAgaW1hZ2U/OiBzdHJpbmcsXHJcbn1cclxuXHJcbmNvbnN0IE1vZHVsZVRpdGxlID0gKHByb3BzOiBJTW9kdWxlVGl0bGUpID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlQ29udGVudH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0Qm9yZGVyfSAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfSBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IHByb3BzLmltYWdlID09IG51bGwgPyBcIlwiIDogXCJ1cmwoXCIgKyBwcm9wcy5pbWFnZSArIFwiKVwiIH19Pntwcm9wcy50aXRsZX08L3NwYW4+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm9wcy5saW5rICYmIDxhIGNsYXNzTmFtZT17c3R5bGVzLm1vcmV9IGhyZWY9e3Byb3BzLmxpbmt9PuabtOWkmjwvYT5cclxuICAgICAgICB9XHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kdWxlVGl0bGU7IiwiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9jb21wb25lbnRzL3dpZGdldC9lbXB0eV92aWV3Lm1vZHVsZS5zY3NzJztcclxuXHJcblxyXG5jb25zdCBFbXB0eVZpZXc6IE5leHRQYWdlPHsgdHlwZT86IG51bWJlciB9PiA9IChcclxuICAgIHtcclxuICAgICAgICB0eXBlID0gMCxcclxuICAgIH1cclxuKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBnZXRFcnJvckltZygpIHtcclxuICAgICAgICBsZXQgaW1nID0gXCJcIjtcclxuICAgICAgICBpZiAodHlwZSA9PSAwKSB7IC8v5peg5YaF5a65XHJcbiAgICAgICAgICAgIGltZyA9IFwiL3N0YXRpYy9pbWFnZXMvaWNvX2VtcHR5LnBuZ1wiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbWc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1wdHlfY29udGVudH0+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0gc3JjPXtnZXRFcnJvckltZygpfSB3aWR0aD1cIjUwJVwiIGFsdD1cIlwiIC8+XHJcbiAgICA8L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVtcHR5VmlldzsiLCJpbXBvcnQgeyBQYWdpbmF0aW9uLCBQYWdpbmF0aW9uUHJvcHMgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2NvbXBvbmVudHMvd2lkZ2V0L215X3BhZ2luYXRpb24ubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgTXlQYWdpbmF0aW9uOiBOZXh0UGFnZTxQYWdpbmF0aW9uUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SXRlbVJlbmRlcihjdXJyZW50LCB0eXBlLCBvcmlnaW5hbEVsZW1lbnQpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgICAgIGlmICh0eXBlID09PSAncHJldicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxzcGFuPuS4iuS4gOmhtTwvc3Bhbj47XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnbmV4dCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxzcGFuPuS4i+S4gOmhtTwvc3Bhbj47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvcmlnaW5hbEVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnaW5hdGlvbn0+XHJcbiAgICAgICAgPFBhZ2luYXRpb24gey4uLnByb3BzfSAvPlxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15UGFnaW5hdGlvbjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9mb290ZXIubW9kdWxlLnNjc3NcIjtcclxuXHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvZm9vdGVyLnBuZ1wiIHdpZHRoPVwiMTAwJVwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPuWFs+S6juaIkeS7rDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiXCI+572R56uZ5LuL57uNPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiXCI+5YWN6LSj5aOw5piOPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiXCI+5Y+L5oOF6ZO+5o6lPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+5Lqn5ZOB5pyN5YqhPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJcIj7luK7lnIg8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJcIj7lrp7lkI3orqTor4E8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJcIj7msYLogYzmi5vogZg8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJcIj7mm53lhYnlj7A8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7luK7liqnkuK3lv4M8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIlwiPuW4uOingemXrumimDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIlwiPuacjeWKoeS7i+e7jTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIlwiPuiBlOezu+aIkeS7rDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZG93bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZG93bk90aGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvYXBwX2Rvd24ucG5nXCIgd2lkdGg9XCI4MHB4XCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFQUOS4i+i9vVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kb3duT3RoZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9hcHBfZG93bi5wbmdcIiB3aWR0aD1cIjgwcHhcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5omL5py6572R6aG154mIXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRvd25PdGhlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2FwcF9kb3duLnBuZ1wiIHdpZHRoPVwiODBweFwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDlvq7kv6HlsI/nqIvluo9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNvcHl9PiDCqSBDb3B5cmlnaHQgMjAyMS4g5ZC05rSL5q+FXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuY29weUxpbmt9IGhyZWY9XCJodHRwOi8vYmVpYW4ubWlpdC5nb3YuY24vXCIgdGFyZ2V0PVwiYmxhbmtcIiByZWw9XCJub2ZvbGxvd1wiPumEgklDUOWkhzIwMjEwMDI0MTjlj7c8L2E+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9oZWFkZXIubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgd3JhcHBlciwgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICcuLi9zdG9yZS9zdG9yZSc7XHJcbmltcG9ydCB7IHNob3dPckhpZGVMb2dpbiB9IGZyb20gJy4uL3N0b3JlL3NsaWNlcy9sb2dpblNsaWNlJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZ2V0U2Nyb2xsYmFyV2lkdGggfSBmcm9tICcuLi91dGlscy91dGlsJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBzd2l0Y2hVc2VyUGFnZVNlbGVjdEluZGV4IH0gZnJvbSAnLi4vc3RvcmUvc2xpY2VzL21pbmVTbGljZSc7XHJcbmltcG9ydCB7IG91dExvZ2luIH0gZnJvbSAnLi4vc3RvcmUvc2xpY2VzL3VzZXJTbGljZSc7XHJcblxyXG5pbnRlcmZhY2UgSUhlYWRlciB7XHJcbiAgICBwYWdlOiBudW1iZXIsXHJcbiAgICB1c2VyQ2VudGVyQ2hhbmdlPzogKGluZGV4OiBudW1iZXIpID0+IHZvaWRcclxufVxyXG5cclxuY29uc3QgSGVhZGVyOiBOZXh0UGFnZTxJSGVhZGVyPiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgaXNTaG93TG9naW4gPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmxvZ2luLmlzU2hvd0xvZ2luKTtcclxuICAgIGNvbnN0IHsgaXNMb2dpbiwgdXNlciB9ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IHVzZXJDZW50ZXJMaXN0ID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb19teV9jZW50ZXIucG5nXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIuaIkeeahOS4u+mhtVwiLFxyXG4gICAgICAgICAgICBsaW5rOiBcIi91c2VyL1wiICsgdXNlcj8uaWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb19teV9jaXJjbGUucG5nXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIuaIkeeahOW4ruWciFwiLFxyXG4gICAgICAgICAgICBsaW5rOiBcIi91c2VyL1wiICsgdXNlcj8uaWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb19jb2xsZWN0LnBuZ1wiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLmiJHnmoTmlLbol49cIixcclxuICAgICAgICAgICAgbGluazogXCIvdXNlci9cIiArIHVzZXI/LmlkXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgICBpbWFnZTogXCIvc3RhdGljL2ltYWdlcy9pY29fc2V0dGluZy5wbmdcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwi57O757uf6K6+572uXCIsXHJcbiAgICAgICAgICAgIGxpbms6IFwiXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb19vdXRfbG9naW4ucG5nXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIumAgOWHuueZu+W9lVwiLFxyXG4gICAgICAgICAgICBsaW5rOiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBzZW5kTGlzdCA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgICBpbWFnZTogXCIvc3RhdGljL2ltYWdlcy9pY29fcmVsZWFzZV9oZWxwLnBuZ1wiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLlj5HmsYLliqlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgaW1hZ2U6IFwiL3N0YXRpYy9pbWFnZXMvaWNvX3JlbGVhc2VfZHluYW1pYy5wbmdcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwi5Y+R5Yqo5oCBXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb19yZWxlYXNlX3d6LnBuZ1wiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLlj5Hmlofnq6BcIlxyXG4gICAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgW2lzU2hvd1VzZXJDZW50ZXIsIHNldFNob3dVc2VyQ2VudGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc1Nob3dTZW5kRHluYW1pYywgc2V0U2hvd1NlbmREeW5hbWljXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICAvLyDmuLLmn5PlrozmiJDlm57osINcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlRGlhbG9nKTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IGhpZGVEaWFsb2cgPSAoZXY6IGFueSkgPT4ge1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBldi50YXJnZXQgfHwgZXYuc3JjRWxlbWVudDtcclxuICAgICAgICBsZXQgaWQgPSB0YXJnZXQuaWQ7XHJcbiAgICAgICAgaWYgKGlkICE9PSBcInVzZXJIZWFkXCIpIHtcclxuICAgICAgICAgICAgc2V0U2hvd1VzZXJDZW50ZXIoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaWQgIT09IFwic2VuZER5bmFtaWNcIikge1xyXG4gICAgICAgICAgICBzZXRTaG93U2VuZER5bmFtaWMoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1c2VyQ2VudGVyU2hvdygpIHtcclxuICAgICAgICBzZXRTaG93VXNlckNlbnRlcighaXNTaG93VXNlckNlbnRlcik7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHNlbmRTaG93KCkge1xyXG4gICAgICAgIHNldFNob3dTZW5kRHluYW1pYyghaXNTaG93U2VuZER5bmFtaWMpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXNlckNlbnRlckl0ZW1DbGljayA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgaWYgKGluZGV4IDwgMykge1xyXG4gICAgICAgICAgICBpZiAocHJvcHMudXNlckNlbnRlckNoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMudXNlckNlbnRlckNoYW5nZShpbmRleCA9PSAwID8gMCA6IGluZGV4ICsgMSlcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHN3aXRjaFVzZXJQYWdlU2VsZWN0SW5kZXgoeyBrZXk6IHVzZXIuaWQsIGluZGV4OiBpbmRleCA9PSAwID8gMCA6IGluZGV4ICsgMSB9KSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogdXNlckNlbnRlckxpc3RbaW5kZXhdLmxpbmtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09IDMpIHtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6IHVzZXJDZW50ZXJMaXN0W2luZGV4XS5saW5rXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PSA0KSB7XHJcbiAgICAgICAgICAgIC8vIOmAgOWHuueZu+W9lVxyXG4gICAgICAgICAgICBkaXNwYXRjaChvdXRMb2dpbigpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZW5kRHluYW1pY0l0ZW1DbGljayA9IChldjogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLngrnlh7vkuoZcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd0xvZ2luID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHNob3dPckhpZGVMb2dpbih0cnVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0gc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiBpc1Nob3dMb2dpbiA/IChnZXRTY3JvbGxiYXJXaWR0aCgpICsgJ3B4JykgOiAnMHB4JyB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIuLi9cIj48aW1nIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2xvZ28ucG5nXCIgdGl0bGU9XCLkupLluK5cIiBhbHQ9XCJcIiAvPjwvYT5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5tZW51fT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwcm9wcy5wYWdlID09PSAwID8gc3R5bGVzLm1lbnVTZWxlY3QgOiAnJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGEgY2xhc3NOYW1lPXtzdHlsZXMubWVudUFIb21lfT7pppbpobU8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cHJvcHMucGFnZSA9PT0gMSA/IHN0eWxlcy5tZW51U2VsZWN0IDogJyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2hlbHBlci9saXN0XCI+PGEgY2xhc3NOYW1lPXtzdHlsZXMubWVudUFIZWxwfT7msYLliqk8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cHJvcHMucGFnZSA9PT0gMiA/IHN0eWxlcy5tZW51U2VsZWN0IDogJyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2R5bmFtaWNcIj48YSBjbGFzc05hbWU9e3N0eWxlcy5tZW51QUR5bmFtaWN9PuWKqOaAgTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwcm9wcy5wYWdlID09PSAzID8gc3R5bGVzLm1lbnVTZWxlY3QgOiAnJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2lyY2xlXCI+PGEgY2xhc3NOYW1lPXtzdHlsZXMubWVudUFDaXJjbGV9PuW4ruWciDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2h9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi5pCc57SiIOaxguWKqS/liqjmgIEv5ZyI5a2QL+aWh+eroFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoSWNvbn0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VySW5mb30+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0xvZ2luID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJNZW51fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMudXNlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJ1c2VySGVhZFwiIHNyYz17dXNlcj8uYXZhdGFyID8gdXNlcj8uYXZhdGFyIDogJy9zdGF0aWMvaW1hZ2VzL2RlZmF1bHRfdXNlci5wbmcnfSBvbkNsaWNrPXsoKSA9PiB7IHVzZXJDZW50ZXJTaG93KCkgfX0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyQ2VudGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdmlzaWJpbGl0eTogaXNTaG93VXNlckNlbnRlciA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy51c2VyQ2VudGVyTmFtZX0+e3VzZXI/Lm5pY2tuYW1lID8gdXNlcj8ubmlja25hbWUgOiAn5pyq55m75b2VJ308L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlckNlbnRlckxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy51c2VyQ2VudGVySXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgaXRlbS5pbWFnZSArIFwiKVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyB1c2VyQ2VudGVySXRlbUNsaWNrKGluZGV4KSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvaGVhZGVyX21lc3NhZ2UucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZUhpbnR9Pjk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJzZW5kRHluYW1pY1wiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2hlYWRlcl9zZW5kLnBuZ1wiIG9uQ2xpY2s9eygpID0+IHsgc2VuZFNob3coKSB9fSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlbmREeW5hbWljfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdmlzaWJpbGl0eTogaXNTaG93U2VuZER5bmFtaWMgPyAndmlzaWJsZScgOiAnaGlkZGVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRMaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpdGVtLmlkfSBjbGFzc05hbWU9e3N0eWxlcy5zZW5kRG5hbWljSXRlbX0gb25DbGljaz17c2VuZER5bmFtaWNJdGVtQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlfSB3aWR0aD1cIjQwcHhcIiBoZWlnaHQ9XCI0MHB4XCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRvd25Mb2dpbn0gb25DbGljaz17c2hvd0xvZ2lufT7ngrnlh7vnmbvlvZU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7IiwiXHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IFJlYWN0Tm9kZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9sYXlvdXQubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgTGF5b3V0OiBOZXh0UGFnZTx7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG4gICAga2V5d29yZHM/OiBzdHJpbmc7XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlIHwgUmVhY3ROb2RlW107XHJcbn0+ID0gKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBrZXl3b3JkcywgY2xhc3NOYW1lLCBjaGlsZHJlbiB9KSA9PiB7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0b1RvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b1RvcCcpO1xyXG4gICAgICAgICAgICBpZiAodG9Ub3AgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDEwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0b1RvcC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvVG9wLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDwgMTMwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvVG9wLnN0eWxlLnJpZ2h0ID0gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCAtIDEzMDAgKyB3aW5kb3cucGFnZVhPZmZzZXQpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0b1RvcC5zdHlsZS5yaWdodCA9IFwiY2FsYygoMTAwJSAtIDEzMDBweCkgLyAyIC0gNTBweCArIFwiICsgd2luZG93LnBhZ2VYT2Zmc2V0ICsgXCIpXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiA8PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+e3RpdGxlIHx8ICfkupLluK4nfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9e2tleXdvcmRzIHx8ICcnfSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbiB8fCAnJ30gLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9uIHx8ICcnfSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57Y2hpbGRyZW59PC9tYWluPlxyXG5cclxuICAgICAgICA8aW1nIGlkPVwidG9Ub3BcIiBjbGFzc05hbWU9e3N0eWxlcy50b1RvcH0gc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvX2dvX3RvcC5wbmdcIiB3aWR0aD1cIjQwcHhcIiB0aXRsZT1cIui/lOWbnumhtumDqFwiIGFsdD1cIlwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfX0gLz5cclxuICAgIDwvPlxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpO1xudmFyIF9yb3V0ZXIxID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xudmFyIF91c2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3QgcHJlZmV0Y2hlZCA9IHtcbn07XG5mdW5jdGlvbiBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVybjtcbiAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBjdXJMb2NhbGUgPSBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWU7XG59XG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCB7IHRhcmdldCAgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgcmV0dXJuIHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMjtcbn1cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKSB7XG4gICAgY29uc3QgeyBub2RlTmFtZSAgfSA9IGUuY3VycmVudFRhcmdldDtcbiAgICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCAmJiBhcy5pbmRleE9mKCcjJykgPj0gMCkge1xuICAgICAgICBzY3JvbGwgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gICAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICAgIHNoYWxsb3csXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgc2Nyb2xsXG4gICAgfSk7XG59XG5mdW5jdGlvbiBMaW5rKHByb3BzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZCA9IHtcbiAgICAgICAgICAgIGhyZWY6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wcyA9IE9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7XG4gICAgICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gPT0gbnVsbCB8fCB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZCA9IHtcbiAgICAgICAgICAgIGFzOiB0cnVlLFxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgICAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICAgICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgICAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgICAgICAgbG9jYWxlOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHMgPSBPYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO1xuICAgICAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XTtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAncmVwbGFjZScgfHwga2V5ID09PSAnc2Nyb2xsJyB8fCBrZXkgPT09ICdzaGFsbG93JyB8fCBrZXkgPT09ICdwYXNzSHJlZicgfHwga2V5ID09PSAncHJlZmV0Y2gnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICAgICAgY29uc3QgaGFzV2FybmVkID0gX3JlYWN0LmRlZmF1bHQudXNlUmVmKGZhbHNlKTtcbiAgICAgICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2U7XG4gICAgY29uc3Qgcm91dGVyID0gKDAsIF9yb3V0ZXIxKS51c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IGhyZWYgLCBhcyAgfSA9IF9yZWFjdC5kZWZhdWx0LnVzZU1lbW8oKCk9PntcbiAgICAgICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5ocmVmLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGFzOiBwcm9wcy5hcyA/ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmFzKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG4gICAgICAgIH07XG4gICAgfSwgW1xuICAgICAgICByb3V0ZXIsXG4gICAgICAgIHByb3BzLmhyZWYsXG4gICAgICAgIHByb3BzLmFzXG4gICAgXSk7XG4gICAgbGV0IHsgY2hpbGRyZW4gLCByZXBsYWNlICwgc2hhbGxvdyAsIHNjcm9sbCAsIGxvY2FsZSAgfSA9IHByb3BzO1xuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNoaWxkcmVuID0gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBudWxsLCBjaGlsZHJlbik7XG4gICAgfVxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGxldCBjaGlsZDtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiIFxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGRSZWYgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZjtcbiAgICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46ICcyMDBweCdcbiAgICB9KTtcbiAgICBjb25zdCBzZXRSZWYgPSBfcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZihlbCk7XG4gICAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgY2hpbGRSZWYsXG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZlxuICAgIF0pO1xuICAgIF9yZWFjdC5kZWZhdWx0LnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmICgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpO1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldO1xuICAgICAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgICAgIGxvY2FsZTogY3VyTG9jYWxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgYXMsXG4gICAgICAgIGhyZWYsXG4gICAgICAgIGlzVmlzaWJsZSxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBwLFxuICAgICAgICByb3V0ZXJcbiAgICBdKTtcbiAgICBjb25zdCBjaGlsZFByb3BzID0ge1xuICAgICAgICByZWY6IHNldFJlZixcbiAgICAgICAgb25DbGljazogKGUpPT57XG4gICAgICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGUpPT57XG4gICAgICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTtcbiAgICAgICAgfVxuICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICBwcmlvcml0eTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChwcm9wcy5wYXNzSHJlZiB8fCBjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSB7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9IHJvdXRlciAmJiByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiYgKDAsIF9yb3V0ZXIpLmdldERvbWFpbkxvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlcyk7XG4gICAgICAgIGNoaWxkUHJvcHMuaHJlZiA9IGxvY2FsZURvbWFpbiB8fCAoMCwgX3JvdXRlcikuYWRkQmFzZVBhdGgoKDAsIF9yb3V0ZXIpLmFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKTtcbiAgICB9XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKSk7XG59XG52YXIgX2RlZmF1bHQgPSBMaW5rO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmsuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gdm9pZCAwO1xuZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoO1xufVxuY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0ggPyAocGF0aCk9PntcbiAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO1xuICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nO1xuICAgIH1cbn0gOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSB2b2lkIDA7XG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGNiKSB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2Ioe1xuICAgICAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIDEpO1xufTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2s7XG5jb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2sgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGlkKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG59O1xuZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSBjYW5jZWxJZGxlQ2FsbGJhY2s7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubWFya0Fzc2V0RXJyb3IgPSBtYXJrQXNzZXRFcnJvcjtcbmV4cG9ydHMuaXNBc3NldEVycm9yID0gaXNBc3NldEVycm9yO1xuZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0ID0gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdDtcbmV4cG9ydHMuY3JlYXRlUm91dGVMb2FkZXIgPSBjcmVhdGVSb3V0ZUxvYWRlcjtcbnZhciBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZVwiKSk7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwO1xuZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksIG1hcCwgZ2VuZXJhdG9yKSB7XG4gICAgbGV0IGVudHJ5ID0gbWFwLmdldChrZXkpO1xuICAgIGlmIChlbnRyeSkge1xuICAgICAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgICAgICAgIHJldHVybiBlbnRyeS5mdXR1cmU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7XG4gICAgfVxuICAgIGxldCByZXNvbHZlcjtcbiAgICBjb25zdCBwcm9tID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIHJlc29sdmVyID0gcmVzb2x2ZTtcbiAgICB9KTtcbiAgICBtYXAuc2V0KGtleSwgZW50cnkgPSB7XG4gICAgICAgIHJlc29sdmU6IHJlc29sdmVyLFxuICAgICAgICBmdXR1cmU6IHByb21cbiAgICB9KTtcbiAgICByZXR1cm4gZ2VuZXJhdG9yID8gZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpPT4ocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSlcbiAgICApIDogcHJvbTtcbn1cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspIHtcbiAgICB0cnkge1xuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICByZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSkgfHwgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5jb25zdCBjYW5QcmVmZXRjaCA9IGhhc1ByZWZldGNoKCk7XG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShocmVmLCBhcywgbGluaykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopPT57XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICAgICAgaWYgKGFzKSBsaW5rLmFzID0gYXM7XG4gICAgICAgIGxpbmsucmVsID0gYHByZWZldGNoYDtcbiAgICAgICAgbGluay5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIGxpbmsub25sb2FkID0gcmVzO1xuICAgICAgICBsaW5rLm9uZXJyb3IgPSByZWo7XG4gICAgICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgICAgIGxpbmsuaHJlZiA9IGhyZWY7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfSk7XG59XG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7XG5mdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7XG59XG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLCBzY3JpcHQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9ICgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcbiAgICAgICAgO1xuICAgICAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAgICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgICAgICBzY3JpcHQuc3JjID0gc3JjO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfSk7XG59XG4vLyBXZSB3YWl0IGZvciBwYWdlcyB0byBiZSBidWlsdCBpbiBkZXYgYmVmb3JlIHdlIHN0YXJ0IHRoZSByb3V0ZSB0cmFuc2l0aW9uXG4vLyB0aW1lb3V0IHRvIHByZXZlbnQgYW4gdW4tbmVjZXNzYXJ5IGhhcmQgbmF2aWdhdGlvbiBpbiBkZXZlbG9wbWVudC5cbmxldCBkZXZCdWlsZFByb21pc2U7XG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLCBtcywgZXJyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgcC50aGVuKChyKT0+e1xuICAgICAgICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmUocik7XG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIC8vIFdlIHdyYXAgdGhlc2UgY2hlY2tzIHNlcGFyYXRlbHkgZm9yIGJldHRlciBkZWFkLWNvZGUgZWxpbWluYXRpb24gaW5cbiAgICAgICAgLy8gcHJvZHVjdGlvbiBidW5kbGVzLlxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgIChkZXZCdWlsZFByb21pc2UgfHwgUHJvbWlzZS5yZXNvbHZlKCkpLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSB7XG4gICAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgfVxuICAgIGNvbnN0IG9uQnVpbGRNYW5pZmVzdCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO1xuICAgICAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKT0+e1xuICAgICAgICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChvbkJ1aWxkTWFuaWZlc3QsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7XG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgICAgICAgICBhc3NldFByZWZpeCArICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgKyBlbmNvZGVVUkkoKDAsIF9nZXRBc3NldFBhdGhGcm9tUm91dGUpLmRlZmF1bHQocm91dGUsICcuanMnKSksIFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgICAgICAgIGNzczogW11cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpPT57XG4gICAgICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoKGVudHJ5KT0+YXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuanMnKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmNzcycpXG4gICAgICAgICAgICApXG4gICAgICAgIH07XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeCkge1xuICAgIGNvbnN0IGVudHJ5cG9pbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IGxvYWRlZFNjcmlwdHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgc3R5bGVTaGVldHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgcm91dGVzID0gbmV3IE1hcCgpO1xuICAgIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmMpIHtcbiAgICAgICAgbGV0IHByb20gPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgcHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKSB7XG4gICAgICAgIGxldCBwcm9tID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgc3R5bGVTaGVldHMuc2V0KGhyZWYsIHByb20gPSBmZXRjaChocmVmKS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRleHRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHdoZW5FbnRyeXBvaW50IChyb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FbnRyeXBvaW50IChyb3V0ZSwgZXhlY3V0ZSkge1xuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oKGZuKT0+Zm4oKVxuICAgICAgICAgICAgKS50aGVuKChleHBvcnRzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCB8fCBleHBvcnRzLFxuICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICwgKGVycik9Pih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKS50aGVuKChpbnB1dCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpO1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpO1xuICAgICAgICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRSb3V0ZSAocm91dGUsIHByZWZldGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgcm91dGVzLCAoKT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlRmlsZXNQcm9taXNlID0gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKHsgc2NyaXB0cyAsIGNzcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSkgPyBbXSA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSwgXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpPT4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiByZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGRldkJ1aWxkUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdXRlRmlsZXNQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlRmlsZXNQcm9taXNlLmZpbmFsbHkoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocm91dGVGaWxlc1Byb21pc2UsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHsgZW50cnlwb2ludCAsIHN0eWxlcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHN0eWxlc1xuICAgICAgICAgICAgICAgICAgICB9LCBlbnRyeXBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXM7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZWZldGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHByZWZldGNoIChyb3V0ZSkge1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgICAgICAgbGV0IGNuO1xuICAgICAgICAgICAgaWYgKGNuID0gbmF2aWdhdG9yLmNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKG91dHB1dCk9PlByb21pc2UuYWxsKGNhblByZWZldGNoID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpPT5wcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKVxuICAgICAgICAgICAgICAgICkgOiBbXSlcbiAgICAgICAgICAgICkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsIHRydWUpLmNhdGNoKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgICAoKT0+e1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIndpdGhSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF93aXRoUm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5leHBvcnRzLnVzZVJvdXRlciA9IHVzZVJvdXRlcjtcbmV4cG9ydHMuY3JlYXRlUm91dGVyID0gY3JlYXRlUm91dGVyO1xuZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2UgPSBtYWtlUHVibGljUm91dGVySW5zdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIikpO1xudmFyIF9yb3V0ZXJDb250ZXh0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHRcIik7XG52YXIgX3dpdGhSb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHNpbmdsZXRvblJvdXRlciA9IHtcbiAgICByb3V0ZXI6IG51bGwsXG4gICAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICAgIHJlYWR5IChjYikge1xuICAgICAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncm91dGUnLFxuICAgICdxdWVyeScsXG4gICAgJ2FzUGF0aCcsXG4gICAgJ2NvbXBvbmVudHMnLFxuICAgICdpc0ZhbGxiYWNrJyxcbiAgICAnYmFzZVBhdGgnLFxuICAgICdsb2NhbGUnLFxuICAgICdsb2NhbGVzJyxcbiAgICAnZGVmYXVsdExvY2FsZScsXG4gICAgJ2lzUmVhZHknLFxuICAgICdpc1ByZXZpZXcnLFxuICAgICdpc0xvY2FsZURvbWFpbicsXG4gICAgJ2RvbWFpbkxvY2FsZXMnLCBcbl07XG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAgICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAgICdoYXNoQ2hhbmdlQ29tcGxldGUnLCBcbl07XG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAgICdwdXNoJyxcbiAgICAncmVwbGFjZScsXG4gICAgJ3JlbG9hZCcsXG4gICAgJ2JhY2snLFxuICAgICdwcmVmZXRjaCcsXG4gICAgJ2JlZm9yZVBvcFN0YXRlJywgXG5dO1xuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgICBnZXQgKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICB9XG59KTtcbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbiAgICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7XG4gICAgfTtcbn0pO1xucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KT0+e1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e1xuICAgICAgICBfcm91dGVyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKDEpfWA7XG4gICAgICAgICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyO1xuICAgICAgICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbmZ1bmN0aW9uIGdldFJvdXRlcigpIHtcbiAgICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBvbiB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJztcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbnZhciBfZGVmYXVsdCA9IHNpbmdsZXRvblJvdXRlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuZnVuY3Rpb24gdXNlUm91dGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVyKC4uLmFyZ3MpIHtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IF9yb3V0ZXIuZGVmYXVsdCguLi5hcmdzKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpPT5jYigpXG4gICAgKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXTtcbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbmZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpIHtcbiAgICBjb25zdCBfcm91dGVyMSA9IHJvdXRlcjtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICB9O1xuICAgIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe1xuICAgICAgICBpZiAodHlwZW9mIF9yb3V0ZXIxW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyMVtwcm9wZXJ0eV0pID8gW10gOiB7XG4gICAgICAgICAgICB9LCBfcm91dGVyMVtwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyMVtwcm9wZXJ0eV07XG4gICAgfVxuICAgIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgICBpbnN0YW5jZS5ldmVudHMgPSBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgcmV0dXJuIF9yb3V0ZXIxW2ZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXNlSW50ZXJzZWN0aW9uID0gdXNlSW50ZXJzZWN0aW9uO1xudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7IHJvb3RNYXJnaW4gLCBkaXNhYmxlZCAgfSkge1xuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7XG4gICAgY29uc3QgdW5vYnNlcnZlID0gKDAsIF9yZWFjdCkudXNlUmVmKCk7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gKDAsIF9yZWFjdCkudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHNldFJlZiA9ICgwLCBfcmVhY3QpLnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpO1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuO1xuICAgICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKGVsLCAoaXNWaXNpYmxlKT0+aXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKVxuICAgICAgICAgICAgLCB7XG4gICAgICAgICAgICAgICAgcm9vdE1hcmdpblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGlzRGlzYWJsZWQsXG4gICAgICAgIHJvb3RNYXJnaW4sXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICAoMCwgX3JlYWN0KS51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRWaXNpYmxlKHRydWUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCk9PigwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykuY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICByZXR1cm4gW1xuICAgICAgICBzZXRSZWYsXG4gICAgICAgIHZpc2libGVcbiAgICBdO1xufVxuZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgaWQgLCBvYnNlcnZlciAsIGVsZW1lbnRzICB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7XG4gICAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XG4gICAgICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKSB7XG4gICAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJyc7XG4gICAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZCk7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpPT57XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpPT57XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIG9wdGlvbnMpO1xuICAgIG9ic2VydmVycy5zZXQoaWQsIGluc3RhbmNlID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgb2JzZXJ2ZXIsXG4gICAgICAgIGVsZW1lbnRzXG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gd2l0aFJvdXRlcjtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpIHtcbiAgICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcykge1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHJvdXRlcjogKDAsIF9yb3V0ZXIpLnVzZVJvdXRlcigpXG4gICAgICAgIH0sIHByb3BzKSkpO1xuICAgIH1cbiAgICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgV2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xuICAgICAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYDtcbiAgICB9XG4gICAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0RG9tYWluTG9jYWxlID0gZ2V0RG9tYWluTG9jYWxlO1xuZXhwb3J0cy5hZGRMb2NhbGUgPSBhZGRMb2NhbGU7XG5leHBvcnRzLmRlbExvY2FsZSA9IGRlbExvY2FsZTtcbmV4cG9ydHMuaGFzQmFzZVBhdGggPSBoYXNCYXNlUGF0aDtcbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmV4cG9ydHMuaXNMb2NhbFVSTCA9IGlzTG9jYWxVUkw7XG5leHBvcnRzLmludGVycG9sYXRlQXMgPSBpbnRlcnBvbGF0ZUFzO1xuZXhwb3J0cy5yZXNvbHZlSHJlZiA9IHJlc29sdmVIcmVmO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7XG52YXIgX3JvdXRlTG9hZGVyID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXJcIik7XG52YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGggPSByZXF1aXJlKFwiLi4vLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTtcbnZhciBfbm9ybWFsaXplTG9jYWxlUGF0aCA9IHJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTtcbnZhciBfbWl0dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciBfaXNEeW5hbWljID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcbnZhciBfcGFyc2VSZWxhdGl2ZVVybCA9IHJlcXVpcmUoXCIuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybFwiKTtcbnZhciBfcXVlcnlzdHJpbmcgPSByZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTtcbnZhciBfcmVzb2x2ZVJld3JpdGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTtcbnZhciBfcm91dGVNYXRjaGVyID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbnZhciBfcm91dGVSZWdleCA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtcbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTtcbn1cbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgICAgICBjYW5jZWxsZWQ6IHRydWVcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCwgcHJlZml4KSB7XG4gICAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IHBhdGggPT09ICcvJyA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KSA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWAgOiBwYXRoO1xufVxuZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsIGxvY2FsZSwgbG9jYWxlcywgZG9tYWluTG9jYWxlcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGxvY2FsZSA9IGxvY2FsZSB8fCAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKTtcbiAgICAgICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICAgICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2Jhc2VQYXRoIHx8ICcnfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCwgbG9jYWxlLCBkZWZhdWx0TG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmIHBhdGhMb3dlciAhPT0gJy8nICsgbG9jYWxlTG93ZXIgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLCBsb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fCBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKSA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICsgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCkge1xuICAgIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKTtcbiAgICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKTtcbiAgICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKTtcbn1cbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICAgIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKTtcbn1cbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpO1xuICAgIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gO1xuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpIHtcbiAgICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSB8fCB1cmwuc3RhcnRzV2l0aCgnPycpKSByZXR1cm4gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICAgICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgICAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbik7XG4gICAgICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSkge1xuICAgIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnO1xuICAgIGNvbnN0IGR5bmFtaWNSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHM7XG4gICAgY29uc3QgZHluYW1pY01hdGNoZXMgPSAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8IC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeTtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlO1xuICAgIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO1xuICAgIGlmICghcGFyYW1zLmV2ZXJ5KChwYXJhbSk9PntcbiAgICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnO1xuICAgICAgICBjb25zdCB7IHJlcGVhdCAsIG9wdGlvbmFsICB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV07XG4gICAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWA7XG4gICAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJiAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID0gaW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCwgcmVwZWF0ID8gdmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgKHNlZ21lbnQpPT5lbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgKS5qb2luKCcvJykgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKSB8fCAnLycpO1xuICAgIH0pKSB7XG4gICAgICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcbiAgICAgICAgO1xuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGFyYW1zLFxuICAgICAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlXG4gICAgfTtcbn1cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSB7XG4gICAgY29uc3QgZmlsdGVyZWRRdWVyeSA9IHtcbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVyZWRRdWVyeTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVIcmVmKHJvdXRlciwgaHJlZiwgcmVzb2x2ZUFzKSB7XG4gICAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgICBsZXQgYmFzZTtcbiAgICBsZXQgdXJsQXNTdHJpbmcgPSB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZik7XG4gICAgLy8gcmVwZWF0ZWQgc2xhc2hlcyBhbmQgYmFja3NsYXNoZXMgaW4gdGhlIFVSTCBhcmUgY29uc2lkZXJlZFxuICAgIC8vIGludmFsaWQgYW5kIHdpbGwgbmV2ZXIgbWF0Y2ggYSBOZXh0LmpzIHBhZ2UvZmlsZVxuICAgIGNvbnN0IHVybFByb3RvTWF0Y2ggPSB1cmxBc1N0cmluZy5tYXRjaCgvXlthLXpBLVpdezEsfTpcXC9cXC8vKTtcbiAgICBjb25zdCB1cmxBc1N0cmluZ05vUHJvdG8gPSB1cmxQcm90b01hdGNoID8gdXJsQXNTdHJpbmcuc3Vic3RyKHVybFByb3RvTWF0Y2hbMF0ubGVuZ3RoKSA6IHVybEFzU3RyaW5nO1xuICAgIGNvbnN0IHVybFBhcnRzID0gdXJsQXNTdHJpbmdOb1Byb3RvLnNwbGl0KCc/Jyk7XG4gICAgaWYgKCh1cmxQYXJ0c1swXSB8fCAnJykubWF0Y2goLyhcXC9cXC98XFxcXCkvKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIG5leHQvcm91dGVyOiAke3VybEFzU3RyaW5nfSwgcmVwZWF0ZWQgZm9yd2FyZC1zbGFzaGVzICgvLykgb3IgYmFja3NsYXNoZXMgXFxcXCBhcmUgbm90IHZhbGlkIGluIHRoZSBocmVmYCk7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRVcmwgPSAoMCwgX3V0aWxzKS5ub3JtYWxpemVSZXBlYXRlZFNsYXNoZXModXJsQXNTdHJpbmdOb1Byb3RvKTtcbiAgICAgICAgdXJsQXNTdHJpbmcgPSAodXJsUHJvdG9NYXRjaCA/IHVybFByb3RvTWF0Y2hbMF0gOiAnJykgKyBub3JtYWxpemVkVXJsO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICAgIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgYmFzZSA9IG5ldyBVUkwodXJsQXNTdHJpbmcuc3RhcnRzV2l0aCgnIycpID8gcm91dGVyLmFzUGF0aCA6IHJvdXRlci5wYXRobmFtZSwgJ2h0dHA6Ly9uJyk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICAvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuICAgICAgICBiYXNlID0gbmV3IFVSTCgnLycsICdodHRwOi8vbicpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpO1xuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpO1xuICAgICAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJztcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiYgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmIHJlc29sdmVBcykge1xuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSAoMCwgX3F1ZXJ5c3RyaW5nKS5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7XG4gICAgICAgICAgICBjb25zdCB7IHJlc3VsdCAsIHBhcmFtcyAgfSA9IGludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsIGZpbmFsVXJsLnBhdGhuYW1lLCBxdWVyeSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKSA6IGZpbmFsVXJsLmhyZWY7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgXSA6IHJlc29sdmVkSHJlZjtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxufVxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKSB7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmw7XG59XG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLCB1cmwsIGFzKSB7XG4gICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIsIHVybCwgdHJ1ZSk7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKTtcbiAgICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBcztcbiAgICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpO1xuICAgIGNvbnN0IHByZXBhcmVkQXMgPSBhcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlciwgYXMpKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKVxuICAgIH07XG59XG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcykge1xuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKCgwLCBfZGVub3JtYWxpemVQYWdlUGF0aCkuZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSkpO1xuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICAgIHJldHVybiBwYXRobmFtZTtcbiAgICB9XG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgICBwYWdlcy5zb21lKChwYWdlKT0+e1xuICAgICAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lID0gcGFnZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKTtcbn1cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID0gcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmICEhZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHYgPSAnX19uZXh0JztcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZTtcbiAgICB9IGNhdGNoIChuKSB7XG4gICAgfVxufSgpO1xuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtcbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cykge1xuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlcikge1xuICAgIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgKDAsIF9yb3V0ZUxvYWRlcikubWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lMSwgcXVlcnkxLCBhczEsIHsgaW5pdGlhbFByb3BzICwgcGFnZUxvYWRlciAsIEFwcCAsIHdyYXBBcHAgLCBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBlcnI6IGVycjEgLCBzdWJzY3JpcHRpb24gLCBpc0ZhbGxiYWNrICwgbG9jYWxlICwgbG9jYWxlcyAsIGRlZmF1bHRMb2NhbGUgLCBkb21haW5Mb2NhbGVzICwgaXNQcmV2aWV3ICB9KXtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gICAgICAgIHRoaXMuc2RyID0ge1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9pZHggPSAwO1xuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSAoZSk9PntcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZm9yY2VkU2Nyb2xsO1xuICAgICAgICAgICAgY29uc3QgeyB1cmwgLCBhczogYXMxICwgb3B0aW9ucyAsIGlkeCAgfSA9IHN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2Uodik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2lkeCA9IGlkeDtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAgfSA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3NyICYmIGFzMSA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUxID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhczEsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgfSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICAgICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICB9KSwgZm9yY2VkU2Nyb2xsKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgICAgICBpZiAocGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICAgICAgICAgIGVycjogZXJyMSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgICAgICAgIENvbXBvbmVudDogQXBwLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50cztcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lMTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5MTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPSAoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGF0aG5hbWUxKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydDtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lMSA6IGFzMTtcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcDtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgICAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICB0aGlzLmlzU3NyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFjaztcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHwgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uYXBwR2lwICYmICFzZWxmLl9fTkVYVF9EQVRBX18uZ3NwIHx8ICFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiYgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpO1xuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3O1xuICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2U7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzMS5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSBhczEgIT09IHBhdGhuYW1lMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi8gYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHB1c2godXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgICAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBhc3luYyBjaGFuZ2UobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zLCBmb3JjZWRTY3JvbGwpIHtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNob3VsZFJlc29sdmVIcmVmID0gdXJsID09PSBhcyB8fCBvcHRpb25zLl9oIHx8IG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmO1xuICAgICAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAgICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgICAgIGlmIChvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByZXZMb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlID8gdGhpcy5kZWZhdWx0TG9jYWxlIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgICAgICAgICAgaWYgKCEoKHJlZiA9IHRoaXMubG9jYWxlcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYuaW5jbHVkZXModGhpcy5sb2NhbGUpKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAgICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgICAgICAgICAgaWYgKCFkaWROYXZpZ2F0ZSAmJiBkZXRlY3RlZERvbWFpbiAmJiB0aGlzLmlzTG9jYWxlRG9tYWluICYmIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLycpfWA7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgIGlmIChfdXRpbHMuU1QpIHtcbiAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBzaGFsbG93ID1mYWxzZSAgfSA9IG9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7XG4gICAgICAgICAgICBzaGFsbG93XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFkZExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSkpO1xuICAgICAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzO1xuICAgICAgICBsZXQgbG9jYWxlQ2hhbmdlID0gcHJldkxvY2FsZSAhPT0gdGhpcy5sb2NhbGU7XG4gICAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBcztcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcyk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gcGFyc2VkO1xuICAgICAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgICAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgICAgICBsZXQgcGFnZXMsIHJld3JpdGVzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAgICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAgICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzO1xuICAgICAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAgICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICAgICAgcGF0aG5hbWUxID0gcGF0aG5hbWUxID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZTEpKSA6IHBhdGhuYW1lMTtcbiAgICAgICAgaWYgKHNob3VsZFJlc29sdmVIcmVmICYmIHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IHRydWU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcXVlcnkxLCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGg7XG4gICAgICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUxLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUxKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKTtcbiAgICAgICAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZSA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5MSkgOiB7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcigocGFyYW0pPT4hcXVlcnkxW3BhcmFtXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlID8gYEludGVycG9sYXRpbmcgaHJlZmAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICsgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKChzaG91bGRJbnRlcnBvbGF0ZSA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7c2hvdWxkSW50ZXJwb2xhdGUgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCcgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgIH0sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkxLCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnkxLCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgcmVmLCByZWYxO1xuICAgICAgICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgbGV0IHsgZXJyb3IgLCBwcm9wcyAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICAgICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMucGFnZVByb3BzICYmIHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUO1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgICAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCAsIGFzOiBuZXdBcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCBkZXN0aW5hdGlvbiwgZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVc7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0JztcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLCBub3RGb3VuZFJvdXRlLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFsbG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPSBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLl9oICYmIHBhdGhuYW1lMSA9PT0gJy9fZXJyb3InICYmICgocmVmID0gc2VsZi5fX05FWFRfREFUQV9fLnByb3BzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChyZWYxID0gcmVmLnBhZ2VQcm9wcykgPT09IG51bGwgfHwgcmVmMSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmMS5zdGF0dXNDb2RlKSA9PT0gNTAwICYmIChwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMucGFnZVByb3BzKSkge1xuICAgICAgICAgICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGU7XG4gICAgICAgICAgICB2YXIgX3Njcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZFNjcm9sbCA9IChfc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwpICE9PSBudWxsICYmIF9zY3JvbGwgIT09IHZvaWQgMCA/IF9zY3JvbGwgOiAhaXNWYWxpZFNoYWxsb3dSb3V0ZTtcbiAgICAgICAgICAgIGNvbnN0IHJlc2V0U2Nyb2xsID0gc2hvdWxkU2Nyb2xsID8ge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgfSA6IG51bGw7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGNsZWFuZWRBcywgcm91dGVJbmZvLCBmb3JjZWRTY3JvbGwgIT09IG51bGwgJiYgZm9yY2VkU2Nyb2xsICE9PSB2b2lkIDAgPyBmb3JjZWRTY3JvbGwgOiByZXNldFNjcm9sbCkuY2F0Y2goKGUpPT57XG4gICAgICAgICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGU7XG4gICAgICAgICAgICAgICAgZWxzZSB0aHJvdyBlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIGlmIChlcnIxLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycjE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgKDAsIF91dGlscykuZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICAgICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93O1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDFcbiAgICAgICAgICAgIH0sIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKDAsIF9yb3V0ZUxvYWRlcikuaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IENvbXBvbmVudDE7XG4gICAgICAgICAgICBsZXQgc3R5bGVTaGVldHM7XG4gICAgICAgICAgICBsZXQgcHJvcHM7XG4gICAgICAgICAgICBpZiAodHlwZW9mIENvbXBvbmVudDEgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBzdHlsZVNoZWV0cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAoeyBwYWdlOiBDb21wb25lbnQxICwgc3R5bGVTaGVldHMgIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0ge1xuICAgICAgICAgICAgICAgIHByb3BzLFxuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm8gPyB1bmRlZmluZWQgOiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mbyA/IGNhY2hlZFJvdXRlSW5mbyA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQ29tcG9uZW50MSAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSAgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50MSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkYXRhSHJlZjtcbiAgICAgICAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgIH0pLCByZXNvbHZlZEFzLCBfX05fU1NHLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSA6IF9fTl9TU1AgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZXM6IHRoaXMubG9jYWxlcyxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdExvY2FsZTogdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChlcnIyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbiAgICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovIGJlZm9yZVBvcFN0YXRlKGNiKSB7XG4gICAgICAgIHRoaXMuX2JwcyA9IGNiO1xuICAgIH1cbiAgICBvbmx5QUhhc2hDaGFuZ2UoYXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqLyBhc3luYyBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMiAgfSA9IHBhcnNlZDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUyLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIGxldCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICAgICAgYXNQYXRoID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBsZXQgcmV3cml0ZXM7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcGFyc2VkLnF1ZXJ5LCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUyKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTIpO1xuICAgICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbigoaXNTc2cpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzU3NnID8gdGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLCByZXNvbHZlZEFzLCB0cnVlLCB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiB0aGlzLmxvY2FsZSkpIDogZmFsc2U7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSwgXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IHRoaXMuY2xjID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xjID0gY2FuY2VsO1xuICAgICAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyMiA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVycjIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAhdGhpcy5pc1ByZXZpZXcgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV0gPSBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KS5jYXRjaCgoZXJyMik9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAxICB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddO1xuICAgICAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAxKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscykubG9hZEdldEluaXRpYWxQcm9wcyhBcHAxLCB7XG4gICAgICAgICAgICBBcHBUcmVlLFxuICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgICAgICAgY3R4XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LCByZXNldFNjcm9sbCk7XG4gICAgfVxufVxuUm91dGVyLmV2ZW50cyA9ICgwLCBfbWl0dCkuZGVmYXVsdCgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTWluZUNlbnRlckNvbnRlbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWluZS9jZW50ZXIvTWluZUNlbnRlckNvbnRlbnRcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vbGF5b3V0L0Zvb3RlclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9sYXlvdXQvSGVhZGVyXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2xheW91dC9MYXlvdXRcIjtcclxuXHJcbmltcG9ydCB7IGZldGNoVXNlckNpcmNsZUxpc3QgfSBmcm9tIFwiLi4vLi4vc3RvcmUvc2xpY2VzL2NpcmNsZVNsaWNlXCI7XHJcbmltcG9ydCB7IGZldGNoTWluZVJlY29tbWVuZENpcmNsZUxpc3QsIGZldGNoVXNlckluZm8sIHN3aXRjaFVzZXJQYWdlU2VsZWN0SW5kZXggfSBmcm9tIFwiLi4vLi4vc3RvcmUvc2xpY2VzL21pbmVTbGljZVwiO1xyXG5pbXBvcnQgd3JhcHBlciwgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9NaW5lLm1vZHVsZS5zY3NzJ1xyXG5cclxuY29uc3QgTWluZUNlbnRlcjogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgdXNlciB9ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpc1NlbGYoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHVzZXJJbmZvICYmIHVzZXIgJiYgdXNlci5pZCA9PSB1c2VySW5mby5pZCA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRVc2VySWQoKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCB1c2VySWQgPSByb3V0ZXIucXVlcnkuaWQ7XHJcbiAgICAgICAgaWYgKCF1c2VySWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1c2VySWQ/LnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyB1c2VySW5mbyB9ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5taW5lKTtcclxuICAgIGNvbnN0IHNlbGVjdEluZGV4ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBnZXRVc2VySWQoKTtcclxuICAgICAgICBpZiAoaWQgJiYgaWQgaW4gc3RhdGUubWluZS51c2VyUGFnZVNlbGVjdEluZGV4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5taW5lLnVzZXJQYWdlU2VsZWN0SW5kZXhbZ2V0VXNlcklkKCldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHN3aXRjaFVzZXJQYWdlU2VsZWN0SW5kZXgoeyBrZXk6IGdldFVzZXJJZCgpLCBpbmRleDogMCB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG5cclxuICAgIGNvbnN0IHVzZXJDZW50ZXJQYWdlQ2hhbmdlID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICBpZiAoc2VsZWN0SW5kZXggIT0gaW5kZXggJiYgdXNlckluZm8pIHtcclxuICAgICAgICAgICAgLy8gc2V0U2VsZWN0SW5kZXgoaW5kZXgpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzd2l0Y2hVc2VyUGFnZVNlbGVjdEluZGV4KHsga2V5OiB1c2VySW5mby5pZCwgaW5kZXg6IGluZGV4IH0pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxMYXlvdXQgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0+XHJcbiAgICAgICAgPEhlYWRlciBwYWdlPXstMX0gdXNlckNlbnRlckNoYW5nZT17aXNTZWxmKCkgPyB1c2VyQ2VudGVyUGFnZUNoYW5nZSA6IHVuZGVmaW5lZH0gLz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVzZXJJbmZvICYmIDxNaW5lQ2VudGVyQ29udGVudCB1c2VySW5mbz17dXNlckluZm99IGlzU2VsZj17aXNTZWxmKCl9IHNlbGVjdEluZGV4PXtzZWxlY3RJbmRleH0gcGFnZUNoYW5nZT17dXNlckNlbnRlclBhZ2VDaGFuZ2V9IC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvTGF5b3V0PlxyXG59XHJcblxyXG5NaW5lQ2VudGVyLmdldEluaXRpYWxQcm9wcyA9IHdyYXBwZXIuZ2V0SW5pdGlhbFBhZ2VQcm9wcygoc3RvcmUpID0+IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgICAgICAgIGZldGNoVXNlckluZm8oe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGNvbnRleHQucXVlcnkuaWRcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKSxcclxuICAgICAgICBzdG9yZS5kaXNwYXRjaChcclxuICAgICAgICAgICAgZmV0Y2hNaW5lUmVjb21tZW5kQ2lyY2xlTGlzdCh7XHJcbiAgICAgICAgICAgICAgICBsaW1pdDogOCxcclxuICAgICAgICAgICAgICAgIHBhZ2U6IDEsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInJlY29tbWVuZFwiXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICksXHJcblxyXG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKGZldGNoVXNlckNpcmNsZUxpc3Qoe1xyXG4gICAgICAgICAgICBwYWdlOiAxLFxyXG4gICAgICAgICAgICBsaW1pdDogMjAsXHJcbiAgICAgICAgICAgIGlkOiBjb250ZXh0LnF1ZXJ5LmlkXHJcbiAgICAgICAgfSkpXHJcbiAgICBdKTtcclxuICAgIHJldHVybiB7fTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IE1pbmVDZW50ZXI7IiwiaW1wb3J0IGFwaSBmcm9tICcuLi8uLi91dGlscy9hcGknO1xyXG5pbXBvcnQgVXJsIGZyb20gJy4uLy4uL3V0aWxzL3VybCc7XHJcbmltcG9ydCB7IEZldGNoRm4sIExpbWl0SWRQYXJhbXMsIExpbWl0VHlwZVBhcmFtcyB9IGZyb20gJy4uL3BhcmFtcyc7XHJcbmltcG9ydCB0eXBlIHsgUmVzIH0gZnJvbSAnLi9ob21lJztcclxuXHJcblxyXG5leHBvcnQgdHlwZSBMaXN0UGFnZUJlYW48VD4gPSB7XHJcbiAgICB0b3RhbDogbnVtYmVyLFxyXG4gICAgbGlzdDogQXJyYXk8VD5cclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIENpcmNsZUJlYW4gPSB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgY2lyY2xlX25hbWU6IHN0cmluZztcclxuICAgIGF2YXRhcjogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGNpcmNsZV90YWc6IHN0cmluZztcclxuICAgIGNpcmNsZV9iYWNrZ3JvdW5kOiBzdHJpbmc7XHJcbiAgICBvd25lcl9pZDogc3RyaW5nO1xyXG4gICAgdHlwZTogbnVtYmVyO1xyXG4gICAgc3RhdHVzOiBudW1iZXI7XHJcbiAgICBvdXRfdmlzaWFibGVfbGV2ZWw6IG51bWJlcjtcclxuICAgIG5lZWRfYXBwbHk6IG51bWJlcjtcclxuICAgIGNyZWF0ZV90aW1lOiBzdHJpbmc7XHJcbiAgICBqb2luX3R5cGU6IG51bWJlcjtcclxufTtcclxuXHJcblxyXG4vKirlnIjlrZDliJfooaggKi9cclxuZXhwb3J0IGNvbnN0IGdldENpcmNsZUxpc3Q6IEZldGNoRm48TGltaXRUeXBlUGFyYW1zPiA9IChwYXJhbXMpID0+IHtcclxuICAgIHJldHVybiBhcGkucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiBVcmwuY2lyY2xlTGlzdCxcclxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgcGFyYW1zOiBwYXJhbXMsXHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8qKueUqOaIt+eahOWciOWtkOWIl+ihqCAqL1xyXG5leHBvcnQgY29uc3QgZ2V0VXNlckNpcmNsZUxpc3Q6IEZldGNoRm48TGltaXRJZFBhcmFtcz4gPSAocGFyYW1zKSA9PiB7XHJcbiAgICByZXR1cm4gYXBpLnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogVXJsLnVzZXJDaXJjbGVMaXN0LFxyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICBwYXJhbXM6IHBhcmFtcyxcclxuICAgIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgYXBpIGZyb20gJy4uLy4uL3V0aWxzL2FwaSc7XHJcbmltcG9ydCBVcmwgZnJvbSAnLi4vLi4vdXRpbHMvdXJsJztcclxuaW1wb3J0IHsgRmV0Y2hGbiB9IGZyb20gJy4uL3BhcmFtcyc7XHJcbmltcG9ydCB7IEhlbHBUeXBlQmVhbiB9IGZyb20gJy4vaGVscGVyJztcclxuaW1wb3J0IHR5cGUgeyBOYW1lSWRCZWFuLCBSZXMgfSBmcm9tICcuL2hvbWUnO1xyXG5cclxuLy8g5a2m5qChYmVhblxyXG5leHBvcnQgdHlwZSBTY2hvb2xCZWFuID0gTmFtZUlkQmVhbiAmIHtcclxuICAgIHBhcnQ6IHN0cmluZyxcclxufTtcclxuXHJcbi8vIOWcsOWdgGJlYW5cclxuZXhwb3J0IHR5cGUgQWRkcmVzc0JlYW4gPSBOYW1lSWRCZWFuICYge1xyXG4gICAgY2l0aWVzOiBBcnJheTxDaXR5QmVhbj5cclxufTtcclxuXHJcbi8vIOWfjuW4gmJlYW5cclxuZXhwb3J0IHR5cGUgQ2l0eUJlYW4gPSBOYW1lSWRCZWFuICYge1xyXG4gICAgcHJvdmluY2VfaWQ6IG51bWJlcixcclxuICAgIGFyZWE6IEFycmF5PEFyZWFCZWFuPlxyXG59O1xyXG5cclxuLy8g5Yy6YmVhblxyXG5leHBvcnQgdHlwZSBBcmVhQmVhbiA9IE5hbWVJZEJlYW4gJiB7XHJcbiAgICBwcm92aW5jZV9pZDogbnVtYmVyLFxyXG4gICAgY2l0eV9pZDogbnVtYmVyXHJcbn07XHJcblxyXG4vLyDlnIjlrZDnsbvlnotiZWFuXHJcbmV4cG9ydCB0eXBlIENpcmNsZVR5cGVCZWFuID0ge1xyXG4gICAgaWQ6IG51bWJlcixcclxuICAgIHR5cGU6IHN0cmluZyxcclxuICAgIHRhZ3M6IEFycmF5PFRhZ3NCZWFuPlxyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgVGFnc0JlYW4gPSBOYW1lSWRCZWFuICYge1xyXG4gICAgdHlwZV9pZDogbnVtYmVyLFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBUeXBlQWRkcmVzc1NjaG9vbEJlYW4gPSB7XHJcbiAgICB0eXBlOiBBcnJheTxIZWxwVHlwZUJlYW4+LFxyXG4gICAgc2Nob29sOiBBcnJheTxTY2hvb2xCZWFuPixcclxuICAgIGFkZHJlc3M6IEFycmF5PEFkZHJlc3NCZWFuPixcclxuICAgIGhvdF9jaXR5OiBBcnJheTxDaXR5QmVhbj4sXHJcbiAgICBpbmR1c3RyeTogQXJyYXk8TmFtZUlkQmVhbj4sXHJcbiAgICBjaXJjbGVfdHlwZTogQXJyYXk8Q2lyY2xlVHlwZUJlYW4+XHJcbn07XHJcblxyXG5cclxuLyoq6I635Y+W5a2m5qCh44CB5LqS5biu57G75Z6L44CB55yB5biC5Yy6ICovXHJcbmV4cG9ydCBjb25zdCBnZXRUeXBlQWRkcmVzc1NjaG9vbDogRmV0Y2hGbjx1bmtub3duPiA9ICgpID0+IHtcclxuICAgIHJldHVybiBhcGkucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiBVcmwuY29tbWl0LFxyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIlxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5cclxuLyoq6I635Y+W5ZyI5a2Q57G75YirICovXHJcbmV4cG9ydCBjb25zdCBnZXRDaXJjbGVUeXBlOiBGZXRjaEZuPHVua25vd24+ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGFwaS5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IFVybC5nZXRDaXJjbGVUeXBlLFxyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIlxyXG4gICAgfSk7XHJcbn07XHJcbiIsImltcG9ydCB7IE5hbWVJZEJlYW4gfSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCB7IFVzZXJCZWFuIH0gZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uL3V0aWxzL2FwaSc7XHJcbmltcG9ydCBVcmwgZnJvbSAnLi4vLi4vdXRpbHMvdXJsJztcclxuaW1wb3J0IHsgRmV0Y2hGbiwgTGltaXRJZFBhcmFtcywgTGltaXRUeXBlUGFyYW1zIH0gZnJvbSBcIi4uL3BhcmFtc1wiO1xyXG5cclxuXHJcbmV4cG9ydCB0eXBlIEhlbHBUeXBlQmVhbiA9IE5hbWVJZEJlYW4gJiB7XHJcbiAgICBjaGlsZDogTmFtZUlkQmVhbjtcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIEhlbHBlckl0ZW1EYXRhID0ge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHNlbmRlcl9pZDogc3RyaW5nO1xyXG4gICAgc2VuZGVyOiBVc2VyQmVhbjtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBjb250ZW50OiBzdHJpbmc7XHJcbiAgICB0eXBlOiBIZWxwVHlwZUJlYW47XHJcbiAgICBwcm92aW5jZTogTmFtZUlkQmVhbjtcclxuICAgIGNpdHk6IE5hbWVJZEJlYW47XHJcbiAgICBhcmVhOiBOYW1lSWRCZWFuO1xyXG4gICAgYWRkcmVzczogc3RyaW5nO1xyXG4gICAgc3RhcnRfdGltZTogbnVtYmVyO1xyXG4gICAgZW5kX3RpbWU6IG51bWJlcjtcclxuICAgIGxvd2VzdF9wcmljZTogbnVtYmVyO1xyXG4gICAgaGlnaGVzdF9wcmljZTogbnVtYmVyO1xyXG4gICAgaXNfdXJnZW50OiBudW1iZXI7XHJcbiAgICBwZW9wbGVfbnVtYmVyOiBudW1iZXI7XHJcbiAgICBpc190aW1lb3V0X2NhbmNlbDogbnVtYmVyO1xyXG4gICAgZmluaXNoX3Byb3ZlOiBudW1iZXI7XHJcbiAgICBzdGF0dXM6IG51bWJlcjtcclxuICAgIGxvbmdpdHVkZTogbnVtYmVyO1xyXG4gICAgbGF0aXR1ZGU6IG51bWJlcjtcclxufTtcclxuXHJcblxyXG4vKirkupLluK7liJfooaggKi9cclxuZXhwb3J0IGNvbnN0IGdldEhlbHBlckxpc3Q6IEZldGNoRm48TGltaXRUeXBlUGFyYW1zPiA9IChwYXJhbXMpID0+IHtcclxuICAgIHJldHVybiBhcGkucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiBVcmwuaGVscGVyTGlzdCxcclxuICAgICAgICBwYXJhbXM6IHBhcmFtcyxcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLyoq6I635Y+W55So5oi35rGC5Yqp5YiX6KGoICovXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VySGVscGVyTGlzdDogRmV0Y2hGbjxMaW1pdElkUGFyYW1zPiA9IChwYXJhbXMpID0+IHtcclxuICAgIHJldHVybiBhcGkucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiBVcmwudXNlckhlbHBMaXN0LFxyXG4gICAgICAgIHBhcmFtczogcGFyYW1zLFxyXG4gICAgfSk7XHJcbn07IiwiaW1wb3J0IFVybCBmcm9tIFwiLi4vLi4vdXRpbHMvdXJsXCI7XHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vdXRpbHMvYXBpJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VySW5mbyhwYXJhbXM6IHsgaWQ6IHN0cmluZyB9KSB7XHJcbiAgICByZXR1cm4gYXBpLnJlcXVlc3Qoe1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgdXJsOiBVcmwudXNlckluZm8gKyBcIj9pZD1cIiArIHBhcmFtcy5pZCxcclxuICAgIH0pO1xyXG59OyIsImltcG9ydCBhcGkgZnJvbSAnLi4vLi4vdXRpbHMvYXBpJztcclxuaW1wb3J0IFVybCBmcm9tICcuLi8uLi91dGlscy91cmwnO1xyXG5pbXBvcnQgeyBOYW1lSWRCZWFuIH0gZnJvbSAnLi9ob21lJztcclxuXHJcbmV4cG9ydCB0eXBlIFVzZXJCZWFuID0ge1xyXG4gICAgaWQ6IHN0cmluZzsgLy8gaWRcclxuICAgIGFsaWFzOiBzdHJpbmc7IC8vIOWIq+WQjVxyXG4gICAgbmlja25hbWU6IHN0cmluZzsgLy8g5pi156ewXHJcbiAgICBhdmF0YXI6IHN0cmluZzsgLy8g5aS05YOPXHJcbiAgICBzZXg6IG51bWJlcjsgLy8g5oCn5YirXHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nOyAvL+eugOS7i1xyXG4gICAgYmlydGhkYXk6IHN0cmluZzsgIC8vIOeUn+aXpVxyXG4gICAgcHJvdmluY2U6IE5hbWVJZEJlYW47IC8v55yBXHJcbiAgICBjaXR5OiBOYW1lSWRCZWFuO1xyXG4gICAgc2Nob29sOiBOYW1lSWRCZWFuOyAvL+WtpuagoVxyXG4gICAgYXV0aGVudGljYXRpb25fdHlwZTogbnVtYmVyOyAvL+iupOivgeexu+Wei1xyXG4gICAgb25saW5lX3N0YXR1czogbnVtYmVyOyAvL+WcqOe6v+eKtuaAgVxyXG4gICAgY3JlZGl0X3Njb3JlOiBudW1iZXI7IC8vIOS/oeeUqOivhOWIhlxyXG4gICAgb3JkZXJfcmF0ZTogbnVtYmVyOyAvL+aIkOWNleeOh1xyXG4gICAgZm9sbG93X251bWJlcjogbnVtYmVyOyAvL+WFs+azqOaVsOebrlxyXG4gICAgZmFuX251bWJlcjogbnVtYmVyOyAvL+eyieS4neaVsOebrlxyXG4gICAgZm9sbG93ZWQ6IGJvb2xlYW47IC8v5piv5ZCm5bey5YWz5rOoXHJcbiAgICBmb2xsb3dpbmc6IGJvb2xlYW47IC8v5piv5ZCm6KKr5YWz5rOoXHJcbiAgICBwaG9uZTogc3RyaW5nOyAvL+aJi+acuuWPt++8iOS7heeZu+W9leeahOW9k+WJjeeUqOaIt+acie+8iVxyXG59XHJcblxyXG5cclxuZXhwb3J0IHR5cGUgTG9naW5CZWFuID0ge1xyXG4gICAgdG9rZW46IHN0cmluZyxcclxuICAgIHVzZXI6IFVzZXJCZWFuLFxyXG4gICAgaXNfZmluaXNoOiBudW1iZXIsXHJcbn07XHJcblxyXG5cclxudHlwZSBMb2dpblBhcmFtcyA9IHtcclxuICAgIHBob25lPzogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICBjb2RlPzogc3RyaW5nO1xyXG4gICAgdHlwZT86IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQaG9uZUNvZGUocGFyYW1zOiBMb2dpblBhcmFtcykge1xyXG4gICAgcmV0dXJuIGFwaS5yZXF1ZXN0KHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IFVybC5nZXRDb2RlLFxyXG4gICAgICAgIGRhdGE6IHBhcmFtcyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHdkTG9naW4ocGFyYW1zOiBMb2dpblBhcmFtcykge1xyXG4gICAgcmV0dXJuIGFwaS5yZXF1ZXN0KHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IFVybC5wd2RMb2dpbixcclxuICAgICAgICBkYXRhOiBwYXJhbXMsXHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb2RlTG9naW4ocGFyYW1zOiBMb2dpblBhcmFtcykge1xyXG4gICAgcmV0dXJuIGFwaS5yZXF1ZXN0KHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IFVybC5jb2RlTG9naW4sXHJcbiAgICAgICAgZGF0YTogcGFyYW1zLFxyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vKiroh6rliqjnmbvlvZUgKi9cclxuZXhwb3J0IGNvbnN0IGF1dG9Mb2dpbiA9ICgpID0+IHtcclxuICAgIHJldHVybiBhcGkucmVxdWVzdCh7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBVcmwuYXV0b0xvZ2luLFxyXG4gICAgfSk7XHJcbn07IiwiaW1wb3J0IHsgdGh1bmtXcmFwcGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcbmltcG9ydCB0eXBlIHsgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBSZXMgfSBmcm9tICcuLi9zZXJ2aWNlcy9ob21lJztcclxuaW1wb3J0IHsgQ2lyY2xlQmVhbiwgZ2V0VXNlckNpcmNsZUxpc3QsIExpc3RQYWdlQmVhbiB9IGZyb20gJy4uL3NlcnZpY2VzL2NpcmNsZSc7XHJcbmltcG9ydCB7IGdldENpcmNsZUxpc3QgfSBmcm9tICcuLi9zZXJ2aWNlcy9jaXJjbGUnO1xyXG5cclxuLy8gQXN5bmNUaHVuazzov5Tlm57nmoTlgLznsbvlnoss5Ye95pWw57G75Z6Ldm9pZOihqOekuuS4jeW4puWPguaVsCzkuI3muIXmpZo+XHJcbmV4cG9ydCBjb25zdCBmZXRjaEFsbENpcmNsZUxpc3QgPSB0aHVua1dyYXBwZXIoJ2NsaXJjbGUvYWxsJywgZ2V0Q2lyY2xlTGlzdCk7XHJcbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJDaXJjbGVMaXN0ID0gdGh1bmtXcmFwcGVyKCdjbGlyY2xlL3VzZXJfbGlzdCcsIGdldFVzZXJDaXJjbGVMaXN0KTtcclxuXHJcbnR5cGUgSW5pU3RhdGUgPSB7XHJcbiAgICBhbGxDaXJjbGVEYXRhOiBMaXN0UGFnZUJlYW48Q2lyY2xlQmVhbj47XHJcbiAgICBteUNpcmNsZUxpc3Q6IExpc3RQYWdlQmVhbjxDaXJjbGVCZWFuPjtcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogSW5pU3RhdGUgPSB7XHJcbiAgICBhbGxDaXJjbGVEYXRhOiB7IHRvdGFsOiAwLCBsaXN0OiBbXSB9LFxyXG4gICAgbXlDaXJjbGVMaXN0OiB7IHRvdGFsOiAwLCBsaXN0OiBbXSB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhvbWVTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6ICdjaXJjbGUnLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgIH0sXHJcbiAgICBleHRyYVJlZHVjZXJzOiB7XHJcbiAgICAgICAgW2ZldGNoQWxsQ2lyY2xlTGlzdC5mdWxmaWxsZWQudHlwZV06IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFJlczxMaXN0UGFnZUJlYW48Q2lyY2xlQmVhbj4+PikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5hbGxDaXJjbGVEYXRhID0gYWN0aW9uLnBheWxvYWQuZGF0YTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtmZXRjaFVzZXJDaXJjbGVMaXN0LmZ1bGZpbGxlZC50eXBlXTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UmVzPExpc3RQYWdlQmVhbjxDaXJjbGVCZWFuPj4+KSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLm15Q2lyY2xlTGlzdCA9IGFjdGlvbi5wYXlsb2FkLmRhdGE7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9tZVNsaWNlLnJlZHVjZXI7XHJcbiIsImltcG9ydCB7IHRodW5rV3JhcHBlciB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgdHlwZSB7IFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuXHJcbmltcG9ydCB7IENpcmNsZVR5cGVCZWFuLCBnZXRDaXJjbGVUeXBlLCBnZXRUeXBlQWRkcmVzc1NjaG9vbCwgVHlwZUFkZHJlc3NTY2hvb2xCZWFuIH0gZnJvbSAnLi4vc2VydmljZXMvY29tbW9uJztcclxuaW1wb3J0IHsgUmVzIH0gZnJvbSAnLi4vc2VydmljZXMvaG9tZSc7XHJcblxyXG4vLyBBc3luY1RodW5rPOi/lOWbnueahOWAvOexu+Weiyzlh73mlbDnsbvlnot2b2lk6KGo56S65LiN5bim5Y+C5pWwLOS4jea4healmj5cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFR5cGVBZGRyZXNzU2Nob29sID0gdGh1bmtXcmFwcGVyKCdjb21tb24vdHlwZUFkZHJlc3NTY2hvb2wnLCBnZXRUeXBlQWRkcmVzc1NjaG9vbCk7XHJcbmV4cG9ydCBjb25zdCBmZXRjaENpcmNsZVR5cGUgPSB0aHVua1dyYXBwZXIoJ2NvbW1vbi9jaXJjbGVUeXBlJywgZ2V0Q2lyY2xlVHlwZSk7XHJcblxyXG50eXBlIEluaVN0YXRlID0ge1xyXG4gICAgY2lyY2xlVHlwZTogQXJyYXk8Q2lyY2xlVHlwZUJlYW4+XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IEluaVN0YXRlID0ge1xyXG4gICAgY2lyY2xlVHlwZTogW11cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb21tb25TbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6ICdjb21tb24nLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBpbmNyZW1lbnQ6ICgpID0+IHsgfSxcclxuICAgIH0sXHJcbiAgICBleHRyYVJlZHVjZXJzOiB7XHJcbiAgICAgICAgLy8gW2ZldGNoVHlwZUFkZHJlc3NTY2hvb2wuZnVsZmlsbGVkLnR5cGVdOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxSZXM8VHlwZUFkZHJlc3NTY2hvb2xCZWFuPj4pID0+IHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCLmlbDmja5cIiwgYWN0aW9uLnBheWxvYWQuZGF0YSk7XHJcbiAgICAgICAgLy8gICAgIHN0YXRlLmlzTG9hZERhdGEgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICBzdGF0ZS50eXBlQWRkcmVzc1NjaG9vbEJlYW4gPSBhY3Rpb24ucGF5bG9hZC5kYXRhO1xyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgW2ZldGNoQ2lyY2xlVHlwZS5mdWxmaWxsZWQudHlwZV06IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFJlczxBcnJheTxDaXJjbGVUeXBlQmVhbj4+PikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5jaXJjbGVUeXBlID0gYWN0aW9uLnBheWxvYWQuZGF0YTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBpbmNyZW1lbnQgfSA9IGNvbW1vblNsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IGNvbW1vblNsaWNlLnJlZHVjZXI7XHJcbiIsImltcG9ydCB7IHRodW5rV3JhcHBlciB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgdHlwZSB7IFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuXHJcbmltcG9ydCB0eXBlIHsgUmVzIH0gZnJvbSAnLi4vc2VydmljZXMvaG9tZSc7XHJcbmltcG9ydCB0eXBlIHsgSGVscGVySXRlbURhdGEgfSBmcm9tICcuLi9zZXJ2aWNlcy9oZWxwZXInO1xyXG5pbXBvcnQgeyBnZXRIZWxwZXJMaXN0IH0gZnJvbSAnLi4vc2VydmljZXMvaGVscGVyJztcclxuaW1wb3J0IHR5cGUgeyBDaXJjbGVCZWFuLCBMaXN0UGFnZUJlYW4gfSBmcm9tICcuLi9zZXJ2aWNlcy9jaXJjbGUnO1xyXG5pbXBvcnQgeyBnZXRDaXJjbGVMaXN0IH0gZnJvbSAnLi4vc2VydmljZXMvY2lyY2xlJztcclxuXHJcbi8vIEFzeW5jVGh1bms86L+U5Zue55qE5YC857G75Z6LLOWHveaVsOexu+Wei3ZvaWTooajnpLrkuI3luKblj4LmlbAs5LiN5riF5qWaPlxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoUmVjb21tZW5kTGlzdCA9IHRodW5rV3JhcHBlcignaG9tZS9yZWNvbW1lbmQnLCBnZXRIZWxwZXJMaXN0KTtcclxuZXhwb3J0IGNvbnN0IGZldGNoTGlrZUxpc3QgPSB0aHVua1dyYXBwZXIoJ2hvbWUvbGlrZScsIGdldEhlbHBlckxpc3QpO1xyXG5leHBvcnQgY29uc3QgZmV0Y2hOZWFyYnlMaXN0ID0gdGh1bmtXcmFwcGVyKCdob21lL25lYXJieScsIGdldEhlbHBlckxpc3QpO1xyXG5leHBvcnQgY29uc3QgZmV0Y2hIb3J0TGlzdCA9IHRodW5rV3JhcHBlcignaG9tZS9ob3J0JywgZ2V0SGVscGVyTGlzdCk7XHJcbmV4cG9ydCBjb25zdCBmZXRjaFJlY29tbWVuZENpcmNsZUxpc3QgPSB0aHVua1dyYXBwZXIoJ2hvbWUvY2lyY2xlL3JlY29tbWVuZCcsIGdldENpcmNsZUxpc3QpO1xyXG5cclxudHlwZSBJbmlTdGF0ZSA9IHtcclxuICBpc0xvYWQ6IGJvb2xlYW47XHJcbiAgcmVjb21tZW5kRGF0YTogSGVscGVySXRlbURhdGFbXTtcclxuICBsaWtlRGF0YTogSGVscGVySXRlbURhdGFbXTtcclxuICBuZWFyYnlEYXRhOiBIZWxwZXJJdGVtRGF0YVtdO1xyXG4gIGhvcnREYXRhOiBIZWxwZXJJdGVtRGF0YVtdO1xyXG4gIHJlY29tbWVuZENpcmNsZURhdGE6IExpc3RQYWdlQmVhbjxDaXJjbGVCZWFuPjtcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogSW5pU3RhdGUgPSB7XHJcbiAgaXNMb2FkOiBmYWxzZSxcclxuICByZWNvbW1lbmREYXRhOiBbXSxcclxuICBsaWtlRGF0YTogW10sXHJcbiAgbmVhcmJ5RGF0YTogW10sXHJcbiAgaG9ydERhdGE6IFtdLFxyXG4gIHJlY29tbWVuZENpcmNsZURhdGE6IHtcclxuICAgIHRvdGFsOiAwLFxyXG4gICAgbGlzdDogW11cclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhvbWVTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnaG9tZScsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgfSxcclxuICBleHRyYVJlZHVjZXJzOiB7XHJcbiAgICBbZmV0Y2hSZWNvbW1lbmRMaXN0LmZ1bGZpbGxlZC50eXBlXTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UmVzPEFycmF5PEhlbHBlckl0ZW1EYXRhPj4+KSA9PiB7XHJcbiAgICAgIHN0YXRlLmlzTG9hZCA9IHRydWU7XHJcbiAgICAgIHN0YXRlLnJlY29tbWVuZERhdGEgPSBhY3Rpb24ucGF5bG9hZC5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImZldGNoUmVjb21tZW5kTGlzdFwiLCBhY3Rpb24ucGF5bG9hZC5kYXRhLmxlbmd0aCk7XHJcblxyXG4gICAgfSxcclxuICAgIFtmZXRjaExpa2VMaXN0LmZ1bGZpbGxlZC50eXBlXTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UmVzPEhlbHBlckl0ZW1EYXRhW10+PikgPT4ge1xyXG4gICAgICBzdGF0ZS5saWtlRGF0YSA9IGFjdGlvbi5wYXlsb2FkLmRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZmV0Y2hMaWtlTGlzdFwiLCBhY3Rpb24ucGF5bG9hZC5kYXRhLmxlbmd0aCk7XHJcbiAgICB9LFxyXG4gICAgW2ZldGNoTmVhcmJ5TGlzdC5mdWxmaWxsZWQudHlwZV06IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFJlczxIZWxwZXJJdGVtRGF0YVtdPj4pID0+IHtcclxuICAgICAgc3RhdGUubmVhcmJ5RGF0YSA9IGFjdGlvbi5wYXlsb2FkLmRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZmV0Y2hOZWFyYnlMaXN0XCIsIGFjdGlvbi5wYXlsb2FkLmRhdGEubGVuZ3RoKTtcclxuICAgIH0sXHJcbiAgICBbZmV0Y2hIb3J0TGlzdC5mdWxmaWxsZWQudHlwZV06IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFJlczxIZWxwZXJJdGVtRGF0YVtdPj4pID0+IHtcclxuICAgICAgc3RhdGUuaG9ydERhdGEgPSBhY3Rpb24ucGF5bG9hZC5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImZldGNoSG9ydExpc3RcIiwgYWN0aW9uLnBheWxvYWQuZGF0YS5sZW5ndGgpO1xyXG4gICAgfSxcclxuICAgIFtmZXRjaFJlY29tbWVuZENpcmNsZUxpc3QuZnVsZmlsbGVkLnR5cGVdOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxSZXM8TGlzdFBhZ2VCZWFuPENpcmNsZUJlYW4+Pj4pID0+IHtcclxuICAgICAgc3RhdGUucmVjb21tZW5kQ2lyY2xlRGF0YSA9IGFjdGlvbi5wYXlsb2FkLmRhdGE7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9tZVNsaWNlLnJlZHVjZXI7XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yOiBsZXJveVxyXG4gKiBAZGF0ZTogMjAyMS84LzIzIDE2OjA5XHJcbiAqIEBkZXNjcmlwdGlvbu+8muebkeWQrCBBc3luY1RodW5rIGxvYWRpbmcg54q25oCBXHJcbiAqL1xyXG5pbXBvcnQgdHlwZSB7IEFueUFjdGlvbiwgQXN5bmNUaHVuayB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5cclxudHlwZSBHZW5lcmljQXN5bmNUaHVuayA9IEFzeW5jVGh1bms8dW5rbm93biwgdW5rbm93biwgYW55PjtcclxuXHJcbnR5cGUgUGVuZGluZ0FjdGlvbiA9IFJldHVyblR5cGU8R2VuZXJpY0FzeW5jVGh1bmtbJ3BlbmRpbmcnXT47XHJcbnR5cGUgUmVqZWN0ZWRBY3Rpb24gPSBSZXR1cm5UeXBlPEdlbmVyaWNBc3luY1RodW5rWydyZWplY3RlZCddPjtcclxudHlwZSBGdWxmaWxsZWRBY3Rpb24gPSBSZXR1cm5UeXBlPEdlbmVyaWNBc3luY1RodW5rWydmdWxmaWxsZWQnXT47XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNQZW5kaW5nQWN0aW9uKGFjdGlvbjogQW55QWN0aW9uKTogYWN0aW9uIGlzIFBlbmRpbmdBY3Rpb24ge1xyXG4gIHJldHVybiBhY3Rpb24udHlwZS5lbmRzV2l0aCgnL3BlbmRpbmcnKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaXNSZWplY3RlZEFjdGlvbihhY3Rpb246IEFueUFjdGlvbik6IGFjdGlvbiBpcyBSZWplY3RlZEFjdGlvbiB7XHJcbiAgcmV0dXJuIGFjdGlvbi50eXBlLmVuZHNXaXRoKCcvcmVqZWN0ZWQnKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaXNGdWxmaWxsZWRBY3Rpb24oYWN0aW9uOiBBbnlBY3Rpb24pOiBhY3Rpb24gaXMgRnVsZmlsbGVkQWN0aW9uIHtcclxuICByZXR1cm4gYWN0aW9uLnR5cGUuZW5kc1dpdGgoJy9mdWxmaWxsZWQnKTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTG9hZGluZ1N0YXRlID0gUmVjb3JkPHN0cmluZywgYm9vbGVhbj47XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IExvYWRpbmdTdGF0ZSA9IHt9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRpbmdTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnbG9hZGluZycsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIC8vIFRoZSBgcmVkdWNlcnNgIGZpZWxkIGxldHMgdXMgZGVmaW5lIHJlZHVjZXJzIGFuZCBnZW5lcmF0ZSBhc3NvY2lhdGVkIGFjdGlvbnNcclxuICByZWR1Y2Vyczoge30sXHJcbiAgLy8gVGhlIGBleHRyYVJlZHVjZXJzYCBmaWVsZCBsZXRzIHRoZSBzbGljZSBoYW5kbGUgYWN0aW9ucyBkZWZpbmVkIGVsc2V3aGVyZSxcclxuICAvLyBpbmNsdWRpbmcgYWN0aW9ucyBnZW5lcmF0ZWQgYnkgY3JlYXRlQXN5bmNUaHVuayBvciBpbiBvdGhlciBzbGljZXMuXHJcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcclxuICAgIGJ1aWxkZXJcclxuICAgICAgLmFkZE1hdGNoZXIoaXNQZW5kaW5nQWN0aW9uLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBhY3Rpb24udHlwZS5yZXBsYWNlKCcvcGVuZGluZycsICcnKTtcclxuICAgICAgICBzdGF0ZVt0eXBlXSA9IHRydWU7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5hZGRNYXRjaGVyKGlzUmVqZWN0ZWRBY3Rpb24sIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdHlwZSA9IGFjdGlvbi50eXBlLnJlcGxhY2UoJy9yZWplY3RlZCcsICcnKTtcclxuICAgICAgICBzdGF0ZVt0eXBlXSA9IGZhbHNlO1xyXG4gICAgICB9KVxyXG4gICAgICAvLyBtYXRjaGVyIGNhbiBqdXN0IHJldHVybiBib29sZWFuIGFuZCB0aGUgbWF0Y2hlciBjYW4gcmVjZWl2ZSBhIGdlbmVyaWMgYXJndW1lbnRcclxuICAgICAgLmFkZE1hdGNoZXIoaXNGdWxmaWxsZWRBY3Rpb24sIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdHlwZSA9IGFjdGlvbi50eXBlLnJlcGxhY2UoJy9mdWxmaWxsZWQnLCAnJyk7XHJcbiAgICAgICAgc3RhdGVbdHlwZV0gPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkaW5nU2xpY2UucmVkdWNlcjtcclxuIiwiXHJcbmltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IGdldFNjcm9sbGJhcldpZHRoIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcbmltcG9ydCB0eXBlIHsgQXBwU3RhdGUsIEFwcFRodW5rIH0gZnJvbSAnLi4vc3RvcmUnO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9naW5TdGF0ZSB7XHJcbiAgICBpc1Nob3dMb2dpbjogYm9vbGVhbjtcclxuICAgIHNob3dGb3JnZXRQd2Q6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogTG9naW5TdGF0ZSA9IHtcclxuICAgIGlzU2hvd0xvZ2luOiBmYWxzZSxcclxuICAgIHNob3dGb3JnZXRQd2Q6IGZhbHNlLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiAnbG9naW4nLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgLy8gVGhlIGByZWR1Y2Vyc2AgZmllbGQgbGV0cyB1cyBkZWZpbmUgcmVkdWNlcnMgYW5kIGdlbmVyYXRlIGFzc29jaWF0ZWQgYWN0aW9uc1xyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBzaG93TG9naW46IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPj0gMTMwMCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBnZXRTY3JvbGxiYXJXaWR0aCgpICsgJ3B4JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGF0ZS5pc1Nob3dMb2dpbiA9IHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBoaWRlTG9naW46IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcwcHgnO1xyXG4gICAgICAgICAgICBzdGF0ZS5pc1Nob3dMb2dpbiA9IGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0xvZ2luUGFnZTogKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5zaG93Rm9yZ2V0UHdkKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5zaG93Rm9yZ2V0UHdkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzaG93Rm9yZ2V0UHdkUGFnZTogKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc3RhdGUuc2hvd0ZvcmdldFB3ZCkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuc2hvd0ZvcmdldFB3ZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBzaG93TG9naW4sIGhpZGVMb2dpbiwgc2hvd0xvZ2luUGFnZSwgc2hvd0ZvcmdldFB3ZFBhZ2UgfSA9IGxvZ2luU2xpY2UuYWN0aW9ucztcclxuXHJcbi8vIFRoZSBmdW5jdGlvbiBiZWxvdyBpcyBjYWxsZWQgYSBzZWxlY3RvciBhbmQgYWxsb3dzIHVzIHRvIHNlbGVjdCBhIHZhbHVlIGZyb21cclxuLy8gdGhlIHN0YXRlLiBTZWxlY3RvcnMgY2FuIGFsc28gYmUgZGVmaW5lZCBpbmxpbmUgd2hlcmUgdGhleSdyZSB1c2VkIGluc3RlYWQgb2ZcclxuLy8gaW4gdGhlIHNsaWNlIGZpbGUuIEZvciBleGFtcGxlOiBgdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmNvdW50ZXIudmFsdWUpYFxyXG5leHBvcnQgY29uc3QgaXNTaG93TG9naW4gPSAoc3RhdGU6IEFwcFN0YXRlKSA9PiBzdGF0ZS5sb2dpbi5pc1Nob3dMb2dpbjtcclxuXHJcbi8vIFdlIGNhbiBhbHNvIHdyaXRlIHNlcnZpY2VzIGJ5IGhhbmQsIHdoaWNoIG1heSBjb250YWluIGJvdGggc3luYyBhbmQgYXN5bmMgbG9naWMuXHJcbi8vIEhlcmUncyBhbiBleGFtcGxlIG9mIGNvbmRpdGlvbmFsbHkgZGlzcGF0Y2hpbmcgYWN0aW9ucyBiYXNlZCBvbiBjdXJyZW50IHN0YXRlLlxyXG5leHBvcnQgY29uc3Qgc2hvd09ySGlkZUxvZ2luID1cclxuICAgIChpc1Nob3c6IGJvb2xlYW4pOiBBcHBUaHVuayA9PlxyXG4gICAgICAgIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXNOb3dTaG93ID0gaXNTaG93TG9naW4oZ2V0U3RhdGUoKSk7XHJcbiAgICAgICAgICAgIGlmIChpc05vd1Nob3cgIT09IGlzU2hvdykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzU2hvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNob3dMb2dpbigpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goaGlkZUxvZ2luKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvZ2luU2xpY2UucmVkdWNlcjtcclxuIiwiXHJcbmltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmssIFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgdGh1bmtXcmFwcGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcbmltcG9ydCB7IENpcmNsZUJlYW4sIGdldENpcmNsZUxpc3QsIExpc3RQYWdlQmVhbiB9IGZyb20gJy4uL3NlcnZpY2VzL2NpcmNsZSc7XHJcbmltcG9ydCB7IGdldFVzZXJIZWxwZXJMaXN0LCBIZWxwZXJJdGVtRGF0YSB9IGZyb20gJy4uL3NlcnZpY2VzL2hlbHBlcic7XHJcbmltcG9ydCB7IFJlcyB9IGZyb20gJy4uL3NlcnZpY2VzL2hvbWUnO1xyXG5pbXBvcnQgeyBnZXRVc2VySW5mbyB9IGZyb20gJy4uL3NlcnZpY2VzL21pbmUnO1xyXG5pbXBvcnQgeyBVc2VyQmVhbiB9IGZyb20gJy4uL3NlcnZpY2VzL3VzZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoVXNlckluZm8gPSB0aHVua1dyYXBwZXIoJ3VzZXIvdXNlckluZm8nLCBnZXRVc2VySW5mbyk7XHJcbmV4cG9ydCBjb25zdCBmZXRjaE1pbmVSZWNvbW1lbmRDaXJjbGVMaXN0ID0gdGh1bmtXcmFwcGVyKCdtaW5lL2NpcmNsZS9yZWNvbW1lbmQnLCBnZXRDaXJjbGVMaXN0KTtcclxuZXhwb3J0IGNvbnN0IGZldGNoTWluZUhlbHBlckxpc3QgPSB0aHVua1dyYXBwZXIoJ21pbmUvaGVscGVyJywgZ2V0VXNlckhlbHBlckxpc3QpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNaW5lU3RhdGUge1xyXG4gICAgdXNlckluZm8/OiBVc2VyQmVhbixcclxuICAgIHJlY29tbWVuZENpcmNsZURhdGE6IExpc3RQYWdlQmVhbjxDaXJjbGVCZWFuPjtcclxuICAgIG1pbmVIZWxwZXJEYXRhOiBMaXN0UGFnZUJlYW48SGVscGVySXRlbURhdGE+O1xyXG4gICAgdXNlclBhZ2VTZWxlY3RJbmRleDogYW55XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogTWluZVN0YXRlID0ge1xyXG4gICAgdXNlckluZm86IHVuZGVmaW5lZCxcclxuICAgIHJlY29tbWVuZENpcmNsZURhdGE6IHtcclxuICAgICAgICB0b3RhbDogMCxcclxuICAgICAgICBsaXN0OiBbXVxyXG4gICAgfSxcclxuICAgIG1pbmVIZWxwZXJEYXRhOiB7XHJcbiAgICAgICAgdG90YWw6IDAsXHJcbiAgICAgICAgbGlzdDogW11cclxuICAgIH0sXHJcbiAgICB1c2VyUGFnZVNlbGVjdEluZGV4OiB7fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG1pbmVTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6ICdtaW5lJyxcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgc3dpdGNoVXNlclBhZ2VTZWxlY3RJbmRleDogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248eyBrZXk6IHN0cmluZywgaW5kZXg6IG51bWJlciB9PikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgeyBrZXksIGluZGV4IH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUudXNlclBhZ2VTZWxlY3RJbmRleFtrZXldID0gaW5kZXg7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5IGluIHN0YXRlLnVzZXJQYWdlU2VsZWN0SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS51c2VyUGFnZVNlbGVjdEluZGV4W2tleV0gPSBpbmRleDtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgc3RhdGUudXNlclBhZ2VTZWxlY3RJbmRleFtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6ZSA5q+BXCIsIHN0YXRlLnVzZXJQYWdlU2VsZWN0SW5kZXhba2V5XSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBleHRyYVJlZHVjZXJzOiB7XHJcbiAgICAgICAgW2ZldGNoVXNlckluZm8uZnVsZmlsbGVkLnR5cGVdOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxSZXM8VXNlckJlYW4+PikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VySW5mbyA9IGFjdGlvbi5wYXlsb2FkLmRhdGE7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbZmV0Y2hNaW5lUmVjb21tZW5kQ2lyY2xlTGlzdC5mdWxmaWxsZWQudHlwZV06IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFJlczxMaXN0UGFnZUJlYW48Q2lyY2xlQmVhbj4+PikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5yZWNvbW1lbmRDaXJjbGVEYXRhID0gYWN0aW9uLnBheWxvYWQuZGF0YTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtmZXRjaE1pbmVIZWxwZXJMaXN0LmZ1bGZpbGxlZC50eXBlXTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UmVzPExpc3RQYWdlQmVhbjxIZWxwZXJJdGVtRGF0YT4+PikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5taW5lSGVscGVyRGF0YSA9IGFjdGlvbi5wYXlsb2FkLmRhdGE7XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufSk7XHJcbmV4cG9ydCBjb25zdCB7IHN3aXRjaFVzZXJQYWdlU2VsZWN0SW5kZXggfSA9IG1pbmVTbGljZS5hY3Rpb25zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWluZVNsaWNlLnJlZHVjZXI7XHJcbiIsIlxyXG5pbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IHJlbW92ZVRva2VuLCBzYXZlVG9rZW4gfSBmcm9tICcuLi8uLi91dGlscy90b2tlbl91dGlsJztcclxuaW1wb3J0IHsgdGh1bmtXcmFwcGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcbmltcG9ydCB7IFJlcyB9IGZyb20gJy4uL3NlcnZpY2VzL2hvbWUnO1xyXG5pbXBvcnQgeyBVc2VyQmVhbiwgTG9naW5CZWFuLCBhdXRvTG9naW4gfSBmcm9tICcuLi9zZXJ2aWNlcy91c2VyJztcclxuaW1wb3J0IHsgQXBwVGh1bmsgfSBmcm9tICcuLi9zdG9yZSc7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hBdXRvTG9naW4gPSB0aHVua1dyYXBwZXIoJ3VzZXIvYXV0b0xvZ2luJywgYXV0b0xvZ2luKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlclN0YXRlIHtcclxuICAgIGlzTG9naW46IGJvb2xlYW4sXHJcbiAgICBpc0ZpbmlzaDogYm9vbGVhbixcclxuICAgIHRva2VuOiBzdHJpbmcsXHJcbiAgICB1c2VyPzogVXNlckJlYW4sXHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogVXNlclN0YXRlID0ge1xyXG4gICAgaXNMb2dpbjogZmFsc2UsXHJcbiAgICBpc0ZpbmlzaDogZmFsc2UsXHJcbiAgICB0b2tlbjogJycsXHJcbiAgICB1c2VyOiB1bmRlZmluZWRcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiAndXNlcicsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIHNhdmVVc2VySW5mbzogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UmVzPExvZ2luQmVhbj4+KSA9PiB7XHJcbiAgICAgICAgICAgIHNhdmVVc2VyRGF0YShzdGF0ZSwgYWN0aW9uLnBheWxvYWQuZGF0YSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g6YCA5Ye655m75b2VXHJcbiAgICAgICAgb3V0TG9naW46IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIumAgOWHuueZu+W9lVwiKTtcclxuXHJcbiAgICAgICAgICAgIHN0YXRlLmlzTG9naW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgc3RhdGUuaXNGaW5pc2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgc3RhdGUudG9rZW4gPSBcIlwiO1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICByZW1vdmVUb2tlbigpO1xyXG4gICAgICAgICAgICAvLyBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXh0cmFSZWR1Y2Vyczoge1xyXG4gICAgICAgIFtmZXRjaEF1dG9Mb2dpbi5mdWxmaWxsZWQudHlwZV06IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFJlczxMb2dpbkJlYW4+PikgPT4ge1xyXG4gICAgICAgICAgICBzYXZlVXNlckRhdGEoc3RhdGUsIGFjdGlvbi5wYXlsb2FkLmRhdGEpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8g5L+d5a2Y55So5oi35pWw5o2uXHJcbmZ1bmN0aW9uIHNhdmVVc2VyRGF0YShzdGF0ZSwgZGF0YTogTG9naW5CZWFuKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInRva2VuXCIsIGRhdGEudG9rZW4pO1xyXG5cclxuICAgIHN0YXRlLmlzTG9naW4gPSB0cnVlO1xyXG4gICAgY29uc3QgdG9rZW4gPSBkYXRhLnRva2VuO1xyXG4gICAgc3RhdGUudG9rZW4gPSB0b2tlbjtcclxuICAgIHNhdmVUb2tlbih0b2tlbik7XHJcbiAgICBzdGF0ZS5pc0ZpbmlzaCA9IGRhdGEuaXNfZmluaXNoID09PSAxO1xyXG4gICAgc3RhdGUudXNlciA9IGRhdGEudXNlcjtcclxufVxyXG5cclxuY29uc3QgeyBzYXZlVXNlckluZm8gfSA9IHVzZXJTbGljZS5hY3Rpb25zO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgb3V0TG9naW4gfSA9IHVzZXJTbGljZS5hY3Rpb25zO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNhdmVVc2VyID1cclxuICAgIChkYXRhOiBhbnkpOiBBcHBUaHVuayA9PlxyXG4gICAgICAgIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2F2ZVVzZXJJbmZvKGRhdGEpKVxyXG4gICAgICAgIH07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlclNsaWNlLnJlZHVjZXI7XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yOiBsZXJveVxyXG4gKiBAZGF0ZTogMjAyMS84LzIzIDE2OjA5XHJcbiAqIEBkZXNjcmlwdGlvbu+8mnN0b3JlXHJcbiAqL1xyXG5pbXBvcnQgdHlwZSB7IFRodW5rQWN0aW9uLCBBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHR5cGUgeyBUeXBlZFVzZVNlbGVjdG9ySG9vayB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIsIEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5cclxuaW1wb3J0IGxvYWRpbmdSZWR1Y2VyIGZyb20gJy4vc2xpY2VzL2xvYWRpbmdTbGljZSc7XHJcbmltcG9ydCBob21lUmVkdWNlciBmcm9tICcuL3NsaWNlcy9ob21lU2xpY2UnO1xyXG5pbXBvcnQgbG9naW5SZWR1Y2VyIGZyb20gJy4vc2xpY2VzL2xvZ2luU2xpY2UnO1xyXG5pbXBvcnQgdXNlclJlZHVjZXIgZnJvbSAnLi9zbGljZXMvdXNlclNsaWNlJztcclxuaW1wb3J0IGNvbW1vblJlZHVjZXIgZnJvbSAnLi9zbGljZXMvY29tbW9uU2xpY2UnO1xyXG5pbXBvcnQgY2lyY2xlUmVkdWNlciBmcm9tICcuL3NsaWNlcy9jaXJjbGVTbGljZSc7XHJcbmltcG9ydCBtaW5lUmVkdWNlciBmcm9tICcuL3NsaWNlcy9taW5lU2xpY2UnO1xyXG5cclxuY29uc3QgY29tYmluZWRSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGxvYWRpbmc6IGxvYWRpbmdSZWR1Y2VyLFxyXG4gICAgaG9tZTogaG9tZVJlZHVjZXIsXHJcbiAgICBsb2dpbjogbG9naW5SZWR1Y2VyLFxyXG4gICAgdXNlcjogdXNlclJlZHVjZXIsXHJcbiAgICBjb21tb246IGNvbW1vblJlZHVjZXIsXHJcbiAgICBjaXJjbGU6IGNpcmNsZVJlZHVjZXIsXHJcbiAgICBtaW5lOiBtaW5lUmVkdWNlcixcclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gSFlEUkFURSkge1xyXG4gICAgICAgIGNvbnN0IG5leHRTdGF0ZSA9IHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsIC8vIHVzZSBwcmV2aW91cyBzdGF0ZVxyXG4gICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCwgLy8gYXBwbHkgZGVsdGEgZnJvbSBoeWRyYXRpb25cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBjb21iaW5lZFJlZHVjZXIobmV4dFN0YXRlLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbWJpbmVkUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcclxufTtcclxuXHJcbmNvbnN0IG1ha2VTdG9yZSA9ICgpID0+XHJcbiAgICBjb25maWd1cmVTdG9yZSh7XHJcbiAgICAgICAgcmVkdWNlcixcclxuICAgICAgICBkZXZUb29sczogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcsXHJcbiAgICB9KTtcclxuXHJcbmV4cG9ydCB0eXBlIEFwcFN0b3JlID0gUmV0dXJuVHlwZTx0eXBlb2YgbWFrZVN0b3JlPjtcclxuZXhwb3J0IHR5cGUgQXBwU3RhdGUgPSBSZXR1cm5UeXBlPEFwcFN0b3JlWydnZXRTdGF0ZSddPjtcclxuZXhwb3J0IHR5cGUgQXBwRGlzcGF0Y2ggPSBBcHBTdG9yZVsnZGlzcGF0Y2gnXTtcclxuXHJcbmV4cG9ydCB0eXBlIEFwcFRodW5rPFJldHVyblR5cGUgPSB2b2lkPiA9IFRodW5rQWN0aW9uPFxyXG4gICAgUmV0dXJuVHlwZSxcclxuICAgIEFwcFN0YXRlLFxyXG4gICAgdW5rbm93bixcclxuICAgIEFjdGlvbjxzdHJpbmc+XHJcbj47XHJcblxyXG4vLyBVc2UgdGhyb3VnaG91dCB5b3VyIGFwcCBpbnN0ZWFkIG9mIHBsYWluIGB1c2VEaXNwYXRjaGAgYW5kIGB1c2VTZWxlY3RvcmBcclxuZXhwb3J0IGNvbnN0IHVzZUFwcERpc3BhdGNoID0gKCkgPT4gdXNlRGlzcGF0Y2g8QXBwRGlzcGF0Y2g+KCk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXBwU2VsZWN0b3I6IFR5cGVkVXNlU2VsZWN0b3JIb29rPEFwcFN0YXRlPiA9IHVzZVNlbGVjdG9yO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlV3JhcHBlcjxBcHBTdG9yZT4obWFrZVN0b3JlKTtcclxuIiwiaW1wb3J0IENyeXB0b0pTIGZyb20gJ2NyeXB0by1qcyc7XHJcblxyXG5jb25zdCBrZXkgPSBDcnlwdG9KUy5lbmMuVXRmOC5wYXJzZSgnczM3OWU4YjU1MWJlNGVkMCcpO1xyXG5jb25zdCBpdiA9IENyeXB0b0pTLmVuYy5VdGY4LnBhcnNlKCcyMDAyMDM4NTA1MDY1NTg4Jyk7XHJcblxyXG4vLyBhZXMg5Yqg5a+GXHJcbmV4cG9ydCBmdW5jdGlvbiBlbmNyeXB0KG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgbGV0IHNyY3MgPSBDcnlwdG9KUy5lbmMuVXRmOC5wYXJzZShtZXNzYWdlKTtcclxuICAgIGxldCBlbmNyeXB0ZWQgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdChzcmNzLCBrZXksIHtcclxuICAgICAgICBpdjogaXYsXHJcbiAgICAgICAgbW9kZTogQ3J5cHRvSlMubW9kZS5FQ0IsXHJcbiAgICAgICAgcGFkZGluZzogQ3J5cHRvSlMucGFkLlBrY3M3XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBlbmNyeXB0ZWQuY2lwaGVydGV4dC50b1N0cmluZyhDcnlwdG9KUy5lbmMuQmFzZTY0KTtcclxufVxyXG5cclxuLy8gYWVzIOino+WvhlxyXG5leHBvcnQgZnVuY3Rpb24gZGVjcnlwdCh3b3JkOiBzdHJpbmcpIHtcclxuICAgIGxldCBkZWNyeXB0ID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQod29yZCwga2V5LCB7XHJcbiAgICAgICAgaXY6IGl2LFxyXG4gICAgICAgIG1vZGU6IENyeXB0b0pTLm1vZGUuRUNCLFxyXG4gICAgICAgIHBhZGRpbmc6IENyeXB0b0pTLnBhZC5Qa2NzN1xyXG4gICAgfSk7XHJcbiAgICBsZXQgZGVjcnlwdGVkU3RyID0gZGVjcnlwdC50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCk7XHJcbiAgICByZXR1cm4gZGVjcnlwdGVkU3RyLnRvU3RyaW5nKCk7XHJcbn0iLCJpbXBvcnQgYXhpb3MsIHsgQXhpb3NSZXF1ZXN0Q29uZmlnIH0gZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBub3RpZmljYXRpb24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgZGVjcnlwdCwgZW5jcnlwdCB9IGZyb20gJy4vYWVzJztcclxuaW1wb3J0IHsgZ2V0VG9rZW4gfSBmcm9tICcuL3Rva2VuX3V0aWwnO1xyXG5cclxuXHJcblxyXG5jb25zdCBxcyA9IHJlcXVpcmUoJ3FzJyk7XHJcblxyXG5jb25zdCBjb2RlTWVzc2FnZTogUmVjb3JkPG51bWJlciwgc3RyaW5nPiA9IHtcclxuICAgIDIwMDogJ+acjeWKoeWZqOaIkOWKn+i/lOWbnuivt+axgueahOaVsOaNruOAgicsXHJcbiAgICAyMDE6ICfmlrDlu7rmiJbkv67mlLnmlbDmja7miJDlip/jgIInLFxyXG4gICAgMjAyOiAn5LiA5Liq6K+35rGC5bey57uP6L+b5YWl5ZCO5Y+w5o6S6Zif77yI5byC5q2l5Lu75Yqh77yJ44CCJyxcclxuICAgIDIwNDogJ+WIoOmZpOaVsOaNruaIkOWKn+OAgicsXHJcbiAgICA0MDA6ICflj5Hlh7rnmoTor7fmsYLmnInplJnor6/vvIzmnI3liqHlmajmsqHmnInov5vooYzmlrDlu7rmiJbkv67mlLnmlbDmja7nmoTmk43kvZzjgIInLFxyXG4gICAgNDAxOiAn55So5oi35rKh5pyJ5p2D6ZmQ77yI5Luk54mM44CB55So5oi35ZCN44CB5a+G56CB6ZSZ6K+v77yJ44CCJyxcclxuICAgIDQwMzogJ+eUqOaIt+W+l+WIsOaOiOadg++8jOS9huaYr+iuv+mXruaYr+iiq+emgeatoueahOOAgicsXHJcbiAgICA0MDQ6ICflj5Hlh7rnmoTor7fmsYLpkojlr7nnmoTmmK/kuI3lrZjlnKjnmoTorrDlvZXvvIzmnI3liqHlmajmsqHmnInov5vooYzmk43kvZzjgIInLFxyXG4gICAgNDA1OiAn6K+35rGC5pa55rOV5LiN6KKr5YWB6K6444CCJyxcclxuICAgIDQwNjogJ+ivt+axgueahOagvOW8j+S4jeWPr+W+l+OAgicsXHJcbiAgICA0MTA6ICfor7fmsYLnmoTotYTmupDooqvmsLjkuYXliKDpmaTvvIzkuJTkuI3kvJrlho3lvpfliLDnmoTjgIInLFxyXG4gICAgNDIyOiAn5b2T5Yib5bu65LiA5Liq5a+56LGh5pe277yM5Y+R55Sf5LiA5Liq6aqM6K+B6ZSZ6K+v44CCJyxcclxuICAgIDUwMDogJ+acjeWKoeWZqOWPkeeUn+mUmeivr++8jOivt+ajgOafpeacjeWKoeWZqOOAgicsXHJcbiAgICA1MDI6ICfnvZHlhbPplJnor6/jgIInLFxyXG4gICAgNTAzOiAn5pyN5Yqh5LiN5Y+v55So77yM5pyN5Yqh5Zmo5pqC5pe26L+H6L295oiW57u05oqk44CCJyxcclxuICAgIDUwNDogJ+e9keWFs+i2heaXtuOAgicsXHJcbn07XHJcblxyXG5jb25zdCBhcGkgPSB7XHJcblxyXG4gICAgZ2V0SGVhZGVyKCkge1xyXG4gICAgICAgIGxldCB0b2tlbiA9IGdldFRva2VuKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0b2tlblwiLCB0b2tlbik7XHJcblxyXG4gICAgICAgIGxldCBoZWFkZXIgPSB7XHJcbiAgICAgICAgICAgIG5vd190aW1lOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpICsgJycsXHJcbiAgICAgICAgICAgIHZlcnNpb246ICcwLjEuMCcsXHJcbiAgICAgICAgICAgIGNsaWVudDogJ3BjJyxcclxuICAgICAgICAgICAgdG9rZW46IHRva2VuLFxyXG4gICAgICAgICAgICBkaWQ6IFwiSFVCQU5HX1BDXCIsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBhZXNIZWFkZXIgPSBcIm5vd190aW1lPVwiICsgaGVhZGVyW1wibm93X3RpbWVcIl1cclxuICAgICAgICAgICAgKyBcIiZjbGllbnQ9XCIgKyBoZWFkZXJbXCJjbGllbnRcIl1cclxuICAgICAgICAgICAgKyBcIiZ2ZXJzaW9uPVwiICsgaGVhZGVyW1widmVyc2lvblwiXVxyXG4gICAgICAgICAgICArIFwiJmRpZD1cIiArIGhlYWRlcltcImRpZFwiXVxyXG4gICAgICAgICAgICArIFwiJnRva2VuPVwiICsgaGVhZGVyW1widG9rZW5cIl07XHJcblxyXG4gICAgICAgIGhlYWRlclsnc2lnbiddID0gZW5jcnlwdChKU09OLnN0cmluZ2lmeShhZXNIZWFkZXIpKTtcclxuICAgICAgICAvLyBoZWFkZXJbXCJDb25uZWN0aW9uXCJdID0gJ2tlZXAtYWxpdmUnO1xyXG4gICAgICAgIGhlYWRlcltcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiXSA9ICcqJztcclxuICAgICAgICByZXR1cm4gaGVhZGVyO1xyXG4gICAgfSxcclxuXHJcbiAgICByZXF1ZXN0KGNvbmZpZz86IEF4aW9zUmVxdWVzdENvbmZpZykge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5nZXRIZWFkZXIoKTtcclxuICAgICAgICBsZXQgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBiYXNlVVJMOiBwcm9jZXNzLmVudi5BUElfSE9TVCxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgICAgICAgICAgdGltZW91dDogMTAwMDAsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIOivt+axguaLpuaIquWZqFxyXG4gICAgICAgIGluc3RhbmNlLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShcclxuICAgICAgICAgICAgKGNvbmZpZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8g5Y+R6LW36K+35rGC5pe277yM5Y+W5raI5o6J5b2T5YmN5q2j5Zyo6L+b6KGM55qE55u45ZCM6K+35rGCXHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLm1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICBjb25maWcudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIHFzLnN0cmluZ2lmeShjb25maWcucGFyYW1zKSxcclxuICAgICAgICAgICAgICAgICAgICBxcy5zdHJpbmdpZnkoY29uZmlnLmRhdGEpLFxyXG4gICAgICAgICAgICAgICAgXS5qb2luKCcmJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGVuZGluZy5oYXModXJsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOWcqCBwZW5kaW5nIOS4reWtmOWcqOW9k+WJjeivt+axguagh+ivhu+8jOmcgOimgeWPlua2iOW9k+WJjeivt+axgu+8jOW5tuS4lOenu+mZpFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbmNlbCA9IHBlbmRpbmcuZ2V0KHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGVuZGluZy5kZWxldGUodXJsKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLmNhbmNlbFRva2VuID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnLmNhbmNlbFRva2VuIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBheGlvcy5DYW5jZWxUb2tlbigoY2FuY2VsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZW5kaW5nLnNldCh1cmwsIGNhbmNlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6K+35rGC5oum5oiqXCIsIGNvbmZpZy51cmwsIGNvbmZpZz8uaGVhZGVycz8uWyd0b2tlbiddKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8g6L2s5Y+Y5pWw5o2u5qC85byPXHJcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnPy5oZWFkZXJzPy5bJ0NvbnRlbnQtVHlwZSddID09PSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0ID0gKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RyID0gT2JqZWN0LmtleXMoZGF0YSkubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGtleSkgPT4gYCR7ZW5jb2RlVVJJQ29tcG9uZW50KGtleSl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSl9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ci5qb2luKCcmJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBjb25maWc7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2Uuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JUZXh0ID0gY29kZU1lc3NhZ2VbcmVzcG9uc2Uuc3RhdHVzXSB8fCByZXNwb25zZS5zdGF0dXNUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgc3RhdHVzLCB1cmwgfSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDQwMSB8fCBzdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb24uZXJyb3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+acqueZu+W9leaIlueZu+W9leW3sui/h+acn++8jOivt+mHjeaWsOeZu+W9leOAgicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb24uZXJyb3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBg6K+35rGC6ZSZ6K+vICR7c3RhdHVzfTogJHt1cmx9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGVycm9yVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLmVycm9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICfmgqjnmoTnvZHnu5zlj5HnlJ/lvILluLjvvIzml6Dms5Xov57mjqXmnI3liqHlmagnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn572R57uc5byC5bi4JyxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICApO1xyXG4gICAgICAgIC8vIOWTjeW6lOaLpuaIquWZqOWNs+W8guW4uOWkhOeQhlxyXG4gICAgICAgIGluc3RhbmNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgaWYgKGRhdGEgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubmVlZF9kZWNyeXB0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IEpTT04ucGFyc2UoZGVjcnlwdChkYXRhLmRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZGF0YSA9IGNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZShjb25maWcgPyBjb25maWcgOiB7fSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCBwZW5kaW5nID0gbmV3IE1hcCgpO1xyXG5cclxuLy8g5riF56m6IHBlbmRpbmcg5Lit55qE6K+35rGC77yI5Zyo6Lev55Sx6Lez6L2s5pe26LCD55So77yJXHJcbmV4cG9ydCBjb25zdCBjbGVhclBlbmRpbmcgPSAoKSA9PiB7XHJcbiAgICBwZW5kaW5nLmZvckVhY2goZnVuY3Rpb24gKGNhbmNlbCwgdXJsKSB7XHJcbiAgICAgICAgY2FuY2VsKHVybCk7XHJcbiAgICB9KTtcclxuICAgIHBlbmRpbmcuY2xlYXIoKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGk7IiwiXHJcbmNvbnN0IHN0YXRpY0RhdGEgPSB7XHJcbiAgICBjb2xvckxpc3Q6IFtcclxuICAgICAgICBcIiNmZjgyODJcIixcclxuICAgICAgICBcIiNmYzI5NTBcIixcclxuICAgICAgICBcIiNmNDRlYmZcIixcclxuICAgICAgICBcIiNkMzMzYmVcIixcclxuICAgICAgICBcIiNiZTMzZDNcIixcclxuICAgICAgICBcIiM5OTMzZDNcIixcclxuICAgICAgICBcIiM3NjMyYzNcIixcclxuICAgICAgICBcIiM2MTQ5ZjRcIixcclxuICAgICAgICBcIiM0NjYzY2NcIixcclxuICAgICAgICBcIiM1NjlkZTBcIixcclxuICAgICAgICBcIiM1NmUwZGVcIixcclxuICAgICAgICBcIiMyZmNkYTZcIixcclxuICAgICAgICBcIiMyZmNkY2JcIixcclxuICAgICAgICBcIiM0Y2YwOTJcIixcclxuICAgICAgICBcIiNiNGYwNGNcIixcclxuICAgICAgICBcIiNlMWU3M2JcIixcclxuICAgICAgICBcIiNlN2M1M2JcIixcclxuICAgICAgICBcIiNmNjhmNDNcIixcclxuICAgICAgICBcIiNmNjRiNDNcIixcclxuICAgICAgICBcIiNjOGFkYWNcIixcclxuICAgICAgICBcIiM2MDE1YjVcIixcclxuICAgICAgICBcIiMzZDI0NDlcIixcclxuICAgICAgICBcIiMzZDI0NDlcIixcclxuICAgICAgICBcIiNiNjRjYTNcIixcclxuICAgICAgICBcIiM2YzQ2NjVcIixcclxuICAgICAgICBcIiM0Yzc0NzFcIixcclxuICAgICAgICBcIiM5MzlkOWNcIixcclxuICAgIF0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0YXRpY0RhdGE7IiwiaW1wb3J0IGNvb2tpZSBmcm9tICdyZWFjdC1jb29raWVzJ1xyXG5leHBvcnQgY29uc3QgdG9rZW5LZXkgPSBcInVzZXJfdG9rZW5cIjtcclxuXHJcbi8qKlxyXG4gKiDkv53lrZh0b2tlblxyXG4gKiBAcGFyYW0gdG9rZW4gXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2F2ZVRva2VuID0gKHRva2VuOiBzdHJpbmcpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwi5L+d5a2YdG9rZW5cIiwgdG9rZW4pO1xyXG4gICAgY29va2llLnNhdmUodG9rZW5LZXksIHRva2VuKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOenu+mZpHRva2VuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVtb3ZlVG9rZW4gPSAoKSA9PiB7XHJcbiAgICBjb29raWUucmVtb3ZlKHRva2VuS2V5KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPlnRva2VuXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldFRva2VuID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSBjb29raWUubG9hZCh0b2tlbktleSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIuiOt+WPlnRva2VuXCIsIHRva2VuKTtcclxuICAgIHJldHVybiB0b2tlbiA9PSBudWxsID8gJycgOiB0b2tlbjtcclxufSIsImxldCBkb21haW4gPSBwcm9jZXNzLmVudi5BUElfSE9TVCB8fCAnJztcclxuLy8gaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbi8vICAgICBkb21haW4gPSBkb21haW4ucmVwbGFjZSgvXmh0dHBzL2ksICdodHRwJyk7XHJcbi8vIH1cclxuXHJcbmNvbnN0IFVybCA9IHtcclxuICAgIHN0YXRpY0hvc3Q6IHByb2Nlc3MuZW52LlNUQVRJQ19IT1NULFxyXG4gICAgZG9tYWluLFxyXG4gICAgY29tbWl0OiBcImNvbW1pdFwiLCAvL+WtpuagoeWIhuexu+WfjuW4guetieS/oeaBr+iOt+WPllxyXG4gICAgZ2V0Q2lyY2xlVHlwZTogXCJnZXRfY2lyY2xlX3R5cGVcIiwgLy/ojrflvpflnIjlrZDnsbvliKtcclxuXHJcbiAgICBnZXRDb2RlOiBcImdldF9jb2RlXCIsIC8v6I635Y+W6aqM6K+B56CBXHJcbiAgICBwd2RMb2dpbjogXCJsb2dpblwiLCAvL+WvhueggeeZu+W9lVxyXG4gICAgY29kZUxvZ2luOiBcInF1aWNrX2xvZ2luXCIsIC8v6aqM6K+B56CB55m75b2VXHJcbiAgICBhdXRvTG9naW46IFwiYXV0b19sb2dpblwiLCAvL+iHquWKqOeZu+W9lVxyXG4gICAgdXNlckluZm86IFwidXNlci9pbmZvXCIsIC8v55So5oi35L+h5oGvXHJcblxyXG4gICAgdXNlckNpcmNsZUxpc3Q6IFwiY2lyY2xlL3VzZXJfam9pblwiLCAvL+eUqOaIt+WKoOWFpeeahOWciOWtkFxyXG4gICAgY2lyY2xlTGlzdDogXCJjaXJjbGUvbGlzdFwiLCAvL+WciOWtkOWIl+ihqFxyXG5cclxuICAgIGhlbHBlckxpc3Q6IFwiaGVscGVyL2xpc3RcIiwgLy/msYLliqnliJfooahcclxuICAgIHVzZXJIZWxwTGlzdDogXCJoZWxwZXIvdXNlci9saXN0XCIsIC8vIOeUqOaIt+axguWKqeWIl+ihqFxyXG5cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVXJsO1xyXG4iLCJpbXBvcnQgdHlwZSB7IEFzeW5jVGh1bmsgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgeyBsb3dlckNhc2UgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgc3RhdGljRGF0YSBmcm9tICcuL3N0YXRpY0RhdGEnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHdhaXRUaW1lID0gKHRpbWU6IG51bWJlciA9IDEwMCkgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgfSwgdGltZSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0gbmFtZSBhY3Rpb27lkI1cclxuICogQHBhcmFtIGZuIOivt+axguWHveaVsFxyXG4gKiBAcmV0dXJucyB0aHVua+WMheijueeahGFjdGlvblxyXG4gKiBAUyDljIXoo7nnmoTlh73mlbDnmoTnsbvlnovvvIzlpoLmnpzkuI3luKblj4LmlbDnmoTor53vvIzopoHloat2b2lk77yM5LiN54S257yW6K+R5Zmo5Lya5oql6ZSZXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdGh1bmtXcmFwcGVyID0gPFQgPSBhbnksIFMgPSBhbnk+KG5hbWU6IHN0cmluZywgZm46IChwYXJhbXM/OiBhbnkpID0+IFByb21pc2U8VD4pID0+IHtcclxuICAgIHJldHVybiBjcmVhdGVBc3luY1RodW5rKG5hbWUsIGFzeW5jIChwYXJhbXM/OiBhbnkpID0+IHtcclxuICAgICAgICBpZiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmbihwYXJhbXMhKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZuKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH1cclxuICAgIH0pIGFzIEFzeW5jVGh1bms8dW5rbm93biwgUywgUmVjb3JkPHN0cmluZywgYW55Pj47XHJcbn07XHJcblxyXG4vKipcclxuICog6I635Y+W5pyA5aSa5Lik5L2N5pyJ5pWI5bCP5pWwXHJcbiAqIEBwYXJhbSBkIFxyXG4gKiBAcmV0dXJucyBcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRNYXhUd29aZXJvID0gKGQ6IG51bWJlcikgPT4ge1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoZCAqIDEwMCkgLyAxMDBcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPluS6kuW4ruaYvuekuueahOmHkeminVxyXG4gKiBAcGFyYW0gbWluIOacgOWwj+mHkeminVxyXG4gKiBAcGFyYW0gbWF4IOacgOWkp+mHkeminVxyXG4gKiBAcmV0dXJucyBcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRIZWxwTW9uZXkgPSAobWluOiBudW1iZXIsIG1heDogbnVtYmVyKSA9PiB7XHJcbiAgICBpZiAobWF4ID09IDApIHtcclxuICAgICAgICBpZiAobWluID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwi5b6F5a6aXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwi77+lXCIgKyBnZXRNYXhUd29aZXJvKG1pbikgKyBcIuWFg1wiO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFwi77+lXCIgKyBnZXRNYXhUd29aZXJvKG1pbikgKyBcIi1cIiArIGdldE1heFR3b1plcm8obWF4KSArIFwi5YWDXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmoLnmja7lvZPliY3ojrflj5bml7bpl7TlrZfnrKbkuLJcclxuICogQHBhcmFtIHRpbWUg5pe26Ze05oizXHJcbiAqIEBwYXJhbSBkZWZhdWx0VmFsdWUg6buY6K6k5YC8XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0VGltZVN0cmluZ0J5Tm93ID0gKHRpbWU6IG51bWJlciwgZGVmYXVsdFZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgIGlmICh0aW1lIDw9IDApIHtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lKTtcclxuICAgIGlmIChkYXRlID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG4gICAgbGV0IG5vd0RhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IHllc0RhdGUgPSBuZXcgRGF0ZShub3dEYXRlLmdldFRpbWUoKSAtICgyNCAqIDYwICogNjAgKiAxMDAwKSk7XHJcbiAgICBsZXQgdG9tb3Jyb3dEYXRlID0gbmV3IERhdGUobm93RGF0ZS5nZXRUaW1lKCkgKyAoMjQgKiA2MCAqIDYwICogMTAwMCkpO1xyXG4gICAgaWYgKG5vd0RhdGUuZ2V0RnVsbFllYXIoKSA9PT0gZGF0ZS5nZXRGdWxsWWVhcigpXHJcbiAgICAgICAgJiYgbm93RGF0ZS5nZXRNb250aCgpID09PSBkYXRlLmdldE1vbnRoKClcclxuICAgICAgICAmJiBub3dEYXRlLmdldERhdGUoKSA9PT0gZGF0ZS5nZXREYXRlKCkpIHtcclxuICAgICAgICAvLyDlkIzkuIDlpKlcclxuICAgICAgICByZXR1cm4gQWRkWihkYXRlLmdldEhvdXJzKCkpICsgXCI6XCIgKyBBZGRaKGRhdGUuZ2V0TWludXRlcygpKTtcclxuICAgIH0gZWxzZSBpZiAoeWVzRGF0ZS5nZXRGdWxsWWVhcigpID09PSBkYXRlLmdldEZ1bGxZZWFyKClcclxuICAgICAgICAmJiB5ZXNEYXRlLmdldE1vbnRoKCkgPT09IGRhdGUuZ2V0TW9udGgoKVxyXG4gICAgICAgICYmIHllc0RhdGUuZ2V0RGF0ZSgpID09PSBkYXRlLmdldERhdGUoKSkge1xyXG4gICAgICAgIC8vIOaYqOWkqVxyXG4gICAgICAgIHJldHVybiBcIuaYqOWkqSBcIiArIEFkZFooZGF0ZS5nZXRIb3VycygpKSArIFwiOlwiICsgQWRkWihkYXRlLmdldE1pbnV0ZXMoKSk7XHJcbiAgICB9IGVsc2UgaWYgKHRvbW9ycm93RGF0ZS5nZXRGdWxsWWVhcigpID09PSBkYXRlLmdldEZ1bGxZZWFyKClcclxuICAgICAgICAmJiB0b21vcnJvd0RhdGUuZ2V0TW9udGgoKSA9PT0gZGF0ZS5nZXRNb250aCgpXHJcbiAgICAgICAgJiYgdG9tb3Jyb3dEYXRlLmdldERhdGUoKSA9PT0gZGF0ZS5nZXREYXRlKCkpIHtcclxuICAgICAgICAvLyDmmI7lpKlcclxuICAgICAgICByZXR1cm4gXCLmmI7lpKkgXCIgKyBBZGRaKGRhdGUuZ2V0SG91cnMoKSkgKyBcIjpcIiArIEFkZFooZGF0ZS5nZXRNaW51dGVzKCkpO1xyXG4gICAgfSBlbHNlIGlmIChub3dEYXRlLmdldEZ1bGxZZWFyKCkgPT09IGRhdGUuZ2V0RnVsbFllYXIoKSkge1xyXG4gICAgICAgIC8vIOWQjOS4gOW5tFxyXG4gICAgICAgIHJldHVybiBBZGRaKGRhdGUuZ2V0TW9udGgoKSkgKyBcIuaciFwiICsgQWRkWihkYXRlLmdldERhdGUoKSkgKyBcIuaXpSBcIiArIEFkZFooZGF0ZS5nZXRIb3VycygpKSArIFwiOlwiICsgQWRkWihkYXRlLmdldE1pbnV0ZXMoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpICsgXCLlubRcIiArIEFkZFooZGF0ZS5nZXRNb250aCgpKSArIFwi5pyIXCIgKyBBZGRaKGRhdGUuZ2V0RGF0ZSgpKSArIFwi5pelIFwiICsgQWRkWihkYXRlLmdldEhvdXJzKCkpICsgXCI6XCIgKyBBZGRaKGRhdGUuZ2V0TWludXRlcygpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOaVsOWtl+Wwj+S6jjEwIOWJjemdouihpTBcclxuICogQHBhcmFtIG51bSBcclxuICogQHJldHVybnMgXHJcbiAqL1xyXG5mdW5jdGlvbiBBZGRaKG51bTogbnVtYmVyKSB7XHJcbiAgICBpZiAobnVtIDwgMTApIHtcclxuICAgICAgICByZXR1cm4gXCIwXCIgKyBudW07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJcIiArIG51bTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOaJi+acuuWPt+mqjOivgVxyXG4gKiBAcGFyYW0gcGhvbmUg5omL5py65Y+3XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY2hlY2tQaG9uZSA9IChwaG9uZTogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAoIXBob25lKSB7XHJcbiAgICAgICAgcmV0dXJuICfor7fovpPlhaXmiYvmnLrlj7cnO1xyXG4gICAgfVxyXG4gICAgdmFyIG15cmVnID0gL14xXFxkezEwfSQvO1xyXG4gICAgaWYgKCFteXJlZy50ZXN0KHBob25lKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5omL5py65Y+35qC85byP6ZSZ6K+vXCIpO1xyXG4gICAgICAgIHJldHVybiAn5omL5py65Y+35qC85byP6ZSZ6K+vJztcclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxufVxyXG5cclxuLyoqXHJcbiAqIOmqjOivgeeggemqjOivgVxyXG4gKiBAcGFyYW0gY29kZSBcclxuICogQHJldHVybnMgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY2hlY2tDb2RlID0gKGNvZGU6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKCFjb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuICfor7flhYjojrflj5bpqozor4HnoIEnO1xyXG4gICAgfVxyXG4gICAgdmFyIG15cmVnID0gL15cXGR7NCw2fSQvO1xyXG4gICAgaWYgKCFteXJlZy50ZXN0KGNvZGUpKSB7XHJcbiAgICAgICAgcmV0dXJuICfor7fovpPlhaXmraPnoa7nmoTpqozor4HnoIEnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG59XHJcblxyXG4vKipcclxuICog6aqM6K+B5a+G56CBXHJcbiAqIEBwYXJhbSBwd2QgXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNoZWNrUHdkID0gKHB3ZDogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAoIXB3ZCkge1xyXG4gICAgICAgIHJldHVybiAn6K+36L6T5YWl5a+G56CBJztcclxuICAgIH1cclxuICAgIGlmIChwd2QubGVuZ3RoIDwgNiB8fCBwd2QubGVuZ3RoID4gMjApIHtcclxuICAgICAgICByZXR1cm4gJ+ivt+i+k+WFpTYtMjDkvY3lr4bnoIEnO1xyXG4gICAgfVxyXG4gICAgdmFyIG15cmVnID0gL14oPz0uKlthLXpBLVpdKSg/PS4qXFxkKS57NiwyMH0kLztcclxuICAgIGlmICghbXlyZWcudGVzdChwd2QpKSB7XHJcbiAgICAgICAgcmV0dXJuICflr4bnoIHmoLzlvI/plJnor68nO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG59XHJcblxyXG4vKipcclxuICog6I635Y+W5rua5Yqo5p2h5a695bqmXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjcm9sbGJhcldpZHRoKCkge1xyXG4gICAgdmFyIG9QID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLFxyXG4gICAgICAgIHN0eWxlcyA9IHtcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJSdcclxuICAgICAgICB9LCBpLCBjbGllbnRXaWR0aDEsIGNsaWVudFdpZHRoMiwgc2Nyb2xsYmFyV2lkdGg7XHJcbiAgICBmb3IgKGkgaW4gc3R5bGVzKSBvUC5zdHlsZVtpXSA9IHN0eWxlc1tpXTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob1ApO1xyXG4gICAgY2xpZW50V2lkdGgxID0gb1AuY2xpZW50V2lkdGg7XHJcbiAgICBvUC5zdHlsZS5vdmVyZmxvd1kgPSAnc2Nyb2xsJztcclxuICAgIGNsaWVudFdpZHRoMiA9IG9QLmNsaWVudFdpZHRoO1xyXG4gICAgc2Nyb2xsYmFyV2lkdGggPSBjbGllbnRXaWR0aDEgLSBjbGllbnRXaWR0aDI7XHJcbiAgICBvUC5yZW1vdmUoKTtcclxuICAgIHJldHVybiBzY3JvbGxiYXJXaWR0aDtcclxufVxyXG5cclxuLy8g5qC55o2u5a2X56ym5Liy6aaW5a2X56ymYXNjaWnlgLzojrflj5bpopzoibJcclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbG9yQnlTdHJpbmcoa2V5OiBzdHJpbmcpIHtcclxuICAgIGxldCBjb2RlID0ga2V5LmNoYXJDb2RlQXQoMCk7XHJcbiAgICByZXR1cm4gc3RhdGljRGF0YS5jb2xvckxpc3RbY29kZSAlIHN0YXRpY0RhdGEuY29sb3JMaXN0Lmxlbmd0aF07XHJcbn1cclxuXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRlbnRfdGl0bGVcIjogXCJteV9jaXJjbGVfY29udGVudF90aXRsZV9fM09BMHhcIixcblx0XCJteV9jaXJsY2VfY29udGVudFwiOiBcIm15X2NpcmNsZV9teV9jaXJsY2VfY29udGVudF9fMkNQcm5cIixcblx0XCJub19tb3JlXCI6IFwibXlfY2lyY2xlX25vX21vcmVfXzFjTTBrXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJyZWNvbW1lbmRDaXJjbGVcIjogXCJyZWNvbW1lbmRfY2lyY2xlX3JlY29tbWVuZENpcmNsZV9fMlBoQnBcIixcblx0XCJyZWNvbW1lbmRDaXJjbGVDb250ZW50XCI6IFwicmVjb21tZW5kX2NpcmNsZV9yZWNvbW1lbmRDaXJjbGVDb250ZW50X18xOHVUbVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaXRlbUNvbnRlbnRcIjogXCJoZWxwZXJfaXRlbV9pdGVtQ29udGVudF9fUGJLM0lcIixcblx0XCJ0aXRsZVwiOiBcImhlbHBlcl9pdGVtX3RpdGxlX18zWFY4Y1wiLFxuXHRcImhlbHBOYW1lXCI6IFwiaGVscGVyX2l0ZW1faGVscE5hbWVfX1RjaGNFXCIsXG5cdFwiaGVscE1vbmV5XCI6IFwiaGVscGVyX2l0ZW1faGVscE1vbmV5X18xbmFJTFwiLFxuXHRcImhlbHBUaW1lXCI6IFwiaGVscGVyX2l0ZW1faGVscFRpbWVfXzJQcTM4XCIsXG5cdFwicGVvcGxlTnVtYmVyXCI6IFwiaGVscGVyX2l0ZW1fcGVvcGxlTnVtYmVyX18xTVpGb1wiLFxuXHRcImhvdEltZ1wiOiBcImhlbHBlcl9pdGVtX2hvdEltZ19fM1FUcG5cIixcblx0XCJoZWxwVXNlclwiOiBcImhlbHBlcl9pdGVtX2hlbHBVc2VyX18xckVGdlwiLFxuXHRcInVzZXJIZWFkXCI6IFwiaGVscGVyX2l0ZW1fdXNlckhlYWRfXzMwSmI5XCIsXG5cdFwidXNlck5hbWVcIjogXCJoZWxwZXJfaXRlbV91c2VyTmFtZV9fMTBBZG1cIixcblx0XCJhZGRyZXNzXCI6IFwiaGVscGVyX2l0ZW1fYWRkcmVzc19fM3NrTGZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNpcmNsZUl0ZW1cIjogXCJiaWdfY2lyY2xlX2l0ZW1fY2lyY2xlSXRlbV9fMXpuR1lcIixcblx0XCJsaW5lQ29udGVudFwiOiBcImJpZ19jaXJjbGVfaXRlbV9saW5lQ29udGVudF9fM2pjbGFcIixcblx0XCJsb2dvXCI6IFwiYmlnX2NpcmNsZV9pdGVtX2xvZ29fXzNsV0MwXCIsXG5cdFwiY2lyY2xlQ29udGVudFwiOiBcImJpZ19jaXJjbGVfaXRlbV9jaXJjbGVDb250ZW50X18xNk1iVFwiLFxuXHRcImNlbnRlckNvbnRlbnRcIjogXCJiaWdfY2lyY2xlX2l0ZW1fY2VudGVyQ29udGVudF9fMkxVUEJcIixcblx0XCJjaXJjbGVOYW1lXCI6IFwiYmlnX2NpcmNsZV9pdGVtX2NpcmNsZU5hbWVfXzF1OWg0XCIsXG5cdFwidGFnc1wiOiBcImJpZ19jaXJjbGVfaXRlbV90YWdzX18zcEhaaFwiLFxuXHRcImRlc2NcIjogXCJiaWdfY2lyY2xlX2l0ZW1fZGVzY19fMXJfM2RcIixcblx0XCJmb2xsb3dcIjogXCJiaWdfY2lyY2xlX2l0ZW1fZm9sbG93X18yRVBvRFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2lyY2xlSXRlbVwiOiBcImNpcmNsZV9pdGVtX2NpcmNsZUl0ZW1fXzNvQXUtXCIsXG5cdFwibG9nb1wiOiBcImNpcmNsZV9pdGVtX2xvZ29fX0lMWGY2XCIsXG5cdFwiY2lyY2xlQ29udGVudFwiOiBcImNpcmNsZV9pdGVtX2NpcmNsZUNvbnRlbnRfXzFnMTI3XCIsXG5cdFwiY2VudGVyQ29udGVudFwiOiBcImNpcmNsZV9pdGVtX2NlbnRlckNvbnRlbnRfXzFTRFRuXCIsXG5cdFwiY2lyY2xlTmFtZVwiOiBcImNpcmNsZV9pdGVtX2NpcmNsZU5hbWVfXzFPcUV1XCIsXG5cdFwiZGVzY1wiOiBcImNpcmNsZV9pdGVtX2Rlc2NfXzItRUhJXCIsXG5cdFwiZm9sbG93XCI6IFwiY2lyY2xlX2l0ZW1fZm9sbG93X18yLXRRSFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2lyY2xlX3RhZ1wiOiBcImNpcmNsZV90YWdfaXRlbV9jaXJjbGVfdGFnX18zM19LZ1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9sbG93RmFuc1wiOiBcImZvbGxvd19mYW5zX2ZvbGxvd0ZhbnNfXzNYMXhzXCIsXG5cdFwibGluZVwiOiBcImZvbGxvd19mYW5zX2xpbmVfXzE4VW5VXCIsXG5cdFwiaXRlbVwiOiBcImZvbGxvd19mYW5zX2l0ZW1fXzMwaXRfXCIsXG5cdFwiZmFuX251bWJlclwiOiBcImZvbGxvd19mYW5zX2Zhbl9udW1iZXJfX0lyU3VzXCIsXG5cdFwiZmFuX3RpdGxlXCI6IFwiZm9sbG93X2ZhbnNfZmFuX3RpdGxlX18zNU5MalwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGVudEJvZHlcIjogXCJtaW5lX2NlbnRlcl9jb250ZW50X2NvbnRlbnRCb2R5X18yVUdyWFwiLFxuXHRcImxlZnRcIjogXCJtaW5lX2NlbnRlcl9jb250ZW50X2xlZnRfX2xLcy03XCIsXG5cdFwiY2VudGVyXCI6IFwibWluZV9jZW50ZXJfY29udGVudF9jZW50ZXJfX2FTdl9SXCIsXG5cdFwiY2VudGVyQ29udGVudFwiOiBcIm1pbmVfY2VudGVyX2NvbnRlbnRfY2VudGVyQ29udGVudF9fMjVSWElcIixcblx0XCJyaWdodFwiOiBcIm1pbmVfY2VudGVyX2NvbnRlbnRfcmlnaHRfX1VNQ0duXCIsXG5cdFwiYWJvdXRfbWVcIjogXCJtaW5lX2NlbnRlcl9jb250ZW50X2Fib3V0X21lX18zNFNyOFwiLFxuXHRcImFib3V0Q29udGVudFwiOiBcIm1pbmVfY2VudGVyX2NvbnRlbnRfYWJvdXRDb250ZW50X18ySDZNSFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2VudGVyQ29udGVudFwiOiBcIm1pbmVfY29udGVudF9jZW50ZXJDb250ZW50X19DZ1RxQlwiLFxuXHRcIm1pbmVUYWJcIjogXCJtaW5lX2NvbnRlbnRfbWluZVRhYl9fMUIxVGJcIixcblx0XCJ0YWJJdGVtXCI6IFwibWluZV9jb250ZW50X3RhYkl0ZW1fXzJkNldEXCIsXG5cdFwiaW5kaWNhdG9yXCI6IFwibWluZV9jb250ZW50X2luZGljYXRvcl9fb1p3MDJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1pbmVIZWxwQ29udGVudFwiOiBcIm1pbmVfaGVscGVyX21pbmVIZWxwQ29udGVudF9fM1pncmlcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBlcnNvbmFsQ29udGVudFwiOiBcInBlcnNvbmFsX2R5bmFtaWNfcGVyc29uYWxDb250ZW50X18yN1p1eFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaW5mb0NvbnRlbnRcIjogXCJ0b3BfdXNlcl9pbmZvX2luZm9Db250ZW50X18xYUw1eVwiLFxuXHRcIm1hc2tcIjogXCJ0b3BfdXNlcl9pbmZvX21hc2tfX295bTh6XCIsXG5cdFwidXBkYXRhX2NlbnRlcl9waWNcIjogXCJ0b3BfdXNlcl9pbmZvX3VwZGF0YV9jZW50ZXJfcGljX19DUEF5dFwiLFxuXHRcInVzZXJJbmZvXCI6IFwidG9wX3VzZXJfaW5mb191c2VySW5mb19fM1J6R2NcIixcblx0XCJ1c2VySGVhZGVyXCI6IFwidG9wX3VzZXJfaW5mb191c2VySGVhZGVyX18xS2YzSlwiLFxuXHRcImluZm9cIjogXCJ0b3BfdXNlcl9pbmZvX2luZm9fX1N1SU5EXCIsXG5cdFwibmFtZVwiOiBcInRvcF91c2VyX2luZm9fbmFtZV9fMnFqY1BcIixcblx0XCJuaWNrbmFtZVwiOiBcInRvcF91c2VyX2luZm9fbmlja25hbWVfXzMtdHNmXCIsXG5cdFwic2V4XCI6IFwidG9wX3VzZXJfaW5mb19zZXhfXzNBY0FEXCIsXG5cdFwiY3JlZGl0X3Njb3JlXCI6IFwidG9wX3VzZXJfaW5mb19jcmVkaXRfc2NvcmVfX3V3X1hDXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJ0b3BfdXNlcl9pbmZvX2Rlc2NyaXB0aW9uX18yRUM2OFwiLFxuXHRcImZsZXhFbmRcIjogXCJ0b3BfdXNlcl9pbmZvX2ZsZXhFbmRfXzJ1X0ZvXCIsXG5cdFwiZWRpdFwiOiBcInRvcF91c2VyX2luZm9fZWRpdF9fYXFOdWlcIixcblx0XCJmb2xsb3dcIjogXCJ0b3BfdXNlcl9pbmZvX2ZvbGxvd19fM3V2UzZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRpdGxlQ29udGVudFwiOiBcIm1vZHVsZV90aXRsZV90aXRsZUNvbnRlbnRfX3FMYlRHXCIsXG5cdFwibGVmdEJvcmRlclwiOiBcIm1vZHVsZV90aXRsZV9sZWZ0Qm9yZGVyX19mMEVDWVwiLFxuXHRcInRpdGxlXCI6IFwibW9kdWxlX3RpdGxlX3RpdGxlX18zUmxWdFwiLFxuXHRcIm1vcmVcIjogXCJtb2R1bGVfdGl0bGVfbW9yZV9fMVFwWHlcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJvZHlcIjogXCJNaW5lX2JvZHlfXzNhLWU0XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJlbXB0eV9jb250ZW50XCI6IFwiZW1wdHlfdmlld19lbXB0eV9jb250ZW50X18xc1l4aVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicGFnaW5hdGlvblwiOiBcIm15X3BhZ2luYXRpb25fcGFnaW5hdGlvbl9fM2U3TC1cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvb3RlclwiOiBcImZvb3Rlcl9mb290ZXJfXzFjQnlBXCIsXG5cdFwiY29udGVudFwiOiBcImZvb3Rlcl9jb250ZW50X18yeFZjaVwiLFxuXHRcImRvd25cIjogXCJmb290ZXJfZG93bl9fMVRmcEtcIixcblx0XCJkb3duT3RoZXJcIjogXCJmb290ZXJfZG93bk90aGVyX18yM0VQdVwiLFxuXHRcImNvcHlcIjogXCJmb290ZXJfY29weV9fMnNsNXVcIixcblx0XCJjb3B5TGlua1wiOiBcImZvb3Rlcl9jb3B5TGlua19fMThhMWlcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRlclwiOiBcImhlYWRlcl9oZWFkZXJfXzJxMXdGXCIsXG5cdFwiY29udGVudFwiOiBcImhlYWRlcl9jb250ZW50X19tMzRxYVwiLFxuXHRcImxvZ29cIjogXCJoZWFkZXJfbG9nb19fWkhrY0dcIixcblx0XCJtZW51XCI6IFwiaGVhZGVyX21lbnVfXzNLcjdCXCIsXG5cdFwibWVudUFIb21lXCI6IFwiaGVhZGVyX21lbnVBSG9tZV9fMUo1ZmlcIixcblx0XCJtZW51QUhlbHBcIjogXCJoZWFkZXJfbWVudUFIZWxwX18xbnE3U1wiLFxuXHRcIm1lbnVBRHluYW1pY1wiOiBcImhlYWRlcl9tZW51QUR5bmFtaWNfXzJtaXhxXCIsXG5cdFwibWVudUFDaXJjbGVcIjogXCJoZWFkZXJfbWVudUFDaXJjbGVfXzM5UnZYXCIsXG5cdFwibWVudVNlbGVjdFwiOiBcImhlYWRlcl9tZW51U2VsZWN0X18xQ0phYVwiLFxuXHRcInNlYXJjaFwiOiBcImhlYWRlcl9zZWFyY2hfXzFBaVNVXCIsXG5cdFwic2VhcmNoSWNvblwiOiBcImhlYWRlcl9zZWFyY2hJY29uX18xTmxQYlwiLFxuXHRcInVzZXJJbmZvXCI6IFwiaGVhZGVyX3VzZXJJbmZvX18yLTNXalwiLFxuXHRcInVzZXJNZW51XCI6IFwiaGVhZGVyX3VzZXJNZW51X18zUG95M1wiLFxuXHRcInVzZXJDZW50ZXJcIjogXCJoZWFkZXJfdXNlckNlbnRlcl9fMWt0UTBcIixcblx0XCJ1c2VyQ2VudGVyTmFtZVwiOiBcImhlYWRlcl91c2VyQ2VudGVyTmFtZV9fMngtTzlcIixcblx0XCJ1c2VyQ2VudGVySXRlbVwiOiBcImhlYWRlcl91c2VyQ2VudGVySXRlbV9fUmZVcHdcIixcblx0XCJzZW5kRHluYW1pY1wiOiBcImhlYWRlcl9zZW5kRHluYW1pY19fMXE4a0FcIixcblx0XCJzZW5kRG5hbWljSXRlbVwiOiBcImhlYWRlcl9zZW5kRG5hbWljSXRlbV9fMTlxREpcIixcblx0XCJtZXNzYWdlSGludFwiOiBcImhlYWRlcl9tZXNzYWdlSGludF9fMTlweDVcIixcblx0XCJkb3duTG9naW5cIjogXCJoZWFkZXJfZG93bkxvZ2luX18yMXZINFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidG9Ub3BcIjogXCJsYXlvdXRfdG9Ub3BfXzJZeDVQXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3J5cHRvLWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY29va2llc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwiLyogKGlnbm9yZWQpICovIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiZmV0Y2hVc2VyQ2lyY2xlTGlzdCIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJzdHlsZXMiLCJCaWdDaXJjbGVJdGVtIiwiRW1wdHlWaWV3IiwiTXlQYWdpbmF0aW9uIiwiTXlDaXJjbGUiLCJpZCIsInNob3dUaXRsZSIsIm15Q2lyY2xlTGlzdCIsInN0YXRlIiwiY2lyY2xlIiwiZGlzcGF0Y2giLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwibG9hZE15Q2lyY2xlIiwicGFnZSIsImxpbWl0IiwicGFnZUNoYW5nZSIsInBhZ2VTaXplIiwiY29udGVudF90aXRsZSIsIm15X2NpcmxjZV9jb250ZW50IiwibGlzdCIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJub19tb3JlIiwiZGlzcGxheSIsInRvdGFsIiwiTW9kdWxlVGl0bGUiLCJDaXJjbGVJdGVtIiwiUmVjb21tZW5kQ2lyY2xlIiwicmVjb21tZW5kQ2lyY2xlIiwicmVjb21tZW5kQ2lyY2xlQ29udGVudCIsImluZGV4Iiwic3R5bGUiLCJnZXRIZWxwTW9uZXkiLCJnZXRUaW1lU3RyaW5nQnlOb3ciLCJMaW5rIiwiSGVscGVySXRlbSIsInByb3BzIiwiZ2V0SGVscFRpbWUiLCJzdGFydCIsImVuZCIsInN0YXJ0VGltZSIsImVuZFRpbWUiLCJnZXRQZW9wbGVOdW1iZXIiLCJudW0iLCJnZXRBZGRyZXNzIiwicHJvdmluY2UiLCJjaXR5IiwiYXJlYSIsIm5hbWUiLCJpdGVtQ29udGVudCIsInRpdGxlIiwiaGVscE5hbWUiLCJ0eXBlIiwiY2hpbGQiLCJoZWxwTW9uZXkiLCJsb3dlc3RfcHJpY2UiLCJoaWdoZXN0X3ByaWNlIiwiaGVscFRpbWUiLCJzdGFydF90aW1lIiwiZW5kX3RpbWUiLCJwZW9wbGVOdW1iZXIiLCJwZW9wbGVfbnVtYmVyIiwiaG90SW1nIiwiZmluaXNoX3Byb3ZlIiwiaXNfdXJnZW50IiwiaGVscFVzZXIiLCJzZW5kZXIiLCJ1c2VySGVhZCIsImF2YXRhciIsInVzZXJOYW1lIiwiYWxpYXMiLCJuaWNrbmFtZSIsImFkZHJlc3MiLCJDaXJjbGVUYWdJdGVtIiwiZ2V0Rm9sbG93IiwiY2lyY2xlSXRlbSIsImxpbmVDb250ZW50IiwibG9nbyIsImNpcmNsZUNvbnRlbnQiLCJjZW50ZXJDb250ZW50IiwiY2lyY2xlTmFtZSIsImNpcmNsZV9uYW1lIiwidGFncyIsImNpcmNsZV90YWciLCJzcGxpdCIsImRlc2MiLCJkZXNjcmlwdGlvbiIsImZvbGxvdyIsImNvbG9yIiwiam9pbl90eXBlIiwiYm9yZGVyQ29sb3IiLCJnZXRDb2xvckJ5U3RyaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiRm9sbG93RmFucyIsIk1pbmVDb250ZW50IiwiVG9wVXNlckluZm8iLCJNaW5lQ2VudGVyQ29udGVudCIsInVzZXJJbmZvIiwic2VsZWN0SW5kZXgiLCJpc1NlbGYiLCJyZWNvbW1lbmRDaXJjbGVEYXRhIiwibWluZSIsImNvbnRlbnRCb2R5IiwiY2VudGVyIiwicmlnaHQiLCJhYm91dF9tZSIsImFib3V0Q29udGVudCIsImZvbGxvd0ZhbnMiLCJmYW5fbnVtYmVyIiwiZm9sbG93X251bWJlciIsImZhbl90aXRsZSIsImxpbmUiLCJNaW5lSGVscGVyIiwiUGVyc29uYWxEeW5hbWljIiwidXNlcklkIiwidGFicyIsInB1c2giLCJtaW5lVGFiIiwidGFiSXRlbSIsImZvbnRXZWlnaHQiLCJpbmRpY2F0b3IiLCJsZWZ0IiwidXNlRWZmZWN0IiwiZmV0Y2hNaW5lSGVscGVyTGlzdCIsIm1pbmVIZWxwZXJEYXRhIiwibG9hZERhdGEiLCJtaW5lSGVscENvbnRlbnQiLCJwZXJzb25hbENvbnRlbnQiLCJ1c2VyIiwiZ2V0UnoiLCJhdXRoZW50aWNhdGlvbl90eXBlIiwiaW5mb0NvbnRlbnQiLCJtYXNrIiwidXBkYXRhX2NlbnRlcl9waWMiLCJ1c2VySGVhZGVyIiwiaW5mbyIsInNleCIsImNyZWRpdF9zY29yZSIsIm9yZGVyX3JhdGUiLCJlZGl0IiwiZmxleEVuZCIsImpvaW4iLCJmb2xsb3dlZCIsIlJlYWN0IiwidGl0bGVDb250ZW50IiwibGVmdEJvcmRlciIsImJhY2tncm91bmRJbWFnZSIsImltYWdlIiwibGluayIsIm1vcmUiLCJnZXRFcnJvckltZyIsImltZyIsImVtcHR5X2NvbnRlbnQiLCJQYWdpbmF0aW9uIiwiZ2V0SXRlbVJlbmRlciIsImN1cnJlbnQiLCJvcmlnaW5hbEVsZW1lbnQiLCJwYWdpbmF0aW9uIiwiRm9vdGVyIiwiZm9vdGVyIiwiY29udGVudCIsImRvd24iLCJkb3duT3RoZXIiLCJjb3B5IiwiY29weUxpbmsiLCJzaG93T3JIaWRlTG9naW4iLCJ1c2VEaXNwYXRjaCIsImdldFNjcm9sbGJhcldpZHRoIiwidXNlUm91dGVyIiwic3dpdGNoVXNlclBhZ2VTZWxlY3RJbmRleCIsIm91dExvZ2luIiwiSGVhZGVyIiwiaXNTaG93TG9naW4iLCJsb2dpbiIsImlzTG9naW4iLCJyb3V0ZXIiLCJ1c2VyQ2VudGVyTGlzdCIsInNlbmRMaXN0IiwiaXNTaG93VXNlckNlbnRlciIsInNldFNob3dVc2VyQ2VudGVyIiwiaXNTaG93U2VuZER5bmFtaWMiLCJzZXRTaG93U2VuZER5bmFtaWMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoaWRlRGlhbG9nIiwiZXYiLCJ0YXJnZXQiLCJzcmNFbGVtZW50IiwidXNlckNlbnRlclNob3ciLCJzZW5kU2hvdyIsInVzZXJDZW50ZXJJdGVtQ2xpY2siLCJ1c2VyQ2VudGVyQ2hhbmdlIiwia2V5IiwicGF0aG5hbWUiLCJzZW5kRHluYW1pY0l0ZW1DbGljayIsImNvbnNvbGUiLCJsb2ciLCJzaG93TG9naW4iLCJoZWFkZXIiLCJwYWRkaW5nUmlnaHQiLCJtZW51IiwibWVudVNlbGVjdCIsIm1lbnVBSG9tZSIsIm1lbnVBSGVscCIsIm1lbnVBRHluYW1pYyIsIm1lbnVBQ2lyY2xlIiwic2VhcmNoIiwic2VhcmNoSWNvbiIsInVzZXJNZW51IiwidXNlckNlbnRlciIsInZpc2liaWxpdHkiLCJ1c2VyQ2VudGVyTmFtZSIsInVzZXJDZW50ZXJJdGVtIiwibWVzc2FnZUhpbnQiLCJzZW5kRHluYW1pYyIsInNlbmREbmFtaWNJdGVtIiwiZG93bkxvZ2luIiwiSGVhZCIsIkxheW91dCIsImtleXdvcmRzIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJ3aW5kb3ciLCJ0b1RvcCIsImdldEVsZW1lbnRCeUlkIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsInBhZ2VYT2Zmc2V0Iiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX3JvdXRlciIsIl9yb3V0ZXIxIiwiX3VzZUludGVyc2VjdGlvbiIsIm9iaiIsIl9fZXNNb2R1bGUiLCJwcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJocmVmIiwiYXMiLCJvcHRpb25zIiwiaXNMb2NhbFVSTCIsImNhdGNoIiwiZXJyIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJpbmRleE9mIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsIkVycm9yIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwia2V5cyIsImZvckVhY2giLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsInVzZVJlZiIsIndhcm4iLCJwIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNyZWF0ZUVsZW1lbnQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFJlZiIsInJlZiIsInNldEludGVyc2VjdGlvblJlZiIsImlzVmlzaWJsZSIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJ1c2VDYWxsYmFjayIsImVsIiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwYXRoIiwiZW5kc1dpdGgiLCJzbGljZSIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfVFJBSUxJTkdfU0xBU0giLCJ0ZXN0IiwicmVxdWVzdElkbGVDYWxsYmFjayIsImNhbmNlbElkbGVDYWxsYmFjayIsInNlbGYiLCJiaW5kIiwiY2IiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsIm1heCIsImNsZWFyVGltZW91dCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJnZXQiLCJmdXR1cmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlc29sdmVyIiwicHJvbSIsInNldCIsInRoZW4iLCJoYXNQcmVmZXRjaCIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwicmVsTGlzdCIsInN1cHBvcnRzIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJyZWwiLCJjcm9zc09yaWdpbiIsIl9fTkVYVF9DUk9TU19PUklHSU4iLCJvbmxvYWQiLCJvbmVycm9yIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFwcGVuZFNjcmlwdCIsInNyYyIsInNjcmlwdCIsInJlamVjdCIsImJvZHkiLCJkZXZCdWlsZFByb21pc2UiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwiZmlsdGVyIiwidiIsImVudHJ5cG9pbnRzIiwiTWFwIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsInRleHQiLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImVycm9yIiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJyb3V0ZUZpbGVzUHJvbWlzZSIsImFsbCIsImhhcyIsImVudHJ5cG9pbnQiLCJmaW5hbGx5IiwiYXNzaWduIiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJlZmZlY3RpdmVUeXBlIiwib3V0cHV0IiwiZW51bWVyYWJsZSIsIl93aXRoUm91dGVyIiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlckNvbnRleHQiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImluc3RhbmNlIiwicHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1bmRlZmluZWQiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImVsZW1lbnQiLCJjYWxsYmFjayIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZUFzIiwiX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2giLCJfcm91dGVMb2FkZXIiLCJfZGVub3JtYWxpemVQYWdlUGF0aCIsIl9ub3JtYWxpemVMb2NhbGVQYXRoIiwiX21pdHQiLCJfdXRpbHMiLCJfaXNEeW5hbWljIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJfcXVlcnlzdHJpbmciLCJfcmVzb2x2ZVJld3JpdGVzIiwiX3JvdXRlTWF0Y2hlciIsIl9yb3V0ZVJlZ2V4IiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiX19ORVhUX0kxOE5fU1VQUE9SVCIsImJhc2VQYXRoIiwiX19ORVhUX1JPVVRFUl9CQVNFUEFUSCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4Iiwic3RhcnRzV2l0aCIsInBhdGhOb1F1ZXJ5SGFzaCIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJkZXRlY3RlZExvY2FsZSIsImRldGVjdGVkRG9tYWluIiwiaHR0cCIsImRvbWFpbiIsInBhdGhMb3dlciIsInRvTG93ZXJDYXNlIiwibG9jYWxlTG93ZXIiLCJzdWJzdHIiLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiVVJMIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwicGFyYW1zIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsImluY2x1ZGVzIiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJ1cmxQcm90b01hdGNoIiwibWF0Y2giLCJ1cmxBc1N0cmluZ05vUHJvdG8iLCJ1cmxQYXJ0cyIsIm5vcm1hbGl6ZWRVcmwiLCJub3JtYWxpemVSZXBlYXRlZFNsYXNoZXMiLCJhc1BhdGgiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaXNEeW5hbWljUm91dGUiLCJzZWFyY2hQYXJhbXMiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IiwiaGFzaCIsInN0cmlwT3JpZ2luIiwicHJlcGFyZVVybEFzIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJwcmVwYXJlZEFzIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhZ2VzIiwiY2xlYW5QYXRobmFtZSIsImRlbm9ybWFsaXplUGFnZVBhdGgiLCJzb21lIiwicmUiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIl9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04iLCJoaXN0b3J5Iiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsIm4iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwicGF0aG5hbWUxIiwicXVlcnkxIiwiYXMxIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJDb21wb25lbnQxIiwiZXJyMSIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJzZGMiLCJzZHIiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwiSlNPTiIsInN0cmluZ2lmeSIsIngiLCJ5IiwiZ2V0SXRlbSIsInBhcnNlIiwicGFyc2VSZWxhdGl2ZVVybCIsImlzU3NyIiwiX2JwcyIsImNoYW5nZSIsIl9zaGFsbG93IiwiY29tcG9uZW50cyIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJzdWIiLCJjbGMiLCJfd3JhcEFwcCIsImlzUmVhZHkiLCJnc3NwIiwiZ2lwIiwiYXBwR2lwIiwiZ3NwIiwibG9jYXRpb24iLCJfX05FWFRfSEFTX1JFV1JJVEVTIiwiaG9zdG5hbWUiLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJzY3JvbGxSZXN0b3JhdGlvbiIsInJlbG9hZCIsImJhY2siLCJtZXRob2QiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwicHJldkxvY2FsZSIsInBhcnNlZEFzIiwibG9jYWxlUGF0aFJlc3VsdCIsImRpZE5hdmlnYXRlIiwiYXNOb0Jhc2VQYXRoIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiX2luRmxpZ2h0Um91dGUiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJsb2NhbGVDaGFuZ2UiLCJvbmx5QUhhc2hDaGFuZ2UiLCJlbWl0Iiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInJld3JpdGVzUmVzdWx0IiwibWF0Y2hlZFBhZ2UiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJlZjEiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJfc2Nyb2xsIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJsYW5nIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImVycjIiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaWRFbCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwYXRobmFtZTIiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcDEiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImZldGNoTWluZVJlY29tbWVuZENpcmNsZUxpc3QiLCJmZXRjaFVzZXJJbmZvIiwid3JhcHBlciIsIk1pbmVDZW50ZXIiLCJnZXRVc2VySWQiLCJ0b1N0cmluZyIsInVzZXJQYWdlU2VsZWN0SW5kZXgiLCJ1c2VyQ2VudGVyUGFnZUNoYW5nZSIsImdldEluaXRpYWxQYWdlUHJvcHMiLCJzdG9yZSIsImNvbnRleHQiLCJhcGkiLCJVcmwiLCJnZXRDaXJjbGVMaXN0IiwicmVxdWVzdCIsImNpcmNsZUxpc3QiLCJnZXRVc2VyQ2lyY2xlTGlzdCIsInVzZXJDaXJjbGVMaXN0IiwiZ2V0VHlwZUFkZHJlc3NTY2hvb2wiLCJjb21taXQiLCJnZXRDaXJjbGVUeXBlIiwiZ2V0SGVscGVyTGlzdCIsImhlbHBlckxpc3QiLCJnZXRVc2VySGVscGVyTGlzdCIsInVzZXJIZWxwTGlzdCIsImdldFVzZXJJbmZvIiwiZ2V0UGhvbmVDb2RlIiwiZ2V0Q29kZSIsImhlYWRlcnMiLCJwd2RMb2dpbiIsImNvZGVMb2dpbiIsImF1dG9Mb2dpbiIsInRodW5rV3JhcHBlciIsImNyZWF0ZVNsaWNlIiwiZmV0Y2hBbGxDaXJjbGVMaXN0IiwiaW5pdGlhbFN0YXRlIiwiYWxsQ2lyY2xlRGF0YSIsImhvbWVTbGljZSIsInJlZHVjZXJzIiwiZXh0cmFSZWR1Y2VycyIsImZ1bGZpbGxlZCIsImFjdGlvbiIsInBheWxvYWQiLCJyZWR1Y2VyIiwiZmV0Y2hUeXBlQWRkcmVzc1NjaG9vbCIsImZldGNoQ2lyY2xlVHlwZSIsImNpcmNsZVR5cGUiLCJjb21tb25TbGljZSIsImluY3JlbWVudCIsImFjdGlvbnMiLCJmZXRjaFJlY29tbWVuZExpc3QiLCJmZXRjaExpa2VMaXN0IiwiZmV0Y2hOZWFyYnlMaXN0IiwiZmV0Y2hIb3J0TGlzdCIsImZldGNoUmVjb21tZW5kQ2lyY2xlTGlzdCIsImlzTG9hZCIsInJlY29tbWVuZERhdGEiLCJsaWtlRGF0YSIsIm5lYXJieURhdGEiLCJob3J0RGF0YSIsImlzUGVuZGluZ0FjdGlvbiIsImlzUmVqZWN0ZWRBY3Rpb24iLCJpc0Z1bGZpbGxlZEFjdGlvbiIsImxvYWRpbmdTbGljZSIsImJ1aWxkZXIiLCJhZGRNYXRjaGVyIiwic2hvd0ZvcmdldFB3ZCIsImxvZ2luU2xpY2UiLCJvdmVyZmxvdyIsImhpZGVMb2dpbiIsInNob3dMb2dpblBhZ2UiLCJzaG93Rm9yZ2V0UHdkUGFnZSIsImlzU2hvdyIsImdldFN0YXRlIiwiaXNOb3dTaG93IiwibWluZVNsaWNlIiwicmVtb3ZlVG9rZW4iLCJzYXZlVG9rZW4iLCJmZXRjaEF1dG9Mb2dpbiIsImlzRmluaXNoIiwidG9rZW4iLCJ1c2VyU2xpY2UiLCJzYXZlVXNlckluZm8iLCJzYXZlVXNlckRhdGEiLCJpc19maW5pc2giLCJzYXZlVXNlciIsImNvbmZpZ3VyZVN0b3JlIiwidXNlU2VsZWN0b3IiLCJjb21iaW5lUmVkdWNlcnMiLCJjcmVhdGVXcmFwcGVyIiwiSFlEUkFURSIsImxvYWRpbmdSZWR1Y2VyIiwiaG9tZVJlZHVjZXIiLCJsb2dpblJlZHVjZXIiLCJ1c2VyUmVkdWNlciIsImNvbW1vblJlZHVjZXIiLCJjaXJjbGVSZWR1Y2VyIiwibWluZVJlZHVjZXIiLCJjb21iaW5lZFJlZHVjZXIiLCJsb2FkaW5nIiwiaG9tZSIsImNvbW1vbiIsIm5leHRTdGF0ZSIsIm1ha2VTdG9yZSIsImRldlRvb2xzIiwiQ3J5cHRvSlMiLCJlbmMiLCJVdGY4IiwiaXYiLCJlbmNyeXB0Iiwic3JjcyIsImVuY3J5cHRlZCIsIkFFUyIsIm1vZGUiLCJFQ0IiLCJwYWRkaW5nIiwicGFkIiwiUGtjczciLCJjaXBoZXJ0ZXh0IiwiQmFzZTY0IiwiZGVjcnlwdCIsIndvcmQiLCJkZWNyeXB0ZWRTdHIiLCJheGlvcyIsIm5vdGlmaWNhdGlvbiIsImdldFRva2VuIiwicXMiLCJjb2RlTWVzc2FnZSIsImdldEhlYWRlciIsIm5vd190aW1lIiwiZ2V0VGltZSIsInZlcnNpb24iLCJjbGllbnQiLCJkaWQiLCJhZXNIZWFkZXIiLCJjb25maWciLCJjcmVhdGUiLCJiYXNlVVJMIiwiQVBJX0hPU1QiLCJ0aW1lb3V0IiwiaW50ZXJjZXB0b3JzIiwidXNlIiwicGVuZGluZyIsImNhbmNlbFRva2VuIiwiQ2FuY2VsVG9rZW4iLCJ0cmFuc2Zvcm1SZXF1ZXN0Iiwic3RyIiwicmVzcG9uc2UiLCJlcnJvclRleHQiLCJzdGF0dXNUZXh0IiwibmVlZF9kZWNyeXB0IiwiY2xlYXJQZW5kaW5nIiwiY2xlYXIiLCJzdGF0aWNEYXRhIiwiY29sb3JMaXN0IiwiY29va2llIiwidG9rZW5LZXkiLCJzYXZlIiwicmVtb3ZlIiwibG9hZCIsInN0YXRpY0hvc3QiLCJTVEFUSUNfSE9TVCIsImNyZWF0ZUFzeW5jVGh1bmsiLCJ3YWl0VGltZSIsInRpbWUiLCJnZXRNYXhUd29aZXJvIiwiZCIsInJvdW5kIiwibWluIiwiZGVmYXVsdFZhbHVlIiwiZGF0ZSIsIm5vd0RhdGUiLCJ5ZXNEYXRlIiwidG9tb3Jyb3dEYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJBZGRaIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiY2hlY2tQaG9uZSIsInBob25lIiwibXlyZWciLCJjaGVja0NvZGUiLCJjb2RlIiwiY2hlY2tQd2QiLCJwd2QiLCJvUCIsIndpZHRoIiwiaGVpZ2h0IiwiaSIsImNsaWVudFdpZHRoMSIsImNsaWVudFdpZHRoMiIsInNjcm9sbGJhcldpZHRoIiwib3ZlcmZsb3dZIiwiY2hhckNvZGVBdCJdLCJzb3VyY2VSb290IjoiIn0=