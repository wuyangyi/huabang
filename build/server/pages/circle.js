(() => {
var exports = {};
exports.id = "pages/circle";
exports.ids = ["pages/circle"];
exports.modules = {

/***/ "./components/circle/list_content/CircleContent.tsx":
/*!**********************************************************!*\
  !*** ./components/circle/list_content/CircleContent.tsx ***!
  \**********************************************************/
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
/* harmony import */ var _store_slices_loginSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/slices/loginSlice */ "./store/slices/loginSlice.ts");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/store */ "./store/store.ts");
/* harmony import */ var _widget_LeftMenuWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../widget/LeftMenuWidget */ "./components/widget/LeftMenuWidget.tsx");
/* harmony import */ var _widget_LeftUserCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../widget/LeftUserCard */ "./components/widget/LeftUserCard.tsx");
/* harmony import */ var _all_circle_AllCircle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./all_circle/AllCircle */ "./components/circle/list_content/all_circle/AllCircle.tsx");
/* harmony import */ var _banner_CirlceBanner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./banner/CirlceBanner */ "./components/circle/list_content/banner/CirlceBanner.tsx");
/* harmony import */ var _circle_content_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./circle_content.module.scss */ "./components/circle/list_content/circle_content.module.scss");
/* harmony import */ var _circle_content_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _my_circle_MyCircle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./my_circle/MyCircle */ "./components/circle/list_content/my_circle/MyCircle.tsx");
/* harmony import */ var _rank_circle_RankCircle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rank_circle/RankCircle */ "./components/circle/list_content/rank_circle/RankCircle.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\components\\circle\\list_content\\CircleContent.tsx";














const CircleContent = () => {
  const {
    user,
    isLogin
  } = (0,_store_store__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)(state => state.user);
  const banners = [{
    image: "http://wyyhubang.oss-cn-chengdu.aliyuncs.com/default/default_banner1.png",
    link: "/"
  }, {
    image: "http://wyyhubang.oss-cn-chengdu.aliyuncs.com/default/default_banner2.png",
    link: "/"
  }, {
    image: "http://wyyhubang.oss-cn-chengdu.aliyuncs.com/default/default_banner3.png",
    link: "/"
  }];
  const menuList = [{
    "id": 0,
    "title": "全部圈子",
    "image": "/static/images/ico_circle_all.png",
    "num": 0
  }, {
    "id": 1,
    "title": "我的帮圈",
    "image": "/static/images/ico_circle_my.png",
    "num": 0
  }, {
    "id": 2,
    "title": "排行榜",
    "image": "/static/images/ico_circle_rank.png",
    "num": 0
  }];
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const {
    0: selectIndex,
    1: setSelectIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: topSelectIndex,
    1: setTopSelectIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const route = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();

  const menuItemChick = index => {
    if (selectIndex !== index) {
      setSelectIndex(index);
    } // route.push({
    //     pathname: "/circle",
    //     query: {
    //         index: index
    //     }
    // })

  };

  const topItemClick = index => {
    setTopSelectIndex(index);
  };

  const createCircle = () => {
    if (isLogin) {
      route.push("/circle/create");
    } else {
      dispatch((0,_store_slices_loginSlice__WEBPACK_IMPORTED_MODULE_3__.showLogin)());
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
    className: (_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_12___default().contentBody),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
      className: (_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_12___default().left),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_widget_LeftUserCard__WEBPACK_IMPORTED_MODULE_6__.default, {
        descMaxLine: 2,
        className: (_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_12___default().userCard)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
        className: (_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_12___default().leftMenu),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_widget_LeftMenuWidget__WEBPACK_IMPORTED_MODULE_5__.default, {
          menuList: menuList,
          selectIndex: selectIndex,
          menuItemClick: menuItemChick
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
      className: (_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_12___default().center),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
        className: (_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_12___default().banner),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_banner_CirlceBanner__WEBPACK_IMPORTED_MODULE_8__.default, {
          children: banners.map((item, index) => {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("a", {
              href: item.link,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("img", {
                src: item.image,
                width: "100%",
                height: "100%",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 33
              }, undefined)
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 36
            }, undefined);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
        className: (_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_12___default().content),
        children: selectIndex == 1 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_my_circle_MyCircle__WEBPACK_IMPORTED_MODULE_9__.default, {
          id: user === null || user === void 0 ? void 0 : user.id,
          showTitle: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 40
        }, undefined) : selectIndex == 2 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_rank_circle_RankCircle__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 44
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_all_circle_AllCircle__WEBPACK_IMPORTED_MODULE_7__.default, {
          selectIndex: topSelectIndex,
          itemClick: topItemClick
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 29
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
      className: (_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_12___default().right),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
        className: (_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_12___default().joinCircle),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("img", {
          src: "/static/images/ico_join_circle_bg.png",
          width: "100%",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("span", {
          className: (_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_12___default().joinHint1),
          children: ["\u66F4\u591A", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("span", {
            className: (_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_12___default().hot),
            children: "\u70ED\u95E8"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 54
          }, undefined), "\u5E2E\u5708\u7B49\u4F60\u52A0\u5165\uFF01"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("span", {
          className: (_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_12___default().joinHint),
          children: "\u5FEB\u6765\u521B\u5EFA\u81EA\u5DF1\u7684\u5708\u5B50\u5427~"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
          className: (_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_12___default().createCircle),
          onClick: createCircle,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("span", {
            className: (_circle_content_module_scss__WEBPACK_IMPORTED_MODULE_12___default().createText),
            children: "\u521B\u5EFA\u5708\u5B50"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CircleContent);

/***/ }),

/***/ "./components/circle/list_content/all_circle/AllCircle.tsx":
/*!*****************************************************************!*\
  !*** ./components/circle/list_content/all_circle/AllCircle.tsx ***!
  \*****************************************************************/
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
/* harmony import */ var _item_circle_BigCircleItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../item/circle/BigCircleItem */ "./components/item/circle/BigCircleItem.tsx");
/* harmony import */ var _widget_EmptyView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../widget/EmptyView */ "./components/widget/EmptyView.tsx");
/* harmony import */ var _widget_MyPagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../widget/MyPagination */ "./components/widget/MyPagination.tsx");
/* harmony import */ var _all_circle_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./all_circle.module.scss */ "./components/circle/list_content/all_circle/all_circle.module.scss");
/* harmony import */ var _all_circle_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_all_circle_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\components\\circle\\list_content\\all_circle\\AllCircle.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const AllCircle = ({
  selectIndex,
  itemClick
}) => {
  var _circleType$selectInd, _circleType$selectInd2;

  const {
    allCircleData
  } = (0,_store_store__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(state => state.circle);
  const dispatch = (0,_store_store__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();
  const {
    circleType
  } = (0,_store_store__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(state => state.common);
  const {
    0: currentPage,
    1: setCurrentPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const {
    0: tabKey,
    1: setTabKey
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((_circleType$selectInd = (_circleType$selectInd2 = circleType[selectIndex]) === null || _circleType$selectInd2 === void 0 ? void 0 : _circleType$selectInd2.id) !== null && _circleType$selectInd !== void 0 ? _circleType$selectInd : 0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // loadData(tabKey, currentPage, 20);
    let titleScroll = document.getElementById("titleScroll");

    if (titleScroll != null) {
      dealViewScroll(titleScroll);
    }
  }, []);

  const switchPage = index => {
    if (selectIndex != index) {
      setCurrentPage(1);
      setTabKey(circleType[index].id);
      loadData(circleType[index].id, 1, 20);
      itemClick && itemClick(index);
    }
  }; // 获取数据


  function loadData(key, page, pageSize) {
    dispatch((0,_store_slices_circleSlice__WEBPACK_IMPORTED_MODULE_1__.fetchAllCircleList)({
      type: key,
      page: page,
      limit: pageSize
    }));
  }

  const titleScroll = event => {
    dealViewScroll(event.target);
  };

  function dealViewScroll(target) {
    let leftElement = document.getElementById("left");
    let rightElement = document.getElementById("right");

    if (leftElement != null) {
      leftElement.style.visibility = target.scrollLeft <= 10 ? 'hidden' : 'visible';
    }

    if (rightElement != null) {
      let show = target.scrollLeft + target.clientWidth + 10 >= target.scrollWidth;
      rightElement.style.visibility = show ? 'hidden' : 'visible';
    }
  }

  function titleScrollClick(isLeft) {
    let titleScroll = document.getElementById("titleScroll");

    if (titleScroll == null) {
      return;
    }

    titleScroll.scrollBy({
      left: isLeft ? -300 : 300,
      behavior: 'smooth'
    });
  }

  const pageChange = (page, pageSize) => {
    setCurrentPage(page);
    loadData(tabKey, page, pageSize);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: (_all_circle_module_scss__WEBPACK_IMPORTED_MODULE_7___default().contentBody),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: (_all_circle_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        id: "titleScroll",
        onScroll: titleScroll,
        className: (_all_circle_module_scss__WEBPACK_IMPORTED_MODULE_7___default().contentHeader),
        children: circleType.map((item, index) => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            className: (_all_circle_module_scss__WEBPACK_IMPORTED_MODULE_7___default().titleItem),
            style: {
              borderBottomColor: selectIndex === index ? "#3388FF" : 'transparent',
              fontWeight: selectIndex === index ? "bold" : 'normal',
              color: selectIndex === index ? "#3388FF" : "#637080"
            },
            onClick: () => {
              switchPage(index);
            },
            children: item.type
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 32
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        id: "left",
        className: [(_all_circle_module_scss__WEBPACK_IMPORTED_MODULE_7___default().scroolIcon), (_all_circle_module_scss__WEBPACK_IMPORTED_MODULE_7___default().left)].join(" "),
        onClick: () => {
          titleScrollClick(true);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        id: "right",
        className: [(_all_circle_module_scss__WEBPACK_IMPORTED_MODULE_7___default().scroolIcon), (_all_circle_module_scss__WEBPACK_IMPORTED_MODULE_7___default().right)].join(" "),
        onClick: () => {
          titleScrollClick(false);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: (_all_circle_module_scss__WEBPACK_IMPORTED_MODULE_7___default().all_content),
      children: [allCircleData.list.length > 0 ? allCircleData.list.map(item => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_item_circle_BigCircleItem__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread({}, item), item.id, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 32
        }, undefined);
      }) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_widget_EmptyView__WEBPACK_IMPORTED_MODULE_4__.default, {
        type: 0
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_all_circle_module_scss__WEBPACK_IMPORTED_MODULE_7___default().no_more),
        style: {
          display: allCircleData.list.length > 0 && allCircleData.list.length < 20 ? 'block' : 'none'
        },
        children: "\u6CA1\u6709\u66F4\u591A\u4E86~"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_widget_MyPagination__WEBPACK_IMPORTED_MODULE_5__.default, {
      total: allCircleData.total,
      pageSize: 20,
      showSizeChanger: false,
      current: currentPage,
      onChange: pageChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllCircle);

/***/ }),

/***/ "./components/circle/list_content/banner/CirlceBanner.tsx":
/*!****************************************************************!*\
  !*** ./components/circle/list_content/banner/CirlceBanner.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _circle_banner_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./circle_banner.module.scss */ "./components/circle/list_content/banner/circle_banner.module.scss");
/* harmony import */ var _circle_banner_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_circle_banner_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\components\\circle\\list_content\\banner\\CirlceBanner.tsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class CircleBanner extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {
      currentCarousel: 0,
      translateList: [],
      animationStep: 0
    });

    _defineProperty(this, "timerID", void 0);

    _defineProperty(this, "children", react__WEBPACK_IMPORTED_MODULE_0___default().Children.toArray(this.props.children));

    this.handleCarouselBodyMouseOver = this.handleCarouselBodyMouseOver.bind(this);
    this.handleCarouselBodyMouseOut = this.handleCarouselBodyMouseOut.bind(this);
    this.handleCarouselFooterMouseOver = this.handleCarouselFooterMouseOver.bind(this);
    this.renderIndicators = this.renderIndicators.bind(this);
    this.getIndicatorsActive = this.getIndicatorsActive.bind(this);
    this.handlerNext = this.handlerNext.bind(this);
    this.handlerTransitionEnd = this.handlerTransitionEnd.bind(this);
    this.handlerPre = this.handlerPre.bind(this);
  }

  componentWillUnmount() {
    this.stopCarousel();
  }

  componentDidMount() {
    this.setState({
      animationStep: this.props.animationStep
    });
    this.startCarousel();
  }
  /**
   * @description 开始轮播
   */


  startCarousel() {
    this.stopCarousel();
    this.timerID = setInterval(() => {
      this.handlerCarousel('right');
    }, this.props.step);
  }
  /**
   * @description 更改当前循环到的轮播下标
   * @param {String} type 运动的方向类型
   */


  handlerCarousel(type) {
    let direction = 1;

    if (type === 'left') {
      // 向做运动 下标减1
      direction = -1;
    }

    if (this.state.currentCarousel % (this.children.length + 1) !== this.children.length && this.state.currentCarousel >= 0) {
      // 下标不为-1 或者最后一项的情况下正常 递增或者递减
      this.setState({
        currentCarousel: (this.state.currentCarousel + direction) % (this.children.length + 1),
        animationStep: this.props.animationStep // 运动动画 设置值  因为 当坐标在边界的时候 会取消动画时间 所以在不为边界的时候 要恢复动画时间 不然切换无轮播动画

      });
    }
  }
  /**
   * @description 监听动画结束 在下标为边界时 并且切换的动画结束 取消动画 并调整轮播位置
   */


  handlerTransitionEnd() {
    // 当在最末端的时候 取消动画 并将坐标重制为0
    if (this.state.currentCarousel % (this.children.length + 1) === this.children.length) {
      this.setState(pre => {
        return {
          animationStep: 0,
          currentCarousel: 0
        };
      });
    } // 当在最前端的时候 取消动画 并将坐标重制为最大
    else if (this.state.currentCarousel < 0) {
      this.setState(pre => {
        return {
          animationStep: 0,
          currentCarousel: this.children.length - 1
        };
      });
    }
  }
  /**
   * @description  停止轮播
   */


  stopCarousel() {
    clearInterval(this.timerID);
  }
  /**
   * @description 指示按钮的mouseover事件
   */


  handleCarouselFooterMouseOver(currentIndex) {
    this.setState({
      animationStep: this.props.animationStep,
      currentCarousel: currentIndex
    });
  }
  /**
   * @description 轮播的mouseover事件
   */


  handleCarouselBodyMouseOver() {
    this.stopCarousel();
  }
  /**
   * @description 轮播的mouseout事件
   */


  handleCarouselBodyMouseOut() {
    this.startCarousel();
  }
  /**
   * @description 轮播的mouseout事件
   */


  handlerNext() {
    this.handlerCarousel('right');
  }

  handlerPre() {
    this.handlerCarousel('left');
  }

  getIndicatorsActive(index) {
    // 边界判断 使在轮播在边界的时候 导航下面的小标 也能正常的添加active状态
    if (this.state.currentCarousel === index || this.state.currentCarousel === index + this.children.length || this.state.currentCarousel < 0 && index === this.children.length - 1) {
      return (_circle_banner_module_scss__WEBPACK_IMPORTED_MODULE_2___default().active);
    }

    return '';
  }
  /**
   * @description 导航的指示按钮
   */


  renderIndicators() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_circle_banner_module_scss__WEBPACK_IMPORTED_MODULE_2___default().carouselFooter),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
        className: (_circle_banner_module_scss__WEBPACK_IMPORTED_MODULE_2___default().indicatorsContainer),
        children: this.children.map((item, index) => {
          let active = this.getIndicatorsActive(index);
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            onMouseOver: () => this.handleCarouselFooterMouseOver(index),
            className: [(_circle_banner_module_scss__WEBPACK_IMPORTED_MODULE_2___default().indicatorsItem), active].join(' ')
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 32
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 13
    }, this);
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_circle_banner_module_scss__WEBPACK_IMPORTED_MODULE_2___default().carouselContainer),
      onMouseOver: this.handleCarouselBodyMouseOver,
      onMouseOut: this.handleCarouselBodyMouseOut,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_circle_banner_module_scss__WEBPACK_IMPORTED_MODULE_2___default().carouselBody),
        onTransitionEnd: this.handlerTransitionEnd,
        style: {
          transition: 'transform ' + this.state.animationStep + 's',
          width: (this.children.length + 2) * 100 + "%",
          transform: 'translateX(' + -100 / (this.children.length + 2) * (this.state.currentCarousel + 1) + '%)'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_circle_banner_module_scss__WEBPACK_IMPORTED_MODULE_2___default().carouselItem),
          style: {
            width: 100 / (this.children.length + 2) + '%'
          },
          children: this.children[this.children.length - 1]
        }, 'strat', false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 21
        }, this), this.children.map((item, index) => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: (_circle_banner_module_scss__WEBPACK_IMPORTED_MODULE_2___default().carouselItem),
            style: {
              width: 100 / (this.children.length + 2) + '%'
            },
            children: item
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 32
          }, this);
        }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_circle_banner_module_scss__WEBPACK_IMPORTED_MODULE_2___default().carouselItem),
          style: {
            width: 100 / (this.children.length + 2) + '%'
          },
          children: this.children[0]
        }, 'end', false, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 17
      }, this), this.renderIndicators(), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_circle_banner_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btnContainer),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: [(_circle_banner_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btnDirection), (_circle_banner_module_scss__WEBPACK_IMPORTED_MODULE_2___default().pre)].join(" "),
          onClick: this.handlerPre
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: [(_circle_banner_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btnDirection), (_circle_banner_module_scss__WEBPACK_IMPORTED_MODULE_2___default().next)].join(" "),
          onClick: this.handlerNext
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 13
    }, this);
  }

}

_defineProperty(CircleBanner, "defaultProps", {
  step: 5000,
  animationStep: 1
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CircleBanner);

/***/ }),

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

/***/ "./components/circle/list_content/rank_circle/RankCircle.tsx":
/*!*******************************************************************!*\
  !*** ./components/circle/list_content/rank_circle/RankCircle.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\components\\circle\\list_content\\rank_circle\\RankCircle.tsx";


const RankCircle = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RankCircle);

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

/***/ "./components/widget/LeftMenuWidget.tsx":
/*!**********************************************!*\
  !*** ./components/widget/LeftMenuWidget.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_components_widget_left_menu_widget_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/components/widget/left_menu_widget.module.scss */ "./styles/components/widget/left_menu_widget.module.scss");
/* harmony import */ var _styles_components_widget_left_menu_widget_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_widget_left_menu_widget_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\components\\widget\\LeftMenuWidget.tsx";



const LeftMenuWidget = ({
  id,
  menuList = [],
  selectIndex = 0,
  menuItemClick
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    id: id,
    className: (_styles_components_widget_left_menu_widget_module_scss__WEBPACK_IMPORTED_MODULE_1___default().contentLeftP),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_components_widget_left_menu_widget_module_scss__WEBPACK_IMPORTED_MODULE_1___default().leftMenuListCheck),
      style: {
        top: 5 + selectIndex * 40 + "px"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: (_styles_components_widget_left_menu_widget_module_scss__WEBPACK_IMPORTED_MODULE_1___default().leftMenuList),
      children: menuList.map((item, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          onClick: () => {
            menuItemClick && menuItemClick(index);
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_styles_components_widget_left_menu_widget_module_scss__WEBPACK_IMPORTED_MODULE_1___default().menuItem),
            style: {
              backgroundImage: 'url(' + item.image + ')'
            },
            children: item.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_styles_components_widget_left_menu_widget_module_scss__WEBPACK_IMPORTED_MODULE_1___default().message),
            style: {
              visibility: item.num <= 0 ? "hidden" : "visible"
            },
            children: item.num
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, undefined)]
        }, item.id, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 28
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeftMenuWidget);

/***/ }),

/***/ "./components/widget/LeftUserCard.tsx":
/*!********************************************!*\
  !*** ./components/widget/LeftUserCard.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_components_widget_left_user_card_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/components/widget/left_user_card.module.scss */ "./styles/components/widget/left_user_card.module.scss");
/* harmony import */ var _styles_components_widget_left_user_card_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_widget_left_user_card_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ "./store/store.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_slices_loginSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/slices/loginSlice */ "./store/slices/loginSlice.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\components\\widget\\LeftUserCard.tsx";






const LeftUserCard = ({
  descMaxLine = 4,
  className
}) => {
  const dispatch = (0,_store_store__WEBPACK_IMPORTED_MODULE_0__.useAppDispatch)();
  const {
    isLogin,
    user
  } = (0,_store_store__WEBPACK_IMPORTED_MODULE_0__.useAppSelector)(state => state.user);
  const {
    0: isSign,
    1: setSign
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const doSign = () => {
    setSign(!isSign);
  };

  const doLogin = () => {
    dispatch((0,_store_slices_loginSlice__WEBPACK_IMPORTED_MODULE_2__.showOrHideLogin)(true));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: [(_styles_components_widget_left_user_card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().menuLeft), className].join(" "),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_styles_components_widget_left_user_card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().signUser),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
        className: (_styles_components_widget_left_user_card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().userHeader),
        src: user !== null && user !== void 0 && user.avatar ? user === null || user === void 0 ? void 0 : user.avatar : "/static/images/default_user.png",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
        children: isLogin && user !== null && user !== void 0 && user.nickname ? user === null || user === void 0 ? void 0 : user.nickname : '游客身份'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
      className: (_styles_components_widget_left_user_card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().userDesc),
      style: {
        WebkitLineClamp: descMaxLine,
        maxLines: descMaxLine
      },
      children: isLogin ? user === null || user === void 0 ? void 0 : user.description : ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, undefined), isLogin ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
      className: (_styles_components_widget_left_user_card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().signBtn),
      style: {
        backgroundColor: isSign ? "#F1F2F3" : "#d9e8fc",
        color: isSign ? "#BABDC3" : "#3388FF"
      },
      onClick: doSign,
      children: isSign ? '已签到' : '签到'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
      className: (_styles_components_widget_left_user_card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loginBtn),
      onClick: doLogin,
      children: "\u767B\u5F55"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeftUserCard);

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

/***/ "./pages/circle/index.tsx":
/*!********************************!*\
  !*** ./pages/circle/index.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layout_Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layout/Footer */ "./layout/Footer.tsx");
/* harmony import */ var _layout_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layout/Header */ "./layout/Header.tsx");
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/Layout */ "./layout/Layout.tsx");
/* harmony import */ var _components_circle_list_content_CircleContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/circle/list_content/CircleContent */ "./components/circle/list_content/CircleContent.tsx");
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/Home.module.scss */ "./styles/Home.module.scss");
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store_slices_commonSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/slices/commonSlice */ "./store/slices/commonSlice.ts");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/store */ "./store/store.ts");
/* harmony import */ var _store_slices_circleSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/slices/circleSlice */ "./store/slices/circleSlice.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\pages\\circle\\index.tsx";










const CirclePage = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_layout_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().body),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_layout_Header__WEBPACK_IMPORTED_MODULE_1__.default, {
      page: 3
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_circle_list_content_CircleContent__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_layout_Footer__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 12
  }, undefined);
};

CirclePage.getInitialProps = _store_store__WEBPACK_IMPORTED_MODULE_5__.default.getInitialPageProps(store => async ({
  req
}) => {
  var _store$getState$user$;

  await Promise.all([store.getState().common.circleType.length == 0 && store.dispatch((0,_store_slices_commonSlice__WEBPACK_IMPORTED_MODULE_4__.fetchCircleType)({})), store.dispatch((0,_store_slices_circleSlice__WEBPACK_IMPORTED_MODULE_6__.fetchAllCircleList)({
    type: 1,
    page: 1,
    limit: 20
  })), store.dispatch((0,_store_slices_circleSlice__WEBPACK_IMPORTED_MODULE_6__.fetchUserCircleList)({
    page: 1,
    limit: 20,
    id: (_store$getState$user$ = store.getState().user.user) === null || _store$getState$user$ === void 0 ? void 0 : _store$getState$user$.id
  }))]);
  return {};
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CirclePage);

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

/***/ "./components/circle/list_content/all_circle/all_circle.module.scss":
/*!**************************************************************************!*\
  !*** ./components/circle/list_content/all_circle/all_circle.module.scss ***!
  \**************************************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"contentBody": "all_circle_contentBody__CNFnH",
	"header": "all_circle_header__2zKt6",
	"contentHeader": "all_circle_contentHeader__1EEgE",
	"titleItem": "all_circle_titleItem__2ZGFI",
	"scroolIcon": "all_circle_scroolIcon__2pbiG",
	"left": "all_circle_left__kTXQv",
	"right": "all_circle_right__3qJWk",
	"all_content": "all_circle_all_content__38Ag-",
	"no_more": "all_circle_no_more__ZAtLl"
};


/***/ }),

/***/ "./components/circle/list_content/banner/circle_banner.module.scss":
/*!*************************************************************************!*\
  !*** ./components/circle/list_content/banner/circle_banner.module.scss ***!
  \*************************************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"carouselContainer": "circle_banner_carouselContainer__1VmWJ",
	"carouselBody": "circle_banner_carouselBody__2xMyN",
	"carouselItem": "circle_banner_carouselItem__1kG0j",
	"carouselFooter": "circle_banner_carouselFooter__3ILW_",
	"indicatorsContainer": "circle_banner_indicatorsContainer__J3ErV",
	"indicatorsItem": "circle_banner_indicatorsItem__2nvLF",
	"active": "circle_banner_active__1L0xG",
	"btnContainer": "circle_banner_btnContainer___94n_",
	"btnDirection": "circle_banner_btnDirection__3xMOn",
	"pre": "circle_banner_pre__2YTT3",
	"next": "circle_banner_next__1wAyu"
};


/***/ }),

/***/ "./components/circle/list_content/circle_content.module.scss":
/*!*******************************************************************!*\
  !*** ./components/circle/list_content/circle_content.module.scss ***!
  \*******************************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"contentBody": "circle_content_contentBody__2G7Tr",
	"left": "circle_content_left__3VSdx",
	"userCard": "circle_content_userCard__1qeoP",
	"leftMenu": "circle_content_leftMenu__2AQgj",
	"center": "circle_content_center__1sRQ1",
	"banner": "circle_content_banner__2tDf4",
	"content": "circle_content_content__3mXl9",
	"right": "circle_content_right__2UfpW",
	"joinCircle": "circle_content_joinCircle__36INV",
	"joinHint1": "circle_content_joinHint1__35KWw",
	"hot": "circle_content_hot__1KZBt",
	"joinHint": "circle_content_joinHint__3frNC",
	"createCircle": "circle_content_createCircle__pLRzE",
	"createText": "circle_content_createText__1MW5M"
};


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

/***/ "./styles/components/widget/left_menu_widget.module.scss":
/*!***************************************************************!*\
  !*** ./styles/components/widget/left_menu_widget.module.scss ***!
  \***************************************************************/
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

/***/ "./styles/components/widget/left_user_card.module.scss":
/*!*************************************************************!*\
  !*** ./styles/components/widget/left_user_card.module.scss ***!
  \*************************************************************/
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/circle/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvY2lyY2xlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTVksYUFBdUIsR0FBRyxNQUFNO0FBQ2xDLFFBQU07QUFBRUMsSUFBQUEsSUFBRjtBQUFRQyxJQUFBQTtBQUFSLE1BQW9CViw0REFBYyxDQUFFVyxLQUFELElBQVdBLEtBQUssQ0FBQ0YsSUFBbEIsQ0FBeEM7QUFFQSxRQUFNRyxPQUEyQixHQUFHLENBQ2hDO0FBQ0lDLElBQUFBLEtBQUssRUFBRSwwRUFEWDtBQUVJQyxJQUFBQSxJQUFJLEVBQUU7QUFGVixHQURnQyxFQUtoQztBQUNJRCxJQUFBQSxLQUFLLEVBQUUsMEVBRFg7QUFFSUMsSUFBQUEsSUFBSSxFQUFFO0FBRlYsR0FMZ0MsRUFTaEM7QUFDSUQsSUFBQUEsS0FBSyxFQUFFLDBFQURYO0FBRUlDLElBQUFBLElBQUksRUFBRTtBQUZWLEdBVGdDLENBQXBDO0FBZUEsUUFBTUMsUUFBd0IsR0FBRyxDQUM3QjtBQUNJLFVBQU0sQ0FEVjtBQUVJLGFBQVMsTUFGYjtBQUdJLGFBQVMsbUNBSGI7QUFJSSxXQUFPO0FBSlgsR0FENkIsRUFPN0I7QUFDSSxVQUFNLENBRFY7QUFFSSxhQUFTLE1BRmI7QUFHSSxhQUFTLGtDQUhiO0FBSUksV0FBTztBQUpYLEdBUDZCLEVBYTdCO0FBQ0ksVUFBTSxDQURWO0FBRUksYUFBUyxLQUZiO0FBR0ksYUFBUyxvQ0FIYjtBQUlJLFdBQU87QUFKWCxHQWI2QixDQUFqQztBQXFCQSxRQUFNQyxRQUFRLEdBQUdsQix3REFBVyxFQUE1QjtBQUNBLFFBQU07QUFBQSxPQUFDbUIsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NyQiwrQ0FBUSxDQUFDLENBQUQsQ0FBOUM7QUFDQSxRQUFNO0FBQUEsT0FBQ3NCLGNBQUQ7QUFBQSxPQUFpQkM7QUFBakIsTUFBc0N2QiwrQ0FBUSxDQUFDLENBQUQsQ0FBcEQ7QUFFQSxRQUFNd0IsS0FBSyxHQUFHekIsc0RBQVMsRUFBdkI7O0FBQ0EsUUFBTTBCLGFBQWEsR0FBSUMsS0FBRCxJQUFXO0FBQzdCLFFBQUlOLFdBQVcsS0FBS00sS0FBcEIsRUFBMkI7QUFDdkJMLE1BQUFBLGNBQWMsQ0FBQ0ssS0FBRCxDQUFkO0FBQ0gsS0FINEIsQ0FJN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVILEdBWEQ7O0FBYUEsUUFBTUMsWUFBWSxHQUFJRCxLQUFELElBQVc7QUFDNUJILElBQUFBLGlCQUFpQixDQUFDRyxLQUFELENBQWpCO0FBQ0gsR0FGRDs7QUFJQSxRQUFNRSxZQUFZLEdBQUcsTUFBTTtBQUN2QixRQUFJZixPQUFKLEVBQWE7QUFDVFcsTUFBQUEsS0FBSyxDQUFDSyxJQUFOLENBQVcsZ0JBQVg7QUFDSCxLQUZELE1BRU87QUFDSFYsTUFBQUEsUUFBUSxDQUFDakIsbUVBQVMsRUFBVixDQUFSO0FBQ0g7QUFDSixHQU5EOztBQVNBLHNCQUFPO0FBQUssYUFBUyxFQUFFTSxpRkFBaEI7QUFBQSw0QkFDSDtBQUFLLGVBQVMsRUFBRUEsMEVBQWhCO0FBQUEsOEJBQ0ksK0RBQUMseURBQUQ7QUFBYyxtQkFBVyxFQUFFLENBQTNCO0FBQThCLGlCQUFTLEVBQUVBLDhFQUFld0I7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUssaUJBQVMsRUFBRXhCLDhFQUFoQjtBQUFBLCtCQUNJLCtEQUFDLDJEQUFEO0FBQWdCLGtCQUFRLEVBQUVVLFFBQTFCO0FBQW9DLHFCQUFXLEVBQUVFLFdBQWpEO0FBQThELHVCQUFhLEVBQUVLO0FBQTdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERyxlQU9IO0FBQUssZUFBUyxFQUFFakIsNEVBQWhCO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFFQSw0RUFBaEI7QUFBQSwrQkFDSSwrREFBQyx5REFBRDtBQUFBLG9CQUVRTyxPQUFPLENBQUNxQixHQUFSLENBQVksQ0FBQ0MsSUFBRCxFQUFPWCxLQUFQLEtBQWlCO0FBQ3pCLGdDQUFPO0FBQWUsa0JBQUksRUFBRVcsSUFBSSxDQUFDcEIsSUFBMUI7QUFBQSxxQ0FDSDtBQUFLLG1CQUFHLEVBQUVvQixJQUFJLENBQUNyQixLQUFmO0FBQXNCLHFCQUFLLEVBQUMsTUFBNUI7QUFBbUMsc0JBQU0sRUFBQyxNQUExQztBQUFpRCxtQkFBRyxFQUFDO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERyxlQUFRVSxLQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQVA7QUFHSCxXQUpEO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFZSTtBQUFLLGlCQUFTLEVBQUVsQiw2RUFBaEI7QUFBQSxrQkFFUVksV0FBVyxJQUFJLENBQWYsZ0JBQW1CLCtEQUFDLHdEQUFEO0FBQVUsWUFBRSxFQUFFUixJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRTJCLEVBQXBCO0FBQXdCLG1CQUFTLEVBQUU7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBbkIsR0FDSW5CLFdBQVcsSUFBSSxDQUFmLGdCQUFtQiwrREFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFuQixnQkFDSSwrREFBQywwREFBRDtBQUFXLHFCQUFXLEVBQUVFLGNBQXhCO0FBQXdDLG1CQUFTLEVBQUVLO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEcsZUEyQkg7QUFBSyxlQUFTLEVBQUVuQiwyRUFBaEI7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUVBLGdGQUFoQjtBQUFBLGdDQUNJO0FBQUssYUFBRyxFQUFDLHVDQUFUO0FBQWlELGVBQUssRUFBQyxNQUF2RDtBQUE4RCxhQUFHLEVBQUM7QUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQU0sbUJBQVMsRUFBRUEsK0VBQWpCO0FBQUEsa0RBQXFDO0FBQU0scUJBQVMsRUFBRUEseUVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkosZUFHSTtBQUFNLG1CQUFTLEVBQUVBLDhFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFISixlQUlJO0FBQUssbUJBQVMsRUFBRUEsa0ZBQWhCO0FBQXFDLGlCQUFPLEVBQUVvQixZQUE5QztBQUFBLGlDQUNJO0FBQU0scUJBQVMsRUFBRXBCLGdGQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEzQkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFzQ0gsQ0E1R0Q7O0FBOEdBLGlFQUFlRyxhQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxNQUFNTCxTQUFnRixHQUFHLENBQUM7QUFBRWMsRUFBQUEsV0FBRjtBQUFlZ0MsRUFBQUE7QUFBZixDQUFELEtBQWdDO0FBQUE7O0FBQ3JILFFBQU07QUFBRUMsSUFBQUE7QUFBRixNQUFvQmxELDREQUFjLENBQUVXLEtBQUQsSUFBV0EsS0FBSyxDQUFDd0MsTUFBbEIsQ0FBeEM7QUFFQSxRQUFNbkMsUUFBUSxHQUFHNkIsNERBQWMsRUFBL0I7QUFFQSxRQUFNO0FBQUVPLElBQUFBO0FBQUYsTUFBaUJwRCw0REFBYyxDQUFFVyxLQUFELElBQVdBLEtBQUssQ0FBQzBDLE1BQWxCLENBQXJDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDMUQsK0NBQVEsQ0FBQyxDQUFELENBQTlDO0FBQ0EsUUFBTTtBQUFBLE9BQUMyRCxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQjVELCtDQUFRLG9EQUFDdUQsVUFBVSxDQUFDbkMsV0FBRCxDQUFYLDJEQUFDLHVCQUF5Qm1CLEVBQTFCLHlFQUFnQyxDQUFoQyxDQUFwQztBQUlBTyxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDWjtBQUNBLFFBQUllLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQWxCOztBQUNBLFFBQUlGLFdBQVcsSUFBSSxJQUFuQixFQUF5QjtBQUNyQkcsTUFBQUEsY0FBYyxDQUFDSCxXQUFELENBQWQ7QUFDSDtBQUNKLEdBTlEsRUFNTixFQU5NLENBQVQ7O0FBUUEsUUFBTUksVUFBVSxHQUFJdkMsS0FBRCxJQUFtQjtBQUNsQyxRQUFJTixXQUFXLElBQUlNLEtBQW5CLEVBQTBCO0FBQ3RCZ0MsTUFBQUEsY0FBYyxDQUFDLENBQUQsQ0FBZDtBQUNBRSxNQUFBQSxTQUFTLENBQUNMLFVBQVUsQ0FBQzdCLEtBQUQsQ0FBVixDQUFrQmEsRUFBbkIsQ0FBVDtBQUNBMkIsTUFBQUEsUUFBUSxDQUFDWCxVQUFVLENBQUM3QixLQUFELENBQVYsQ0FBa0JhLEVBQW5CLEVBQXVCLENBQXZCLEVBQTBCLEVBQTFCLENBQVI7QUFDQWEsTUFBQUEsU0FBUyxJQUFJQSxTQUFTLENBQUMxQixLQUFELENBQXRCO0FBQ0g7QUFDSixHQVBELENBbkJxSCxDQTRCckg7OztBQUNBLFdBQVN3QyxRQUFULENBQWtCQyxHQUFsQixFQUErQkMsSUFBL0IsRUFBNkNDLFFBQTdDLEVBQStEO0FBQzNEbEQsSUFBQUEsUUFBUSxDQUNKNEIsNkVBQWtCLENBQUM7QUFDZnVCLE1BQUFBLElBQUksRUFBRUgsR0FEUztBQUVmQyxNQUFBQSxJQUFJLEVBQUVBLElBRlM7QUFHZkcsTUFBQUEsS0FBSyxFQUFFRjtBQUhRLEtBQUQsQ0FEZCxDQUFSO0FBT0g7O0FBRUQsUUFBTVIsV0FBVyxHQUFJVyxLQUFELElBQVc7QUFDM0JSLElBQUFBLGNBQWMsQ0FBQ1EsS0FBSyxDQUFDQyxNQUFQLENBQWQ7QUFDSCxHQUZEOztBQUlBLFdBQVNULGNBQVQsQ0FBd0JTLE1BQXhCLEVBQWdDO0FBQzVCLFFBQUlDLFdBQVcsR0FBR1osUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQWxCO0FBQ0EsUUFBSVksWUFBWSxHQUFHYixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBbkI7O0FBQ0EsUUFBSVcsV0FBVyxJQUFJLElBQW5CLEVBQXlCO0FBQ3JCQSxNQUFBQSxXQUFXLENBQUNFLEtBQVosQ0FBa0JDLFVBQWxCLEdBQStCSixNQUFNLENBQUNLLFVBQVAsSUFBcUIsRUFBckIsR0FBMEIsUUFBMUIsR0FBcUMsU0FBcEU7QUFDSDs7QUFDRCxRQUFJSCxZQUFZLElBQUksSUFBcEIsRUFBMEI7QUFDdEIsVUFBSUksSUFBSSxHQUFHTixNQUFNLENBQUNLLFVBQVAsR0FBb0JMLE1BQU0sQ0FBQ08sV0FBM0IsR0FBeUMsRUFBekMsSUFBK0NQLE1BQU0sQ0FBQ1EsV0FBakU7QUFDQU4sTUFBQUEsWUFBWSxDQUFDQyxLQUFiLENBQW1CQyxVQUFuQixHQUFnQ0UsSUFBSSxHQUFHLFFBQUgsR0FBYyxTQUFsRDtBQUNIO0FBQ0o7O0FBRUQsV0FBU0csZ0JBQVQsQ0FBMEJDLE1BQTFCLEVBQTJDO0FBQ3ZDLFFBQUl0QixXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFsQjs7QUFDQSxRQUFJRixXQUFXLElBQUksSUFBbkIsRUFBeUI7QUFDckI7QUFDSDs7QUFDREEsSUFBQUEsV0FBVyxDQUFDdUIsUUFBWixDQUFxQjtBQUNqQnJELE1BQUFBLElBQUksRUFBRW9ELE1BQU0sR0FBRyxDQUFDLEdBQUosR0FBVSxHQURMO0FBRWpCRSxNQUFBQSxRQUFRLEVBQUU7QUFGTyxLQUFyQjtBQUlIOztBQUVELFFBQU1DLFVBQVUsR0FBRyxDQUFDbEIsSUFBRCxFQUFPQyxRQUFQLEtBQW9CO0FBQ25DWCxJQUFBQSxjQUFjLENBQUNVLElBQUQsQ0FBZDtBQUNBRixJQUFBQSxRQUFRLENBQUNQLE1BQUQsRUFBU1MsSUFBVCxFQUFlQyxRQUFmLENBQVI7QUFDSCxHQUhEOztBQUtBLHNCQUFPO0FBQUssYUFBUyxFQUFFN0QsNEVBQWhCO0FBQUEsNEJBQ0g7QUFBSyxlQUFTLEVBQUVBLHVFQUFoQjtBQUFBLDhCQUNJO0FBQUssVUFBRSxFQUFDLGFBQVI7QUFBc0IsZ0JBQVEsRUFBRXFELFdBQWhDO0FBQTZDLGlCQUFTLEVBQUVyRCw4RUFBeEQ7QUFBQSxrQkFFUStDLFVBQVUsQ0FBQ25CLEdBQVgsQ0FBZSxDQUFDQyxJQUFELEVBQU9YLEtBQVAsS0FBaUI7QUFDNUIsOEJBQU87QUFDSCxxQkFBUyxFQUFFbEIsMEVBRFI7QUFFSCxpQkFBSyxFQUFFO0FBQ0hrRixjQUFBQSxpQkFBaUIsRUFBRXRFLFdBQVcsS0FBS00sS0FBaEIsR0FBd0IsU0FBeEIsR0FBb0MsYUFEcEQ7QUFFSGlFLGNBQUFBLFVBQVUsRUFBRXZFLFdBQVcsS0FBS00sS0FBaEIsR0FBd0IsTUFBeEIsR0FBaUMsUUFGMUM7QUFHSGtFLGNBQUFBLEtBQUssRUFBRXhFLFdBQVcsS0FBS00sS0FBaEIsR0FBd0IsU0FBeEIsR0FBb0M7QUFIeEMsYUFGSjtBQU9ILG1CQUFPLEVBQUUsTUFBTTtBQUFFdUMsY0FBQUEsVUFBVSxDQUFDdkMsS0FBRCxDQUFWO0FBQW1CLGFBUGpDO0FBQUEsc0JBT29DVyxJQUFJLENBQUNpQztBQVB6QyxhQUFXNUMsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFQO0FBUUgsU0FURDtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFlSTtBQUFLLFVBQUUsRUFBQyxNQUFSO0FBQWUsaUJBQVMsRUFBRSxDQUFDbEIsMkVBQUQsRUFBb0JBLHFFQUFwQixFQUFpQ3NGLElBQWpDLENBQXNDLEdBQXRDLENBQTFCO0FBQXNFLGVBQU8sRUFBRSxNQUFNO0FBQUVaLFVBQUFBLGdCQUFnQixDQUFDLElBQUQsQ0FBaEI7QUFBd0I7QUFBL0c7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFmSixlQWdCSTtBQUFLLFVBQUUsRUFBQyxPQUFSO0FBQWdCLGlCQUFTLEVBQUUsQ0FBQzFFLDJFQUFELEVBQW9CQSxzRUFBcEIsRUFBa0NzRixJQUFsQyxDQUF1QyxHQUF2QyxDQUEzQjtBQUF3RSxlQUFPLEVBQUUsTUFBTTtBQUFFWixVQUFBQSxnQkFBZ0IsQ0FBQyxLQUFELENBQWhCO0FBQXlCO0FBQWxIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERyxlQW9CSDtBQUFLLGVBQVMsRUFBRTFFLDRFQUFoQjtBQUFBLGlCQUVRNkMsYUFBYSxDQUFDMkMsSUFBZCxDQUFtQkMsTUFBbkIsR0FBNEIsQ0FBNUIsR0FDSTVDLGFBQWEsQ0FBQzJDLElBQWQsQ0FBbUI1RCxHQUFuQixDQUF1QkMsSUFBSSxJQUFJO0FBQzNCLDRCQUFPLDhEQUFDLCtEQUFELG9CQUFpQ0EsSUFBakMsR0FBb0JBLElBQUksQ0FBQ0UsRUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBUDtBQUNILE9BRkQsQ0FESixnQkFJSSw4REFBQyxzREFBRDtBQUFXLFlBQUksRUFBRTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5aLGVBUUk7QUFBSyxpQkFBUyxFQUFFL0Isd0VBQWhCO0FBQWdDLGFBQUssRUFBRTtBQUFFMkYsVUFBQUEsT0FBTyxFQUFFOUMsYUFBYSxDQUFDMkMsSUFBZCxDQUFtQkMsTUFBbkIsR0FBNEIsQ0FBNUIsSUFBaUM1QyxhQUFhLENBQUMyQyxJQUFkLENBQW1CQyxNQUFuQixHQUE0QixFQUE3RCxHQUFrRSxPQUFsRSxHQUE0RTtBQUF2RixTQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcEJHLGVBOEJILDhEQUFDLHlEQUFEO0FBQWMsV0FBSyxFQUFFNUMsYUFBYSxDQUFDK0MsS0FBbkM7QUFBMEMsY0FBUSxFQUFFLEVBQXBEO0FBQXdELHFCQUFlLEVBQUUsS0FBekU7QUFBZ0YsYUFBTyxFQUFFM0MsV0FBekY7QUFBc0csY0FBUSxFQUFFNkI7QUFBaEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE5Qkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFnQ0gsQ0F2R0Q7O0FBeUdBLGlFQUFlaEYsU0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xIQTtBQUNBO0FBQ0E7OztBQVlBLE1BQU1DLFlBQU4sU0FBMkIrRiw0Q0FBM0IsQ0FBb0Q7QUFlaERDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2YsVUFBTUEsS0FBTjs7QUFEZSxtQ0FUWDtBQUNKQyxNQUFBQSxlQUFlLEVBQUUsQ0FEYjtBQUVKQyxNQUFBQSxhQUFhLEVBQUUsRUFGWDtBQUdKQyxNQUFBQSxhQUFhLEVBQUU7QUFIWCxLQVNXOztBQUFBOztBQUFBLHNDQUhSTiw2REFBQSxDQUF1QixLQUFLRyxLQUFMLENBQVdNLFFBQWxDLENBR1E7O0FBRWYsU0FBS0MsMkJBQUwsR0FBbUMsS0FBS0EsMkJBQUwsQ0FBaUNDLElBQWpDLENBQXNDLElBQXRDLENBQW5DO0FBQ0EsU0FBS0MsMEJBQUwsR0FBa0MsS0FBS0EsMEJBQUwsQ0FBZ0NELElBQWhDLENBQXFDLElBQXJDLENBQWxDO0FBQ0EsU0FBS0UsNkJBQUwsR0FBcUMsS0FBS0EsNkJBQUwsQ0FBbUNGLElBQW5DLENBQXdDLElBQXhDLENBQXJDO0FBQ0EsU0FBS0csZ0JBQUwsR0FBd0IsS0FBS0EsZ0JBQUwsQ0FBc0JILElBQXRCLENBQTJCLElBQTNCLENBQXhCO0FBQ0EsU0FBS0ksbUJBQUwsR0FBMkIsS0FBS0EsbUJBQUwsQ0FBeUJKLElBQXpCLENBQThCLElBQTlCLENBQTNCO0FBQ0EsU0FBS0ssV0FBTCxHQUFtQixLQUFLQSxXQUFMLENBQWlCTCxJQUFqQixDQUFzQixJQUF0QixDQUFuQjtBQUNBLFNBQUtNLG9CQUFMLEdBQTRCLEtBQUtBLG9CQUFMLENBQTBCTixJQUExQixDQUErQixJQUEvQixDQUE1QjtBQUNBLFNBQUtPLFVBQUwsR0FBa0IsS0FBS0EsVUFBTCxDQUFnQlAsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBbEI7QUFDSDs7QUFFRFEsRUFBQUEsb0JBQW9CLEdBQUc7QUFDbkIsU0FBS0MsWUFBTDtBQUNIOztBQUVEQyxFQUFBQSxpQkFBaUIsR0FBRztBQUNoQixTQUFLQyxRQUFMLENBQWM7QUFDVmhCLE1BQUFBLGFBQWEsRUFBRSxLQUFLSCxLQUFMLENBQVdHO0FBRGhCLEtBQWQ7QUFHQSxTQUFLaUIsYUFBTDtBQUVIO0FBRUQ7QUFDSjtBQUNBOzs7QUFDSUEsRUFBQUEsYUFBYSxHQUFHO0FBQ1osU0FBS0gsWUFBTDtBQUNBLFNBQUtJLE9BQUwsR0FBZUMsV0FBVyxDQUFDLE1BQU07QUFDN0IsV0FBS0MsZUFBTCxDQUFxQixPQUFyQjtBQUNILEtBRnlCLEVBR3RCLEtBQUt2QixLQUFMLENBQVd3QixJQUhXLENBQTFCO0FBS0g7QUFFRDtBQUNKO0FBQ0E7QUFDQTs7O0FBQ0lELEVBQUFBLGVBQWUsQ0FBQ3pELElBQUQsRUFBTztBQUNsQixRQUFJMkQsU0FBUyxHQUFHLENBQWhCOztBQUNBLFFBQUkzRCxJQUFJLEtBQUssTUFBYixFQUFxQjtBQUFHO0FBQ3BCMkQsTUFBQUEsU0FBUyxHQUFHLENBQUMsQ0FBYjtBQUNIOztBQUVELFFBQUksS0FBS25ILEtBQUwsQ0FBVzJGLGVBQVgsSUFBOEIsS0FBS0ssUUFBTCxDQUFjYixNQUFkLEdBQXVCLENBQXJELE1BQTRELEtBQUthLFFBQUwsQ0FBY2IsTUFBMUUsSUFBb0YsS0FBS25GLEtBQUwsQ0FBVzJGLGVBQVgsSUFBOEIsQ0FBdEgsRUFBeUg7QUFBRTtBQUN2SCxXQUFLa0IsUUFBTCxDQUFjO0FBQ1ZsQixRQUFBQSxlQUFlLEVBQUUsQ0FBQyxLQUFLM0YsS0FBTCxDQUFXMkYsZUFBWCxHQUE2QndCLFNBQTlCLEtBQTRDLEtBQUtuQixRQUFMLENBQWNiLE1BQWQsR0FBdUIsQ0FBbkUsQ0FEUDtBQUVWVSxRQUFBQSxhQUFhLEVBQUUsS0FBS0gsS0FBTCxDQUFXRyxhQUZoQixDQUUrQjs7QUFGL0IsT0FBZDtBQUlIO0FBRUo7QUFFRDtBQUNKO0FBQ0E7OztBQUNJVyxFQUFBQSxvQkFBb0IsR0FBRztBQUNuQjtBQUNBLFFBQUksS0FBS3hHLEtBQUwsQ0FBVzJGLGVBQVgsSUFBOEIsS0FBS0ssUUFBTCxDQUFjYixNQUFkLEdBQXVCLENBQXJELE1BQTRELEtBQUthLFFBQUwsQ0FBY2IsTUFBOUUsRUFBc0Y7QUFDbEYsV0FBSzBCLFFBQUwsQ0FBY08sR0FBRyxJQUFJO0FBQ2pCLGVBQU87QUFDSHZCLFVBQUFBLGFBQWEsRUFBRSxDQURaO0FBRUhGLFVBQUFBLGVBQWUsRUFBRTtBQUZkLFNBQVA7QUFJSCxPQUxEO0FBTUgsS0FQRCxDQVFBO0FBUkEsU0FTSyxJQUFJLEtBQUszRixLQUFMLENBQVcyRixlQUFYLEdBQTZCLENBQWpDLEVBQW9DO0FBQ3JDLFdBQUtrQixRQUFMLENBQWNPLEdBQUcsSUFBSTtBQUNqQixlQUFPO0FBQ0h2QixVQUFBQSxhQUFhLEVBQUUsQ0FEWjtBQUVIRixVQUFBQSxlQUFlLEVBQUUsS0FBS0ssUUFBTCxDQUFjYixNQUFkLEdBQXVCO0FBRnJDLFNBQVA7QUFJSCxPQUxEO0FBTUg7QUFDSjtBQUVEO0FBQ0o7QUFDQTs7O0FBQ0l3QixFQUFBQSxZQUFZLEdBQUc7QUFDWFUsSUFBQUEsYUFBYSxDQUFDLEtBQUtOLE9BQU4sQ0FBYjtBQUNIO0FBR0Q7QUFDSjtBQUNBOzs7QUFDSVgsRUFBQUEsNkJBQTZCLENBQUNrQixZQUFELEVBQWU7QUFDeEMsU0FBS1QsUUFBTCxDQUFjO0FBQ1ZoQixNQUFBQSxhQUFhLEVBQUUsS0FBS0gsS0FBTCxDQUFXRyxhQURoQjtBQUVWRixNQUFBQSxlQUFlLEVBQUUyQjtBQUZQLEtBQWQ7QUFJSDtBQUVEO0FBQ0o7QUFDQTs7O0FBQ0lyQixFQUFBQSwyQkFBMkIsR0FBRztBQUMxQixTQUFLVSxZQUFMO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7OztBQUNJUixFQUFBQSwwQkFBMEIsR0FBRztBQUN6QixTQUFLVyxhQUFMO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7OztBQUNJUCxFQUFBQSxXQUFXLEdBQUc7QUFDVixTQUFLVSxlQUFMLENBQXFCLE9BQXJCO0FBQ0g7O0FBRURSLEVBQUFBLFVBQVUsR0FBRztBQUNULFNBQUtRLGVBQUwsQ0FBcUIsTUFBckI7QUFDSDs7QUFFRFgsRUFBQUEsbUJBQW1CLENBQUMxRixLQUFELEVBQVE7QUFDdkI7QUFDQSxRQUFJLEtBQUtaLEtBQUwsQ0FBVzJGLGVBQVgsS0FBK0IvRSxLQUEvQixJQUF3QyxLQUFLWixLQUFMLENBQVcyRixlQUFYLEtBQStCL0UsS0FBSyxHQUFHLEtBQUtvRixRQUFMLENBQWNiLE1BQTdGLElBQXdHLEtBQUtuRixLQUFMLENBQVcyRixlQUFYLEdBQTZCLENBQTdCLElBQWtDL0UsS0FBSyxLQUFLLEtBQUtvRixRQUFMLENBQWNiLE1BQWQsR0FBdUIsQ0FBL0ssRUFBbUw7QUFDL0ssYUFBT3pGLDBFQUFQO0FBQ0g7O0FBQ0QsV0FBTyxFQUFQO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7OztBQUNJMkcsRUFBQUEsZ0JBQWdCLEdBQUc7QUFFZix3QkFDSTtBQUFLLGVBQVMsRUFBRTNHLGtGQUFoQjtBQUFBLDZCQUNJO0FBQUksaUJBQVMsRUFBRUEsdUZBQWY7QUFBQSxrQkFDSyxLQUFLc0csUUFBTCxDQUFjMUUsR0FBZCxDQUFrQixDQUFDQyxJQUFELEVBQU9YLEtBQVAsS0FBaUI7QUFDaEMsY0FBSTJHLE1BQU0sR0FBRyxLQUFLakIsbUJBQUwsQ0FBeUIxRixLQUF6QixDQUFiO0FBQ0EsOEJBQU87QUFBSSx1QkFBVyxFQUFFLE1BQU0sS0FBS3dGLDZCQUFMLENBQW1DeEYsS0FBbkMsQ0FBdkI7QUFBa0UscUJBQVMsRUFBRSxDQUFDbEIsa0ZBQUQsRUFBd0I2SCxNQUF4QixFQUFnQ3ZDLElBQWhDLENBQXFDLEdBQXJDO0FBQTdFLGFBQTZIcEUsS0FBN0g7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBUDtBQUNILFNBSEE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBVUg7O0FBRUQrRyxFQUFBQSxNQUFNLEdBQUc7QUFDTCx3QkFDSTtBQUFLLGVBQVMsRUFBRWpJLHFGQUFoQjtBQUEwQyxpQkFBVyxFQUFFLEtBQUt1RywyQkFBNUQ7QUFBeUYsZ0JBQVUsRUFBRSxLQUFLRSwwQkFBMUc7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUV6RyxnRkFBaEI7QUFDSSx1QkFBZSxFQUFFLEtBQUs4RyxvQkFEMUI7QUFFSSxhQUFLLEVBQUU7QUFDSHNCLFVBQUFBLFVBQVUsRUFBRSxlQUFlLEtBQUs5SCxLQUFMLENBQVc2RixhQUExQixHQUEwQyxHQURuRDtBQUVIa0MsVUFBQUEsS0FBSyxFQUFFLENBQUMsS0FBSy9CLFFBQUwsQ0FBY2IsTUFBZCxHQUF1QixDQUF4QixJQUE2QixHQUE3QixHQUFtQyxHQUZ2QztBQUdINkMsVUFBQUEsU0FBUyxFQUFFLGdCQUFpQixDQUFDLEdBQUQsSUFBUSxLQUFLaEMsUUFBTCxDQUFjYixNQUFkLEdBQXVCLENBQS9CLEtBQXFDLEtBQUtuRixLQUFMLENBQVcyRixlQUFYLEdBQTZCLENBQWxFLENBQWpCLEdBQXlGO0FBSGpHLFNBRlg7QUFBQSxnQ0FPSTtBQUNJLG1CQUFTLEVBQUVqRyxnRkFEZjtBQUVJLGVBQUssRUFBRTtBQUFFcUksWUFBQUEsS0FBSyxFQUFFLE9BQU8sS0FBSy9CLFFBQUwsQ0FBY2IsTUFBZCxHQUF1QixDQUE5QixJQUFtQztBQUE1QyxXQUZYO0FBQUEsb0JBSUssS0FBS2EsUUFBTCxDQUFjLEtBQUtBLFFBQUwsQ0FBY2IsTUFBZCxHQUF1QixDQUFyQztBQUpMLFdBR1MsT0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBKLEVBYUssS0FBS2EsUUFBTCxDQUFjMUUsR0FBZCxDQUFrQixDQUFDQyxJQUFELEVBQU9YLEtBQVAsS0FBaUI7QUFDaEMsOEJBQU87QUFBSyxxQkFBUyxFQUFFbEIsZ0ZBQWhCO0FBQXFDLGlCQUFLLEVBQUU7QUFBRXFJLGNBQUFBLEtBQUssRUFBRSxPQUFPLEtBQUsvQixRQUFMLENBQWNiLE1BQWQsR0FBdUIsQ0FBOUIsSUFBbUM7QUFBNUMsYUFBNUM7QUFBQSxzQkFBNkc1RDtBQUE3RyxhQUFvR1gsS0FBcEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBUDtBQUNILFNBRkEsQ0FiTCxlQWdCSTtBQUFLLG1CQUFTLEVBQUVsQixnRkFBaEI7QUFBcUMsZUFBSyxFQUFFO0FBQUVxSSxZQUFBQSxLQUFLLEVBQUUsT0FBTyxLQUFLL0IsUUFBTCxDQUFjYixNQUFkLEdBQXVCLENBQTlCLElBQW1DO0FBQTVDLFdBQTVDO0FBQUEsb0JBQTZHLEtBQUthLFFBQUwsQ0FBYyxDQUFkO0FBQTdHLFdBQW9HLEtBQXBHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBbUJLLEtBQUtLLGdCQUFMLEVBbkJMLGVBb0JJO0FBQUssaUJBQVMsRUFBRTNHLGdGQUFoQjtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBRSxDQUFDQSxnRkFBRCxFQUFzQkEsdUVBQXRCLEVBQWtDc0YsSUFBbEMsQ0FBdUMsR0FBdkMsQ0FBaEI7QUFBNkQsaUJBQU8sRUFBRSxLQUFLeUI7QUFBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUssbUJBQVMsRUFBRSxDQUFDL0csZ0ZBQUQsRUFBc0JBLHdFQUF0QixFQUFtQ3NGLElBQW5DLENBQXdDLEdBQXhDLENBQWhCO0FBQThELGlCQUFPLEVBQUUsS0FBS3VCO0FBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBMkJIOztBQTlMK0M7O2dCQUE5QzlHLDhCQUVvQjtBQUNsQnlILEVBQUFBLElBQUksRUFBRSxJQURZO0FBRWxCckIsRUFBQUEsYUFBYSxFQUFFO0FBRkc7O0FBK0wxQixpRUFBZXBHLFlBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLE1BQU1FLFFBQW1FLEdBQUcsQ0FBQztBQUFFOEIsRUFBQUEsRUFBRjtBQUFNNkcsRUFBQUE7QUFBTixDQUFELEtBQXVCO0FBQy9GLFFBQU07QUFBRUMsSUFBQUE7QUFBRixNQUFtQmxKLDREQUFjLENBQUVXLEtBQUQsSUFBV0EsS0FBSyxDQUFDd0MsTUFBbEIsQ0FBdkM7QUFDQSxRQUFNbkMsUUFBUSxHQUFHNkIsNERBQWMsRUFBL0I7QUFDQSxRQUFNO0FBQUEsT0FBQ1MsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0MxRCwrQ0FBUSxDQUFDLENBQUQsQ0FBOUMsQ0FIK0YsQ0FNL0Y7QUFDQTtBQUNBOztBQUVBLFdBQVNzSixZQUFULENBQXNCbEYsSUFBdEIsRUFBb0NHLEtBQXBDLEVBQW1EO0FBQy9DLFFBQUloQyxFQUFKLEVBQVE7QUFDSnBCLE1BQUFBLFFBQVEsQ0FBQ2dJLDhFQUFtQixDQUFDO0FBQ3pCL0UsUUFBQUEsSUFBSSxFQUFFQSxJQURtQjtBQUV6QkcsUUFBQUEsS0FBSyxFQUFFQSxLQUZrQjtBQUd6QmhDLFFBQUFBLEVBQUUsRUFBRUE7QUFIcUIsT0FBRCxDQUFwQixDQUFSO0FBS0g7QUFDSjs7QUFHRCxRQUFNK0MsVUFBVSxHQUFHLENBQUNsQixJQUFELEVBQU9DLFFBQVAsS0FBb0I7QUFDbkNYLElBQUFBLGNBQWMsQ0FBQ1UsSUFBRCxDQUFkO0FBQ0FrRixJQUFBQSxZQUFZLENBQUNsRixJQUFELEVBQU9DLFFBQVAsQ0FBWjtBQUNILEdBSEQ7O0FBS0Esc0JBQU87QUFBQSxlQUVDK0UsU0FBUyxpQkFBSTtBQUFLLGVBQVMsRUFBRTVJLDZFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGZCxlQUlIO0FBQUssZUFBUyxFQUFFQSxpRkFBaEI7QUFBQSxpQkFFUTZJLFlBQVksQ0FBQ3JELElBQWIsQ0FBa0JDLE1BQWxCLEdBQTJCLENBQTNCLEdBQ0lvRCxZQUFZLENBQUNyRCxJQUFiLENBQWtCNUQsR0FBbEIsQ0FBc0JDLElBQUksSUFBSTtBQUMxQiw0QkFBTyw4REFBQywrREFBRCxvQkFBaUNBLElBQWpDLEdBQW9CQSxJQUFJLENBQUNFLEVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQVA7QUFDSCxPQUZELENBREosZ0JBSUksOERBQUMsc0RBQUQ7QUFBVyxZQUFJLEVBQUU7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOWixlQVFJO0FBQUssaUJBQVMsRUFBRS9CLHVFQUFoQjtBQUFnQyxhQUFLLEVBQUU7QUFBRTJGLFVBQUFBLE9BQU8sRUFBRWtELFlBQVksQ0FBQ3JELElBQWIsQ0FBa0JDLE1BQWxCLEdBQTJCLENBQTNCLElBQWdDb0QsWUFBWSxDQUFDckQsSUFBYixDQUFrQkMsTUFBbEIsR0FBMkIsRUFBM0QsR0FBZ0UsT0FBaEUsR0FBMEU7QUFBckYsU0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpHLGVBY0gsOERBQUMseURBQUQ7QUFBYyxXQUFLLEVBQUVvRCxZQUFZLENBQUNqRCxLQUFsQztBQUF5QyxjQUFRLEVBQUUsRUFBbkQ7QUFBdUQscUJBQWUsRUFBRSxLQUF4RTtBQUErRSxhQUFPLEVBQUUzQyxXQUF4RjtBQUFxRyxjQUFRLEVBQUU2QjtBQUEvRztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWRHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBZ0JILENBMUNEOztBQTRDQSxpRUFBZTdFLFFBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRBLE1BQU1DLFVBQW9CLEdBQUcsTUFBTTtBQUUvQixzQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDSCxDQUhEOztBQUtBLGlFQUFlQSxVQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUVBOzs7QUFFQSxNQUFNdUMsYUFBbUMsR0FBSXVELEtBQUQsSUFBVztBQUVuRCxXQUFTa0QsU0FBVCxDQUFtQnBGLElBQW5CLEVBQWlDO0FBQzdCLFFBQUlBLElBQUksSUFBSSxDQUFDLENBQWIsRUFBZ0I7QUFDWixhQUFPLEtBQVA7QUFDSCxLQUZELE1BRU8sSUFBSUEsSUFBSSxJQUFJLENBQVIsSUFBYUEsSUFBSSxJQUFJLENBQXpCLEVBQTRCO0FBQy9CLGFBQU8sS0FBUDtBQUNILEtBRk0sTUFFQSxJQUFJQSxJQUFJLElBQUksQ0FBWixFQUFlO0FBQ2xCLGFBQU8sSUFBUDtBQUNIOztBQUNELFdBQU8sSUFBUDtBQUNIOztBQUVELHNCQUFPO0FBQUssYUFBUyxFQUFFTSxnRkFBaEI7QUFBQSwyQkFDSDtBQUFLLGVBQVMsRUFBRUEsaUZBQWhCO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFFQSwwRUFBaEI7QUFDSSxXQUFHLEVBQUU0QixLQUFLLENBQUNzRCxNQUFOLElBQWdCLElBQWhCLEdBQXVCLHdFQUF2QixHQUFrR3RELEtBQUssQ0FBQ3NELE1BRGpIO0FBRUksYUFBSyxFQUFDLE1BRlY7QUFHSSxjQUFNLEVBQUMsTUFIWDtBQUlJLFdBQUcsRUFBQztBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFPSTtBQUFLLGlCQUFTLEVBQUVsRixtRkFBaEI7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUVBLG1GQUFoQjtBQUFBLGtDQUNJO0FBQUkscUJBQVMsRUFBRUEsZ0ZBQWY7QUFBQSxzQkFBa0M0QixLQUFLLENBQUMwRDtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUk7QUFBSyxxQkFBUyxFQUFFdEYsMEVBQWhCO0FBQUEsc0JBRVE0QixLQUFLLENBQUM0RCxVQUFOLENBQWlCQyxLQUFqQixDQUF1QixHQUF2QixFQUE0QmpJLEdBQTVCLENBQWdDLENBQUNDLElBQUQsRUFBT1gsS0FBUCxLQUFpQjtBQUM3QyxrQ0FBTyw4REFBQyx1REFBRDtBQUEyQixxQkFBSyxFQUFFVztBQUFsQyxpQkFBb0JYLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQVA7QUFDSCxhQUZEO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSixlQVNJO0FBQU0scUJBQVMsRUFBRWtELDBFQUFqQjtBQUFBLHNCQUE4QjRCLEtBQUssQ0FBQytELFdBQU4sSUFBcUIsSUFBckIsR0FBNEIsY0FBNUIsR0FBNkMvRCxLQUFLLENBQUMrRDtBQUFqRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQWFJO0FBQU0sbUJBQVMsRUFBRTNGLDRFQUFqQjtBQUNJLGVBQUssRUFBRTtBQUNIZ0IsWUFBQUEsS0FBSyxFQUFFWSxLQUFLLENBQUNpRSxTQUFOLElBQW1CLENBQW5CLEdBQXVCLFNBQXZCLEdBQW1DLFNBRHZDO0FBRUhDLFlBQUFBLFdBQVcsRUFBRWxFLEtBQUssQ0FBQ2lFLFNBQU4sSUFBbUIsQ0FBbkIsR0FBdUIsU0FBdkIsR0FBbUM7QUFGN0MsV0FEWDtBQUFBLG9CQUtLZixTQUFTLENBQUNsRCxLQUFLLENBQUNpRSxTQUFQO0FBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREc7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBK0JILENBNUNEOztBQThDQSxpRUFBZXhILGFBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUNBOzs7QUFNQSxNQUFNd0csYUFBdUMsR0FBRyxDQUFDO0FBQzdDbUIsRUFBQUE7QUFENkMsQ0FBRCxLQUUxQztBQUdGLHNCQUFPO0FBQUssYUFBUyxFQUFFaEcsZ0ZBQWhCO0FBQWtDLFNBQUssRUFBRTtBQUFFaUcsTUFBQUEsZUFBZSxFQUFFRiw2REFBZ0IsQ0FBQ0MsS0FBRCxDQUFoQixHQUEwQjtBQUE3QyxLQUF6QztBQUFBLGNBQ0ZBO0FBREU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBR0gsQ0FSRDs7QUFVQSxpRUFBZW5CLGFBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBOzs7QUFHQSxNQUFNdkcsU0FBc0MsR0FBRyxDQUMzQztBQUNJb0IsRUFBQUEsSUFBSSxHQUFHO0FBRFgsQ0FEMkMsS0FJMUM7QUFDRCxXQUFTd0csV0FBVCxHQUF1QjtBQUNuQixRQUFJQyxHQUFHLEdBQUcsRUFBVjs7QUFDQSxRQUFJekcsSUFBSSxJQUFJLENBQVosRUFBZTtBQUFFO0FBQ2J5RyxNQUFBQSxHQUFHLEdBQUcsOEJBQU47QUFDSDs7QUFDRCxXQUFPQSxHQUFQO0FBQ0g7O0FBRUQsc0JBQU87QUFBSyxhQUFTLEVBQUV2Syx1R0FBaEI7QUFBQSwyQkFDSDtBQUFLLGVBQVMsRUFBRUEsK0ZBQWhCO0FBQThCLFNBQUcsRUFBRXNLLFdBQVcsRUFBOUM7QUFBa0QsV0FBSyxFQUFDLEtBQXhEO0FBQThELFNBQUcsRUFBQztBQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREc7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBR0gsQ0FoQkQ7O0FBa0JBLGlFQUFlNUgsU0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7OztBQWlCQSxNQUFNOUMsY0FBeUMsR0FBRyxDQUM5QztBQUNJbUMsRUFBQUEsRUFESjtBQUVJckIsRUFBQUEsUUFBUSxHQUFHLEVBRmY7QUFHSUUsRUFBQUEsV0FBVyxHQUFHLENBSGxCO0FBSUk2SixFQUFBQTtBQUpKLENBRDhDLEtBTzdDO0FBQ0Qsc0JBQU87QUFBSyxNQUFFLEVBQUUxSSxFQUFUO0FBQWEsYUFBUyxFQUFFL0IsNEdBQXhCO0FBQUEsNEJBQ0g7QUFBSyxlQUFTLEVBQUVBLGlIQUFoQjtBQUEwQyxXQUFLLEVBQUU7QUFBRTRLLFFBQUFBLEdBQUcsRUFBRSxJQUFJaEssV0FBVyxHQUFHLEVBQWxCLEdBQXVCO0FBQTlCO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREcsZUFFSDtBQUFJLGVBQVMsRUFBRVosNEdBQWY7QUFBQSxnQkFFUVUsUUFBUSxDQUFDa0IsR0FBVCxDQUFhLENBQUNDLElBQUQsRUFBT1gsS0FBUCxLQUFpQjtBQUMxQiw0QkFBTztBQUFrQixpQkFBTyxFQUFFLE1BQU07QUFBRXVKLFlBQUFBLGFBQWEsSUFBSUEsYUFBYSxDQUFDdkosS0FBRCxDQUE5QjtBQUF1QyxXQUExRTtBQUFBLGtDQUNIO0FBQU0scUJBQVMsRUFBRWxCLHdHQUFqQjtBQUFrQyxpQkFBSyxFQUFFO0FBQUUrSyxjQUFBQSxlQUFlLEVBQUUsU0FBU2xKLElBQUksQ0FBQ3JCLEtBQWQsR0FBc0I7QUFBekMsYUFBekM7QUFBQSxzQkFBMEZxQixJQUFJLENBQUN1STtBQUEvRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURHLGVBRUg7QUFBTSxxQkFBUyxFQUFFcEssdUdBQWpCO0FBQWlDLGlCQUFLLEVBQUU7QUFBRXFFLGNBQUFBLFVBQVUsRUFBRXhDLElBQUksQ0FBQ29KLEdBQUwsSUFBWSxDQUFaLEdBQWdCLFFBQWhCLEdBQTJCO0FBQXpDLGFBQXhDO0FBQUEsc0JBQStGcEosSUFBSSxDQUFDb0o7QUFBcEc7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRztBQUFBLFdBQVNwSixJQUFJLENBQUNFLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBUDtBQUlILE9BTEQ7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBYUgsQ0FyQkQ7O0FBdUJBLGlFQUFlbkMsY0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBOzs7QUFPQSxNQUFNQyxZQUFxQyxHQUFHLENBQUM7QUFDM0NzTCxFQUFBQSxXQUFXLEdBQUcsQ0FENkI7QUFFM0NDLEVBQUFBO0FBRjJDLENBQUQsS0FHeEM7QUFFRixRQUFNekssUUFBUSxHQUFHNkIsNERBQWMsRUFBL0I7QUFDQSxRQUFNO0FBQUVuQyxJQUFBQSxPQUFGO0FBQVdELElBQUFBO0FBQVgsTUFBb0JULDREQUFjLENBQUVXLEtBQUQsSUFBV0EsS0FBSyxDQUFDRixJQUFsQixDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDaUwsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBb0I5TCwrQ0FBUSxDQUFDLEtBQUQsQ0FBbEM7O0FBRUEsUUFBTStMLE1BQU0sR0FBRyxNQUFNO0FBQ2pCRCxJQUFBQSxPQUFPLENBQUMsQ0FBQ0QsTUFBRixDQUFQO0FBQ0gsR0FGRDs7QUFJQSxRQUFNRyxPQUFPLEdBQUcsTUFBTTtBQUNsQjdLLElBQUFBLFFBQVEsQ0FBQ3VLLHlFQUFlLENBQUMsSUFBRCxDQUFoQixDQUFSO0FBQ0gsR0FGRDs7QUFJQSxzQkFBTztBQUFLLGFBQVMsRUFBRSxDQUFDbEwsc0dBQUQsRUFBa0JvTCxTQUFsQixFQUE2QjlGLElBQTdCLENBQWtDLEdBQWxDLENBQWhCO0FBQUEsNEJBQ0g7QUFBSyxlQUFTLEVBQUV0RixzR0FBaEI7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUVBLHdHQUFoQjtBQUFtQyxXQUFHLEVBQUVJLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosSUFBQUEsSUFBSSxDQUFFa0osTUFBTixHQUFlbEosSUFBZixhQUFlQSxJQUFmLHVCQUFlQSxJQUFJLENBQUVrSixNQUFyQixHQUE4QixpQ0FBdEU7QUFBeUcsV0FBRyxFQUFDO0FBQTdHO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFBLGtCQUFPakosT0FBTyxJQUFJRCxJQUFKLGFBQUlBLElBQUosZUFBSUEsSUFBSSxDQUFFd0wsUUFBakIsR0FBNEJ4TCxJQUE1QixhQUE0QkEsSUFBNUIsdUJBQTRCQSxJQUFJLENBQUV3TCxRQUFsQyxHQUE2QztBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERyxlQUtIO0FBQUcsZUFBUyxFQUFFNUwsc0dBQWQ7QUFBK0IsV0FBSyxFQUFFO0FBQUU4TCxRQUFBQSxlQUFlLEVBQUVYLFdBQW5CO0FBQWdDWSxRQUFBQSxRQUFRLEVBQUVaO0FBQTFDLE9BQXRDO0FBQUEsZ0JBQWdHOUssT0FBTyxHQUFHRCxJQUFILGFBQUdBLElBQUgsdUJBQUdBLElBQUksQ0FBRTJKLFdBQVQsR0FBdUI7QUFBOUg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRyxFQU9DMUosT0FBTyxnQkFDSDtBQUFNLGVBQVMsRUFBRUwscUdBQWpCO0FBQ0ksV0FBSyxFQUFFO0FBQUVxSyxRQUFBQSxlQUFlLEVBQUVnQixNQUFNLEdBQUcsU0FBSCxHQUFlLFNBQXhDO0FBQW1EakcsUUFBQUEsS0FBSyxFQUFFaUcsTUFBTSxHQUFHLFNBQUgsR0FBZTtBQUEvRSxPQURYO0FBRUksYUFBTyxFQUFFRSxNQUZiO0FBQUEsZ0JBR0tGLE1BQU0sR0FBRyxLQUFILEdBQVc7QUFIdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERyxnQkFNSDtBQUFNLGVBQVMsRUFBRXJMLHNHQUFqQjtBQUFrQyxhQUFPLEVBQUV3TCxPQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQWdCSCxDQWpDRDs7QUFtQ0EsaUVBQWUzTCxZQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDQTtBQUVBOzs7QUFFQSxNQUFNOEMsWUFBdUMsR0FBSXFELEtBQUQsSUFBVztBQUV2RCxXQUFTbUcsYUFBVCxDQUF1QkMsT0FBdkIsRUFBZ0N0SSxJQUFoQyxFQUFzQ3VJLGVBQXRDLEVBQXdFO0FBQ3BFLFFBQUl2SSxJQUFJLEtBQUssTUFBYixFQUFxQjtBQUNqQiwwQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFQO0FBQ0gsS0FGRCxNQUVPLElBQUlBLElBQUksS0FBSyxNQUFiLEVBQXFCO0FBQ3hCLDBCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFDSDs7QUFDRCxXQUFPdUksZUFBUDtBQUNIOztBQUVELHNCQUFPO0FBQUssYUFBUyxFQUFFck0sdUdBQWhCO0FBQUEsMkJBQ0gsOERBQUMsNENBQUQsb0JBQWdCZ0csS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUdILENBZEQ7O0FBZ0JBLGlFQUFlckQsWUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBOzs7O0FBR0EsTUFBTTRKLE1BQU0sR0FBRyxNQUFNO0FBQ2pCLHNCQUNJO0FBQUEsMkJBQ0k7QUFBUSxlQUFTLEVBQUV2TSwwRUFBbkI7QUFBQSw4QkFDSTtBQUFLLFdBQUcsRUFBQywyQkFBVDtBQUFxQyxhQUFLLEVBQUMsTUFBM0M7QUFBa0QsV0FBRyxFQUFDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFLLGlCQUFTLEVBQUVBLDJFQUFoQjtBQUFBLGdDQUNJO0FBQUEsa0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFSTtBQUFBLG1DQUFJO0FBQUcsa0JBQUksRUFBQyxFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSixlQUdJO0FBQUEsbUNBQUk7QUFBRyxrQkFBSSxFQUFDLEVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhKLGVBSUk7QUFBQSxtQ0FBSTtBQUFHLGtCQUFJLEVBQUMsRUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBUUk7QUFBQSxrQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJO0FBQUEsbUNBQUk7QUFBRyxrQkFBSSxFQUFDLEVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKLGVBR0k7QUFBQSxtQ0FBSTtBQUFHLGtCQUFJLEVBQUMsRUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEosZUFJSTtBQUFBLG1DQUFJO0FBQUcsa0JBQUksRUFBQyxFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKSixlQUtJO0FBQUEsbUNBQUk7QUFBRyxrQkFBSSxFQUFDLEVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSSixlQWdCSTtBQUFBLGtDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUk7QUFBQSxtQ0FBSTtBQUFHLGtCQUFJLEVBQUMsRUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkosZUFHSTtBQUFBLG1DQUFJO0FBQUcsa0JBQUksRUFBQyxFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFISixlQUlJO0FBQUEsbUNBQUk7QUFBRyxrQkFBSSxFQUFDLEVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFoQkosZUF1Qkk7QUFBSyxtQkFBUyxFQUFFQSx3RUFBaEI7QUFBQSxrQ0FDSTtBQUFLLHFCQUFTLEVBQUVBLDZFQUFoQjtBQUFBLG9DQUNJO0FBQUssaUJBQUcsRUFBQyw2QkFBVDtBQUF1QyxtQkFBSyxFQUFDLE1BQTdDO0FBQW9ELGlCQUFHLEVBQUM7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFLSTtBQUFLLHFCQUFTLEVBQUVBLDZFQUFoQjtBQUFBLG9DQUNJO0FBQUssaUJBQUcsRUFBQyw2QkFBVDtBQUF1QyxtQkFBSyxFQUFDLE1BQTdDO0FBQW9ELGlCQUFHLEVBQUM7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEosZUFTSTtBQUFLLHFCQUFTLEVBQUVBLDZFQUFoQjtBQUFBLG9DQUNJO0FBQUssaUJBQUcsRUFBQyw2QkFBVDtBQUF1QyxtQkFBSyxFQUFDLE1BQTdDO0FBQW9ELGlCQUFHLEVBQUM7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXZCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUF3Q0k7QUFBRyxpQkFBUyxFQUFFQSx3RUFBZDtBQUFBLDRFQUNJO0FBQUcsbUJBQVMsRUFBRUEsNEVBQWQ7QUFBK0IsY0FBSSxFQUFDLDJCQUFwQztBQUFnRSxnQkFBTSxFQUFDLE9BQXZFO0FBQStFLGFBQUcsRUFBQyxVQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBeENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBZ0RILENBakREOztBQW1EQSxpRUFBZXVNLE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBT0EsTUFBTVUsTUFBeUIsR0FBSWpILEtBQUQsSUFBVztBQUN6QyxRQUFNckYsUUFBUSxHQUFHbEIsd0RBQVcsRUFBNUI7QUFDQSxRQUFNeU4sV0FBVyxHQUFHdk4sNERBQWMsQ0FBRVcsS0FBRCxJQUFXQSxLQUFLLENBQUM2TSxLQUFOLENBQVlELFdBQXhCLENBQWxDO0FBQ0EsUUFBTTtBQUFFN00sSUFBQUEsT0FBRjtBQUFXRCxJQUFBQTtBQUFYLE1BQW9CVCw0REFBYyxDQUFFVyxLQUFELElBQVdBLEtBQUssQ0FBQ0YsSUFBbEIsQ0FBeEM7QUFDQSxRQUFNZ04sTUFBTSxHQUFHN04sc0RBQVMsRUFBeEI7QUFFQSxRQUFNOE4sY0FBYyxHQUFHLENBQ25CO0FBQ0l0TCxJQUFBQSxFQUFFLEVBQUUsQ0FEUjtBQUVJdkIsSUFBQUEsS0FBSyxFQUFFLGtDQUZYO0FBR0k0SixJQUFBQSxLQUFLLEVBQUUsTUFIWDtBQUlJM0osSUFBQUEsSUFBSSxFQUFFLFlBQVdMLElBQVgsYUFBV0EsSUFBWCx1QkFBV0EsSUFBSSxDQUFFMkIsRUFBakI7QUFKVixHQURtQixFQU9uQjtBQUNJQSxJQUFBQSxFQUFFLEVBQUUsQ0FEUjtBQUVJdkIsSUFBQUEsS0FBSyxFQUFFLGtDQUZYO0FBR0k0SixJQUFBQSxLQUFLLEVBQUUsTUFIWDtBQUlJM0osSUFBQUEsSUFBSSxFQUFFLFlBQVdMLElBQVgsYUFBV0EsSUFBWCx1QkFBV0EsSUFBSSxDQUFFMkIsRUFBakI7QUFKVixHQVBtQixFQWFuQjtBQUNJQSxJQUFBQSxFQUFFLEVBQUUsQ0FEUjtBQUVJdkIsSUFBQUEsS0FBSyxFQUFFLGdDQUZYO0FBR0k0SixJQUFBQSxLQUFLLEVBQUUsTUFIWDtBQUlJM0osSUFBQUEsSUFBSSxFQUFFLFlBQVdMLElBQVgsYUFBV0EsSUFBWCx1QkFBV0EsSUFBSSxDQUFFMkIsRUFBakI7QUFKVixHQWJtQixFQW1CbkI7QUFDSUEsSUFBQUEsRUFBRSxFQUFFLENBRFI7QUFFSXZCLElBQUFBLEtBQUssRUFBRSxnQ0FGWDtBQUdJNEosSUFBQUEsS0FBSyxFQUFFLE1BSFg7QUFJSTNKLElBQUFBLElBQUksRUFBRTtBQUpWLEdBbkJtQixFQXlCbkI7QUFDSXNCLElBQUFBLEVBQUUsRUFBRSxDQURSO0FBRUl2QixJQUFBQSxLQUFLLEVBQUUsa0NBRlg7QUFHSTRKLElBQUFBLEtBQUssRUFBRSxNQUhYO0FBSUkzSixJQUFBQSxJQUFJLEVBQUU7QUFKVixHQXpCbUIsQ0FBdkI7QUFpQ0EsUUFBTTZNLFFBQVEsR0FBRyxDQUNiO0FBQ0l2TCxJQUFBQSxFQUFFLEVBQUUsQ0FEUjtBQUVJdkIsSUFBQUEsS0FBSyxFQUFFLHFDQUZYO0FBR0k0SixJQUFBQSxLQUFLLEVBQUU7QUFIWCxHQURhLEVBTWI7QUFDSXJJLElBQUFBLEVBQUUsRUFBRSxDQURSO0FBRUl2QixJQUFBQSxLQUFLLEVBQUUsd0NBRlg7QUFHSTRKLElBQUFBLEtBQUssRUFBRTtBQUhYLEdBTmEsRUFXYjtBQUNJckksSUFBQUEsRUFBRSxFQUFFLENBRFI7QUFFSXZCLElBQUFBLEtBQUssRUFBRSxtQ0FGWDtBQUdJNEosSUFBQUEsS0FBSyxFQUFFO0FBSFgsR0FYYSxDQUFqQjtBQWtCQSxRQUFNO0FBQUEsT0FBQ21ELGdCQUFEO0FBQUEsT0FBbUJDO0FBQW5CLE1BQXdDaE8sK0NBQVEsQ0FBQyxLQUFELENBQXREO0FBQ0EsUUFBTTtBQUFBLE9BQUNpTyxpQkFBRDtBQUFBLE9BQW9CQztBQUFwQixNQUEwQ2xPLCtDQUFRLENBQUMsS0FBRCxDQUF4RCxDQTFEeUMsQ0E0RHpDOztBQUNBOEMsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ1pnQixJQUFBQSxRQUFRLENBQUNxSyxnQkFBVCxDQUEwQixPQUExQixFQUFtQ0MsVUFBbkM7QUFDSCxHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLFFBQU1BLFVBQVUsR0FBSUMsRUFBRCxJQUFhO0FBQzVCLFFBQUk1SixNQUFNLEdBQUc0SixFQUFFLENBQUM1SixNQUFILElBQWE0SixFQUFFLENBQUNDLFVBQTdCO0FBQ0EsUUFBSS9MLEVBQUUsR0FBR2tDLE1BQU0sQ0FBQ2xDLEVBQWhCOztBQUNBLFFBQUlBLEVBQUUsS0FBSyxVQUFYLEVBQXVCO0FBQ25CeUwsTUFBQUEsaUJBQWlCLENBQUMsS0FBRCxDQUFqQjtBQUNIOztBQUNELFFBQUl6TCxFQUFFLEtBQUssYUFBWCxFQUEwQjtBQUN0QjJMLE1BQUFBLGtCQUFrQixDQUFDLEtBQUQsQ0FBbEI7QUFDSDtBQUNKLEdBVEQ7O0FBV0EsV0FBU0ssY0FBVCxHQUEwQjtBQUN0QlAsSUFBQUEsaUJBQWlCLENBQUMsQ0FBQ0QsZ0JBQUYsQ0FBakI7QUFDSDs7QUFBQTs7QUFFRCxXQUFTUyxRQUFULEdBQW9CO0FBQ2hCTixJQUFBQSxrQkFBa0IsQ0FBQyxDQUFDRCxpQkFBRixDQUFsQjtBQUNIOztBQUVELFFBQU1RLG1CQUFtQixHQUFJL00sS0FBRCxJQUFtQjtBQUMzQyxRQUFJQSxLQUFLLEdBQUcsQ0FBWixFQUFlO0FBQ1gsVUFBSThFLEtBQUssQ0FBQ2tJLGdCQUFWLEVBQTRCO0FBQ3hCbEksUUFBQUEsS0FBSyxDQUFDa0ksZ0JBQU4sQ0FBdUJoTixLQUFLLElBQUksQ0FBVCxHQUFhLENBQWIsR0FBaUJBLEtBQUssR0FBRyxDQUFoRDtBQUVILE9BSEQsTUFHTztBQUNILFlBQUlkLElBQUosRUFBVTtBQUNOTyxVQUFBQSxRQUFRLENBQUNvTSxrRkFBeUIsQ0FBQztBQUFFcEosWUFBQUEsR0FBRyxFQUFFdkQsSUFBSSxDQUFDMkIsRUFBWjtBQUFnQmIsWUFBQUEsS0FBSyxFQUFFQSxLQUFLLElBQUksQ0FBVCxHQUFhLENBQWIsR0FBaUJBLEtBQUssR0FBRztBQUFoRCxXQUFELENBQTFCLENBQVI7QUFDSDs7QUFDRGtNLFFBQUFBLE1BQU0sQ0FBQy9MLElBQVAsQ0FBWTtBQUNSOE0sVUFBQUEsUUFBUSxFQUFFZCxjQUFjLENBQUNuTSxLQUFELENBQWQsQ0FBc0JUO0FBRHhCLFNBQVo7QUFHSDtBQUNKLEtBWkQsTUFZTyxJQUFJUyxLQUFLLElBQUksQ0FBYixFQUFnQjtBQUNuQmtNLE1BQUFBLE1BQU0sQ0FBQy9MLElBQVAsQ0FBWTtBQUNSOE0sUUFBQUEsUUFBUSxFQUFFZCxjQUFjLENBQUNuTSxLQUFELENBQWQsQ0FBc0JUO0FBRHhCLE9BQVo7QUFHSCxLQUpNLE1BSUEsSUFBSVMsS0FBSyxJQUFJLENBQWIsRUFBZ0I7QUFDbkI7QUFDQVAsTUFBQUEsUUFBUSxDQUFDcU0saUVBQVEsRUFBVCxDQUFSO0FBQ0g7QUFDSixHQXJCRDs7QUF1QkEsUUFBTW9CLG9CQUFvQixHQUFJUCxFQUFELElBQWE7QUFDdENRLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVo7QUFDSCxHQUZEOztBQUlBLFFBQU01TyxTQUFTLEdBQUcsTUFBTTtBQUNwQmlCLElBQUFBLFFBQVEsQ0FBQ3VLLHlFQUFlLENBQUMsSUFBRCxDQUFoQixDQUFSO0FBQ0gsR0FGRDs7QUFJQSxzQkFDSTtBQUFRLGFBQVMsRUFBRWxMLDJFQUFuQjtBQUFrQyxTQUFLLEVBQUU7QUFBRXVPLE1BQUFBLFlBQVksRUFBRXJCLFdBQVcsR0FBSUwsOERBQWlCLEtBQUssSUFBMUIsR0FBa0M7QUFBN0QsS0FBekM7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBRTdNLDRFQUFoQjtBQUFBLDhCQUNJO0FBQUcsWUFBSSxFQUFDLEtBQVI7QUFBQSwrQkFBYztBQUFLLG1CQUFTLEVBQUVBLHlFQUFoQjtBQUE2QixhQUFHLEVBQUMseUJBQWpDO0FBQTJELGVBQUssRUFBQyxjQUFqRTtBQUFzRSxhQUFHLEVBQUM7QUFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFJLGlCQUFTLEVBQUVBLHlFQUFmO0FBQUEsZ0NBQ0k7QUFBSSxtQkFBUyxFQUFFZ0csS0FBSyxDQUFDcEMsSUFBTixLQUFlLENBQWYsR0FBbUI1RCwrRUFBbkIsR0FBdUMsRUFBdEQ7QUFBQSxpQ0FDSSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUMsR0FBWDtBQUFBLG1DQUFlO0FBQUcsdUJBQVMsRUFBRUEsOEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUlJO0FBQUksbUJBQVMsRUFBRWdHLEtBQUssQ0FBQ3BDLElBQU4sS0FBZSxDQUFmLEdBQW1CNUQsK0VBQW5CLEdBQXVDLEVBQXREO0FBQUEsaUNBQ0ksOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFDLGNBQVg7QUFBQSxtQ0FBMEI7QUFBRyx1QkFBUyxFQUFFQSw4RUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKSixlQU9JO0FBQUksbUJBQVMsRUFBRWdHLEtBQUssQ0FBQ3BDLElBQU4sS0FBZSxDQUFmLEdBQW1CNUQsK0VBQW5CLEdBQXVDLEVBQXREO0FBQUEsaUNBQ0ksOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFDLFVBQVg7QUFBQSxtQ0FBc0I7QUFBRyx1QkFBUyxFQUFFQSxpRkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQSixlQVVJO0FBQUksbUJBQVMsRUFBRWdHLEtBQUssQ0FBQ3BDLElBQU4sS0FBZSxDQUFmLEdBQW1CNUQsK0VBQW5CLEdBQXVDLEVBQXREO0FBQUEsaUNBQ0ksOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFDLFNBQVg7QUFBQSxtQ0FBcUI7QUFBRyx1QkFBUyxFQUFFQSxnRkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFpQkk7QUFBSyxpQkFBUyxFQUFFQSwyRUFBaEI7QUFBQSxnQ0FDSTtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLHFCQUFXLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQU0sbUJBQVMsRUFBRUEsK0VBQWlCK087QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBakJKLGVBc0JJO0FBQUssaUJBQVMsRUFBRS9PLDZFQUFoQjtBQUFBLGtCQUVRSyxPQUFPLGdCQUNIO0FBQUksbUJBQVMsRUFBRUwsNkVBQWY7QUFBQSxrQ0FDSTtBQUFJLHFCQUFTLEVBQUVBLHlFQUFmO0FBQUEsb0NBQ0k7QUFBSyxnQkFBRSxFQUFDLFVBQVI7QUFBbUIsaUJBQUcsRUFBRUksSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixJQUFBQSxJQUFJLENBQUVrSixNQUFOLEdBQWVsSixJQUFmLGFBQWVBLElBQWYsdUJBQWVBLElBQUksQ0FBRWtKLE1BQXJCLEdBQThCLGlDQUF0RDtBQUF5RixxQkFBTyxFQUFFLE1BQU07QUFBRXlFLGdCQUFBQSxjQUFjO0FBQUksZUFBNUg7QUFBOEgsaUJBQUcsRUFBQztBQUFsSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLGVBRUk7QUFBSyx1QkFBUyxFQUFFL04sK0VBQWhCO0FBQ0ksbUJBQUssRUFBRTtBQUFFcUUsZ0JBQUFBLFVBQVUsRUFBRWtKLGdCQUFnQixHQUFHLFNBQUgsR0FBZTtBQUE3QyxlQURYO0FBQUEscUNBRUk7QUFBQSx3Q0FDSTtBQUFJLDJCQUFTLEVBQUV2TixtRkFBZjtBQUFBLDRCQUF1Q0ksSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixJQUFBQSxJQUFJLENBQUV3TCxRQUFOLEdBQWlCeEwsSUFBakIsYUFBaUJBLElBQWpCLHVCQUFpQkEsSUFBSSxDQUFFd0wsUUFBdkIsR0FBa0M7QUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFESixFQUdReUIsY0FBYyxDQUFDekwsR0FBZixDQUFtQixDQUFDQyxJQUFELEVBQU9YLEtBQVAsS0FBaUI7QUFDaEMsc0NBQU87QUFFSCw2QkFBUyxFQUFFbEIsbUZBRlI7QUFHSCx5QkFBSyxFQUFFO0FBQUUrSyxzQkFBQUEsZUFBZSxFQUFFLFNBQVNsSixJQUFJLENBQUNyQixLQUFkLEdBQXNCO0FBQXpDLHFCQUhKO0FBSUgsMkJBQU8sRUFBRSxNQUFNO0FBQUV5TixzQkFBQUEsbUJBQW1CLENBQUMvTSxLQUFELENBQW5CO0FBQTRCLHFCQUoxQztBQUFBLDhCQUtGVyxJQUFJLENBQUN1STtBQUxILHFCQUNFdkksSUFBSSxDQUFDRSxFQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQVA7QUFPSCxpQkFSRCxDQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBcUJJO0FBQUEsb0NBQ0k7QUFBSyxpQkFBRyxFQUFDLG1DQUFUO0FBQTZDLGlCQUFHLEVBQUM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQUVJO0FBQU0sdUJBQVMsRUFBRS9CLGdGQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBckJKLGVBeUJJO0FBQUEsb0NBQ0k7QUFBSyxnQkFBRSxFQUFDLGFBQVI7QUFBc0IsaUJBQUcsRUFBQyxnQ0FBMUI7QUFBMkQscUJBQU8sRUFBRSxNQUFNO0FBQUVnTyxnQkFBQUEsUUFBUTtBQUFJLGVBQXhGO0FBQTBGLGlCQUFHLEVBQUM7QUFBOUY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQUVJO0FBQUssdUJBQVMsRUFBRWhPLGdGQUFoQjtBQUNJLG1CQUFLLEVBQUU7QUFBRXFFLGdCQUFBQSxVQUFVLEVBQUVvSixpQkFBaUIsR0FBRyxTQUFILEdBQWU7QUFBOUMsZUFEWDtBQUFBLHFDQUVJO0FBQUEsMEJBRVFILFFBQVEsQ0FBQzFMLEdBQVQsQ0FBYSxDQUFDQyxJQUFELEVBQU9YLEtBQVAsS0FBaUI7QUFDMUIsc0NBQU87QUFBa0IsNkJBQVMsRUFBRWxCLG1GQUE3QjtBQUFvRCwyQkFBTyxFQUFFb08sb0JBQTdEO0FBQUEsNENBQ0g7QUFBSyx5QkFBRyxFQUFFdk0sSUFBSSxDQUFDckIsS0FBZjtBQUFzQiwyQkFBSyxFQUFDLE1BQTVCO0FBQW1DLDRCQUFNLEVBQUMsTUFBMUM7QUFBaUQseUJBQUcsRUFBQztBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURHLGVBRUg7QUFBQSxnQ0FBT3FCLElBQUksQ0FBQ3VJO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FGRztBQUFBLHFCQUFTdkksSUFBSSxDQUFDRSxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQVA7QUFJSCxpQkFMRDtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkF6Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURHLGdCQTRDSDtBQUFNLG1CQUFTLEVBQUUvQiw4RUFBakI7QUFBbUMsaUJBQU8sRUFBRU4sU0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE5Q1o7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF0Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBNkVILENBaE1EOztBQWtNQSxpRUFBZXVOLE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xOQTtBQUNBO0FBQ0E7Ozs7QUFFQSxNQUFNeUMsTUFNSixHQUFHLENBQUM7QUFBRXRGLEVBQUFBLEtBQUY7QUFBU0wsRUFBQUEsV0FBVDtBQUFzQjRGLEVBQUFBLFFBQXRCO0FBQWdDdkUsRUFBQUEsU0FBaEM7QUFBMkM5RSxFQUFBQTtBQUEzQyxDQUFELEtBQTJEO0FBRTVEaEUsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ1pzTixJQUFBQSxNQUFNLENBQUNqQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxNQUFNO0FBQ3BDLFVBQUlrQyxLQUFLLEdBQUd2TSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBWjs7QUFDQSxVQUFJc00sS0FBSyxJQUFJLElBQWIsRUFBbUI7QUFDZixZQUFJRCxNQUFNLENBQUNFLFdBQVAsR0FBcUIsSUFBekIsRUFBK0I7QUFDM0JELFVBQUFBLEtBQUssQ0FBQ3pMLEtBQU4sQ0FBWUMsVUFBWixHQUF5QixTQUF6QjtBQUNILFNBRkQsTUFFTztBQUNId0wsVUFBQUEsS0FBSyxDQUFDekwsS0FBTixDQUFZQyxVQUFaLEdBQXlCLFFBQXpCO0FBQ0g7O0FBR0QsWUFBSWYsUUFBUSxDQUFDeU0sZUFBVCxDQUF5QnZMLFdBQXpCLEdBQXVDLElBQTNDLEVBQWlEO0FBQzdDcUwsVUFBQUEsS0FBSyxDQUFDekwsS0FBTixDQUFZcEMsS0FBWixHQUFxQnNCLFFBQVEsQ0FBQ3lNLGVBQVQsQ0FBeUJ2TCxXQUF6QixHQUF1QyxJQUF2QyxHQUE4Q29MLE1BQU0sQ0FBQ0ksV0FBdEQsR0FBcUUsSUFBekY7QUFDSCxTQUZELE1BRU87QUFDSEgsVUFBQUEsS0FBSyxDQUFDekwsS0FBTixDQUFZcEMsS0FBWixHQUFvQix1Q0FBdUM0TixNQUFNLENBQUNJLFdBQTlDLEdBQTRELEdBQWhGO0FBQ0g7QUFDSjtBQUNKLEtBaEJEO0FBaUJILEdBbEJRLEVBa0JOLEVBbEJNLENBQVQ7QUFvQkEsc0JBQU87QUFBQSw0QkFDSCw4REFBQyxrREFBRDtBQUFBLDhCQUNJO0FBQUEsa0JBQVE1RixLQUFLLElBQUk7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBc0IsZUFBTyxFQUFFdUYsUUFBUSxJQUFJO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBRTVGLFdBQVcsSUFBSTtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKLGVBSUk7QUFBTSxnQkFBUSxFQUFDLGdCQUFmO0FBQWdDLGVBQU8sRUFBRUEsV0FBVyxJQUFJO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkosZUFLSTtBQUFNLGdCQUFRLEVBQUMsVUFBZjtBQUEwQixlQUFPLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSixlQU1JO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDLGNBQXRCO0FBQXFDLFlBQUksRUFBQztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERyxlQVNIO0FBQU0sZUFBUyxFQUFFcUIsU0FBakI7QUFBQSxnQkFBNkI5RTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRHLGVBV0g7QUFBSyxRQUFFLEVBQUMsT0FBUjtBQUFnQixlQUFTLEVBQUV0Ryx5RUFBM0I7QUFBeUMsU0FBRyxFQUFDLCtCQUE3QztBQUE2RSxXQUFLLEVBQUMsTUFBbkY7QUFBMEYsV0FBSyxFQUFDLDBCQUFoRztBQUF1RyxTQUFHLEVBQUMsRUFBM0c7QUFBOEcsYUFBTyxFQUFFLE1BQU07QUFDekg0UCxRQUFBQSxNQUFNLENBQUNLLFFBQVAsQ0FBZ0I7QUFDWnJGLFVBQUFBLEdBQUcsRUFBRSxDQURPO0FBRVovRixVQUFBQSxRQUFRLEVBQUU7QUFGRSxTQUFoQjtBQUlIO0FBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRztBQUFBLGtCQUFQO0FBa0JILENBOUNEOztBQStDQSxpRUFBZTZLLE1BQWY7Ozs7Ozs7Ozs7O0FDckRhOztBQUNiUSw4Q0FBNkM7QUFDekNHLEVBQUFBLEtBQUssRUFBRTtBQURrQyxDQUE3QztBQUdBRCxlQUFBLEdBQWtCLEtBQUssQ0FBdkI7O0FBQ0EsSUFBSUcsTUFBTSxHQUFHQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBRCxDQUFSLENBQW5DOztBQUNBLElBQUlDLE9BQU8sR0FBR0QsbUJBQU8sQ0FBQyx5RkFBRCxDQUFyQjs7QUFDQSxJQUFJRSxRQUFRLEdBQUdGLG1CQUFPLENBQUMsMkRBQUQsQ0FBdEI7O0FBQ0EsSUFBSUcsZ0JBQWdCLEdBQUdILG1CQUFPLENBQUMsK0VBQUQsQ0FBOUI7O0FBQ0EsU0FBU0Qsc0JBQVQsQ0FBZ0NLLEdBQWhDLEVBQXFDO0FBQ2pDLFNBQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFYLEdBQXdCRCxHQUF4QixHQUE4QjtBQUNqQ1AsSUFBQUEsT0FBTyxFQUFFTztBQUR3QixHQUFyQztBQUdIOztBQUNELE1BQU1FLFVBQVUsR0FBRyxFQUFuQjs7QUFFQSxTQUFTQyxRQUFULENBQWtCNUQsTUFBbEIsRUFBMEI2RCxJQUExQixFQUFnQ0MsRUFBaEMsRUFBb0NDLE9BQXBDLEVBQTZDO0FBQ3pDLE1BQUksSUFBSixFQUE4QztBQUM5QyxNQUFJLENBQUMsQ0FBQyxHQUFHVCxPQUFKLEVBQWFVLFVBQWIsQ0FBd0JILElBQXhCLENBQUwsRUFBb0MsT0FGSyxDQUd6QztBQUNBO0FBQ0E7QUFDQTs7QUFDQTdELEVBQUFBLE1BQU0sQ0FBQzRELFFBQVAsQ0FBZ0JDLElBQWhCLEVBQXNCQyxFQUF0QixFQUEwQkMsT0FBMUIsRUFBbUNFLEtBQW5DLENBQTBDQyxHQUFELElBQU87QUFDNUMsY0FBMkM7QUFDdkM7QUFDQSxZQUFNQSxHQUFOO0FBQ0g7QUFDSixHQUxEO0FBTUEsUUFBTUMsU0FBUyxHQUFHSixPQUFPLElBQUksT0FBT0EsT0FBTyxDQUFDSyxNQUFmLEtBQTBCLFdBQXJDLEdBQW1ETCxPQUFPLENBQUNLLE1BQTNELEdBQW9FcEUsTUFBTSxJQUFJQSxNQUFNLENBQUNvRSxNQUF2RyxDQWJ5QyxDQWN6Qzs7QUFDQVQsRUFBQUEsVUFBVSxDQUFDRSxJQUFJLEdBQUcsR0FBUCxHQUFhQyxFQUFiLElBQW1CSyxTQUFTLEdBQUcsTUFBTUEsU0FBVCxHQUFxQixFQUFqRCxDQUFELENBQVYsR0FBbUUsSUFBbkU7QUFDSDs7QUFDRCxTQUFTRSxlQUFULENBQXlCek4sS0FBekIsRUFBZ0M7QUFDNUIsUUFBTTtBQUFFQyxJQUFBQTtBQUFGLE1BQWNELEtBQUssQ0FBQzBOLGFBQTFCO0FBQ0EsU0FBT3pOLE1BQU0sSUFBSUEsTUFBTSxLQUFLLE9BQXJCLElBQWdDRCxLQUFLLENBQUMyTixPQUF0QyxJQUFpRDNOLEtBQUssQ0FBQzROLE9BQXZELElBQWtFNU4sS0FBSyxDQUFDNk4sUUFBeEUsSUFBb0Y3TixLQUFLLENBQUM4TixNQUExRixJQUFvRzlOLEtBQUssQ0FBQytOLFdBQU4sSUFBcUIvTixLQUFLLENBQUMrTixXQUFOLENBQWtCQyxLQUFsQixLQUE0QixDQUE1SjtBQUNIOztBQUNELFNBQVNDLFdBQVQsQ0FBcUJDLENBQXJCLEVBQXdCOUUsTUFBeEIsRUFBZ0M2RCxJQUFoQyxFQUFzQ0MsRUFBdEMsRUFBMENpQixPQUExQyxFQUFtREMsT0FBbkQsRUFBNERDLE1BQTVELEVBQW9FYixNQUFwRSxFQUE0RTtBQUN4RSxRQUFNO0FBQUVjLElBQUFBO0FBQUYsTUFBZ0JKLENBQUMsQ0FBQ1IsYUFBeEI7O0FBQ0EsTUFBSVksUUFBUSxLQUFLLEdBQWIsS0FBcUJiLGVBQWUsQ0FBQ1MsQ0FBRCxDQUFmLElBQXNCLENBQUMsQ0FBQyxHQUFHeEIsT0FBSixFQUFhVSxVQUFiLENBQXdCSCxJQUF4QixDQUE1QyxDQUFKLEVBQWdGO0FBQzVFO0FBQ0E7QUFDSDs7QUFDRGlCLEVBQUFBLENBQUMsQ0FBQ0ssY0FBRixHQU53RSxDQU94RTs7QUFDQSxNQUFJRixNQUFNLElBQUksSUFBVixJQUFrQm5CLEVBQUUsQ0FBQ3NCLE9BQUgsQ0FBVyxHQUFYLEtBQW1CLENBQXpDLEVBQTRDO0FBQ3hDSCxJQUFBQSxNQUFNLEdBQUcsS0FBVDtBQUNILEdBVnVFLENBV3hFOzs7QUFDQWpGLEVBQUFBLE1BQU0sQ0FBQytFLE9BQU8sR0FBRyxTQUFILEdBQWUsTUFBdkIsQ0FBTixDQUFxQ2xCLElBQXJDLEVBQTJDQyxFQUEzQyxFQUErQztBQUMzQ2tCLElBQUFBLE9BRDJDO0FBRTNDWixJQUFBQSxNQUYyQztBQUczQ2EsSUFBQUE7QUFIMkMsR0FBL0M7QUFLSDs7QUFDRCxTQUFTdkYsSUFBVCxDQUFjOUcsS0FBZCxFQUFxQjtBQUNqQixZQUEyQztBQUN2QyxhQUFTeU0sZUFBVCxDQUF5QkMsSUFBekIsRUFBK0I7QUFDM0IsYUFBTyxJQUFJQyxLQUFKLENBQVcsZ0NBQStCRCxJQUFJLENBQUMvTyxHQUFJLGdCQUFlK08sSUFBSSxDQUFDRSxRQUFTLDZCQUE0QkYsSUFBSSxDQUFDRyxNQUFPLGFBQTlHLElBQThILFNBQWdDLENBQWhDLEdBQXFHLEVBQW5PLENBQVYsQ0FBUDtBQUNILEtBSHNDLENBSXZDOzs7QUFDQSxVQUFNQyxrQkFBa0IsR0FBRztBQUN2QjdCLE1BQUFBLElBQUksRUFBRTtBQURpQixLQUEzQjtBQUdBLFVBQU04QixhQUFhLEdBQUc3QyxNQUFNLENBQUM4QyxJQUFQLENBQVlGLGtCQUFaLENBQXRCO0FBQ0FDLElBQUFBLGFBQWEsQ0FBQ0UsT0FBZCxDQUF1QnRQLEdBQUQsSUFBTztBQUN6QixVQUFJQSxHQUFHLEtBQUssTUFBWixFQUFvQjtBQUNoQixZQUFJcUMsS0FBSyxDQUFDckMsR0FBRCxDQUFMLElBQWMsSUFBZCxJQUFzQixPQUFPcUMsS0FBSyxDQUFDckMsR0FBRCxDQUFaLEtBQXNCLFFBQXRCLElBQWtDLE9BQU9xQyxLQUFLLENBQUNyQyxHQUFELENBQVosS0FBc0IsUUFBbEYsRUFBNEY7QUFDeEYsZ0JBQU04TyxlQUFlLENBQUM7QUFDbEI5TyxZQUFBQSxHQURrQjtBQUVsQmlQLFlBQUFBLFFBQVEsRUFBRSxzQkFGUTtBQUdsQkMsWUFBQUEsTUFBTSxFQUFFN00sS0FBSyxDQUFDckMsR0FBRCxDQUFMLEtBQWUsSUFBZixHQUFzQixNQUF0QixHQUErQixPQUFPcUMsS0FBSyxDQUFDckMsR0FBRDtBQUhqQyxXQUFELENBQXJCO0FBS0g7QUFDSixPQVJELE1BUU87QUFDSDtBQUNBO0FBQ0EsY0FBTXVQLENBQUMsR0FBR3ZQLEdBQVY7QUFDSDtBQUNKLEtBZEQsRUFUdUMsQ0F3QnZDOztBQUNBLFVBQU13UCxrQkFBa0IsR0FBRztBQUN2QmpDLE1BQUFBLEVBQUUsRUFBRSxJQURtQjtBQUV2QmlCLE1BQUFBLE9BQU8sRUFBRSxJQUZjO0FBR3ZCRSxNQUFBQSxNQUFNLEVBQUUsSUFIZTtBQUl2QkQsTUFBQUEsT0FBTyxFQUFFLElBSmM7QUFLdkJnQixNQUFBQSxRQUFRLEVBQUUsSUFMYTtBQU12QnBDLE1BQUFBLFFBQVEsRUFBRSxJQU5hO0FBT3ZCUSxNQUFBQSxNQUFNLEVBQUU7QUFQZSxLQUEzQjtBQVNBLFVBQU02QixhQUFhLEdBQUduRCxNQUFNLENBQUM4QyxJQUFQLENBQVlHLGtCQUFaLENBQXRCO0FBQ0FFLElBQUFBLGFBQWEsQ0FBQ0osT0FBZCxDQUF1QnRQLEdBQUQsSUFBTztBQUN6QixZQUFNMlAsT0FBTyxHQUFHLE9BQU90TixLQUFLLENBQUNyQyxHQUFELENBQTVCOztBQUNBLFVBQUlBLEdBQUcsS0FBSyxJQUFaLEVBQWtCO0FBQ2QsWUFBSXFDLEtBQUssQ0FBQ3JDLEdBQUQsQ0FBTCxJQUFjMlAsT0FBTyxLQUFLLFFBQTFCLElBQXNDQSxPQUFPLEtBQUssUUFBdEQsRUFBZ0U7QUFDNUQsZ0JBQU1iLGVBQWUsQ0FBQztBQUNsQjlPLFlBQUFBLEdBRGtCO0FBRWxCaVAsWUFBQUEsUUFBUSxFQUFFLHNCQUZRO0FBR2xCQyxZQUFBQSxNQUFNLEVBQUVTO0FBSFUsV0FBRCxDQUFyQjtBQUtIO0FBQ0osT0FSRCxNQVFPLElBQUkzUCxHQUFHLEtBQUssUUFBWixFQUFzQjtBQUN6QixZQUFJcUMsS0FBSyxDQUFDckMsR0FBRCxDQUFMLElBQWMyUCxPQUFPLEtBQUssUUFBOUIsRUFBd0M7QUFDcEMsZ0JBQU1iLGVBQWUsQ0FBQztBQUNsQjlPLFlBQUFBLEdBRGtCO0FBRWxCaVAsWUFBQUEsUUFBUSxFQUFFLFVBRlE7QUFHbEJDLFlBQUFBLE1BQU0sRUFBRVM7QUFIVSxXQUFELENBQXJCO0FBS0g7QUFDSixPQVJNLE1BUUEsSUFBSTNQLEdBQUcsS0FBSyxTQUFSLElBQXFCQSxHQUFHLEtBQUssUUFBN0IsSUFBeUNBLEdBQUcsS0FBSyxTQUFqRCxJQUE4REEsR0FBRyxLQUFLLFVBQXRFLElBQW9GQSxHQUFHLEtBQUssVUFBaEcsRUFBNEc7QUFDL0csWUFBSXFDLEtBQUssQ0FBQ3JDLEdBQUQsQ0FBTCxJQUFjLElBQWQsSUFBc0IyUCxPQUFPLEtBQUssU0FBdEMsRUFBaUQ7QUFDN0MsZ0JBQU1iLGVBQWUsQ0FBQztBQUNsQjlPLFlBQUFBLEdBRGtCO0FBRWxCaVAsWUFBQUEsUUFBUSxFQUFFLFdBRlE7QUFHbEJDLFlBQUFBLE1BQU0sRUFBRVM7QUFIVSxXQUFELENBQXJCO0FBS0g7QUFDSixPQVJNLE1BUUE7QUFDSDtBQUNBO0FBQ0EsY0FBTUosQ0FBQyxHQUFHdlAsR0FBVjtBQUNIO0FBQ0osS0EvQkQsRUFuQ3VDLENBbUV2QztBQUNBOztBQUNBLFVBQU00UCxTQUFTLEdBQUdoRCxNQUFNLENBQUNELE9BQVAsQ0FBZWtELE1BQWYsQ0FBc0IsS0FBdEIsQ0FBbEI7O0FBQ0EsUUFBSXhOLEtBQUssQ0FBQ2dMLFFBQU4sSUFBa0IsQ0FBQ3VDLFNBQVMsQ0FBQ25ILE9BQWpDLEVBQTBDO0FBQ3RDbUgsTUFBQUEsU0FBUyxDQUFDbkgsT0FBVixHQUFvQixJQUFwQjtBQUNBaUMsTUFBQUEsT0FBTyxDQUFDb0YsSUFBUixDQUFhLHNLQUFiO0FBQ0g7QUFDSjs7QUFDRCxRQUFNQyxDQUFDLEdBQUcxTixLQUFLLENBQUNnTCxRQUFOLEtBQW1CLEtBQTdCO0FBQ0EsUUFBTTVELE1BQU0sR0FBRyxDQUFDLEdBQUd1RCxRQUFKLEVBQWNwUixTQUFkLEVBQWY7O0FBQ0EsUUFBTTtBQUFFMFIsSUFBQUEsSUFBRjtBQUFTQyxJQUFBQTtBQUFULE1BQWlCWCxNQUFNLENBQUNELE9BQVAsQ0FBZXFELE9BQWYsQ0FBdUIsTUFBSTtBQUM5QyxVQUFNLENBQUNDLFlBQUQsRUFBZUMsVUFBZixJQUE2QixDQUFDLEdBQUduRCxPQUFKLEVBQWFvRCxXQUFiLENBQXlCMUcsTUFBekIsRUFBaUNwSCxLQUFLLENBQUNpTCxJQUF2QyxFQUE2QyxJQUE3QyxDQUFuQztBQUNBLFdBQU87QUFDSEEsTUFBQUEsSUFBSSxFQUFFMkMsWUFESDtBQUVIMUMsTUFBQUEsRUFBRSxFQUFFbEwsS0FBSyxDQUFDa0wsRUFBTixHQUFXLENBQUMsR0FBR1IsT0FBSixFQUFhb0QsV0FBYixDQUF5QjFHLE1BQXpCLEVBQWlDcEgsS0FBSyxDQUFDa0wsRUFBdkMsQ0FBWCxHQUF3RDJDLFVBQVUsSUFBSUQ7QUFGdkUsS0FBUDtBQUlILEdBTnNCLEVBTXBCLENBQ0N4RyxNQURELEVBRUNwSCxLQUFLLENBQUNpTCxJQUZQLEVBR0NqTCxLQUFLLENBQUNrTCxFQUhQLENBTm9CLENBQXZCOztBQVdBLE1BQUk7QUFBRTVLLElBQUFBLFFBQUY7QUFBYTZMLElBQUFBLE9BQWI7QUFBdUJDLElBQUFBLE9BQXZCO0FBQWlDQyxJQUFBQSxNQUFqQztBQUEwQ2IsSUFBQUE7QUFBMUMsTUFBc0R4TCxLQUExRCxDQXpGaUIsQ0EwRmpCOztBQUNBLE1BQUksT0FBT00sUUFBUCxLQUFvQixRQUF4QixFQUFrQztBQUM5QkEsSUFBQUEsUUFBUSxHQUFHLGFBQWNpSyxNQUFNLENBQUNELE9BQVAsQ0FBZXlELGFBQWYsQ0FBNkIsR0FBN0IsRUFBa0MsSUFBbEMsRUFBd0N6TixRQUF4QyxDQUF6QjtBQUNILEdBN0ZnQixDQThGakI7OztBQUNBLE1BQUkwTixLQUFKOztBQUNBLFlBQTRDO0FBQ3hDLFFBQUk7QUFDQUEsTUFBQUEsS0FBSyxHQUFHekQsTUFBTSxDQUFDRCxPQUFQLENBQWVsSyxRQUFmLENBQXdCNk4sSUFBeEIsQ0FBNkIzTixRQUE3QixDQUFSO0FBQ0gsS0FGRCxDQUVFLE9BQU9nTCxHQUFQLEVBQVk7QUFDVixZQUFNLElBQUlxQixLQUFKLENBQVcsOERBQTZEM00sS0FBSyxDQUFDaUwsSUFBSyw0RkFBekUsSUFBd0ssU0FBZ0MsQ0FBaEMsR0FBc0csRUFBOVEsQ0FBVixDQUFOO0FBQ0g7QUFDSixHQU5ELE1BTU8sRUFFTjs7QUFDRCxRQUFNaUQsUUFBUSxHQUFHRixLQUFLLElBQUksT0FBT0EsS0FBUCxLQUFpQixRQUExQixJQUFzQ0EsS0FBSyxDQUFDRyxHQUE3RDtBQUNBLFFBQU0sQ0FBQ0Msa0JBQUQsRUFBcUJDLFNBQXJCLElBQWtDLENBQUMsR0FBR3pELGdCQUFKLEVBQXNCMEQsZUFBdEIsQ0FBc0M7QUFDMUVDLElBQUFBLFVBQVUsRUFBRTtBQUQ4RCxHQUF0QyxDQUF4Qzs7QUFHQSxRQUFNQyxNQUFNLEdBQUdqRSxNQUFNLENBQUNELE9BQVAsQ0FBZW1FLFdBQWYsQ0FBNEJDLEVBQUQsSUFBTTtBQUM1Q04sSUFBQUEsa0JBQWtCLENBQUNNLEVBQUQsQ0FBbEI7O0FBQ0EsUUFBSVIsUUFBSixFQUFjO0FBQ1YsVUFBSSxPQUFPQSxRQUFQLEtBQW9CLFVBQXhCLEVBQW9DQSxRQUFRLENBQUNRLEVBQUQsQ0FBUixDQUFwQyxLQUNLLElBQUksT0FBT1IsUUFBUCxLQUFvQixRQUF4QixFQUFrQztBQUNuQ0EsUUFBQUEsUUFBUSxDQUFDOUgsT0FBVCxHQUFtQnNJLEVBQW5CO0FBQ0g7QUFDSjtBQUNKLEdBUmMsRUFRWixDQUNDUixRQURELEVBRUNFLGtCQUZELENBUlksQ0FBZjs7QUFZQTdELEVBQUFBLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlaE8sU0FBZixDQUF5QixNQUFJO0FBQ3pCLFVBQU1xUyxjQUFjLEdBQUdOLFNBQVMsSUFBSVgsQ0FBYixJQUFrQixDQUFDLEdBQUdoRCxPQUFKLEVBQWFVLFVBQWIsQ0FBd0JILElBQXhCLENBQXpDO0FBQ0EsVUFBTU0sU0FBUyxHQUFHLE9BQU9DLE1BQVAsS0FBa0IsV0FBbEIsR0FBZ0NBLE1BQWhDLEdBQXlDcEUsTUFBTSxJQUFJQSxNQUFNLENBQUNvRSxNQUE1RTtBQUNBLFVBQU1vRCxZQUFZLEdBQUc3RCxVQUFVLENBQUNFLElBQUksR0FBRyxHQUFQLEdBQWFDLEVBQWIsSUFBbUJLLFNBQVMsR0FBRyxNQUFNQSxTQUFULEdBQXFCLEVBQWpELENBQUQsQ0FBL0I7O0FBQ0EsUUFBSW9ELGNBQWMsSUFBSSxDQUFDQyxZQUF2QixFQUFxQztBQUNqQzVELE1BQUFBLFFBQVEsQ0FBQzVELE1BQUQsRUFBUzZELElBQVQsRUFBZUMsRUFBZixFQUFtQjtBQUN2Qk0sUUFBQUEsTUFBTSxFQUFFRDtBQURlLE9BQW5CLENBQVI7QUFHSDtBQUNKLEdBVEQsRUFTRyxDQUNDTCxFQURELEVBRUNELElBRkQsRUFHQ29ELFNBSEQsRUFJQzdDLE1BSkQsRUFLQ2tDLENBTEQsRUFNQ3RHLE1BTkQsQ0FUSDs7QUFpQkEsUUFBTXlILFVBQVUsR0FBRztBQUNmVixJQUFBQSxHQUFHLEVBQUVLLE1BRFU7QUFFZk0sSUFBQUEsT0FBTyxFQUFHNUMsQ0FBRCxJQUFLO0FBQ1YsVUFBSThCLEtBQUssQ0FBQ2hPLEtBQU4sSUFBZSxPQUFPZ08sS0FBSyxDQUFDaE8sS0FBTixDQUFZOE8sT0FBbkIsS0FBK0IsVUFBbEQsRUFBOEQ7QUFDMURkLFFBQUFBLEtBQUssQ0FBQ2hPLEtBQU4sQ0FBWThPLE9BQVosQ0FBb0I1QyxDQUFwQjtBQUNIOztBQUNELFVBQUksQ0FBQ0EsQ0FBQyxDQUFDNkMsZ0JBQVAsRUFBeUI7QUFDckI5QyxRQUFBQSxXQUFXLENBQUNDLENBQUQsRUFBSTlFLE1BQUosRUFBWTZELElBQVosRUFBa0JDLEVBQWxCLEVBQXNCaUIsT0FBdEIsRUFBK0JDLE9BQS9CLEVBQXdDQyxNQUF4QyxFQUFnRGIsTUFBaEQsQ0FBWDtBQUNIO0FBQ0o7QUFUYyxHQUFuQjs7QUFXQXFELEVBQUFBLFVBQVUsQ0FBQ0csWUFBWCxHQUEyQjlDLENBQUQsSUFBSztBQUMzQixRQUFJLENBQUMsQ0FBQyxHQUFHeEIsT0FBSixFQUFhVSxVQUFiLENBQXdCSCxJQUF4QixDQUFMLEVBQW9DOztBQUNwQyxRQUFJK0MsS0FBSyxDQUFDaE8sS0FBTixJQUFlLE9BQU9nTyxLQUFLLENBQUNoTyxLQUFOLENBQVlnUCxZQUFuQixLQUFvQyxVQUF2RCxFQUFtRTtBQUMvRGhCLE1BQUFBLEtBQUssQ0FBQ2hPLEtBQU4sQ0FBWWdQLFlBQVosQ0FBeUI5QyxDQUF6QjtBQUNIOztBQUNEbEIsSUFBQUEsUUFBUSxDQUFDNUQsTUFBRCxFQUFTNkQsSUFBVCxFQUFlQyxFQUFmLEVBQW1CO0FBQ3ZCK0QsTUFBQUEsUUFBUSxFQUFFO0FBRGEsS0FBbkIsQ0FBUjtBQUdILEdBUkQsQ0FySmlCLENBOEpqQjtBQUNBOzs7QUFDQSxNQUFJalAsS0FBSyxDQUFDb04sUUFBTixJQUFrQlksS0FBSyxDQUFDbFEsSUFBTixLQUFlLEdBQWYsSUFBc0IsRUFBRSxVQUFVa1EsS0FBSyxDQUFDaE8sS0FBbEIsQ0FBNUMsRUFBc0U7QUFDbEUsVUFBTXVMLFNBQVMsR0FBRyxPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLEdBQWdDQSxNQUFoQyxHQUF5Q3BFLE1BQU0sSUFBSUEsTUFBTSxDQUFDb0UsTUFBNUUsQ0FEa0UsQ0FFbEU7QUFDQTs7QUFDQSxVQUFNMEQsWUFBWSxHQUFHOUgsTUFBTSxJQUFJQSxNQUFNLENBQUMrSCxjQUFqQixJQUFtQyxDQUFDLEdBQUd6RSxPQUFKLEVBQWEwRSxlQUFiLENBQTZCbEUsRUFBN0IsRUFBaUNLLFNBQWpDLEVBQTRDbkUsTUFBTSxJQUFJQSxNQUFNLENBQUNpSSxPQUE3RCxFQUFzRWpJLE1BQU0sSUFBSUEsTUFBTSxDQUFDa0ksYUFBdkYsQ0FBeEQ7QUFDQVQsSUFBQUEsVUFBVSxDQUFDNUQsSUFBWCxHQUFrQmlFLFlBQVksSUFBSSxDQUFDLEdBQUd4RSxPQUFKLEVBQWE2RSxXQUFiLENBQXlCLENBQUMsR0FBRzdFLE9BQUosRUFBYThFLFNBQWIsQ0FBdUJ0RSxFQUF2QixFQUEyQkssU0FBM0IsRUFBc0NuRSxNQUFNLElBQUlBLE1BQU0sQ0FBQ3FJLGFBQXZELENBQXpCLENBQWxDO0FBQ0g7O0FBQ0QsU0FBTyxhQUFjbEYsTUFBTSxDQUFDRCxPQUFQLENBQWVvRixZQUFmLENBQTRCMUIsS0FBNUIsRUFBbUNhLFVBQW5DLENBQXJCO0FBQ0g7O0FBQ0QsSUFBSWMsUUFBUSxHQUFHN0ksSUFBZjtBQUNBc0QsZUFBQSxHQUFrQnVGLFFBQWxCOzs7Ozs7Ozs7OztBQ2pPYTs7QUFDYnpGLDhDQUE2QztBQUN6Q0csRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FELCtCQUFBLEdBQWtDd0YsdUJBQWxDO0FBQ0F4RixrQ0FBQSxHQUFxQyxLQUFLLENBQTFDOztBQUNBLFNBQVN3Rix1QkFBVCxDQUFpQ0UsSUFBakMsRUFBdUM7QUFDbkMsU0FBT0EsSUFBSSxDQUFDQyxRQUFMLENBQWMsR0FBZCxLQUFzQkQsSUFBSSxLQUFLLEdBQS9CLEdBQXFDQSxJQUFJLENBQUNFLEtBQUwsQ0FBVyxDQUFYLEVBQWMsQ0FBQyxDQUFmLENBQXJDLEdBQXlERixJQUFoRTtBQUNIOztBQUNELE1BQU1ELDBCQUEwQixHQUFHSSxNQUFBLEdBQXFDSCxDQUFyQyxHQVEvQkYsdUJBUko7QUFTQXhGLGtDQUFBLEdBQXFDeUYsMEJBQXJDOzs7Ozs7Ozs7OztBQ2xCYTs7QUFDYjNGLDhDQUE2QztBQUN6Q0csRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FELDJCQUFBLEdBQThCQSwwQkFBQSxHQUE2QixLQUFLLENBQWhFOztBQUNBLE1BQU1pRyxtQkFBbUIsR0FBRyxPQUFPRSxJQUFQLEtBQWdCLFdBQWhCLElBQStCQSxJQUFJLENBQUNGLG1CQUFwQyxJQUEyREUsSUFBSSxDQUFDRixtQkFBTCxDQUF5QjdQLElBQXpCLENBQThCb0osTUFBOUIsQ0FBM0QsSUFBb0csVUFBUzRHLEVBQVQsRUFBYTtBQUN6SSxNQUFJQyxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxFQUFaO0FBQ0EsU0FBT0MsVUFBVSxDQUFDLFlBQVc7QUFDekJKLElBQUFBLEVBQUUsQ0FBQztBQUNDSyxNQUFBQSxVQUFVLEVBQUUsS0FEYjtBQUVDQyxNQUFBQSxhQUFhLEVBQUUsWUFBVztBQUN0QixlQUFPQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFULEVBQVksTUFBTU4sSUFBSSxDQUFDQyxHQUFMLEtBQWFGLEtBQW5CLENBQVosQ0FBUDtBQUNIO0FBSkYsS0FBRCxDQUFGO0FBTUgsR0FQZ0IsRUFPZCxDQVBjLENBQWpCO0FBUUgsQ0FWRDs7QUFXQXJHLDJCQUFBLEdBQThCaUcsbUJBQTlCOztBQUNBLE1BQU1DLGtCQUFrQixHQUFHLE9BQU9DLElBQVAsS0FBZ0IsV0FBaEIsSUFBK0JBLElBQUksQ0FBQ0Qsa0JBQXBDLElBQTBEQyxJQUFJLENBQUNELGtCQUFMLENBQXdCOVAsSUFBeEIsQ0FBNkJvSixNQUE3QixDQUExRCxJQUFrRyxVQUFTN04sRUFBVCxFQUFhO0FBQ3RJLFNBQU9rVixZQUFZLENBQUNsVixFQUFELENBQW5CO0FBQ0gsQ0FGRDs7QUFHQXFPLDBCQUFBLEdBQTZCa0csa0JBQTdCOzs7Ozs7Ozs7OztBQ3BCYTs7QUFDYnBHLDhDQUE2QztBQUN6Q0csRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FELHNCQUFBLEdBQXlCOEcsY0FBekI7QUFDQTlHLG9CQUFBLEdBQXVCK0csWUFBdkI7QUFDQS9HLDhCQUFBLEdBQWlDZ0gsc0JBQWpDO0FBQ0FoSCx5QkFBQSxHQUE0QmlILGlCQUE1Qjs7QUFDQSxJQUFJQyxzQkFBc0IsR0FBRzlHLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLGtIQUFELENBQVIsQ0FBbkQ7O0FBQ0EsSUFBSThHLG9CQUFvQixHQUFHOUcsbUJBQU8sQ0FBQyx5RkFBRCxDQUFsQzs7QUFDQSxTQUFTRCxzQkFBVCxDQUFnQ0ssR0FBaEMsRUFBcUM7QUFDakMsU0FBT0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVgsR0FBd0JELEdBQXhCLEdBQThCO0FBQ2pDUCxJQUFBQSxPQUFPLEVBQUVPO0FBRHdCLEdBQXJDO0FBR0gsRUFDRDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBTTJHLGlCQUFpQixHQUFHLElBQTFCOztBQUNBLFNBQVNDLFVBQVQsQ0FBb0I5VCxHQUFwQixFQUF5Qi9CLEdBQXpCLEVBQThCOFYsU0FBOUIsRUFBeUM7QUFDckMsTUFBSUMsS0FBSyxHQUFHL1YsR0FBRyxDQUFDZ1csR0FBSixDQUFRalUsR0FBUixDQUFaOztBQUNBLE1BQUlnVSxLQUFKLEVBQVc7QUFDUCxRQUFJLFlBQVlBLEtBQWhCLEVBQXVCO0FBQ25CLGFBQU9BLEtBQUssQ0FBQ0UsTUFBYjtBQUNIOztBQUNELFdBQU9DLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQkosS0FBaEIsQ0FBUDtBQUNIOztBQUNELE1BQUlLLFFBQUo7QUFDQSxRQUFNQyxJQUFJLEdBQUcsSUFBSUgsT0FBSixDQUFhQyxPQUFELElBQVc7QUFDaENDLElBQUFBLFFBQVEsR0FBR0QsT0FBWDtBQUNILEdBRlksQ0FBYjtBQUdBblcsRUFBQUEsR0FBRyxDQUFDc1csR0FBSixDQUFRdlUsR0FBUixFQUFhZ1UsS0FBSyxHQUFHO0FBQ2pCSSxJQUFBQSxPQUFPLEVBQUVDLFFBRFE7QUFFakJILElBQUFBLE1BQU0sRUFBRUk7QUFGUyxHQUFyQjtBQUlBLFNBQU9QLFNBQVMsR0FBR0EsU0FBUyxHQUFHUyxJQUFaLENBQWtCOUgsS0FBRCxLQUFVMkgsUUFBUSxDQUFDM0gsS0FBRCxDQUFSLEVBQWlCQSxLQUEzQixDQUFqQixDQUFILEdBQ1o0SCxJQURKO0FBRUg7O0FBQ0QsU0FBU0csV0FBVCxDQUFxQjNYLElBQXJCLEVBQTJCO0FBQ3ZCLE1BQUk7QUFDQUEsSUFBQUEsSUFBSSxHQUFHNkMsUUFBUSxDQUFDeVEsYUFBVCxDQUF1QixNQUF2QixDQUFQO0FBQ0EsV0FBTztBQUNQO0FBQ0MsT0FBQyxDQUFDbkUsTUFBTSxDQUFDeUksb0JBQVQsSUFBaUMsQ0FBQyxDQUFDL1UsUUFBUSxDQUFDZ1YsWUFBN0MsSUFBOEQ3WCxJQUFJLENBQUM4WCxPQUFMLENBQWFDLFFBQWIsQ0FBc0IsVUFBdEI7QUFGOUQ7QUFHSCxHQUxELENBS0UsT0FBT3RHLENBQVAsRUFBVTtBQUNSLFdBQU8sS0FBUDtBQUNIO0FBQ0o7O0FBQ0QsTUFBTXVHLFdBQVcsR0FBR0wsV0FBVyxFQUEvQjs7QUFDQSxTQUFTTSxjQUFULENBQXdCekgsSUFBeEIsRUFBOEJDLEVBQTlCLEVBQWtDelEsSUFBbEMsRUFBd0M7QUFDcEMsU0FBTyxJQUFJcVgsT0FBSixDQUFZLENBQUNhLEdBQUQsRUFBTUMsR0FBTixLQUFZO0FBQzNCLFFBQUl0VixRQUFRLENBQUN1VixhQUFULENBQXdCLCtCQUE4QjVILElBQUssSUFBM0QsQ0FBSixFQUFxRTtBQUNqRSxhQUFPMEgsR0FBRyxFQUFWO0FBQ0g7O0FBQ0RsWSxJQUFBQSxJQUFJLEdBQUc2QyxRQUFRLENBQUN5USxhQUFULENBQXVCLE1BQXZCLENBQVAsQ0FKMkIsQ0FLM0I7O0FBQ0EsUUFBSTdDLEVBQUosRUFBUXpRLElBQUksQ0FBQ3lRLEVBQUwsR0FBVUEsRUFBVjtBQUNSelEsSUFBQUEsSUFBSSxDQUFDcVksR0FBTCxHQUFZLFVBQVo7QUFDQXJZLElBQUFBLElBQUksQ0FBQ3NZLFdBQUwsR0FBbUI5QyxTQUFuQjtBQUNBeFYsSUFBQUEsSUFBSSxDQUFDd1ksTUFBTCxHQUFjTixHQUFkO0FBQ0FsWSxJQUFBQSxJQUFJLENBQUN5WSxPQUFMLEdBQWVOLEdBQWYsQ0FWMkIsQ0FXM0I7O0FBQ0FuWSxJQUFBQSxJQUFJLENBQUN3USxJQUFMLEdBQVlBLElBQVo7QUFDQTNOLElBQUFBLFFBQVEsQ0FBQzZWLElBQVQsQ0FBY0MsV0FBZCxDQUEwQjNZLElBQTFCO0FBQ0gsR0FkTSxDQUFQO0FBZUg7O0FBQ0QsTUFBTTRZLGdCQUFnQixHQUFHQyxNQUFNLENBQUMsa0JBQUQsQ0FBL0I7O0FBQ0EsU0FBU3BDLGNBQVQsQ0FBd0I1RixHQUF4QixFQUE2QjtBQUN6QixTQUFPcEIsTUFBTSxDQUFDQyxjQUFQLENBQXNCbUIsR0FBdEIsRUFBMkIrSCxnQkFBM0IsRUFBNkMsRUFBN0MsQ0FBUDtBQUVIOztBQUNELFNBQVNsQyxZQUFULENBQXNCN0YsR0FBdEIsRUFBMkI7QUFDdkIsU0FBT0EsR0FBRyxJQUFJK0gsZ0JBQWdCLElBQUkvSCxHQUFsQztBQUNIOztBQUNELFNBQVNpSSxZQUFULENBQXNCQyxHQUF0QixFQUEyQkMsTUFBM0IsRUFBbUM7QUFDL0IsU0FBTyxJQUFJM0IsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVTJCLE1BQVYsS0FBbUI7QUFDbENELElBQUFBLE1BQU0sR0FBR25XLFFBQVEsQ0FBQ3lRLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBVCxDQURrQyxDQUVsQztBQUNBO0FBQ0E7O0FBQ0EwRixJQUFBQSxNQUFNLENBQUNSLE1BQVAsR0FBZ0JsQixPQUFoQjs7QUFDQTBCLElBQUFBLE1BQU0sQ0FBQ1AsT0FBUCxHQUFpQixNQUFJUSxNQUFNLENBQUN4QyxjQUFjLENBQUMsSUFBSXZFLEtBQUosQ0FBVywwQkFBeUI2RyxHQUFJLEVBQXhDLENBQUQsQ0FBZixDQUEzQixDQU5rQyxDQVFsQztBQUNBOzs7QUFDQUMsSUFBQUEsTUFBTSxDQUFDVixXQUFQLEdBQXFCOUMsU0FBckIsQ0FWa0MsQ0FXbEM7QUFDQTs7QUFDQXdELElBQUFBLE1BQU0sQ0FBQ0QsR0FBUCxHQUFhQSxHQUFiO0FBQ0FsVyxJQUFBQSxRQUFRLENBQUNxVyxJQUFULENBQWNQLFdBQWQsQ0FBMEJLLE1BQTFCO0FBQ0gsR0FmTSxDQUFQO0FBZ0JILEVBQ0Q7QUFDQTs7O0FBQ0EsSUFBSUcsZUFBSixFQUNBOztBQUNBLFNBQVNDLHlCQUFULENBQW1DbkcsQ0FBbkMsRUFBc0NvRyxFQUF0QyxFQUEwQ3hJLEdBQTFDLEVBQStDO0FBQzNDLFNBQU8sSUFBSXdHLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVUyQixNQUFWLEtBQW1CO0FBQ2xDLFFBQUlLLFNBQVMsR0FBRyxLQUFoQjtBQUNBckcsSUFBQUEsQ0FBQyxDQUFDeUUsSUFBRixDQUFRNkIsQ0FBRCxJQUFLO0FBQ1I7QUFDQUQsTUFBQUEsU0FBUyxHQUFHLElBQVo7QUFDQWhDLE1BQUFBLE9BQU8sQ0FBQ2lDLENBQUQsQ0FBUDtBQUNILEtBSkQsRUFJRzNJLEtBSkgsQ0FJU3FJLE1BSlQsRUFGa0MsQ0FPbEM7QUFDQTs7QUFDQSxjQUE0QztBQUN4QyxPQUFDRSxlQUFlLElBQUk5QixPQUFPLENBQUNDLE9BQVIsRUFBcEIsRUFBdUNJLElBQXZDLENBQTRDLE1BQUk7QUFDNUMsU0FBQyxHQUFHWixvQkFBSixFQUEwQmxCLG1CQUExQixDQUE4QyxNQUFJTyxVQUFVLENBQUMsTUFBSTtBQUN6RCxjQUFJLENBQUNtRCxTQUFMLEVBQWdCO0FBQ1pMLFlBQUFBLE1BQU0sQ0FBQ3BJLEdBQUQsQ0FBTjtBQUNIO0FBQ0osU0FKdUQsRUFJckR3SSxFQUpxRCxDQUE1RDtBQU1ILE9BUEQ7QUFRSDs7QUFDRCxlQUE0QyxFQU8zQztBQUNKLEdBM0JNLENBQVA7QUE0Qkg7O0FBQ0QsU0FBUzFDLHNCQUFULEdBQWtDO0FBQzlCLE1BQUliLElBQUksQ0FBQzBELGdCQUFULEVBQTJCO0FBQ3ZCLFdBQU9uQyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0J4QixJQUFJLENBQUMwRCxnQkFBckIsQ0FBUDtBQUNIOztBQUNELFFBQU1DLGVBQWUsR0FBRyxJQUFJcEMsT0FBSixDQUFhQyxPQUFELElBQVc7QUFDM0M7QUFDQSxVQUFNdkIsRUFBRSxHQUFHRCxJQUFJLENBQUM0RCxtQkFBaEI7O0FBQ0E1RCxJQUFBQSxJQUFJLENBQUM0RCxtQkFBTCxHQUEyQixNQUFJO0FBQzNCcEMsTUFBQUEsT0FBTyxDQUFDeEIsSUFBSSxDQUFDMEQsZ0JBQU4sQ0FBUDtBQUNBekQsTUFBQUEsRUFBRSxJQUFJQSxFQUFFLEVBQVI7QUFDSCxLQUhEO0FBSUgsR0FQdUIsQ0FBeEI7QUFRQSxTQUFPcUQseUJBQXlCLENBQUNLLGVBQUQsRUFBa0IxQyxpQkFBbEIsRUFBcUNOLGNBQWMsQ0FBQyxJQUFJdkUsS0FBSixDQUFVLHNDQUFWLENBQUQsQ0FBbkQsQ0FBaEM7QUFDSDs7QUFDRCxTQUFTeUgsZ0JBQVQsQ0FBMEJDLFdBQTFCLEVBQXVDclosS0FBdkMsRUFBOEM7QUFDMUMsWUFBNEM7QUFDeEMsV0FBTzhXLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQjtBQUNuQnVDLE1BQUFBLE9BQU8sRUFBRSxDQUNMRCxXQUFXLEdBQUcsNEJBQWQsR0FBNkNFLFNBQVMsQ0FBQyxDQUFDLEdBQUdqRCxzQkFBSixFQUE0QmhILE9BQTVCLENBQW9DdFAsS0FBcEMsRUFBMkMsS0FBM0MsQ0FBRCxDQURqRCxDQURVO0FBSW5CO0FBQ0F3WixNQUFBQSxHQUFHLEVBQUU7QUFMYyxLQUFoQixDQUFQO0FBT0g7O0FBQ0QsU0FBT3BELHNCQUFzQixHQUFHZSxJQUF6QixDQUErQnNDLFFBQUQsSUFBWTtBQUM3QyxRQUFJLEVBQUV6WixLQUFLLElBQUl5WixRQUFYLENBQUosRUFBMEI7QUFDdEIsWUFBTXZELGNBQWMsQ0FBQyxJQUFJdkUsS0FBSixDQUFXLDJCQUEwQjNSLEtBQU0sRUFBM0MsQ0FBRCxDQUFwQjtBQUNIOztBQUNELFVBQU0wWixRQUFRLEdBQUdELFFBQVEsQ0FBQ3paLEtBQUQsQ0FBUixDQUFnQlksR0FBaEIsQ0FBcUIrVixLQUFELElBQVMwQyxXQUFXLEdBQUcsU0FBZCxHQUEwQkUsU0FBUyxDQUFDNUMsS0FBRCxDQUFoRSxDQUFqQjtBQUVBLFdBQU87QUFDSDJDLE1BQUFBLE9BQU8sRUFBRUksUUFBUSxDQUFDQyxNQUFULENBQWlCQyxDQUFELElBQUtBLENBQUMsQ0FBQzdFLFFBQUYsQ0FBVyxLQUFYLENBQXJCLENBRE47QUFHSHlFLE1BQUFBLEdBQUcsRUFBRUUsUUFBUSxDQUFDQyxNQUFULENBQWlCQyxDQUFELElBQUtBLENBQUMsQ0FBQzdFLFFBQUYsQ0FBVyxNQUFYLENBQXJCO0FBSEYsS0FBUDtBQU1ILEdBWk0sQ0FBUDtBQWFIOztBQUNELFNBQVNzQixpQkFBVCxDQUEyQmdELFdBQTNCLEVBQXdDO0FBQ3BDLFFBQU1RLFdBQVcsR0FBRyxJQUFJQyxHQUFKLEVBQXBCO0FBQ0EsUUFBTUMsYUFBYSxHQUFHLElBQUlELEdBQUosRUFBdEI7QUFDQSxRQUFNRSxXQUFXLEdBQUcsSUFBSUYsR0FBSixFQUFwQjtBQUNBLFFBQU1HLE1BQU0sR0FBRyxJQUFJSCxHQUFKLEVBQWY7O0FBQ0EsV0FBU0ksa0JBQVQsQ0FBNEIxQixHQUE1QixFQUFpQztBQUM3QixRQUFJdkIsSUFBSSxHQUFHOEMsYUFBYSxDQUFDbkQsR0FBZCxDQUFrQjRCLEdBQWxCLENBQVg7O0FBQ0EsUUFBSXZCLElBQUosRUFBVTtBQUNOLGFBQU9BLElBQVA7QUFDSCxLQUo0QixDQUs3Qjs7O0FBQ0EsUUFBSTNVLFFBQVEsQ0FBQ3VWLGFBQVQsQ0FBd0IsZ0JBQWVXLEdBQUksSUFBM0MsQ0FBSixFQUFxRDtBQUNqRCxhQUFPMUIsT0FBTyxDQUFDQyxPQUFSLEVBQVA7QUFDSDs7QUFDRGdELElBQUFBLGFBQWEsQ0FBQzdDLEdBQWQsQ0FBa0JzQixHQUFsQixFQUF1QnZCLElBQUksR0FBR3NCLFlBQVksQ0FBQ0MsR0FBRCxDQUExQztBQUNBLFdBQU92QixJQUFQO0FBQ0g7O0FBQ0QsV0FBU2tELGVBQVQsQ0FBeUJsSyxJQUF6QixFQUErQjtBQUMzQixRQUFJZ0gsSUFBSSxHQUFHK0MsV0FBVyxDQUFDcEQsR0FBWixDQUFnQjNHLElBQWhCLENBQVg7O0FBQ0EsUUFBSWdILElBQUosRUFBVTtBQUNOLGFBQU9BLElBQVA7QUFDSDs7QUFDRCtDLElBQUFBLFdBQVcsQ0FBQzlDLEdBQVosQ0FBZ0JqSCxJQUFoQixFQUFzQmdILElBQUksR0FBR21ELEtBQUssQ0FBQ25LLElBQUQsQ0FBTCxDQUFZa0gsSUFBWixDQUFrQlEsR0FBRCxJQUFPO0FBQ2pELFVBQUksQ0FBQ0EsR0FBRyxDQUFDMEMsRUFBVCxFQUFhO0FBQ1QsY0FBTSxJQUFJMUksS0FBSixDQUFXLDhCQUE2QjFCLElBQUssRUFBN0MsQ0FBTjtBQUNIOztBQUNELGFBQU8wSCxHQUFHLENBQUMyQyxJQUFKLEdBQVduRCxJQUFYLENBQWlCbUQsSUFBRCxLQUFTO0FBQ3hCckssUUFBQUEsSUFBSSxFQUFFQSxJQURrQjtBQUV4Qm5QLFFBQUFBLE9BQU8sRUFBRXdaO0FBRmUsT0FBVCxDQUFoQixDQUFQO0FBS0gsS0FUNEIsRUFTMUJqSyxLQVQwQixDQVNuQkMsR0FBRCxJQUFPO0FBQ1osWUFBTTRGLGNBQWMsQ0FBQzVGLEdBQUQsQ0FBcEI7QUFDSCxLQVg0QixDQUE3QjtBQVlBLFdBQU8yRyxJQUFQO0FBQ0g7O0FBQ0QsU0FBTztBQUNIc0QsSUFBQUEsY0FBYyxDQUFFdmEsS0FBRixFQUFTO0FBQ25CLGFBQU95VyxVQUFVLENBQUN6VyxLQUFELEVBQVE2WixXQUFSLENBQWpCO0FBQ0gsS0FIRTs7QUFJSFcsSUFBQUEsWUFBWSxDQUFFeGEsS0FBRixFQUFTeWEsT0FBVCxFQUFrQjtBQUMxQjNELE1BQUFBLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQjBELE9BQWhCLEVBQXlCdEQsSUFBekIsQ0FBK0J1RCxFQUFELElBQU1BLEVBQUUsRUFBdEMsRUFDRXZELElBREYsQ0FDUS9ILE9BQUQsS0FBWTtBQUNYdUwsUUFBQUEsU0FBUyxFQUFFdkwsT0FBTyxJQUFJQSxPQUFPLENBQUNFLE9BQW5CLElBQThCRixPQUQ5QjtBQUVYQSxRQUFBQSxPQUFPLEVBQUVBO0FBRkUsT0FBWixDQURQLEVBS0drQixHQUFELEtBQVE7QUFDRnNLLFFBQUFBLEtBQUssRUFBRXRLO0FBREwsT0FBUixDQUxGLEVBUUU2RyxJQVJGLENBUVEwRCxLQUFELElBQVM7QUFDWixjQUFNQyxHQUFHLEdBQUdqQixXQUFXLENBQUNqRCxHQUFaLENBQWdCNVcsS0FBaEIsQ0FBWjtBQUNBNlosUUFBQUEsV0FBVyxDQUFDM0MsR0FBWixDQUFnQmxYLEtBQWhCLEVBQXVCNmEsS0FBdkI7QUFDQSxZQUFJQyxHQUFHLElBQUksYUFBYUEsR0FBeEIsRUFBNkJBLEdBQUcsQ0FBQy9ELE9BQUosQ0FBWThELEtBQVo7QUFDaEMsT0FaRDtBQWFILEtBbEJFOztBQW1CSEUsSUFBQUEsU0FBUyxDQUFFL2EsS0FBRixFQUFTZ1EsUUFBVCxFQUFtQjtBQUN4QixhQUFPeUcsVUFBVSxDQUFDelcsS0FBRCxFQUFRaWEsTUFBUixFQUFnQixNQUFJO0FBQ2pDLGNBQU1lLGlCQUFpQixHQUFHNUIsZ0JBQWdCLENBQUNDLFdBQUQsRUFBY3JaLEtBQWQsQ0FBaEIsQ0FBcUNtWCxJQUFyQyxDQUEwQyxDQUFDO0FBQUVtQyxVQUFBQSxPQUFGO0FBQVlFLFVBQUFBO0FBQVosU0FBRCxLQUFzQjtBQUN0RixpQkFBTzFDLE9BQU8sQ0FBQ21FLEdBQVIsQ0FBWSxDQUNmcEIsV0FBVyxDQUFDcUIsR0FBWixDQUFnQmxiLEtBQWhCLElBQXlCLEVBQXpCLEdBQThCOFcsT0FBTyxDQUFDbUUsR0FBUixDQUFZM0IsT0FBTyxDQUFDMVksR0FBUixDQUFZc1osa0JBQVosQ0FBWixDQURmLEVBRWZwRCxPQUFPLENBQUNtRSxHQUFSLENBQVl6QixHQUFHLENBQUM1WSxHQUFKLENBQVF1WixlQUFSLENBQVosQ0FGZSxDQUFaLENBQVA7QUFJSCxTQUx5QixFQUt2QmhELElBTHVCLENBS2pCUSxHQUFELElBQU87QUFDWCxpQkFBTyxLQUFLNEMsY0FBTCxDQUFvQnZhLEtBQXBCLEVBQTJCbVgsSUFBM0IsQ0FBaUNnRSxVQUFELEtBQWU7QUFDOUNBLFlBQUFBLFVBRDhDO0FBRTlDbmMsWUFBQUEsTUFBTSxFQUFFMlksR0FBRyxDQUFDLENBQUQ7QUFGbUMsV0FBZixDQUFoQyxDQUFQO0FBS0gsU0FYeUIsQ0FBMUI7O0FBWUEsa0JBQTRDO0FBQ3hDaUIsVUFBQUEsZUFBZSxHQUFHLElBQUk5QixPQUFKLENBQWFDLE9BQUQsSUFBVztBQUNyQyxnQkFBSWlFLGlCQUFKLEVBQXVCO0FBQ25CLHFCQUFPQSxpQkFBaUIsQ0FBQ0ksT0FBbEIsQ0FBMEIsTUFBSTtBQUNqQ3JFLGdCQUFBQSxPQUFPO0FBQ1YsZUFGTSxDQUFQO0FBR0g7QUFDSixXQU5pQixDQUFsQjtBQU9IOztBQUNELGVBQU84Qix5QkFBeUIsQ0FBQ21DLGlCQUFELEVBQW9CeEUsaUJBQXBCLEVBQXVDTixjQUFjLENBQUMsSUFBSXZFLEtBQUosQ0FBVyxtQ0FBa0MzUixLQUFNLEVBQW5ELENBQUQsQ0FBckQsQ0FBekIsQ0FBdUltWCxJQUF2SSxDQUE0SSxDQUFDO0FBQUVnRSxVQUFBQSxVQUFGO0FBQWVuYyxVQUFBQTtBQUFmLFNBQUQsS0FBNEI7QUFDM0ssZ0JBQU0yWSxHQUFHLEdBQUd6SSxNQUFNLENBQUNtTSxNQUFQLENBQWM7QUFDdEJyYyxZQUFBQSxNQUFNLEVBQUVBO0FBRGMsV0FBZCxFQUVUbWMsVUFGUyxDQUFaO0FBR0EsaUJBQU8sV0FBV0EsVUFBWCxHQUF3QkEsVUFBeEIsR0FBcUN4RCxHQUE1QztBQUNILFNBTE0sRUFLSnRILEtBTEksQ0FLR0MsR0FBRCxJQUFPO0FBQ1osY0FBSU4sUUFBSixFQUFjO0FBQ1Y7QUFDQSxrQkFBTU0sR0FBTjtBQUNIOztBQUNELGlCQUFPO0FBQ0hzSyxZQUFBQSxLQUFLLEVBQUV0SztBQURKLFdBQVA7QUFHSCxTQWJNLENBQVA7QUFjSCxPQXBDZ0IsQ0FBakI7QUFxQ0gsS0F6REU7O0FBMERITixJQUFBQSxRQUFRLENBQUVoUSxLQUFGLEVBQVM7QUFDYjtBQUNBO0FBQ0EsVUFBSXNiLEVBQUo7O0FBQ0EsVUFBSUEsRUFBRSxHQUFHQyxTQUFTLENBQUNDLFVBQW5CLEVBQStCO0FBQzNCO0FBQ0EsWUFBSUYsRUFBRSxDQUFDRyxRQUFILElBQWUsS0FBS3JHLElBQUwsQ0FBVWtHLEVBQUUsQ0FBQ0ksYUFBYixDQUFuQixFQUFnRCxPQUFPNUUsT0FBTyxDQUFDQyxPQUFSLEVBQVA7QUFDbkQ7O0FBQ0QsYUFBT3FDLGdCQUFnQixDQUFDQyxXQUFELEVBQWNyWixLQUFkLENBQWhCLENBQXFDbVgsSUFBckMsQ0FBMkN3RSxNQUFELElBQVU3RSxPQUFPLENBQUNtRSxHQUFSLENBQVl4RCxXQUFXLEdBQUdrRSxNQUFNLENBQUNyQyxPQUFQLENBQWUxWSxHQUFmLENBQW9CNlgsTUFBRCxJQUFVZixjQUFjLENBQUNlLE1BQUQsRUFBUyxRQUFULENBQTNDLENBQUgsR0FDMUUsRUFEbUQsQ0FBcEQsRUFFTHRCLElBRkssQ0FFQSxNQUFJO0FBQ1AsU0FBQyxHQUFHWixvQkFBSixFQUEwQmxCLG1CQUExQixDQUE4QyxNQUFJLEtBQUswRixTQUFMLENBQWUvYSxLQUFmLEVBQXNCLElBQXRCLEVBQTRCcVEsS0FBNUIsQ0FBa0MsTUFBSSxDQUNuRixDQUQ2QyxDQUFsRDtBQUdILE9BTk0sRUFNSkEsS0FOSSxFQU1FO0FBQ1QsWUFBSSxDQUNILENBUk0sQ0FBUDtBQVNIOztBQTNFRSxHQUFQO0FBNkVIOzs7Ozs7Ozs7OztBQ3RSWTs7QUFDYm5CLDhDQUE2QztBQUN6Q0csRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FILDBDQUF5QztBQUNyQzBNLEVBQUFBLFVBQVUsRUFBRSxJQUR5QjtBQUVyQ2hGLEVBQUFBLEdBQUcsRUFBRSxZQUFXO0FBQ1osV0FBT2xILE9BQU8sQ0FBQ0osT0FBZjtBQUNIO0FBSm9DLENBQXpDO0FBTUFKLDhDQUE2QztBQUN6QzBNLEVBQUFBLFVBQVUsRUFBRSxJQUQ2QjtBQUV6Q2hGLEVBQUFBLEdBQUcsRUFBRSxZQUFXO0FBQ1osV0FBT2lGLFdBQVcsQ0FBQ3ZNLE9BQW5CO0FBQ0g7QUFKd0MsQ0FBN0M7QUFNQUYsaUJBQUEsR0FBb0I3USxTQUFwQjtBQUNBNlEsb0JBQUEsR0FBdUIwTSxZQUF2QjtBQUNBMU0sZ0NBQUEsR0FBbUMyTSx3QkFBbkM7QUFDQTNNLGVBQUEsR0FBa0IsS0FBSyxDQUF2Qjs7QUFDQSxJQUFJRyxNQUFNLEdBQUdDLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLG9CQUFELENBQVIsQ0FBbkM7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHRixzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyx5RkFBRCxDQUFSLENBQXBDOztBQUNBLElBQUl1TSxjQUFjLEdBQUd2TSxtQkFBTyxDQUFDLGtFQUFELENBQTVCOztBQUNBLElBQUlvTSxXQUFXLEdBQUdyTSxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxxRUFBRCxDQUFSLENBQXhDOztBQUNBLFNBQVNELHNCQUFULENBQWdDSyxHQUFoQyxFQUFxQztBQUNqQyxTQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWCxHQUF3QkQsR0FBeEIsR0FBOEI7QUFDakNQLElBQUFBLE9BQU8sRUFBRU87QUFEd0IsR0FBckM7QUFHSDs7QUFDRCxNQUFNb00sZUFBZSxHQUFHO0FBQ3BCN1AsRUFBQUEsTUFBTSxFQUFFLElBRFk7QUFFcEI4UCxFQUFBQSxjQUFjLEVBQUUsRUFGSTs7QUFHcEJDLEVBQUFBLEtBQUssQ0FBRTNHLEVBQUYsRUFBTTtBQUNQLFFBQUksS0FBS3BKLE1BQVQsRUFBaUIsT0FBT29KLEVBQUUsRUFBVDs7QUFDakIsZUFBbUMsRUFFbEM7QUFDSjs7QUFSbUIsQ0FBeEIsRUFVQTs7QUFDQSxNQUFNNEcsaUJBQWlCLEdBQUcsQ0FDdEIsVUFEc0IsRUFFdEIsT0FGc0IsRUFHdEIsT0FIc0IsRUFJdEIsUUFKc0IsRUFLdEIsWUFMc0IsRUFNdEIsWUFOc0IsRUFPdEIsVUFQc0IsRUFRdEIsUUFSc0IsRUFTdEIsU0FUc0IsRUFVdEIsZUFWc0IsRUFXdEIsU0FYc0IsRUFZdEIsV0Fac0IsRUFhdEIsZ0JBYnNCLEVBY3RCLGVBZHNCLENBQTFCO0FBZ0JBLE1BQU1DLFlBQVksR0FBRyxDQUNqQixrQkFEaUIsRUFFakIscUJBRmlCLEVBR2pCLHFCQUhpQixFQUlqQixrQkFKaUIsRUFLakIsaUJBTGlCLEVBTWpCLG9CQU5pQixDQUFyQjtBQVFBLE1BQU1DLGdCQUFnQixHQUFHLENBQ3JCLE1BRHFCLEVBRXJCLFNBRnFCLEVBR3JCLFFBSHFCLEVBSXJCLE1BSnFCLEVBS3JCLFVBTHFCLEVBTXJCLGdCQU5xQixDQUF6QixFQVFBOztBQUNBcE4sTUFBTSxDQUFDQyxjQUFQLENBQXNCOE0sZUFBdEIsRUFBdUMsUUFBdkMsRUFBaUQ7QUFDN0NyRixFQUFBQSxHQUFHLEdBQUk7QUFDSCxXQUFPbEgsT0FBTyxDQUFDSixPQUFSLENBQWdCaU4sTUFBdkI7QUFDSDs7QUFINEMsQ0FBakQ7QUFLQUgsaUJBQWlCLENBQUNuSyxPQUFsQixDQUEyQnVLLEtBQUQsSUFBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBdE4sRUFBQUEsTUFBTSxDQUFDQyxjQUFQLENBQXNCOE0sZUFBdEIsRUFBdUNPLEtBQXZDLEVBQThDO0FBQzFDNUYsSUFBQUEsR0FBRyxHQUFJO0FBQ0gsWUFBTXhLLE1BQU0sR0FBR3FRLFNBQVMsRUFBeEI7QUFDQSxhQUFPclEsTUFBTSxDQUFDb1EsS0FBRCxDQUFiO0FBQ0g7O0FBSnlDLEdBQTlDO0FBTUgsQ0FYRDtBQVlBRixnQkFBZ0IsQ0FBQ3JLLE9BQWpCLENBQTBCdUssS0FBRCxJQUFTO0FBQzlCUCxFQUFBQSxlQUFlLENBQUNPLEtBQUQsQ0FBZixHQUF5QixDQUFDLEdBQUc5SyxJQUFKLEtBQVc7QUFDaEMsVUFBTXRGLE1BQU0sR0FBR3FRLFNBQVMsRUFBeEI7QUFDQSxXQUFPclEsTUFBTSxDQUFDb1EsS0FBRCxDQUFOLENBQWMsR0FBRzlLLElBQWpCLENBQVA7QUFDSCxHQUhEO0FBSUgsQ0FMRDtBQU1BMkssWUFBWSxDQUFDcEssT0FBYixDQUFzQmpQLEtBQUQsSUFBUztBQUMxQmlaLEVBQUFBLGVBQWUsQ0FBQ0UsS0FBaEIsQ0FBc0IsTUFBSTtBQUN0QnpNLElBQUFBLE9BQU8sQ0FBQ0osT0FBUixDQUFnQmlOLE1BQWhCLENBQXVCRyxFQUF2QixDQUEwQjFaLEtBQTFCLEVBQWlDLENBQUMsR0FBRzBPLElBQUosS0FBVztBQUN4QyxZQUFNaUwsVUFBVSxHQUFJLEtBQUkzWixLQUFLLENBQUM0WixNQUFOLENBQWEsQ0FBYixFQUFnQkMsV0FBaEIsRUFBOEIsR0FBRTdaLEtBQUssQ0FBQzhaLFNBQU4sQ0FBZ0IsQ0FBaEIsQ0FBbUIsRUFBM0U7QUFDQSxZQUFNQyxnQkFBZ0IsR0FBR2QsZUFBekI7O0FBQ0EsVUFBSWMsZ0JBQWdCLENBQUNKLFVBQUQsQ0FBcEIsRUFBa0M7QUFDOUIsWUFBSTtBQUNBSSxVQUFBQSxnQkFBZ0IsQ0FBQ0osVUFBRCxDQUFoQixDQUE2QixHQUFHakwsSUFBaEM7QUFDSCxTQUZELENBRUUsT0FBT3BCLEdBQVAsRUFBWTtBQUNWakQsVUFBQUEsT0FBTyxDQUFDdU4sS0FBUixDQUFlLHdDQUF1QytCLFVBQVcsRUFBakU7QUFDQXRQLFVBQUFBLE9BQU8sQ0FBQ3VOLEtBQVIsQ0FBZSxHQUFFdEssR0FBRyxDQUFDdEcsT0FBUSxLQUFJc0csR0FBRyxDQUFDME0sS0FBTSxFQUEzQztBQUNIO0FBQ0o7QUFDSixLQVhEO0FBWUgsR0FiRDtBQWNILENBZkQ7O0FBZ0JBLFNBQVNQLFNBQVQsR0FBcUI7QUFDakIsTUFBSSxDQUFDUixlQUFlLENBQUM3UCxNQUFyQixFQUE2QjtBQUN6QixVQUFNcEMsT0FBTyxHQUFHLGdDQUFnQyxxRUFBaEQ7QUFDQSxVQUFNLElBQUkySCxLQUFKLENBQVUzSCxPQUFWLENBQU47QUFDSDs7QUFDRCxTQUFPaVMsZUFBZSxDQUFDN1AsTUFBdkI7QUFDSDs7QUFDRCxJQUFJdUksUUFBUSxHQUFHc0gsZUFBZjtBQUNBN00sZUFBQSxHQUFrQnVGLFFBQWxCOztBQUNBLFNBQVNwVyxTQUFULEdBQXFCO0FBQ2pCLFNBQU9nUixNQUFNLENBQUNELE9BQVAsQ0FBZTJOLFVBQWYsQ0FBMEJqQixjQUFjLENBQUNrQixhQUF6QyxDQUFQO0FBQ0g7O0FBQ0QsU0FBU3BCLFlBQVQsQ0FBc0IsR0FBR3BLLElBQXpCLEVBQStCO0FBQzNCdUssRUFBQUEsZUFBZSxDQUFDN1AsTUFBaEIsR0FBeUIsSUFBSXNELE9BQU8sQ0FBQ0osT0FBWixDQUFvQixHQUFHb0MsSUFBdkIsQ0FBekI7QUFDQXVLLEVBQUFBLGVBQWUsQ0FBQ0MsY0FBaEIsQ0FBK0JqSyxPQUEvQixDQUF3Q3VELEVBQUQsSUFBTUEsRUFBRSxFQUEvQztBQUVBeUcsRUFBQUEsZUFBZSxDQUFDQyxjQUFoQixHQUFpQyxFQUFqQztBQUNBLFNBQU9ELGVBQWUsQ0FBQzdQLE1BQXZCO0FBQ0g7O0FBQ0QsU0FBUzJQLHdCQUFULENBQWtDM1AsTUFBbEMsRUFBMEM7QUFDdEMsUUFBTXVELFFBQVEsR0FBR3ZELE1BQWpCO0FBQ0EsUUFBTStRLFFBQVEsR0FBRyxFQUFqQjs7QUFFQSxPQUFLLE1BQU1DLFFBQVgsSUFBdUJoQixpQkFBdkIsRUFBeUM7QUFDckMsUUFBSSxPQUFPek0sUUFBUSxDQUFDeU4sUUFBRCxDQUFmLEtBQThCLFFBQWxDLEVBQTRDO0FBQ3hDRCxNQUFBQSxRQUFRLENBQUNDLFFBQUQsQ0FBUixHQUFxQmxPLE1BQU0sQ0FBQ21NLE1BQVAsQ0FBY2dDLEtBQUssQ0FBQ0MsT0FBTixDQUFjM04sUUFBUSxDQUFDeU4sUUFBRCxDQUF0QixJQUFvQyxFQUFwQyxHQUF5QyxFQUF2RCxFQUNsQnpOLFFBQVEsQ0FBQ3lOLFFBQUQsQ0FEVSxDQUFyQixDQUN1QjtBQUR2QjtBQUdBO0FBQ0g7O0FBQ0RELElBQUFBLFFBQVEsQ0FBQ0MsUUFBRCxDQUFSLEdBQXFCek4sUUFBUSxDQUFDeU4sUUFBRCxDQUE3QjtBQUNILEdBWnFDLENBYXRDOzs7QUFDQUQsRUFBQUEsUUFBUSxDQUFDWixNQUFULEdBQWtCN00sT0FBTyxDQUFDSixPQUFSLENBQWdCaU4sTUFBbEM7QUFDQUQsRUFBQUEsZ0JBQWdCLENBQUNySyxPQUFqQixDQUEwQnVLLEtBQUQsSUFBUztBQUM5QlcsSUFBQUEsUUFBUSxDQUFDWCxLQUFELENBQVIsR0FBa0IsQ0FBQyxHQUFHOUssSUFBSixLQUFXO0FBQ3pCLGFBQU8vQixRQUFRLENBQUM2TSxLQUFELENBQVIsQ0FBZ0IsR0FBRzlLLElBQW5CLENBQVA7QUFDSCxLQUZEO0FBR0gsR0FKRDtBQUtBLFNBQU95TCxRQUFQO0FBQ0g7Ozs7Ozs7Ozs7O0FDeEpZOztBQUNiak8sOENBQTZDO0FBQ3pDRyxFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQUQsdUJBQUEsR0FBMEJrRSxlQUExQjs7QUFDQSxJQUFJL0QsTUFBTSxHQUFHRSxtQkFBTyxDQUFDLG9CQUFELENBQXBCOztBQUNBLElBQUk4RyxvQkFBb0IsR0FBRzlHLG1CQUFPLENBQUMseUZBQUQsQ0FBbEM7O0FBQ0EsTUFBTThOLHVCQUF1QixHQUFHLE9BQU9DLG9CQUFQLEtBQWdDLFdBQWhFOztBQUNBLFNBQVNsSyxlQUFULENBQXlCO0FBQUVDLEVBQUFBLFVBQUY7QUFBZWtLLEVBQUFBO0FBQWYsQ0FBekIsRUFBcUQ7QUFDakQsUUFBTUMsVUFBVSxHQUFHRCxRQUFRLElBQUksQ0FBQ0YsdUJBQWhDO0FBQ0EsUUFBTUksU0FBUyxHQUFHLENBQUMsR0FBR3BPLE1BQUosRUFBWWlELE1BQVosRUFBbEI7QUFDQSxRQUFNLENBQUNvTCxPQUFELEVBQVVDLFVBQVYsSUFBd0IsQ0FBQyxHQUFHdE8sTUFBSixFQUFZL1EsUUFBWixDQUFxQixLQUFyQixDQUE5QjtBQUNBLFFBQU1nVixNQUFNLEdBQUcsQ0FBQyxHQUFHakUsTUFBSixFQUFZa0UsV0FBWixDQUF5QkMsRUFBRCxJQUFNO0FBQ3pDLFFBQUlpSyxTQUFTLENBQUN2UyxPQUFkLEVBQXVCO0FBQ25CdVMsTUFBQUEsU0FBUyxDQUFDdlMsT0FBVjtBQUNBdVMsTUFBQUEsU0FBUyxDQUFDdlMsT0FBVixHQUFvQjBTLFNBQXBCO0FBQ0g7O0FBQ0QsUUFBSUosVUFBVSxJQUFJRSxPQUFsQixFQUEyQjs7QUFDM0IsUUFBSWxLLEVBQUUsSUFBSUEsRUFBRSxDQUFDcUssT0FBYixFQUFzQjtBQUNsQkosTUFBQUEsU0FBUyxDQUFDdlMsT0FBVixHQUFvQjRTLE9BQU8sQ0FBQ3RLLEVBQUQsRUFBTUwsU0FBRCxJQUFhQSxTQUFTLElBQUl3SyxVQUFVLENBQUN4SyxTQUFELENBQXpDLEVBQ3pCO0FBQ0VFLFFBQUFBO0FBREYsT0FEeUIsQ0FBM0I7QUFJSDtBQUNKLEdBWmMsRUFZWixDQUNDbUssVUFERCxFQUVDbkssVUFGRCxFQUdDcUssT0FIRCxDQVpZLENBQWY7QUFpQkEsR0FBQyxHQUFHck8sTUFBSixFQUFZak8sU0FBWixDQUFzQixNQUFJO0FBQ3RCLFFBQUksQ0FBQ2ljLHVCQUFMLEVBQThCO0FBQzFCLFVBQUksQ0FBQ0ssT0FBTCxFQUFjO0FBQ1YsY0FBTUssWUFBWSxHQUFHLENBQUMsR0FBRzFILG9CQUFKLEVBQTBCbEIsbUJBQTFCLENBQThDLE1BQUl3SSxVQUFVLENBQUMsSUFBRCxDQUE1RCxDQUFyQjtBQUVBLGVBQU8sTUFBSSxDQUFDLEdBQUd0SCxvQkFBSixFQUEwQmpCLGtCQUExQixDQUE2QzJJLFlBQTdDLENBQVg7QUFFSDtBQUNKO0FBQ0osR0FURCxFQVNHLENBQ0NMLE9BREQsQ0FUSDtBQVlBLFNBQU8sQ0FDSHBLLE1BREcsRUFFSG9LLE9BRkcsQ0FBUDtBQUlIOztBQUNELFNBQVNJLE9BQVQsQ0FBaUJFLE9BQWpCLEVBQTBCQyxRQUExQixFQUFvQ2hPLE9BQXBDLEVBQTZDO0FBQ3pDLFFBQU07QUFBRXBQLElBQUFBLEVBQUY7QUFBT3FkLElBQUFBLFFBQVA7QUFBa0JDLElBQUFBO0FBQWxCLE1BQWdDQyxjQUFjLENBQUNuTyxPQUFELENBQXBEO0FBQ0FrTyxFQUFBQSxRQUFRLENBQUNuSCxHQUFULENBQWFnSCxPQUFiLEVBQXNCQyxRQUF0QjtBQUNBQyxFQUFBQSxRQUFRLENBQUNKLE9BQVQsQ0FBaUJFLE9BQWpCO0FBQ0EsU0FBTyxTQUFTUCxTQUFULEdBQXFCO0FBQ3hCVSxJQUFBQSxRQUFRLENBQUNFLE1BQVQsQ0FBZ0JMLE9BQWhCO0FBQ0FFLElBQUFBLFFBQVEsQ0FBQ1QsU0FBVCxDQUFtQk8sT0FBbkIsRUFGd0IsQ0FHeEI7O0FBQ0EsUUFBSUcsUUFBUSxDQUFDRyxJQUFULEtBQWtCLENBQXRCLEVBQXlCO0FBQ3JCSixNQUFBQSxRQUFRLENBQUNLLFVBQVQ7QUFDQUMsTUFBQUEsU0FBUyxDQUFDSCxNQUFWLENBQWlCeGQsRUFBakI7QUFDSDtBQUNKLEdBUkQ7QUFTSDs7QUFDRCxNQUFNMmQsU0FBUyxHQUFHLElBQUk1RSxHQUFKLEVBQWxCOztBQUNBLFNBQVN3RSxjQUFULENBQXdCbk8sT0FBeEIsRUFBaUM7QUFDN0IsUUFBTXBQLEVBQUUsR0FBR29QLE9BQU8sQ0FBQ29ELFVBQVIsSUFBc0IsRUFBakM7QUFDQSxNQUFJNEosUUFBUSxHQUFHdUIsU0FBUyxDQUFDOUgsR0FBVixDQUFjN1YsRUFBZCxDQUFmOztBQUNBLE1BQUlvYyxRQUFKLEVBQWM7QUFDVixXQUFPQSxRQUFQO0FBQ0g7O0FBQ0QsUUFBTWtCLFFBQVEsR0FBRyxJQUFJdkUsR0FBSixFQUFqQjtBQUNBLFFBQU1zRSxRQUFRLEdBQUcsSUFBSVosb0JBQUosQ0FBMEJtQixPQUFELElBQVc7QUFDakRBLElBQUFBLE9BQU8sQ0FBQzFNLE9BQVIsQ0FBaUIwRSxLQUFELElBQVM7QUFDckIsWUFBTXdILFFBQVEsR0FBR0UsUUFBUSxDQUFDekgsR0FBVCxDQUFhRCxLQUFLLENBQUMxVCxNQUFuQixDQUFqQjtBQUNBLFlBQU1vUSxTQUFTLEdBQUdzRCxLQUFLLENBQUNpSSxjQUFOLElBQXdCakksS0FBSyxDQUFDa0ksaUJBQU4sR0FBMEIsQ0FBcEU7O0FBQ0EsVUFBSVYsUUFBUSxJQUFJOUssU0FBaEIsRUFBMkI7QUFDdkI4SyxRQUFBQSxRQUFRLENBQUM5SyxTQUFELENBQVI7QUFDSDtBQUNKLEtBTkQ7QUFPSCxHQVJnQixFQVFkbEQsT0FSYyxDQUFqQjtBQVNBdU8sRUFBQUEsU0FBUyxDQUFDeEgsR0FBVixDQUFjblcsRUFBZCxFQUFrQm9jLFFBQVEsR0FBRztBQUN6QnBjLElBQUFBLEVBRHlCO0FBRXpCcWQsSUFBQUEsUUFGeUI7QUFHekJDLElBQUFBO0FBSHlCLEdBQTdCO0FBS0EsU0FBT2xCLFFBQVA7QUFDSDs7Ozs7Ozs7Ozs7QUNuRlk7O0FBQ2JqTyw4Q0FBNkM7QUFDekNHLEVBQUFBLEtBQUssRUFBRTtBQURrQyxDQUE3QztBQUdBRCxlQUFBLEdBQWtCMFAsVUFBbEI7O0FBQ0EsSUFBSXZQLE1BQU0sR0FBR0Msc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFuQzs7QUFDQSxJQUFJQyxPQUFPLEdBQUdELG1CQUFPLENBQUMsMkRBQUQsQ0FBckI7O0FBQ0EsU0FBU0Qsc0JBQVQsQ0FBZ0NLLEdBQWhDLEVBQXFDO0FBQ2pDLFNBQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFYLEdBQXdCRCxHQUF4QixHQUE4QjtBQUNqQ1AsSUFBQUEsT0FBTyxFQUFFTztBQUR3QixHQUFyQztBQUdIOztBQUNELFNBQVNpUCxVQUFULENBQW9CQyxpQkFBcEIsRUFBdUM7QUFDbkMsV0FBU0MsaUJBQVQsQ0FBMkJoYSxLQUEzQixFQUFrQztBQUM5QixXQUFPLGFBQWN1SyxNQUFNLENBQUNELE9BQVAsQ0FBZXlELGFBQWYsQ0FBNkJnTSxpQkFBN0IsRUFBZ0Q3UCxNQUFNLENBQUNtTSxNQUFQLENBQWM7QUFDL0VqUCxNQUFBQSxNQUFNLEVBQUUsQ0FBQyxHQUFHc0QsT0FBSixFQUFhblIsU0FBYjtBQUR1RSxLQUFkLEVBRWxFeUcsS0FGa0UsQ0FBaEQsQ0FBckI7QUFHSDs7QUFDRGdhLEVBQUFBLGlCQUFpQixDQUFDQyxlQUFsQixHQUFvQ0YsaUJBQWlCLENBQUNFLGVBQXREO0FBQ0FELEVBQUFBLGlCQUFpQixDQUFDRSxtQkFBbEIsR0FBd0NILGlCQUFpQixDQUFDRyxtQkFBMUQ7O0FBQ0EsWUFBMkM7QUFDdkMsVUFBTUMsSUFBSSxHQUFHSixpQkFBaUIsQ0FBQ0ssV0FBbEIsSUFBaUNMLGlCQUFpQixDQUFDSSxJQUFuRCxJQUEyRCxTQUF4RTtBQUNBSCxJQUFBQSxpQkFBaUIsQ0FBQ0ksV0FBbEIsR0FBaUMsY0FBYUQsSUFBSyxHQUFuRDtBQUNIOztBQUNELFNBQU9ILGlCQUFQO0FBQ0g7Ozs7Ozs7Ozs7O0FDekJZOztBQUNiOVAsOENBQTZDO0FBQ3pDRyxFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQUQsdUJBQUEsR0FBMEJnRixlQUExQjtBQUNBaEYsaUJBQUEsR0FBb0JvRixTQUFwQjtBQUNBcEYsaUJBQUEsR0FBb0JpUSxTQUFwQjtBQUNBalEsbUJBQUEsR0FBc0JrUSxXQUF0QjtBQUNBbFEsbUJBQUEsR0FBc0JtRixXQUF0QjtBQUNBbkYsbUJBQUEsR0FBc0JtUSxXQUF0QjtBQUNBblEsa0JBQUEsR0FBcUJnQixVQUFyQjtBQUNBaEIscUJBQUEsR0FBd0JvUSxhQUF4QjtBQUNBcFEsbUJBQUEsR0FBc0IwRCxXQUF0QjtBQUNBMUQsZUFBQSxHQUFrQixLQUFLLENBQXZCOztBQUNBLElBQUlxUSx1QkFBdUIsR0FBR2hRLG1CQUFPLENBQUMsNkdBQUQsQ0FBckM7O0FBQ0EsSUFBSWlRLFlBQVksR0FBR2pRLG1CQUFPLENBQUMscUZBQUQsQ0FBMUI7O0FBQ0EsSUFBSWtRLG9CQUFvQixHQUFHbFEsbUJBQU8sQ0FBQyxvRkFBRCxDQUFsQzs7QUFDQSxJQUFJbVEsb0JBQW9CLEdBQUduUSxtQkFBTyxDQUFDLG9FQUFELENBQWxDOztBQUNBLElBQUlvUSxLQUFLLEdBQUdyUSxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyx3QkFBRCxDQUFSLENBQWxDOztBQUNBLElBQUlxUSxNQUFNLEdBQUdyUSxtQkFBTyxDQUFDLHFDQUFELENBQXBCOztBQUNBLElBQUlzUSxVQUFVLEdBQUd0USxtQkFBTyxDQUFDLDhDQUFELENBQXhCOztBQUNBLElBQUl1USxpQkFBaUIsR0FBR3ZRLG1CQUFPLENBQUMsOERBQUQsQ0FBL0I7O0FBQ0EsSUFBSXdRLFlBQVksR0FBR3hRLG1CQUFPLENBQUMsZ0RBQUQsQ0FBMUI7O0FBQ0EsSUFBSXlRLGdCQUFnQixHQUFHMVEsc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsdUNBQUQsQ0FBUixDQUE3Qzs7QUFDQSxJQUFJMFEsYUFBYSxHQUFHMVEsbUJBQU8sQ0FBQyxvREFBRCxDQUEzQjs7QUFDQSxJQUFJMlEsV0FBVyxHQUFHM1EsbUJBQU8sQ0FBQyxnREFBRCxDQUF6Qjs7QUFDQSxTQUFTRCxzQkFBVCxDQUFnQ0ssR0FBaEMsRUFBcUM7QUFDakMsU0FBT0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVgsR0FBd0JELEdBQXhCLEdBQThCO0FBQ2pDUCxJQUFBQSxPQUFPLEVBQUVPO0FBRHdCLEdBQXJDO0FBR0g7O0FBQ0QsSUFBSXdRLGtCQUFKOztBQUNBLElBQUlwTCxLQUFKLEVBQXFDLEVBRXBDOztBQUNELE1BQU1zTCxRQUFRLEdBQUd0TCxNQUFBLElBQXNDLEVBQXZEOztBQUNBLFNBQVN3TCxzQkFBVCxHQUFrQztBQUM5QixTQUFPdlIsTUFBTSxDQUFDbU0sTUFBUCxDQUFjLElBQUkxSixLQUFKLENBQVUsaUJBQVYsQ0FBZCxFQUE0QztBQUMvQ29ILElBQUFBLFNBQVMsRUFBRTtBQURvQyxHQUE1QyxDQUFQO0FBR0g7O0FBQ0QsU0FBUzJILGFBQVQsQ0FBdUI1TCxJQUF2QixFQUE2QjZMLE1BQTdCLEVBQXFDO0FBQ2pDLFNBQU9BLE1BQU0sSUFBSTdMLElBQUksQ0FBQzhMLFVBQUwsQ0FBZ0IsR0FBaEIsQ0FBVixHQUFpQzlMLElBQUksS0FBSyxHQUFULEdBQWUsQ0FBQyxHQUFHMkssdUJBQUosRUFBNkI1SywwQkFBN0IsQ0FBd0Q4TCxNQUF4RCxDQUFmLEdBQWtGLEdBQUVBLE1BQU8sR0FBRUUsZUFBZSxDQUFDL0wsSUFBRCxDQUFmLEtBQTBCLEdBQTFCLEdBQWdDQSxJQUFJLENBQUNnSSxTQUFMLENBQWUsQ0FBZixDQUFoQyxHQUFvRGhJLElBQUssRUFBdkwsR0FBMkxBLElBQWxNO0FBQ0g7O0FBQ0QsU0FBU1YsZUFBVCxDQUF5QlUsSUFBekIsRUFBK0J0RSxNQUEvQixFQUF1QzZELE9BQXZDLEVBQWdEQyxhQUFoRCxFQUErRDtBQUMzRCxNQUFJVyxLQUFKLEVBQXFDLEVBQXJDLE1BT087QUFDSCxXQUFPLEtBQVA7QUFDSDtBQUNKOztBQUNELFNBQVNULFNBQVQsQ0FBbUJNLElBQW5CLEVBQXlCdEUsTUFBekIsRUFBaUNpRSxhQUFqQyxFQUFnRDtBQUM1QyxNQUFJUSxLQUFKLEVBQXFDLEVBS3BDOztBQUNELFNBQU9ILElBQVA7QUFDSDs7QUFDRCxTQUFTdUssU0FBVCxDQUFtQnZLLElBQW5CLEVBQXlCdEUsTUFBekIsRUFBaUM7QUFDN0IsTUFBSXlFLEtBQUosRUFBcUMsRUFLcEM7O0FBQ0QsU0FBT0gsSUFBUDtBQUNIOztBQUNELFNBQVMrTCxlQUFULENBQXlCL0wsSUFBekIsRUFBK0I7QUFDM0IsUUFBTXlNLFVBQVUsR0FBR3pNLElBQUksQ0FBQ3RELE9BQUwsQ0FBYSxHQUFiLENBQW5CO0FBQ0EsUUFBTWdRLFNBQVMsR0FBRzFNLElBQUksQ0FBQ3RELE9BQUwsQ0FBYSxHQUFiLENBQWxCOztBQUNBLE1BQUkrUCxVQUFVLEdBQUcsQ0FBQyxDQUFkLElBQW1CQyxTQUFTLEdBQUcsQ0FBQyxDQUFwQyxFQUF1QztBQUNuQzFNLElBQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDZ0ksU0FBTCxDQUFlLENBQWYsRUFBa0J5RSxVQUFVLEdBQUcsQ0FBQyxDQUFkLEdBQWtCQSxVQUFsQixHQUErQkMsU0FBakQsQ0FBUDtBQUNIOztBQUNELFNBQU8xTSxJQUFQO0FBQ0g7O0FBQ0QsU0FBU3dLLFdBQVQsQ0FBcUJ4SyxJQUFyQixFQUEyQjtBQUN2QkEsRUFBQUEsSUFBSSxHQUFHK0wsZUFBZSxDQUFDL0wsSUFBRCxDQUF0QjtBQUNBLFNBQU9BLElBQUksS0FBS3lMLFFBQVQsSUFBcUJ6TCxJQUFJLENBQUM4TCxVQUFMLENBQWdCTCxRQUFRLEdBQUcsR0FBM0IsQ0FBNUI7QUFDSDs7QUFDRCxTQUFTaE0sV0FBVCxDQUFxQk8sSUFBckIsRUFBMkI7QUFDdkI7QUFDQSxTQUFPNEwsYUFBYSxDQUFDNUwsSUFBRCxFQUFPeUwsUUFBUCxDQUFwQjtBQUNIOztBQUNELFNBQVNoQixXQUFULENBQXFCekssSUFBckIsRUFBMkI7QUFDdkJBLEVBQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDRSxLQUFMLENBQVd1TCxRQUFRLENBQUM5YixNQUFwQixDQUFQO0FBQ0EsTUFBSSxDQUFDcVEsSUFBSSxDQUFDOEwsVUFBTCxDQUFnQixHQUFoQixDQUFMLEVBQTJCOUwsSUFBSSxHQUFJLElBQUdBLElBQUssRUFBaEI7QUFDM0IsU0FBT0EsSUFBUDtBQUNIOztBQUNELFNBQVMxRSxVQUFULENBQW9CcVIsR0FBcEIsRUFBeUI7QUFDckI7QUFDQSxNQUFJQSxHQUFHLENBQUNiLFVBQUosQ0FBZSxHQUFmLEtBQXVCYSxHQUFHLENBQUNiLFVBQUosQ0FBZSxHQUFmLENBQXZCLElBQThDYSxHQUFHLENBQUNiLFVBQUosQ0FBZSxHQUFmLENBQWxELEVBQXVFLE9BQU8sSUFBUDs7QUFDdkUsTUFBSTtBQUNBO0FBQ0EsVUFBTWMsY0FBYyxHQUFHLENBQUMsR0FBRzVCLE1BQUosRUFBWTZCLGlCQUFaLEVBQXZCO0FBQ0EsVUFBTUMsUUFBUSxHQUFHLElBQUlDLEdBQUosQ0FBUUosR0FBUixFQUFhQyxjQUFiLENBQWpCO0FBQ0EsV0FBT0UsUUFBUSxDQUFDRSxNQUFULEtBQW9CSixjQUFwQixJQUFzQ3BDLFdBQVcsQ0FBQ3NDLFFBQVEsQ0FBQ3pVLFFBQVYsQ0FBeEQ7QUFDSCxHQUxELENBS0UsT0FBTytFLENBQVAsRUFBVTtBQUNSLFdBQU8sS0FBUDtBQUNIO0FBQ0o7O0FBQ0QsU0FBU3NOLGFBQVQsQ0FBdUJ4ZixLQUF2QixFQUE4QitoQixVQUE5QixFQUEwQ0MsS0FBMUMsRUFBaUQ7QUFDN0MsTUFBSUMsaUJBQWlCLEdBQUcsRUFBeEI7QUFDQSxRQUFNQyxZQUFZLEdBQUcsQ0FBQyxHQUFHOUIsV0FBSixFQUFpQitCLGFBQWpCLENBQStCbmlCLEtBQS9CLENBQXJCO0FBQ0EsUUFBTW9pQixhQUFhLEdBQUdGLFlBQVksQ0FBQ0csTUFBbkM7QUFDQSxRQUFNQyxjQUFjLEdBQUc7QUFDdkIsR0FBQ1AsVUFBVSxLQUFLL2hCLEtBQWYsR0FBdUIsQ0FBQyxHQUFHbWdCLGFBQUosRUFBbUJvQyxlQUFuQixDQUFtQ0wsWUFBbkMsRUFBaURILFVBQWpELENBQXZCLEdBQXNGLEVBQXZGLEtBQThGO0FBQzlGO0FBQ0FDLEVBQUFBLEtBSEE7QUFJQUMsRUFBQUEsaUJBQWlCLEdBQUdqaUIsS0FBcEI7QUFDQSxRQUFNd2lCLE1BQU0sR0FBR3RULE1BQU0sQ0FBQzhDLElBQVAsQ0FBWW9RLGFBQVosQ0FBZjs7QUFDQSxNQUFJLENBQUNJLE1BQU0sQ0FBQ0MsS0FBUCxDQUFjQyxLQUFELElBQVM7QUFDdkIsUUFBSXJULEtBQUssR0FBR2lULGNBQWMsQ0FBQ0ksS0FBRCxDQUFkLElBQXlCLEVBQXJDO0FBQ0EsVUFBTTtBQUFFQyxNQUFBQSxNQUFGO0FBQVdDLE1BQUFBO0FBQVgsUUFBeUJSLGFBQWEsQ0FBQ00sS0FBRCxDQUE1QyxDQUZ1QixDQUd2QjtBQUNBOztBQUNBLFFBQUlHLFFBQVEsR0FBSSxJQUFHRixNQUFNLEdBQUcsS0FBSCxHQUFXLEVBQUcsR0FBRUQsS0FBTSxHQUEvQzs7QUFDQSxRQUFJRSxRQUFKLEVBQWM7QUFDVkMsTUFBQUEsUUFBUSxHQUFJLEdBQUUsQ0FBQ3hULEtBQUQsR0FBUyxHQUFULEdBQWUsRUFBRyxJQUFHd1QsUUFBUyxHQUE1QztBQUNIOztBQUNELFFBQUlGLE1BQU0sSUFBSSxDQUFDdEYsS0FBSyxDQUFDQyxPQUFOLENBQWNqTyxLQUFkLENBQWYsRUFBcUNBLEtBQUssR0FBRyxDQUN6Q0EsS0FEeUMsQ0FBUjtBQUdyQyxXQUFPLENBQUN1VCxRQUFRLElBQUlGLEtBQUssSUFBSUosY0FBdEIsTUFDTkwsaUJBQWlCLEdBQUdBLGlCQUFpQixDQUFDOVEsT0FBbEIsQ0FBMEIwUixRQUExQixFQUFvQ0YsTUFBTSxHQUFHdFQsS0FBSyxDQUFDek8sR0FBTixFQUFVO0FBQzVFO0FBQ0E7QUFDQTtBQUNDa2lCLElBQUFBLE9BQUQsSUFBV0Msa0JBQWtCLENBQUNELE9BQUQsQ0FKcUMsRUFLaEV4ZSxJQUxnRSxDQUszRCxHQUwyRCxDQUFILEdBS2pEeWUsa0JBQWtCLENBQUMxVCxLQUFELENBTFgsS0FLdUIsR0FOckMsQ0FBUDtBQU9ILEdBbkJJLENBQUwsRUFtQkk7QUFDQTRTLElBQUFBLGlCQUFpQixHQUFHLEVBQXBCLENBQXVCO0FBQXZCLEtBREEsQ0FHSjtBQUNBO0FBQ0M7O0FBQ0QsU0FBTztBQUNITyxJQUFBQSxNQURHO0FBRUhRLElBQUFBLE1BQU0sRUFBRWY7QUFGTCxHQUFQO0FBSUg7O0FBQ0QsU0FBU2dCLGtCQUFULENBQTRCakIsS0FBNUIsRUFBbUNRLE1BQW5DLEVBQTJDO0FBQ3ZDLFFBQU1VLGFBQWEsR0FBRyxFQUF0QjtBQUVBaFUsRUFBQUEsTUFBTSxDQUFDOEMsSUFBUCxDQUFZZ1EsS0FBWixFQUFtQi9QLE9BQW5CLENBQTRCdFAsR0FBRCxJQUFPO0FBQzlCLFFBQUksQ0FBQzZmLE1BQU0sQ0FBQ1csUUFBUCxDQUFnQnhnQixHQUFoQixDQUFMLEVBQTJCO0FBQ3ZCdWdCLE1BQUFBLGFBQWEsQ0FBQ3ZnQixHQUFELENBQWIsR0FBcUJxZixLQUFLLENBQUNyZixHQUFELENBQTFCO0FBQ0g7QUFDSixHQUpEO0FBS0EsU0FBT3VnQixhQUFQO0FBQ0g7O0FBQ0QsU0FBU3BRLFdBQVQsQ0FBcUIxRyxNQUFyQixFQUE2QjZELElBQTdCLEVBQW1DbVQsU0FBbkMsRUFBOEM7QUFDMUM7QUFDQSxNQUFJQyxJQUFKO0FBQ0EsTUFBSUMsV0FBVyxHQUFHLE9BQU9yVCxJQUFQLEtBQWdCLFFBQWhCLEdBQTJCQSxJQUEzQixHQUFrQyxDQUFDLEdBQUc2UCxNQUFKLEVBQVl5RCxvQkFBWixDQUFpQ3RULElBQWpDLENBQXBELENBSDBDLENBSTFDO0FBQ0E7O0FBQ0EsUUFBTXVULGFBQWEsR0FBR0YsV0FBVyxDQUFDRyxLQUFaLENBQWtCLG9CQUFsQixDQUF0QjtBQUNBLFFBQU1DLGtCQUFrQixHQUFHRixhQUFhLEdBQUdGLFdBQVcsQ0FBQ2hDLE1BQVosQ0FBbUJrQyxhQUFhLENBQUMsQ0FBRCxDQUFiLENBQWlCL2UsTUFBcEMsQ0FBSCxHQUFpRDZlLFdBQXpGO0FBQ0EsUUFBTUssUUFBUSxHQUFHRCxrQkFBa0IsQ0FBQzdhLEtBQW5CLENBQXlCLEdBQXpCLENBQWpCOztBQUNBLE1BQUksQ0FBQzhhLFFBQVEsQ0FBQyxDQUFELENBQVIsSUFBZSxFQUFoQixFQUFvQkYsS0FBcEIsQ0FBMEIsV0FBMUIsQ0FBSixFQUE0QztBQUN4Q3BXLElBQUFBLE9BQU8sQ0FBQ3VOLEtBQVIsQ0FBZSx1Q0FBc0MwSSxXQUFZLDZFQUFqRTtBQUNBLFVBQU1NLGFBQWEsR0FBRyxDQUFDLEdBQUc5RCxNQUFKLEVBQVkrRCx3QkFBWixDQUFxQ0gsa0JBQXJDLENBQXRCO0FBQ0FKLElBQUFBLFdBQVcsR0FBRyxDQUFDRSxhQUFhLEdBQUdBLGFBQWEsQ0FBQyxDQUFELENBQWhCLEdBQXNCLEVBQXBDLElBQTBDSSxhQUF4RDtBQUNILEdBYnlDLENBYzFDOzs7QUFDQSxNQUFJLENBQUN4VCxVQUFVLENBQUNrVCxXQUFELENBQWYsRUFBOEI7QUFDMUIsV0FBT0YsU0FBUyxHQUFHLENBQ2ZFLFdBRGUsQ0FBSCxHQUVaQSxXQUZKO0FBR0g7O0FBQ0QsTUFBSTtBQUNBRCxJQUFBQSxJQUFJLEdBQUcsSUFBSXhCLEdBQUosQ0FBUXlCLFdBQVcsQ0FBQzFDLFVBQVosQ0FBdUIsR0FBdkIsSUFBOEJ4VSxNQUFNLENBQUMwWCxNQUFyQyxHQUE4QzFYLE1BQU0sQ0FBQ2UsUUFBN0QsRUFBdUUsVUFBdkUsQ0FBUDtBQUNILEdBRkQsQ0FFRSxPQUFPK0UsQ0FBUCxFQUFVO0FBQ1I7QUFDQW1SLElBQUFBLElBQUksR0FBRyxJQUFJeEIsR0FBSixDQUFRLEdBQVIsRUFBYSxVQUFiLENBQVA7QUFDSDs7QUFDRCxNQUFJO0FBQ0EsVUFBTWtDLFFBQVEsR0FBRyxJQUFJbEMsR0FBSixDQUFReUIsV0FBUixFQUFxQkQsSUFBckIsQ0FBakI7QUFDQVUsSUFBQUEsUUFBUSxDQUFDNVcsUUFBVCxHQUFvQixDQUFDLEdBQUdzUyx1QkFBSixFQUE2QjVLLDBCQUE3QixDQUF3RGtQLFFBQVEsQ0FBQzVXLFFBQWpFLENBQXBCO0FBQ0EsUUFBSTZXLGNBQWMsR0FBRyxFQUFyQjs7QUFDQSxRQUFJLENBQUMsR0FBR2pFLFVBQUosRUFBZ0JrRSxjQUFoQixDQUErQkYsUUFBUSxDQUFDNVcsUUFBeEMsS0FBcUQ0VyxRQUFRLENBQUNHLFlBQTlELElBQThFZCxTQUFsRixFQUE2RjtBQUN6RixZQUFNcEIsS0FBSyxHQUFHLENBQUMsR0FBRy9CLFlBQUosRUFBa0JrRSxzQkFBbEIsQ0FBeUNKLFFBQVEsQ0FBQ0csWUFBbEQsQ0FBZDtBQUNBLFlBQU07QUFBRWxCLFFBQUFBLE1BQUY7QUFBV1IsUUFBQUE7QUFBWCxVQUF1QmhELGFBQWEsQ0FBQ3VFLFFBQVEsQ0FBQzVXLFFBQVYsRUFBb0I0VyxRQUFRLENBQUM1VyxRQUE3QixFQUF1QzZVLEtBQXZDLENBQTFDOztBQUNBLFVBQUlnQixNQUFKLEVBQVk7QUFDUmdCLFFBQUFBLGNBQWMsR0FBRyxDQUFDLEdBQUdsRSxNQUFKLEVBQVl5RCxvQkFBWixDQUFpQztBQUM5Q3BXLFVBQUFBLFFBQVEsRUFBRTZWLE1BRG9DO0FBRTlDb0IsVUFBQUEsSUFBSSxFQUFFTCxRQUFRLENBQUNLLElBRitCO0FBRzlDcEMsVUFBQUEsS0FBSyxFQUFFaUIsa0JBQWtCLENBQUNqQixLQUFELEVBQVFRLE1BQVI7QUFIcUIsU0FBakMsQ0FBakI7QUFLSDtBQUNKLEtBZEQsQ0FlQTs7O0FBQ0EsVUFBTTVQLFlBQVksR0FBR21SLFFBQVEsQ0FBQ2pDLE1BQVQsS0FBb0J1QixJQUFJLENBQUN2QixNQUF6QixHQUFrQ2lDLFFBQVEsQ0FBQzlULElBQVQsQ0FBYytFLEtBQWQsQ0FBb0IrTyxRQUFRLENBQUNqQyxNQUFULENBQWdCcmQsTUFBcEMsQ0FBbEMsR0FBZ0ZzZixRQUFRLENBQUM5VCxJQUE5RztBQUNBLFdBQU9tVCxTQUFTLEdBQUcsQ0FDZnhRLFlBRGUsRUFFZm9SLGNBQWMsSUFBSXBSLFlBRkgsQ0FBSCxHQUdaQSxZQUhKO0FBSUgsR0FyQkQsQ0FxQkUsT0FBT1YsQ0FBUCxFQUFVO0FBQ1IsV0FBT2tSLFNBQVMsR0FBRyxDQUNmRSxXQURlLENBQUgsR0FFWkEsV0FGSjtBQUdIO0FBQ0o7O0FBQ0QsU0FBU2UsV0FBVCxDQUFxQjVDLEdBQXJCLEVBQTBCO0FBQ3RCLFFBQU1LLE1BQU0sR0FBRyxDQUFDLEdBQUdoQyxNQUFKLEVBQVk2QixpQkFBWixFQUFmO0FBQ0EsU0FBT0YsR0FBRyxDQUFDYixVQUFKLENBQWVrQixNQUFmLElBQXlCTCxHQUFHLENBQUMzRSxTQUFKLENBQWNnRixNQUFNLENBQUNyZCxNQUFyQixDQUF6QixHQUF3RGdkLEdBQS9EO0FBQ0g7O0FBQ0QsU0FBUzZDLFlBQVQsQ0FBc0JsWSxNQUF0QixFQUE4QnFWLEdBQTlCLEVBQW1DdlIsRUFBbkMsRUFBdUM7QUFDbkM7QUFDQTtBQUNBLE1BQUksQ0FBQzBDLFlBQUQsRUFBZUMsVUFBZixJQUE2QkMsV0FBVyxDQUFDMUcsTUFBRCxFQUFTcVYsR0FBVCxFQUFjLElBQWQsQ0FBNUM7QUFDQSxRQUFNSyxNQUFNLEdBQUcsQ0FBQyxHQUFHaEMsTUFBSixFQUFZNkIsaUJBQVosRUFBZjtBQUNBLFFBQU00QyxhQUFhLEdBQUczUixZQUFZLENBQUNnTyxVQUFiLENBQXdCa0IsTUFBeEIsQ0FBdEI7QUFDQSxRQUFNMEMsV0FBVyxHQUFHM1IsVUFBVSxJQUFJQSxVQUFVLENBQUMrTixVQUFYLENBQXNCa0IsTUFBdEIsQ0FBbEM7QUFDQWxQLEVBQUFBLFlBQVksR0FBR3lSLFdBQVcsQ0FBQ3pSLFlBQUQsQ0FBMUI7QUFDQUMsRUFBQUEsVUFBVSxHQUFHQSxVQUFVLEdBQUd3UixXQUFXLENBQUN4UixVQUFELENBQWQsR0FBNkJBLFVBQXBEO0FBQ0EsUUFBTTRSLFdBQVcsR0FBR0YsYUFBYSxHQUFHM1IsWUFBSCxHQUFrQjJCLFdBQVcsQ0FBQzNCLFlBQUQsQ0FBOUQ7QUFDQSxRQUFNOFIsVUFBVSxHQUFHeFUsRUFBRSxHQUFHbVUsV0FBVyxDQUFDdlIsV0FBVyxDQUFDMUcsTUFBRCxFQUFTOEQsRUFBVCxDQUFaLENBQWQsR0FBMEMyQyxVQUFVLElBQUlELFlBQTdFO0FBQ0EsU0FBTztBQUNINk8sSUFBQUEsR0FBRyxFQUFFZ0QsV0FERjtBQUVIdlUsSUFBQUEsRUFBRSxFQUFFc1UsV0FBVyxHQUFHRSxVQUFILEdBQWdCblEsV0FBVyxDQUFDbVEsVUFBRDtBQUZ2QyxHQUFQO0FBSUg7O0FBQ0QsU0FBU0MsbUJBQVQsQ0FBNkJ4WCxRQUE3QixFQUF1Q3lYLEtBQXZDLEVBQThDO0FBQzFDLFFBQU1DLGFBQWEsR0FBRyxDQUFDLEdBQUdwRix1QkFBSixFQUE2QjdLLHVCQUE3QixDQUFxRCxDQUFDLEdBQUcrSyxvQkFBSixFQUEwQm1GLG1CQUExQixDQUE4QzNYLFFBQTlDLENBQXJELENBQXRCOztBQUNBLE1BQUkwWCxhQUFhLEtBQUssTUFBbEIsSUFBNEJBLGFBQWEsS0FBSyxTQUFsRCxFQUE2RDtBQUN6RCxXQUFPMVgsUUFBUDtBQUNILEdBSnlDLENBSzFDOzs7QUFDQSxNQUFJLENBQUN5WCxLQUFLLENBQUN6QixRQUFOLENBQWUwQixhQUFmLENBQUwsRUFBb0M7QUFDaEM7QUFDQUQsSUFBQUEsS0FBSyxDQUFDRyxJQUFOLENBQVluaUIsSUFBRCxJQUFRO0FBQ2YsVUFBSSxDQUFDLEdBQUdtZCxVQUFKLEVBQWdCa0UsY0FBaEIsQ0FBK0JyaEIsSUFBL0IsS0FBd0MsQ0FBQyxHQUFHd2QsV0FBSixFQUFpQitCLGFBQWpCLENBQStCdmYsSUFBL0IsRUFBcUNvaUIsRUFBckMsQ0FBd0M1UCxJQUF4QyxDQUE2Q3lQLGFBQTdDLENBQTVDLEVBQXlHO0FBQ3JHMVgsUUFBQUEsUUFBUSxHQUFHdkssSUFBWDtBQUNBLGVBQU8sSUFBUDtBQUNIO0FBQ0osS0FMRDtBQU1IOztBQUNELFNBQU8sQ0FBQyxHQUFHNmMsdUJBQUosRUFBNkI3Syx1QkFBN0IsQ0FBcUR6SCxRQUFyRCxDQUFQO0FBQ0g7O0FBQ0QsTUFBTThYLHVCQUF1QixHQUFHaFEsTUFBQSxJQUFtSCxDQUFuSjtBQVFBLE1BQU11USxrQkFBa0IsR0FBR2xOLE1BQU0sQ0FBQyxvQkFBRCxDQUFqQzs7QUFDQSxTQUFTbU4sVUFBVCxDQUFvQmhFLEdBQXBCLEVBQXlCaUUsUUFBekIsRUFBbUM7QUFDL0IsU0FBT3RMLEtBQUssQ0FBQ3FILEdBQUQsRUFBTTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQWtFLElBQUFBLFdBQVcsRUFBRTtBQVpDLEdBQU4sQ0FBTCxDQWFKeE8sSUFiSSxDQWFFUSxHQUFELElBQU87QUFDWCxRQUFJLENBQUNBLEdBQUcsQ0FBQzBDLEVBQVQsRUFBYTtBQUNULFVBQUlxTCxRQUFRLEdBQUcsQ0FBWCxJQUFnQi9OLEdBQUcsQ0FBQ2lPLE1BQUosSUFBYyxHQUFsQyxFQUF1QztBQUNuQyxlQUFPSCxVQUFVLENBQUNoRSxHQUFELEVBQU1pRSxRQUFRLEdBQUcsQ0FBakIsQ0FBakI7QUFDSDs7QUFDRCxVQUFJL04sR0FBRyxDQUFDaU8sTUFBSixLQUFlLEdBQW5CLEVBQXdCO0FBQ3BCLGVBQU9qTyxHQUFHLENBQUNrTyxJQUFKLEdBQVcxTyxJQUFYLENBQWlCMk8sSUFBRCxJQUFRO0FBQzNCLGNBQUlBLElBQUksQ0FBQ0MsUUFBVCxFQUFtQjtBQUNmLG1CQUFPO0FBQ0hBLGNBQUFBLFFBQVEsRUFBRVA7QUFEUCxhQUFQO0FBR0g7O0FBQ0QsZ0JBQU0sSUFBSTdULEtBQUosQ0FBVyw2QkFBWCxDQUFOO0FBQ0gsU0FQTSxDQUFQO0FBUUg7O0FBQ0QsWUFBTSxJQUFJQSxLQUFKLENBQVcsNkJBQVgsQ0FBTjtBQUNIOztBQUNELFdBQU9nRyxHQUFHLENBQUNrTyxJQUFKLEVBQVA7QUFDSCxHQS9CTSxDQUFQO0FBZ0NIOztBQUNELFNBQVNHLGFBQVQsQ0FBdUJDLFFBQXZCLEVBQWlDQyxjQUFqQyxFQUFpRDtBQUM3QyxTQUFPVCxVQUFVLENBQUNRLFFBQUQsRUFBV0MsY0FBYyxHQUFHLENBQUgsR0FBTyxDQUFoQyxDQUFWLENBQTZDN1YsS0FBN0MsQ0FBb0RDLEdBQUQsSUFBTztBQUM3RDtBQUNBO0FBQ0E7QUFDQSxRQUFJLENBQUM0VixjQUFMLEVBQXFCO0FBQ2pCLE9BQUMsR0FBR3hHLFlBQUosRUFBa0J4SixjQUFsQixDQUFpQzVGLEdBQWpDO0FBQ0g7O0FBQ0QsVUFBTUEsR0FBTjtBQUNILEdBUk0sQ0FBUDtBQVNIOztBQUNELE1BQU02VixNQUFOLENBQWE7QUFDVHBoQixFQUFBQSxXQUFXLENBQUNxaEIsU0FBRCxFQUFZQyxNQUFaLEVBQW9CQyxHQUFwQixFQUF5QjtBQUFFQyxJQUFBQSxZQUFGO0FBQWlCQyxJQUFBQSxVQUFqQjtBQUE4QkMsSUFBQUEsR0FBOUI7QUFBb0NDLElBQUFBLE9BQXBDO0FBQThDNWhCLElBQUFBLFNBQVMsRUFBRTZoQixVQUF6RDtBQUFzRXJXLElBQUFBLEdBQUcsRUFBRXNXLElBQTNFO0FBQWtGQyxJQUFBQSxZQUFsRjtBQUFpR0MsSUFBQUEsVUFBakc7QUFBOEd0VyxJQUFBQSxNQUE5RztBQUF1SDZELElBQUFBLE9BQXZIO0FBQWlJSSxJQUFBQSxhQUFqSTtBQUFpSkgsSUFBQUEsYUFBako7QUFBaUt5UyxJQUFBQTtBQUFqSyxHQUF6QixFQUF1TTtBQUM5TTtBQUNBLFNBQUtDLEdBQUwsR0FBVyxFQUFYLENBRjhNLENBSTlNOztBQUNBLFNBQUtDLEdBQUwsR0FBVyxFQUFYO0FBRUEsU0FBS0MsSUFBTCxHQUFZLENBQVo7O0FBQ0EsU0FBS0MsVUFBTCxHQUFtQmpXLENBQUQsSUFBSztBQUNuQixZQUFNNVIsS0FBSyxHQUFHNFIsQ0FBQyxDQUFDNVIsS0FBaEI7O0FBQ0EsVUFBSSxDQUFDQSxLQUFMLEVBQVk7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQUU2TixVQUFBQSxRQUFRLEVBQUVpWixTQUFaO0FBQXdCcEUsVUFBQUEsS0FBSyxFQUFFcUU7QUFBL0IsWUFBMkMsSUFBakQ7QUFDQSxhQUFLZSxXQUFMLENBQWlCLGNBQWpCLEVBQWlDLENBQUMsR0FBR3RILE1BQUosRUFBWXlELG9CQUFaLENBQWlDO0FBQzlEcFcsVUFBQUEsUUFBUSxFQUFFb0gsV0FBVyxDQUFDNlIsU0FBRCxDQUR5QztBQUU5RHBFLFVBQUFBLEtBQUssRUFBRXFFO0FBRnVELFNBQWpDLENBQWpDLEVBR0ksQ0FBQyxHQUFHdkcsTUFBSixFQUFZdUgsTUFBWixFQUhKO0FBSUE7QUFDSDs7QUFDRCxVQUFJLENBQUMvbkIsS0FBSyxDQUFDZ29CLEdBQVgsRUFBZ0I7QUFDWjtBQUNIOztBQUNELFVBQUlDLFlBQUo7QUFDQSxZQUFNO0FBQUU5RixRQUFBQSxHQUFGO0FBQVF2UixRQUFBQSxFQUFFLEVBQUVvVyxHQUFaO0FBQWtCblcsUUFBQUEsT0FBbEI7QUFBNEJxWCxRQUFBQTtBQUE1QixVQUFxQ2xvQixLQUEzQzs7QUFDQSxVQUFJMlYsS0FBSixFQUEyQyxFQXVCMUM7O0FBQ0QsV0FBS2lTLElBQUwsR0FBWU0sR0FBWjtBQUNBLFlBQU07QUFBRXJhLFFBQUFBLFFBQVEsRUFBRWlaO0FBQVosVUFBMkIsQ0FBQyxHQUFHcEcsaUJBQUosRUFBdUIrSCxnQkFBdkIsQ0FBd0N0RyxHQUF4QyxDQUFqQyxDQWpEbUIsQ0FrRG5CO0FBQ0E7O0FBQ0EsVUFBSSxLQUFLdUcsS0FBTCxJQUFjMUIsR0FBRyxLQUFLLEtBQUt4QyxNQUEzQixJQUFxQ3NDLFNBQVMsS0FBSyxLQUFLalosUUFBNUQsRUFBc0U7QUFDbEU7QUFDSCxPQXREa0IsQ0F1RG5CO0FBQ0E7OztBQUNBLFVBQUksS0FBSzhhLElBQUwsSUFBYSxDQUFDLEtBQUtBLElBQUwsQ0FBVTNvQixLQUFWLENBQWxCLEVBQW9DO0FBQ2hDO0FBQ0g7O0FBQ0QsV0FBSzRvQixNQUFMLENBQVksY0FBWixFQUE0QnpHLEdBQTVCLEVBQWlDNkUsR0FBakMsRUFBc0NwWCxNQUFNLENBQUNtTSxNQUFQLENBQWMsRUFBZCxFQUNuQ2xMLE9BRG1DLEVBQzFCO0FBQ1JpQixRQUFBQSxPQUFPLEVBQUVqQixPQUFPLENBQUNpQixPQUFSLElBQW1CLEtBQUsrVyxRQUR6QjtBQUVSM1gsUUFBQUEsTUFBTSxFQUFFTCxPQUFPLENBQUNLLE1BQVIsSUFBa0IsS0FBS2lFO0FBRnZCLE9BRDBCLENBQXRDLEVBSUk4UyxZQUpKO0FBS0gsS0FqRUQsQ0FSOE0sQ0EwRTlNOzs7QUFDQSxTQUFLdm5CLEtBQUwsR0FBYSxDQUFDLEdBQUd5Zix1QkFBSixFQUE2QjdLLHVCQUE3QixDQUFxRHdSLFNBQXJELENBQWIsQ0EzRThNLENBNEU5TTs7QUFDQSxTQUFLZ0MsVUFBTCxHQUFrQixFQUFsQixDQTdFOE0sQ0ErRTlNO0FBQ0E7QUFDQTs7QUFDQSxRQUFJaEMsU0FBUyxLQUFLLFNBQWxCLEVBQTZCO0FBQ3pCLFdBQUtnQyxVQUFMLENBQWdCLEtBQUtwb0IsS0FBckIsSUFBOEI7QUFDMUI4RSxRQUFBQSxTQUFTLEVBQUU2aEIsVUFEZTtBQUUxQjBCLFFBQUFBLE9BQU8sRUFBRSxJQUZpQjtBQUcxQnJqQixRQUFBQSxLQUFLLEVBQUV1aEIsWUFIbUI7QUFJMUJqVyxRQUFBQSxHQUFHLEVBQUVzVyxJQUpxQjtBQUsxQjBCLFFBQUFBLE9BQU8sRUFBRS9CLFlBQVksSUFBSUEsWUFBWSxDQUFDK0IsT0FMWjtBQU0xQkMsUUFBQUEsT0FBTyxFQUFFaEMsWUFBWSxJQUFJQSxZQUFZLENBQUNnQztBQU5aLE9BQTlCO0FBUUg7O0FBQ0QsU0FBS0gsVUFBTCxDQUFnQixPQUFoQixJQUEyQjtBQUN2QnRqQixNQUFBQSxTQUFTLEVBQUUyaEIsR0FEWTtBQUV2QnpNLE1BQUFBLFdBQVcsRUFBRTtBQUZVLEtBQTNCLENBNUY4TSxDQWdHOU07QUFDQTs7QUFDQSxTQUFLdUMsTUFBTCxHQUFjNEosTUFBTSxDQUFDNUosTUFBckI7QUFDQSxTQUFLaUssVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLclosUUFBTCxHQUFnQmlaLFNBQWhCO0FBQ0EsU0FBS3BFLEtBQUwsR0FBYXFFLE1BQWIsQ0FyRzhNLENBc0c5TTtBQUNBOztBQUNBLFVBQU1tQyxpQkFBaUIsR0FBRyxDQUFDLEdBQUd6SSxVQUFKLEVBQWdCa0UsY0FBaEIsQ0FBK0JtQyxTQUEvQixLQUE2QzdRLElBQUksQ0FBQ2tULGFBQUwsQ0FBbUJDLFVBQTFGOztBQUNBLFNBQUs1RSxNQUFMLEdBQWMwRSxpQkFBaUIsR0FBR3BDLFNBQUgsR0FBZUUsR0FBOUM7QUFDQSxTQUFLL0YsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLb0ksR0FBTCxHQUFXOUIsWUFBWDtBQUNBLFNBQUsrQixHQUFMLEdBQVcsSUFBWDtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JuQyxPQUFoQixDQTdHOE0sQ0E4RzlNO0FBQ0E7O0FBQ0EsU0FBS3NCLEtBQUwsR0FBYSxJQUFiO0FBQ0EsU0FBS2xCLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS2dDLE9BQUwsR0FBZSxDQUFDLEVBQUV2VCxJQUFJLENBQUNrVCxhQUFMLENBQW1CTSxJQUFuQixJQUEyQnhULElBQUksQ0FBQ2tULGFBQUwsQ0FBbUJPLEdBQTlDLElBQXFEelQsSUFBSSxDQUFDa1QsYUFBTCxDQUFtQlEsTUFBbkIsSUFBNkIsQ0FBQzFULElBQUksQ0FBQ2tULGFBQUwsQ0FBbUJTLEdBQXRHLElBQTZHLENBQUNWLGlCQUFELElBQXNCLENBQUNqVCxJQUFJLENBQUM0VCxRQUFMLENBQWNyYixNQUFyQyxJQUErQyxDQUFDbUgsS0FBL0osQ0FBaEI7QUFDQSxTQUFLOFIsU0FBTCxHQUFpQixDQUFDLENBQUNBLFNBQW5CO0FBQ0EsU0FBSzVTLGNBQUwsR0FBc0IsS0FBdEI7O0FBQ0EsUUFBSWMsS0FBSixFQUFxQyxFQU1wQzs7QUFDRCxlQUFtQyxFQXVCbEM7QUFDSjs7QUFDRHVVLEVBQUFBLE1BQU0sR0FBRztBQUNMNWEsSUFBQUEsTUFBTSxDQUFDdWEsUUFBUCxDQUFnQkssTUFBaEI7QUFDSDtBQUNEO0FBQ0o7QUFDQTs7O0FBQU1DLEVBQUFBLElBQUksR0FBRztBQUNMN2EsSUFBQUEsTUFBTSxDQUFDdVcsT0FBUCxDQUFlc0UsSUFBZjtBQUNIO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBTXBwQixFQUFBQSxJQUFJLENBQUNvaEIsR0FBRCxFQUFNdlIsRUFBTixFQUFVQyxPQUFPLEdBQUcsRUFBcEIsRUFDSDtBQUNDLFFBQUk4RSxLQUFKLEVBQTJDLEVBYTFDOztBQUNELEtBQUM7QUFBRXdNLE1BQUFBLEdBQUY7QUFBUXZSLE1BQUFBO0FBQVIsUUFBZ0JvVSxZQUFZLENBQUMsSUFBRCxFQUFPN0MsR0FBUCxFQUFZdlIsRUFBWixDQUE3QjtBQUNBLFdBQU8sS0FBS2dZLE1BQUwsQ0FBWSxXQUFaLEVBQXlCekcsR0FBekIsRUFBOEJ2UixFQUE5QixFQUFrQ0MsT0FBbEMsQ0FBUDtBQUNIO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBTWdCLEVBQUFBLE9BQU8sQ0FBQ3NRLEdBQUQsRUFBTXZSLEVBQU4sRUFBVUMsT0FBTyxHQUFHLEVBQXBCLEVBQ047QUFDQyxLQUFDO0FBQUVzUixNQUFBQSxHQUFGO0FBQVF2UixNQUFBQTtBQUFSLFFBQWdCb1UsWUFBWSxDQUFDLElBQUQsRUFBTzdDLEdBQVAsRUFBWXZSLEVBQVosQ0FBN0I7QUFDQSxXQUFPLEtBQUtnWSxNQUFMLENBQVksY0FBWixFQUE0QnpHLEdBQTVCLEVBQWlDdlIsRUFBakMsRUFBcUNDLE9BQXJDLENBQVA7QUFDSDs7QUFDVyxRQUFOK1gsTUFBTSxDQUFDd0IsTUFBRCxFQUFTakksR0FBVCxFQUFjdlIsRUFBZCxFQUFrQkMsT0FBbEIsRUFBMkJvWCxZQUEzQixFQUF5QztBQUNqRCxRQUFJLENBQUNuWCxVQUFVLENBQUNxUixHQUFELENBQWYsRUFBc0I7QUFDbEI3UyxNQUFBQSxNQUFNLENBQUN1YSxRQUFQLENBQWdCbFosSUFBaEIsR0FBdUJ3UixHQUF2QjtBQUNBLGFBQU8sS0FBUDtBQUNIOztBQUNELFVBQU1rSSxpQkFBaUIsR0FBR2xJLEdBQUcsS0FBS3ZSLEVBQVIsSUFBY0MsT0FBTyxDQUFDeVosRUFBdEIsSUFBNEJ6WixPQUFPLENBQUNtWixrQkFBOUQsQ0FMaUQsQ0FNakQ7QUFDQTs7QUFDQSxRQUFJblosT0FBTyxDQUFDeVosRUFBWixFQUFnQjtBQUNaLFdBQUtkLE9BQUwsR0FBZSxJQUFmO0FBQ0g7O0FBQ0QsVUFBTWUsVUFBVSxHQUFHLEtBQUtyWixNQUF4Qjs7QUFDQSxRQUFJeUUsS0FBSixFQUFxQyxZQTZDcEM7O0FBQ0QsUUFBSSxDQUFDOUUsT0FBTyxDQUFDeVosRUFBYixFQUFpQjtBQUNiLFdBQUs1QixLQUFMLEdBQWEsS0FBYjtBQUNILEtBNURnRCxDQTZEakQ7OztBQUNBLFFBQUlsSSxNQUFNLENBQUNvSyxFQUFYLEVBQWU7QUFDWEMsTUFBQUEsV0FBVyxDQUFDQyxJQUFaLENBQWlCLGFBQWpCO0FBQ0g7O0FBQ0QsVUFBTTtBQUFFaFosTUFBQUEsT0FBTyxHQUFFO0FBQVgsUUFBc0JqQixPQUE1QjtBQUNBLFVBQU1rYSxVQUFVLEdBQUc7QUFDZmpaLE1BQUFBO0FBRGUsS0FBbkI7O0FBR0EsUUFBSSxLQUFLa1osY0FBVCxFQUF5QjtBQUNyQixXQUFLQyxrQkFBTCxDQUF3QixLQUFLRCxjQUE3QixFQUE2Q0QsVUFBN0M7QUFDSDs7QUFDRG5hLElBQUFBLEVBQUUsR0FBR3FFLFdBQVcsQ0FBQ0MsU0FBUyxDQUFDOEssV0FBVyxDQUFDcFAsRUFBRCxDQUFYLEdBQWtCcVAsV0FBVyxDQUFDclAsRUFBRCxDQUE3QixHQUFvQ0EsRUFBckMsRUFBeUNDLE9BQU8sQ0FBQ0ssTUFBakQsRUFBeUQsS0FBS2lFLGFBQTlELENBQVYsQ0FBaEI7QUFDQSxVQUFNK1YsU0FBUyxHQUFHbkwsU0FBUyxDQUFDQyxXQUFXLENBQUNwUCxFQUFELENBQVgsR0FBa0JxUCxXQUFXLENBQUNyUCxFQUFELENBQTdCLEdBQW9DQSxFQUFyQyxFQUF5QyxLQUFLTSxNQUE5QyxDQUEzQjtBQUNBLFNBQUs4WixjQUFMLEdBQXNCcGEsRUFBdEI7QUFDQSxRQUFJdWEsWUFBWSxHQUFHWixVQUFVLEtBQUssS0FBS3JaLE1BQXZDLENBM0VpRCxDQTRFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxRQUFJLENBQUNMLE9BQU8sQ0FBQ3laLEVBQVQsSUFBZSxLQUFLYyxlQUFMLENBQXFCRixTQUFyQixDQUFmLElBQWtELENBQUNDLFlBQXZELEVBQXFFO0FBQ2pFLFdBQUszRyxNQUFMLEdBQWMwRyxTQUFkO0FBQ0FyRSxNQUFBQSxNQUFNLENBQUM1SixNQUFQLENBQWNvTyxJQUFkLENBQW1CLGlCQUFuQixFQUFzQ3phLEVBQXRDLEVBQTBDbWEsVUFBMUMsRUFGaUUsQ0FHakU7O0FBQ0EsV0FBS2pELFdBQUwsQ0FBaUJzQyxNQUFqQixFQUF5QmpJLEdBQXpCLEVBQThCdlIsRUFBOUIsRUFBa0NDLE9BQWxDO0FBQ0EsV0FBS3lhLFlBQUwsQ0FBa0JKLFNBQWxCO0FBQ0EsV0FBS0ssTUFBTCxDQUFZLEtBQUt6QyxVQUFMLENBQWdCLEtBQUtwb0IsS0FBckIsQ0FBWixFQUF5QyxJQUF6QztBQUNBbW1CLE1BQUFBLE1BQU0sQ0FBQzVKLE1BQVAsQ0FBY29PLElBQWQsQ0FBbUIsb0JBQW5CLEVBQXlDemEsRUFBekMsRUFBNkNtYSxVQUE3QztBQUNBLGFBQU8sSUFBUDtBQUNIOztBQUNELFFBQUlTLE1BQU0sR0FBRyxDQUFDLEdBQUc5SyxpQkFBSixFQUF1QitILGdCQUF2QixDQUF3Q3RHLEdBQXhDLENBQWI7QUFDQSxRQUFJO0FBQUV0VSxNQUFBQSxRQUFRLEVBQUVpWixTQUFaO0FBQXdCcEUsTUFBQUEsS0FBSyxFQUFFcUU7QUFBL0IsUUFBMkN5RSxNQUEvQyxDQTVGaUQsQ0E2RmpEO0FBQ0E7QUFDQTs7QUFDQSxRQUFJbEcsS0FBSixFQUFXbUcsUUFBWDs7QUFDQSxRQUFJO0FBQ0FuRyxNQUFBQSxLQUFLLEdBQUcsTUFBTSxLQUFLNEIsVUFBTCxDQUFnQndFLFdBQWhCLEVBQWQ7QUFDQSxPQUFDO0FBQUVDLFFBQUFBLFVBQVUsRUFBRUY7QUFBZCxVQUE0QixNQUFNLENBQUMsR0FBR3JMLFlBQUosRUFBa0J0SixzQkFBbEIsRUFBbkM7QUFDSCxLQUhELENBR0UsT0FBT3dRLElBQVAsRUFBYTtBQUNYO0FBQ0E7QUFDQWhZLE1BQUFBLE1BQU0sQ0FBQ3VhLFFBQVAsQ0FBZ0JsWixJQUFoQixHQUF1QkMsRUFBdkI7QUFDQSxhQUFPLEtBQVA7QUFDSCxLQXpHZ0QsQ0EwR2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFFBQUksQ0FBQyxLQUFLZ2IsUUFBTCxDQUFjVixTQUFkLENBQUQsSUFBNkIsQ0FBQ0MsWUFBbEMsRUFBZ0Q7QUFDNUNmLE1BQUFBLE1BQU0sR0FBRyxjQUFUO0FBQ0gsS0FqSGdELENBa0hqRDtBQUNBOzs7QUFDQSxRQUFJN1csVUFBVSxHQUFHM0MsRUFBakIsQ0FwSGlELENBcUhqRDtBQUNBO0FBQ0E7O0FBQ0FrVyxJQUFBQSxTQUFTLEdBQUdBLFNBQVMsR0FBRyxDQUFDLEdBQUczRyx1QkFBSixFQUE2QjdLLHVCQUE3QixDQUFxRDJLLFdBQVcsQ0FBQzZHLFNBQUQsQ0FBaEUsQ0FBSCxHQUFrRkEsU0FBdkc7O0FBQ0EsUUFBSXVELGlCQUFpQixJQUFJdkQsU0FBUyxLQUFLLFNBQXZDLEVBQWtEO0FBQzlDalcsTUFBQUEsT0FBTyxDQUFDbVosa0JBQVIsR0FBNkIsSUFBN0I7O0FBQ0EsVUFBSXJVLEtBQUosRUFBMkQsRUFBM0QsTUFXTztBQUNINlYsUUFBQUEsTUFBTSxDQUFDM2QsUUFBUCxHQUFrQndYLG1CQUFtQixDQUFDeUIsU0FBRCxFQUFZeEIsS0FBWixDQUFyQzs7QUFDQSxZQUFJa0csTUFBTSxDQUFDM2QsUUFBUCxLQUFvQmlaLFNBQXhCLEVBQW1DO0FBQy9CQSxVQUFBQSxTQUFTLEdBQUcwRSxNQUFNLENBQUMzZCxRQUFuQjtBQUNBMmQsVUFBQUEsTUFBTSxDQUFDM2QsUUFBUCxHQUFrQm9ILFdBQVcsQ0FBQzZSLFNBQUQsQ0FBN0I7QUFDQTNFLFVBQUFBLEdBQUcsR0FBRyxDQUFDLEdBQUczQixNQUFKLEVBQVl5RCxvQkFBWixDQUFpQ3VILE1BQWpDLENBQU47QUFDSDtBQUNKO0FBQ0o7O0FBQ0QsVUFBTTlxQixLQUFLLEdBQUcsQ0FBQyxHQUFHeWYsdUJBQUosRUFBNkI3Syx1QkFBN0IsQ0FBcUR3UixTQUFyRCxDQUFkOztBQUNBLFFBQUksQ0FBQ2hXLFVBQVUsQ0FBQ0YsRUFBRCxDQUFmLEVBQXFCO0FBQ2pCLGdCQUEyQztBQUN2QyxjQUFNLElBQUl5QixLQUFKLENBQVcsa0JBQWlCOFAsR0FBSSxjQUFhdlIsRUFBRywyQ0FBdEMsR0FBb0Ysb0ZBQTlGLENBQU47QUFDSDs7QUFDRHRCLE1BQUFBLE1BQU0sQ0FBQ3VhLFFBQVAsQ0FBZ0JsWixJQUFoQixHQUF1QkMsRUFBdkI7QUFDQSxhQUFPLEtBQVA7QUFDSDs7QUFDRDJDLElBQUFBLFVBQVUsR0FBR3dNLFNBQVMsQ0FBQ0UsV0FBVyxDQUFDMU0sVUFBRCxDQUFaLEVBQTBCLEtBQUtyQyxNQUEvQixDQUF0Qjs7QUFDQSxRQUFJLENBQUMsR0FBR3VQLFVBQUosRUFBZ0JrRSxjQUFoQixDQUErQmprQixLQUEvQixDQUFKLEVBQTJDO0FBQ3ZDLFlBQU04cEIsUUFBUSxHQUFHLENBQUMsR0FBRzlKLGlCQUFKLEVBQXVCK0gsZ0JBQXZCLENBQXdDbFYsVUFBeEMsQ0FBakI7QUFDQSxZQUFNa1AsVUFBVSxHQUFHK0gsUUFBUSxDQUFDM2MsUUFBNUI7QUFDQSxZQUFNa2UsVUFBVSxHQUFHLENBQUMsR0FBR2pMLFdBQUosRUFBaUIrQixhQUFqQixDQUErQm5pQixLQUEvQixDQUFuQjtBQUNBLFlBQU1zckIsVUFBVSxHQUFHLENBQUMsR0FBR25MLGFBQUosRUFBbUJvQyxlQUFuQixDQUFtQzhJLFVBQW5DLEVBQStDdEosVUFBL0MsQ0FBbkI7QUFDQSxZQUFNd0osaUJBQWlCLEdBQUd2ckIsS0FBSyxLQUFLK2hCLFVBQXBDO0FBQ0EsWUFBTWlDLGNBQWMsR0FBR3VILGlCQUFpQixHQUFHL0wsYUFBYSxDQUFDeGYsS0FBRCxFQUFRK2hCLFVBQVIsRUFBb0JzRSxNQUFwQixDQUFoQixHQUE4QyxFQUF0Rjs7QUFFQSxVQUFJLENBQUNpRixVQUFELElBQWVDLGlCQUFpQixJQUFJLENBQUN2SCxjQUFjLENBQUNoQixNQUF4RCxFQUFnRTtBQUM1RCxjQUFNd0ksYUFBYSxHQUFHdGMsTUFBTSxDQUFDOEMsSUFBUCxDQUFZcVosVUFBVSxDQUFDaEosTUFBdkIsRUFBK0IxSSxNQUEvQixDQUF1QytJLEtBQUQsSUFBUyxDQUFDMkQsTUFBTSxDQUFDM0QsS0FBRCxDQUF0RCxDQUF0Qjs7QUFFQSxZQUFJOEksYUFBYSxDQUFDL21CLE1BQWQsR0FBdUIsQ0FBM0IsRUFBOEI7QUFDMUIsb0JBQTJDO0FBQ3ZDNEksWUFBQUEsT0FBTyxDQUFDb0YsSUFBUixDQUFjLEdBQUU4WSxpQkFBaUIsR0FBSSxvQkFBSixHQUEyQixpQ0FBaUMsOEJBQWhGLEdBQWlILGVBQWNDLGFBQWEsQ0FBQ2xuQixJQUFkLENBQW1CLElBQW5CLENBQXlCLDhCQUFySztBQUNIOztBQUNELGdCQUFNLElBQUlxTixLQUFKLENBQVUsQ0FBQzRaLGlCQUFpQixHQUFJLDBCQUF5QjlKLEdBQUksb0NBQW1DK0osYUFBYSxDQUFDbG5CLElBQWQsQ0FBbUIsSUFBbkIsQ0FBeUIsaUNBQTdGLEdBQWlJLDhCQUE2QnlkLFVBQVcsOENBQTZDL2hCLEtBQU0sS0FBOU8sSUFBdVAsK0NBQThDdXJCLGlCQUFpQixHQUFHLDJCQUFILEdBQWlDLHNCQUF1QixFQUF4WCxDQUFOO0FBQ0g7QUFDSixPQVRELE1BU08sSUFBSUEsaUJBQUosRUFBdUI7QUFDMUJyYixRQUFBQSxFQUFFLEdBQUcsQ0FBQyxHQUFHNFAsTUFBSixFQUFZeUQsb0JBQVosQ0FBaUNyVSxNQUFNLENBQUNtTSxNQUFQLENBQWMsRUFBZCxFQUNuQ3lPLFFBRG1DLEVBQ3pCO0FBQ1QzYyxVQUFBQSxRQUFRLEVBQUU2VyxjQUFjLENBQUNoQixNQURoQjtBQUVUaEIsVUFBQUEsS0FBSyxFQUFFaUIsa0JBQWtCLENBQUNvRCxNQUFELEVBQVNyQyxjQUFjLENBQUN4QixNQUF4QjtBQUZoQixTQUR5QixDQUFqQyxDQUFMO0FBS0gsT0FOTSxNQU1BO0FBQ0g7QUFDQXRULFFBQUFBLE1BQU0sQ0FBQ21NLE1BQVAsQ0FBY2dMLE1BQWQsRUFBc0JpRixVQUF0QjtBQUNIO0FBQ0o7O0FBQ0RuRixJQUFBQSxNQUFNLENBQUM1SixNQUFQLENBQWNvTyxJQUFkLENBQW1CLGtCQUFuQixFQUF1Q3phLEVBQXZDLEVBQTJDbWEsVUFBM0M7O0FBQ0EsUUFBSTtBQUNBLFVBQUlsWCxHQUFKLEVBQVNzWSxJQUFUO0FBQ0EsVUFBSUMsU0FBUyxHQUFHLE1BQU0sS0FBS0MsWUFBTCxDQUFrQjNyQixLQUFsQixFQUF5Qm9tQixTQUF6QixFQUFvQ0MsTUFBcEMsRUFBNENuVyxFQUE1QyxFQUFnRDJDLFVBQWhELEVBQTREd1gsVUFBNUQsQ0FBdEI7QUFDQSxVQUFJO0FBQUV6UCxRQUFBQSxLQUFGO0FBQVU1VixRQUFBQSxLQUFWO0FBQWtCc2pCLFFBQUFBLE9BQWxCO0FBQTRCQyxRQUFBQTtBQUE1QixVQUF5Q21ELFNBQTdDLENBSEEsQ0FJQTs7QUFDQSxVQUFJLENBQUNwRCxPQUFPLElBQUlDLE9BQVosS0FBd0J2akIsS0FBNUIsRUFBbUM7QUFDL0IsWUFBSUEsS0FBSyxDQUFDNG1CLFNBQU4sSUFBbUI1bUIsS0FBSyxDQUFDNG1CLFNBQU4sQ0FBZ0JDLFlBQXZDLEVBQXFEO0FBQ2pELGdCQUFNQyxXQUFXLEdBQUc5bUIsS0FBSyxDQUFDNG1CLFNBQU4sQ0FBZ0JDLFlBQXBDLENBRGlELENBRWpEO0FBQ0E7QUFDQTs7QUFDQSxjQUFJQyxXQUFXLENBQUNsTCxVQUFaLENBQXVCLEdBQXZCLENBQUosRUFBaUM7QUFDN0Isa0JBQU1tTCxVQUFVLEdBQUcsQ0FBQyxHQUFHL0wsaUJBQUosRUFBdUIrSCxnQkFBdkIsQ0FBd0MrRCxXQUF4QyxDQUFuQjtBQUNBQyxZQUFBQSxVQUFVLENBQUM1ZSxRQUFYLEdBQXNCd1gsbUJBQW1CLENBQUNvSCxVQUFVLENBQUM1ZSxRQUFaLEVBQXNCeVgsS0FBdEIsQ0FBekM7QUFDQSxrQkFBTTtBQUFFbkQsY0FBQUEsR0FBRyxFQUFFdUssTUFBUDtBQUFnQjliLGNBQUFBLEVBQUUsRUFBRStiO0FBQXBCLGdCQUErQjNILFlBQVksQ0FBQyxJQUFELEVBQU93SCxXQUFQLEVBQW9CQSxXQUFwQixDQUFqRDtBQUNBLG1CQUFPLEtBQUs1RCxNQUFMLENBQVl3QixNQUFaLEVBQW9Cc0MsTUFBcEIsRUFBNEJDLEtBQTVCLEVBQW1DOWIsT0FBbkMsQ0FBUDtBQUNIOztBQUNEdkIsVUFBQUEsTUFBTSxDQUFDdWEsUUFBUCxDQUFnQmxaLElBQWhCLEdBQXVCNmIsV0FBdkI7QUFDQSxpQkFBTyxJQUFJaFYsT0FBSixDQUFZLE1BQUksQ0FDdEIsQ0FETSxDQUFQO0FBRUg7O0FBQ0QsYUFBS2lRLFNBQUwsR0FBaUIsQ0FBQyxDQUFDL2hCLEtBQUssQ0FBQ2tuQixXQUF6QixDQWhCK0IsQ0FpQi9COztBQUNBLFlBQUlsbkIsS0FBSyxDQUFDK2dCLFFBQU4sS0FBbUJQLGtCQUF2QixFQUEyQztBQUN2QyxjQUFJMkcsYUFBSjs7QUFDQSxjQUFJO0FBQ0Esa0JBQU0sS0FBS0MsY0FBTCxDQUFvQixNQUFwQixDQUFOO0FBQ0FELFlBQUFBLGFBQWEsR0FBRyxNQUFoQjtBQUNILFdBSEQsQ0FHRSxPQUFPamEsQ0FBUCxFQUFVO0FBQ1JpYSxZQUFBQSxhQUFhLEdBQUcsU0FBaEI7QUFDSDs7QUFDRFQsVUFBQUEsU0FBUyxHQUFHLE1BQU0sS0FBS0MsWUFBTCxDQUFrQlEsYUFBbEIsRUFBaUNBLGFBQWpDLEVBQWdEOUYsTUFBaEQsRUFBd0RuVyxFQUF4RCxFQUE0RDJDLFVBQTVELEVBQXdFO0FBQ3RGekIsWUFBQUEsT0FBTyxFQUFFO0FBRDZFLFdBQXhFLENBQWxCO0FBR0g7QUFDSjs7QUFDRCtVLE1BQUFBLE1BQU0sQ0FBQzVKLE1BQVAsQ0FBY29PLElBQWQsQ0FBbUIscUJBQW5CLEVBQTBDemEsRUFBMUMsRUFBOENtYSxVQUE5QztBQUNBLFdBQUtqRCxXQUFMLENBQWlCc0MsTUFBakIsRUFBeUJqSSxHQUF6QixFQUE4QnZSLEVBQTlCLEVBQWtDQyxPQUFsQzs7QUFDQSxnQkFBMkM7QUFDdkMsY0FBTWtjLE9BQU8sR0FBRyxLQUFLakUsVUFBTCxDQUFnQixPQUFoQixFQUF5QnRqQixTQUF6QztBQUNBOEosUUFBQUEsTUFBTSxDQUFDbEgsSUFBUCxDQUFZNGtCLGFBQVosR0FBNEJELE9BQU8sQ0FBQ3BOLGVBQVIsS0FBNEJvTixPQUFPLENBQUNuTixtQkFBcEMsSUFBMkQsQ0FBQ3dNLFNBQVMsQ0FBQzVtQixTQUFWLENBQW9CbWEsZUFBNUc7QUFDSDs7QUFDRCxVQUFJOU8sT0FBTyxDQUFDeVosRUFBUixJQUFjeEQsU0FBUyxLQUFLLFNBQTVCLElBQXlDLENBQUMsQ0FBQ2pULEdBQUcsR0FBR29DLElBQUksQ0FBQ2tULGFBQUwsQ0FBbUJ6akIsS0FBMUIsTUFBcUMsSUFBckMsSUFBNkNtTyxHQUFHLEtBQUssS0FBSyxDQUExRCxHQUE4RCxLQUFLLENBQW5FLEdBQXVFLENBQUNzWSxJQUFJLEdBQUd0WSxHQUFHLENBQUN5WSxTQUFaLE1BQTJCLElBQTNCLElBQW1DSCxJQUFJLEtBQUssS0FBSyxDQUFqRCxHQUFxRCxLQUFLLENBQTFELEdBQThEQSxJQUFJLENBQUNjLFVBQTNJLE1BQTJKLEdBQXBNLEtBQTRNdm5CLEtBQUssS0FBSyxJQUFWLElBQWtCQSxLQUFLLEtBQUssS0FBSyxDQUFqQyxHQUFxQyxLQUFLLENBQTFDLEdBQThDQSxLQUFLLENBQUM0bUIsU0FBaFEsQ0FBSixFQUFnUjtBQUM1UTtBQUNBO0FBQ0E1bUIsUUFBQUEsS0FBSyxDQUFDNG1CLFNBQU4sQ0FBZ0JXLFVBQWhCLEdBQTZCLEdBQTdCO0FBQ0gsT0E5Q0QsQ0ErQ0E7OztBQUNBLFlBQU1DLG1CQUFtQixHQUFHcmMsT0FBTyxDQUFDaUIsT0FBUixJQUFtQixLQUFLcFIsS0FBTCxLQUFlQSxLQUE5RDs7QUFDQSxVQUFJeXNCLE9BQUo7O0FBQ0EsWUFBTUMsWUFBWSxHQUFHLENBQUNELE9BQU8sR0FBR3RjLE9BQU8sQ0FBQ2tCLE1BQW5CLE1BQStCLElBQS9CLElBQXVDb2IsT0FBTyxLQUFLLEtBQUssQ0FBeEQsR0FBNERBLE9BQTVELEdBQXNFLENBQUNELG1CQUE1RjtBQUNBLFlBQU1HLFdBQVcsR0FBR0QsWUFBWSxHQUFHO0FBQy9CL0UsUUFBQUEsQ0FBQyxFQUFFLENBRDRCO0FBRS9CQyxRQUFBQSxDQUFDLEVBQUU7QUFGNEIsT0FBSCxHQUc1QixJQUhKO0FBSUEsWUFBTSxLQUFLMVEsR0FBTCxDQUFTbFgsS0FBVCxFQUFnQm9tQixTQUFoQixFQUEyQkMsTUFBM0IsRUFBbUNtRSxTQUFuQyxFQUE4Q2tCLFNBQTlDLEVBQXlEbkUsWUFBWSxLQUFLLElBQWpCLElBQXlCQSxZQUFZLEtBQUssS0FBSyxDQUEvQyxHQUFtREEsWUFBbkQsR0FBa0VvRixXQUEzSCxFQUF3SXRjLEtBQXhJLENBQStJYSxDQUFELElBQUs7QUFDckosWUFBSUEsQ0FBQyxDQUFDNkgsU0FBTixFQUFpQjZCLEtBQUssR0FBR0EsS0FBSyxJQUFJMUosQ0FBakIsQ0FBakIsS0FDSyxNQUFNQSxDQUFOO0FBQ1IsT0FISyxDQUFOOztBQUlBLFVBQUkwSixLQUFKLEVBQVc7QUFDUHVMLFFBQUFBLE1BQU0sQ0FBQzVKLE1BQVAsQ0FBY29PLElBQWQsQ0FBbUIsa0JBQW5CLEVBQXVDL1AsS0FBdkMsRUFBOEM0UCxTQUE5QyxFQUF5REgsVUFBekQ7QUFDQSxjQUFNelAsS0FBTjtBQUNIOztBQUNELFVBQUkzRixLQUFKLEVBQXFDLEVBSXBDOztBQUNEa1IsTUFBQUEsTUFBTSxDQUFDNUosTUFBUCxDQUFjb08sSUFBZCxDQUFtQixxQkFBbkIsRUFBMEN6YSxFQUExQyxFQUE4Q21hLFVBQTlDO0FBQ0EsYUFBTyxJQUFQO0FBQ0gsS0F0RUQsQ0FzRUUsT0FBT3pELElBQVAsRUFBYTtBQUNYLFVBQUlBLElBQUksQ0FBQzdOLFNBQVQsRUFBb0I7QUFDaEIsZUFBTyxLQUFQO0FBQ0g7O0FBQ0QsWUFBTTZOLElBQU47QUFDSDtBQUNKOztBQUNEUSxFQUFBQSxXQUFXLENBQUNzQyxNQUFELEVBQVNqSSxHQUFULEVBQWN2UixFQUFkLEVBQWtCQyxPQUFPLEdBQUcsRUFBNUIsRUFDUjtBQUNDLGNBQTJDO0FBQ3ZDLFVBQUksT0FBT3ZCLE1BQU0sQ0FBQ3VXLE9BQWQsS0FBMEIsV0FBOUIsRUFBMkM7QUFDdkM5WCxRQUFBQSxPQUFPLENBQUN1TixLQUFSLENBQWUsMkNBQWY7QUFDQTtBQUNIOztBQUNELFVBQUksT0FBT2hNLE1BQU0sQ0FBQ3VXLE9BQVAsQ0FBZXVFLE1BQWYsQ0FBUCxLQUFrQyxXQUF0QyxFQUFtRDtBQUMvQ3JjLFFBQUFBLE9BQU8sQ0FBQ3VOLEtBQVIsQ0FBZSwyQkFBMEI4TyxNQUFPLG1CQUFoRDtBQUNBO0FBQ0g7QUFDSjs7QUFDRCxRQUFJQSxNQUFNLEtBQUssV0FBWCxJQUEwQixDQUFDLEdBQUc1SixNQUFKLEVBQVl1SCxNQUFaLE9BQXlCblgsRUFBdkQsRUFBMkQ7QUFDdkQsV0FBS2lZLFFBQUwsR0FBZ0JoWSxPQUFPLENBQUNpQixPQUF4QjtBQUNBeEMsTUFBQUEsTUFBTSxDQUFDdVcsT0FBUCxDQUFldUUsTUFBZixFQUF1QjtBQUNuQmpJLFFBQUFBLEdBRG1CO0FBRW5CdlIsUUFBQUEsRUFGbUI7QUFHbkJDLFFBQUFBLE9BSG1CO0FBSW5CbVgsUUFBQUEsR0FBRyxFQUFFLElBSmM7QUFLbkJFLFFBQUFBLEdBQUcsRUFBRSxLQUFLTixJQUFMLEdBQVl3QyxNQUFNLEtBQUssV0FBWCxHQUF5QixLQUFLeEMsSUFBOUIsR0FBcUMsS0FBS0EsSUFBTCxHQUFZO0FBTC9DLE9BQXZCLEVBTUc7QUFDSDtBQUNBO0FBQ0EsUUFUQSxFQVNJaFgsRUFUSjtBQVVIO0FBQ0o7O0FBQ3lCLFFBQXBCMmMsb0JBQW9CLENBQUN2YyxHQUFELEVBQU1uRCxRQUFOLEVBQWdCNlUsS0FBaEIsRUFBdUI5UixFQUF2QixFQUEyQm1hLFVBQTNCLEVBQXVDeUMsYUFBdkMsRUFBc0Q7QUFDNUUsUUFBSXhjLEdBQUcsQ0FBQ3lJLFNBQVIsRUFBbUI7QUFDZjtBQUNBLFlBQU16SSxHQUFOO0FBQ0g7O0FBQ0QsUUFBSSxDQUFDLEdBQUdvUCxZQUFKLEVBQWtCdkosWUFBbEIsQ0FBK0I3RixHQUEvQixLQUF1Q3djLGFBQTNDLEVBQTBEO0FBQ3REM0csTUFBQUEsTUFBTSxDQUFDNUosTUFBUCxDQUFjb08sSUFBZCxDQUFtQixrQkFBbkIsRUFBdUNyYSxHQUF2QyxFQUE0Q0osRUFBNUMsRUFBZ0RtYSxVQUFoRCxFQURzRCxDQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBemIsTUFBQUEsTUFBTSxDQUFDdWEsUUFBUCxDQUFnQmxaLElBQWhCLEdBQXVCQyxFQUF2QixDQVBzRCxDQVF0RDtBQUNBOztBQUNBLFlBQU11USxzQkFBc0IsRUFBNUI7QUFDSDs7QUFDRCxRQUFJO0FBQ0EsVUFBSWtHLFVBQUo7QUFDQSxVQUFJM00sV0FBSjtBQUNBLFVBQUloVixLQUFKOztBQUNBLFVBQUksT0FBTzJoQixVQUFQLEtBQXNCLFdBQXRCLElBQXFDLE9BQU8zTSxXQUFQLEtBQXVCLFdBQWhFLEVBQTZFO0FBQ3pFLFNBQUM7QUFBRXBYLFVBQUFBLElBQUksRUFBRStqQixVQUFSO0FBQXFCM00sVUFBQUE7QUFBckIsWUFBc0MsTUFBTSxLQUFLb1MsY0FBTCxDQUFvQixTQUFwQixDQUE3QztBQUNIOztBQUNELFlBQU1WLFNBQVMsR0FBRztBQUNkMW1CLFFBQUFBLEtBRGM7QUFFZEYsUUFBQUEsU0FBUyxFQUFFNmhCLFVBRkc7QUFHZDNNLFFBQUFBLFdBSGM7QUFJZDFKLFFBQUFBLEdBSmM7QUFLZHNLLFFBQUFBLEtBQUssRUFBRXRLO0FBTE8sT0FBbEI7O0FBT0EsVUFBSSxDQUFDb2IsU0FBUyxDQUFDMW1CLEtBQWYsRUFBc0I7QUFDbEIsWUFBSTtBQUNBMG1CLFVBQUFBLFNBQVMsQ0FBQzFtQixLQUFWLEdBQWtCLE1BQU0sS0FBS2lhLGVBQUwsQ0FBcUIwSCxVQUFyQixFQUFpQztBQUNyRHJXLFlBQUFBLEdBRHFEO0FBRXJEbkQsWUFBQUEsUUFGcUQ7QUFHckQ2VSxZQUFBQTtBQUhxRCxXQUFqQyxDQUF4QjtBQUtILFNBTkQsQ0FNRSxPQUFPK0ssTUFBUCxFQUFlO0FBQ2IxZixVQUFBQSxPQUFPLENBQUN1TixLQUFSLENBQWMseUNBQWQsRUFBeURtUyxNQUF6RDtBQUNBckIsVUFBQUEsU0FBUyxDQUFDMW1CLEtBQVYsR0FBa0IsRUFBbEI7QUFFSDtBQUNKOztBQUNELGFBQU8wbUIsU0FBUDtBQUNILEtBNUJELENBNEJFLE9BQU9zQixZQUFQLEVBQXFCO0FBQ25CLGFBQU8sS0FBS0gsb0JBQUwsQ0FBMEJHLFlBQTFCLEVBQXdDN2YsUUFBeEMsRUFBa0Q2VSxLQUFsRCxFQUF5RDlSLEVBQXpELEVBQTZEbWEsVUFBN0QsRUFBeUUsSUFBekUsQ0FBUDtBQUNIO0FBQ0o7O0FBQ2lCLFFBQVpzQixZQUFZLENBQUMzckIsS0FBRCxFQUFRbU4sUUFBUixFQUFrQjZVLEtBQWxCLEVBQXlCOVIsRUFBekIsRUFBNkIyQyxVQUE3QixFQUF5Q3dYLFVBQXpDLEVBQXFEO0FBQ25FLFFBQUk7QUFDQSxZQUFNNEMsaUJBQWlCLEdBQUcsS0FBSzdFLFVBQUwsQ0FBZ0Jwb0IsS0FBaEIsQ0FBMUI7O0FBQ0EsVUFBSXFxQixVQUFVLENBQUNqWixPQUFYLElBQXNCNmIsaUJBQXRCLElBQTJDLEtBQUtqdEIsS0FBTCxLQUFlQSxLQUE5RCxFQUFxRTtBQUNqRSxlQUFPaXRCLGlCQUFQO0FBQ0g7O0FBQ0QsWUFBTUMsZUFBZSxHQUFHRCxpQkFBaUIsSUFBSSxhQUFhQSxpQkFBbEMsR0FBc0RuUCxTQUF0RCxHQUFrRW1QLGlCQUExRjtBQUNBLFlBQU12QixTQUFTLEdBQUd3QixlQUFlLEdBQUdBLGVBQUgsR0FBcUIsTUFBTSxLQUFLZCxjQUFMLENBQW9CcHNCLEtBQXBCLEVBQTJCbVgsSUFBM0IsQ0FBaUNRLEdBQUQsS0FBUTtBQUM1RjdTLFFBQUFBLFNBQVMsRUFBRTZTLEdBQUcsQ0FBQy9VLElBRDZFO0FBRTVGb1gsUUFBQUEsV0FBVyxFQUFFckMsR0FBRyxDQUFDcUMsV0FGMkU7QUFHNUZzTyxRQUFBQSxPQUFPLEVBQUUzUSxHQUFHLENBQUN3VixHQUFKLENBQVE3RSxPQUgyRTtBQUk1RkMsUUFBQUEsT0FBTyxFQUFFNVEsR0FBRyxDQUFDd1YsR0FBSixDQUFRNUU7QUFKMkUsT0FBUixDQUFoQyxDQUE1RDtBQU9BLFlBQU07QUFBRXpqQixRQUFBQSxTQUFTLEVBQUU2aEIsVUFBYjtBQUEwQjJCLFFBQUFBLE9BQTFCO0FBQW9DQyxRQUFBQTtBQUFwQyxVQUFpRG1ELFNBQXZEOztBQUNBLGdCQUEyQztBQUN2QyxjQUFNO0FBQUUwQixVQUFBQTtBQUFGLFlBQTBCM2QsbUJBQU8sQ0FBQywwQkFBRCxDQUF2Qzs7QUFDQSxZQUFJLENBQUMyZCxrQkFBa0IsQ0FBQ3pHLFVBQUQsQ0FBdkIsRUFBcUM7QUFDakMsZ0JBQU0sSUFBSWhWLEtBQUosQ0FBVyx5REFBd0R4RSxRQUFTLEdBQTVFLENBQU47QUFDSDtBQUNKOztBQUNELFVBQUk4WSxRQUFKOztBQUNBLFVBQUlxQyxPQUFPLElBQUlDLE9BQWYsRUFBd0I7QUFDcEJ0QyxRQUFBQSxRQUFRLEdBQUcsS0FBS08sVUFBTCxDQUFnQjZHLFdBQWhCLENBQTRCLENBQUMsR0FBR3ZOLE1BQUosRUFBWXlELG9CQUFaLENBQWlDO0FBQ3BFcFcsVUFBQUEsUUFEb0U7QUFFcEU2VSxVQUFBQTtBQUZvRSxTQUFqQyxDQUE1QixFQUdQblAsVUFITyxFQUdLeVYsT0FITCxFQUdjLEtBQUs5WCxNQUhuQixDQUFYO0FBSUg7O0FBQ0QsWUFBTXhMLEtBQUssR0FBRyxNQUFNLEtBQUtzb0IsUUFBTCxDQUFjLE1BQUloRixPQUFPLEdBQUcsS0FBS2lGLGNBQUwsQ0FBb0J0SCxRQUFwQixDQUFILEdBQW1Dc0MsT0FBTyxHQUFHLEtBQUtpRixjQUFMLENBQW9CdkgsUUFBcEIsQ0FBSCxHQUFtQyxLQUFLaEgsZUFBTCxDQUFxQjBILFVBQXJCLEVBQWlDO0FBQ3ZKO0FBQ0l4WixRQUFBQSxRQURKO0FBRUk2VSxRQUFBQSxLQUZKO0FBR0k4QixRQUFBQSxNQUFNLEVBQUU1VCxFQUhaO0FBSUlNLFFBQUFBLE1BQU0sRUFBRSxLQUFLQSxNQUpqQjtBQUtJNkQsUUFBQUEsT0FBTyxFQUFFLEtBQUtBLE9BTGxCO0FBTUlJLFFBQUFBLGFBQWEsRUFBRSxLQUFLQTtBQU54QixPQURzSCxDQUF0RyxDQUFwQjtBQVVBaVgsTUFBQUEsU0FBUyxDQUFDMW1CLEtBQVYsR0FBa0JBLEtBQWxCO0FBQ0EsV0FBS29qQixVQUFMLENBQWdCcG9CLEtBQWhCLElBQXlCMHJCLFNBQXpCO0FBQ0EsYUFBT0EsU0FBUDtBQUNILEtBeENELENBd0NFLE9BQU8rQixJQUFQLEVBQWE7QUFDWCxhQUFPLEtBQUtaLG9CQUFMLENBQTBCWSxJQUExQixFQUFnQ3RnQixRQUFoQyxFQUEwQzZVLEtBQTFDLEVBQWlEOVIsRUFBakQsRUFBcURtYSxVQUFyRCxDQUFQO0FBQ0g7QUFDSjs7QUFDRG5ULEVBQUFBLEdBQUcsQ0FBQ2xYLEtBQUQsRUFBUW1OLFFBQVIsRUFBa0I2VSxLQUFsQixFQUF5QjlSLEVBQXpCLEVBQTZCNFYsSUFBN0IsRUFBbUM2RyxXQUFuQyxFQUFnRDtBQUMvQyxTQUFLN0YsVUFBTCxHQUFrQixLQUFsQjtBQUNBLFNBQUs5bUIsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS21OLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBSzZVLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUs4QixNQUFMLEdBQWM1VCxFQUFkO0FBQ0EsV0FBTyxLQUFLMmEsTUFBTCxDQUFZL0UsSUFBWixFQUFrQjZHLFdBQWxCLENBQVA7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBOzs7QUFBTWUsRUFBQUEsY0FBYyxDQUFDbFksRUFBRCxFQUFLO0FBQ2pCLFNBQUt5UyxJQUFMLEdBQVl6UyxFQUFaO0FBQ0g7O0FBQ0RrVixFQUFBQSxlQUFlLENBQUN4YSxFQUFELEVBQUs7QUFDaEIsUUFBSSxDQUFDLEtBQUs0VCxNQUFWLEVBQWtCLE9BQU8sS0FBUDtBQUNsQixVQUFNLENBQUM2SixZQUFELEVBQWVDLE9BQWYsSUFBMEIsS0FBSzlKLE1BQUwsQ0FBWWpiLEtBQVosQ0FBa0IsR0FBbEIsQ0FBaEM7QUFDQSxVQUFNLENBQUNnbEIsWUFBRCxFQUFlQyxPQUFmLElBQTBCNWQsRUFBRSxDQUFDckgsS0FBSCxDQUFTLEdBQVQsQ0FBaEMsQ0FIZ0IsQ0FJaEI7O0FBQ0EsUUFBSWlsQixPQUFPLElBQUlILFlBQVksS0FBS0UsWUFBNUIsSUFBNENELE9BQU8sS0FBS0UsT0FBNUQsRUFBcUU7QUFDakUsYUFBTyxJQUFQO0FBQ0gsS0FQZSxDQVFoQjs7O0FBQ0EsUUFBSUgsWUFBWSxLQUFLRSxZQUFyQixFQUFtQztBQUMvQixhQUFPLEtBQVA7QUFDSCxLQVhlLENBWWhCO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxXQUFPRCxPQUFPLEtBQUtFLE9BQW5CO0FBQ0g7O0FBQ0RsRCxFQUFBQSxZQUFZLENBQUMxYSxFQUFELEVBQUs7QUFDYixVQUFNLEdBQUdrVSxJQUFILElBQVdsVSxFQUFFLENBQUNySCxLQUFILENBQVMsR0FBVCxDQUFqQixDQURhLENBRWI7QUFDQTs7QUFDQSxRQUFJdWIsSUFBSSxLQUFLLEVBQVQsSUFBZUEsSUFBSSxLQUFLLEtBQTVCLEVBQW1DO0FBQy9CeFYsTUFBQUEsTUFBTSxDQUFDSyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0E7QUFDSCxLQVBZLENBUWI7OztBQUNBLFVBQU04ZSxJQUFJLEdBQUd6ckIsUUFBUSxDQUFDQyxjQUFULENBQXdCNmhCLElBQXhCLENBQWI7O0FBQ0EsUUFBSTJKLElBQUosRUFBVTtBQUNOQSxNQUFBQSxJQUFJLENBQUNDLGNBQUw7QUFDQTtBQUNILEtBYlksQ0FjYjtBQUNBOzs7QUFDQSxVQUFNQyxNQUFNLEdBQUczckIsUUFBUSxDQUFDNHJCLGlCQUFULENBQTJCOUosSUFBM0IsRUFBaUMsQ0FBakMsQ0FBZjs7QUFDQSxRQUFJNkosTUFBSixFQUFZO0FBQ1JBLE1BQUFBLE1BQU0sQ0FBQ0QsY0FBUDtBQUNIO0FBQ0o7O0FBQ0Q5QyxFQUFBQSxRQUFRLENBQUNwSCxNQUFELEVBQVM7QUFDYixXQUFPLEtBQUtBLE1BQUwsS0FBZ0JBLE1BQXZCO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFvQixRQUFSOVQsUUFBUSxDQUFDeVIsR0FBRCxFQUFNcUMsTUFBTSxHQUFHckMsR0FBZixFQUFvQnRSLE9BQU8sR0FBRyxFQUE5QixFQUNiO0FBQ0MsUUFBSTJhLE1BQU0sR0FBRyxDQUFDLEdBQUc5SyxpQkFBSixFQUF1QitILGdCQUF2QixDQUF3Q3RHLEdBQXhDLENBQWI7QUFDQSxRQUFJO0FBQUV0VSxNQUFBQSxRQUFRLEVBQUVnaEI7QUFBWixRQUEyQnJELE1BQS9COztBQUNBLFFBQUk3VixLQUFKLEVBQXFDLEVBV3BDOztBQUNELFVBQU0yUCxLQUFLLEdBQUcsTUFBTSxLQUFLNEIsVUFBTCxDQUFnQndFLFdBQWhCLEVBQXBCO0FBQ0EsUUFBSW5ZLFVBQVUsR0FBR2lSLE1BQWpCOztBQUNBLFFBQUk3TyxLQUFKLEVBQStELEVBQS9ELE1BYU87QUFDSDZWLE1BQUFBLE1BQU0sQ0FBQzNkLFFBQVAsR0FBa0J3WCxtQkFBbUIsQ0FBQ21HLE1BQU0sQ0FBQzNkLFFBQVIsRUFBa0J5WCxLQUFsQixDQUFyQzs7QUFDQSxVQUFJa0csTUFBTSxDQUFDM2QsUUFBUCxLQUFvQmdoQixTQUF4QixFQUFtQztBQUMvQkEsUUFBQUEsU0FBUyxHQUFHckQsTUFBTSxDQUFDM2QsUUFBbkI7QUFDQTJkLFFBQUFBLE1BQU0sQ0FBQzNkLFFBQVAsR0FBa0JnaEIsU0FBbEI7QUFDQTFNLFFBQUFBLEdBQUcsR0FBRyxDQUFDLEdBQUczQixNQUFKLEVBQVl5RCxvQkFBWixDQUFpQ3VILE1BQWpDLENBQU47QUFDSDtBQUNKOztBQUNELFVBQU05cUIsS0FBSyxHQUFHLENBQUMsR0FBR3lmLHVCQUFKLEVBQTZCN0ssdUJBQTdCLENBQXFEdVosU0FBckQsQ0FBZCxDQXRDRCxDQXVDQzs7QUFDQSxjQUEyQztBQUN2QztBQUNIOztBQUNELFVBQU1yWCxPQUFPLENBQUNtRSxHQUFSLENBQVksQ0FDZCxLQUFLdUwsVUFBTCxDQUFnQjRILE1BQWhCLENBQXVCcHVCLEtBQXZCLEVBQThCbVgsSUFBOUIsQ0FBb0NrWCxLQUFELElBQVM7QUFDeEMsYUFBT0EsS0FBSyxHQUFHLEtBQUtkLGNBQUwsQ0FBb0IsS0FBSy9HLFVBQUwsQ0FBZ0I2RyxXQUFoQixDQUE0QjVMLEdBQTVCLEVBQWlDNU8sVUFBakMsRUFBNkMsSUFBN0MsRUFBbUQsT0FBTzFDLE9BQU8sQ0FBQ0ssTUFBZixLQUEwQixXQUExQixHQUF3Q0wsT0FBTyxDQUFDSyxNQUFoRCxHQUF5RCxLQUFLQSxNQUFqSCxDQUFwQixDQUFILEdBQW1KLEtBQS9KO0FBQ0gsS0FGRCxDQURjLEVBSWQsS0FBS2dXLFVBQUwsQ0FBZ0JyVyxPQUFPLENBQUM4RCxRQUFSLEdBQW1CLFVBQW5CLEdBQWdDLFVBQWhELEVBQTREalUsS0FBNUQsQ0FKYyxDQUFaLENBQU47QUFNSDs7QUFDbUIsUUFBZG9zQixjQUFjLENBQUNwc0IsS0FBRCxFQUFRO0FBQ3hCLFFBQUkrWSxTQUFTLEdBQUcsS0FBaEI7O0FBQ0EsVUFBTXVWLE1BQU0sR0FBRyxLQUFLMUYsR0FBTCxHQUFXLE1BQUk7QUFDMUI3UCxNQUFBQSxTQUFTLEdBQUcsSUFBWjtBQUNILEtBRkQ7O0FBR0EsVUFBTXdWLGVBQWUsR0FBRyxNQUFNLEtBQUsvSCxVQUFMLENBQWdCZ0ksUUFBaEIsQ0FBeUJ4dUIsS0FBekIsQ0FBOUI7O0FBQ0EsUUFBSStZLFNBQUosRUFBZTtBQUNYLFlBQU02QixLQUFLLEdBQUcsSUFBSWpKLEtBQUosQ0FBVyx3Q0FBdUMzUixLQUFNLEdBQXhELENBQWQ7QUFDQTRhLE1BQUFBLEtBQUssQ0FBQzdCLFNBQU4sR0FBa0IsSUFBbEI7QUFDQSxZQUFNNkIsS0FBTjtBQUNIOztBQUNELFFBQUkwVCxNQUFNLEtBQUssS0FBSzFGLEdBQXBCLEVBQXlCO0FBQ3JCLFdBQUtBLEdBQUwsR0FBVyxJQUFYO0FBQ0g7O0FBQ0QsV0FBTzJGLGVBQVA7QUFDSDs7QUFDRGpCLEVBQUFBLFFBQVEsQ0FBQzVTLEVBQUQsRUFBSztBQUNULFFBQUkzQixTQUFTLEdBQUcsS0FBaEI7O0FBQ0EsVUFBTXVWLE1BQU0sR0FBRyxNQUFJO0FBQ2Z2VixNQUFBQSxTQUFTLEdBQUcsSUFBWjtBQUNILEtBRkQ7O0FBR0EsU0FBSzZQLEdBQUwsR0FBVzBGLE1BQVg7QUFDQSxXQUFPNVQsRUFBRSxHQUFHdkQsSUFBTCxDQUFXMk8sSUFBRCxJQUFRO0FBQ3JCLFVBQUl3SSxNQUFNLEtBQUssS0FBSzFGLEdBQXBCLEVBQXlCO0FBQ3JCLGFBQUtBLEdBQUwsR0FBVyxJQUFYO0FBQ0g7O0FBQ0QsVUFBSTdQLFNBQUosRUFBZTtBQUNYLGNBQU0wVSxJQUFJLEdBQUcsSUFBSTliLEtBQUosQ0FBVSxpQ0FBVixDQUFiO0FBQ0E4YixRQUFBQSxJQUFJLENBQUMxVSxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsY0FBTTBVLElBQU47QUFDSDs7QUFDRCxhQUFPM0gsSUFBUDtBQUNILEtBVk0sQ0FBUDtBQVdIOztBQUNEeUgsRUFBQUEsY0FBYyxDQUFDdEgsUUFBRCxFQUFXO0FBQ3JCLFVBQU07QUFBRWhXLE1BQUFBLElBQUksRUFBRXdlO0FBQVIsUUFBc0IsSUFBSTVNLEdBQUosQ0FBUW9FLFFBQVIsRUFBa0JyWCxNQUFNLENBQUN1YSxRQUFQLENBQWdCbFosSUFBbEMsQ0FBNUI7O0FBQ0EsUUFBSSxLQUFKLEVBQW9GLEVBRW5GOztBQUNELFdBQU8rVixhQUFhLENBQUNDLFFBQUQsRUFBVyxLQUFLK0IsS0FBaEIsQ0FBYixDQUFvQzdRLElBQXBDLENBQTBDMk8sSUFBRCxJQUFRO0FBQ3BELFdBQUtrQixHQUFMLENBQVN5SCxRQUFULElBQXFCM0ksSUFBckI7QUFDQSxhQUFPQSxJQUFQO0FBQ0gsS0FITSxDQUFQO0FBSUg7O0FBQ0QwSCxFQUFBQSxjQUFjLENBQUN2SCxRQUFELEVBQVc7QUFDckIsVUFBTTtBQUFFaFcsTUFBQUEsSUFBSSxFQUFFeWU7QUFBUixRQUF5QixJQUFJN00sR0FBSixDQUFRb0UsUUFBUixFQUFrQnJYLE1BQU0sQ0FBQ3VhLFFBQVAsQ0FBZ0JsWixJQUFsQyxDQUEvQjs7QUFDQSxRQUFJLEtBQUtnWCxHQUFMLENBQVN5SCxXQUFULENBQUosRUFBMkI7QUFDdkIsYUFBTyxLQUFLekgsR0FBTCxDQUFTeUgsV0FBVCxDQUFQO0FBQ0g7O0FBQ0QsV0FBTyxLQUFLekgsR0FBTCxDQUFTeUgsV0FBVCxJQUF3QjFJLGFBQWEsQ0FBQ0MsUUFBRCxFQUFXLEtBQUsrQixLQUFoQixDQUFiLENBQW9DN1EsSUFBcEMsQ0FBMEMyTyxJQUFELElBQVE7QUFDNUUsYUFBTyxLQUFLbUIsR0FBTCxDQUFTeUgsV0FBVCxDQUFQO0FBQ0EsYUFBTzVJLElBQVA7QUFDSCxLQUg4QixFQUc1QnpWLEtBSDRCLENBR3JCb2QsSUFBRCxJQUFRO0FBQ2IsYUFBTyxLQUFLeEcsR0FBTCxDQUFTeUgsV0FBVCxDQUFQO0FBQ0EsWUFBTWpCLElBQU47QUFDSCxLQU44QixDQUEvQjtBQU9IOztBQUNEeE8sRUFBQUEsZUFBZSxDQUFDbmEsU0FBRCxFQUFZNnBCLEdBQVosRUFBaUI7QUFDNUIsVUFBTTtBQUFFN3BCLE1BQUFBLFNBQVMsRUFBRThwQjtBQUFiLFFBQXVCLEtBQUt4RyxVQUFMLENBQWdCLE9BQWhCLENBQTdCOztBQUNBLFVBQU15RyxPQUFPLEdBQUcsS0FBS2hHLFFBQUwsQ0FBYytGLElBQWQsQ0FBaEI7O0FBQ0FELElBQUFBLEdBQUcsQ0FBQ0UsT0FBSixHQUFjQSxPQUFkO0FBQ0EsV0FBTyxDQUFDLEdBQUcvTyxNQUFKLEVBQVlnUCxtQkFBWixDQUFnQ0YsSUFBaEMsRUFBc0M7QUFDekNDLE1BQUFBLE9BRHlDO0FBRXpDL3BCLE1BQUFBLFNBRnlDO0FBR3pDc0gsTUFBQUEsTUFBTSxFQUFFLElBSGlDO0FBSXpDdWlCLE1BQUFBO0FBSnlDLEtBQXRDLENBQVA7QUFNSDs7QUFDRHBFLEVBQUFBLGtCQUFrQixDQUFDcmEsRUFBRCxFQUFLbWEsVUFBTCxFQUFpQjtBQUMvQixRQUFJLEtBQUt6QixHQUFULEVBQWM7QUFDVnpDLE1BQUFBLE1BQU0sQ0FBQzVKLE1BQVAsQ0FBY29PLElBQWQsQ0FBbUIsa0JBQW5CLEVBQXVDbEssc0JBQXNCLEVBQTdELEVBQWlFdlEsRUFBakUsRUFBcUVtYSxVQUFyRTtBQUNBLFdBQUt6QixHQUFMO0FBQ0EsV0FBS0EsR0FBTCxHQUFXLElBQVg7QUFDSDtBQUNKOztBQUNEaUMsRUFBQUEsTUFBTSxDQUFDL0UsSUFBRCxFQUFPNkcsV0FBUCxFQUFvQjtBQUN0QixXQUFPLEtBQUtoRSxHQUFMLENBQVM3QyxJQUFULEVBQWUsS0FBS3NDLFVBQUwsQ0FBZ0IsT0FBaEIsRUFBeUJ0akIsU0FBeEMsRUFBbUQ2bkIsV0FBbkQsQ0FBUDtBQUNIOztBQXZ2QlE7O0FBeXZCYnhHLE1BQU0sQ0FBQzVKLE1BQVAsR0FBZ0IsQ0FBQyxHQUFHc0QsS0FBSixFQUFXdlEsT0FBWCxFQUFoQjtBQUNBRixlQUFBLEdBQWtCK1csTUFBbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RpQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsTUFBTThJLFVBQW9CLEdBQUcsTUFBTTtBQUMvQixzQkFBTyw4REFBQyxtREFBRDtBQUFRLGFBQVMsRUFBRWp3QixzRUFBbkI7QUFBQSw0QkFDSCw4REFBQyxtREFBRDtBQUFRLFVBQUksRUFBRTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREcsZUFFSCw4REFBQyxrRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZHLGVBR0gsOERBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUtILENBTkQ7O0FBUUFpd0IsVUFBVSxDQUFDaFEsZUFBWCxHQUE2QitQLHFFQUFBLENBQTZCRyxLQUFELElBQVcsT0FBTztBQUFFQyxFQUFBQTtBQUFGLENBQVAsS0FBbUI7QUFBQTs7QUFHbkYsUUFBTXRZLE9BQU8sQ0FBQ21FLEdBQVIsQ0FBWSxDQUNka1UsS0FBSyxDQUFDRSxRQUFOLEdBQWlCcnRCLE1BQWpCLENBQXdCRCxVQUF4QixDQUFtQzBDLE1BQW5DLElBQTZDLENBQTdDLElBQWtEMHFCLEtBQUssQ0FBQ3h2QixRQUFOLENBQzlDb3ZCLDBFQUFlLENBQUMsRUFBRCxDQUQrQixDQURwQyxFQUtkSSxLQUFLLENBQUN4dkIsUUFBTixDQUNJNEIsNkVBQWtCLENBQUM7QUFDZnVCLElBQUFBLElBQUksRUFBRSxDQURTO0FBRWZGLElBQUFBLElBQUksRUFBRSxDQUZTO0FBR2ZHLElBQUFBLEtBQUssRUFBRTtBQUhRLEdBQUQsQ0FEdEIsQ0FMYyxFQVlkb3NCLEtBQUssQ0FBQ3h2QixRQUFOLENBQWVnSSw4RUFBbUIsQ0FBQztBQUMvQi9FLElBQUFBLElBQUksRUFBRSxDQUR5QjtBQUUvQkcsSUFBQUEsS0FBSyxFQUFFLEVBRndCO0FBRy9CaEMsSUFBQUEsRUFBRSwyQkFBRW91QixLQUFLLENBQUNFLFFBQU4sR0FBaUJqd0IsSUFBakIsQ0FBc0JBLElBQXhCLDBEQUFFLHNCQUE0QjJCO0FBSEQsR0FBRCxDQUFsQyxDQVpjLENBQVosQ0FBTjtBQWtCQSxTQUFPLEVBQVA7QUFDSCxDQXRCNEIsQ0FBN0I7QUF3QkEsaUVBQWVrdUIsVUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQ0E7O0FBMkJBO0FBQ08sTUFBTU8sYUFBdUMsR0FBSWhOLE1BQUQsSUFBWTtBQUMvRCxTQUFPOE0sdURBQUEsQ0FBWTtBQUNmN04sSUFBQUEsR0FBRyxFQUFFOE4sMERBRFU7QUFFZjdGLElBQUFBLE1BQU0sRUFBRSxLQUZPO0FBR2ZsSCxJQUFBQSxNQUFNLEVBQUVBO0FBSE8sR0FBWixDQUFQO0FBS0gsQ0FOTTtBQVFQOztBQUNPLE1BQU1tTixpQkFBeUMsR0FBSW5OLE1BQUQsSUFBWTtBQUNqRSxTQUFPOE0sdURBQUEsQ0FBWTtBQUNmN04sSUFBQUEsR0FBRyxFQUFFOE4sOERBRFU7QUFFZjdGLElBQUFBLE1BQU0sRUFBRSxLQUZPO0FBR2ZsSCxJQUFBQSxNQUFNLEVBQUVBO0FBSE8sR0FBWixDQUFQO0FBS0gsQ0FOTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENQO0FBQ0E7O0FBZ0RBO0FBQ08sTUFBTXFOLG9CQUFzQyxHQUFHLE1BQU07QUFDeEQsU0FBT1AsdURBQUEsQ0FBWTtBQUNmN04sSUFBQUEsR0FBRyxFQUFFOE4sc0RBRFU7QUFFZjdGLElBQUFBLE1BQU0sRUFBRTtBQUZPLEdBQVosQ0FBUDtBQUlILENBTE07QUFRUDs7QUFDTyxNQUFNcUcsYUFBK0IsR0FBRyxNQUFNO0FBQ2pELFNBQU9ULHVEQUFBLENBQVk7QUFDZjdOLElBQUFBLEdBQUcsRUFBRThOLDZEQURVO0FBRWY3RixJQUFBQSxNQUFNLEVBQUU7QUFGTyxHQUFaLENBQVA7QUFJSCxDQUxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RFA7QUFDQTs7QUFpQ0E7QUFDTyxNQUFNc0csYUFBdUMsR0FBSXhOLE1BQUQsSUFBWTtBQUMvRCxTQUFPOE0sdURBQUEsQ0FBWTtBQUNmN04sSUFBQUEsR0FBRyxFQUFFOE4sMERBRFU7QUFFZi9NLElBQUFBLE1BQU0sRUFBRUE7QUFGTyxHQUFaLENBQVA7QUFJSCxDQUxNO0FBT1A7O0FBQ08sTUFBTTBOLGlCQUF5QyxHQUFJMU4sTUFBRCxJQUFZO0FBQ2pFLFNBQU84TSx1REFBQSxDQUFZO0FBQ2Y3TixJQUFBQSxHQUFHLEVBQUU4Tiw0REFEVTtBQUVmL00sSUFBQUEsTUFBTSxFQUFFQTtBQUZPLEdBQVosQ0FBUDtBQUlILENBTE07Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NQO0FBQ0E7QUFFTyxTQUFTNE4sV0FBVCxDQUFxQjVOLE1BQXJCLEVBQTZDO0FBQ2hELFNBQU84TSx1REFBQSxDQUFZO0FBQ2Y1RixJQUFBQSxNQUFNLEVBQUUsS0FETztBQUVmakksSUFBQUEsR0FBRyxFQUFFOE4sd0RBQUEsR0FBZSxNQUFmLEdBQXdCL00sTUFBTSxDQUFDemhCO0FBRnJCLEdBQVosQ0FBUDtBQUlIO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkQ7QUFDQTtBQXdDTyxTQUFTc3ZCLFlBQVQsQ0FBc0I3TixNQUF0QixFQUEyQztBQUM5QyxTQUFPOE0sdURBQUEsQ0FBWTtBQUNmNUYsSUFBQUEsTUFBTSxFQUFFLE1BRE87QUFFZmpJLElBQUFBLEdBQUcsRUFBRThOLHVEQUZVO0FBR2Z6SixJQUFBQSxJQUFJLEVBQUV0RCxNQUhTO0FBSWYrTixJQUFBQSxPQUFPLEVBQUU7QUFDTCxzQkFBZ0I7QUFEWDtBQUpNLEdBQVosQ0FBUDtBQVFIO0FBQUE7QUFFTSxTQUFTQyxRQUFULENBQWtCaE8sTUFBbEIsRUFBdUM7QUFDMUMsU0FBTzhNLHVEQUFBLENBQVk7QUFDZjVGLElBQUFBLE1BQU0sRUFBRSxNQURPO0FBRWZqSSxJQUFBQSxHQUFHLEVBQUU4Tix3REFGVTtBQUdmekosSUFBQUEsSUFBSSxFQUFFdEQ7QUFIUyxHQUFaLENBQVA7QUFLSDtBQUFBO0FBRU0sU0FBU2lPLFNBQVQsQ0FBbUJqTyxNQUFuQixFQUF3QztBQUMzQyxTQUFPOE0sdURBQUEsQ0FBWTtBQUNmNUYsSUFBQUEsTUFBTSxFQUFFLE1BRE87QUFFZmpJLElBQUFBLEdBQUcsRUFBRThOLHlEQUZVO0FBR2Z6SixJQUFBQSxJQUFJLEVBQUV0RDtBQUhTLEdBQVosQ0FBUDtBQUtIO0FBQUE7QUFFRDs7QUFDTyxNQUFNa08sU0FBUyxHQUFHLE1BQU07QUFDM0IsU0FBT3BCLHVEQUFBLENBQVk7QUFDZjVGLElBQUFBLE1BQU0sRUFBRSxNQURPO0FBRWZqSSxJQUFBQSxHQUFHLEVBQUU4Tix5REFBYW1CO0FBRkgsR0FBWixDQUFQO0FBSUgsQ0FMTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFUDtBQUVBO0FBR0E7Q0FHQTs7QUFDTyxNQUFNbnZCLGtCQUFrQixHQUFHb3ZCLHlEQUFZLENBQUMsYUFBRCxFQUFnQm5CLDJEQUFoQixDQUF2QztBQUNBLE1BQU03bkIsbUJBQW1CLEdBQUdncEIseURBQVksQ0FBQyxtQkFBRCxFQUFzQmhCLCtEQUF0QixDQUF4QztBQU9QLE1BQU1rQixZQUFzQixHQUFHO0FBQzNCaHZCLEVBQUFBLGFBQWEsRUFBRTtBQUFFK0MsSUFBQUEsS0FBSyxFQUFFLENBQVQ7QUFBWUosSUFBQUEsSUFBSSxFQUFFO0FBQWxCLEdBRFk7QUFFM0JxRCxFQUFBQSxZQUFZLEVBQUU7QUFBRWpELElBQUFBLEtBQUssRUFBRSxDQUFUO0FBQVlKLElBQUFBLElBQUksRUFBRTtBQUFsQjtBQUZhLENBQS9CO0FBS08sTUFBTXNzQixTQUFTLEdBQUdGLDZEQUFXLENBQUM7QUFDakN6UixFQUFBQSxJQUFJLEVBQUUsUUFEMkI7QUFFakMwUixFQUFBQSxZQUZpQztBQUdqQ0UsRUFBQUEsUUFBUSxFQUFFLEVBSHVCO0FBS2pDQyxFQUFBQSxhQUFhLEVBQUU7QUFDWCxLQUFDenZCLGtCQUFrQixDQUFDMHZCLFNBQW5CLENBQTZCbnVCLElBQTlCLEdBQXFDLENBQUN4RCxLQUFELEVBQVE0eEIsTUFBUixLQUFpRTtBQUNsRzV4QixNQUFBQSxLQUFLLENBQUN1QyxhQUFOLEdBQXNCcXZCLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlckwsSUFBckM7QUFDSCxLQUhVO0FBSVgsS0FBQ25lLG1CQUFtQixDQUFDc3BCLFNBQXBCLENBQThCbnVCLElBQS9CLEdBQXNDLENBQUN4RCxLQUFELEVBQVE0eEIsTUFBUixLQUFpRTtBQUNuRzV4QixNQUFBQSxLQUFLLENBQUN1SSxZQUFOLEdBQXFCcXBCLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlckwsSUFBcEM7QUFDSDtBQU5VO0FBTGtCLENBQUQsQ0FBN0I7QUFlUCxpRUFBZWdMLFNBQVMsQ0FBQ00sT0FBekI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNBO0FBRUE7QUFFQTtBQUdBO0FBRU8sTUFBTUMsc0JBQXNCLEdBQUdWLHlEQUFZLENBQUMsMEJBQUQsRUFBNkJkLGtFQUE3QixDQUEzQztBQUNBLE1BQU1kLGVBQWUsR0FBRzRCLHlEQUFZLENBQUMsbUJBQUQsRUFBc0JaLDJEQUF0QixDQUFwQztBQU1QLE1BQU1jLFlBQXNCLEdBQUc7QUFDM0I5dUIsRUFBQUEsVUFBVSxFQUFFO0FBRGUsQ0FBL0I7QUFJTyxNQUFNdXZCLFdBQVcsR0FBR1YsNkRBQVcsQ0FBQztBQUNuQ3pSLEVBQUFBLElBQUksRUFBRSxRQUQ2QjtBQUVuQzBSLEVBQUFBLFlBRm1DO0FBR25DRSxFQUFBQSxRQUFRLEVBQUU7QUFDTlEsSUFBQUEsU0FBUyxFQUFFLE1BQU0sQ0FBRztBQURkLEdBSHlCO0FBTW5DUCxFQUFBQSxhQUFhLEVBQUU7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBQ2pDLGVBQWUsQ0FBQ2tDLFNBQWhCLENBQTBCbnVCLElBQTNCLEdBQWtDLENBQUN4RCxLQUFELEVBQVE0eEIsTUFBUixLQUE4RDtBQUM1RjV4QixNQUFBQSxLQUFLLENBQUN5QyxVQUFOLEdBQW1CbXZCLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlckwsSUFBbEM7QUFDSDtBQVJVO0FBTm9CLENBQUQsQ0FBL0I7QUFrQkEsTUFBTTtBQUFFeUwsRUFBQUE7QUFBRixJQUFnQkQsV0FBVyxDQUFDRSxPQUFsQztBQUNQLGlFQUFlRixXQUFXLENBQUNGLE9BQTNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUVBO0FBSUE7Q0FJQTs7QUFFTyxNQUFNSyxrQkFBa0IsR0FBR2QseURBQVksQ0FBQyxnQkFBRCxFQUFtQlgsMkRBQW5CLENBQXZDO0FBQ0EsTUFBTTBCLGFBQWEsR0FBR2YseURBQVksQ0FBQyxXQUFELEVBQWNYLDJEQUFkLENBQWxDO0FBQ0EsTUFBTTJCLGVBQWUsR0FBR2hCLHlEQUFZLENBQUMsYUFBRCxFQUFnQlgsMkRBQWhCLENBQXBDO0FBQ0EsTUFBTTRCLGFBQWEsR0FBR2pCLHlEQUFZLENBQUMsV0FBRCxFQUFjWCwyREFBZCxDQUFsQztBQUNBLE1BQU02Qix3QkFBd0IsR0FBR2xCLHlEQUFZLENBQUMsdUJBQUQsRUFBMEJuQiwyREFBMUIsQ0FBN0M7QUFXUCxNQUFNcUIsWUFBc0IsR0FBRztBQUM3QmlCLEVBQUFBLE1BQU0sRUFBRSxLQURxQjtBQUU3QkMsRUFBQUEsYUFBYSxFQUFFLEVBRmM7QUFHN0JDLEVBQUFBLFFBQVEsRUFBRSxFQUhtQjtBQUk3QkMsRUFBQUEsVUFBVSxFQUFFLEVBSmlCO0FBSzdCQyxFQUFBQSxRQUFRLEVBQUUsRUFMbUI7QUFNN0JDLEVBQUFBLG1CQUFtQixFQUFFO0FBQ25CdnRCLElBQUFBLEtBQUssRUFBRSxDQURZO0FBRW5CSixJQUFBQSxJQUFJLEVBQUU7QUFGYTtBQU5RLENBQS9CO0FBWU8sTUFBTXNzQixTQUFTLEdBQUdGLDZEQUFXLENBQUM7QUFDbkN6UixFQUFBQSxJQUFJLEVBQUUsTUFENkI7QUFFbkMwUixFQUFBQSxZQUZtQztBQUduQ0UsRUFBQUEsUUFBUSxFQUFFLEVBSHlCO0FBS25DQyxFQUFBQSxhQUFhLEVBQUU7QUFDYixLQUFDUyxrQkFBa0IsQ0FBQ1IsU0FBbkIsQ0FBNkJudUIsSUFBOUIsR0FBcUMsQ0FBQ3hELEtBQUQsRUFBUTR4QixNQUFSLEtBQThEO0FBQ2pHNXhCLE1BQUFBLEtBQUssQ0FBQ3d5QixNQUFOLEdBQWUsSUFBZjtBQUNBeHlCLE1BQUFBLEtBQUssQ0FBQ3l5QixhQUFOLEdBQXNCYixNQUFNLENBQUNDLE9BQVAsQ0FBZXJMLElBQXJDO0FBQ0F6WSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWixFQUFrQzRqQixNQUFNLENBQUNDLE9BQVAsQ0FBZXJMLElBQWYsQ0FBb0JyaEIsTUFBdEQ7QUFFRCxLQU5ZO0FBT2IsS0FBQ2l0QixhQUFhLENBQUNULFNBQWQsQ0FBd0JudUIsSUFBekIsR0FBZ0MsQ0FBQ3hELEtBQUQsRUFBUTR4QixNQUFSLEtBQXlEO0FBQ3ZGNXhCLE1BQUFBLEtBQUssQ0FBQzB5QixRQUFOLEdBQWlCZCxNQUFNLENBQUNDLE9BQVAsQ0FBZXJMLElBQWhDO0FBQ0F6WSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCNGpCLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlckwsSUFBZixDQUFvQnJoQixNQUFqRDtBQUNELEtBVlk7QUFXYixLQUFDa3RCLGVBQWUsQ0FBQ1YsU0FBaEIsQ0FBMEJudUIsSUFBM0IsR0FBa0MsQ0FBQ3hELEtBQUQsRUFBUTR4QixNQUFSLEtBQXlEO0FBQ3pGNXhCLE1BQUFBLEtBQUssQ0FBQzJ5QixVQUFOLEdBQW1CZixNQUFNLENBQUNDLE9BQVAsQ0FBZXJMLElBQWxDO0FBQ0F6WSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQjRqQixNQUFNLENBQUNDLE9BQVAsQ0FBZXJMLElBQWYsQ0FBb0JyaEIsTUFBbkQ7QUFDRCxLQWRZO0FBZWIsS0FBQ210QixhQUFhLENBQUNYLFNBQWQsQ0FBd0JudUIsSUFBekIsR0FBZ0MsQ0FBQ3hELEtBQUQsRUFBUTR4QixNQUFSLEtBQXlEO0FBQ3ZGNXhCLE1BQUFBLEtBQUssQ0FBQzR5QixRQUFOLEdBQWlCaEIsTUFBTSxDQUFDQyxPQUFQLENBQWVyTCxJQUFoQztBQUNBelksTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QjRqQixNQUFNLENBQUNDLE9BQVAsQ0FBZXJMLElBQWYsQ0FBb0JyaEIsTUFBakQ7QUFDRCxLQWxCWTtBQW1CYixLQUFDb3RCLHdCQUF3QixDQUFDWixTQUF6QixDQUFtQ251QixJQUFwQyxHQUEyQyxDQUFDeEQsS0FBRCxFQUFRNHhCLE1BQVIsS0FBaUU7QUFDMUc1eEIsTUFBQUEsS0FBSyxDQUFDNnlCLG1CQUFOLEdBQTRCakIsTUFBTSxDQUFDQyxPQUFQLENBQWVyTCxJQUEzQztBQUNEO0FBckJZO0FBTG9CLENBQUQsQ0FBN0I7QUE4QlAsaUVBQWVnTCxTQUFTLENBQUNNLE9BQXpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUU8sU0FBU2dCLGVBQVQsQ0FBeUJsQixNQUF6QixFQUFxRTtBQUMxRSxTQUFPQSxNQUFNLENBQUNwdUIsSUFBUCxDQUFZaVMsUUFBWixDQUFxQixVQUFyQixDQUFQO0FBQ0Q7QUFDTSxTQUFTc2QsZ0JBQVQsQ0FBMEJuQixNQUExQixFQUF1RTtBQUM1RSxTQUFPQSxNQUFNLENBQUNwdUIsSUFBUCxDQUFZaVMsUUFBWixDQUFxQixXQUFyQixDQUFQO0FBQ0Q7QUFDTSxTQUFTdWQsaUJBQVQsQ0FBMkJwQixNQUEzQixFQUF5RTtBQUM5RSxTQUFPQSxNQUFNLENBQUNwdUIsSUFBUCxDQUFZaVMsUUFBWixDQUFxQixZQUFyQixDQUFQO0FBQ0Q7QUFJRCxNQUFNOGIsWUFBMEIsR0FBRyxFQUFuQztBQUVPLE1BQU0wQixZQUFZLEdBQUczQiw2REFBVyxDQUFDO0FBQ3RDelIsRUFBQUEsSUFBSSxFQUFFLFNBRGdDO0FBRXRDMFIsRUFBQUEsWUFGc0M7QUFHdEM7QUFDQUUsRUFBQUEsUUFBUSxFQUFFLEVBSjRCO0FBS3RDO0FBQ0E7QUFDQUMsRUFBQUEsYUFBYSxFQUFHd0IsT0FBRCxJQUFhO0FBQzFCQSxJQUFBQSxPQUFPLENBQ0pDLFVBREgsQ0FDY0wsZUFEZCxFQUMrQixDQUFDOXlCLEtBQUQsRUFBUTR4QixNQUFSLEtBQW1CO0FBQzlDLFlBQU1wdUIsSUFBSSxHQUFHb3VCLE1BQU0sQ0FBQ3B1QixJQUFQLENBQVlxTyxPQUFaLENBQW9CLFVBQXBCLEVBQWdDLEVBQWhDLENBQWI7QUFDQTdSLE1BQUFBLEtBQUssQ0FBQ3dELElBQUQsQ0FBTCxHQUFjLElBQWQ7QUFDRCxLQUpILEVBS0cydkIsVUFMSCxDQUtjSixnQkFMZCxFQUtnQyxDQUFDL3lCLEtBQUQsRUFBUTR4QixNQUFSLEtBQW1CO0FBQy9DLFlBQU1wdUIsSUFBSSxHQUFHb3VCLE1BQU0sQ0FBQ3B1QixJQUFQLENBQVlxTyxPQUFaLENBQW9CLFdBQXBCLEVBQWlDLEVBQWpDLENBQWI7QUFDQTdSLE1BQUFBLEtBQUssQ0FBQ3dELElBQUQsQ0FBTCxHQUFjLEtBQWQ7QUFDRCxLQVJILEVBU0U7QUFURixLQVVHMnZCLFVBVkgsQ0FVY0gsaUJBVmQsRUFVaUMsQ0FBQ2h6QixLQUFELEVBQVE0eEIsTUFBUixLQUFtQjtBQUNoRCxZQUFNcHVCLElBQUksR0FBR291QixNQUFNLENBQUNwdUIsSUFBUCxDQUFZcU8sT0FBWixDQUFvQixZQUFwQixFQUFrQyxFQUFsQyxDQUFiO0FBQ0E3UixNQUFBQSxLQUFLLENBQUN3RCxJQUFELENBQUwsR0FBYyxLQUFkO0FBQ0QsS0FiSDtBQWNEO0FBdEJxQyxDQUFELENBQWhDO0FBeUJQLGlFQUFleXZCLFlBQVksQ0FBQ25CLE9BQTVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERBO0FBQ0E7QUFTQSxNQUFNUCxZQUF3QixHQUFHO0FBQzdCM2tCLEVBQUFBLFdBQVcsRUFBRSxLQURnQjtBQUU3QndtQixFQUFBQSxhQUFhLEVBQUU7QUFGYyxDQUFqQztBQUtPLE1BQU1DLFVBQVUsR0FBRy9CLDZEQUFXLENBQUM7QUFDbEN6UixFQUFBQSxJQUFJLEVBQUUsT0FENEI7QUFFbEMwUixFQUFBQSxZQUZrQztBQUdsQztBQUNBRSxFQUFBQSxRQUFRLEVBQUU7QUFDTnJ5QixJQUFBQSxTQUFTLEVBQUdZLEtBQUQsSUFBVztBQUNsQmdELE1BQUFBLFFBQVEsQ0FBQ3FXLElBQVQsQ0FBY3ZWLEtBQWQsQ0FBb0J3dkIsUUFBcEIsR0FBK0IsUUFBL0I7O0FBQ0EsVUFBSXR3QixRQUFRLENBQUN5TSxlQUFULENBQXlCdkwsV0FBekIsSUFBd0MsSUFBNUMsRUFBa0Q7QUFDOUNsQixRQUFBQSxRQUFRLENBQUNxVyxJQUFULENBQWN2VixLQUFkLENBQW9CbUssWUFBcEIsR0FBbUMxQiw4REFBaUIsS0FBSyxJQUF6RDtBQUNIOztBQUNEdk0sTUFBQUEsS0FBSyxDQUFDNE0sV0FBTixHQUFvQixJQUFwQjtBQUNILEtBUEs7QUFRTjJtQixJQUFBQSxTQUFTLEVBQUd2ekIsS0FBRCxJQUFXO0FBQ2xCZ0QsTUFBQUEsUUFBUSxDQUFDcVcsSUFBVCxDQUFjdlYsS0FBZCxDQUFvQnd2QixRQUFwQixHQUErQixNQUEvQjtBQUNBdHdCLE1BQUFBLFFBQVEsQ0FBQ3FXLElBQVQsQ0FBY3ZWLEtBQWQsQ0FBb0JtSyxZQUFwQixHQUFtQyxLQUFuQztBQUNBak8sTUFBQUEsS0FBSyxDQUFDNE0sV0FBTixHQUFvQixLQUFwQjtBQUNILEtBWks7QUFhTjRtQixJQUFBQSxhQUFhLEVBQUd4ekIsS0FBRCxJQUFXO0FBQ3RCLFVBQUlBLEtBQUssQ0FBQ296QixhQUFWLEVBQXlCO0FBQ3JCcHpCLFFBQUFBLEtBQUssQ0FBQ296QixhQUFOLEdBQXNCLEtBQXRCO0FBQ0g7QUFDSixLQWpCSztBQW1CTkssSUFBQUEsaUJBQWlCLEVBQUd6ekIsS0FBRCxJQUFXO0FBQzFCLFVBQUksQ0FBQ0EsS0FBSyxDQUFDb3pCLGFBQVgsRUFBMEI7QUFDdEJwekIsUUFBQUEsS0FBSyxDQUFDb3pCLGFBQU4sR0FBc0IsSUFBdEI7QUFDSDtBQUNKO0FBdkJLO0FBSndCLENBQUQsQ0FBOUI7QUErQkEsTUFBTTtBQUFFaDBCLEVBQUFBLFNBQUY7QUFBYW0wQixFQUFBQSxTQUFiO0FBQXdCQyxFQUFBQSxhQUF4QjtBQUF1Q0MsRUFBQUE7QUFBdkMsSUFBNkRKLFVBQVUsQ0FBQ25CLE9BQTlFLEVBRVA7QUFDQTtBQUNBOztBQUNPLE1BQU10bEIsV0FBVyxHQUFJNU0sS0FBRCxJQUFxQkEsS0FBSyxDQUFDNk0sS0FBTixDQUFZRCxXQUFyRCxFQUVQO0FBQ0E7O0FBQ08sTUFBTWhDLGVBQWUsR0FDdkI4b0IsTUFBRCxJQUNJLENBQUNyekIsUUFBRCxFQUFXMHZCLFFBQVgsS0FBd0I7QUFDcEIsUUFBTTRELFNBQVMsR0FBRy9tQixXQUFXLENBQUNtakIsUUFBUSxFQUFULENBQTdCOztBQUNBLE1BQUk0RCxTQUFTLEtBQUtELE1BQWxCLEVBQTBCO0FBQ3RCLFFBQUlBLE1BQUosRUFBWTtBQUNScnpCLE1BQUFBLFFBQVEsQ0FBQ2pCLFNBQVMsRUFBVixDQUFSO0FBQ0gsS0FGRCxNQUVPO0FBQ0hpQixNQUFBQSxRQUFRLENBQUNrekIsU0FBUyxFQUFWLENBQVI7QUFDSDtBQUNKO0FBQ0osQ0FYRjtBQWFQLGlFQUFlRixVQUFVLENBQUN2QixPQUExQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdPLE1BQU04QixhQUFhLEdBQUd2Qyx5REFBWSxDQUFDLGVBQUQsRUFBa0JQLHVEQUFsQixDQUFsQztBQUNBLE1BQU0rQyw0QkFBNEIsR0FBR3hDLHlEQUFZLENBQUMsdUJBQUQsRUFBMEJuQiwyREFBMUIsQ0FBakQ7QUFDQSxNQUFNNEQsbUJBQW1CLEdBQUd6Qyx5REFBWSxDQUFDLGFBQUQsRUFBZ0JULCtEQUFoQixDQUF4QztBQVNQLE1BQU1XLFlBQXVCLEdBQUc7QUFDNUI3aUIsRUFBQUEsUUFBUSxFQUFFOFAsU0FEa0I7QUFFNUJxVSxFQUFBQSxtQkFBbUIsRUFBRTtBQUNqQnZ0QixJQUFBQSxLQUFLLEVBQUUsQ0FEVTtBQUVqQkosSUFBQUEsSUFBSSxFQUFFO0FBRlcsR0FGTztBQU01QjZ1QixFQUFBQSxjQUFjLEVBQUU7QUFDWnp1QixJQUFBQSxLQUFLLEVBQUUsQ0FESztBQUVaSixJQUFBQSxJQUFJLEVBQUU7QUFGTSxHQU5ZO0FBVTVCOHVCLEVBQUFBLG1CQUFtQixFQUFFO0FBVk8sQ0FBaEM7QUFhTyxNQUFNQyxTQUFTLEdBQUczQyw2REFBVyxDQUFDO0FBQ2pDelIsRUFBQUEsSUFBSSxFQUFFLE1BRDJCO0FBRWpDMFIsRUFBQUEsWUFGaUM7QUFHakNFLEVBQUFBLFFBQVEsRUFBRTtBQUNOaGxCLElBQUFBLHlCQUF5QixFQUFFLENBQUN6TSxLQUFELEVBQVE0eEIsTUFBUixLQUFrRTtBQUN6RixVQUFJO0FBQUV2dUIsUUFBQUEsR0FBRjtBQUFPekMsUUFBQUE7QUFBUCxVQUFpQmd4QixNQUFNLENBQUNDLE9BQTVCOztBQUNBLFVBQUlqeEIsS0FBSyxHQUFHLENBQVosRUFBZTtBQUNYWixRQUFBQSxLQUFLLENBQUNnMEIsbUJBQU4sQ0FBMEIzd0IsR0FBMUIsSUFBaUN6QyxLQUFqQztBQUNILE9BRkQsTUFFTztBQUNILFlBQUl5QyxHQUFHLElBQUlyRCxLQUFLLENBQUNnMEIsbUJBQWpCLEVBQXNDO0FBQ2xDaDBCLFVBQUFBLEtBQUssQ0FBQ2cwQixtQkFBTixDQUEwQjN3QixHQUExQixJQUFpQ3pDLEtBQWpDO0FBQ0EsaUJBQU9aLEtBQUssQ0FBQ2cwQixtQkFBTixDQUEwQjN3QixHQUExQixDQUFQO0FBQ0EwSyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaLEVBQWtCaE8sS0FBSyxDQUFDZzBCLG1CQUFOLENBQTBCM3dCLEdBQTFCLENBQWxCO0FBRUg7QUFDSjtBQUNKO0FBYkssR0FIdUI7QUFrQmpDcXVCLEVBQUFBLGFBQWEsRUFBRTtBQUNYLEtBQUNrQyxhQUFhLENBQUNqQyxTQUFkLENBQXdCbnVCLElBQXpCLEdBQWdDLENBQUN4RCxLQUFELEVBQVE0eEIsTUFBUixLQUFpRDtBQUM3RTV4QixNQUFBQSxLQUFLLENBQUMwTyxRQUFOLEdBQWlCa2pCLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlckwsSUFBaEM7QUFDSCxLQUhVO0FBSVgsS0FBQ3FOLDRCQUE0QixDQUFDbEMsU0FBN0IsQ0FBdUNudUIsSUFBeEMsR0FBK0MsQ0FBQ3hELEtBQUQsRUFBUTR4QixNQUFSLEtBQWlFO0FBQzVHNXhCLE1BQUFBLEtBQUssQ0FBQzZ5QixtQkFBTixHQUE0QmpCLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlckwsSUFBM0M7QUFDSCxLQU5VO0FBT1gsS0FBQ3NOLG1CQUFtQixDQUFDbkMsU0FBcEIsQ0FBOEJudUIsSUFBL0IsR0FBc0MsQ0FBQ3hELEtBQUQsRUFBUTR4QixNQUFSLEtBQXFFO0FBQ3ZHNXhCLE1BQUFBLEtBQUssQ0FBQyt6QixjQUFOLEdBQXVCbkMsTUFBTSxDQUFDQyxPQUFQLENBQWVyTCxJQUF0QztBQUNIO0FBVFU7QUFsQmtCLENBQUQsQ0FBN0I7QUE4QkEsTUFBTTtBQUFFL1osRUFBQUE7QUFBRixJQUFnQ3duQixTQUFTLENBQUMvQixPQUFoRDtBQUVQLGlFQUFlK0IsU0FBUyxDQUFDbkMsT0FBekI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7QUFFQTtBQUdPLE1BQU1zQyxjQUFjLEdBQUcvQyx5REFBWSxDQUFDLGdCQUFELEVBQW1CRCxxREFBbkIsQ0FBbkM7QUFTUCxNQUFNRyxZQUF1QixHQUFHO0FBQzVCeHhCLEVBQUFBLE9BQU8sRUFBRSxLQURtQjtBQUU1QnMwQixFQUFBQSxRQUFRLEVBQUUsS0FGa0I7QUFHNUJDLEVBQUFBLEtBQUssRUFBRSxFQUhxQjtBQUk1QngwQixFQUFBQSxJQUFJLEVBQUUwZTtBQUpzQixDQUFoQztBQU9PLE1BQU0rVixTQUFTLEdBQUdqRCw2REFBVyxDQUFDO0FBQ2pDelIsRUFBQUEsSUFBSSxFQUFFLE1BRDJCO0FBRWpDMFIsRUFBQUEsWUFGaUM7QUFHakNFLEVBQUFBLFFBQVEsRUFBRTtBQUNOK0MsSUFBQUEsWUFBWSxFQUFFLENBQUN4MEIsS0FBRCxFQUFRNHhCLE1BQVIsS0FBa0Q7QUFDNUQ2QyxNQUFBQSxZQUFZLENBQUN6MEIsS0FBRCxFQUFRNHhCLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlckwsSUFBdkIsQ0FBWjtBQUNILEtBSEs7QUFLTjtBQUNBOVosSUFBQUEsUUFBUSxFQUFHMU0sS0FBRCxJQUFXO0FBQ2pCK04sTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUVBaE8sTUFBQUEsS0FBSyxDQUFDRCxPQUFOLEdBQWdCLEtBQWhCO0FBQ0FDLE1BQUFBLEtBQUssQ0FBQ3EwQixRQUFOLEdBQWlCLEtBQWpCO0FBQ0FyMEIsTUFBQUEsS0FBSyxDQUFDczBCLEtBQU4sR0FBYyxFQUFkO0FBQ0F0MEIsTUFBQUEsS0FBSyxDQUFDRixJQUFOLEdBQWEwZSxTQUFiO0FBQ0EwVixNQUFBQSw4REFBVyxHQVBNLENBUWpCO0FBQ0g7QUFmSyxHQUh1QjtBQW9CakN4QyxFQUFBQSxhQUFhLEVBQUU7QUFDWCxLQUFDMEMsY0FBYyxDQUFDekMsU0FBZixDQUF5Qm51QixJQUExQixHQUFpQyxDQUFDeEQsS0FBRCxFQUFRNHhCLE1BQVIsS0FBa0Q7QUFDL0U2QyxNQUFBQSxZQUFZLENBQUN6MEIsS0FBRCxFQUFRNHhCLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlckwsSUFBdkIsQ0FBWjtBQUNIO0FBSFU7QUFwQmtCLENBQUQsQ0FBN0IsRUEyQlA7O0FBQ0EsU0FBU2lPLFlBQVQsQ0FBc0J6MEIsS0FBdEIsRUFBNkJ3bUIsSUFBN0IsRUFBOEM7QUFDMUN6WSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCd1ksSUFBSSxDQUFDOE4sS0FBMUI7QUFFQXQwQixFQUFBQSxLQUFLLENBQUNELE9BQU4sR0FBZ0IsSUFBaEI7QUFDQSxRQUFNdTBCLEtBQUssR0FBRzlOLElBQUksQ0FBQzhOLEtBQW5CO0FBQ0F0MEIsRUFBQUEsS0FBSyxDQUFDczBCLEtBQU4sR0FBY0EsS0FBZDtBQUNBSCxFQUFBQSw0REFBUyxDQUFDRyxLQUFELENBQVQ7QUFDQXQwQixFQUFBQSxLQUFLLENBQUNxMEIsUUFBTixHQUFpQjdOLElBQUksQ0FBQ2tPLFNBQUwsS0FBbUIsQ0FBcEM7QUFDQTEwQixFQUFBQSxLQUFLLENBQUNGLElBQU4sR0FBYTBtQixJQUFJLENBQUMxbUIsSUFBbEI7QUFDSDs7QUFFRCxNQUFNO0FBQUUwMEIsRUFBQUE7QUFBRixJQUFtQkQsU0FBUyxDQUFDckMsT0FBbkM7QUFFTyxNQUFNO0FBQUV4bEIsRUFBQUE7QUFBRixJQUFlNm5CLFNBQVMsQ0FBQ3JDLE9BQS9CO0FBRUEsTUFBTXlDLFFBQVEsR0FDaEJuTyxJQUFELElBQ0ksQ0FBQ25tQixRQUFELEVBQVcwdkIsUUFBWCxLQUF3QjtBQUNwQjF2QixFQUFBQSxRQUFRLENBQUNtMEIsWUFBWSxDQUFDaE8sSUFBRCxDQUFiLENBQVI7QUFDSCxDQUpGO0FBT1AsaUVBQWUrTixTQUFTLENBQUN6QyxPQUF6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNMEQsZUFBZSxHQUFHVixzREFBZSxDQUFDO0FBQ3BDVyxFQUFBQSxPQUFPLEVBQUVSLHlEQUQyQjtBQUVwQ1MsRUFBQUEsSUFBSSxFQUFFUixzREFGOEI7QUFHcENyb0IsRUFBQUEsS0FBSyxFQUFFc29CLHVEQUg2QjtBQUlwQ3IxQixFQUFBQSxJQUFJLEVBQUVzMUIsc0RBSjhCO0FBS3BDMXlCLEVBQUFBLE1BQU0sRUFBRTJ5Qix3REFMNEI7QUFNcEM3eUIsRUFBQUEsTUFBTSxFQUFFOHlCLHdEQU40QjtBQU9wQ0ssRUFBQUEsSUFBSSxFQUFFSix1REFBV0E7QUFQbUIsQ0FBRCxDQUF2Qzs7QUFVQSxNQUFNekQsT0FBTyxHQUFHLENBQUM5eEIsS0FBRCxFQUFRNHhCLE1BQVIsS0FBbUI7QUFDL0IsTUFBSUEsTUFBTSxDQUFDcHVCLElBQVAsS0FBZ0J3eEIsdURBQXBCLEVBQTZCO0FBQ3pCLFVBQU1ZLFNBQVMsbUNBQ1I1MUIsS0FEUSxHQUVSNHhCLE1BQU0sQ0FBQ0MsT0FGQyxDQUFmOztBQUlBLFdBQU8yRCxlQUFlLENBQUNJLFNBQUQsRUFBWWhFLE1BQVosQ0FBdEI7QUFDSDs7QUFDRCxTQUFPNEQsZUFBZSxDQUFDeDFCLEtBQUQsRUFBUTR4QixNQUFSLENBQXRCO0FBQ0gsQ0FURDs7QUFXQSxNQUFNaUUsU0FBUyxHQUFHLE1BQ2RqQixnRUFBYyxDQUFDO0FBQ1g5QyxFQUFBQSxPQURXO0FBRVhnRSxFQUFBQSxRQUFRO0FBRkcsQ0FBRCxDQURsQjs7QUFpQkE7QUFDTyxNQUFNNXpCLGNBQWMsR0FBRyxNQUFNL0Msd0RBQVcsRUFBeEM7QUFFQSxNQUFNRSxjQUE4QyxHQUFHdzFCLG9EQUF2RDtBQUVQLGlFQUFlRSxpRUFBYSxDQUFXYyxTQUFYLENBQTVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvREE7QUFFQSxNQUFNeHlCLEdBQUcsR0FBRzB5QiwrREFBQSxDQUF3QixrQkFBeEIsQ0FBWjtBQUNBLE1BQU1HLEVBQUUsR0FBR0gsK0RBQUEsQ0FBd0Isa0JBQXhCLENBQVgsRUFFQTs7QUFDTyxTQUFTSSxPQUFULENBQWlCenJCLE9BQWpCLEVBQWtDO0FBQ3JDLE1BQUkwckIsSUFBSSxHQUFHTCwrREFBQSxDQUF3QnJyQixPQUF4QixDQUFYO0FBQ0EsTUFBSTJyQixTQUFTLEdBQUdOLDREQUFBLENBQXFCSyxJQUFyQixFQUEyQi95QixHQUEzQixFQUFnQztBQUM1QzZ5QixJQUFBQSxFQUFFLEVBQUVBLEVBRHdDO0FBRTVDSyxJQUFBQSxJQUFJLEVBQUVSLDJEQUZzQztBQUc1Q1UsSUFBQUEsT0FBTyxFQUFFViw0REFBa0JZO0FBSGlCLEdBQWhDLENBQWhCO0FBS0EsU0FBT04sU0FBUyxDQUFDTyxVQUFWLENBQXFCQyxRQUFyQixDQUE4QmQsNkRBQTlCLENBQVA7QUFDSCxFQUVEOztBQUNPLFNBQVNnQixPQUFULENBQWlCQyxJQUFqQixFQUErQjtBQUNsQyxNQUFJRCxPQUFPLEdBQUdoQiw0REFBQSxDQUFxQmlCLElBQXJCLEVBQTJCM3pCLEdBQTNCLEVBQWdDO0FBQzFDNnlCLElBQUFBLEVBQUUsRUFBRUEsRUFEc0M7QUFFMUNLLElBQUFBLElBQUksRUFBRVIsMkRBRm9DO0FBRzFDVSxJQUFBQSxPQUFPLEVBQUVWLDREQUFrQlk7QUFIZSxHQUFoQyxDQUFkO0FBS0EsTUFBSU0sWUFBWSxHQUFHRixPQUFPLENBQUNGLFFBQVIsQ0FBaUJkLDJEQUFqQixDQUFuQjtBQUNBLFNBQU9rQixZQUFZLENBQUNKLFFBQWIsRUFBUDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJEO0FBQ0E7QUFDQTtBQUNBOztBQUlBLE1BQU1RLEVBQUUsR0FBR2xuQixtQkFBTyxDQUFDLGNBQUQsQ0FBbEI7O0FBRUEsTUFBTW1uQixXQUFtQyxHQUFHO0FBQ3hDLE9BQUssZUFEbUM7QUFFeEMsT0FBSyxZQUZtQztBQUd4QyxPQUFLLHFCQUhtQztBQUl4QyxPQUFLLFNBSm1DO0FBS3hDLE9BQUssNkJBTG1DO0FBTXhDLE9BQUssc0JBTm1DO0FBT3hDLE9BQUssbUJBUG1DO0FBUXhDLE9BQUssNEJBUm1DO0FBU3hDLE9BQUssV0FUbUM7QUFVeEMsT0FBSyxXQVZtQztBQVd4QyxPQUFLLHFCQVhtQztBQVl4QyxPQUFLLG9CQVptQztBQWF4QyxPQUFLLGlCQWJtQztBQWN4QyxPQUFLLE9BZG1DO0FBZXhDLE9BQUssbUJBZm1DO0FBZ0J4QyxPQUFLO0FBaEJtQyxDQUE1QztBQW1CQSxNQUFNdEgsR0FBRyxHQUFHO0FBRVJ1SCxFQUFBQSxTQUFTLEdBQUc7QUFDUixRQUFJakQsS0FBSyxHQUFHOEMscURBQVEsRUFBcEI7QUFDQXJwQixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCc21CLEtBQXJCO0FBRUEsUUFBSTd2QixNQUFNLEdBQUc7QUFDVCt5QixNQUFBQSxRQUFRLEVBQUcsSUFBSXBoQixJQUFKLEVBQUQsQ0FBYXFoQixPQUFiLEtBQXlCLEVBRDFCO0FBRVRDLE1BQUFBLE9BQU8sRUFBRSxPQUZBO0FBR1RDLE1BQUFBLE1BQU0sRUFBRSxJQUhDO0FBSVRyRCxNQUFBQSxLQUFLLEVBQUVBLEtBSkU7QUFLVHNELE1BQUFBLEdBQUcsRUFBRTtBQUxJLEtBQWI7QUFPQSxRQUFJQyxTQUFTLEdBQUcsY0FBY3B6QixNQUFNLENBQUMsVUFBRCxDQUFwQixHQUNWLFVBRFUsR0FDR0EsTUFBTSxDQUFDLFFBQUQsQ0FEVCxHQUVWLFdBRlUsR0FFSUEsTUFBTSxDQUFDLFNBQUQsQ0FGVixHQUdWLE9BSFUsR0FHQUEsTUFBTSxDQUFDLEtBQUQsQ0FITixHQUlWLFNBSlUsR0FJRUEsTUFBTSxDQUFDLE9BQUQsQ0FKeEI7QUFNQUEsSUFBQUEsTUFBTSxDQUFDLE1BQUQsQ0FBTixHQUFpQjB4Qiw2Q0FBTyxDQUFDaE8sSUFBSSxDQUFDQyxTQUFMLENBQWV5UCxTQUFmLENBQUQsQ0FBeEIsQ0FqQlEsQ0FrQlI7O0FBQ0FwekIsSUFBQUEsTUFBTSxDQUFDLDZCQUFELENBQU4sR0FBd0MsR0FBeEM7QUFDQSxXQUFPQSxNQUFQO0FBQ0gsR0F2Qk87O0FBeUJSMHJCLEVBQUFBLE9BQU8sQ0FBQzJILE1BQUQsRUFBOEI7QUFDakMsUUFBSTdHLE9BQU8sR0FBRyxLQUFLc0csU0FBTCxFQUFkO0FBQ0EsUUFBSTFaLFFBQVEsR0FBR3FaLG1EQUFBLENBQWE7QUFDeEJjLE1BQUFBLE9BQU8sRUFBRXJpQixrQ0FEZTtBQUV4QnNiLE1BQUFBLE9BQU8sRUFBRUEsT0FGZTtBQUd4QmlILE1BQUFBLE9BQU8sRUFBRTtBQUhlLEtBQWIsQ0FBZixDQUZpQyxDQVFqQzs7QUFDQXJhLElBQUFBLFFBQVEsQ0FBQ3NhLFlBQVQsQ0FBc0JoSSxPQUF0QixDQUE4QmlJLEdBQTlCLENBQ0tOLE1BQUQsSUFBWTtBQUFBOztBQUNSO0FBQ0EsWUFBTTNWLEdBQUcsR0FBRyxDQUNSMlYsTUFBTSxDQUFDMU4sTUFEQyxFQUVSME4sTUFBTSxDQUFDM1YsR0FGQyxFQUdSa1YsRUFBRSxDQUFDalAsU0FBSCxDQUFhMFAsTUFBTSxDQUFDNVUsTUFBcEIsQ0FIUSxFQUlSbVUsRUFBRSxDQUFDalAsU0FBSCxDQUFhMFAsTUFBTSxDQUFDdFIsSUFBcEIsQ0FKUSxFQUtWeGhCLElBTFUsQ0FLTCxHQUxLLENBQVo7O0FBTUEsVUFBSXF6QixPQUFPLENBQUN6YyxHQUFSLENBQVl1RyxHQUFaLENBQUosRUFBc0I7QUFDbEI7QUFDQSxjQUFNNk0sTUFBTSxHQUFHcUosT0FBTyxDQUFDL2dCLEdBQVIsQ0FBWTZLLEdBQVosQ0FBZjtBQUNBNk0sUUFBQUEsTUFBTSxDQUFDN00sR0FBRCxDQUFOO0FBQ0FrVyxRQUFBQSxPQUFPLENBQUNwWixNQUFSLENBQWVrRCxHQUFmO0FBQ0gsT0FMRCxNQUtPO0FBQ0gyVixRQUFBQSxNQUFNLENBQUNRLFdBQVAsR0FDSVIsTUFBTSxDQUFDUSxXQUFQLElBQ0EsSUFBSXBCLDBEQUFKLENBQXVCbEksTUFBRCxJQUFZO0FBQzlCcUosVUFBQUEsT0FBTyxDQUFDemdCLEdBQVIsQ0FBWXVLLEdBQVosRUFBaUI2TSxNQUFqQjtBQUNILFNBRkQsQ0FGSjtBQUtIOztBQUVEamhCLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0I4cEIsTUFBTSxDQUFDM1YsR0FBM0IsRUFBZ0MyVixNQUFoQyxhQUFnQ0EsTUFBaEMsMENBQWdDQSxNQUFNLENBQUU3RyxPQUF4QyxvREFBZ0MsZ0JBQWtCLE9BQWxCLENBQWhDLEVBckJRLENBd0JSOztBQUNBLFVBQUksQ0FBQTZHLE1BQU0sU0FBTixJQUFBQSxNQUFNLFdBQU4sZ0NBQUFBLE1BQU0sQ0FBRTdHLE9BQVIsc0VBQWtCLGNBQWxCLE9BQXNDLG1DQUExQyxFQUErRTtBQUMzRTZHLFFBQUFBLE1BQU0sQ0FBQ1UsZ0JBQVAsR0FBMkJoUyxJQUFELElBQVU7QUFDaEMsZ0JBQU1pUyxHQUFHLEdBQUc3b0IsTUFBTSxDQUFDOEMsSUFBUCxDQUFZOFQsSUFBWixFQUFrQmxsQixHQUFsQixDQUNQK0IsR0FBRCxJQUFVLEdBQUVvZ0Isa0JBQWtCLENBQUNwZ0IsR0FBRCxDQUFNLElBQUdvZ0Isa0JBQWtCLENBQUMrQyxJQUFJLENBQUNuakIsR0FBRCxDQUFMLENBQVksRUFEN0QsQ0FBWjtBQUdBLGlCQUFPbzFCLEdBQUcsQ0FBQ3p6QixJQUFKLENBQVMsR0FBVCxDQUFQO0FBQ0gsU0FMRDtBQU1IOztBQUNELGFBQU84eUIsTUFBUDtBQUNILEtBbkNMLEVBb0NJLFVBQVV4YyxLQUFWLEVBQWlCO0FBQ2IsWUFBTTtBQUFFb2QsUUFBQUE7QUFBRixVQUFlcGQsS0FBckI7O0FBQ0EsVUFBSW9kLFFBQVEsSUFBSUEsUUFBUSxDQUFDcFMsTUFBekIsRUFBaUM7QUFDN0IsY0FBTXFTLFNBQVMsR0FBR3JCLFdBQVcsQ0FBQ29CLFFBQVEsQ0FBQ3BTLE1BQVYsQ0FBWCxJQUFnQ29TLFFBQVEsQ0FBQ0UsVUFBM0Q7QUFDQSxjQUFNO0FBQUV0UyxVQUFBQSxNQUFGO0FBQVVuRSxVQUFBQTtBQUFWLFlBQWtCdVcsUUFBeEI7O0FBQ0EsWUFBSXBTLE1BQU0sS0FBSyxHQUFYLElBQWtCQSxNQUFNLEtBQUssR0FBakMsRUFBc0M7QUFDbEM2USxVQUFBQSxvREFBQSxDQUFtQjtBQUNmenNCLFlBQUFBLE9BQU8sRUFBRTtBQURNLFdBQW5CO0FBR0g7O0FBQ0R5c0IsUUFBQUEsb0RBQUEsQ0FBbUI7QUFDZnpzQixVQUFBQSxPQUFPLEVBQUcsUUFBTzRiLE1BQU8sS0FBSW5FLEdBQUksRUFEakI7QUFFZjFZLFVBQUFBLFdBQVcsRUFBRWt2QjtBQUZFLFNBQW5CO0FBSUg7O0FBRUQsVUFBSSxDQUFDRCxRQUFMLEVBQWU7QUFDWHZCLFFBQUFBLG9EQUFBLENBQW1CO0FBQ2YxdEIsVUFBQUEsV0FBVyxFQUFFLGtCQURFO0FBRWZpQixVQUFBQSxPQUFPLEVBQUU7QUFGTSxTQUFuQjtBQUlIO0FBQ0osS0ExREwsRUFUaUMsQ0FxRWpDOztBQUNBbVQsSUFBQUEsUUFBUSxDQUFDc2EsWUFBVCxDQUFzQk8sUUFBdEIsQ0FBK0JOLEdBQS9CLENBQW9DL2YsR0FBRCxJQUFjO0FBQzdDLFlBQU1tTyxJQUFJLEdBQUduTyxHQUFHLENBQUNtTyxJQUFqQjs7QUFDQSxVQUFJQSxJQUFJLElBQUksSUFBWixFQUFrQjtBQUNkLFlBQUlBLElBQUksQ0FBQ3FTLFlBQVQsRUFBdUI7QUFDbkIsZ0JBQU1yM0IsT0FBTyxHQUFHMm1CLElBQUksQ0FBQ0ssS0FBTCxDQUFXdU8sNkNBQU8sQ0FBQ3ZRLElBQUksQ0FBQ0EsSUFBTixDQUFsQixDQUFoQjs7QUFDQSxjQUFJaGxCLE9BQU8sSUFBSSxJQUFmLEVBQXFCO0FBQ2pCZ2xCLFlBQUFBLElBQUksQ0FBQ0EsSUFBTCxHQUFZaGxCLE9BQVo7QUFDSDtBQUNKOztBQUNELGVBQU9nbEIsSUFBUDtBQUNIOztBQUNELGFBQU9BLElBQVA7QUFDSCxLQVpEO0FBY0EsV0FBTzNJLFFBQVEsQ0FBQ2lhLE1BQU0sR0FBR0EsTUFBSCxHQUFZLEVBQW5CLENBQWY7QUFDSDs7QUE5R08sQ0FBWjtBQWtIQSxNQUFNTyxPQUFPLEdBQUcsSUFBSTdkLEdBQUosRUFBaEIsRUFFQTs7QUFDTyxNQUFNc2UsWUFBWSxHQUFHLE1BQU07QUFDOUJULEVBQUFBLE9BQU8sQ0FBQzFsQixPQUFSLENBQWdCLFVBQVVxYyxNQUFWLEVBQWtCN00sR0FBbEIsRUFBdUI7QUFDbkM2TSxJQUFBQSxNQUFNLENBQUM3TSxHQUFELENBQU47QUFDSCxHQUZEO0FBR0FrVyxFQUFBQSxPQUFPLENBQUNVLEtBQVI7QUFDSCxDQUxNO0FBUVAsaUVBQWUvSSxHQUFmOzs7Ozs7Ozs7Ozs7Ozs7QUN4SkEsTUFBTWdKLFVBQVUsR0FBRztBQUNmQyxFQUFBQSxTQUFTLEVBQUUsQ0FDUCxTQURPLEVBRVAsU0FGTyxFQUdQLFNBSE8sRUFJUCxTQUpPLEVBS1AsU0FMTyxFQU1QLFNBTk8sRUFPUCxTQVBPLEVBUVAsU0FSTyxFQVNQLFNBVE8sRUFVUCxTQVZPLEVBV1AsU0FYTyxFQVlQLFNBWk8sRUFhUCxTQWJPLEVBY1AsU0FkTyxFQWVQLFNBZk8sRUFnQlAsU0FoQk8sRUFpQlAsU0FqQk8sRUFrQlAsU0FsQk8sRUFtQlAsU0FuQk8sRUFvQlAsU0FwQk8sRUFxQlAsU0FyQk8sRUFzQlAsU0F0Qk8sRUF1QlAsU0F2Qk8sRUF3QlAsU0F4Qk8sRUF5QlAsU0F6Qk8sRUEwQlAsU0ExQk8sRUEyQlAsU0EzQk87QUFESSxDQUFuQjtBQWdDQSxpRUFBZUQsVUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDTyxNQUFNRyxRQUFRLEdBQUcsWUFBakI7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNaEYsU0FBUyxHQUFJRyxLQUFELElBQW1CO0FBQ3hDO0FBQ0E0RSxFQUFBQSx5REFBQSxDQUFZQyxRQUFaLEVBQXNCN0UsS0FBdEI7QUFDSCxDQUhNO0FBS1A7QUFDQTtBQUNBOztBQUNPLE1BQU1KLFdBQVcsR0FBRyxNQUFNO0FBQzdCZ0YsRUFBQUEsMkRBQUEsQ0FBY0MsUUFBZDtBQUNILENBRk07QUFJUDtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNL0IsUUFBUSxHQUFHLE1BQU07QUFDMUIsUUFBTTlDLEtBQUssR0FBRzRFLHlEQUFBLENBQVlDLFFBQVosQ0FBZDtBQUNBcHJCLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJzbUIsS0FBdkI7QUFDQSxTQUFPQSxLQUFLLElBQUksSUFBVCxHQUFnQixFQUFoQixHQUFxQkEsS0FBNUI7QUFDSCxDQUpNOzs7Ozs7Ozs7Ozs7Ozs7QUN2QlAsSUFBSTFTLE1BQU0sR0FBR2pNLGtDQUFBLElBQXdCLENBQXJDLEVBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1zYSxHQUFHLEdBQUc7QUFDUnNKLEVBQUFBLFVBQVUsRUFBRTVqQixTQURKO0FBRVJpTSxFQUFBQSxNQUZRO0FBR1I0TyxFQUFBQSxNQUFNLEVBQUUsUUFIQTtBQUdVO0FBQ2xCQyxFQUFBQSxhQUFhLEVBQUUsaUJBSlA7QUFJMEI7QUFFbENPLEVBQUFBLE9BQU8sRUFBRSxVQU5EO0FBTWE7QUFDckJFLEVBQUFBLFFBQVEsRUFBRSxPQVBGO0FBT1c7QUFDbkJDLEVBQUFBLFNBQVMsRUFBRSxhQVJIO0FBUWtCO0FBQzFCQyxFQUFBQSxTQUFTLEVBQUUsWUFUSDtBQVNpQjtBQUN6QjFpQixFQUFBQSxRQUFRLEVBQUUsV0FWRjtBQVVlO0FBRXZCNGhCLEVBQUFBLGNBQWMsRUFBRSxrQkFaUjtBQVk0QjtBQUNwQ0YsRUFBQUEsVUFBVSxFQUFFLGFBYko7QUFhbUI7QUFFM0JPLEVBQUFBLFVBQVUsRUFBRSxhQWZKO0FBZW1CO0FBQzNCRSxFQUFBQSxZQUFZLEVBQUUsa0JBaEJOLENBZ0IwQjs7QUFoQjFCLENBQVo7QUFtQkEsaUVBQWVaLEdBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUVBO0FBRU8sTUFBTXlKLFFBQVEsR0FBRyxDQUFDQyxJQUFZLEdBQUcsR0FBaEIsS0FBd0I7QUFDNUMsU0FBTyxJQUFJbmlCLE9BQUosQ0FBYUMsT0FBRCxJQUFhO0FBQzVCbkIsSUFBQUEsVUFBVSxDQUFDLE1BQU07QUFDYm1CLE1BQUFBLE9BQU8sQ0FBQyxJQUFELENBQVA7QUFDSCxLQUZTLEVBRVBraUIsSUFGTyxDQUFWO0FBR0gsR0FKTSxDQUFQO0FBS0gsQ0FOTTtBQVFQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU10SSxZQUFZLEdBQUcsQ0FBbUJ4UixJQUFuQixFQUFpQ3pFLEVBQWpDLEtBQXNFO0FBQzlGLFNBQU9xZSxrRUFBZ0IsQ0FBQzVaLElBQUQsRUFBTyxNQUFPcUQsTUFBUCxJQUF3QjtBQUNsRCxRQUFJQSxNQUFKLEVBQVk7QUFDUixZQUFNc0QsSUFBSSxHQUFHLE1BQU1wTCxFQUFFLENBQUM4SCxNQUFELENBQXJCO0FBQ0EsYUFBT3NELElBQVA7QUFDSCxLQUhELE1BR087QUFDSCxZQUFNQSxJQUFJLEdBQUcsTUFBTXBMLEVBQUUsRUFBckI7QUFDQSxhQUFPb0wsSUFBUDtBQUNIO0FBQ0osR0FSc0IsQ0FBdkI7QUFTSCxDQVZNO0FBWVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNb1QsYUFBYSxHQUFJQyxDQUFELElBQWU7QUFDeEMsU0FBT3BqQixJQUFJLENBQUNxakIsS0FBTCxDQUFXRCxDQUFDLEdBQUcsR0FBZixJQUFzQixHQUE3QjtBQUNILENBRk07QUFJUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTUUsWUFBWSxHQUFHLENBQUNDLEdBQUQsRUFBY3RqQixHQUFkLEtBQThCO0FBQ3RELE1BQUlBLEdBQUcsSUFBSSxDQUFYLEVBQWM7QUFDVixRQUFJc2pCLEdBQUcsSUFBSSxDQUFYLEVBQWM7QUFDVixhQUFPLElBQVA7QUFDSCxLQUZELE1BRU87QUFDSCxhQUFPLE1BQU1KLGFBQWEsQ0FBQ0ksR0FBRCxDQUFuQixHQUEyQixHQUFsQztBQUNIO0FBQ0osR0FORCxNQU1PO0FBQ0gsV0FBTyxNQUFNSixhQUFhLENBQUNJLEdBQUQsQ0FBbkIsR0FBMkIsR0FBM0IsR0FBaUNKLGFBQWEsQ0FBQ2xqQixHQUFELENBQTlDLEdBQXNELEdBQTdEO0FBQ0g7QUFDSixDQVZNO0FBWVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNdWpCLGtCQUFrQixHQUFHLENBQUNOLElBQUQsRUFBZU8sWUFBZixLQUF3QztBQUN0RSxNQUFJUCxJQUFJLElBQUksQ0FBWixFQUFlO0FBQ1gsV0FBT08sWUFBUDtBQUNIOztBQUNELE1BQUlDLElBQUksR0FBRyxJQUFJL2pCLElBQUosQ0FBU3VqQixJQUFULENBQVg7O0FBQ0EsTUFBSVEsSUFBSSxJQUFJLElBQVosRUFBa0I7QUFDZCxXQUFPRCxZQUFQO0FBQ0g7O0FBQ0QsTUFBSUUsT0FBTyxHQUFHLElBQUloa0IsSUFBSixFQUFkO0FBQ0EsTUFBSWlrQixPQUFPLEdBQUcsSUFBSWprQixJQUFKLENBQVNna0IsT0FBTyxDQUFDM0MsT0FBUixLQUFxQixLQUFLLEVBQUwsR0FBVSxFQUFWLEdBQWUsSUFBN0MsQ0FBZDtBQUNBLE1BQUk2QyxZQUFZLEdBQUcsSUFBSWxrQixJQUFKLENBQVNna0IsT0FBTyxDQUFDM0MsT0FBUixLQUFxQixLQUFLLEVBQUwsR0FBVSxFQUFWLEdBQWUsSUFBN0MsQ0FBbkI7O0FBQ0EsTUFBSTJDLE9BQU8sQ0FBQ0csV0FBUixPQUEwQkosSUFBSSxDQUFDSSxXQUFMLEVBQTFCLElBQ0dILE9BQU8sQ0FBQ0ksUUFBUixPQUF1QkwsSUFBSSxDQUFDSyxRQUFMLEVBRDFCLElBRUdKLE9BQU8sQ0FBQ0ssT0FBUixPQUFzQk4sSUFBSSxDQUFDTSxPQUFMLEVBRjdCLEVBRTZDO0FBQ3pDO0FBQ0EsV0FBT0MsSUFBSSxDQUFDUCxJQUFJLENBQUNRLFFBQUwsRUFBRCxDQUFKLEdBQXdCLEdBQXhCLEdBQThCRCxJQUFJLENBQUNQLElBQUksQ0FBQ1MsVUFBTCxFQUFELENBQXpDO0FBQ0gsR0FMRCxNQUtPLElBQUlQLE9BQU8sQ0FBQ0UsV0FBUixPQUEwQkosSUFBSSxDQUFDSSxXQUFMLEVBQTFCLElBQ0pGLE9BQU8sQ0FBQ0csUUFBUixPQUF1QkwsSUFBSSxDQUFDSyxRQUFMLEVBRG5CLElBRUpILE9BQU8sQ0FBQ0ksT0FBUixPQUFzQk4sSUFBSSxDQUFDTSxPQUFMLEVBRnRCLEVBRXNDO0FBQ3pDO0FBQ0EsV0FBTyxRQUFRQyxJQUFJLENBQUNQLElBQUksQ0FBQ1EsUUFBTCxFQUFELENBQVosR0FBZ0MsR0FBaEMsR0FBc0NELElBQUksQ0FBQ1AsSUFBSSxDQUFDUyxVQUFMLEVBQUQsQ0FBakQ7QUFDSCxHQUxNLE1BS0EsSUFBSU4sWUFBWSxDQUFDQyxXQUFiLE9BQStCSixJQUFJLENBQUNJLFdBQUwsRUFBL0IsSUFDSkQsWUFBWSxDQUFDRSxRQUFiLE9BQTRCTCxJQUFJLENBQUNLLFFBQUwsRUFEeEIsSUFFSkYsWUFBWSxDQUFDRyxPQUFiLE9BQTJCTixJQUFJLENBQUNNLE9BQUwsRUFGM0IsRUFFMkM7QUFDOUM7QUFDQSxXQUFPLFFBQVFDLElBQUksQ0FBQ1AsSUFBSSxDQUFDUSxRQUFMLEVBQUQsQ0FBWixHQUFnQyxHQUFoQyxHQUFzQ0QsSUFBSSxDQUFDUCxJQUFJLENBQUNTLFVBQUwsRUFBRCxDQUFqRDtBQUNILEdBTE0sTUFLQSxJQUFJUixPQUFPLENBQUNHLFdBQVIsT0FBMEJKLElBQUksQ0FBQ0ksV0FBTCxFQUE5QixFQUFrRDtBQUNyRDtBQUNBLFdBQU9HLElBQUksQ0FBQ1AsSUFBSSxDQUFDSyxRQUFMLEVBQUQsQ0FBSixHQUF3QixHQUF4QixHQUE4QkUsSUFBSSxDQUFDUCxJQUFJLENBQUNNLE9BQUwsRUFBRCxDQUFsQyxHQUFxRCxJQUFyRCxHQUE0REMsSUFBSSxDQUFDUCxJQUFJLENBQUNRLFFBQUwsRUFBRCxDQUFoRSxHQUFvRixHQUFwRixHQUEwRkQsSUFBSSxDQUFDUCxJQUFJLENBQUNTLFVBQUwsRUFBRCxDQUFyRztBQUNIOztBQUNELFNBQU9ULElBQUksQ0FBQ0ksV0FBTCxLQUFxQixHQUFyQixHQUEyQkcsSUFBSSxDQUFDUCxJQUFJLENBQUNLLFFBQUwsRUFBRCxDQUEvQixHQUFtRCxHQUFuRCxHQUF5REUsSUFBSSxDQUFDUCxJQUFJLENBQUNNLE9BQUwsRUFBRCxDQUE3RCxHQUFnRixJQUFoRixHQUF1RkMsSUFBSSxDQUFDUCxJQUFJLENBQUNRLFFBQUwsRUFBRCxDQUEzRixHQUErRyxHQUEvRyxHQUFxSEQsSUFBSSxDQUFDUCxJQUFJLENBQUNTLFVBQUwsRUFBRCxDQUFoSTtBQUNILENBL0JNO0FBaUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0YsSUFBVCxDQUFjL3ZCLEdBQWQsRUFBMkI7QUFDdkIsTUFBSUEsR0FBRyxHQUFHLEVBQVYsRUFBYztBQUNWLFdBQU8sTUFBTUEsR0FBYjtBQUNIOztBQUNELFNBQU8sS0FBS0EsR0FBWjtBQUNIO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLE1BQU1rd0IsVUFBVSxHQUFJQyxLQUFELElBQW1CO0FBQ3pDLE1BQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1IsV0FBTyxRQUFQO0FBQ0g7O0FBQ0QsTUFBSUMsS0FBSyxHQUFHLFdBQVo7O0FBQ0EsTUFBSSxDQUFDQSxLQUFLLENBQUNqbEIsSUFBTixDQUFXZ2xCLEtBQVgsQ0FBTCxFQUF3QjtBQUNwQi9zQixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0EsV0FBTyxTQUFQO0FBQ0g7O0FBQ0QsU0FBTyxFQUFQO0FBQ0gsQ0FWTTtBQVlQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTWd0QixTQUFTLEdBQUlDLElBQUQsSUFBa0I7QUFDdkMsTUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDUCxXQUFPLFNBQVA7QUFDSDs7QUFDRCxNQUFJRixLQUFLLEdBQUcsV0FBWjs7QUFDQSxNQUFJLENBQUNBLEtBQUssQ0FBQ2psQixJQUFOLENBQVdtbEIsSUFBWCxDQUFMLEVBQXVCO0FBQ25CLFdBQU8sV0FBUDtBQUNIOztBQUNELFNBQU8sRUFBUDtBQUNILENBVE07QUFXUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1DLFFBQVEsR0FBSUMsR0FBRCxJQUFpQjtBQUNyQyxNQUFJLENBQUNBLEdBQUwsRUFBVTtBQUNOLFdBQU8sT0FBUDtBQUNIOztBQUNELE1BQUlBLEdBQUcsQ0FBQ2gyQixNQUFKLEdBQWEsQ0FBYixJQUFrQmcyQixHQUFHLENBQUNoMkIsTUFBSixHQUFhLEVBQW5DLEVBQXVDO0FBQ25DLFdBQU8sWUFBUDtBQUNIOztBQUNELE1BQUk0MUIsS0FBSyxHQUFHLGlDQUFaOztBQUNBLE1BQUksQ0FBQ0EsS0FBSyxDQUFDamxCLElBQU4sQ0FBV3FsQixHQUFYLENBQUwsRUFBc0I7QUFDbEIsV0FBTyxRQUFQO0FBQ0g7O0FBQ0QsU0FBTyxFQUFQO0FBQ0gsQ0FaTTtBQWNQO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVM1dUIsaUJBQVQsR0FBNkI7QUFDaEMsTUFBSTZ1QixFQUFFLEdBQUdwNEIsUUFBUSxDQUFDeVEsYUFBVCxDQUF1QixHQUF2QixDQUFUO0FBQUEsTUFDSS9ULE1BQU0sR0FBRztBQUNMcUksSUFBQUEsS0FBSyxFQUFFLE1BREY7QUFFTHN6QixJQUFBQSxNQUFNLEVBQUU7QUFGSCxHQURiO0FBQUEsTUFJT0MsQ0FKUDtBQUFBLE1BSVVDLFlBSlY7QUFBQSxNQUl3QkMsWUFKeEI7QUFBQSxNQUlzQ0MsY0FKdEM7O0FBS0EsT0FBS0gsQ0FBTCxJQUFVNTdCLE1BQVYsRUFBa0IwN0IsRUFBRSxDQUFDdDNCLEtBQUgsQ0FBU3czQixDQUFULElBQWM1N0IsTUFBTSxDQUFDNDdCLENBQUQsQ0FBcEI7O0FBQ2xCdDRCLEVBQUFBLFFBQVEsQ0FBQ3FXLElBQVQsQ0FBY1AsV0FBZCxDQUEwQnNpQixFQUExQjtBQUNBRyxFQUFBQSxZQUFZLEdBQUdILEVBQUUsQ0FBQ2wzQixXQUFsQjtBQUNBazNCLEVBQUFBLEVBQUUsQ0FBQ3QzQixLQUFILENBQVM0M0IsU0FBVCxHQUFxQixRQUFyQjtBQUNBRixFQUFBQSxZQUFZLEdBQUdKLEVBQUUsQ0FBQ2wzQixXQUFsQjtBQUNBdTNCLEVBQUFBLGNBQWMsR0FBR0YsWUFBWSxHQUFHQyxZQUFoQztBQUNBSixFQUFBQSxFQUFFLENBQUMvQixNQUFIO0FBQ0EsU0FBT29DLGNBQVA7QUFDSCxFQUVEOztBQUNPLFNBQVM1eEIsZ0JBQVQsQ0FBMEJ4RyxHQUExQixFQUF1QztBQUMxQyxNQUFJNDNCLElBQUksR0FBRzUzQixHQUFHLENBQUNzNEIsVUFBSixDQUFlLENBQWYsQ0FBWDtBQUNBLFNBQU8zQywwREFBQSxDQUFxQmlDLElBQUksR0FBR2pDLGlFQUE1QixDQUFQO0FBQ0g7Ozs7Ozs7Ozs7QUN4TEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEEseUdBQThDOzs7Ozs7Ozs7Ozs7QUNBOUM7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2h1YmFuZy8uL2NvbXBvbmVudHMvY2lyY2xlL2xpc3RfY29udGVudC9DaXJjbGVDb250ZW50LnRzeCIsIndlYnBhY2s6Ly9odWJhbmcvLi9jb21wb25lbnRzL2NpcmNsZS9saXN0X2NvbnRlbnQvYWxsX2NpcmNsZS9BbGxDaXJjbGUudHN4Iiwid2VicGFjazovL2h1YmFuZy8uL2NvbXBvbmVudHMvY2lyY2xlL2xpc3RfY29udGVudC9iYW5uZXIvQ2lybGNlQmFubmVyLnRzeCIsIndlYnBhY2s6Ly9odWJhbmcvLi9jb21wb25lbnRzL2NpcmNsZS9saXN0X2NvbnRlbnQvbXlfY2lyY2xlL015Q2lyY2xlLnRzeCIsIndlYnBhY2s6Ly9odWJhbmcvLi9jb21wb25lbnRzL2NpcmNsZS9saXN0X2NvbnRlbnQvcmFua19jaXJjbGUvUmFua0NpcmNsZS50c3giLCJ3ZWJwYWNrOi8vaHViYW5nLy4vY29tcG9uZW50cy9pdGVtL2NpcmNsZS9CaWdDaXJjbGVJdGVtLnRzeCIsIndlYnBhY2s6Ly9odWJhbmcvLi9jb21wb25lbnRzL2l0ZW0vY2lyY2xlL3RhZy9DaXJjbGVUYWdJdGVtLnRzeCIsIndlYnBhY2s6Ly9odWJhbmcvLi9jb21wb25lbnRzL3dpZGdldC9FbXB0eVZpZXcudHN4Iiwid2VicGFjazovL2h1YmFuZy8uL2NvbXBvbmVudHMvd2lkZ2V0L0xlZnRNZW51V2lkZ2V0LnRzeCIsIndlYnBhY2s6Ly9odWJhbmcvLi9jb21wb25lbnRzL3dpZGdldC9MZWZ0VXNlckNhcmQudHN4Iiwid2VicGFjazovL2h1YmFuZy8uL2NvbXBvbmVudHMvd2lkZ2V0L015UGFnaW5hdGlvbi50c3giLCJ3ZWJwYWNrOi8vaHViYW5nLy4vbGF5b3V0L0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vaHViYW5nLy4vbGF5b3V0L0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vaHViYW5nLy4vbGF5b3V0L0xheW91dC50c3giLCJ3ZWJwYWNrOi8vaHViYW5nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9odWJhbmcvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL2h1YmFuZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9odWJhbmcvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9odWJhbmcvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9odWJhbmcvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9odWJhbmcvLi9wYWdlcy9jaXJjbGUvaW5kZXgudHN4Iiwid2VicGFjazovL2h1YmFuZy8uL3N0b3JlL3NlcnZpY2VzL2NpcmNsZS50cyIsIndlYnBhY2s6Ly9odWJhbmcvLi9zdG9yZS9zZXJ2aWNlcy9jb21tb24udHMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vc3RvcmUvc2VydmljZXMvaGVscGVyLnRzIiwid2VicGFjazovL2h1YmFuZy8uL3N0b3JlL3NlcnZpY2VzL21pbmUudHMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vc3RvcmUvc2VydmljZXMvdXNlci50cyIsIndlYnBhY2s6Ly9odWJhbmcvLi9zdG9yZS9zbGljZXMvY2lyY2xlU2xpY2UudHMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vc3RvcmUvc2xpY2VzL2NvbW1vblNsaWNlLnRzIiwid2VicGFjazovL2h1YmFuZy8uL3N0b3JlL3NsaWNlcy9ob21lU2xpY2UudHMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vc3RvcmUvc2xpY2VzL2xvYWRpbmdTbGljZS50cyIsIndlYnBhY2s6Ly9odWJhbmcvLi9zdG9yZS9zbGljZXMvbG9naW5TbGljZS50cyIsIndlYnBhY2s6Ly9odWJhbmcvLi9zdG9yZS9zbGljZXMvbWluZVNsaWNlLnRzIiwid2VicGFjazovL2h1YmFuZy8uL3N0b3JlL3NsaWNlcy91c2VyU2xpY2UudHMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vc3RvcmUvc3RvcmUudHMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vdXRpbHMvYWVzLnRzIiwid2VicGFjazovL2h1YmFuZy8uL3V0aWxzL2FwaS50cyIsIndlYnBhY2s6Ly9odWJhbmcvLi91dGlscy9zdGF0aWNEYXRhLnRzIiwid2VicGFjazovL2h1YmFuZy8uL3V0aWxzL3Rva2VuX3V0aWwudHMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vdXRpbHMvdXJsLnRzIiwid2VicGFjazovL2h1YmFuZy8uL3V0aWxzL3V0aWwudHMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vY29tcG9uZW50cy9jaXJjbGUvbGlzdF9jb250ZW50L2FsbF9jaXJjbGUvYWxsX2NpcmNsZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9odWJhbmcvLi9jb21wb25lbnRzL2NpcmNsZS9saXN0X2NvbnRlbnQvYmFubmVyL2NpcmNsZV9iYW5uZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vY29tcG9uZW50cy9jaXJjbGUvbGlzdF9jb250ZW50L2NpcmNsZV9jb250ZW50Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2h1YmFuZy8uL2NvbXBvbmVudHMvY2lyY2xlL2xpc3RfY29udGVudC9teV9jaXJjbGUvbXlfY2lyY2xlLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2h1YmFuZy8uL2NvbXBvbmVudHMvaXRlbS9jaXJjbGUvYmlnX2NpcmNsZV9pdGVtLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2h1YmFuZy8uL2NvbXBvbmVudHMvaXRlbS9jaXJjbGUvdGFnL2NpcmNsZV90YWdfaXRlbS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9odWJhbmcvLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9odWJhbmcvLi9zdHlsZXMvY29tcG9uZW50cy93aWRnZXQvZW1wdHlfdmlldy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9odWJhbmcvLi9zdHlsZXMvY29tcG9uZW50cy93aWRnZXQvbGVmdF9tZW51X3dpZGdldC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9odWJhbmcvLi9zdHlsZXMvY29tcG9uZW50cy93aWRnZXQvbGVmdF91c2VyX2NhcmQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vc3R5bGVzL2NvbXBvbmVudHMvd2lkZ2V0L215X3BhZ2luYXRpb24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vc3R5bGVzL2Zvb3Rlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9odWJhbmcvLi9zdHlsZXMvaGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2h1YmFuZy8uL3N0eWxlcy9sYXlvdXQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly9odWJhbmcvZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwiY3J5cHRvLWpzXCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIiIsIndlYnBhY2s6Ly9odWJhbmcvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIiIsIndlYnBhY2s6Ly9odWJhbmcvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIiIsIndlYnBhY2s6Ly9odWJhbmcvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIiIsIndlYnBhY2s6Ly9odWJhbmcvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIiIsIndlYnBhY2s6Ly9odWJhbmcvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwicXNcIiIsIndlYnBhY2s6Ly9odWJhbmcvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcInJlYWN0LWNvb2tpZXNcIiIsIndlYnBhY2s6Ly9odWJhbmcvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly9odWJhbmcvaWdub3JlZHxEOlxcVlNDb2RlUHJvamVjdFxcaHViYW5nXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXHNoYXJlZFxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgUm91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBzaG93TG9naW4gfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvc2xpY2VzL2xvZ2luU2xpY2VcIjtcclxuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvc3RvcmVcIjtcclxuaW1wb3J0IExlZnRNZW51V2lkZ2V0LCB7IExlZnRNZW51QmVhbiB9IGZyb20gXCIuLi8uLi93aWRnZXQvTGVmdE1lbnVXaWRnZXRcIjtcclxuaW1wb3J0IExlZnRVc2VyQ2FyZCBmcm9tIFwiLi4vLi4vd2lkZ2V0L0xlZnRVc2VyQ2FyZFwiO1xyXG5pbXBvcnQgQWxsQ2lyY2xlIGZyb20gXCIuL2FsbF9jaXJjbGUvQWxsQ2lyY2xlXCI7XHJcbmltcG9ydCBDaXJjbGVCYW5uZXIsIHsgQmFubmVyQmFubmVyQmVhbiB9IGZyb20gXCIuL2Jhbm5lci9DaXJsY2VCYW5uZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NpcmNsZV9jb250ZW50Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IE15Q2lyY2xlIGZyb20gXCIuL215X2NpcmNsZS9NeUNpcmNsZVwiO1xyXG5pbXBvcnQgUmFua0NpcmNsZSBmcm9tIFwiLi9yYW5rX2NpcmNsZS9SYW5rQ2lyY2xlXCI7XHJcblxyXG5jb25zdCBDaXJjbGVDb250ZW50OiBOZXh0UGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgdXNlciwgaXNMb2dpbiB9ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKVxyXG5cclxuICAgIGNvbnN0IGJhbm5lcnM6IEJhbm5lckJhbm5lckJlYW5bXSA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiBcImh0dHA6Ly93eXlodWJhbmcub3NzLWNuLWNoZW5nZHUuYWxpeXVuY3MuY29tL2RlZmF1bHQvZGVmYXVsdF9iYW5uZXIxLnBuZ1wiLFxyXG4gICAgICAgICAgICBsaW5rOiBcIi9cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogXCJodHRwOi8vd3l5aHViYW5nLm9zcy1jbi1jaGVuZ2R1LmFsaXl1bmNzLmNvbS9kZWZhdWx0L2RlZmF1bHRfYmFubmVyMi5wbmdcIixcclxuICAgICAgICAgICAgbGluazogXCIvXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cDovL3d5eWh1YmFuZy5vc3MtY24tY2hlbmdkdS5hbGl5dW5jcy5jb20vZGVmYXVsdC9kZWZhdWx0X2Jhbm5lcjMucG5nXCIsXHJcbiAgICAgICAgICAgIGxpbms6IFwiL1wiXHJcbiAgICAgICAgfSxcclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgbWVudUxpc3Q6IExlZnRNZW51QmVhbltdID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi5YWo6YOo5ZyI5a2QXCIsXHJcbiAgICAgICAgICAgIFwiaW1hZ2VcIjogXCIvc3RhdGljL2ltYWdlcy9pY29fY2lyY2xlX2FsbC5wbmdcIixcclxuICAgICAgICAgICAgXCJudW1cIjogMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi5oiR55qE5biu5ZyIXCIsXHJcbiAgICAgICAgICAgIFwiaW1hZ2VcIjogXCIvc3RhdGljL2ltYWdlcy9pY29fY2lyY2xlX215LnBuZ1wiLFxyXG4gICAgICAgICAgICBcIm51bVwiOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCLmjpLooYzmppxcIixcclxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb19jaXJjbGVfcmFuay5wbmdcIixcclxuICAgICAgICAgICAgXCJudW1cIjogMCxcclxuICAgICAgICB9LFxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICAgIGNvbnN0IFtzZWxlY3RJbmRleCwgc2V0U2VsZWN0SW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbdG9wU2VsZWN0SW5kZXgsIHNldFRvcFNlbGVjdEluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGNvbnN0IHJvdXRlID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBtZW51SXRlbUNoaWNrID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKHNlbGVjdEluZGV4ICE9PSBpbmRleCkge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RJbmRleChpbmRleClcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcm91dGUucHVzaCh7XHJcbiAgICAgICAgLy8gICAgIHBhdGhuYW1lOiBcIi9jaXJjbGVcIixcclxuICAgICAgICAvLyAgICAgcXVlcnk6IHtcclxuICAgICAgICAvLyAgICAgICAgIGluZGV4OiBpbmRleFxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9wSXRlbUNsaWNrID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgc2V0VG9wU2VsZWN0SW5kZXgoaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZUNpcmNsZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoaXNMb2dpbikge1xyXG4gICAgICAgICAgICByb3V0ZS5wdXNoKFwiL2NpcmNsZS9jcmVhdGVcIilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzaG93TG9naW4oKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRCb2R5fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnR9PlxyXG4gICAgICAgICAgICA8TGVmdFVzZXJDYXJkIGRlc2NNYXhMaW5lPXsyfSBjbGFzc05hbWU9e3N0eWxlcy51c2VyQ2FyZH0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0TWVudX0+XHJcbiAgICAgICAgICAgICAgICA8TGVmdE1lbnVXaWRnZXQgbWVudUxpc3Q9e21lbnVMaXN0fSBzZWxlY3RJbmRleD17c2VsZWN0SW5kZXh9IG1lbnVJdGVtQ2xpY2s9e21lbnVJdGVtQ2hpY2t9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYW5uZXJ9PlxyXG4gICAgICAgICAgICAgICAgPENpcmNsZUJhbm5lcj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhbm5lcnMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxhIGtleT17aW5kZXh9IGhyZWY9e2l0ZW0ubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2V9IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvQ2lyY2xlQmFubmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RJbmRleCA9PSAxID8gPE15Q2lyY2xlIGlkPXt1c2VyPy5pZH0gc2hvd1RpdGxlPXt0cnVlfSAvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdEluZGV4ID09IDIgPyA8UmFua0NpcmNsZSAvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxsQ2lyY2xlIHNlbGVjdEluZGV4PXt0b3BTZWxlY3RJbmRleH0gaXRlbUNsaWNrPXt0b3BJdGVtQ2xpY2t9IC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmpvaW5DaXJjbGV9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29fam9pbl9jaXJjbGVfYmcucG5nXCIgd2lkdGg9XCIxMDAlXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmpvaW5IaW50MX0+5pu05aSaPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaG90fT7ng63pl6g8L3NwYW4+5biu5ZyI562J5L2g5Yqg5YWl77yBPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuam9pbkhpbnR9PuW/q+adpeWIm+W7uuiHquW3seeahOWciOWtkOWQp348L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0ZUNpcmNsZX0gb25DbGljaz17Y3JlYXRlQ2lyY2xlfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGVUZXh0fT7liJvlu7rlnIjlrZA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2lyY2xlQ29udGVudDsiLCJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZmV0Y2hBbGxDaXJjbGVMaXN0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3N0b3JlL3NsaWNlcy9jaXJjbGVTbGljZVwiO1xyXG5pbXBvcnQgd3JhcHBlciwgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmUvc3RvcmVcIjtcclxuaW1wb3J0IEJpZ0NpcmNsZUl0ZW0gZnJvbSBcIi4uLy4uLy4uL2l0ZW0vY2lyY2xlL0JpZ0NpcmNsZUl0ZW1cIjtcclxuaW1wb3J0IEVtcHR5VmlldyBmcm9tIFwiLi4vLi4vLi4vd2lkZ2V0L0VtcHR5Vmlld1wiO1xyXG5pbXBvcnQgTXlQYWdpbmF0aW9uIGZyb20gXCIuLi8uLi8uLi93aWRnZXQvTXlQYWdpbmF0aW9uXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9hbGxfY2lyY2xlLm1vZHVsZS5zY3NzJztcclxuXHJcblxyXG5jb25zdCBBbGxDaXJjbGU6IE5leHRQYWdlPHsgc2VsZWN0SW5kZXg6IG51bWJlciwgaXRlbUNsaWNrOiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZCB9PiA9ICh7IHNlbGVjdEluZGV4LCBpdGVtQ2xpY2sgfSkgPT4ge1xyXG4gICAgY29uc3QgeyBhbGxDaXJjbGVEYXRhIH0gPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNpcmNsZSk7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IHsgY2lyY2xlVHlwZSB9ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb21tb24pO1xyXG4gICAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFt0YWJLZXksIHNldFRhYktleV0gPSB1c2VTdGF0ZShjaXJjbGVUeXBlW3NlbGVjdEluZGV4XT8uaWQgPz8gMCk7XHJcblxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIGxvYWREYXRhKHRhYktleSwgY3VycmVudFBhZ2UsIDIwKTtcclxuICAgICAgICBsZXQgdGl0bGVTY3JvbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlU2Nyb2xsXCIpO1xyXG4gICAgICAgIGlmICh0aXRsZVNjcm9sbCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGRlYWxWaWV3U2Nyb2xsKHRpdGxlU2Nyb2xsKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3Qgc3dpdGNoUGFnZSA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgaWYgKHNlbGVjdEluZGV4ICE9IGluZGV4KSB7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRQYWdlKDEpO1xyXG4gICAgICAgICAgICBzZXRUYWJLZXkoY2lyY2xlVHlwZVtpbmRleF0uaWQpO1xyXG4gICAgICAgICAgICBsb2FkRGF0YShjaXJjbGVUeXBlW2luZGV4XS5pZCwgMSwgMjApO1xyXG4gICAgICAgICAgICBpdGVtQ2xpY2sgJiYgaXRlbUNsaWNrKGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6I635Y+W5pWw5o2uXHJcbiAgICBmdW5jdGlvbiBsb2FkRGF0YShrZXk6IG51bWJlciwgcGFnZTogbnVtYmVyLCBwYWdlU2l6ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgIGZldGNoQWxsQ2lyY2xlTGlzdCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBrZXksXHJcbiAgICAgICAgICAgICAgICBwYWdlOiBwYWdlLFxyXG4gICAgICAgICAgICAgICAgbGltaXQ6IHBhZ2VTaXplXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0aXRsZVNjcm9sbCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGRlYWxWaWV3U2Nyb2xsKGV2ZW50LnRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVhbFZpZXdTY3JvbGwodGFyZ2V0KSB7XHJcbiAgICAgICAgbGV0IGxlZnRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpO1xyXG4gICAgICAgIGxldCByaWdodEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0XCIpO1xyXG4gICAgICAgIGlmIChsZWZ0RWxlbWVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxlZnRFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSB0YXJnZXQuc2Nyb2xsTGVmdCA8PSAxMCA/ICdoaWRkZW4nIDogJ3Zpc2libGUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmlnaHRFbGVtZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgbGV0IHNob3cgPSB0YXJnZXQuc2Nyb2xsTGVmdCArIHRhcmdldC5jbGllbnRXaWR0aCArIDEwID49IHRhcmdldC5zY3JvbGxXaWR0aDtcclxuICAgICAgICAgICAgcmlnaHRFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSBzaG93ID8gJ2hpZGRlbicgOiAndmlzaWJsZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRpdGxlU2Nyb2xsQ2xpY2soaXNMZWZ0OiBib29sZWFuKSB7XHJcbiAgICAgICAgbGV0IHRpdGxlU2Nyb2xsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVNjcm9sbFwiKTtcclxuICAgICAgICBpZiAodGl0bGVTY3JvbGwgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRpdGxlU2Nyb2xsLnNjcm9sbEJ5KHtcclxuICAgICAgICAgICAgbGVmdDogaXNMZWZ0ID8gLTMwMCA6IDMwMCxcclxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBhZ2VDaGFuZ2UgPSAocGFnZSwgcGFnZVNpemUpID0+IHtcclxuICAgICAgICBzZXRDdXJyZW50UGFnZShwYWdlKTtcclxuICAgICAgICBsb2FkRGF0YSh0YWJLZXksIHBhZ2UsIHBhZ2VTaXplKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50Qm9keX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwidGl0bGVTY3JvbGxcIiBvblNjcm9sbD17dGl0bGVTY3JvbGx9IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNpcmNsZVR5cGUubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlSXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tQ29sb3I6IHNlbGVjdEluZGV4ID09PSBpbmRleCA/IFwiIzMzODhGRlwiIDogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBzZWxlY3RJbmRleCA9PT0gaW5kZXggPyBcImJvbGRcIiA6ICdub3JtYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBzZWxlY3RJbmRleCA9PT0gaW5kZXggPyBcIiMzMzg4RkZcIiA6IFwiIzYzNzA4MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzd2l0Y2hQYWdlKGluZGV4KSB9fT57aXRlbS50eXBlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImxlZnRcIiBjbGFzc05hbWU9e1tzdHlsZXMuc2Nyb29sSWNvbiwgc3R5bGVzLmxlZnRdLmpvaW4oXCIgXCIpfSBvbkNsaWNrPXsoKSA9PiB7IHRpdGxlU2Nyb2xsQ2xpY2sodHJ1ZSkgfX0gLz5cclxuICAgICAgICAgICAgPGRpdiBpZD1cInJpZ2h0XCIgY2xhc3NOYW1lPXtbc3R5bGVzLnNjcm9vbEljb24sIHN0eWxlcy5yaWdodF0uam9pbihcIiBcIil9IG9uQ2xpY2s9eygpID0+IHsgdGl0bGVTY3JvbGxDbGljayhmYWxzZSkgfX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbGxfY29udGVudH0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFsbENpcmNsZURhdGEubGlzdC5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgICAgICAgICBhbGxDaXJjbGVEYXRhLmxpc3QubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEJpZ0NpcmNsZUl0ZW0ga2V5PXtpdGVtLmlkfSB7Li4uaXRlbX0gLz5cclxuICAgICAgICAgICAgICAgICAgICB9KSA6XHJcbiAgICAgICAgICAgICAgICAgICAgPEVtcHR5VmlldyB0eXBlPXswfSAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm9fbW9yZX0gc3R5bGU9e3sgZGlzcGxheTogYWxsQ2lyY2xlRGF0YS5saXN0Lmxlbmd0aCA+IDAgJiYgYWxsQ2lyY2xlRGF0YS5saXN0Lmxlbmd0aCA8IDIwID8gJ2Jsb2NrJyA6ICdub25lJyB9fT7msqHmnInmm7TlpJrkuoZ+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE15UGFnaW5hdGlvbiB0b3RhbD17YWxsQ2lyY2xlRGF0YS50b3RhbH0gcGFnZVNpemU9ezIwfSBzaG93U2l6ZUNoYW5nZXI9e2ZhbHNlfSBjdXJyZW50PXtjdXJyZW50UGFnZX0gb25DaGFuZ2U9e3BhZ2VDaGFuZ2V9IC8+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWxsQ2lyY2xlOyIsImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY2lyY2xlX2Jhbm5lci5tb2R1bGUuc2Nzcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhbm5lckJhbm5lckJlYW4ge1xyXG4gICAgaW1hZ2U6IHN0cmluZyxcclxuICAgIGxpbms6IHN0cmluZ1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSUNpcmNsZUJhbm5lciB7XHJcbiAgICBzdGVwPzogbnVtYmVyLFxyXG4gICAgYW5pbWF0aW9uU3RlcD86IG51bWJlclxyXG59XHJcblxyXG5jbGFzcyBDaXJjbGVCYW5uZXIgZXh0ZW5kcyBDb21wb25lbnQ8SUNpcmNsZUJhbm5lcj4ge1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgc3RlcDogNTAwMCxcclxuICAgICAgICBhbmltYXRpb25TdGVwOiAxXHJcbiAgICB9XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBjdXJyZW50Q2Fyb3VzZWw6IDAsXHJcbiAgICAgICAgdHJhbnNsYXRlTGlzdDogW10sXHJcbiAgICAgICAgYW5pbWF0aW9uU3RlcDogMCxcclxuICAgIH1cclxuICAgIHRpbWVySUQ7XHJcbiAgICBjaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbik7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5oYW5kbGVDYXJvdXNlbEJvZHlNb3VzZU92ZXIgPSB0aGlzLmhhbmRsZUNhcm91c2VsQm9keU1vdXNlT3Zlci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2Fyb3VzZWxCb2R5TW91c2VPdXQgPSB0aGlzLmhhbmRsZUNhcm91c2VsQm9keU1vdXNlT3V0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDYXJvdXNlbEZvb3Rlck1vdXNlT3ZlciA9IHRoaXMuaGFuZGxlQ2Fyb3VzZWxGb290ZXJNb3VzZU92ZXIuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnJlbmRlckluZGljYXRvcnMgPSB0aGlzLnJlbmRlckluZGljYXRvcnMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmdldEluZGljYXRvcnNBY3RpdmUgPSB0aGlzLmdldEluZGljYXRvcnNBY3RpdmUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZXJOZXh0ID0gdGhpcy5oYW5kbGVyTmV4dC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlclRyYW5zaXRpb25FbmQgPSB0aGlzLmhhbmRsZXJUcmFuc2l0aW9uRW5kLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyUHJlID0gdGhpcy5oYW5kbGVyUHJlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zdG9wQ2Fyb3VzZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uU3RlcDogdGhpcy5wcm9wcy5hbmltYXRpb25TdGVwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdGFydENhcm91c2VsKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIOW8gOWni+i9ruaSrVxyXG4gICAgICovXHJcbiAgICBzdGFydENhcm91c2VsKCkge1xyXG4gICAgICAgIHRoaXMuc3RvcENhcm91c2VsKClcclxuICAgICAgICB0aGlzLnRpbWVySUQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlckNhcm91c2VsKCdyaWdodCcpXHJcbiAgICAgICAgfSxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zdGVwXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiDmm7TmlLnlvZPliY3lvqrnjq/liLDnmoTova7mkq3kuIvmoIdcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIOi/kOWKqOeahOaWueWQkeexu+Wei1xyXG4gICAgICovXHJcbiAgICBoYW5kbGVyQ2Fyb3VzZWwodHlwZSkge1xyXG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSAxO1xyXG4gICAgICAgIGlmICh0eXBlID09PSAnbGVmdCcpIHsgIC8vIOWQkeWBmui/kOWKqCDkuIvmoIflh48xXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IC0xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudENhcm91c2VsICUgKHRoaXMuY2hpbGRyZW4ubGVuZ3RoICsgMSkgIT09IHRoaXMuY2hpbGRyZW4ubGVuZ3RoICYmIHRoaXMuc3RhdGUuY3VycmVudENhcm91c2VsID49IDApIHsgLy8g5LiL5qCH5LiN5Li6LTEg5oiW6ICF5pyA5ZCO5LiA6aG555qE5oOF5Ya15LiL5q2j5bi4IOmAkuWinuaIluiAhemAkuWHj1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRDYXJvdXNlbDogKHRoaXMuc3RhdGUuY3VycmVudENhcm91c2VsICsgZGlyZWN0aW9uKSAlICh0aGlzLmNoaWxkcmVuLmxlbmd0aCArIDEpLFxyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uU3RlcDogdGhpcy5wcm9wcy5hbmltYXRpb25TdGVwICAvLyDov5DliqjliqjnlLsg6K6+572u5YC8ICDlm6DkuLog5b2T5Z2Q5qCH5Zyo6L6555WM55qE5pe25YCZIOS8muWPlua2iOWKqOeUu+aXtumXtCDmiYDku6XlnKjkuI3kuLrovrnnlYznmoTml7blgJkg6KaB5oGi5aSN5Yqo55S75pe26Ze0IOS4jeeEtuWIh+aNouaXoOi9ruaSreWKqOeUu1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24g55uR5ZCs5Yqo55S757uT5p2fIOWcqOS4i+agh+S4uui+ueeVjOaXtiDlubbkuJTliIfmjaLnmoTliqjnlLvnu5PmnZ8g5Y+W5raI5Yqo55S7IOW5tuiwg+aVtOi9ruaSreS9jee9rlxyXG4gICAgICovXHJcbiAgICBoYW5kbGVyVHJhbnNpdGlvbkVuZCgpIHtcclxuICAgICAgICAvLyDlvZPlnKjmnIDmnKvnq6/nmoTml7blgJkg5Y+W5raI5Yqo55S7IOW5tuWwhuWdkOagh+mHjeWItuS4ujBcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50Q2Fyb3VzZWwgJSAodGhpcy5jaGlsZHJlbi5sZW5ndGggKyAxKSA9PT0gdGhpcy5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShwcmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25TdGVwOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDYXJvdXNlbDogMCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5b2T5Zyo5pyA5YmN56uv55qE5pe25YCZIOWPlua2iOWKqOeUuyDlubblsIblnZDmoIfph43liLbkuLrmnIDlpKdcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRDYXJvdXNlbCA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShwcmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25TdGVwOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDYXJvdXNlbDogdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiAg5YGc5q2i6L2u5pKtXHJcbiAgICAgKi9cclxuICAgIHN0b3BDYXJvdXNlbCgpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJRCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIOaMh+ekuuaMiemSrueahG1vdXNlb3ZlcuS6i+S7tlxyXG4gICAgICovXHJcbiAgICBoYW5kbGVDYXJvdXNlbEZvb3Rlck1vdXNlT3ZlcihjdXJyZW50SW5kZXgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uU3RlcDogdGhpcy5wcm9wcy5hbmltYXRpb25TdGVwLFxyXG4gICAgICAgICAgICBjdXJyZW50Q2Fyb3VzZWw6IGN1cnJlbnRJbmRleFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIOi9ruaSreeahG1vdXNlb3ZlcuS6i+S7tlxyXG4gICAgICovXHJcbiAgICBoYW5kbGVDYXJvdXNlbEJvZHlNb3VzZU92ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5zdG9wQ2Fyb3VzZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiDova7mkq3nmoRtb3VzZW91dOS6i+S7tlxyXG4gICAgICovXHJcbiAgICBoYW5kbGVDYXJvdXNlbEJvZHlNb3VzZU91dCgpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0Q2Fyb3VzZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiDova7mkq3nmoRtb3VzZW91dOS6i+S7tlxyXG4gICAgICovXHJcbiAgICBoYW5kbGVyTmV4dCgpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZXJDYXJvdXNlbCgncmlnaHQnKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVyUHJlKCkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlckNhcm91c2VsKCdsZWZ0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5kaWNhdG9yc0FjdGl2ZShpbmRleCkge1xyXG4gICAgICAgIC8vIOi+ueeVjOWIpOaWrSDkvb/lnKjova7mkq3lnKjovrnnlYznmoTml7blgJkg5a+86Iiq5LiL6Z2i55qE5bCP5qCHIOS5n+iDveato+W4uOeahOa3u+WKoGFjdGl2ZeeKtuaAgVxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRDYXJvdXNlbCA9PT0gaW5kZXggfHwgdGhpcy5zdGF0ZS5jdXJyZW50Q2Fyb3VzZWwgPT09IGluZGV4ICsgdGhpcy5jaGlsZHJlbi5sZW5ndGggfHwgKHRoaXMuc3RhdGUuY3VycmVudENhcm91c2VsIDwgMCAmJiBpbmRleCA9PT0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3R5bGVzLmFjdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICcnXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24g5a+86Iiq55qE5oyH56S65oyJ6ZKuXHJcbiAgICAgKi9cclxuICAgIHJlbmRlckluZGljYXRvcnMoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2Fyb3VzZWxGb290ZXJ9PlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmluZGljYXRvcnNDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLmNoaWxkcmVuLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFjdGl2ZSA9IHRoaXMuZ2V0SW5kaWNhdG9yc0FjdGl2ZShpbmRleClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBvbk1vdXNlT3Zlcj17KCkgPT4gdGhpcy5oYW5kbGVDYXJvdXNlbEZvb3Rlck1vdXNlT3ZlcihpbmRleCl9IGNsYXNzTmFtZT17W3N0eWxlcy5pbmRpY2F0b3JzSXRlbSwgYWN0aXZlXS5qb2luKCcgJyl9IGtleT17aW5kZXh9ID48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsQ29udGFpbmVyfSBvbk1vdXNlT3Zlcj17dGhpcy5oYW5kbGVDYXJvdXNlbEJvZHlNb3VzZU92ZXJ9IG9uTW91c2VPdXQ9e3RoaXMuaGFuZGxlQ2Fyb3VzZWxCb2R5TW91c2VPdXR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbEJvZHl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25UcmFuc2l0aW9uRW5kPXt0aGlzLmhhbmRsZXJUcmFuc2l0aW9uRW5kfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gJyArIHRoaXMuc3RhdGUuYW5pbWF0aW9uU3RlcCArICdzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICh0aGlzLmNoaWxkcmVuLmxlbmd0aCArIDIpICogMTAwICsgXCIlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoJyArICgtMTAwIC8gKHRoaXMuY2hpbGRyZW4ubGVuZ3RoICsgMikgKiAodGhpcy5zdGF0ZS5jdXJyZW50Q2Fyb3VzZWwgKyAxKSkgKyAnJSknXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbEl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAxMDAgLyAodGhpcy5jaGlsZHJlbi5sZW5ndGggKyAyKSArICclJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9eydzdHJhdCd9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuY2hpbGRyZW5bdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxXX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5jaGlsZHJlbi5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsSXRlbX0gc3R5bGU9e3sgd2lkdGg6IDEwMCAvICh0aGlzLmNoaWxkcmVuLmxlbmd0aCArIDIpICsgJyUnIH19IGtleT17aW5kZXh9ID57aXRlbX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsSXRlbX0gc3R5bGU9e3sgd2lkdGg6IDEwMCAvICh0aGlzLmNoaWxkcmVuLmxlbmd0aCArIDIpICsgJyUnIH19IGtleT17J2VuZCd9ID57dGhpcy5jaGlsZHJlblswXX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVySW5kaWNhdG9ycygpfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idG5Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbc3R5bGVzLmJ0bkRpcmVjdGlvbiwgc3R5bGVzLnByZV0uam9pbihcIiBcIil9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlclByZX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1tzdHlsZXMuYnRuRGlyZWN0aW9uLCBzdHlsZXMubmV4dF0uam9pbihcIiBcIil9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlck5leHR9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2lyY2xlQmFubmVyOyIsImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBmZXRjaFVzZXJDaXJjbGVMaXN0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3N0b3JlL3NsaWNlcy9jaXJjbGVTbGljZVwiO1xyXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmUvc3RvcmVcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL215X2NpcmNsZS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBCaWdDaXJjbGVJdGVtIGZyb20gXCIuLi8uLi8uLi9pdGVtL2NpcmNsZS9CaWdDaXJjbGVJdGVtXCI7XHJcbmltcG9ydCBFbXB0eVZpZXcgZnJvbSBcIi4uLy4uLy4uL3dpZGdldC9FbXB0eVZpZXdcIjtcclxuaW1wb3J0IE15UGFnaW5hdGlvbiBmcm9tIFwiLi4vLi4vLi4vd2lkZ2V0L015UGFnaW5hdGlvblwiO1xyXG5cclxuY29uc3QgTXlDaXJjbGU6IE5leHRQYWdlPHsgaWQ6IHN0cmluZyB8IHVuZGVmaW5lZCwgc2hvd1RpdGxlPzogYm9vbGVhbiB9PiA9ICh7IGlkLCBzaG93VGl0bGUgfSkgPT4ge1xyXG4gICAgY29uc3QgeyBteUNpcmNsZUxpc3QgfSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2lyY2xlKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcblxyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgbG9hZE15Q2lyY2xlKDEsIDIwKTtcclxuICAgIC8vIH0sIFtdKVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRNeUNpcmNsZShwYWdlOiBudW1iZXIsIGxpbWl0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goZmV0Y2hVc2VyQ2lyY2xlTGlzdCh7XHJcbiAgICAgICAgICAgICAgICBwYWdlOiBwYWdlLFxyXG4gICAgICAgICAgICAgICAgbGltaXQ6IGxpbWl0LFxyXG4gICAgICAgICAgICAgICAgaWQ6IGlkXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgcGFnZUNoYW5nZSA9IChwYWdlLCBwYWdlU2l6ZSkgPT4ge1xyXG4gICAgICAgIHNldEN1cnJlbnRQYWdlKHBhZ2UpO1xyXG4gICAgICAgIGxvYWRNeUNpcmNsZShwYWdlLCBwYWdlU2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzaG93VGl0bGUgJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50X3RpdGxlfT7miJHnmoTluK7lnIg8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5teV9jaXJsY2VfY29udGVudH0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG15Q2lyY2xlTGlzdC5saXN0Lmxlbmd0aCA+IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgIG15Q2lyY2xlTGlzdC5saXN0Lm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxCaWdDaXJjbGVJdGVtIGtleT17aXRlbS5pZH0gey4uLml0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfSkgOlxyXG4gICAgICAgICAgICAgICAgICAgIDxFbXB0eVZpZXcgdHlwZT17MH0gLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vX21vcmV9IHN0eWxlPXt7IGRpc3BsYXk6IG15Q2lyY2xlTGlzdC5saXN0Lmxlbmd0aCA+IDAgJiYgbXlDaXJjbGVMaXN0Lmxpc3QubGVuZ3RoIDwgMjAgPyAnYmxvY2snIDogJ25vbmUnIH19PuayoeacieabtOWkmuS6hn48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TXlQYWdpbmF0aW9uIHRvdGFsPXtteUNpcmNsZUxpc3QudG90YWx9IHBhZ2VTaXplPXsyMH0gc2hvd1NpemVDaGFuZ2VyPXtmYWxzZX0gY3VycmVudD17Y3VycmVudFBhZ2V9IG9uQ2hhbmdlPXtwYWdlQ2hhbmdlfSAvPlxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15Q2lyY2xlOyIsImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuXHJcbmNvbnN0IFJhbmtDaXJjbGU6IE5leHRQYWdlID0gKCkgPT4ge1xyXG5cclxuICAgIHJldHVybiA8ZGl2PjwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYW5rQ2lyY2xlOyIsImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4vYmlnX2NpcmNsZV9pdGVtLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHR5cGUgeyBDaXJjbGVCZWFuIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvc2VydmljZXMvY2lyY2xlJztcclxuaW1wb3J0IENpcmNsZVRhZ0l0ZW0gZnJvbSBcIi4vdGFnL0NpcmNsZVRhZ0l0ZW1cIjtcclxuXHJcbmNvbnN0IEJpZ0NpcmNsZUl0ZW06IE5leHRQYWdlPENpcmNsZUJlYW4+ID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Rm9sbG93KHR5cGU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0eXBlID09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIuW3sueUs+ivt1wiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSAxIHx8IHR5cGUgPT0gMikge1xyXG4gICAgICAgICAgICByZXR1cm4gXCLlt7LliqDlhaVcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gMykge1xyXG4gICAgICAgICAgICByZXR1cm4gXCLlnIjkuLtcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwi55Sz6K+3XCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jaXJjbGVJdGVtfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubGluZUNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGUubG9nb31cclxuICAgICAgICAgICAgICAgIHNyYz17cHJvcHMuYXZhdGFyID09IG51bGwgPyBcImh0dHA6Ly93eXlodWJhbmcub3NzLWNuLWNoZW5nZHUuYWxpeXVuY3MuY29tL2RlZmF1bHQvZGVmYXVsdF9ncm91cC5wbmdcIiA6IHByb3BzLmF2YXRhcn1cclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiODBweFwiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI4MHB4XCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIlwiIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2lyY2xlQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2VudGVyQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGUuY2lyY2xlTmFtZX0+e3Byb3BzLmNpcmNsZV9uYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRhZ3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5jaXJjbGVfdGFnLnNwbGl0KCcsJykubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q2lyY2xlVGFnSXRlbSBrZXk9e2luZGV4fSB0aXRsZT17aXRlbX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLmRlc2N9Pntwcm9wcy5kZXNjcmlwdGlvbiA9PSBudWxsID8gXCLnvqTkuLvlvojnpZ7np5jvvIzku4DkuYjpg73msqHlhpl+XCIgOiBwcm9wcy5kZXNjcmlwdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLmZvbGxvd31cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcHJvcHMuam9pbl90eXBlID09IDAgPyAnIzMzODhGRicgOiAnI0NCQ0ZERCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBwcm9wcy5qb2luX3R5cGUgPT0gMCA/ICcjMzM4OEZGJyA6ICcjQ0JDRkREJyxcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0Rm9sbG93KHByb3BzLmpvaW5fdHlwZSl9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCaWdDaXJjbGVJdGVtOyIsImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgZ2V0Q29sb3JCeVN0cmluZyB9IGZyb20gXCIuLi8uLi8uLi8uLi91dGlscy91dGlsXCI7XHJcbmltcG9ydCBzdHlsZSBmcm9tICcuL2NpcmNsZV90YWdfaXRlbS5tb2R1bGUuc2Nzcyc7XHJcblxyXG50eXBlIElDaXJjbGVUYWdJdGVtID0ge1xyXG4gICAgdGl0bGU6IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBDaXJjbGVUYWdJdGVtOiBOZXh0UGFnZTxJQ2lyY2xlVGFnSXRlbT4gPSAoe1xyXG4gICAgdGl0bGVcclxufSkgPT4ge1xyXG5cclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNpcmNsZV90YWd9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogZ2V0Q29sb3JCeVN0cmluZyh0aXRsZSkgKyAnQkInIH19PlxyXG4gICAgICAgIHt0aXRsZX1cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaXJjbGVUYWdJdGVtOyIsImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvY29tcG9uZW50cy93aWRnZXQvZW1wdHlfdmlldy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5cclxuY29uc3QgRW1wdHlWaWV3OiBOZXh0UGFnZTx7IHR5cGU/OiBudW1iZXIgfT4gPSAoXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZSA9IDAsXHJcbiAgICB9XHJcbikgPT4ge1xyXG4gICAgZnVuY3Rpb24gZ2V0RXJyb3JJbWcoKSB7XHJcbiAgICAgICAgbGV0IGltZyA9IFwiXCI7XHJcbiAgICAgICAgaWYgKHR5cGUgPT0gMCkgeyAvL+aXoOWGheWuuVxyXG4gICAgICAgICAgICBpbWcgPSBcIi9zdGF0aWMvaW1hZ2VzL2ljb19lbXB0eS5wbmdcIlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaW1nO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVtcHR5X2NvbnRlbnR9PlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9IHNyYz17Z2V0RXJyb3JJbWcoKX0gd2lkdGg9XCI1MCVcIiBhbHQ9XCJcIiAvPlxyXG4gICAgPC9kaXY+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbXB0eVZpZXc7IiwiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9jb21wb25lbnRzL3dpZGdldC9sZWZ0X21lbnVfd2lkZ2V0Lm1vZHVsZS5zY3NzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGVmdE1lbnVCZWFuIHtcclxuICAgIGlkOiBudW1iZXIsXHJcbiAgICBpbWFnZTogc3RyaW5nLFxyXG4gICAgdGl0bGU6IHN0cmluZyxcclxuICAgIG51bTogbnVtYmVyLFxyXG59XHJcblxyXG5pbnRlcmZhY2UgSUxlZnRNZW51V2lkZ2V0IHtcclxuICAgIGlkPzogc3RyaW5nLFxyXG4gICAgbWVudUxpc3Q6IExlZnRNZW51QmVhbltdLFxyXG4gICAgc2VsZWN0SW5kZXg6IG51bWJlcixcclxuICAgIG1lbnVJdGVtQ2xpY2s/OiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZFxyXG59XHJcblxyXG5cclxuY29uc3QgTGVmdE1lbnVXaWRnZXQ6IE5leHRQYWdlPElMZWZ0TWVudVdpZGdldD4gPSAoXHJcbiAgICB7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgbWVudUxpc3QgPSBbXSxcclxuICAgICAgICBzZWxlY3RJbmRleCA9IDAsXHJcbiAgICAgICAgbWVudUl0ZW1DbGlja1xyXG4gICAgfVxyXG4pID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGlkPXtpZH0gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudExlZnRQfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRNZW51TGlzdENoZWNrfSBzdHlsZT17eyB0b3A6IDUgKyBzZWxlY3RJbmRleCAqIDQwICsgXCJweFwiIH19PjwvZGl2PlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0TWVudUxpc3R9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtZW51TGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2l0ZW0uaWR9IG9uQ2xpY2s9eygpID0+IHsgbWVudUl0ZW1DbGljayAmJiBtZW51SXRlbUNsaWNrKGluZGV4KSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubWVudUl0ZW19IHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogJ3VybCgnICsgaXRlbS5pbWFnZSArICcpJyB9fT57aXRlbS50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2V9IHN0eWxlPXt7IHZpc2liaWxpdHk6IGl0ZW0ubnVtIDw9IDAgPyBcImhpZGRlblwiIDogXCJ2aXNpYmxlXCIgfX0+e2l0ZW0ubnVtfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGVmdE1lbnVXaWRnZXQ7IiwiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9jb21wb25lbnRzL3dpZGdldC9sZWZ0X3VzZXJfY2FyZC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCIuLi8uLi9zdG9yZS9zdG9yZVwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgc2hvd09ySGlkZUxvZ2luIH0gZnJvbSBcIi4uLy4uL3N0b3JlL3NsaWNlcy9sb2dpblNsaWNlXCI7XHJcblxyXG5pbnRlcmZhY2UgSUxlZnRVc2VyQ2FyZCB7XHJcbiAgICBjbGFzc05hbWU/OiB7fSxcclxuICAgIGRlc2NNYXhMaW5lPzogbnVtYmVyXHJcbn1cclxuXHJcbmNvbnN0IExlZnRVc2VyQ2FyZDogTmV4dFBhZ2U8SUxlZnRVc2VyQ2FyZD4gPSAoe1xyXG4gICAgZGVzY01heExpbmUgPSA0LFxyXG4gICAgY2xhc3NOYW1lXHJcbn0pID0+IHtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IGlzTG9naW4sIHVzZXIgfSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCBbaXNTaWduLCBzZXRTaWduXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBkb1NpZ24gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2lnbighaXNTaWduKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkb0xvZ2luID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHNob3dPckhpZGVMb2dpbih0cnVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtbc3R5bGVzLm1lbnVMZWZ0LCBjbGFzc05hbWVdLmpvaW4oXCIgXCIpfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZ25Vc2VyfT5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy51c2VySGVhZGVyfSBzcmM9e3VzZXI/LmF2YXRhciA/IHVzZXI/LmF2YXRhciA6IFwiL3N0YXRpYy9pbWFnZXMvZGVmYXVsdF91c2VyLnBuZ1wifSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8c3Bhbj57aXNMb2dpbiAmJiB1c2VyPy5uaWNrbmFtZSA/IHVzZXI/Lm5pY2tuYW1lIDogJ+a4uOWuoui6q+S7vSd9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJEZXNjfSBzdHlsZT17eyBXZWJraXRMaW5lQ2xhbXA6IGRlc2NNYXhMaW5lLCBtYXhMaW5lczogZGVzY01heExpbmUgfX0+e2lzTG9naW4gPyB1c2VyPy5kZXNjcmlwdGlvbiA6IFwiXCJ9PC9wPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaXNMb2dpbiA/XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zaWduQnRufVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogaXNTaWduID8gXCIjRjFGMkYzXCIgOiBcIiNkOWU4ZmNcIiwgY29sb3I6IGlzU2lnbiA/IFwiI0JBQkRDM1wiIDogXCIjMzM4OEZGXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtkb1NpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc1NpZ24gPyAn5bey562+5YiwJyA6ICfnrb7liLAnfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPiA6XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbkJ0bn0gb25DbGljaz17ZG9Mb2dpbn0+55m75b2VPC9zcGFuPlxyXG4gICAgICAgIH1cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMZWZ0VXNlckNhcmQ7IiwiaW1wb3J0IHsgUGFnaW5hdGlvbiwgUGFnaW5hdGlvblByb3BzIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9jb21wb25lbnRzL3dpZGdldC9teV9wYWdpbmF0aW9uLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IE15UGFnaW5hdGlvbjogTmV4dFBhZ2U8UGFnaW5hdGlvblByb3BzPiA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEl0ZW1SZW5kZXIoY3VycmVudCwgdHlwZSwgb3JpZ2luYWxFbGVtZW50KTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgICAgICBpZiAodHlwZSA9PT0gJ3ByZXYnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8c3Bhbj7kuIrkuIDpobU8L3NwYW4+O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ25leHQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8c3Bhbj7kuIvkuIDpobU8L3NwYW4+O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3JpZ2luYWxFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2luYXRpb259PlxyXG4gICAgICAgIDxQYWdpbmF0aW9uIHsuLi5wcm9wc30gLz5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeVBhZ2luYXRpb247IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvZm9vdGVyLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2Zvb3Rlci5wbmdcIiB3aWR0aD1cIjEwMCVcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7lhbPkuo7miJHku6w8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIlwiPue9keermeS7i+e7jTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIlwiPuWFjei0o+WjsOaYjjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIlwiPuWPi+aDhemTvuaOpTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPuS6p+WTgeacjeWKoTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiXCI+5biu5ZyIPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiXCI+5a6e5ZCN6K6k6K+BPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiXCI+5rGC6IGM5oub6IGYPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiXCI+5pud5YWJ5Y+wPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+5biu5Yqp5Lit5b+DPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJcIj7luLjop4Hpl67popg8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJcIj7mnI3liqHku4vnu408L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJcIj7ogZTns7vmiJHku6w8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRvd259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRvd25PdGhlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2FwcF9kb3duLnBuZ1wiIHdpZHRoPVwiODBweFwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBUFDkuIvovb1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZG93bk90aGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvYXBwX2Rvd24ucG5nXCIgd2lkdGg9XCI4MHB4XCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOaJi+acuue9kemhteeJiFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kb3duT3RoZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9hcHBfZG93bi5wbmdcIiB3aWR0aD1cIjgwcHhcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5b6u5L+h5bCP56iL5bqPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jb3B5fT4gwqkgQ29weXJpZ2h0IDIwMjEuIOWQtOa0i+avhVxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmNvcHlMaW5rfSBocmVmPVwiaHR0cDovL2JlaWFuLm1paXQuZ292LmNuL1wiIHRhcmdldD1cImJsYW5rXCIgcmVsPVwibm9mb2xsb3dcIj7phIJJQ1DlpIcyMDIxMDAyNDE45Y+3PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvaGVhZGVyLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHdyYXBwZXIsIHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vc3RvcmUvc3RvcmUnO1xyXG5pbXBvcnQgeyBzaG93T3JIaWRlTG9naW4gfSBmcm9tICcuLi9zdG9yZS9zbGljZXMvbG9naW5TbGljZSc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldFNjcm9sbGJhcldpZHRoIH0gZnJvbSAnLi4vdXRpbHMvdXRpbCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgc3dpdGNoVXNlclBhZ2VTZWxlY3RJbmRleCB9IGZyb20gJy4uL3N0b3JlL3NsaWNlcy9taW5lU2xpY2UnO1xyXG5pbXBvcnQgeyBvdXRMb2dpbiB9IGZyb20gJy4uL3N0b3JlL3NsaWNlcy91c2VyU2xpY2UnO1xyXG5cclxuaW50ZXJmYWNlIElIZWFkZXIge1xyXG4gICAgcGFnZTogbnVtYmVyLFxyXG4gICAgdXNlckNlbnRlckNoYW5nZT86IChpbmRleDogbnVtYmVyKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IEhlYWRlcjogTmV4dFBhZ2U8SUhlYWRlcj4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IGlzU2hvd0xvZ2luID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5sb2dpbi5pc1Nob3dMb2dpbik7XHJcbiAgICBjb25zdCB7IGlzTG9naW4sIHVzZXIgfSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCB1c2VyQ2VudGVyTGlzdCA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgICBpbWFnZTogXCIvc3RhdGljL2ltYWdlcy9pY29fbXlfY2VudGVyLnBuZ1wiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLmiJHnmoTkuLvpobVcIixcclxuICAgICAgICAgICAgbGluazogXCIvdXNlci9cIiArIHVzZXI/LmlkXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICBpbWFnZTogXCIvc3RhdGljL2ltYWdlcy9pY29fbXlfY2lyY2xlLnBuZ1wiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLmiJHnmoTluK7lnIhcIixcclxuICAgICAgICAgICAgbGluazogXCIvdXNlci9cIiArIHVzZXI/LmlkXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICBpbWFnZTogXCIvc3RhdGljL2ltYWdlcy9pY29fY29sbGVjdC5wbmdcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwi5oiR55qE5pS26JePXCIsXHJcbiAgICAgICAgICAgIGxpbms6IFwiL3VzZXIvXCIgKyB1c2VyPy5pZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgICAgaW1hZ2U6IFwiL3N0YXRpYy9pbWFnZXMvaWNvX3NldHRpbmcucG5nXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIuezu+e7n+iuvue9rlwiLFxyXG4gICAgICAgICAgICBsaW5rOiBcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiA0LFxyXG4gICAgICAgICAgICBpbWFnZTogXCIvc3RhdGljL2ltYWdlcy9pY29fb3V0X2xvZ2luLnBuZ1wiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLpgIDlh7rnmbvlvZVcIixcclxuICAgICAgICAgICAgbGluazogXCJcIlxyXG4gICAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgY29uc3Qgc2VuZExpc3QgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMCxcclxuICAgICAgICAgICAgaW1hZ2U6IFwiL3N0YXRpYy9pbWFnZXMvaWNvX3JlbGVhc2VfaGVscC5wbmdcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwi5Y+R5rGC5YqpXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb19yZWxlYXNlX2R5bmFtaWMucG5nXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIuWPkeWKqOaAgVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICBpbWFnZTogXCIvc3RhdGljL2ltYWdlcy9pY29fcmVsZWFzZV93ei5wbmdcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwi5Y+R5paH56ugXCJcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IFtpc1Nob3dVc2VyQ2VudGVyLCBzZXRTaG93VXNlckNlbnRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNTaG93U2VuZER5bmFtaWMsIHNldFNob3dTZW5kRHluYW1pY10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgLy8g5riy5p+T5a6M5oiQ5Zue6LCDXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZURpYWxvZyk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBoaWRlRGlhbG9nID0gKGV2OiBhbnkpID0+IHtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZXYudGFyZ2V0IHx8IGV2LnNyY0VsZW1lbnQ7XHJcbiAgICAgICAgbGV0IGlkID0gdGFyZ2V0LmlkO1xyXG4gICAgICAgIGlmIChpZCAhPT0gXCJ1c2VySGVhZFwiKSB7XHJcbiAgICAgICAgICAgIHNldFNob3dVc2VyQ2VudGVyKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlkICE9PSBcInNlbmREeW5hbWljXCIpIHtcclxuICAgICAgICAgICAgc2V0U2hvd1NlbmREeW5hbWljKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXNlckNlbnRlclNob3coKSB7XHJcbiAgICAgICAgc2V0U2hvd1VzZXJDZW50ZXIoIWlzU2hvd1VzZXJDZW50ZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBzZW5kU2hvdygpIHtcclxuICAgICAgICBzZXRTaG93U2VuZER5bmFtaWMoIWlzU2hvd1NlbmREeW5hbWljKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVzZXJDZW50ZXJJdGVtQ2xpY2sgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGlmIChpbmRleCA8IDMpIHtcclxuICAgICAgICAgICAgaWYgKHByb3BzLnVzZXJDZW50ZXJDaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLnVzZXJDZW50ZXJDaGFuZ2UoaW5kZXggPT0gMCA/IDAgOiBpbmRleCArIDEpXHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChzd2l0Y2hVc2VyUGFnZVNlbGVjdEluZGV4KHsga2V5OiB1c2VyLmlkLCBpbmRleDogaW5kZXggPT0gMCA/IDAgOiBpbmRleCArIDEgfSkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IHVzZXJDZW50ZXJMaXN0W2luZGV4XS5saW5rXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PSAzKSB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiB1c2VyQ2VudGVyTGlzdFtpbmRleF0ubGlua1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT0gNCkge1xyXG4gICAgICAgICAgICAvLyDpgIDlh7rnmbvlvZVcclxuICAgICAgICAgICAgZGlzcGF0Y2gob3V0TG9naW4oKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VuZER5bmFtaWNJdGVtQ2xpY2sgPSAoZXY6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi54K55Ye75LqGXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dMb2dpbiA9ICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChzaG93T3JIaWRlTG9naW4odHJ1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9IHN0eWxlPXt7IHBhZGRpbmdSaWdodDogaXNTaG93TG9naW4gPyAoZ2V0U2Nyb2xsYmFyV2lkdGgoKSArICdweCcpIDogJzBweCcgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiLi4vXCI+PGltZyBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSBzcmM9XCIvc3RhdGljL2ltYWdlcy9sb2dvLnBuZ1wiIHRpdGxlPVwi5LqS5biuXCIgYWx0PVwiXCIgLz48L2E+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cHJvcHMucGFnZSA9PT0gMCA/IHN0eWxlcy5tZW51U2VsZWN0IDogJyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhIGNsYXNzTmFtZT17c3R5bGVzLm1lbnVBSG9tZX0+6aaW6aG1PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3Byb3BzLnBhZ2UgPT09IDEgPyBzdHlsZXMubWVudVNlbGVjdCA6ICcnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9oZWxwZXIvbGlzdFwiPjxhIGNsYXNzTmFtZT17c3R5bGVzLm1lbnVBSGVscH0+5rGC5YqpPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3Byb3BzLnBhZ2UgPT09IDIgPyBzdHlsZXMubWVudVNlbGVjdCA6ICcnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9keW5hbWljXCI+PGEgY2xhc3NOYW1lPXtzdHlsZXMubWVudUFEeW5hbWljfT7liqjmgIE8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cHJvcHMucGFnZSA9PT0gMyA/IHN0eWxlcy5tZW51U2VsZWN0IDogJyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NpcmNsZVwiPjxhIGNsYXNzTmFtZT17c3R5bGVzLm1lbnVBQ2lyY2xlfT7luK7lnIg8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNofT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuaQnOe0oiDmsYLliqkv5Yqo5oCBL+WciOWtkC/mlofnq6BcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEljb259Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlckluZm99PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNMb2dpbiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy51c2VyTWVudX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwidXNlckhlYWRcIiBzcmM9e3VzZXI/LmF2YXRhciA/IHVzZXI/LmF2YXRhciA6ICcvc3RhdGljL2ltYWdlcy9kZWZhdWx0X3VzZXIucG5nJ30gb25DbGljaz17KCkgPT4geyB1c2VyQ2VudGVyU2hvdygpIH19IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlckNlbnRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHZpc2liaWxpdHk6IGlzU2hvd1VzZXJDZW50ZXIgPyAndmlzaWJsZScgOiAnaGlkZGVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMudXNlckNlbnRlck5hbWV9Pnt1c2VyPy5uaWNrbmFtZSA/IHVzZXI/Lm5pY2tuYW1lIDogJ+acqueZu+W9lSd9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJDZW50ZXJMaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudXNlckNlbnRlckl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGl0ZW0uaW1hZ2UgKyBcIilcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgdXNlckNlbnRlckl0ZW1DbGljayhpbmRleCkgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2hlYWRlcl9tZXNzYWdlLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2VIaW50fT45PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwic2VuZER5bmFtaWNcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9oZWFkZXJfc2VuZC5wbmdcIiBvbkNsaWNrPXsoKSA9PiB7IHNlbmRTaG93KCkgfX0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZW5kRHluYW1pY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHZpc2liaWxpdHk6IGlzU2hvd1NlbmREeW5hbWljID8gJ3Zpc2libGUnIDogJ2hpZGRlbicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuc2VuZERuYW1pY0l0ZW19IG9uQ2xpY2s9e3NlbmREeW5hbWljSXRlbUNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZX0gd2lkdGg9XCI0MHB4XCIgaGVpZ2h0PVwiNDBweFwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0udGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kb3duTG9naW59IG9uQ2xpY2s9e3Nob3dMb2dpbn0+54K55Ye755m75b2VPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsIlxyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBSZWFjdE5vZGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvbGF5b3V0Lm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IExheW91dDogTmV4dFBhZ2U8e1xyXG4gICAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcclxuICAgIGtleXdvcmRzPzogc3RyaW5nO1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZSB8IFJlYWN0Tm9kZVtdO1xyXG59PiA9ICh7IHRpdGxlLCBkZXNjcmlwdGlvbiwga2V5d29yZHMsIGNsYXNzTmFtZSwgY2hpbGRyZW4gfSkgPT4ge1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdG9Ub3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9Ub3AnKTtcclxuICAgICAgICAgICAgaWYgKHRvVG9wICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9Ub3Auc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0b1RvcC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA8IDEzMDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0b1RvcC5zdHlsZS5yaWdodCA9IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLSAxMzAwICsgd2luZG93LnBhZ2VYT2Zmc2V0KSArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9Ub3Auc3R5bGUucmlnaHQgPSBcImNhbGMoKDEwMCUgLSAxMzAwcHgpIC8gMiAtIDUwcHggKyBcIiArIHdpbmRvdy5wYWdlWE9mZnNldCArIFwiKVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPnt0aXRsZSB8fCAn5LqS5biuJ308L3RpdGxlPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PXtrZXl3b3JkcyB8fCAnJ30gLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb24gfHwgJyd9IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbiB8fCAnJ30gLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2NoaWxkcmVufTwvbWFpbj5cclxuXHJcbiAgICAgICAgPGltZyBpZD1cInRvVG9wXCIgY2xhc3NOYW1lPXtzdHlsZXMudG9Ub3B9IHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb19nb190b3AucG5nXCIgd2lkdGg9XCI0MHB4XCIgdGl0bGU9XCLov5Tlm57pobbpg6hcIiBhbHQ9XCJcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH19IC8+XHJcbiAgICA8Lz5cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKTtcbnZhciBfcm91dGVyMSA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHByZWZldGNoZWQgPSB7XG59O1xuZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm47XG4gICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgY3VyTG9jYWxlID0gb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlO1xufVxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgeyB0YXJnZXQgIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIHJldHVybiB0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnIHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDI7XG59XG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSkge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUgIH0gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwgJiYgYXMuaW5kZXhPZignIycpID49IDApIHtcbiAgICAgICAgc2Nyb2xsID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgICBzaGFsbG93LFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHNjcm9sbFxuICAgIH0pO1xufVxuZnVuY3Rpb24gTGluayhwcm9wcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBocmVmOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHMgPSBPYmplY3Qua2V5cyhyZXF1aXJlZFByb3BzR3VhcmQpO1xuICAgICAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldID09IG51bGwgfHwgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBhczogdHJ1ZSxcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICBzY3JvbGw6IHRydWUsXG4gICAgICAgICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICAgICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgICAgICAgIGxvY2FsZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzID0gT2JqZWN0LmtleXMob3B0aW9uYWxQcm9wc0d1YXJkKTtcbiAgICAgICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV07XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3JlcGxhY2UnIHx8IGtleSA9PT0gJ3Njcm9sbCcgfHwga2V5ID09PSAnc2hhbGxvdycgfHwga2V5ID09PSAncGFzc0hyZWYnIHx8IGtleSA9PT0gJ3ByZWZldGNoJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgICAgIGNvbnN0IGhhc1dhcm5lZCA9IF9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7XG4gICAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlO1xuICAgIGNvbnN0IHJvdXRlciA9ICgwLCBfcm91dGVyMSkudXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBocmVmICwgYXMgIH0gPSBfcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57XG4gICAgICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuaHJlZiwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBhczogcHJvcHMuYXMgPyAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5hcykgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICB9O1xuICAgIH0sIFtcbiAgICAgICAgcm91dGVyLFxuICAgICAgICBwcm9wcy5ocmVmLFxuICAgICAgICBwcm9wcy5hc1xuICAgIF0pO1xuICAgIGxldCB7IGNoaWxkcmVuICwgcmVwbGFjZSAsIHNoYWxsb3cgLCBzY3JvbGwgLCBsb2NhbGUgIH0gPSBwcm9wcztcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgICBjaGlsZHJlbiA9IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIiwgbnVsbCwgY2hpbGRyZW4pO1xuICAgIH1cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBsZXQgY2hpbGQ7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIiBcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkUmVmID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWY7XG4gICAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9ICgwLCBfdXNlSW50ZXJzZWN0aW9uKS51c2VJbnRlcnNlY3Rpb24oe1xuICAgICAgICByb290TWFyZ2luOiAnMjAwcHgnXG4gICAgfSk7XG4gICAgY29uc3Qgc2V0UmVmID0gX3JlYWN0LmRlZmF1bHQudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpO1xuICAgICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGNoaWxkUmVmLFxuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWZcbiAgICBdKTtcbiAgICBfcmVhY3QuZGVmYXVsdC51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiAoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKTtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXTtcbiAgICAgICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGFzLFxuICAgICAgICBocmVmLFxuICAgICAgICBpc1Zpc2libGUsXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgcCxcbiAgICAgICAgcm91dGVyXG4gICAgXSk7XG4gICAgY29uc3QgY2hpbGRQcm9wcyA9IHtcbiAgICAgICAgcmVmOiBzZXRSZWYsXG4gICAgICAgIG9uQ2xpY2s6IChlKT0+e1xuICAgICAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlKT0+e1xuICAgICAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgcHJpb3JpdHk6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAocHJvcHMucGFzc0hyZWYgfHwgY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkge1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgICAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgICAgICBjb25zdCBsb2NhbGVEb21haW4gPSByb3V0ZXIgJiYgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmICgwLCBfcm91dGVyKS5nZXREb21haW5Mb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLCByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXMpO1xuICAgICAgICBjaGlsZFByb3BzLmhyZWYgPSBsb2NhbGVEb21haW4gfHwgKDAsIF9yb3V0ZXIpLmFkZEJhc2VQYXRoKCgwLCBfcm91dGVyKS5hZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSk7XG4gICAgfVxuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcykpO1xufVxudmFyIF9kZWZhdWx0ID0gTGluaztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHZvaWQgMDtcbmZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aDtcbn1cbmNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIID8gKHBhdGgpPT57XG4gICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTtcbiAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJztcbiAgICB9XG59IDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IGV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gdm9pZCAwO1xuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihjYikge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCAxKTtcbn07XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrO1xuY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihpZCkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufTtcbmV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gY2FuY2VsSWRsZUNhbGxiYWNrO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm1hcmtBc3NldEVycm9yID0gbWFya0Fzc2V0RXJyb3I7XG5leHBvcnRzLmlzQXNzZXRFcnJvciA9IGlzQXNzZXRFcnJvcjtcbmV4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCA9IGdldENsaWVudEJ1aWxkTWFuaWZlc3Q7XG5leHBvcnRzLmNyZWF0ZVJvdXRlTG9hZGVyID0gY3JlYXRlUm91dGVMb2FkZXI7XG52YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMDtcbmZ1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LCBtYXAsIGdlbmVyYXRvcikge1xuICAgIGxldCBlbnRyeSA9IG1hcC5nZXQoa2V5KTtcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gZW50cnkuZnV0dXJlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO1xuICAgIH1cbiAgICBsZXQgcmVzb2x2ZXI7XG4gICAgY29uc3QgcHJvbSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICByZXNvbHZlciA9IHJlc29sdmU7XG4gICAgfSk7XG4gICAgbWFwLnNldChrZXksIGVudHJ5ID0ge1xuICAgICAgICByZXNvbHZlOiByZXNvbHZlcixcbiAgICAgICAgZnV0dXJlOiBwcm9tXG4gICAgfSk7XG4gICAgcmV0dXJuIGdlbmVyYXRvciA/IGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKT0+KHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpXG4gICAgKSA6IHByb207XG59XG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgcmV0dXJuKC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISFkb2N1bWVudC5kb2N1bWVudE1vZGUpIHx8IGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuY29uc3QgY2FuUHJlZmV0Y2ggPSBoYXNQcmVmZXRjaCgpO1xuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZiwgYXMsIGxpbmspIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKT0+e1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcygpO1xuICAgICAgICB9XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgICAgIGlmIChhcykgbGluay5hcyA9IGFzO1xuICAgICAgICBsaW5rLnJlbCA9IGBwcmVmZXRjaGA7XG4gICAgICAgIGxpbmsuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICBsaW5rLm9ubG9hZCA9IHJlcztcbiAgICAgICAgbGluay5vbmVycm9yID0gcmVqO1xuICAgICAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgICAgICBsaW5rLmhyZWYgPSBocmVmO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH0pO1xufVxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpO1xuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyO1xufVxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KHNyYywgc2NyaXB0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgICAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgICAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZTtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSAoKT0+cmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG4gICAgICAgIDtcbiAgICAgICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgICAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgICAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICAgICAgc2NyaXB0LnNyYyA9IHNyYztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0pO1xufVxuLy8gV2Ugd2FpdCBmb3IgcGFnZXMgdG8gYmUgYnVpbHQgaW4gZGV2IGJlZm9yZSB3ZSBzdGFydCB0aGUgcm91dGUgdHJhbnNpdGlvblxuLy8gdGltZW91dCB0byBwcmV2ZW50IGFuIHVuLW5lY2Vzc2FyeSBoYXJkIG5hdmlnYXRpb24gaW4gZGV2ZWxvcG1lbnQuXG5sZXQgZGV2QnVpbGRQcm9taXNlO1xuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCwgbXMsIGVycikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIHAudGhlbigocik9PntcbiAgICAgICAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKHIpO1xuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgICAvLyBXZSB3cmFwIHRoZXNlIGNoZWNrcyBzZXBhcmF0ZWx5IGZvciBiZXR0ZXIgZGVhZC1jb2RlIGVsaW1pbmF0aW9uIGluXG4gICAgICAgIC8vIHByb2R1Y3Rpb24gYnVuZGxlcy5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoZGV2QnVpbGRQcm9taXNlIHx8IFByb21pc2UucmVzb2x2ZSgpKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkge1xuICAgIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgIH1cbiAgICBjb25zdCBvbkJ1aWxkTWFuaWZlc3QgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgICAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQjtcbiAgICAgICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCk9PntcbiAgICAgICAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSkpO1xufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICBzY3JpcHRzOiBbXG4gICAgICAgICAgICAgICAgYXNzZXRQcmVmaXggKyAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICsgZW5jb2RlVVJJKCgwLCBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKS5kZWZhdWx0KHJvdXRlLCAnLmpzJykpLCBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICAgICAgICBjc3M6IFtdXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KT0+e1xuICAgICAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKChlbnRyeSk9PmFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmpzJylcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5jc3MnKVxuICAgICAgICAgICAgKVxuICAgICAgICB9O1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpIHtcbiAgICBjb25zdCBlbnRyeXBvaW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBsb2FkZWRTY3JpcHRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHN0eWxlU2hlZXRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHJvdXRlcyA9IG5ldyBNYXAoKTtcbiAgICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKSB7XG4gICAgICAgIGxldCBwcm9tID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZikge1xuICAgICAgICBsZXQgcHJvbSA9IHN0eWxlU2hlZXRzLmdldChocmVmKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIHN0eWxlU2hlZXRzLnNldChocmVmLCBwcm9tID0gZmV0Y2goaHJlZikudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpPT4oe1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0ZXh0XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB3aGVuRW50cnlwb2ludCAocm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRW50cnlwb2ludCAocm91dGUsIGV4ZWN1dGUpIHtcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKChmbik9PmZuKClcbiAgICAgICAgICAgICkudGhlbigoZXhwb3J0cyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0c1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAsIChlcnIpPT4oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkudGhlbigoaW5wdXQpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KTtcbiAgICAgICAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkUm91dGUgKHJvdXRlLCBwcmVmZXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIHJvdXRlcywgKCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUZpbGVzUHJvbWlzZSA9IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKCh7IHNjcmlwdHMgLCBjc3MgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpID8gW10gOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksIFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKChlbnRyeXBvaW50KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogcmVzWzFdXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgICAgICAgICBkZXZCdWlsZFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3V0ZUZpbGVzUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUZpbGVzUHJvbWlzZS5maW5hbGx5KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHJvdXRlRmlsZXNQcm9taXNlLCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7IGVudHJ5cG9pbnQgLCBzdHlsZXMgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiBzdHlsZXNcbiAgICAgICAgICAgICAgICAgICAgfSwgZW50cnlwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBwcmVmZXRjaCAocm91dGUpIHtcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgICAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgICAgICAgIGxldCBjbjtcbiAgICAgICAgICAgIGlmIChjbiA9IG5hdmlnYXRvci5jb25uZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgICAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKChvdXRwdXQpPT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaCA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KT0+cHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JylcbiAgICAgICAgICAgICAgICApIDogW10pXG4gICAgICAgICAgICApLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnRoaXMubG9hZFJvdXRlKHJvdXRlLCB0cnVlKS5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICAgKCk9PntcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbG9hZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ3aXRoUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfd2l0aFJvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuZXhwb3J0cy51c2VSb3V0ZXIgPSB1c2VSb3V0ZXI7XG5leHBvcnRzLmNyZWF0ZVJvdXRlciA9IGNyZWF0ZVJvdXRlcjtcbmV4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlID0gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtcbnZhciBfcm91dGVyQ29udGV4dCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0XCIpO1xudmFyIF93aXRoUm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBzaW5nbGV0b25Sb3V0ZXIgPSB7XG4gICAgcm91dGVyOiBudWxsLFxuICAgIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgICByZWFkeSAoY2IpIHtcbiAgICAgICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKTtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAgICdwYXRobmFtZScsXG4gICAgJ3JvdXRlJyxcbiAgICAncXVlcnknLFxuICAgICdhc1BhdGgnLFxuICAgICdjb21wb25lbnRzJyxcbiAgICAnaXNGYWxsYmFjaycsXG4gICAgJ2Jhc2VQYXRoJyxcbiAgICAnbG9jYWxlJyxcbiAgICAnbG9jYWxlcycsXG4gICAgJ2RlZmF1bHRMb2NhbGUnLFxuICAgICdpc1JlYWR5JyxcbiAgICAnaXNQcmV2aWV3JyxcbiAgICAnaXNMb2NhbGVEb21haW4nLFxuICAgICdkb21haW5Mb2NhbGVzJywgXG5dO1xuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAgICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgICAnaGFzaENoYW5nZUNvbXBsZXRlJywgXG5dO1xuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgICAncHVzaCcsXG4gICAgJ3JlcGxhY2UnLFxuICAgICdyZWxvYWQnLFxuICAgICdiYWNrJyxcbiAgICAncHJlZmV0Y2gnLFxuICAgICdiZWZvcmVQb3BTdGF0ZScsIFxuXTtcbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gICAgZ2V0ICgpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgfVxufSk7XG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuXG4gICAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gICAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gICAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgICAgICBnZXQgKCkge1xuICAgICAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIHNpbmdsZXRvblJvdXRlcltmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO1xuICAgIH07XG59KTtcbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9PntcbiAgICAgICAgX3JvdXRlci5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO1xuICAgICAgICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlcjtcbiAgICAgICAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5mdW5jdGlvbiBnZXRSb3V0ZXIoKSB7XG4gICAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgKyAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG52YXIgX2RlZmF1bHQgPSBzaW5nbGV0b25Sb3V0ZXI7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbmZ1bmN0aW9uIHVzZVJvdXRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlciguLi5hcmdzKSB7XG4gICAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBfcm91dGVyLmRlZmF1bHQoLi4uYXJncyk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKT0+Y2IoKVxuICAgICk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW107XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG5mdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKSB7XG4gICAgY29uc3QgX3JvdXRlcjEgPSByb3V0ZXI7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtcbiAgICAgICAgaWYgKHR5cGVvZiBfcm91dGVyMVtwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKEFycmF5LmlzQXJyYXkoX3JvdXRlcjFbcHJvcGVydHldKSA/IFtdIDoge1xuICAgICAgICAgICAgfSwgX3JvdXRlcjFbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcjFbcHJvcGVydHldO1xuICAgIH1cbiAgICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gICAgaW5zdGFuY2UuZXZlbnRzID0gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgICAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIHJldHVybiBfcm91dGVyMVtmaWVsZF0oLi4uYXJncyk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnVzZUludGVyc2VjdGlvbiA9IHVzZUludGVyc2VjdGlvbjtcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oeyByb290TWFyZ2luICwgZGlzYWJsZWQgIH0pIHtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO1xuICAgIGNvbnN0IHVub2JzZXJ2ZSA9ICgwLCBfcmVhY3QpLnVzZVJlZigpO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9ICgwLCBfcmVhY3QpLnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBzZXRSZWYgPSAoMCwgX3JlYWN0KS51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVybjtcbiAgICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShlbCwgKGlzVmlzaWJsZSk9PmlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSlcbiAgICAgICAgICAgICwge1xuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICByb290TWFyZ2luLFxuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgKDAsIF9yZWFjdCkudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9ICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpPT4oMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLmNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgc2V0UmVmLFxuICAgICAgICB2aXNpYmxlXG4gICAgXTtcbn1cbmZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlkICwgb2JzZXJ2ZXIgLCBlbGVtZW50cyAgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO1xuICAgIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgICAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgICAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucykge1xuICAgIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnO1xuICAgIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKT0+e1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KT0+e1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMDtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBvcHRpb25zKTtcbiAgICBvYnNlcnZlcnMuc2V0KGlkLCBpbnN0YW5jZSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG9ic2VydmVyLFxuICAgICAgICBlbGVtZW50c1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHdpdGhSb3V0ZXI7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KSB7XG4gICAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICByb3V0ZXI6ICgwLCBfcm91dGVyKS51c2VSb3V0ZXIoKVxuICAgICAgICB9LCBwcm9wcykpKTtcbiAgICB9XG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbiAgICAgICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWA7XG4gICAgfVxuICAgIHJldHVybiBXaXRoUm91dGVyV3JhcHBlcjtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldERvbWFpbkxvY2FsZSA9IGdldERvbWFpbkxvY2FsZTtcbmV4cG9ydHMuYWRkTG9jYWxlID0gYWRkTG9jYWxlO1xuZXhwb3J0cy5kZWxMb2NhbGUgPSBkZWxMb2NhbGU7XG5leHBvcnRzLmhhc0Jhc2VQYXRoID0gaGFzQmFzZVBhdGg7XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5leHBvcnRzLmlzTG9jYWxVUkwgPSBpc0xvY2FsVVJMO1xuZXhwb3J0cy5pbnRlcnBvbGF0ZUFzID0gaW50ZXJwb2xhdGVBcztcbmV4cG9ydHMucmVzb2x2ZUhyZWYgPSByZXNvbHZlSHJlZjtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoXCIpO1xudmFyIF9yb3V0ZUxvYWRlciA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO1xudmFyIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoID0gcmVxdWlyZShcIi4uLy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7XG52YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGggPSByZXF1aXJlKFwiLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGhcIik7XG52YXIgX21pdHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG52YXIgX2lzRHluYW1pYyA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG52YXIgX3BhcnNlUmVsYXRpdmVVcmwgPSByZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7XG52YXIgX3F1ZXJ5c3RyaW5nID0gcmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7XG52YXIgX3Jlc29sdmVSZXdyaXRlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlc1wiKSk7XG52YXIgX3JvdXRlTWF0Y2hlciA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7XG52YXIgX3JvdXRlUmVnZXggPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmxldCBkZXRlY3REb21haW5Mb2NhbGU7XG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7XG59XG5jb25zdCBiYXNlUGF0aCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggfHwgJyc7XG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICAgICAgY2FuY2VsbGVkOiB0cnVlXG4gICAgfSk7XG59XG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgsIHByZWZpeCkge1xuICAgIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJykgPyBwYXRoID09PSAnLycgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeCkgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gIDogcGF0aDtcbn1cbmZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShwYXRoLCBsb2NhbGUsIGxvY2FsZXMsIGRvbWFpbkxvY2FsZXMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBsb2NhbGUgPSBsb2NhbGUgfHwgKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO1xuICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSk7XG4gICAgICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aCB8fCAnJ30ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkTG9jYWxlKHBhdGgsIGxvY2FsZSwgZGVmYXVsdExvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJiBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCwgbG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIChwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgfHwgcGF0aExvd2VyID09PSAnLycgKyBsb2NhbGVMb3dlcikgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArIHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpIHtcbiAgICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/Jyk7XG4gICAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleCk7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJyk7XG59XG5mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKSB7XG4gICAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aCk7XG59XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtcbiAgICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YDtcbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsKSB7XG4gICAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykgfHwgdXJsLnN0YXJ0c1dpdGgoJz8nKSkgcmV0dXJuIHRydWU7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICAgICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpIHtcbiAgICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJztcbiAgICBjb25zdCBkeW5hbWljUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzO1xuICAgIGNvbnN0IGR5bmFtaWNNYXRjaGVzID0gLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fCAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnk7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZTtcbiAgICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKTtcbiAgICBpZiAoIXBhcmFtcy5ldmVyeSgocGFyYW0pPT57XG4gICAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJztcbiAgICAgICAgY29uc3QgeyByZXBlYXQgLCBvcHRpb25hbCAgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dO1xuICAgICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gO1xuICAgICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW1xuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiYgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9IGludGVycG9sYXRlZFJvdXRlLnJlcGxhY2UocmVwbGFjZWQsIHJlcGVhdCA/IHZhbHVlLm1hcCgvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgIChzZWdtZW50KT0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICkuam9pbignLycpIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSkgfHwgJy8nKTtcbiAgICB9KSkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4gICAgICAgIDtcbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHBhcmFtcyxcbiAgICAgICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZVxuICAgIH07XG59XG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcykge1xuICAgIGNvbnN0IGZpbHRlcmVkUXVlcnkgPSB7XG4gICAgfTtcbiAgICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbHRlcmVkUXVlcnk7XG59XG5mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsIGhyZWYsIHJlc29sdmVBcykge1xuICAgIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gICAgbGV0IGJhc2U7XG4gICAgbGV0IHVybEFzU3RyaW5nID0gdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpO1xuICAgIC8vIHJlcGVhdGVkIHNsYXNoZXMgYW5kIGJhY2tzbGFzaGVzIGluIHRoZSBVUkwgYXJlIGNvbnNpZGVyZWRcbiAgICAvLyBpbnZhbGlkIGFuZCB3aWxsIG5ldmVyIG1hdGNoIGEgTmV4dC5qcyBwYWdlL2ZpbGVcbiAgICBjb25zdCB1cmxQcm90b01hdGNoID0gdXJsQXNTdHJpbmcubWF0Y2goL15bYS16QS1aXXsxLH06XFwvXFwvLyk7XG4gICAgY29uc3QgdXJsQXNTdHJpbmdOb1Byb3RvID0gdXJsUHJvdG9NYXRjaCA/IHVybEFzU3RyaW5nLnN1YnN0cih1cmxQcm90b01hdGNoWzBdLmxlbmd0aCkgOiB1cmxBc1N0cmluZztcbiAgICBjb25zdCB1cmxQYXJ0cyA9IHVybEFzU3RyaW5nTm9Qcm90by5zcGxpdCgnPycpO1xuICAgIGlmICgodXJsUGFydHNbMF0gfHwgJycpLm1hdGNoKC8oXFwvXFwvfFxcXFwpLykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byBuZXh0L3JvdXRlcjogJHt1cmxBc1N0cmluZ30sIHJlcGVhdGVkIGZvcndhcmQtc2xhc2hlcyAoLy8pIG9yIGJhY2tzbGFzaGVzIFxcXFwgYXJlIG5vdCB2YWxpZCBpbiB0aGUgaHJlZmApO1xuICAgICAgICBjb25zdCBub3JtYWxpemVkVXJsID0gKDAsIF91dGlscykubm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzKHVybEFzU3RyaW5nTm9Qcm90byk7XG4gICAgICAgIHVybEFzU3RyaW5nID0gKHVybFByb3RvTWF0Y2ggPyB1cmxQcm90b01hdGNoWzBdIDogJycpICsgbm9ybWFsaXplZFVybDtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKSA/IHJvdXRlci5hc1BhdGggOiByb3V0ZXIucGF0aG5hbWUsICdodHRwOi8vbicpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgLy8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbiAgICAgICAgYmFzZSA9IG5ldyBVUkwoJy8nLCAnaHR0cDovL24nKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKTtcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKTtcbiAgICAgICAgbGV0IGludGVycG9sYXRlZEFzID0gJyc7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJiByZXNvbHZlQXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gKDAsIF9xdWVyeXN0cmluZykuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO1xuICAgICAgICAgICAgY29uc3QgeyByZXN1bHQgLCBwYXJhbXMgIH0gPSBpbnRlcnBvbGF0ZUFzKGZpbmFsVXJsLnBhdGhuYW1lLCBmaW5hbFVybC5wYXRobmFtZSwgcXVlcnkpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGludGVycG9sYXRlZEFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpbiA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCkgOiBmaW5hbFVybC5ocmVmO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXG4gICAgICAgIF0gOiByZXNvbHZlZEhyZWY7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybCkge1xuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsO1xufVxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlciwgdXJsLCBhcykge1xuICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLCB1cmwsIHRydWUpO1xuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7XG4gICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXM7XG4gICAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtcbiAgICBjb25zdCBwcmVwYXJlZEFzID0gYXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsIGFzKSkgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZjtcbiAgICByZXR1cm4ge1xuICAgICAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgICAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcylcbiAgICB9O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpIHtcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCgoMCwgX2Rlbm9ybWFsaXplUGFnZVBhdGgpLmRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUpKTtcbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgICByZXR1cm4gcGF0aG5hbWU7XG4gICAgfVxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgcGFnZXMuc29tZSgocGFnZSk9PntcbiAgICAgICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGFnZSkgJiYgKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSA9IHBhZ2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSk7XG59XG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJiAhIWZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCB2ID0gJ19fbmV4dCc7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWU7XG4gICAgfSBjYXRjaCAobikge1xuICAgIH1cbn0oKTtcbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJyk7XG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAvL1xuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgICgwLCBfcm91dGVMb2FkZXIpLm1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZTEsIHF1ZXJ5MSwgYXMxLCB7IGluaXRpYWxQcm9wcyAsIHBhZ2VMb2FkZXIgLCBBcHAgLCB3cmFwQXBwICwgQ29tcG9uZW50OiBDb21wb25lbnQxICwgZXJyOiBlcnIxICwgc3Vic2NyaXB0aW9uICwgaXNGYWxsYmFjayAsIGxvY2FsZSAsIGxvY2FsZXMgLCBkZWZhdWx0TG9jYWxlICwgZG9tYWluTG9jYWxlcyAsIGlzUHJldmlldyAgfSl7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge1xuICAgICAgICB9O1xuICAgICAgICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICAgICAgICB0aGlzLnNkciA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5faWR4ID0gMDtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpPT57XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGU7XG4gICAgICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAgICAgICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAgICAgICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGZvcmNlZFNjcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHsgdXJsICwgYXM6IGFzMSAsIG9wdGlvbnMgLCBpZHggIH0gPSBzdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9pZHggPSBpZHg7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgIH0gPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgICAgICAgICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NzciAmJiBhczEgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lMSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAgICAgICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgICAgICAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMxLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIH0sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgfSksIGZvcmNlZFNjcm9sbCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xuICAgICAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge1xuICAgICAgICB9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnI6IGVycjEsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICAgICAgICBDb21wb25lbnQ6IEFwcCxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiBbXVxuICAgICAgICB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTE7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTE7XG4gICAgICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID0gKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lMSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZTEgOiBhczE7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIHRoaXMuaXNSZWFkeSA9ICEhKHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHwgc2VsZi5fX05FWFRfREFUQV9fLmFwcEdpcCAmJiAhc2VsZi5fX05FWFRfREFUQV9fLmdzcCB8fCAhYXV0b0V4cG9ydER5bmFtaWMgJiYgIXNlbGYubG9jYXRpb24uc2VhcmNoICYmICFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTtcbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIWlzUHJldmlldztcbiAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgICAgICAgIGlmIChhczEuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gYXMxICE9PSBwYXRobmFtZTE7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyBwdXNoKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAgICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgYXN5bmMgY2hhbmdlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucywgZm9yY2VkU2Nyb2xsKSB7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaG91bGRSZXNvbHZlSHJlZiA9IHVybCA9PT0gYXMgfHwgb3B0aW9ucy5faCB8fCBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjtcbiAgICAgICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgICAgICBpZiAob3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcmV2TG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSA/IHRoaXMuZGVmYXVsdExvY2FsZSA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlO1xuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKCgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIHZhciByZWY7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICAgICAgICAgIGlmICghKChyZWYgPSB0aGlzLmxvY2FsZXMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICAgICAgICAgIGlmICghZGlkTmF2aWdhdGUgJiYgZGV0ZWN0ZWREb21haW4gJiYgdGhpcy5pc0xvY2FsZURvbWFpbiAmJiBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHthZGRCYXNlUGF0aChgJHt0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke3RoaXMubG9jYWxlfWB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nKX1gO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICBpZiAoX3V0aWxzLlNUKSB7XG4gICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9ZmFsc2UgIH0gPSBvcHRpb25zO1xuICAgICAgICBjb25zdCByb3V0ZVByb3BzID0ge1xuICAgICAgICAgICAgc2hhbGxvd1xuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIG9wdGlvbnMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpKTtcbiAgICAgICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhcztcbiAgICAgICAgbGV0IGxvY2FsZUNoYW5nZSA9IHByZXZMb2NhbGUgIT09IHRoaXMubG9jYWxlO1xuICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4gICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXM7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHBhcnNlZDtcbiAgICAgICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgICAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAgICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICAgICAgbGV0IHBhZ2VzLCByZXdyaXRlcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICB9XG4gICAgICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhcztcbiAgICAgICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgICAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgICAgIHBhdGhuYW1lMSA9IHBhdGhuYW1lMSA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUxKSkgOiBwYXRobmFtZTE7XG4gICAgICAgIGlmIChzaG91bGRSZXNvbHZlSHJlZiAmJiBwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSAoMCwgX3Jlc29sdmVSZXdyaXRlcykuZGVmYXVsdChhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLCB0aGlzLmxvY2FsZSkpLCBwYWdlcywgcmV3cml0ZXMsIHF1ZXJ5MSwgKHApPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKVxuICAgICAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoO1xuICAgICAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lMSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lMSkge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgKyBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcyk7XG4gICAgICAgICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGUgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeTEpIDoge1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCB8fCBzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoKHBhcmFtKT0+IXF1ZXJ5MVtwYXJhbV1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZSA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGUgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgKyBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICB9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5MSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5MSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHJlZiwgcmVmMTtcbiAgICAgICAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIGxldCB7IGVycm9yICwgcHJvcHMgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLnBhZ2VQcm9wcyAmJiBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVDtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZEhyZWYucGF0aG5hbWUsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwgLCBhczogbmV3QXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgZGVzdGluYXRpb24sIGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb247XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXO1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZTtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCc7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8obm90Rm91bmRSb3V0ZSwgbm90Rm91bmRSb3V0ZSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhbGxvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICB3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkID0gYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJiAhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5faCAmJiBwYXRobmFtZTEgPT09ICcvX2Vycm9yJyAmJiAoKHJlZiA9IHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiAocmVmMSA9IHJlZi5wYWdlUHJvcHMpID09PSBudWxsIHx8IHJlZjEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZjEuc3RhdHVzQ29kZSkgPT09IDUwMCAmJiAocHJvcHMgPT09IG51bGwgfHwgcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb3BzLnBhZ2VQcm9wcykpIHtcbiAgICAgICAgICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlO1xuICAgICAgICAgICAgdmFyIF9zY3JvbGw7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRTY3JvbGwgPSAoX3Njcm9sbCA9IG9wdGlvbnMuc2Nyb2xsKSAhPT0gbnVsbCAmJiBfc2Nyb2xsICE9PSB2b2lkIDAgPyBfc2Nyb2xsIDogIWlzVmFsaWRTaGFsbG93Um91dGU7XG4gICAgICAgICAgICBjb25zdCByZXNldFNjcm9sbCA9IHNob3VsZFNjcm9sbCA/IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgIH0gOiBudWxsO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBjbGVhbmVkQXMsIHJvdXRlSW5mbywgZm9yY2VkU2Nyb2xsICE9PSBudWxsICYmIGZvcmNlZFNjcm9sbCAhPT0gdm9pZCAwID8gZm9yY2VkU2Nyb2xsIDogcmVzZXRTY3JvbGwpLmNhdGNoKChlKT0+e1xuICAgICAgICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlO1xuICAgICAgICAgICAgICAgIGVsc2UgdGhyb3cgZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICBpZiAoZXJyMS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnIxO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8ICgwLCBfdXRpbHMpLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvdztcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxXG4gICAgICAgICAgICB9LCAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCgwLCBfcm91dGVMb2FkZXIpLmlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBDb21wb25lbnQxO1xuICAgICAgICAgICAgbGV0IHN0eWxlU2hlZXRzO1xuICAgICAgICAgICAgbGV0IHByb3BzO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBDb21wb25lbnQxID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygc3R5bGVTaGVldHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgKHsgcGFnZTogQ29tcG9uZW50MSAsIHN0eWxlU2hlZXRzICB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHtcbiAgICAgICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycik7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvID8gdW5kZWZpbmVkIDogZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm8gPyBjYWNoZWRSb3V0ZUluZm8gOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGF0YUhyZWY7XG4gICAgICAgICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgICAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgICAgICB9KSwgcmVzb2x2ZWRBcywgX19OX1NTRywgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhKCgpPT5fX05fU1NHID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZikgOiBfX05fU1NQID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZikgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGVzOiB0aGlzLmxvY2FsZXMsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU6IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAoZXJyMikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyMiwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBkYXRhLCByZXNldFNjcm9sbCkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqLyBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpO1xuICAgICAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgICAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgICAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgICAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgICAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaDtcbiAgICB9XG4gICAgc2Nyb2xsVG9IYXNoKGFzKSB7XG4gICAgICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi8gYXN5bmMgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTIgIH0gPSBwYXJzZWQ7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lMiwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICBsZXQgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgICAgIGFzUGF0aCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgbGV0IHJld3JpdGVzO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSAoMCwgX3Jlc29sdmVSZXdyaXRlcykuZGVmYXVsdChhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLCBwYWdlcywgcmV3cml0ZXMsIHBhcnNlZC5xdWVyeSwgKHApPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKVxuICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKTtcbiAgICAgICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lMikge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUyKTtcbiAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBpc1NzZyA/IHRoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCwgcmVzb2x2ZWRBcywgdHJ1ZSwgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogdGhpcy5sb2NhbGUpKSA6IGZhbHNlO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksIFxuICAgICAgICBdKTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSB0aGlzLmNsYyA9ICgpPT57XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7XG4gICAgICAgICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0O1xuICAgIH1cbiAgICBfZ2V0RGF0YShmbikge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpPT57XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycjIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIHtcbiAgICAgICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgIXRoaXMuaXNQcmV2aWV3ICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIHtcbiAgICAgICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSkuY2F0Y2goKGVycjIpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwMSAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwMSk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMpLmxvYWRHZXRJbml0aWFsUHJvcHMoQXBwMSwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWJvcnRDb21wb25lbnRMb2FkKGFzLCByb3V0ZVByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNsYygpO1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5vdGlmeShkYXRhLCByZXNldFNjcm9sbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbn1cblJvdXRlci5ldmVudHMgPSAoMCwgX21pdHQpLmRlZmF1bHQoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlcjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9sYXlvdXQvRm9vdGVyJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2xheW91dC9IZWFkZXInXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vbGF5b3V0L0xheW91dCdcclxuaW1wb3J0IENpcmNsZUNvbnRlbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2lyY2xlL2xpc3RfY29udGVudC9DaXJjbGVDb250ZW50XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IGZldGNoQ2lyY2xlVHlwZSB9IGZyb20gXCIuLi8uLi9zdG9yZS9zbGljZXMvY29tbW9uU2xpY2VcIjtcclxuaW1wb3J0IHdyYXBwZXIsIHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9zdG9yZS9zdG9yZSdcclxuaW1wb3J0IHsgZmV0Y2hBbGxDaXJjbGVMaXN0LCBmZXRjaFVzZXJDaXJjbGVMaXN0IH0gZnJvbSBcIi4uLy4uL3N0b3JlL3NsaWNlcy9jaXJjbGVTbGljZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IENpcmNsZVBhZ2U6IE5leHRQYWdlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxMYXlvdXQgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0+XHJcbiAgICAgICAgPEhlYWRlciBwYWdlPXszfSAvPlxyXG4gICAgICAgIDxDaXJjbGVDb250ZW50IC8+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9MYXlvdXQ+XHJcbn1cclxuXHJcbkNpcmNsZVBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gd3JhcHBlci5nZXRJbml0aWFsUGFnZVByb3BzKChzdG9yZSkgPT4gYXN5bmMgKHsgcmVxIH0pID0+IHtcclxuXHJcblxyXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgIHN0b3JlLmdldFN0YXRlKCkuY29tbW9uLmNpcmNsZVR5cGUubGVuZ3RoID09IDAgJiYgc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgICAgICAgIGZldGNoQ2lyY2xlVHlwZSh7fSksXHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgICAgICAgIGZldGNoQWxsQ2lyY2xlTGlzdCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAxLFxyXG4gICAgICAgICAgICAgICAgcGFnZTogMSxcclxuICAgICAgICAgICAgICAgIGxpbWl0OiAyMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICksXHJcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goZmV0Y2hVc2VyQ2lyY2xlTGlzdCh7XHJcbiAgICAgICAgICAgIHBhZ2U6IDEsXHJcbiAgICAgICAgICAgIGxpbWl0OiAyMCxcclxuICAgICAgICAgICAgaWQ6IHN0b3JlLmdldFN0YXRlKCkudXNlci51c2VyPy5pZFxyXG4gICAgICAgIH0pKVxyXG4gICAgXSk7XHJcbiAgICByZXR1cm4ge307XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2lyY2xlUGFnZTsiLCJpbXBvcnQgYXBpIGZyb20gJy4uLy4uL3V0aWxzL2FwaSc7XHJcbmltcG9ydCBVcmwgZnJvbSAnLi4vLi4vdXRpbHMvdXJsJztcclxuaW1wb3J0IHsgRmV0Y2hGbiwgTGltaXRJZFBhcmFtcywgTGltaXRUeXBlUGFyYW1zIH0gZnJvbSAnLi4vcGFyYW1zJztcclxuaW1wb3J0IHR5cGUgeyBSZXMgfSBmcm9tICcuL2hvbWUnO1xyXG5cclxuXHJcbmV4cG9ydCB0eXBlIExpc3RQYWdlQmVhbjxUPiA9IHtcclxuICAgIHRvdGFsOiBudW1iZXIsXHJcbiAgICBsaXN0OiBBcnJheTxUPlxyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgQ2lyY2xlQmVhbiA9IHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBjaXJjbGVfbmFtZTogc3RyaW5nO1xyXG4gICAgYXZhdGFyOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgY2lyY2xlX3RhZzogc3RyaW5nO1xyXG4gICAgY2lyY2xlX2JhY2tncm91bmQ6IHN0cmluZztcclxuICAgIG93bmVyX2lkOiBzdHJpbmc7XHJcbiAgICB0eXBlOiBudW1iZXI7XHJcbiAgICBzdGF0dXM6IG51bWJlcjtcclxuICAgIG91dF92aXNpYWJsZV9sZXZlbDogbnVtYmVyO1xyXG4gICAgbmVlZF9hcHBseTogbnVtYmVyO1xyXG4gICAgY3JlYXRlX3RpbWU6IHN0cmluZztcclxuICAgIGpvaW5fdHlwZTogbnVtYmVyO1xyXG59O1xyXG5cclxuXHJcbi8qKuWciOWtkOWIl+ihqCAqL1xyXG5leHBvcnQgY29uc3QgZ2V0Q2lyY2xlTGlzdDogRmV0Y2hGbjxMaW1pdFR5cGVQYXJhbXM+ID0gKHBhcmFtcykgPT4ge1xyXG4gICAgcmV0dXJuIGFwaS5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IFVybC5jaXJjbGVMaXN0LFxyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICBwYXJhbXM6IHBhcmFtcyxcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLyoq55So5oi355qE5ZyI5a2Q5YiX6KGoICovXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyQ2lyY2xlTGlzdDogRmV0Y2hGbjxMaW1pdElkUGFyYW1zPiA9IChwYXJhbXMpID0+IHtcclxuICAgIHJldHVybiBhcGkucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiBVcmwudXNlckNpcmNsZUxpc3QsXHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIHBhcmFtczogcGFyYW1zLFxyXG4gICAgfSk7XHJcbn07XHJcbiIsImltcG9ydCBhcGkgZnJvbSAnLi4vLi4vdXRpbHMvYXBpJztcclxuaW1wb3J0IFVybCBmcm9tICcuLi8uLi91dGlscy91cmwnO1xyXG5pbXBvcnQgeyBGZXRjaEZuIH0gZnJvbSAnLi4vcGFyYW1zJztcclxuaW1wb3J0IHsgSGVscFR5cGVCZWFuIH0gZnJvbSAnLi9oZWxwZXInO1xyXG5pbXBvcnQgdHlwZSB7IE5hbWVJZEJlYW4sIFJlcyB9IGZyb20gJy4vaG9tZSc7XHJcblxyXG4vLyDlrabmoKFiZWFuXHJcbmV4cG9ydCB0eXBlIFNjaG9vbEJlYW4gPSBOYW1lSWRCZWFuICYge1xyXG4gICAgcGFydDogc3RyaW5nLFxyXG59O1xyXG5cclxuLy8g5Zyw5Z2AYmVhblxyXG5leHBvcnQgdHlwZSBBZGRyZXNzQmVhbiA9IE5hbWVJZEJlYW4gJiB7XHJcbiAgICBjaXRpZXM6IEFycmF5PENpdHlCZWFuPlxyXG59O1xyXG5cclxuLy8g5Z+O5biCYmVhblxyXG5leHBvcnQgdHlwZSBDaXR5QmVhbiA9IE5hbWVJZEJlYW4gJiB7XHJcbiAgICBwcm92aW5jZV9pZDogbnVtYmVyLFxyXG4gICAgYXJlYTogQXJyYXk8QXJlYUJlYW4+XHJcbn07XHJcblxyXG4vLyDljLpiZWFuXHJcbmV4cG9ydCB0eXBlIEFyZWFCZWFuID0gTmFtZUlkQmVhbiAmIHtcclxuICAgIHByb3ZpbmNlX2lkOiBudW1iZXIsXHJcbiAgICBjaXR5X2lkOiBudW1iZXJcclxufTtcclxuXHJcbi8vIOWciOWtkOexu+Wei2JlYW5cclxuZXhwb3J0IHR5cGUgQ2lyY2xlVHlwZUJlYW4gPSB7XHJcbiAgICBpZDogbnVtYmVyLFxyXG4gICAgdHlwZTogc3RyaW5nLFxyXG4gICAgdGFnczogQXJyYXk8VGFnc0JlYW4+XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBUYWdzQmVhbiA9IE5hbWVJZEJlYW4gJiB7XHJcbiAgICB0eXBlX2lkOiBudW1iZXIsXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFR5cGVBZGRyZXNzU2Nob29sQmVhbiA9IHtcclxuICAgIHR5cGU6IEFycmF5PEhlbHBUeXBlQmVhbj4sXHJcbiAgICBzY2hvb2w6IEFycmF5PFNjaG9vbEJlYW4+LFxyXG4gICAgYWRkcmVzczogQXJyYXk8QWRkcmVzc0JlYW4+LFxyXG4gICAgaG90X2NpdHk6IEFycmF5PENpdHlCZWFuPixcclxuICAgIGluZHVzdHJ5OiBBcnJheTxOYW1lSWRCZWFuPixcclxuICAgIGNpcmNsZV90eXBlOiBBcnJheTxDaXJjbGVUeXBlQmVhbj5cclxufTtcclxuXHJcblxyXG4vKirojrflj5blrabmoKHjgIHkupLluK7nsbvlnovjgIHnnIHluILljLogKi9cclxuZXhwb3J0IGNvbnN0IGdldFR5cGVBZGRyZXNzU2Nob29sOiBGZXRjaEZuPHVua25vd24+ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGFwaS5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IFVybC5jb21taXQsXHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiXHJcbiAgICB9KTtcclxufTtcclxuXHJcblxyXG4vKirojrflj5blnIjlrZDnsbvliKsgKi9cclxuZXhwb3J0IGNvbnN0IGdldENpcmNsZVR5cGU6IEZldGNoRm48dW5rbm93bj4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXBpLnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogVXJsLmdldENpcmNsZVR5cGUsXHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiXHJcbiAgICB9KTtcclxufTtcclxuIiwiaW1wb3J0IHsgTmFtZUlkQmVhbiB9IGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IHsgVXNlckJlYW4gfSBmcm9tIFwiLi91c2VyXCI7XHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vdXRpbHMvYXBpJztcclxuaW1wb3J0IFVybCBmcm9tICcuLi8uLi91dGlscy91cmwnO1xyXG5pbXBvcnQgeyBGZXRjaEZuLCBMaW1pdElkUGFyYW1zLCBMaW1pdFR5cGVQYXJhbXMgfSBmcm9tIFwiLi4vcGFyYW1zXCI7XHJcblxyXG5cclxuZXhwb3J0IHR5cGUgSGVscFR5cGVCZWFuID0gTmFtZUlkQmVhbiAmIHtcclxuICAgIGNoaWxkOiBOYW1lSWRCZWFuO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgSGVscGVySXRlbURhdGEgPSB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgc2VuZGVyX2lkOiBzdHJpbmc7XHJcbiAgICBzZW5kZXI6IFVzZXJCZWFuO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGNvbnRlbnQ6IHN0cmluZztcclxuICAgIHR5cGU6IEhlbHBUeXBlQmVhbjtcclxuICAgIHByb3ZpbmNlOiBOYW1lSWRCZWFuO1xyXG4gICAgY2l0eTogTmFtZUlkQmVhbjtcclxuICAgIGFyZWE6IE5hbWVJZEJlYW47XHJcbiAgICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgICBzdGFydF90aW1lOiBudW1iZXI7XHJcbiAgICBlbmRfdGltZTogbnVtYmVyO1xyXG4gICAgbG93ZXN0X3ByaWNlOiBudW1iZXI7XHJcbiAgICBoaWdoZXN0X3ByaWNlOiBudW1iZXI7XHJcbiAgICBpc191cmdlbnQ6IG51bWJlcjtcclxuICAgIHBlb3BsZV9udW1iZXI6IG51bWJlcjtcclxuICAgIGlzX3RpbWVvdXRfY2FuY2VsOiBudW1iZXI7XHJcbiAgICBmaW5pc2hfcHJvdmU6IG51bWJlcjtcclxuICAgIHN0YXR1czogbnVtYmVyO1xyXG4gICAgbG9uZ2l0dWRlOiBudW1iZXI7XHJcbiAgICBsYXRpdHVkZTogbnVtYmVyO1xyXG59O1xyXG5cclxuXHJcbi8qKuS6kuW4ruWIl+ihqCAqL1xyXG5leHBvcnQgY29uc3QgZ2V0SGVscGVyTGlzdDogRmV0Y2hGbjxMaW1pdFR5cGVQYXJhbXM+ID0gKHBhcmFtcykgPT4ge1xyXG4gICAgcmV0dXJuIGFwaS5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IFVybC5oZWxwZXJMaXN0LFxyXG4gICAgICAgIHBhcmFtczogcGFyYW1zLFxyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vKirojrflj5bnlKjmiLfmsYLliqnliJfooaggKi9cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJIZWxwZXJMaXN0OiBGZXRjaEZuPExpbWl0SWRQYXJhbXM+ID0gKHBhcmFtcykgPT4ge1xyXG4gICAgcmV0dXJuIGFwaS5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IFVybC51c2VySGVscExpc3QsXHJcbiAgICAgICAgcGFyYW1zOiBwYXJhbXMsXHJcbiAgICB9KTtcclxufTsiLCJpbXBvcnQgVXJsIGZyb20gXCIuLi8uLi91dGlscy91cmxcIjtcclxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi91dGlscy9hcGknO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJJbmZvKHBhcmFtczogeyBpZDogc3RyaW5nIH0pIHtcclxuICAgIHJldHVybiBhcGkucmVxdWVzdCh7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICB1cmw6IFVybC51c2VySW5mbyArIFwiP2lkPVwiICsgcGFyYW1zLmlkLFxyXG4gICAgfSk7XHJcbn07IiwiaW1wb3J0IGFwaSBmcm9tICcuLi8uLi91dGlscy9hcGknO1xyXG5pbXBvcnQgVXJsIGZyb20gJy4uLy4uL3V0aWxzL3VybCc7XHJcbmltcG9ydCB7IE5hbWVJZEJlYW4gfSBmcm9tICcuL2hvbWUnO1xyXG5cclxuZXhwb3J0IHR5cGUgVXNlckJlYW4gPSB7XHJcbiAgICBpZDogc3RyaW5nOyAvLyBpZFxyXG4gICAgYWxpYXM6IHN0cmluZzsgLy8g5Yir5ZCNXHJcbiAgICBuaWNrbmFtZTogc3RyaW5nOyAvLyDmmLXnp7BcclxuICAgIGF2YXRhcjogc3RyaW5nOyAvLyDlpLTlg49cclxuICAgIHNleDogbnVtYmVyOyAvLyDmgKfliKtcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7IC8v566A5LuLXHJcbiAgICBiaXJ0aGRheTogc3RyaW5nOyAgLy8g55Sf5pelXHJcbiAgICBwcm92aW5jZTogTmFtZUlkQmVhbjsgLy/nnIFcclxuICAgIGNpdHk6IE5hbWVJZEJlYW47XHJcbiAgICBzY2hvb2w6IE5hbWVJZEJlYW47IC8v5a2m5qChXHJcbiAgICBhdXRoZW50aWNhdGlvbl90eXBlOiBudW1iZXI7IC8v6K6k6K+B57G75Z6LXHJcbiAgICBvbmxpbmVfc3RhdHVzOiBudW1iZXI7IC8v5Zyo57q/54q25oCBXHJcbiAgICBjcmVkaXRfc2NvcmU6IG51bWJlcjsgLy8g5L+h55So6K+E5YiGXHJcbiAgICBvcmRlcl9yYXRlOiBudW1iZXI7IC8v5oiQ5Y2V546HXHJcbiAgICBmb2xsb3dfbnVtYmVyOiBudW1iZXI7IC8v5YWz5rOo5pWw55uuXHJcbiAgICBmYW5fbnVtYmVyOiBudW1iZXI7IC8v57KJ5Lid5pWw55uuXHJcbiAgICBmb2xsb3dlZDogYm9vbGVhbjsgLy/mmK/lkKblt7LlhbPms6hcclxuICAgIGZvbGxvd2luZzogYm9vbGVhbjsgLy/mmK/lkKbooqvlhbPms6hcclxuICAgIHBob25lOiBzdHJpbmc7IC8v5omL5py65Y+377yI5LuF55m75b2V55qE5b2T5YmN55So5oi35pyJ77yJXHJcbn1cclxuXHJcblxyXG5leHBvcnQgdHlwZSBMb2dpbkJlYW4gPSB7XHJcbiAgICB0b2tlbjogc3RyaW5nLFxyXG4gICAgdXNlcjogVXNlckJlYW4sXHJcbiAgICBpc19maW5pc2g6IG51bWJlcixcclxufTtcclxuXHJcblxyXG50eXBlIExvZ2luUGFyYW1zID0ge1xyXG4gICAgcGhvbmU/OiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZD86IHN0cmluZztcclxuICAgIGNvZGU/OiBzdHJpbmc7XHJcbiAgICB0eXBlPzogbnVtYmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBob25lQ29kZShwYXJhbXM6IExvZ2luUGFyYW1zKSB7XHJcbiAgICByZXR1cm4gYXBpLnJlcXVlc3Qoe1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogVXJsLmdldENvZGUsXHJcbiAgICAgICAgZGF0YTogcGFyYW1zLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwd2RMb2dpbihwYXJhbXM6IExvZ2luUGFyYW1zKSB7XHJcbiAgICByZXR1cm4gYXBpLnJlcXVlc3Qoe1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogVXJsLnB3ZExvZ2luLFxyXG4gICAgICAgIGRhdGE6IHBhcmFtcyxcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvZGVMb2dpbihwYXJhbXM6IExvZ2luUGFyYW1zKSB7XHJcbiAgICByZXR1cm4gYXBpLnJlcXVlc3Qoe1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogVXJsLmNvZGVMb2dpbixcclxuICAgICAgICBkYXRhOiBwYXJhbXMsXHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8qKuiHquWKqOeZu+W9lSAqL1xyXG5leHBvcnQgY29uc3QgYXV0b0xvZ2luID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGFwaS5yZXF1ZXN0KHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IFVybC5hdXRvTG9naW4sXHJcbiAgICB9KTtcclxufTsiLCJpbXBvcnQgeyB0aHVua1dyYXBwZXIgfSBmcm9tICcuLi8uLi91dGlscy91dGlsJztcclxuaW1wb3J0IHR5cGUgeyBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcblxyXG5pbXBvcnQgdHlwZSB7IFJlcyB9IGZyb20gJy4uL3NlcnZpY2VzL2hvbWUnO1xyXG5pbXBvcnQgeyBDaXJjbGVCZWFuLCBnZXRVc2VyQ2lyY2xlTGlzdCwgTGlzdFBhZ2VCZWFuIH0gZnJvbSAnLi4vc2VydmljZXMvY2lyY2xlJztcclxuaW1wb3J0IHsgZ2V0Q2lyY2xlTGlzdCB9IGZyb20gJy4uL3NlcnZpY2VzL2NpcmNsZSc7XHJcblxyXG4vLyBBc3luY1RodW5rPOi/lOWbnueahOWAvOexu+Weiyzlh73mlbDnsbvlnot2b2lk6KGo56S65LiN5bim5Y+C5pWwLOS4jea4healmj5cclxuZXhwb3J0IGNvbnN0IGZldGNoQWxsQ2lyY2xlTGlzdCA9IHRodW5rV3JhcHBlcignY2xpcmNsZS9hbGwnLCBnZXRDaXJjbGVMaXN0KTtcclxuZXhwb3J0IGNvbnN0IGZldGNoVXNlckNpcmNsZUxpc3QgPSB0aHVua1dyYXBwZXIoJ2NsaXJjbGUvdXNlcl9saXN0JywgZ2V0VXNlckNpcmNsZUxpc3QpO1xyXG5cclxudHlwZSBJbmlTdGF0ZSA9IHtcclxuICAgIGFsbENpcmNsZURhdGE6IExpc3RQYWdlQmVhbjxDaXJjbGVCZWFuPjtcclxuICAgIG15Q2lyY2xlTGlzdDogTGlzdFBhZ2VCZWFuPENpcmNsZUJlYW4+O1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBJbmlTdGF0ZSA9IHtcclxuICAgIGFsbENpcmNsZURhdGE6IHsgdG90YWw6IDAsIGxpc3Q6IFtdIH0sXHJcbiAgICBteUNpcmNsZUxpc3Q6IHsgdG90YWw6IDAsIGxpc3Q6IFtdIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaG9tZVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ2NpcmNsZScsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgfSxcclxuICAgIGV4dHJhUmVkdWNlcnM6IHtcclxuICAgICAgICBbZmV0Y2hBbGxDaXJjbGVMaXN0LmZ1bGZpbGxlZC50eXBlXTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UmVzPExpc3RQYWdlQmVhbjxDaXJjbGVCZWFuPj4+KSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLmFsbENpcmNsZURhdGEgPSBhY3Rpb24ucGF5bG9hZC5kYXRhO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW2ZldGNoVXNlckNpcmNsZUxpc3QuZnVsZmlsbGVkLnR5cGVdOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxSZXM8TGlzdFBhZ2VCZWFuPENpcmNsZUJlYW4+Pj4pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUubXlDaXJjbGVMaXN0ID0gYWN0aW9uLnBheWxvYWQuZGF0YTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lU2xpY2UucmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgdGh1bmtXcmFwcGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcbmltcG9ydCB0eXBlIHsgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5cclxuaW1wb3J0IHsgQ2lyY2xlVHlwZUJlYW4sIGdldENpcmNsZVR5cGUsIGdldFR5cGVBZGRyZXNzU2Nob29sLCBUeXBlQWRkcmVzc1NjaG9vbEJlYW4gfSBmcm9tICcuLi9zZXJ2aWNlcy9jb21tb24nO1xyXG5pbXBvcnQgeyBSZXMgfSBmcm9tICcuLi9zZXJ2aWNlcy9ob21lJztcclxuXHJcbi8vIEFzeW5jVGh1bms86L+U5Zue55qE5YC857G75Z6LLOWHveaVsOexu+Wei3ZvaWTooajnpLrkuI3luKblj4LmlbAs5LiN5riF5qWaPlxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoVHlwZUFkZHJlc3NTY2hvb2wgPSB0aHVua1dyYXBwZXIoJ2NvbW1vbi90eXBlQWRkcmVzc1NjaG9vbCcsIGdldFR5cGVBZGRyZXNzU2Nob29sKTtcclxuZXhwb3J0IGNvbnN0IGZldGNoQ2lyY2xlVHlwZSA9IHRodW5rV3JhcHBlcignY29tbW9uL2NpcmNsZVR5cGUnLCBnZXRDaXJjbGVUeXBlKTtcclxuXHJcbnR5cGUgSW5pU3RhdGUgPSB7XHJcbiAgICBjaXJjbGVUeXBlOiBBcnJheTxDaXJjbGVUeXBlQmVhbj5cclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogSW5pU3RhdGUgPSB7XHJcbiAgICBjaXJjbGVUeXBlOiBbXVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbW1vblNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ2NvbW1vbicsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIGluY3JlbWVudDogKCkgPT4geyB9LFxyXG4gICAgfSxcclxuICAgIGV4dHJhUmVkdWNlcnM6IHtcclxuICAgICAgICAvLyBbZmV0Y2hUeXBlQWRkcmVzc1NjaG9vbC5mdWxmaWxsZWQudHlwZV06IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFJlczxUeXBlQWRkcmVzc1NjaG9vbEJlYW4+PikgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIuaVsOaNrlwiLCBhY3Rpb24ucGF5bG9hZC5kYXRhKTtcclxuICAgICAgICAvLyAgICAgc3RhdGUuaXNMb2FkRGF0YSA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIHN0YXRlLnR5cGVBZGRyZXNzU2Nob29sQmVhbiA9IGFjdGlvbi5wYXlsb2FkLmRhdGE7XHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICBbZmV0Y2hDaXJjbGVUeXBlLmZ1bGZpbGxlZC50eXBlXTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UmVzPEFycmF5PENpcmNsZVR5cGVCZWFuPj4+KSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLmNpcmNsZVR5cGUgPSBhY3Rpb24ucGF5bG9hZC5kYXRhO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IGluY3JlbWVudCB9ID0gY29tbW9uU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgY29tbW9uU2xpY2UucmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgdGh1bmtXcmFwcGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcbmltcG9ydCB0eXBlIHsgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBSZXMgfSBmcm9tICcuLi9zZXJ2aWNlcy9ob21lJztcclxuaW1wb3J0IHR5cGUgeyBIZWxwZXJJdGVtRGF0YSB9IGZyb20gJy4uL3NlcnZpY2VzL2hlbHBlcic7XHJcbmltcG9ydCB7IGdldEhlbHBlckxpc3QgfSBmcm9tICcuLi9zZXJ2aWNlcy9oZWxwZXInO1xyXG5pbXBvcnQgdHlwZSB7IENpcmNsZUJlYW4sIExpc3RQYWdlQmVhbiB9IGZyb20gJy4uL3NlcnZpY2VzL2NpcmNsZSc7XHJcbmltcG9ydCB7IGdldENpcmNsZUxpc3QgfSBmcm9tICcuLi9zZXJ2aWNlcy9jaXJjbGUnO1xyXG5cclxuLy8gQXN5bmNUaHVuazzov5Tlm57nmoTlgLznsbvlnoss5Ye95pWw57G75Z6Ldm9pZOihqOekuuS4jeW4puWPguaVsCzkuI3muIXmpZo+XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hSZWNvbW1lbmRMaXN0ID0gdGh1bmtXcmFwcGVyKCdob21lL3JlY29tbWVuZCcsIGdldEhlbHBlckxpc3QpO1xyXG5leHBvcnQgY29uc3QgZmV0Y2hMaWtlTGlzdCA9IHRodW5rV3JhcHBlcignaG9tZS9saWtlJywgZ2V0SGVscGVyTGlzdCk7XHJcbmV4cG9ydCBjb25zdCBmZXRjaE5lYXJieUxpc3QgPSB0aHVua1dyYXBwZXIoJ2hvbWUvbmVhcmJ5JywgZ2V0SGVscGVyTGlzdCk7XHJcbmV4cG9ydCBjb25zdCBmZXRjaEhvcnRMaXN0ID0gdGh1bmtXcmFwcGVyKCdob21lL2hvcnQnLCBnZXRIZWxwZXJMaXN0KTtcclxuZXhwb3J0IGNvbnN0IGZldGNoUmVjb21tZW5kQ2lyY2xlTGlzdCA9IHRodW5rV3JhcHBlcignaG9tZS9jaXJjbGUvcmVjb21tZW5kJywgZ2V0Q2lyY2xlTGlzdCk7XHJcblxyXG50eXBlIEluaVN0YXRlID0ge1xyXG4gIGlzTG9hZDogYm9vbGVhbjtcclxuICByZWNvbW1lbmREYXRhOiBIZWxwZXJJdGVtRGF0YVtdO1xyXG4gIGxpa2VEYXRhOiBIZWxwZXJJdGVtRGF0YVtdO1xyXG4gIG5lYXJieURhdGE6IEhlbHBlckl0ZW1EYXRhW107XHJcbiAgaG9ydERhdGE6IEhlbHBlckl0ZW1EYXRhW107XHJcbiAgcmVjb21tZW5kQ2lyY2xlRGF0YTogTGlzdFBhZ2VCZWFuPENpcmNsZUJlYW4+O1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBJbmlTdGF0ZSA9IHtcclxuICBpc0xvYWQ6IGZhbHNlLFxyXG4gIHJlY29tbWVuZERhdGE6IFtdLFxyXG4gIGxpa2VEYXRhOiBbXSxcclxuICBuZWFyYnlEYXRhOiBbXSxcclxuICBob3J0RGF0YTogW10sXHJcbiAgcmVjb21tZW5kQ2lyY2xlRGF0YToge1xyXG4gICAgdG90YWw6IDAsXHJcbiAgICBsaXN0OiBbXVxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaG9tZVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdob21lJyxcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICB9LFxyXG4gIGV4dHJhUmVkdWNlcnM6IHtcclxuICAgIFtmZXRjaFJlY29tbWVuZExpc3QuZnVsZmlsbGVkLnR5cGVdOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxSZXM8QXJyYXk8SGVscGVySXRlbURhdGE+Pj4pID0+IHtcclxuICAgICAgc3RhdGUuaXNMb2FkID0gdHJ1ZTtcclxuICAgICAgc3RhdGUucmVjb21tZW5kRGF0YSA9IGFjdGlvbi5wYXlsb2FkLmRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZmV0Y2hSZWNvbW1lbmRMaXN0XCIsIGFjdGlvbi5wYXlsb2FkLmRhdGEubGVuZ3RoKTtcclxuXHJcbiAgICB9LFxyXG4gICAgW2ZldGNoTGlrZUxpc3QuZnVsZmlsbGVkLnR5cGVdOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxSZXM8SGVscGVySXRlbURhdGFbXT4+KSA9PiB7XHJcbiAgICAgIHN0YXRlLmxpa2VEYXRhID0gYWN0aW9uLnBheWxvYWQuZGF0YTtcclxuICAgICAgY29uc29sZS5sb2coXCJmZXRjaExpa2VMaXN0XCIsIGFjdGlvbi5wYXlsb2FkLmRhdGEubGVuZ3RoKTtcclxuICAgIH0sXHJcbiAgICBbZmV0Y2hOZWFyYnlMaXN0LmZ1bGZpbGxlZC50eXBlXTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UmVzPEhlbHBlckl0ZW1EYXRhW10+PikgPT4ge1xyXG4gICAgICBzdGF0ZS5uZWFyYnlEYXRhID0gYWN0aW9uLnBheWxvYWQuZGF0YTtcclxuICAgICAgY29uc29sZS5sb2coXCJmZXRjaE5lYXJieUxpc3RcIiwgYWN0aW9uLnBheWxvYWQuZGF0YS5sZW5ndGgpO1xyXG4gICAgfSxcclxuICAgIFtmZXRjaEhvcnRMaXN0LmZ1bGZpbGxlZC50eXBlXTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UmVzPEhlbHBlckl0ZW1EYXRhW10+PikgPT4ge1xyXG4gICAgICBzdGF0ZS5ob3J0RGF0YSA9IGFjdGlvbi5wYXlsb2FkLmRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZmV0Y2hIb3J0TGlzdFwiLCBhY3Rpb24ucGF5bG9hZC5kYXRhLmxlbmd0aCk7XHJcbiAgICB9LFxyXG4gICAgW2ZldGNoUmVjb21tZW5kQ2lyY2xlTGlzdC5mdWxmaWxsZWQudHlwZV06IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFJlczxMaXN0UGFnZUJlYW48Q2lyY2xlQmVhbj4+PikgPT4ge1xyXG4gICAgICBzdGF0ZS5yZWNvbW1lbmRDaXJjbGVEYXRhID0gYWN0aW9uLnBheWxvYWQuZGF0YTtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lU2xpY2UucmVkdWNlcjtcclxuIiwiLyoqXHJcbiAqIEBhdXRob3I6IGxlcm95XHJcbiAqIEBkYXRlOiAyMDIxLzgvMjMgMTY6MDlcclxuICogQGRlc2NyaXB0aW9u77ya55uR5ZCsIEFzeW5jVGh1bmsgbG9hZGluZyDnirbmgIFcclxuICovXHJcbmltcG9ydCB0eXBlIHsgQW55QWN0aW9uLCBBc3luY1RodW5rIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcblxyXG50eXBlIEdlbmVyaWNBc3luY1RodW5rID0gQXN5bmNUaHVuazx1bmtub3duLCB1bmtub3duLCBhbnk+O1xyXG5cclxudHlwZSBQZW5kaW5nQWN0aW9uID0gUmV0dXJuVHlwZTxHZW5lcmljQXN5bmNUaHVua1sncGVuZGluZyddPjtcclxudHlwZSBSZWplY3RlZEFjdGlvbiA9IFJldHVyblR5cGU8R2VuZXJpY0FzeW5jVGh1bmtbJ3JlamVjdGVkJ10+O1xyXG50eXBlIEZ1bGZpbGxlZEFjdGlvbiA9IFJldHVyblR5cGU8R2VuZXJpY0FzeW5jVGh1bmtbJ2Z1bGZpbGxlZCddPjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1BlbmRpbmdBY3Rpb24oYWN0aW9uOiBBbnlBY3Rpb24pOiBhY3Rpb24gaXMgUGVuZGluZ0FjdGlvbiB7XHJcbiAgcmV0dXJuIGFjdGlvbi50eXBlLmVuZHNXaXRoKCcvcGVuZGluZycpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpc1JlamVjdGVkQWN0aW9uKGFjdGlvbjogQW55QWN0aW9uKTogYWN0aW9uIGlzIFJlamVjdGVkQWN0aW9uIHtcclxuICByZXR1cm4gYWN0aW9uLnR5cGUuZW5kc1dpdGgoJy9yZWplY3RlZCcpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bGZpbGxlZEFjdGlvbihhY3Rpb246IEFueUFjdGlvbik6IGFjdGlvbiBpcyBGdWxmaWxsZWRBY3Rpb24ge1xyXG4gIHJldHVybiBhY3Rpb24udHlwZS5lbmRzV2l0aCgnL2Z1bGZpbGxlZCcpO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBMb2FkaW5nU3RhdGUgPSBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogTG9hZGluZ1N0YXRlID0ge307XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGluZ1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdsb2FkaW5nJyxcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgLy8gVGhlIGByZWR1Y2Vyc2AgZmllbGQgbGV0cyB1cyBkZWZpbmUgcmVkdWNlcnMgYW5kIGdlbmVyYXRlIGFzc29jaWF0ZWQgYWN0aW9uc1xyXG4gIHJlZHVjZXJzOiB7fSxcclxuICAvLyBUaGUgYGV4dHJhUmVkdWNlcnNgIGZpZWxkIGxldHMgdGhlIHNsaWNlIGhhbmRsZSBhY3Rpb25zIGRlZmluZWQgZWxzZXdoZXJlLFxyXG4gIC8vIGluY2x1ZGluZyBhY3Rpb25zIGdlbmVyYXRlZCBieSBjcmVhdGVBc3luY1RodW5rIG9yIGluIG90aGVyIHNsaWNlcy5cclxuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xyXG4gICAgYnVpbGRlclxyXG4gICAgICAuYWRkTWF0Y2hlcihpc1BlbmRpbmdBY3Rpb24sIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdHlwZSA9IGFjdGlvbi50eXBlLnJlcGxhY2UoJy9wZW5kaW5nJywgJycpO1xyXG4gICAgICAgIHN0YXRlW3R5cGVdID0gdHJ1ZTtcclxuICAgICAgfSlcclxuICAgICAgLmFkZE1hdGNoZXIoaXNSZWplY3RlZEFjdGlvbiwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB0eXBlID0gYWN0aW9uLnR5cGUucmVwbGFjZSgnL3JlamVjdGVkJywgJycpO1xyXG4gICAgICAgIHN0YXRlW3R5cGVdID0gZmFsc2U7XHJcbiAgICAgIH0pXHJcbiAgICAgIC8vIG1hdGNoZXIgY2FuIGp1c3QgcmV0dXJuIGJvb2xlYW4gYW5kIHRoZSBtYXRjaGVyIGNhbiByZWNlaXZlIGEgZ2VuZXJpYyBhcmd1bWVudFxyXG4gICAgICAuYWRkTWF0Y2hlcihpc0Z1bGZpbGxlZEFjdGlvbiwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB0eXBlID0gYWN0aW9uLnR5cGUucmVwbGFjZSgnL2Z1bGZpbGxlZCcsICcnKTtcclxuICAgICAgICBzdGF0ZVt0eXBlXSA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRpbmdTbGljZS5yZWR1Y2VyO1xyXG4iLCJcclxuaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgZ2V0U2Nyb2xsYmFyV2lkdGggfSBmcm9tICcuLi8uLi91dGlscy91dGlsJztcclxuaW1wb3J0IHR5cGUgeyBBcHBTdGF0ZSwgQXBwVGh1bmsgfSBmcm9tICcuLi9zdG9yZSc7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMb2dpblN0YXRlIHtcclxuICAgIGlzU2hvd0xvZ2luOiBib29sZWFuO1xyXG4gICAgc2hvd0ZvcmdldFB3ZDogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBMb2dpblN0YXRlID0ge1xyXG4gICAgaXNTaG93TG9naW46IGZhbHNlLFxyXG4gICAgc2hvd0ZvcmdldFB3ZDogZmFsc2UsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5TbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6ICdsb2dpbicsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICAvLyBUaGUgYHJlZHVjZXJzYCBmaWVsZCBsZXRzIHVzIGRlZmluZSByZWR1Y2VycyBhbmQgZ2VuZXJhdGUgYXNzb2NpYXRlZCBhY3Rpb25zXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIHNob3dMb2dpbjogKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA+PSAxMzAwKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGdldFNjcm9sbGJhcldpZHRoKCkgKyAncHgnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0YXRlLmlzU2hvd0xvZ2luID0gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhpZGVMb2dpbjogKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJzBweCc7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzU2hvd0xvZ2luID0gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93TG9naW5QYWdlOiAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLnNob3dGb3JnZXRQd2QpIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnNob3dGb3JnZXRQd2QgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNob3dGb3JnZXRQd2RQYWdlOiAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzdGF0ZS5zaG93Rm9yZ2V0UHdkKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5zaG93Rm9yZ2V0UHdkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IHNob3dMb2dpbiwgaGlkZUxvZ2luLCBzaG93TG9naW5QYWdlLCBzaG93Rm9yZ2V0UHdkUGFnZSB9ID0gbG9naW5TbGljZS5hY3Rpb25zO1xyXG5cclxuLy8gVGhlIGZ1bmN0aW9uIGJlbG93IGlzIGNhbGxlZCBhIHNlbGVjdG9yIGFuZCBhbGxvd3MgdXMgdG8gc2VsZWN0IGEgdmFsdWUgZnJvbVxyXG4vLyB0aGUgc3RhdGUuIFNlbGVjdG9ycyBjYW4gYWxzbyBiZSBkZWZpbmVkIGlubGluZSB3aGVyZSB0aGV5J3JlIHVzZWQgaW5zdGVhZCBvZlxyXG4vLyBpbiB0aGUgc2xpY2UgZmlsZS4gRm9yIGV4YW1wbGU6IGB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuY291bnRlci52YWx1ZSlgXHJcbmV4cG9ydCBjb25zdCBpc1Nob3dMb2dpbiA9IChzdGF0ZTogQXBwU3RhdGUpID0+IHN0YXRlLmxvZ2luLmlzU2hvd0xvZ2luO1xyXG5cclxuLy8gV2UgY2FuIGFsc28gd3JpdGUgc2VydmljZXMgYnkgaGFuZCwgd2hpY2ggbWF5IGNvbnRhaW4gYm90aCBzeW5jIGFuZCBhc3luYyBsb2dpYy5cclxuLy8gSGVyZSdzIGFuIGV4YW1wbGUgb2YgY29uZGl0aW9uYWxseSBkaXNwYXRjaGluZyBhY3Rpb25zIGJhc2VkIG9uIGN1cnJlbnQgc3RhdGUuXHJcbmV4cG9ydCBjb25zdCBzaG93T3JIaWRlTG9naW4gPVxyXG4gICAgKGlzU2hvdzogYm9vbGVhbik6IEFwcFRodW5rID0+XHJcbiAgICAgICAgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc05vd1Nob3cgPSBpc1Nob3dMb2dpbihnZXRTdGF0ZSgpKTtcclxuICAgICAgICAgICAgaWYgKGlzTm93U2hvdyAhPT0gaXNTaG93KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNTaG93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goc2hvd0xvZ2luKCkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChoaWRlTG9naW4oKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9naW5TbGljZS5yZWR1Y2VyO1xyXG4iLCJcclxuaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuaywgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgeyB0aHVua1dyYXBwZXIgfSBmcm9tICcuLi8uLi91dGlscy91dGlsJztcclxuaW1wb3J0IHsgQ2lyY2xlQmVhbiwgZ2V0Q2lyY2xlTGlzdCwgTGlzdFBhZ2VCZWFuIH0gZnJvbSAnLi4vc2VydmljZXMvY2lyY2xlJztcclxuaW1wb3J0IHsgZ2V0VXNlckhlbHBlckxpc3QsIEhlbHBlckl0ZW1EYXRhIH0gZnJvbSAnLi4vc2VydmljZXMvaGVscGVyJztcclxuaW1wb3J0IHsgUmVzIH0gZnJvbSAnLi4vc2VydmljZXMvaG9tZSc7XHJcbmltcG9ydCB7IGdldFVzZXJJbmZvIH0gZnJvbSAnLi4vc2VydmljZXMvbWluZSc7XHJcbmltcG9ydCB7IFVzZXJCZWFuIH0gZnJvbSAnLi4vc2VydmljZXMvdXNlcic7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hVc2VySW5mbyA9IHRodW5rV3JhcHBlcigndXNlci91c2VySW5mbycsIGdldFVzZXJJbmZvKTtcclxuZXhwb3J0IGNvbnN0IGZldGNoTWluZVJlY29tbWVuZENpcmNsZUxpc3QgPSB0aHVua1dyYXBwZXIoJ21pbmUvY2lyY2xlL3JlY29tbWVuZCcsIGdldENpcmNsZUxpc3QpO1xyXG5leHBvcnQgY29uc3QgZmV0Y2hNaW5lSGVscGVyTGlzdCA9IHRodW5rV3JhcHBlcignbWluZS9oZWxwZXInLCBnZXRVc2VySGVscGVyTGlzdCk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1pbmVTdGF0ZSB7XHJcbiAgICB1c2VySW5mbz86IFVzZXJCZWFuLFxyXG4gICAgcmVjb21tZW5kQ2lyY2xlRGF0YTogTGlzdFBhZ2VCZWFuPENpcmNsZUJlYW4+O1xyXG4gICAgbWluZUhlbHBlckRhdGE6IExpc3RQYWdlQmVhbjxIZWxwZXJJdGVtRGF0YT47XHJcbiAgICB1c2VyUGFnZVNlbGVjdEluZGV4OiBhbnlcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBNaW5lU3RhdGUgPSB7XHJcbiAgICB1c2VySW5mbzogdW5kZWZpbmVkLFxyXG4gICAgcmVjb21tZW5kQ2lyY2xlRGF0YToge1xyXG4gICAgICAgIHRvdGFsOiAwLFxyXG4gICAgICAgIGxpc3Q6IFtdXHJcbiAgICB9LFxyXG4gICAgbWluZUhlbHBlckRhdGE6IHtcclxuICAgICAgICB0b3RhbDogMCxcclxuICAgICAgICBsaXN0OiBbXVxyXG4gICAgfSxcclxuICAgIHVzZXJQYWdlU2VsZWN0SW5kZXg6IHt9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbWluZVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ21pbmUnLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBzd2l0Y2hVc2VyUGFnZVNlbGVjdEluZGV4OiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7IGtleTogc3RyaW5nLCBpbmRleDogbnVtYmVyIH0+KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB7IGtleSwgaW5kZXggfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS51c2VyUGFnZVNlbGVjdEluZGV4W2tleV0gPSBpbmRleDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgaW4gc3RhdGUudXNlclBhZ2VTZWxlY3RJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJQYWdlU2VsZWN0SW5kZXhba2V5XSA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzdGF0ZS51c2VyUGFnZVNlbGVjdEluZGV4W2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLplIDmr4FcIiwgc3RhdGUudXNlclBhZ2VTZWxlY3RJbmRleFtrZXldKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGV4dHJhUmVkdWNlcnM6IHtcclxuICAgICAgICBbZmV0Y2hVc2VySW5mby5mdWxmaWxsZWQudHlwZV06IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFJlczxVc2VyQmVhbj4+KSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJJbmZvID0gYWN0aW9uLnBheWxvYWQuZGF0YTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtmZXRjaE1pbmVSZWNvbW1lbmRDaXJjbGVMaXN0LmZ1bGZpbGxlZC50eXBlXTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UmVzPExpc3RQYWdlQmVhbjxDaXJjbGVCZWFuPj4+KSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnJlY29tbWVuZENpcmNsZURhdGEgPSBhY3Rpb24ucGF5bG9hZC5kYXRhO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW2ZldGNoTWluZUhlbHBlckxpc3QuZnVsZmlsbGVkLnR5cGVdOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxSZXM8TGlzdFBhZ2VCZWFuPEhlbHBlckl0ZW1EYXRhPj4+KSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLm1pbmVIZWxwZXJEYXRhID0gYWN0aW9uLnBheWxvYWQuZGF0YTtcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59KTtcclxuZXhwb3J0IGNvbnN0IHsgc3dpdGNoVXNlclBhZ2VTZWxlY3RJbmRleCB9ID0gbWluZVNsaWNlLmFjdGlvbnM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtaW5lU2xpY2UucmVkdWNlcjtcclxuIiwiXHJcbmltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmssIFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgcmVtb3ZlVG9rZW4sIHNhdmVUb2tlbiB9IGZyb20gJy4uLy4uL3V0aWxzL3Rva2VuX3V0aWwnO1xyXG5pbXBvcnQgeyB0aHVua1dyYXBwZXIgfSBmcm9tICcuLi8uLi91dGlscy91dGlsJztcclxuaW1wb3J0IHsgUmVzIH0gZnJvbSAnLi4vc2VydmljZXMvaG9tZSc7XHJcbmltcG9ydCB7IFVzZXJCZWFuLCBMb2dpbkJlYW4sIGF1dG9Mb2dpbiB9IGZyb20gJy4uL3NlcnZpY2VzL3VzZXInO1xyXG5pbXBvcnQgeyBBcHBUaHVuayB9IGZyb20gJy4uL3N0b3JlJztcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaEF1dG9Mb2dpbiA9IHRodW5rV3JhcHBlcigndXNlci9hdXRvTG9naW4nLCBhdXRvTG9naW4pO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VyU3RhdGUge1xyXG4gICAgaXNMb2dpbjogYm9vbGVhbixcclxuICAgIGlzRmluaXNoOiBib29sZWFuLFxyXG4gICAgdG9rZW46IHN0cmluZyxcclxuICAgIHVzZXI/OiBVc2VyQmVhbixcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBVc2VyU3RhdGUgPSB7XHJcbiAgICBpc0xvZ2luOiBmYWxzZSxcclxuICAgIGlzRmluaXNoOiBmYWxzZSxcclxuICAgIHRva2VuOiAnJyxcclxuICAgIHVzZXI6IHVuZGVmaW5lZFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6ICd1c2VyJyxcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgc2F2ZVVzZXJJbmZvOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxSZXM8TG9naW5CZWFuPj4pID0+IHtcclxuICAgICAgICAgICAgc2F2ZVVzZXJEYXRhKHN0YXRlLCBhY3Rpb24ucGF5bG9hZC5kYXRhKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyDpgIDlh7rnmbvlvZVcclxuICAgICAgICBvdXRMb2dpbjogKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6YCA5Ye655m75b2VXCIpO1xyXG5cclxuICAgICAgICAgICAgc3RhdGUuaXNMb2dpbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzdGF0ZS5pc0ZpbmlzaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzdGF0ZS50b2tlbiA9IFwiXCI7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHJlbW92ZVRva2VuKCk7XHJcbiAgICAgICAgICAgIC8vIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBleHRyYVJlZHVjZXJzOiB7XHJcbiAgICAgICAgW2ZldGNoQXV0b0xvZ2luLmZ1bGZpbGxlZC50eXBlXTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UmVzPExvZ2luQmVhbj4+KSA9PiB7XHJcbiAgICAgICAgICAgIHNhdmVVc2VyRGF0YShzdGF0ZSwgYWN0aW9uLnBheWxvYWQuZGF0YSk7XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufSk7XHJcblxyXG4vLyDkv53lrZjnlKjmiLfmlbDmja5cclxuZnVuY3Rpb24gc2F2ZVVzZXJEYXRhKHN0YXRlLCBkYXRhOiBMb2dpbkJlYW4pIHtcclxuICAgIGNvbnNvbGUubG9nKFwidG9rZW5cIiwgZGF0YS50b2tlbik7XHJcblxyXG4gICAgc3RhdGUuaXNMb2dpbiA9IHRydWU7XHJcbiAgICBjb25zdCB0b2tlbiA9IGRhdGEudG9rZW47XHJcbiAgICBzdGF0ZS50b2tlbiA9IHRva2VuO1xyXG4gICAgc2F2ZVRva2VuKHRva2VuKTtcclxuICAgIHN0YXRlLmlzRmluaXNoID0gZGF0YS5pc19maW5pc2ggPT09IDE7XHJcbiAgICBzdGF0ZS51c2VyID0gZGF0YS51c2VyO1xyXG59XHJcblxyXG5jb25zdCB7IHNhdmVVc2VySW5mbyB9ID0gdXNlclNsaWNlLmFjdGlvbnM7XHJcblxyXG5leHBvcnQgY29uc3QgeyBvdXRMb2dpbiB9ID0gdXNlclNsaWNlLmFjdGlvbnM7XHJcblxyXG5leHBvcnQgY29uc3Qgc2F2ZVVzZXIgPVxyXG4gICAgKGRhdGE6IGFueSk6IEFwcFRodW5rID0+XHJcbiAgICAgICAgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzYXZlVXNlckluZm8oZGF0YSkpXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VyU2xpY2UucmVkdWNlcjtcclxuIiwiLyoqXHJcbiAqIEBhdXRob3I6IGxlcm95XHJcbiAqIEBkYXRlOiAyMDIxLzgvMjMgMTY6MDlcclxuICogQGRlc2NyaXB0aW9u77yac3RvcmVcclxuICovXHJcbmltcG9ydCB0eXBlIHsgVGh1bmtBY3Rpb24sIEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgdHlwZSB7IFR5cGVkVXNlU2VsZWN0b3JIb29rIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciwgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcblxyXG5pbXBvcnQgbG9hZGluZ1JlZHVjZXIgZnJvbSAnLi9zbGljZXMvbG9hZGluZ1NsaWNlJztcclxuaW1wb3J0IGhvbWVSZWR1Y2VyIGZyb20gJy4vc2xpY2VzL2hvbWVTbGljZSc7XHJcbmltcG9ydCBsb2dpblJlZHVjZXIgZnJvbSAnLi9zbGljZXMvbG9naW5TbGljZSc7XHJcbmltcG9ydCB1c2VyUmVkdWNlciBmcm9tICcuL3NsaWNlcy91c2VyU2xpY2UnO1xyXG5pbXBvcnQgY29tbW9uUmVkdWNlciBmcm9tICcuL3NsaWNlcy9jb21tb25TbGljZSc7XHJcbmltcG9ydCBjaXJjbGVSZWR1Y2VyIGZyb20gJy4vc2xpY2VzL2NpcmNsZVNsaWNlJztcclxuaW1wb3J0IG1pbmVSZWR1Y2VyIGZyb20gJy4vc2xpY2VzL21pbmVTbGljZSc7XHJcblxyXG5jb25zdCBjb21iaW5lZFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgbG9hZGluZzogbG9hZGluZ1JlZHVjZXIsXHJcbiAgICBob21lOiBob21lUmVkdWNlcixcclxuICAgIGxvZ2luOiBsb2dpblJlZHVjZXIsXHJcbiAgICB1c2VyOiB1c2VyUmVkdWNlcixcclxuICAgIGNvbW1vbjogY29tbW9uUmVkdWNlcixcclxuICAgIGNpcmNsZTogY2lyY2xlUmVkdWNlcixcclxuICAgIG1pbmU6IG1pbmVSZWR1Y2VyLFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBIWURSQVRFKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dFN0YXRlID0ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSwgLy8gdXNlIHByZXZpb3VzIHN0YXRlXHJcbiAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLCAvLyBhcHBseSBkZWx0YSBmcm9tIGh5ZHJhdGlvblxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGNvbWJpbmVkUmVkdWNlcihuZXh0U3RhdGUsIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29tYmluZWRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG59O1xyXG5cclxuY29uc3QgbWFrZVN0b3JlID0gKCkgPT5cclxuICAgIGNvbmZpZ3VyZVN0b3JlKHtcclxuICAgICAgICByZWR1Y2VyLFxyXG4gICAgICAgIGRldlRvb2xzOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcclxuICAgIH0pO1xyXG5cclxuZXhwb3J0IHR5cGUgQXBwU3RvcmUgPSBSZXR1cm5UeXBlPHR5cGVvZiBtYWtlU3RvcmU+O1xyXG5leHBvcnQgdHlwZSBBcHBTdGF0ZSA9IFJldHVyblR5cGU8QXBwU3RvcmVbJ2dldFN0YXRlJ10+O1xyXG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IEFwcFN0b3JlWydkaXNwYXRjaCddO1xyXG5cclxuZXhwb3J0IHR5cGUgQXBwVGh1bms8UmV0dXJuVHlwZSA9IHZvaWQ+ID0gVGh1bmtBY3Rpb248XHJcbiAgICBSZXR1cm5UeXBlLFxyXG4gICAgQXBwU3RhdGUsXHJcbiAgICB1bmtub3duLFxyXG4gICAgQWN0aW9uPHN0cmluZz5cclxuPjtcclxuXHJcbi8vIFVzZSB0aHJvdWdob3V0IHlvdXIgYXBwIGluc3RlYWQgb2YgcGxhaW4gYHVzZURpc3BhdGNoYCBhbmQgYHVzZVNlbGVjdG9yYFxyXG5leHBvcnQgY29uc3QgdXNlQXBwRGlzcGF0Y2ggPSAoKSA9PiB1c2VEaXNwYXRjaDxBcHBEaXNwYXRjaD4oKTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBcHBTZWxlY3RvcjogVHlwZWRVc2VTZWxlY3Rvckhvb2s8QXBwU3RhdGU+ID0gdXNlU2VsZWN0b3I7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVXcmFwcGVyPEFwcFN0b3JlPihtYWtlU3RvcmUpO1xyXG4iLCJpbXBvcnQgQ3J5cHRvSlMgZnJvbSAnY3J5cHRvLWpzJztcclxuXHJcbmNvbnN0IGtleSA9IENyeXB0b0pTLmVuYy5VdGY4LnBhcnNlKCdzMzc5ZThiNTUxYmU0ZWQwJyk7XHJcbmNvbnN0IGl2ID0gQ3J5cHRvSlMuZW5jLlV0ZjgucGFyc2UoJzIwMDIwMzg1MDUwNjU1ODgnKTtcclxuXHJcbi8vIGFlcyDliqDlr4ZcclxuZXhwb3J0IGZ1bmN0aW9uIGVuY3J5cHQobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICBsZXQgc3JjcyA9IENyeXB0b0pTLmVuYy5VdGY4LnBhcnNlKG1lc3NhZ2UpO1xyXG4gICAgbGV0IGVuY3J5cHRlZCA9IENyeXB0b0pTLkFFUy5lbmNyeXB0KHNyY3MsIGtleSwge1xyXG4gICAgICAgIGl2OiBpdixcclxuICAgICAgICBtb2RlOiBDcnlwdG9KUy5tb2RlLkVDQixcclxuICAgICAgICBwYWRkaW5nOiBDcnlwdG9KUy5wYWQuUGtjczdcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGVuY3J5cHRlZC5jaXBoZXJ0ZXh0LnRvU3RyaW5nKENyeXB0b0pTLmVuYy5CYXNlNjQpO1xyXG59XHJcblxyXG4vLyBhZXMg6Kej5a+GXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWNyeXB0KHdvcmQ6IHN0cmluZykge1xyXG4gICAgbGV0IGRlY3J5cHQgPSBDcnlwdG9KUy5BRVMuZGVjcnlwdCh3b3JkLCBrZXksIHtcclxuICAgICAgICBpdjogaXYsXHJcbiAgICAgICAgbW9kZTogQ3J5cHRvSlMubW9kZS5FQ0IsXHJcbiAgICAgICAgcGFkZGluZzogQ3J5cHRvSlMucGFkLlBrY3M3XHJcbiAgICB9KTtcclxuICAgIGxldCBkZWNyeXB0ZWRTdHIgPSBkZWNyeXB0LnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcclxuICAgIHJldHVybiBkZWNyeXB0ZWRTdHIudG9TdHJpbmcoKTtcclxufSIsImltcG9ydCBheGlvcywgeyBBeGlvc1JlcXVlc3RDb25maWcgfSBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IG5vdGlmaWNhdGlvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBkZWNyeXB0LCBlbmNyeXB0IH0gZnJvbSAnLi9hZXMnO1xyXG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gJy4vdG9rZW5fdXRpbCc7XHJcblxyXG5cclxuXHJcbmNvbnN0IHFzID0gcmVxdWlyZSgncXMnKTtcclxuXHJcbmNvbnN0IGNvZGVNZXNzYWdlOiBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+ID0ge1xyXG4gICAgMjAwOiAn5pyN5Yqh5Zmo5oiQ5Yqf6L+U5Zue6K+35rGC55qE5pWw5o2u44CCJyxcclxuICAgIDIwMTogJ+aWsOW7uuaIluS/ruaUueaVsOaNruaIkOWKn+OAgicsXHJcbiAgICAyMDI6ICfkuIDkuKror7fmsYLlt7Lnu4/ov5vlhaXlkI7lj7DmjpLpmJ/vvIjlvILmraXku7vliqHvvInjgIInLFxyXG4gICAgMjA0OiAn5Yig6Zmk5pWw5o2u5oiQ5Yqf44CCJyxcclxuICAgIDQwMDogJ+WPkeWHuueahOivt+axguaciemUmeivr++8jOacjeWKoeWZqOayoeaciei/m+ihjOaWsOW7uuaIluS/ruaUueaVsOaNrueahOaTjeS9nOOAgicsXHJcbiAgICA0MDE6ICfnlKjmiLfmsqHmnInmnYPpmZDvvIjku6TniYzjgIHnlKjmiLflkI3jgIHlr4bnoIHplJnor6/vvInjgIInLFxyXG4gICAgNDAzOiAn55So5oi35b6X5Yiw5o6I5p2D77yM5L2G5piv6K6/6Zeu5piv6KKr56aB5q2i55qE44CCJyxcclxuICAgIDQwNDogJ+WPkeWHuueahOivt+axgumSiOWvueeahOaYr+S4jeWtmOWcqOeahOiusOW9le+8jOacjeWKoeWZqOayoeaciei/m+ihjOaTjeS9nOOAgicsXHJcbiAgICA0MDU6ICfor7fmsYLmlrnms5XkuI3ooqvlhYHorrjjgIInLFxyXG4gICAgNDA2OiAn6K+35rGC55qE5qC85byP5LiN5Y+v5b6X44CCJyxcclxuICAgIDQxMDogJ+ivt+axgueahOi1hOa6kOiiq+awuOS5heWIoOmZpO+8jOS4lOS4jeS8muWGjeW+l+WIsOeahOOAgicsXHJcbiAgICA0MjI6ICflvZPliJvlu7rkuIDkuKrlr7nosaHml7bvvIzlj5HnlJ/kuIDkuKrpqozor4HplJnor6/jgIInLFxyXG4gICAgNTAwOiAn5pyN5Yqh5Zmo5Y+R55Sf6ZSZ6K+v77yM6K+35qOA5p+l5pyN5Yqh5Zmo44CCJyxcclxuICAgIDUwMjogJ+e9keWFs+mUmeivr+OAgicsXHJcbiAgICA1MDM6ICfmnI3liqHkuI3lj6/nlKjvvIzmnI3liqHlmajmmoLml7bov4fovb3miJbnu7TmiqTjgIInLFxyXG4gICAgNTA0OiAn572R5YWz6LaF5pe244CCJyxcclxufTtcclxuXHJcbmNvbnN0IGFwaSA9IHtcclxuXHJcbiAgICBnZXRIZWFkZXIoKSB7XHJcbiAgICAgICAgbGV0IHRva2VuID0gZ2V0VG9rZW4oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuXCIsIHRva2VuKTtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlciA9IHtcclxuICAgICAgICAgICAgbm93X3RpbWU6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgKyAnJyxcclxuICAgICAgICAgICAgdmVyc2lvbjogJzAuMS4wJyxcclxuICAgICAgICAgICAgY2xpZW50OiAncGMnLFxyXG4gICAgICAgICAgICB0b2tlbjogdG9rZW4sXHJcbiAgICAgICAgICAgIGRpZDogXCJIVUJBTkdfUENcIixcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGFlc0hlYWRlciA9IFwibm93X3RpbWU9XCIgKyBoZWFkZXJbXCJub3dfdGltZVwiXVxyXG4gICAgICAgICAgICArIFwiJmNsaWVudD1cIiArIGhlYWRlcltcImNsaWVudFwiXVxyXG4gICAgICAgICAgICArIFwiJnZlcnNpb249XCIgKyBoZWFkZXJbXCJ2ZXJzaW9uXCJdXHJcbiAgICAgICAgICAgICsgXCImZGlkPVwiICsgaGVhZGVyW1wiZGlkXCJdXHJcbiAgICAgICAgICAgICsgXCImdG9rZW49XCIgKyBoZWFkZXJbXCJ0b2tlblwiXTtcclxuXHJcbiAgICAgICAgaGVhZGVyWydzaWduJ10gPSBlbmNyeXB0KEpTT04uc3RyaW5naWZ5KGFlc0hlYWRlcikpO1xyXG4gICAgICAgIC8vIGhlYWRlcltcIkNvbm5lY3Rpb25cIl0gPSAna2VlcC1hbGl2ZSc7XHJcbiAgICAgICAgaGVhZGVyW1wiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCJdID0gJyonO1xyXG4gICAgICAgIHJldHVybiBoZWFkZXI7XHJcbiAgICB9LFxyXG5cclxuICAgIHJlcXVlc3QoY29uZmlnPzogQXhpb3NSZXF1ZXN0Q29uZmlnKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmdldEhlYWRlcigpO1xyXG4gICAgICAgIGxldCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGJhc2VVUkw6IHByb2Nlc3MuZW52LkFQSV9IT1NULFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgICAgICB0aW1lb3V0OiAxMDAwMCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8g6K+35rGC5oum5oiq5ZmoXHJcbiAgICAgICAgaW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKFxyXG4gICAgICAgICAgICAoY29uZmlnKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyDlj5Hotbfor7fmsYLml7bvvIzlj5bmtojmjonlvZPliY3mraPlnKjov5vooYznmoTnm7jlkIzor7fmsYJcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IFtcclxuICAgICAgICAgICAgICAgICAgICBjb25maWcubWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy51cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgcXMuc3RyaW5naWZ5KGNvbmZpZy5wYXJhbXMpLFxyXG4gICAgICAgICAgICAgICAgICAgIHFzLnN0cmluZ2lmeShjb25maWcuZGF0YSksXHJcbiAgICAgICAgICAgICAgICBdLmpvaW4oJyYnKTtcclxuICAgICAgICAgICAgICAgIGlmIChwZW5kaW5nLmhhcyh1cmwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5ZyoIHBlbmRpbmcg5Lit5a2Y5Zyo5b2T5YmN6K+35rGC5qCH6K+G77yM6ZyA6KaB5Y+W5raI5b2T5YmN6K+35rGC77yM5bm25LiU56e76ZmkXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FuY2VsID0gcGVuZGluZy5nZXQodXJsKTtcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWwodXJsKTtcclxuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nLmRlbGV0ZSh1cmwpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25maWcuY2FuY2VsVG9rZW4gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWcuY2FuY2VsVG9rZW4gfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IGF4aW9zLkNhbmNlbFRva2VuKChjYW5jZWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlbmRpbmcuc2V0KHVybCwgY2FuY2VsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLor7fmsYLmi6bmiKpcIiwgY29uZmlnLnVybCwgY29uZmlnPy5oZWFkZXJzPy5bJ3Rva2VuJ10pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyDovazlj5jmlbDmja7moLzlvI9cclxuICAgICAgICAgICAgICAgIGlmIChjb25maWc/LmhlYWRlcnM/LlsnQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3QgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHIgPSBPYmplY3Qua2V5cyhkYXRhKS5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoa2V5KSA9PiBgJHtlbmNvZGVVUklDb21wb25lbnQoa2V5KX09JHtlbmNvZGVVUklDb21wb25lbnQoZGF0YVtrZXldKX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RyLmpvaW4oJyYnKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbmZpZztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSBlcnJvcjtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvclRleHQgPSBjb2RlTWVzc2FnZVtyZXNwb25zZS5zdGF0dXNdIHx8IHJlc3BvbnNlLnN0YXR1c1RleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBzdGF0dXMsIHVybCB9ID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gNDAxIHx8IHN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5lcnJvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn5pyq55m75b2V5oiW55m75b2V5bey6L+H5pyf77yM6K+36YeN5paw55m75b2V44CCJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5lcnJvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGDor7fmsYLplJnor68gJHtzdGF0dXN9OiAke3VybH1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZXJyb3JUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb24uZXJyb3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ+aCqOeahOe9kee7nOWPkeeUn+W8guW4uO+8jOaXoOazlei/nuaOpeacjeWKoeWZqCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfnvZHnu5zlvILluLgnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy8g5ZON5bqU5oum5oiq5Zmo5Y2z5byC5bi45aSE55CGXHJcbiAgICAgICAgaW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoZGF0YSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5uZWVkX2RlY3J5cHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gSlNPTi5wYXJzZShkZWNyeXB0KGRhdGEuZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5kYXRhID0gY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlKGNvbmZpZyA/IGNvbmZpZyA6IHt9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IHBlbmRpbmcgPSBuZXcgTWFwKCk7XHJcblxyXG4vLyDmuIXnqbogcGVuZGluZyDkuK3nmoTor7fmsYLvvIjlnKjot6/nlLHot7Povazml7bosIPnlKjvvIlcclxuZXhwb3J0IGNvbnN0IGNsZWFyUGVuZGluZyA9ICgpID0+IHtcclxuICAgIHBlbmRpbmcuZm9yRWFjaChmdW5jdGlvbiAoY2FuY2VsLCB1cmwpIHtcclxuICAgICAgICBjYW5jZWwodXJsKTtcclxuICAgIH0pO1xyXG4gICAgcGVuZGluZy5jbGVhcigpO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwaTsiLCJcclxuY29uc3Qgc3RhdGljRGF0YSA9IHtcclxuICAgIGNvbG9yTGlzdDogW1xyXG4gICAgICAgIFwiI2ZmODI4MlwiLFxyXG4gICAgICAgIFwiI2ZjMjk1MFwiLFxyXG4gICAgICAgIFwiI2Y0NGViZlwiLFxyXG4gICAgICAgIFwiI2QzMzNiZVwiLFxyXG4gICAgICAgIFwiI2JlMzNkM1wiLFxyXG4gICAgICAgIFwiIzk5MzNkM1wiLFxyXG4gICAgICAgIFwiIzc2MzJjM1wiLFxyXG4gICAgICAgIFwiIzYxNDlmNFwiLFxyXG4gICAgICAgIFwiIzQ2NjNjY1wiLFxyXG4gICAgICAgIFwiIzU2OWRlMFwiLFxyXG4gICAgICAgIFwiIzU2ZTBkZVwiLFxyXG4gICAgICAgIFwiIzJmY2RhNlwiLFxyXG4gICAgICAgIFwiIzJmY2RjYlwiLFxyXG4gICAgICAgIFwiIzRjZjA5MlwiLFxyXG4gICAgICAgIFwiI2I0ZjA0Y1wiLFxyXG4gICAgICAgIFwiI2UxZTczYlwiLFxyXG4gICAgICAgIFwiI2U3YzUzYlwiLFxyXG4gICAgICAgIFwiI2Y2OGY0M1wiLFxyXG4gICAgICAgIFwiI2Y2NGI0M1wiLFxyXG4gICAgICAgIFwiI2M4YWRhY1wiLFxyXG4gICAgICAgIFwiIzYwMTViNVwiLFxyXG4gICAgICAgIFwiIzNkMjQ0OVwiLFxyXG4gICAgICAgIFwiIzNkMjQ0OVwiLFxyXG4gICAgICAgIFwiI2I2NGNhM1wiLFxyXG4gICAgICAgIFwiIzZjNDY2NVwiLFxyXG4gICAgICAgIFwiIzRjNzQ3MVwiLFxyXG4gICAgICAgIFwiIzkzOWQ5Y1wiLFxyXG4gICAgXSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RhdGljRGF0YTsiLCJpbXBvcnQgY29va2llIGZyb20gJ3JlYWN0LWNvb2tpZXMnXHJcbmV4cG9ydCBjb25zdCB0b2tlbktleSA9IFwidXNlcl90b2tlblwiO1xyXG5cclxuLyoqXHJcbiAqIOS/neWtmHRva2VuXHJcbiAqIEBwYXJhbSB0b2tlbiBcclxuICovXHJcbmV4cG9ydCBjb25zdCBzYXZlVG9rZW4gPSAodG9rZW46IHN0cmluZykgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCLkv53lrZh0b2tlblwiLCB0b2tlbik7XHJcbiAgICBjb29raWUuc2F2ZSh0b2tlbktleSwgdG9rZW4pO1xyXG59XHJcblxyXG4vKipcclxuICog56e76ZmkdG9rZW5cclxuICovXHJcbmV4cG9ydCBjb25zdCByZW1vdmVUb2tlbiA9ICgpID0+IHtcclxuICAgIGNvb2tpZS5yZW1vdmUodG9rZW5LZXkpO1xyXG59XHJcblxyXG4vKipcclxuICog6I635Y+WdG9rZW5cclxuICogQHJldHVybnMgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0VG9rZW4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGNvb2tpZS5sb2FkKHRva2VuS2V5KTtcclxuICAgIGNvbnNvbGUubG9nKFwi6I635Y+WdG9rZW5cIiwgdG9rZW4pO1xyXG4gICAgcmV0dXJuIHRva2VuID09IG51bGwgPyAnJyA6IHRva2VuO1xyXG59IiwibGV0IGRvbWFpbiA9IHByb2Nlc3MuZW52LkFQSV9IT1NUIHx8ICcnO1xyXG4vLyBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuLy8gICAgIGRvbWFpbiA9IGRvbWFpbi5yZXBsYWNlKC9eaHR0cHMvaSwgJ2h0dHAnKTtcclxuLy8gfVxyXG5cclxuY29uc3QgVXJsID0ge1xyXG4gICAgc3RhdGljSG9zdDogcHJvY2Vzcy5lbnYuU1RBVElDX0hPU1QsXHJcbiAgICBkb21haW4sXHJcbiAgICBjb21taXQ6IFwiY29tbWl0XCIsIC8v5a2m5qCh5YiG57G75Z+O5biC562J5L+h5oGv6I635Y+WXHJcbiAgICBnZXRDaXJjbGVUeXBlOiBcImdldF9jaXJjbGVfdHlwZVwiLCAvL+iOt+W+l+WciOWtkOexu+WIq1xyXG5cclxuICAgIGdldENvZGU6IFwiZ2V0X2NvZGVcIiwgLy/ojrflj5bpqozor4HnoIFcclxuICAgIHB3ZExvZ2luOiBcImxvZ2luXCIsIC8v5a+G56CB55m75b2VXHJcbiAgICBjb2RlTG9naW46IFwicXVpY2tfbG9naW5cIiwgLy/pqozor4HnoIHnmbvlvZVcclxuICAgIGF1dG9Mb2dpbjogXCJhdXRvX2xvZ2luXCIsIC8v6Ieq5Yqo55m75b2VXHJcbiAgICB1c2VySW5mbzogXCJ1c2VyL2luZm9cIiwgLy/nlKjmiLfkv6Hmga9cclxuXHJcbiAgICB1c2VyQ2lyY2xlTGlzdDogXCJjaXJjbGUvdXNlcl9qb2luXCIsIC8v55So5oi35Yqg5YWl55qE5ZyI5a2QXHJcbiAgICBjaXJjbGVMaXN0OiBcImNpcmNsZS9saXN0XCIsIC8v5ZyI5a2Q5YiX6KGoXHJcblxyXG4gICAgaGVscGVyTGlzdDogXCJoZWxwZXIvbGlzdFwiLCAvL+axguWKqeWIl+ihqFxyXG4gICAgdXNlckhlbHBMaXN0OiBcImhlbHBlci91c2VyL2xpc3RcIiwgLy8g55So5oi35rGC5Yqp5YiX6KGoXHJcblxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBVcmw7XHJcbiIsImltcG9ydCB0eXBlIHsgQXN5bmNUaHVuayB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IGxvd2VyQ2FzZSB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBzdGF0aWNEYXRhIGZyb20gJy4vc3RhdGljRGF0YSc7XHJcblxyXG5leHBvcnQgY29uc3Qgd2FpdFRpbWUgPSAodGltZTogbnVtYmVyID0gMTAwKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICB9LCB0aW1lKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBuYW1lIGFjdGlvbuWQjVxyXG4gKiBAcGFyYW0gZm4g6K+35rGC5Ye95pWwXHJcbiAqIEByZXR1cm5zIHRodW5r5YyF6KO555qEYWN0aW9uXHJcbiAqIEBTIOWMheijueeahOWHveaVsOeahOexu+Wei++8jOWmguaenOS4jeW4puWPguaVsOeahOivne+8jOimgeWhq3ZvaWTvvIzkuI3nhLbnvJbor5HlmajkvJrmiqXplJlcclxuICovXHJcbmV4cG9ydCBjb25zdCB0aHVua1dyYXBwZXIgPSA8VCA9IGFueSwgUyA9IGFueT4obmFtZTogc3RyaW5nLCBmbjogKHBhcmFtcz86IGFueSkgPT4gUHJvbWlzZTxUPikgPT4ge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUFzeW5jVGh1bmsobmFtZSwgYXN5bmMgKHBhcmFtcz86IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZuKHBhcmFtcyEpO1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZm4oKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgfSkgYXMgQXN5bmNUaHVuazx1bmtub3duLCBTLCBSZWNvcmQ8c3RyaW5nLCBhbnk+PjtcclxufTtcclxuXHJcbi8qKlxyXG4gKiDojrflj5bmnIDlpJrkuKTkvY3mnInmlYjlsI/mlbBcclxuICogQHBhcmFtIGQgXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldE1heFR3b1plcm8gPSAoZDogbnVtYmVyKSA9PiB7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChkICogMTAwKSAvIDEwMFxyXG59XHJcblxyXG4vKipcclxuICog6I635Y+W5LqS5biu5pi+56S655qE6YeR6aKdXHJcbiAqIEBwYXJhbSBtaW4g5pyA5bCP6YeR6aKdXHJcbiAqIEBwYXJhbSBtYXgg5pyA5aSn6YeR6aKdXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldEhlbHBNb25leSA9IChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpID0+IHtcclxuICAgIGlmIChtYXggPT0gMCkge1xyXG4gICAgICAgIGlmIChtaW4gPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCLlvoXlrppcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gXCLvv6VcIiArIGdldE1heFR3b1plcm8obWluKSArIFwi5YWDXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gXCLvv6VcIiArIGdldE1heFR3b1plcm8obWluKSArIFwiLVwiICsgZ2V0TWF4VHdvWmVybyhtYXgpICsgXCLlhYNcIjtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOagueaNruW9k+WJjeiOt+WPluaXtumXtOWtl+espuS4slxyXG4gKiBAcGFyYW0gdGltZSDml7bpl7TmiLNcclxuICogQHBhcmFtIGRlZmF1bHRWYWx1ZSDpu5jorqTlgLxcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRUaW1lU3RyaW5nQnlOb3cgPSAodGltZTogbnVtYmVyLCBkZWZhdWx0VmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKHRpbWUgPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICB9XHJcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHRpbWUpO1xyXG4gICAgaWYgKGRhdGUgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICB9XHJcbiAgICBsZXQgbm93RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgeWVzRGF0ZSA9IG5ldyBEYXRlKG5vd0RhdGUuZ2V0VGltZSgpIC0gKDI0ICogNjAgKiA2MCAqIDEwMDApKTtcclxuICAgIGxldCB0b21vcnJvd0RhdGUgPSBuZXcgRGF0ZShub3dEYXRlLmdldFRpbWUoKSArICgyNCAqIDYwICogNjAgKiAxMDAwKSk7XHJcbiAgICBpZiAobm93RGF0ZS5nZXRGdWxsWWVhcigpID09PSBkYXRlLmdldEZ1bGxZZWFyKClcclxuICAgICAgICAmJiBub3dEYXRlLmdldE1vbnRoKCkgPT09IGRhdGUuZ2V0TW9udGgoKVxyXG4gICAgICAgICYmIG5vd0RhdGUuZ2V0RGF0ZSgpID09PSBkYXRlLmdldERhdGUoKSkge1xyXG4gICAgICAgIC8vIOWQjOS4gOWkqVxyXG4gICAgICAgIHJldHVybiBBZGRaKGRhdGUuZ2V0SG91cnMoKSkgKyBcIjpcIiArIEFkZFooZGF0ZS5nZXRNaW51dGVzKCkpO1xyXG4gICAgfSBlbHNlIGlmICh5ZXNEYXRlLmdldEZ1bGxZZWFyKCkgPT09IGRhdGUuZ2V0RnVsbFllYXIoKVxyXG4gICAgICAgICYmIHllc0RhdGUuZ2V0TW9udGgoKSA9PT0gZGF0ZS5nZXRNb250aCgpXHJcbiAgICAgICAgJiYgeWVzRGF0ZS5nZXREYXRlKCkgPT09IGRhdGUuZ2V0RGF0ZSgpKSB7XHJcbiAgICAgICAgLy8g5pio5aSpXHJcbiAgICAgICAgcmV0dXJuIFwi5pio5aSpIFwiICsgQWRkWihkYXRlLmdldEhvdXJzKCkpICsgXCI6XCIgKyBBZGRaKGRhdGUuZ2V0TWludXRlcygpKTtcclxuICAgIH0gZWxzZSBpZiAodG9tb3Jyb3dEYXRlLmdldEZ1bGxZZWFyKCkgPT09IGRhdGUuZ2V0RnVsbFllYXIoKVxyXG4gICAgICAgICYmIHRvbW9ycm93RGF0ZS5nZXRNb250aCgpID09PSBkYXRlLmdldE1vbnRoKClcclxuICAgICAgICAmJiB0b21vcnJvd0RhdGUuZ2V0RGF0ZSgpID09PSBkYXRlLmdldERhdGUoKSkge1xyXG4gICAgICAgIC8vIOaYjuWkqVxyXG4gICAgICAgIHJldHVybiBcIuaYjuWkqSBcIiArIEFkZFooZGF0ZS5nZXRIb3VycygpKSArIFwiOlwiICsgQWRkWihkYXRlLmdldE1pbnV0ZXMoKSk7XHJcbiAgICB9IGVsc2UgaWYgKG5vd0RhdGUuZ2V0RnVsbFllYXIoKSA9PT0gZGF0ZS5nZXRGdWxsWWVhcigpKSB7XHJcbiAgICAgICAgLy8g5ZCM5LiA5bm0XHJcbiAgICAgICAgcmV0dXJuIEFkZFooZGF0ZS5nZXRNb250aCgpKSArIFwi5pyIXCIgKyBBZGRaKGRhdGUuZ2V0RGF0ZSgpKSArIFwi5pelIFwiICsgQWRkWihkYXRlLmdldEhvdXJzKCkpICsgXCI6XCIgKyBBZGRaKGRhdGUuZ2V0TWludXRlcygpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCkgKyBcIuW5tFwiICsgQWRkWihkYXRlLmdldE1vbnRoKCkpICsgXCLmnIhcIiArIEFkZFooZGF0ZS5nZXREYXRlKCkpICsgXCLml6UgXCIgKyBBZGRaKGRhdGUuZ2V0SG91cnMoKSkgKyBcIjpcIiArIEFkZFooZGF0ZS5nZXRNaW51dGVzKCkpO1xyXG59XHJcblxyXG4vKipcclxuICog5pWw5a2X5bCP5LqOMTAg5YmN6Z2i6KGlMFxyXG4gKiBAcGFyYW0gbnVtIFxyXG4gKiBAcmV0dXJucyBcclxuICovXHJcbmZ1bmN0aW9uIEFkZFoobnVtOiBudW1iZXIpIHtcclxuICAgIGlmIChudW0gPCAxMCkge1xyXG4gICAgICAgIHJldHVybiBcIjBcIiArIG51bTtcclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiICsgbnVtO1xyXG59XHJcblxyXG4vKipcclxuICog5omL5py65Y+36aqM6K+BXHJcbiAqIEBwYXJhbSBwaG9uZSDmiYvmnLrlj7dcclxuICovXHJcbmV4cG9ydCBjb25zdCBjaGVja1Bob25lID0gKHBob25lOiBzdHJpbmcpID0+IHtcclxuICAgIGlmICghcGhvbmUpIHtcclxuICAgICAgICByZXR1cm4gJ+ivt+i+k+WFpeaJi+acuuWPtyc7XHJcbiAgICB9XHJcbiAgICB2YXIgbXlyZWcgPSAvXjFcXGR7MTB9JC87XHJcbiAgICBpZiAoIW15cmVnLnRlc3QocGhvbmUpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLmiYvmnLrlj7fmoLzlvI/plJnor69cIik7XHJcbiAgICAgICAgcmV0dXJuICfmiYvmnLrlj7fmoLzlvI/plJnor68nO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG59XHJcblxyXG4vKipcclxuICog6aqM6K+B56CB6aqM6K+BXHJcbiAqIEBwYXJhbSBjb2RlIFxyXG4gKiBAcmV0dXJucyBcclxuICovXHJcbmV4cG9ydCBjb25zdCBjaGVja0NvZGUgPSAoY29kZTogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAoIWNvZGUpIHtcclxuICAgICAgICByZXR1cm4gJ+ivt+WFiOiOt+WPlumqjOivgeeggSc7XHJcbiAgICB9XHJcbiAgICB2YXIgbXlyZWcgPSAvXlxcZHs0LDZ9JC87XHJcbiAgICBpZiAoIW15cmVnLnRlc3QoY29kZSkpIHtcclxuICAgICAgICByZXR1cm4gJ+ivt+i+k+WFpeato+ehrueahOmqjOivgeeggSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDpqozor4Hlr4bnoIFcclxuICogQHBhcmFtIHB3ZCBcclxuICogQHJldHVybnMgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY2hlY2tQd2QgPSAocHdkOiBzdHJpbmcpID0+IHtcclxuICAgIGlmICghcHdkKSB7XHJcbiAgICAgICAgcmV0dXJuICfor7fovpPlhaXlr4bnoIEnO1xyXG4gICAgfVxyXG4gICAgaWYgKHB3ZC5sZW5ndGggPCA2IHx8IHB3ZC5sZW5ndGggPiAyMCkge1xyXG4gICAgICAgIHJldHVybiAn6K+36L6T5YWlNi0yMOS9jeWvhueggSc7XHJcbiAgICB9XHJcbiAgICB2YXIgbXlyZWcgPSAvXig/PS4qW2EtekEtWl0pKD89LipcXGQpLns2LDIwfSQvO1xyXG4gICAgaWYgKCFteXJlZy50ZXN0KHB3ZCkpIHtcclxuICAgICAgICByZXR1cm4gJ+WvhueggeagvOW8j+mUmeivryc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDojrflj5bmu5rliqjmnaHlrr3luqZcclxuICogQHJldHVybnMgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Nyb2xsYmFyV2lkdGgoKSB7XHJcbiAgICB2YXIgb1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyksXHJcbiAgICAgICAgc3R5bGVzID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xyXG4gICAgICAgIH0sIGksIGNsaWVudFdpZHRoMSwgY2xpZW50V2lkdGgyLCBzY3JvbGxiYXJXaWR0aDtcclxuICAgIGZvciAoaSBpbiBzdHlsZXMpIG9QLnN0eWxlW2ldID0gc3R5bGVzW2ldO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvUCk7XHJcbiAgICBjbGllbnRXaWR0aDEgPSBvUC5jbGllbnRXaWR0aDtcclxuICAgIG9QLnN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnO1xyXG4gICAgY2xpZW50V2lkdGgyID0gb1AuY2xpZW50V2lkdGg7XHJcbiAgICBzY3JvbGxiYXJXaWR0aCA9IGNsaWVudFdpZHRoMSAtIGNsaWVudFdpZHRoMjtcclxuICAgIG9QLnJlbW92ZSgpO1xyXG4gICAgcmV0dXJuIHNjcm9sbGJhcldpZHRoO1xyXG59XHJcblxyXG4vLyDmoLnmja7lrZfnrKbkuLLpppblrZfnrKZhc2NpaeWAvOiOt+WPluminOiJslxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29sb3JCeVN0cmluZyhrZXk6IHN0cmluZykge1xyXG4gICAgbGV0IGNvZGUgPSBrZXkuY2hhckNvZGVBdCgwKTtcclxuICAgIHJldHVybiBzdGF0aWNEYXRhLmNvbG9yTGlzdFtjb2RlICUgc3RhdGljRGF0YS5jb2xvckxpc3QubGVuZ3RoXTtcclxufVxyXG5cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGVudEJvZHlcIjogXCJhbGxfY2lyY2xlX2NvbnRlbnRCb2R5X19DTkZuSFwiLFxuXHRcImhlYWRlclwiOiBcImFsbF9jaXJjbGVfaGVhZGVyX18yekt0NlwiLFxuXHRcImNvbnRlbnRIZWFkZXJcIjogXCJhbGxfY2lyY2xlX2NvbnRlbnRIZWFkZXJfXzFFRWdFXCIsXG5cdFwidGl0bGVJdGVtXCI6IFwiYWxsX2NpcmNsZV90aXRsZUl0ZW1fXzJaR0ZJXCIsXG5cdFwic2Nyb29sSWNvblwiOiBcImFsbF9jaXJjbGVfc2Nyb29sSWNvbl9fMnBiaUdcIixcblx0XCJsZWZ0XCI6IFwiYWxsX2NpcmNsZV9sZWZ0X19rVFhRdlwiLFxuXHRcInJpZ2h0XCI6IFwiYWxsX2NpcmNsZV9yaWdodF9fM3FKV2tcIixcblx0XCJhbGxfY29udGVudFwiOiBcImFsbF9jaXJjbGVfYWxsX2NvbnRlbnRfXzM4QWctXCIsXG5cdFwibm9fbW9yZVwiOiBcImFsbF9jaXJjbGVfbm9fbW9yZV9fWkF0TGxcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNhcm91c2VsQ29udGFpbmVyXCI6IFwiY2lyY2xlX2Jhbm5lcl9jYXJvdXNlbENvbnRhaW5lcl9fMVZtV0pcIixcblx0XCJjYXJvdXNlbEJvZHlcIjogXCJjaXJjbGVfYmFubmVyX2Nhcm91c2VsQm9keV9fMnhNeU5cIixcblx0XCJjYXJvdXNlbEl0ZW1cIjogXCJjaXJjbGVfYmFubmVyX2Nhcm91c2VsSXRlbV9fMWtHMGpcIixcblx0XCJjYXJvdXNlbEZvb3RlclwiOiBcImNpcmNsZV9iYW5uZXJfY2Fyb3VzZWxGb290ZXJfXzNJTFdfXCIsXG5cdFwiaW5kaWNhdG9yc0NvbnRhaW5lclwiOiBcImNpcmNsZV9iYW5uZXJfaW5kaWNhdG9yc0NvbnRhaW5lcl9fSjNFclZcIixcblx0XCJpbmRpY2F0b3JzSXRlbVwiOiBcImNpcmNsZV9iYW5uZXJfaW5kaWNhdG9yc0l0ZW1fXzJudkxGXCIsXG5cdFwiYWN0aXZlXCI6IFwiY2lyY2xlX2Jhbm5lcl9hY3RpdmVfXzFMMHhHXCIsXG5cdFwiYnRuQ29udGFpbmVyXCI6IFwiY2lyY2xlX2Jhbm5lcl9idG5Db250YWluZXJfX185NG5fXCIsXG5cdFwiYnRuRGlyZWN0aW9uXCI6IFwiY2lyY2xlX2Jhbm5lcl9idG5EaXJlY3Rpb25fXzN4TU9uXCIsXG5cdFwicHJlXCI6IFwiY2lyY2xlX2Jhbm5lcl9wcmVfXzJZVFQzXCIsXG5cdFwibmV4dFwiOiBcImNpcmNsZV9iYW5uZXJfbmV4dF9fMXdBeXVcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRlbnRCb2R5XCI6IFwiY2lyY2xlX2NvbnRlbnRfY29udGVudEJvZHlfXzJHN1RyXCIsXG5cdFwibGVmdFwiOiBcImNpcmNsZV9jb250ZW50X2xlZnRfXzNWU2R4XCIsXG5cdFwidXNlckNhcmRcIjogXCJjaXJjbGVfY29udGVudF91c2VyQ2FyZF9fMXFlb1BcIixcblx0XCJsZWZ0TWVudVwiOiBcImNpcmNsZV9jb250ZW50X2xlZnRNZW51X18yQVFnalwiLFxuXHRcImNlbnRlclwiOiBcImNpcmNsZV9jb250ZW50X2NlbnRlcl9fMXNSUTFcIixcblx0XCJiYW5uZXJcIjogXCJjaXJjbGVfY29udGVudF9iYW5uZXJfXzJ0RGY0XCIsXG5cdFwiY29udGVudFwiOiBcImNpcmNsZV9jb250ZW50X2NvbnRlbnRfXzNtWGw5XCIsXG5cdFwicmlnaHRcIjogXCJjaXJjbGVfY29udGVudF9yaWdodF9fMlVmcFdcIixcblx0XCJqb2luQ2lyY2xlXCI6IFwiY2lyY2xlX2NvbnRlbnRfam9pbkNpcmNsZV9fMzZJTlZcIixcblx0XCJqb2luSGludDFcIjogXCJjaXJjbGVfY29udGVudF9qb2luSGludDFfXzM1S1d3XCIsXG5cdFwiaG90XCI6IFwiY2lyY2xlX2NvbnRlbnRfaG90X18xS1pCdFwiLFxuXHRcImpvaW5IaW50XCI6IFwiY2lyY2xlX2NvbnRlbnRfam9pbkhpbnRfXzNmck5DXCIsXG5cdFwiY3JlYXRlQ2lyY2xlXCI6IFwiY2lyY2xlX2NvbnRlbnRfY3JlYXRlQ2lyY2xlX19wTFJ6RVwiLFxuXHRcImNyZWF0ZVRleHRcIjogXCJjaXJjbGVfY29udGVudF9jcmVhdGVUZXh0X18xTVc1TVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGVudF90aXRsZVwiOiBcIm15X2NpcmNsZV9jb250ZW50X3RpdGxlX18zT0EweFwiLFxuXHRcIm15X2NpcmxjZV9jb250ZW50XCI6IFwibXlfY2lyY2xlX215X2NpcmxjZV9jb250ZW50X18yQ1ByblwiLFxuXHRcIm5vX21vcmVcIjogXCJteV9jaXJjbGVfbm9fbW9yZV9fMWNNMGtcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNpcmNsZUl0ZW1cIjogXCJiaWdfY2lyY2xlX2l0ZW1fY2lyY2xlSXRlbV9fMXpuR1lcIixcblx0XCJsaW5lQ29udGVudFwiOiBcImJpZ19jaXJjbGVfaXRlbV9saW5lQ29udGVudF9fM2pjbGFcIixcblx0XCJsb2dvXCI6IFwiYmlnX2NpcmNsZV9pdGVtX2xvZ29fXzNsV0MwXCIsXG5cdFwiY2lyY2xlQ29udGVudFwiOiBcImJpZ19jaXJjbGVfaXRlbV9jaXJjbGVDb250ZW50X18xNk1iVFwiLFxuXHRcImNlbnRlckNvbnRlbnRcIjogXCJiaWdfY2lyY2xlX2l0ZW1fY2VudGVyQ29udGVudF9fMkxVUEJcIixcblx0XCJjaXJjbGVOYW1lXCI6IFwiYmlnX2NpcmNsZV9pdGVtX2NpcmNsZU5hbWVfXzF1OWg0XCIsXG5cdFwidGFnc1wiOiBcImJpZ19jaXJjbGVfaXRlbV90YWdzX18zcEhaaFwiLFxuXHRcImRlc2NcIjogXCJiaWdfY2lyY2xlX2l0ZW1fZGVzY19fMXJfM2RcIixcblx0XCJmb2xsb3dcIjogXCJiaWdfY2lyY2xlX2l0ZW1fZm9sbG93X18yRVBvRFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2lyY2xlX3RhZ1wiOiBcImNpcmNsZV90YWdfaXRlbV9jaXJjbGVfdGFnX18zM19LZ1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYm9keVwiOiBcIkhvbWVfYm9keV9fMmtlMmdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImVtcHR5X2NvbnRlbnRcIjogXCJlbXB0eV92aWV3X2VtcHR5X2NvbnRlbnRfXzFzWXhpXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250ZW50TGVmdFBcIjogXCJsZWZ0X21lbnVfd2lkZ2V0X2NvbnRlbnRMZWZ0UF9fMWtId2RcIixcblx0XCJsZWZ0TWVudUxpc3RcIjogXCJsZWZ0X21lbnVfd2lkZ2V0X2xlZnRNZW51TGlzdF9fX0hkNWlcIixcblx0XCJtZW51SXRlbVwiOiBcImxlZnRfbWVudV93aWRnZXRfbWVudUl0ZW1fXzJDOUhyXCIsXG5cdFwibWVzc2FnZVwiOiBcImxlZnRfbWVudV93aWRnZXRfbWVzc2FnZV9fMVNDSTZcIixcblx0XCJsZWZ0TWVudUxpc3RDaGVja1wiOiBcImxlZnRfbWVudV93aWRnZXRfbGVmdE1lbnVMaXN0Q2hlY2tfXzN0SThZXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtZW51TGVmdFwiOiBcImxlZnRfdXNlcl9jYXJkX21lbnVMZWZ0X18zSldrQVwiLFxuXHRcInNpZ25Vc2VyXCI6IFwibGVmdF91c2VyX2NhcmRfc2lnblVzZXJfXzJuRFZWXCIsXG5cdFwidXNlckhlYWRlclwiOiBcImxlZnRfdXNlcl9jYXJkX3VzZXJIZWFkZXJfXzMyYmZYXCIsXG5cdFwidXNlckRlc2NcIjogXCJsZWZ0X3VzZXJfY2FyZF91c2VyRGVzY19fM1MyYXVcIixcblx0XCJzaWduQnRuXCI6IFwibGVmdF91c2VyX2NhcmRfc2lnbkJ0bl9fQ0xBZjJcIixcblx0XCJsb2dpbkJ0blwiOiBcImxlZnRfdXNlcl9jYXJkX2xvZ2luQnRuX18xNngxOVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicGFnaW5hdGlvblwiOiBcIm15X3BhZ2luYXRpb25fcGFnaW5hdGlvbl9fM2U3TC1cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvb3RlclwiOiBcImZvb3Rlcl9mb290ZXJfXzFjQnlBXCIsXG5cdFwiY29udGVudFwiOiBcImZvb3Rlcl9jb250ZW50X18yeFZjaVwiLFxuXHRcImRvd25cIjogXCJmb290ZXJfZG93bl9fMVRmcEtcIixcblx0XCJkb3duT3RoZXJcIjogXCJmb290ZXJfZG93bk90aGVyX18yM0VQdVwiLFxuXHRcImNvcHlcIjogXCJmb290ZXJfY29weV9fMnNsNXVcIixcblx0XCJjb3B5TGlua1wiOiBcImZvb3Rlcl9jb3B5TGlua19fMThhMWlcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRlclwiOiBcImhlYWRlcl9oZWFkZXJfXzJxMXdGXCIsXG5cdFwiY29udGVudFwiOiBcImhlYWRlcl9jb250ZW50X19tMzRxYVwiLFxuXHRcImxvZ29cIjogXCJoZWFkZXJfbG9nb19fWkhrY0dcIixcblx0XCJtZW51XCI6IFwiaGVhZGVyX21lbnVfXzNLcjdCXCIsXG5cdFwibWVudUFIb21lXCI6IFwiaGVhZGVyX21lbnVBSG9tZV9fMUo1ZmlcIixcblx0XCJtZW51QUhlbHBcIjogXCJoZWFkZXJfbWVudUFIZWxwX18xbnE3U1wiLFxuXHRcIm1lbnVBRHluYW1pY1wiOiBcImhlYWRlcl9tZW51QUR5bmFtaWNfXzJtaXhxXCIsXG5cdFwibWVudUFDaXJjbGVcIjogXCJoZWFkZXJfbWVudUFDaXJjbGVfXzM5UnZYXCIsXG5cdFwibWVudVNlbGVjdFwiOiBcImhlYWRlcl9tZW51U2VsZWN0X18xQ0phYVwiLFxuXHRcInNlYXJjaFwiOiBcImhlYWRlcl9zZWFyY2hfXzFBaVNVXCIsXG5cdFwic2VhcmNoSWNvblwiOiBcImhlYWRlcl9zZWFyY2hJY29uX18xTmxQYlwiLFxuXHRcInVzZXJJbmZvXCI6IFwiaGVhZGVyX3VzZXJJbmZvX18yLTNXalwiLFxuXHRcInVzZXJNZW51XCI6IFwiaGVhZGVyX3VzZXJNZW51X18zUG95M1wiLFxuXHRcInVzZXJDZW50ZXJcIjogXCJoZWFkZXJfdXNlckNlbnRlcl9fMWt0UTBcIixcblx0XCJ1c2VyQ2VudGVyTmFtZVwiOiBcImhlYWRlcl91c2VyQ2VudGVyTmFtZV9fMngtTzlcIixcblx0XCJ1c2VyQ2VudGVySXRlbVwiOiBcImhlYWRlcl91c2VyQ2VudGVySXRlbV9fUmZVcHdcIixcblx0XCJzZW5kRHluYW1pY1wiOiBcImhlYWRlcl9zZW5kRHluYW1pY19fMXE4a0FcIixcblx0XCJzZW5kRG5hbWljSXRlbVwiOiBcImhlYWRlcl9zZW5kRG5hbWljSXRlbV9fMTlxREpcIixcblx0XCJtZXNzYWdlSGludFwiOiBcImhlYWRlcl9tZXNzYWdlSGludF9fMTlweDVcIixcblx0XCJkb3duTG9naW5cIjogXCJoZWFkZXJfZG93bkxvZ2luX18yMXZINFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidG9Ub3BcIjogXCJsYXlvdXRfdG9Ub3BfXzJZeDVQXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3J5cHRvLWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY29va2llc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwiLyogKGlnbm9yZWQpICovIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlRGlzcGF0Y2giLCJzaG93TG9naW4iLCJ1c2VBcHBTZWxlY3RvciIsIkxlZnRNZW51V2lkZ2V0IiwiTGVmdFVzZXJDYXJkIiwiQWxsQ2lyY2xlIiwiQ2lyY2xlQmFubmVyIiwic3R5bGVzIiwiTXlDaXJjbGUiLCJSYW5rQ2lyY2xlIiwiQ2lyY2xlQ29udGVudCIsInVzZXIiLCJpc0xvZ2luIiwic3RhdGUiLCJiYW5uZXJzIiwiaW1hZ2UiLCJsaW5rIiwibWVudUxpc3QiLCJkaXNwYXRjaCIsInNlbGVjdEluZGV4Iiwic2V0U2VsZWN0SW5kZXgiLCJ0b3BTZWxlY3RJbmRleCIsInNldFRvcFNlbGVjdEluZGV4Iiwicm91dGUiLCJtZW51SXRlbUNoaWNrIiwiaW5kZXgiLCJ0b3BJdGVtQ2xpY2siLCJjcmVhdGVDaXJjbGUiLCJwdXNoIiwiY29udGVudEJvZHkiLCJsZWZ0IiwidXNlckNhcmQiLCJsZWZ0TWVudSIsImNlbnRlciIsImJhbm5lciIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwiaWQiLCJyaWdodCIsImpvaW5DaXJjbGUiLCJqb2luSGludDEiLCJob3QiLCJqb2luSGludCIsImNyZWF0ZVRleHQiLCJ1c2VFZmZlY3QiLCJmZXRjaEFsbENpcmNsZUxpc3QiLCJ1c2VBcHBEaXNwYXRjaCIsIkJpZ0NpcmNsZUl0ZW0iLCJFbXB0eVZpZXciLCJNeVBhZ2luYXRpb24iLCJpdGVtQ2xpY2siLCJhbGxDaXJjbGVEYXRhIiwiY2lyY2xlIiwiY2lyY2xlVHlwZSIsImNvbW1vbiIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJ0YWJLZXkiLCJzZXRUYWJLZXkiLCJ0aXRsZVNjcm9sbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkZWFsVmlld1Njcm9sbCIsInN3aXRjaFBhZ2UiLCJsb2FkRGF0YSIsImtleSIsInBhZ2UiLCJwYWdlU2l6ZSIsInR5cGUiLCJsaW1pdCIsImV2ZW50IiwidGFyZ2V0IiwibGVmdEVsZW1lbnQiLCJyaWdodEVsZW1lbnQiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJzY3JvbGxMZWZ0Iiwic2hvdyIsImNsaWVudFdpZHRoIiwic2Nyb2xsV2lkdGgiLCJ0aXRsZVNjcm9sbENsaWNrIiwiaXNMZWZ0Iiwic2Nyb2xsQnkiLCJiZWhhdmlvciIsInBhZ2VDaGFuZ2UiLCJoZWFkZXIiLCJjb250ZW50SGVhZGVyIiwidGl0bGVJdGVtIiwiYm9yZGVyQm90dG9tQ29sb3IiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJzY3Jvb2xJY29uIiwiam9pbiIsImFsbF9jb250ZW50IiwibGlzdCIsImxlbmd0aCIsIm5vX21vcmUiLCJkaXNwbGF5IiwidG90YWwiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJjdXJyZW50Q2Fyb3VzZWwiLCJ0cmFuc2xhdGVMaXN0IiwiYW5pbWF0aW9uU3RlcCIsIkNoaWxkcmVuIiwidG9BcnJheSIsImNoaWxkcmVuIiwiaGFuZGxlQ2Fyb3VzZWxCb2R5TW91c2VPdmVyIiwiYmluZCIsImhhbmRsZUNhcm91c2VsQm9keU1vdXNlT3V0IiwiaGFuZGxlQ2Fyb3VzZWxGb290ZXJNb3VzZU92ZXIiLCJyZW5kZXJJbmRpY2F0b3JzIiwiZ2V0SW5kaWNhdG9yc0FjdGl2ZSIsImhhbmRsZXJOZXh0IiwiaGFuZGxlclRyYW5zaXRpb25FbmQiLCJoYW5kbGVyUHJlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJzdG9wQ2Fyb3VzZWwiLCJjb21wb25lbnREaWRNb3VudCIsInNldFN0YXRlIiwic3RhcnRDYXJvdXNlbCIsInRpbWVySUQiLCJzZXRJbnRlcnZhbCIsImhhbmRsZXJDYXJvdXNlbCIsInN0ZXAiLCJkaXJlY3Rpb24iLCJwcmUiLCJjbGVhckludGVydmFsIiwiY3VycmVudEluZGV4IiwiYWN0aXZlIiwiY2Fyb3VzZWxGb290ZXIiLCJpbmRpY2F0b3JzQ29udGFpbmVyIiwiaW5kaWNhdG9yc0l0ZW0iLCJyZW5kZXIiLCJjYXJvdXNlbENvbnRhaW5lciIsImNhcm91c2VsQm9keSIsInRyYW5zaXRpb24iLCJ3aWR0aCIsInRyYW5zZm9ybSIsImNhcm91c2VsSXRlbSIsImJ0bkNvbnRhaW5lciIsImJ0bkRpcmVjdGlvbiIsIm5leHQiLCJmZXRjaFVzZXJDaXJjbGVMaXN0Iiwic2hvd1RpdGxlIiwibXlDaXJjbGVMaXN0IiwibG9hZE15Q2lyY2xlIiwiY29udGVudF90aXRsZSIsIm15X2NpcmxjZV9jb250ZW50IiwiQ2lyY2xlVGFnSXRlbSIsImdldEZvbGxvdyIsImNpcmNsZUl0ZW0iLCJsaW5lQ29udGVudCIsImxvZ28iLCJhdmF0YXIiLCJjaXJjbGVDb250ZW50IiwiY2VudGVyQ29udGVudCIsImNpcmNsZU5hbWUiLCJjaXJjbGVfbmFtZSIsInRhZ3MiLCJjaXJjbGVfdGFnIiwic3BsaXQiLCJkZXNjIiwiZGVzY3JpcHRpb24iLCJmb2xsb3ciLCJqb2luX3R5cGUiLCJib3JkZXJDb2xvciIsImdldENvbG9yQnlTdHJpbmciLCJ0aXRsZSIsImJhY2tncm91bmRDb2xvciIsImdldEVycm9ySW1nIiwiaW1nIiwiZW1wdHlfY29udGVudCIsIm1lbnVJdGVtQ2xpY2siLCJjb250ZW50TGVmdFAiLCJsZWZ0TWVudUxpc3RDaGVjayIsInRvcCIsImxlZnRNZW51TGlzdCIsIm1lbnVJdGVtIiwiYmFja2dyb3VuZEltYWdlIiwibWVzc2FnZSIsIm51bSIsInNob3dPckhpZGVMb2dpbiIsImRlc2NNYXhMaW5lIiwiY2xhc3NOYW1lIiwiaXNTaWduIiwic2V0U2lnbiIsImRvU2lnbiIsImRvTG9naW4iLCJtZW51TGVmdCIsInNpZ25Vc2VyIiwidXNlckhlYWRlciIsIm5pY2tuYW1lIiwidXNlckRlc2MiLCJXZWJraXRMaW5lQ2xhbXAiLCJtYXhMaW5lcyIsInNpZ25CdG4iLCJsb2dpbkJ0biIsIlBhZ2luYXRpb24iLCJnZXRJdGVtUmVuZGVyIiwiY3VycmVudCIsIm9yaWdpbmFsRWxlbWVudCIsInBhZ2luYXRpb24iLCJGb290ZXIiLCJmb290ZXIiLCJkb3duIiwiZG93bk90aGVyIiwiY29weSIsImNvcHlMaW5rIiwiZ2V0U2Nyb2xsYmFyV2lkdGgiLCJMaW5rIiwic3dpdGNoVXNlclBhZ2VTZWxlY3RJbmRleCIsIm91dExvZ2luIiwiSGVhZGVyIiwiaXNTaG93TG9naW4iLCJsb2dpbiIsInJvdXRlciIsInVzZXJDZW50ZXJMaXN0Iiwic2VuZExpc3QiLCJpc1Nob3dVc2VyQ2VudGVyIiwic2V0U2hvd1VzZXJDZW50ZXIiLCJpc1Nob3dTZW5kRHluYW1pYyIsInNldFNob3dTZW5kRHluYW1pYyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoaWRlRGlhbG9nIiwiZXYiLCJzcmNFbGVtZW50IiwidXNlckNlbnRlclNob3ciLCJzZW5kU2hvdyIsInVzZXJDZW50ZXJJdGVtQ2xpY2siLCJ1c2VyQ2VudGVyQ2hhbmdlIiwicGF0aG5hbWUiLCJzZW5kRHluYW1pY0l0ZW1DbGljayIsImNvbnNvbGUiLCJsb2ciLCJwYWRkaW5nUmlnaHQiLCJtZW51IiwibWVudVNlbGVjdCIsIm1lbnVBSG9tZSIsIm1lbnVBSGVscCIsIm1lbnVBRHluYW1pYyIsIm1lbnVBQ2lyY2xlIiwic2VhcmNoIiwic2VhcmNoSWNvbiIsInVzZXJJbmZvIiwidXNlck1lbnUiLCJ1c2VyQ2VudGVyIiwidXNlckNlbnRlck5hbWUiLCJ1c2VyQ2VudGVySXRlbSIsIm1lc3NhZ2VIaW50Iiwic2VuZER5bmFtaWMiLCJzZW5kRG5hbWljSXRlbSIsImRvd25Mb2dpbiIsIkhlYWQiLCJMYXlvdXQiLCJrZXl3b3JkcyIsIndpbmRvdyIsInRvVG9wIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJwYWdlWE9mZnNldCIsInNjcm9sbFRvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfcm91dGVyIiwiX3JvdXRlcjEiLCJfdXNlSW50ZXJzZWN0aW9uIiwib2JqIiwiX19lc01vZHVsZSIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsImhyZWYiLCJhcyIsIm9wdGlvbnMiLCJpc0xvY2FsVVJMIiwiY2F0Y2giLCJlcnIiLCJjdXJMb2NhbGUiLCJsb2NhbGUiLCJpc01vZGlmaWVkRXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJpbmRleE9mIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsIkVycm9yIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwia2V5cyIsImZvckVhY2giLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsInVzZVJlZiIsIndhcm4iLCJwIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIm9ubHkiLCJjaGlsZFJlZiIsInJlZiIsInNldEludGVyc2VjdGlvblJlZiIsImlzVmlzaWJsZSIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJ1c2VDYWxsYmFjayIsImVsIiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwYXRoIiwiZW5kc1dpdGgiLCJzbGljZSIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfVFJBSUxJTkdfU0xBU0giLCJ0ZXN0IiwicmVxdWVzdElkbGVDYWxsYmFjayIsImNhbmNlbElkbGVDYWxsYmFjayIsInNlbGYiLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJtYXgiLCJjbGVhclRpbWVvdXQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJjcmVhdGVSb3V0ZUxvYWRlciIsIl9nZXRBc3NldFBhdGhGcm9tUm91dGUiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwid2l0aEZ1dHVyZSIsImdlbmVyYXRvciIsImVudHJ5IiwiZ2V0IiwiZnV0dXJlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZXNvbHZlciIsInByb20iLCJzZXQiLCJ0aGVuIiwiaGFzUHJlZmV0Y2giLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZXMiLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwicmVsIiwiY3Jvc3NPcmlnaW4iLCJfX05FWFRfQ1JPU1NfT1JJR0lOIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhcHBlbmRTY3JpcHQiLCJzcmMiLCJzY3JpcHQiLCJyZWplY3QiLCJib2R5IiwiZGV2QnVpbGRQcm9taXNlIiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwic2NyaXB0cyIsImVuY29kZVVSSSIsImNzcyIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJmaWx0ZXIiLCJ2IiwiZW50cnlwb2ludHMiLCJNYXAiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJtYXliZUV4ZWN1dGVTY3JpcHQiLCJmZXRjaFN0eWxlU2hlZXQiLCJmZXRjaCIsIm9rIiwidGV4dCIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiZXJyb3IiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsInJvdXRlRmlsZXNQcm9taXNlIiwiYWxsIiwiaGFzIiwiZW50cnlwb2ludCIsImZpbmFsbHkiLCJhc3NpZ24iLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJlbnVtZXJhYmxlIiwiX3dpdGhSb3V0ZXIiLCJjcmVhdGVSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJfcm91dGVyQ29udGV4dCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsInN0YWNrIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidW5kZWZpbmVkIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibmFtZSIsImRpc3BsYXlOYW1lIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJfX05FWFRfSTE4Tl9TVVBQT1JUIiwiYmFzZVBhdGgiLCJfX05FWFRfUk9VVEVSX0JBU0VQQVRIIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwicGF0aE5vUXVlcnlIYXNoIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsImRldGVjdGVkTG9jYWxlIiwiZGV0ZWN0ZWREb21haW4iLCJodHRwIiwiZG9tYWluIiwicGF0aExvd2VyIiwidG9Mb3dlckNhc2UiLCJsb2NhbGVMb3dlciIsInN1YnN0ciIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsInVybFByb3RvTWF0Y2giLCJtYXRjaCIsInVybEFzU3RyaW5nTm9Qcm90byIsInVybFBhcnRzIiwibm9ybWFsaXplZFVybCIsIm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInNvbWUiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiIsImhpc3RvcnkiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwibiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJub3RGb3VuZCIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiUm91dGVyIiwicGF0aG5hbWUxIiwicXVlcnkxIiwiYXMxIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQxIiwiZXJyMSIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJzZGMiLCJzZHIiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwiSlNPTiIsInN0cmluZ2lmeSIsIngiLCJ5IiwiZ2V0SXRlbSIsInBhcnNlIiwicGFyc2VSZWxhdGl2ZVVybCIsImlzU3NyIiwiX2JwcyIsImNoYW5nZSIsIl9zaGFsbG93IiwiY29tcG9uZW50cyIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJzdWIiLCJjbGMiLCJfd3JhcEFwcCIsImlzUmVhZHkiLCJnc3NwIiwiZ2lwIiwiYXBwR2lwIiwiZ3NwIiwibG9jYXRpb24iLCJfX05FWFRfSEFTX1JFV1JJVEVTIiwiaG9zdG5hbWUiLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJzY3JvbGxSZXN0b3JhdGlvbiIsInJlbG9hZCIsImJhY2siLCJtZXRob2QiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwicHJldkxvY2FsZSIsInBhcnNlZEFzIiwibG9jYWxlUGF0aFJlc3VsdCIsImRpZE5hdmlnYXRlIiwiYXNOb0Jhc2VQYXRoIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiX2luRmxpZ2h0Um91dGUiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJsb2NhbGVDaGFuZ2UiLCJvbmx5QUhhc2hDaGFuZ2UiLCJlbWl0Iiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInJld3JpdGVzUmVzdWx0IiwibWF0Y2hlZFBhZ2UiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJlZjEiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsIl9zY3JvbGwiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsImxhbmciLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZXJyMiIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJpZEVsIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsInBhdGhuYW1lMiIsIl9pc1NzZyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJjYWNoZUtleSIsInJlc291cmNlS2V5IiwiY3R4IiwiQXBwMSIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiZmV0Y2hDaXJjbGVUeXBlIiwid3JhcHBlciIsIkNpcmNsZVBhZ2UiLCJnZXRJbml0aWFsUGFnZVByb3BzIiwic3RvcmUiLCJyZXEiLCJnZXRTdGF0ZSIsImFwaSIsIlVybCIsImdldENpcmNsZUxpc3QiLCJyZXF1ZXN0IiwiY2lyY2xlTGlzdCIsImdldFVzZXJDaXJjbGVMaXN0IiwidXNlckNpcmNsZUxpc3QiLCJnZXRUeXBlQWRkcmVzc1NjaG9vbCIsImNvbW1pdCIsImdldENpcmNsZVR5cGUiLCJnZXRIZWxwZXJMaXN0IiwiaGVscGVyTGlzdCIsImdldFVzZXJIZWxwZXJMaXN0IiwidXNlckhlbHBMaXN0IiwiZ2V0VXNlckluZm8iLCJnZXRQaG9uZUNvZGUiLCJnZXRDb2RlIiwiaGVhZGVycyIsInB3ZExvZ2luIiwiY29kZUxvZ2luIiwiYXV0b0xvZ2luIiwidGh1bmtXcmFwcGVyIiwiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJob21lU2xpY2UiLCJyZWR1Y2VycyIsImV4dHJhUmVkdWNlcnMiLCJmdWxmaWxsZWQiLCJhY3Rpb24iLCJwYXlsb2FkIiwicmVkdWNlciIsImZldGNoVHlwZUFkZHJlc3NTY2hvb2wiLCJjb21tb25TbGljZSIsImluY3JlbWVudCIsImFjdGlvbnMiLCJmZXRjaFJlY29tbWVuZExpc3QiLCJmZXRjaExpa2VMaXN0IiwiZmV0Y2hOZWFyYnlMaXN0IiwiZmV0Y2hIb3J0TGlzdCIsImZldGNoUmVjb21tZW5kQ2lyY2xlTGlzdCIsImlzTG9hZCIsInJlY29tbWVuZERhdGEiLCJsaWtlRGF0YSIsIm5lYXJieURhdGEiLCJob3J0RGF0YSIsInJlY29tbWVuZENpcmNsZURhdGEiLCJpc1BlbmRpbmdBY3Rpb24iLCJpc1JlamVjdGVkQWN0aW9uIiwiaXNGdWxmaWxsZWRBY3Rpb24iLCJsb2FkaW5nU2xpY2UiLCJidWlsZGVyIiwiYWRkTWF0Y2hlciIsInNob3dGb3JnZXRQd2QiLCJsb2dpblNsaWNlIiwib3ZlcmZsb3ciLCJoaWRlTG9naW4iLCJzaG93TG9naW5QYWdlIiwic2hvd0ZvcmdldFB3ZFBhZ2UiLCJpc1Nob3ciLCJpc05vd1Nob3ciLCJmZXRjaFVzZXJJbmZvIiwiZmV0Y2hNaW5lUmVjb21tZW5kQ2lyY2xlTGlzdCIsImZldGNoTWluZUhlbHBlckxpc3QiLCJtaW5lSGVscGVyRGF0YSIsInVzZXJQYWdlU2VsZWN0SW5kZXgiLCJtaW5lU2xpY2UiLCJyZW1vdmVUb2tlbiIsInNhdmVUb2tlbiIsImZldGNoQXV0b0xvZ2luIiwiaXNGaW5pc2giLCJ0b2tlbiIsInVzZXJTbGljZSIsInNhdmVVc2VySW5mbyIsInNhdmVVc2VyRGF0YSIsImlzX2ZpbmlzaCIsInNhdmVVc2VyIiwiY29uZmlndXJlU3RvcmUiLCJ1c2VTZWxlY3RvciIsImNvbWJpbmVSZWR1Y2VycyIsImNyZWF0ZVdyYXBwZXIiLCJIWURSQVRFIiwibG9hZGluZ1JlZHVjZXIiLCJob21lUmVkdWNlciIsImxvZ2luUmVkdWNlciIsInVzZXJSZWR1Y2VyIiwiY29tbW9uUmVkdWNlciIsImNpcmNsZVJlZHVjZXIiLCJtaW5lUmVkdWNlciIsImNvbWJpbmVkUmVkdWNlciIsImxvYWRpbmciLCJob21lIiwibWluZSIsIm5leHRTdGF0ZSIsIm1ha2VTdG9yZSIsImRldlRvb2xzIiwiQ3J5cHRvSlMiLCJlbmMiLCJVdGY4IiwiaXYiLCJlbmNyeXB0Iiwic3JjcyIsImVuY3J5cHRlZCIsIkFFUyIsIm1vZGUiLCJFQ0IiLCJwYWRkaW5nIiwicGFkIiwiUGtjczciLCJjaXBoZXJ0ZXh0IiwidG9TdHJpbmciLCJCYXNlNjQiLCJkZWNyeXB0Iiwid29yZCIsImRlY3J5cHRlZFN0ciIsImF4aW9zIiwibm90aWZpY2F0aW9uIiwiZ2V0VG9rZW4iLCJxcyIsImNvZGVNZXNzYWdlIiwiZ2V0SGVhZGVyIiwibm93X3RpbWUiLCJnZXRUaW1lIiwidmVyc2lvbiIsImNsaWVudCIsImRpZCIsImFlc0hlYWRlciIsImNvbmZpZyIsImNyZWF0ZSIsImJhc2VVUkwiLCJBUElfSE9TVCIsInRpbWVvdXQiLCJpbnRlcmNlcHRvcnMiLCJ1c2UiLCJwZW5kaW5nIiwiY2FuY2VsVG9rZW4iLCJDYW5jZWxUb2tlbiIsInRyYW5zZm9ybVJlcXVlc3QiLCJzdHIiLCJyZXNwb25zZSIsImVycm9yVGV4dCIsInN0YXR1c1RleHQiLCJuZWVkX2RlY3J5cHQiLCJjbGVhclBlbmRpbmciLCJjbGVhciIsInN0YXRpY0RhdGEiLCJjb2xvckxpc3QiLCJjb29raWUiLCJ0b2tlbktleSIsInNhdmUiLCJyZW1vdmUiLCJsb2FkIiwic3RhdGljSG9zdCIsIlNUQVRJQ19IT1NUIiwiY3JlYXRlQXN5bmNUaHVuayIsIndhaXRUaW1lIiwidGltZSIsImdldE1heFR3b1plcm8iLCJkIiwicm91bmQiLCJnZXRIZWxwTW9uZXkiLCJtaW4iLCJnZXRUaW1lU3RyaW5nQnlOb3ciLCJkZWZhdWx0VmFsdWUiLCJkYXRlIiwibm93RGF0ZSIsInllc0RhdGUiLCJ0b21vcnJvd0RhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsIkFkZFoiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJjaGVja1Bob25lIiwicGhvbmUiLCJteXJlZyIsImNoZWNrQ29kZSIsImNvZGUiLCJjaGVja1B3ZCIsInB3ZCIsIm9QIiwiaGVpZ2h0IiwiaSIsImNsaWVudFdpZHRoMSIsImNsaWVudFdpZHRoMiIsInNjcm9sbGJhcldpZHRoIiwib3ZlcmZsb3dZIiwiY2hhckNvZGVBdCJdLCJzb3VyY2VSb290IjoiIn0=