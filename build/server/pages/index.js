(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

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

/***/ "./components/home/HomeContent.tsx":
/*!*****************************************!*\
  !*** ./components/home/HomeContent.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_content_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home_content.module.scss */ "./components/home/home_content.module.scss");
/* harmony import */ var _home_content_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_home_content_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _banner_HomeBanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner/HomeBanner */ "./components/home/banner/HomeBanner.tsx");
/* harmony import */ var _module_title_ModuleTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../module_title/ModuleTitle */ "./components/module_title/ModuleTitle.tsx");
/* harmony import */ var _homeCenter_HomeCenter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homeCenter/HomeCenter */ "./components/home/homeCenter/HomeCenter.tsx");
/* harmony import */ var _widget_LeftMenuWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widget/LeftMenuWidget */ "./components/widget/LeftMenuWidget.tsx");
/* harmony import */ var _circle_recommend_circle_RecommendCircle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../circle/recommend_circle/RecommendCircle */ "./components/circle/recommend_circle/RecommendCircle.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\components\\home\\HomeContent.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var isDown = 0;

const HomeContent = props => {
  const menuList = [{
    "id": 0,
    "title": "合适推荐",
    "image": "/static/images/ico_comment.png",
    "num": 0,
    "list": props.recommendData
  }, {
    "id": 1,
    "title": "我的关注",
    "image": "/static/images/ico_like.png",
    "num": 0,
    "list": props.likeData
  }, {
    "id": 2,
    "title": "在我身边",
    "image": "/static/images/ico_address.png",
    "num": 0,
    "list": props.nearbyData
  }, {
    "id": 3,
    "title": "紧急求助",
    "image": "/static/images/ico_hot.png",
    "num": 0,
    "list": props.hortData
  }];
  const hotNews = [{
    id: 0,
    title: "互帮原来可以这么简单",
    link: ""
  }, {
    id: 1,
    title: "博主教你接单途中遇到危险该怎么做",
    link: ""
  }, {
    id: 2,
    title: "防诈骗需要这些小技巧",
    link: ""
  }, {
    id: 3,
    title: "保证金的作用是什么？如何合理设置保证金？",
    link: ""
  }, {
    id: 4,
    title: "接单的正确流程是怎样的？",
    link: ""
  }];
  var timerID;
  const menuLocationlist = [];
  const {
    0: selectIndex,
    1: setSelectIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.onscroll = bindHandleScroll;
    initMenuLocationList();
    setMenuLocation();
    doScroll();
    return () => {
      // 组件卸载函数
      clearInterval(timerID);
    };
  }, []);

  function initMenuLocationList() {
    for (let index = 0; index < menuList.length; index++) {
      let child = document.getElementById('n' + menuList[index].id);

      if (child != null) {
        menuLocationlist[index] = child.offsetTop + child.offsetHeight - 80;
      }
    }
  }

  function menuItemClick(index) {
    if (index !== selectIndex) {
      setSelectIndex(index);
      const tesNode = document.getElementById('n' + menuList[index].id);

      if (tesNode != null) {
        isDown++;
        timerID = setInterval(() => {
          isDown--;
          clearTimeout(timerID);
        }, 700);
        const elOffset = tesNode.offsetTop - 80;
        window.scrollTo({
          top: elOffset,
          behavior: 'smooth'
        });
      }
    }
  }

  const bindHandleScroll = event => {
    doScroll();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }; // 左边菜单导航栏位置及滚动


  function doScroll() {
    let leftMenu = document.getElementById('leftMenu');

    if (leftMenu === null) {
      return;
    }

    if (window.pageYOffset > 381) {
      leftMenu.style.top = "80px";
      const pageWidth = document.documentElement.clientWidth;

      if (pageWidth < 1300) {
        leftMenu.style.left = 50 - window.pageXOffset + "px";
      } else {
        leftMenu.style.left = pageWidth / 2 + window.pageXOffset - 600 + "px";
      }

      leftMenu.style.position = "fixed";
    } else {
      leftMenu.style.top = "0px";
      leftMenu.style.left = "0px";
      leftMenu.style.position = "relative";
    }

    if (isDown > 0) {
      return;
    }

    setMenuLocation();
  }

  function setMenuLocation() {
    for (let index = 0; index < menuLocationlist.length; index++) {
      if (window.pageYOffset < menuLocationlist[index]) {
        setSelectIndex(index);
        return;
      }
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: (_home_content_module_scss__WEBPACK_IMPORTED_MODULE_7___default().content),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_banner_HomeBanner__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: (_home_content_module_scss__WEBPACK_IMPORTED_MODULE_7___default().contentBody),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_home_content_module_scss__WEBPACK_IMPORTED_MODULE_7___default().contentLeft),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_widget_LeftMenuWidget__WEBPACK_IMPORTED_MODULE_4__.default, {
          id: "leftMenu",
          selectIndex: selectIndex,
          menuList: menuList,
          menuItemClick: menuItemClick
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_home_content_module_scss__WEBPACK_IMPORTED_MODULE_7___default().contentCenter),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_homeCenter_HomeCenter__WEBPACK_IMPORTED_MODULE_3__.default, {
          data: menuList
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_home_content_module_scss__WEBPACK_IMPORTED_MODULE_7___default().contentRight),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_home_content_module_scss__WEBPACK_IMPORTED_MODULE_7___default().hotNews),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_module_title_ModuleTitle__WEBPACK_IMPORTED_MODULE_2__.default, {
            title: "\u4E92\u5E2E\u5934\u6761",
            image: "/static/images/ico_hot.png",
            link: "/"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("ul", {
            className: (_home_content_module_scss__WEBPACK_IMPORTED_MODULE_7___default().hotNewsContent),
            children: hotNews.map((item, index) => {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
                className: (_home_content_module_scss__WEBPACK_IMPORTED_MODULE_7___default().hotNewsItem),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
                  href: item.link,
                  children: item.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 198,
                  columnNumber: 41
                }, undefined)
              }, item.id, false, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 44
              }, undefined);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 21
        }, undefined), props.recommendCircle && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_circle_recommend_circle_RecommendCircle__WEBPACK_IMPORTED_MODULE_5__.default, _objectSpread({}, props.recommendCircle), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 50
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 182,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeContent);

/***/ }),

/***/ "./components/home/banner/HomeBanner.tsx":
/*!***********************************************!*\
  !*** ./components/home/banner/HomeBanner.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_banner_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home_banner.module.scss */ "./components/home/banner/home_banner.module.scss");
/* harmony import */ var _home_banner_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_home_banner_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _widget_LeftUserCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widget/LeftUserCard */ "./components/widget/LeftUserCard.tsx");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/store */ "./store/store.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_slices_loginSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/slices/loginSlice */ "./store/slices/loginSlice.ts");
/* harmony import */ var _store_slices_mineSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/slices/mineSlice */ "./store/slices/mineSlice.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\components\\home\\banner\\HomeBanner.tsx";









var stop = false;
var timerID;
var timerIDMove;
var realIndex = 0;

const HomeBanner = () => {
  const {
    isLogin,
    user
  } = (0,_store_store__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(state => state.user);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const data = [{
    "id": 1,
    "url": "https://cdn6.haitou.cc/homepage/1632813394.png?x-oss-process=image/resize,m_fixed,w_695,h_378",
    "link": "http://sxh.haitou.cc/1024xzh",
    "bg": '#3899FF',
    "title": "科大讯飞1024校招会"
  }, {
    "id": 2,
    "url": "https://cdn6.haitou.cc/homepage/1632815809.png?x-oss-process=image/resize,m_fixed,w_695,h_378",
    "link": "http://xyzp.haitou.cc/article/2261376.html",
    "bg": '#1E73F2',
    "title": "ATL新能源集团"
  }, {
    "id": 3,
    "url": "https://cdn6.haitou.cc/homepage/1629100479.png?x-oss-process=image/resize,m_fixed,w_695,h_378",
    "link": "http://xyzp.haitou.cc/article/2152379.html",
    "bg": '#8DCDF1',
    "title": "德邦快递"
  }];
  const menus = [{
    "id": 0,
    "image": "/static/images/ico_helper.png",
    "title": "我的求助",
    "link": "/user/" + (user === null || user === void 0 ? void 0 : user.id)
  }, {
    "id": 1,
    "image": "/static/images/ico_order.png",
    "title": "我的订单",
    "link": ""
  }, {
    "id": 2,
    "image": "/static/images/ico_notify.png",
    "title": "系统通知",
    "link": ""
  }, {
    "id": 3,
    "image": "/static/images/ico_contract.png",
    "title": "联系人",
    "link": ""
  }, {
    "id": 4,
    "image": "/static/images/ico_group.png",
    "title": "我的群聊",
    "link": ""
  }, {
    "id": 5,
    "image": "/static/images/ico_circle.png",
    "title": "我的帮圈",
    "link": "/user/" + (user === null || user === void 0 ? void 0 : user.id)
  }, {
    "id": 6,
    "image": "/static/images/ico_rz.png",
    "title": "实名认证",
    "link": ""
  }, {
    "id": 7,
    "image": "/static/images/ico_sc.png",
    "title": "积分商城",
    "link": ""
  }, {
    "id": 8,
    "image": "/static/images/ico_work.png",
    "title": "招聘兼职",
    "link": ""
  }];
  const {
    0: selectIndex,
    1: setSelectIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    startTime();
    return () => {
      clearInterval(timerIDMove);
      clearInterval(timerID);
    };
  }, []);

  function startTime() {
    timerID = setInterval(() => {
      switchBanner(realIndex + 1);
    }, 5000);
  }

  function switchBanner(index) {
    if (stop) {
      return;
    }

    index = index % data.length;

    if (realIndex != index) {
      realIndex = index;
      setSelectIndex(index);
    }
  } // banner item点击事件


  function itemClick(index) {
    doLongStopClick(index);
  }

  function onMyMouseEnter(index) {
    // 在一个控件上停留n秒触发长时间停留事件
    timerIDMove = setInterval(() => {
      doLongStopClick(index);
    }, 1000);
  }

  function onMyMouseLeave() {
    // 清除判定是否长时间停留的定时器
    clearInterval(timerIDMove);

    if (stop) {
      stop = false; // 为stop时，表示在某个上面长时间停留了，移开时，需重启自动切换定时器

      startTime();
    }
  } // 长时间停留事件


  function doLongStopClick(index) {
    // 停止自己
    clearInterval(timerIDMove);
    stop = true; // 长时间停留停止自动切换的定时器

    clearInterval(timerID);

    if (realIndex != index) {
      realIndex = index;
      setSelectIndex(index);
    }
  } // 更多功能item点击事件


  const dealClick = index => {
    if (isLogin && user) {
      if (index == 0) {
        dispatch((0,_store_slices_mineSlice__WEBPACK_IMPORTED_MODULE_6__.switchUserPageSelectIndex)({
          key: user.id,
          index: 1
        }));
      } else if (index == 5) {
        dispatch((0,_store_slices_mineSlice__WEBPACK_IMPORTED_MODULE_6__.switchUserPageSelectIndex)({
          key: user.id,
          index: 2
        }));
      }

      router.push({
        pathname: menus[index].link
      });
    } else {
      showLogin();
    }
  };

  const showLogin = () => {
    dispatch((0,_store_slices_loginSlice__WEBPACK_IMPORTED_MODULE_5__.showOrHideLogin)(true));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    className: (_home_banner_module_scss__WEBPACK_IMPORTED_MODULE_8___default().banner),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("ul", {
      children: data.map((item, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("li", {
          className: [(_home_banner_module_scss__WEBPACK_IMPORTED_MODULE_8___default().bannerItem), index == selectIndex ? (_home_banner_module_scss__WEBPACK_IMPORTED_MODULE_8___default().itemShow) : (_home_banner_module_scss__WEBPACK_IMPORTED_MODULE_8___default().itemHide)].join(' '),
          style: {
            backgroundColor: item.bg
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
            className: (_home_banner_module_scss__WEBPACK_IMPORTED_MODULE_8___default().itemImg),
            href: item.link,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
              src: item.url,
              title: item.title,
              width: "700px",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 29
          }, undefined)
        }, item.id, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 32
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: (_home_banner_module_scss__WEBPACK_IMPORTED_MODULE_8___default().bannerIndicator),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: (_home_banner_module_scss__WEBPACK_IMPORTED_MODULE_8___default().indicatorContent),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: (_home_banner_module_scss__WEBPACK_IMPORTED_MODULE_8___default().menuLeft),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_widget_LeftUserCard__WEBPACK_IMPORTED_MODULE_1__.default, {
            className: (_home_banner_module_scss__WEBPACK_IMPORTED_MODULE_8___default().userCard)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: (_home_banner_module_scss__WEBPACK_IMPORTED_MODULE_8___default().indicator),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("ul", {
            children: data.map((item, index) => {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("li", {
                className: [(_home_banner_module_scss__WEBPACK_IMPORTED_MODULE_8___default().indicatorItem), index === selectIndex ? (_home_banner_module_scss__WEBPACK_IMPORTED_MODULE_8___default().indicatorItemCheck) : ""].join(' '),
                onMouseEnter: () => {
                  onMyMouseEnter(index);
                },
                onMouseLeave: () => {
                  onMyMouseLeave();
                },
                onClick: () => itemClick(index),
                children: item.title
              }, item.id, false, {
                fileName: _jsxFileName,
                lineNumber: 217,
                columnNumber: 44
              }, undefined);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: (_home_banner_module_scss__WEBPACK_IMPORTED_MODULE_8___default().menuRight),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h3", {
            className: (_home_banner_module_scss__WEBPACK_IMPORTED_MODULE_8___default().menuRightTitle),
            children: "\u66F4\u591A\u529F\u80FD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("ul", {
            className: (_home_banner_module_scss__WEBPACK_IMPORTED_MODULE_8___default().menuContent),
            children: menus.map((item, index) => {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("li", {
                className: (_home_banner_module_scss__WEBPACK_IMPORTED_MODULE_8___default().menuItem),
                onClick: () => {
                  dealClick(index);
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                  className: (_home_banner_module_scss__WEBPACK_IMPORTED_MODULE_8___default().menuImgDiv),
                  style: {
                    backgroundImage: 'url(' + item.image + ')'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 234,
                  columnNumber: 41
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                  children: item.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 237,
                  columnNumber: 41
                }, undefined)]
              }, item.id, true, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 44
              }, undefined);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 195,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeBanner);

/***/ }),

/***/ "./components/home/contentItem/HomeContentItem.tsx":
/*!*********************************************************!*\
  !*** ./components/home/contentItem/HomeContentItem.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_content_item_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home_content_item.module.scss */ "./components/home/contentItem/home_content_item.module.scss");
/* harmony import */ var _home_content_item_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_content_item_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helperItem_HelperItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helperItem/HelperItem */ "./components/home/helperItem/HelperItem.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\components\\home\\contentItem\\HomeContentItem.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const HomeContentItem = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    id: 'n' + props.id,
    className: (_home_content_item_module_scss__WEBPACK_IMPORTED_MODULE_2___default().itemContent),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_home_content_item_module_scss__WEBPACK_IMPORTED_MODULE_2___default().contentTitle),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
        children: props.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
        className: (_home_content_item_module_scss__WEBPACK_IMPORTED_MODULE_2___default().lookMore),
        children: "\u67E5\u770B\u66F4\u591A"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined), props.list.map((item, index) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_helperItem_HelperItem__WEBPACK_IMPORTED_MODULE_0__.default, _objectSpread({}, item), item.id, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 28
      }, undefined);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeContentItem);

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

/***/ "./components/home/homeCenter/HomeCenter.tsx":
/*!***************************************************!*\
  !*** ./components/home/homeCenter/HomeCenter.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _contentItem_HomeContentItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contentItem/HomeContentItem */ "./components/home/contentItem/HomeContentItem.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\components\\home\\homeCenter\\HomeCenter.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const HomeCenter = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: props.data.map((item, index) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_contentItem_HomeContentItem__WEBPACK_IMPORTED_MODULE_0__.default, _objectSpread({}, item), item.id, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 28
      }, undefined);
    })
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeCenter);

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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layout_Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout/Footer */ "./layout/Footer.tsx");
/* harmony import */ var _layout_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/Header */ "./layout/Header.tsx");
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/Layout */ "./layout/Layout.tsx");
/* harmony import */ var _components_home_HomeContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/home/HomeContent */ "./components/home/HomeContent.tsx");
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.scss */ "./styles/Home.module.scss");
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/store */ "./store/store.ts");
/* harmony import */ var _store_slices_homeSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/slices/homeSlice */ "./store/slices/homeSlice.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\VSCodeProject\\hubang\\pages\\index.tsx";









const Home = () => {
  const {
    recommendData,
    likeData,
    nearbyData,
    hortData,
    recommendCircleData
  } = (0,_store_store__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)(state => state.home);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_layout_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().body),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_layout_Header__WEBPACK_IMPORTED_MODULE_1__.default, {
      page: 0
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_home_HomeContent__WEBPACK_IMPORTED_MODULE_3__.default, {
      recommendData: recommendData,
      likeData: likeData,
      nearbyData: nearbyData,
      hortData: hortData,
      recommendCircle: recommendCircleData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_layout_Footer__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined);
};

Home.getInitialProps = _store_store__WEBPACK_IMPORTED_MODULE_4__.default.getInitialPageProps(store => async ({
  req
}) => {
  if (!store.getState().home.isLoad) {
    await Promise.all([store.dispatch((0,_store_slices_homeSlice__WEBPACK_IMPORTED_MODULE_5__.fetchRecommendList)({
      limit: 20,
      page: 1,
      type: "recommend"
    })), store.dispatch((0,_store_slices_homeSlice__WEBPACK_IMPORTED_MODULE_5__.fetchLikeList)({
      limit: 20,
      page: 1,
      type: "attention"
    })), store.dispatch((0,_store_slices_homeSlice__WEBPACK_IMPORTED_MODULE_5__.fetchNearbyList)({
      limit: 20,
      page: 1,
      type: "nearby"
    })), store.dispatch((0,_store_slices_homeSlice__WEBPACK_IMPORTED_MODULE_5__.fetchHortList)({
      limit: 20,
      page: 1,
      type: "urgent"
    })), store.dispatch((0,_store_slices_homeSlice__WEBPACK_IMPORTED_MODULE_5__.fetchRecommendCircleList)({
      limit: 8,
      page: 1,
      type: "recommend"
    }))]);
  }

  return {};
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

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

/***/ "./components/home/banner/home_banner.module.scss":
/*!********************************************************!*\
  !*** ./components/home/banner/home_banner.module.scss ***!
  \********************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"banner": "home_banner_banner__3sWx3",
	"bannerItem": "home_banner_bannerItem__2u1el",
	"itemImg": "home_banner_itemImg__18VMM",
	"itemShow": "home_banner_itemShow__2soU9",
	"itemHide": "home_banner_itemHide__2_kd4",
	"bannerIndicator": "home_banner_bannerIndicator__3WCVK",
	"indicatorContent": "home_banner_indicatorContent__1bXDB",
	"menuLeft": "home_banner_menuLeft__23IPw",
	"userCard": "home_banner_userCard__VA1_5",
	"indicator": "home_banner_indicator__3pI-g",
	"indicatorItem": "home_banner_indicatorItem__XeLh-",
	"indicatorItemCheck": "home_banner_indicatorItemCheck__bcZcN",
	"menuRight": "home_banner_menuRight__30Fee",
	"menuRightTitle": "home_banner_menuRightTitle__QGchT",
	"menuContent": "home_banner_menuContent__2mLHU",
	"menuItem": "home_banner_menuItem__3Jh0D",
	"menuImgDiv": "home_banner_menuImgDiv__USb_U"
};


/***/ }),

/***/ "./components/home/contentItem/home_content_item.module.scss":
/*!*******************************************************************!*\
  !*** ./components/home/contentItem/home_content_item.module.scss ***!
  \*******************************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"itemContent": "home_content_item_itemContent__1hU8F",
	"contentTitle": "home_content_item_contentTitle__1pg0Y",
	"lookMore": "home_content_item_lookMore__3hcMh"
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

/***/ "./components/home/home_content.module.scss":
/*!**************************************************!*\
  !*** ./components/home/home_content.module.scss ***!
  \**************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"content": "home_content_content__rzK10",
	"contentBody": "home_content_contentBody__JaWru",
	"contentLeft": "home_content_contentLeft__3DREJ",
	"contentCenter": "home_content_contentCenter__WgTwL",
	"contentRight": "home_content_contentRight__1shc3",
	"hotNews": "home_content_hotNews__2pUUI",
	"hotNewsContent": "home_content_hotNewsContent__hir6b",
	"hotNewsItem": "home_content_hotNewsItem__Sz-EB"
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
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQSx5R0FBOEM7Ozs7Ozs7Ozs7OztBQ0E5Qzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaHViYW5nLy4vY29tcG9uZW50cy9jaXJjbGUvcmVjb21tZW5kX2NpcmNsZS9SZWNvbW1lbmRDaXJjbGUudHN4Iiwid2VicGFjazovL2h1YmFuZy8uL2NvbXBvbmVudHMvaG9tZS9Ib21lQ29udGVudC50c3giLCJ3ZWJwYWNrOi8vaHViYW5nLy4vY29tcG9uZW50cy9ob21lL2Jhbm5lci9Ib21lQmFubmVyLnRzeCIsIndlYnBhY2s6Ly9odWJhbmcvLi9jb21wb25lbnRzL2hvbWUvY29udGVudEl0ZW0vSG9tZUNvbnRlbnRJdGVtLnRzeCIsIndlYnBhY2s6Ly9odWJhbmcvLi9jb21wb25lbnRzL2hvbWUvaGVscGVySXRlbS9IZWxwZXJJdGVtLnRzeCIsIndlYnBhY2s6Ly9odWJhbmcvLi9jb21wb25lbnRzL2hvbWUvaG9tZUNlbnRlci9Ib21lQ2VudGVyLnRzeCIsIndlYnBhY2s6Ly9odWJhbmcvLi9jb21wb25lbnRzL2l0ZW0vY2lyY2xlL0NpcmNsZUl0ZW0udHN4Iiwid2VicGFjazovL2h1YmFuZy8uL2NvbXBvbmVudHMvbW9kdWxlX3RpdGxlL01vZHVsZVRpdGxlLnRzeCIsIndlYnBhY2s6Ly9odWJhbmcvLi9jb21wb25lbnRzL3dpZGdldC9MZWZ0TWVudVdpZGdldC50c3giLCJ3ZWJwYWNrOi8vaHViYW5nLy4vY29tcG9uZW50cy93aWRnZXQvTGVmdFVzZXJDYXJkLnRzeCIsIndlYnBhY2s6Ly9odWJhbmcvLi9sYXlvdXQvRm9vdGVyLnRzeCIsIndlYnBhY2s6Ly9odWJhbmcvLi9sYXlvdXQvSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly9odWJhbmcvLi9sYXlvdXQvTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly9odWJhbmcvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovL2h1YmFuZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly9odWJhbmcvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyLmpzIiwid2VicGFjazovL2h1YmFuZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9odWJhbmcvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL2h1YmFuZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL2h1YmFuZy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovL2h1YmFuZy8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9odWJhbmcvLi9zdG9yZS9zZXJ2aWNlcy9jaXJjbGUudHMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vc3RvcmUvc2VydmljZXMvY29tbW9uLnRzIiwid2VicGFjazovL2h1YmFuZy8uL3N0b3JlL3NlcnZpY2VzL2hlbHBlci50cyIsIndlYnBhY2s6Ly9odWJhbmcvLi9zdG9yZS9zZXJ2aWNlcy9taW5lLnRzIiwid2VicGFjazovL2h1YmFuZy8uL3N0b3JlL3NlcnZpY2VzL3VzZXIudHMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vc3RvcmUvc2xpY2VzL2NpcmNsZVNsaWNlLnRzIiwid2VicGFjazovL2h1YmFuZy8uL3N0b3JlL3NsaWNlcy9jb21tb25TbGljZS50cyIsIndlYnBhY2s6Ly9odWJhbmcvLi9zdG9yZS9zbGljZXMvaG9tZVNsaWNlLnRzIiwid2VicGFjazovL2h1YmFuZy8uL3N0b3JlL3NsaWNlcy9sb2FkaW5nU2xpY2UudHMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vc3RvcmUvc2xpY2VzL2xvZ2luU2xpY2UudHMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vc3RvcmUvc2xpY2VzL21pbmVTbGljZS50cyIsIndlYnBhY2s6Ly9odWJhbmcvLi9zdG9yZS9zbGljZXMvdXNlclNsaWNlLnRzIiwid2VicGFjazovL2h1YmFuZy8uL3N0b3JlL3N0b3JlLnRzIiwid2VicGFjazovL2h1YmFuZy8uL3V0aWxzL2Flcy50cyIsIndlYnBhY2s6Ly9odWJhbmcvLi91dGlscy9hcGkudHMiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vdXRpbHMvc3RhdGljRGF0YS50cyIsIndlYnBhY2s6Ly9odWJhbmcvLi91dGlscy90b2tlbl91dGlsLnRzIiwid2VicGFjazovL2h1YmFuZy8uL3V0aWxzL3VybC50cyIsIndlYnBhY2s6Ly9odWJhbmcvLi91dGlscy91dGlsLnRzIiwid2VicGFjazovL2h1YmFuZy8uL2NvbXBvbmVudHMvY2lyY2xlL3JlY29tbWVuZF9jaXJjbGUvcmVjb21tZW5kX2NpcmNsZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9odWJhbmcvLi9jb21wb25lbnRzL2hvbWUvYmFubmVyL2hvbWVfYmFubmVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2h1YmFuZy8uL2NvbXBvbmVudHMvaG9tZS9jb250ZW50SXRlbS9ob21lX2NvbnRlbnRfaXRlbS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9odWJhbmcvLi9jb21wb25lbnRzL2hvbWUvaGVscGVySXRlbS9oZWxwZXJfaXRlbS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9odWJhbmcvLi9jb21wb25lbnRzL2hvbWUvaG9tZV9jb250ZW50Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2h1YmFuZy8uL2NvbXBvbmVudHMvaXRlbS9jaXJjbGUvY2lyY2xlX2l0ZW0ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vY29tcG9uZW50cy9tb2R1bGVfdGl0bGUvbW9kdWxlX3RpdGxlLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2h1YmFuZy8uL3N0eWxlcy9Ib21lLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2h1YmFuZy8uL3N0eWxlcy9jb21wb25lbnRzL3dpZGdldC9sZWZ0X21lbnVfd2lkZ2V0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2h1YmFuZy8uL3N0eWxlcy9jb21wb25lbnRzL3dpZGdldC9sZWZ0X3VzZXJfY2FyZC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9odWJhbmcvLi9zdHlsZXMvZm9vdGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2h1YmFuZy8uL3N0eWxlcy9oZWFkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaHViYW5nLy4vc3R5bGVzL2xheW91dC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9odWJhbmcvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcIkByZWR1eGpzL3Rvb2xraXRcIiIsIndlYnBhY2s6Ly9odWJhbmcvZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9odWJhbmcvZXh0ZXJuYWwgXCJjcnlwdG8tanNcIiIsIndlYnBhY2s6Ly9odWJhbmcvZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly9odWJhbmcvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9odWJhbmcvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIiIsIndlYnBhY2s6Ly9odWJhbmcvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIiIsIndlYnBhY2s6Ly9odWJhbmcvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9odWJhbmcvZXh0ZXJuYWwgXCJxc1wiIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwicmVhY3QtY29va2llc1wiIiwid2VicGFjazovL2h1YmFuZy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vaHViYW5nL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9odWJhbmcvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9odWJhbmcvZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovL2h1YmFuZy9pZ25vcmVkfEQ6XFxWU0NvZGVQcm9qZWN0XFxodWJhbmdcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcc2hhcmVkXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcmVjb21tZW5kX2NpcmNsZS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBNb2R1bGVUaXRsZSBmcm9tIFwiLi4vLi4vbW9kdWxlX3RpdGxlL01vZHVsZVRpdGxlXCI7XHJcbmltcG9ydCBDaXJjbGVJdGVtIGZyb20gXCIuLi8uLi9pdGVtL2NpcmNsZS9DaXJjbGVJdGVtXCI7XHJcbmltcG9ydCB7IENpcmNsZUJlYW4sIExpc3RQYWdlQmVhbiB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9zZXJ2aWNlcy9jaXJjbGVcIjtcclxuXHJcbmNvbnN0IFJlY29tbWVuZENpcmNsZTogTmV4dFBhZ2U8TGlzdFBhZ2VCZWFuPENpcmNsZUJlYW4+PiA9IChyZWNvbW1lbmRDaXJjbGUpID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlY29tbWVuZENpcmNsZX0+XHJcbiAgICAgICAgPE1vZHVsZVRpdGxlIHRpdGxlPVwi5o6o6I2Q5ZyI5a2QXCIgbGluaz1cIi9jaXJjbGVcIiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVjb21tZW5kQ2lyY2xlQ29udGVudH0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlY29tbWVuZENpcmNsZS5saXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENpcmNsZUl0ZW0ga2V5PXtpdGVtLmlkfSB7Li4uaXRlbX0gLz5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWNvbW1lbmRDaXJjbGU7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hvbWVfY29udGVudC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBIb21lQmFubmVyIGZyb20gXCIuL2Jhbm5lci9Ib21lQmFubmVyXCI7XHJcbmltcG9ydCBNb2R1bGVUaXRsZSBmcm9tIFwiLi4vbW9kdWxlX3RpdGxlL01vZHVsZVRpdGxlXCI7XHJcbmltcG9ydCBIb21lQ2VudGVyIGZyb20gXCIuL2hvbWVDZW50ZXIvSG9tZUNlbnRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IEhlbHBlckl0ZW1EYXRhIH0gZnJvbSBcIi4uLy4uL3N0b3JlL3NlcnZpY2VzL2hlbHBlclwiO1xyXG5pbXBvcnQgdHlwZSB7IENpcmNsZUJlYW4sIExpc3RQYWdlQmVhbiB9IGZyb20gXCIuLi8uLi9zdG9yZS9zZXJ2aWNlcy9jaXJjbGVcIjtcclxuaW1wb3J0IENpcmNsZUl0ZW0gZnJvbSAnLi4vaXRlbS9jaXJjbGUvQ2lyY2xlSXRlbSc7XHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IExlZnRNZW51V2lkZ2V0LCB7IExlZnRNZW51QmVhbiB9IGZyb20gXCIuLi93aWRnZXQvTGVmdE1lbnVXaWRnZXRcIjtcclxuaW1wb3J0IFJlY29tbWVuZENpcmNsZSBmcm9tIFwiLi4vY2lyY2xlL3JlY29tbWVuZF9jaXJjbGUvUmVjb21tZW5kQ2lyY2xlXCI7XHJcblxyXG5pbnRlcmZhY2UgSG9tZURhdGEge1xyXG4gICAgcmVjb21tZW5kRGF0YTogSGVscGVySXRlbURhdGFbXSxcclxuICAgIGxpa2VEYXRhOiBIZWxwZXJJdGVtRGF0YVtdLFxyXG4gICAgbmVhcmJ5RGF0YTogSGVscGVySXRlbURhdGFbXSxcclxuICAgIGhvcnREYXRhOiBIZWxwZXJJdGVtRGF0YVtdLFxyXG4gICAgcmVjb21tZW5kQ2lyY2xlOiBMaXN0UGFnZUJlYW48Q2lyY2xlQmVhbj4sXHJcbn1cclxuXHJcbmludGVyZmFjZSBIb21lTGVmdE1lbnUgZXh0ZW5kcyBMZWZ0TWVudUJlYW4ge1xyXG4gICAgbGlzdFxyXG59XHJcblxyXG52YXIgaXNEb3duID0gMDtcclxuXHJcbmNvbnN0IEhvbWVDb250ZW50OiBOZXh0UGFnZTxIb21lRGF0YT4gPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBtZW51TGlzdDogSG9tZUxlZnRNZW51W10gPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCLlkIjpgILmjqjojZBcIixcclxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb19jb21tZW50LnBuZ1wiLFxyXG4gICAgICAgICAgICBcIm51bVwiOiAwLFxyXG4gICAgICAgICAgICBcImxpc3RcIjogcHJvcHMucmVjb21tZW5kRGF0YVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCLmiJHnmoTlhbPms6hcIixcclxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb19saWtlLnBuZ1wiLFxyXG4gICAgICAgICAgICBcIm51bVwiOiAwLFxyXG4gICAgICAgICAgICBcImxpc3RcIjogcHJvcHMubGlrZURhdGFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi5Zyo5oiR6Lqr6L65XCIsXHJcbiAgICAgICAgICAgIFwiaW1hZ2VcIjogXCIvc3RhdGljL2ltYWdlcy9pY29fYWRkcmVzcy5wbmdcIixcclxuICAgICAgICAgICAgXCJudW1cIjogMCxcclxuICAgICAgICAgICAgXCJsaXN0XCI6IHByb3BzLm5lYXJieURhdGFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiAzLFxyXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi57Sn5oCl5rGC5YqpXCIsXHJcbiAgICAgICAgICAgIFwiaW1hZ2VcIjogXCIvc3RhdGljL2ltYWdlcy9pY29faG90LnBuZ1wiLFxyXG4gICAgICAgICAgICBcIm51bVwiOiAwLFxyXG4gICAgICAgICAgICBcImxpc3RcIjogcHJvcHMuaG9ydERhdGFcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG5cclxuXHJcbiAgICBjb25zdCBob3ROZXdzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIuS6kuW4ruWOn+adpeWPr+S7pei/meS5iOeugOWNlVwiLFxyXG4gICAgICAgICAgICBsaW5rOiBcIlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgdGl0bGU6IFwi5Y2a5Li75pWZ5L2g5o6l5Y2V6YCU5Lit6YGH5Yiw5Y2x6Zmp6K+l5oCO5LmI5YGaXCIsXHJcbiAgICAgICAgICAgIGxpbms6IFwiXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLpmLLor4jpqpfpnIDopoHov5nkupvlsI/mioDlt6dcIixcclxuICAgICAgICAgICAgbGluazogXCJcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIuS/neivgemHkeeahOS9nOeUqOaYr+S7gOS5iO+8n+WmguS9leWQiOeQhuiuvue9ruS/neivgemHke+8n1wiLFxyXG4gICAgICAgICAgICBsaW5rOiBcIlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogNCxcclxuICAgICAgICAgICAgdGl0bGU6IFwi5o6l5Y2V55qE5q2j56Gu5rWB56iL5piv5oCO5qC355qE77yfXCIsXHJcbiAgICAgICAgICAgIGxpbms6IFwiXCIsXHJcbiAgICAgICAgfSxcclxuICAgIF07XHJcblxyXG4gICAgdmFyIHRpbWVySUQ7XHJcblxyXG4gICAgY29uc3QgbWVudUxvY2F0aW9ubGlzdDogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBjb25zdCBbc2VsZWN0SW5kZXgsIHNldFNlbGVjdEluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93Lm9uc2Nyb2xsID0gYmluZEhhbmRsZVNjcm9sbDtcclxuICAgICAgICBpbml0TWVudUxvY2F0aW9uTGlzdCgpO1xyXG4gICAgICAgIHNldE1lbnVMb2NhdGlvbigpO1xyXG4gICAgICAgIGRvU2Nyb2xsKCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgLy8g57uE5Lu25Y246L295Ye95pWwXHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXJJRClcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdE1lbnVMb2NhdGlvbkxpc3QoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1lbnVMaXN0Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbicgKyBtZW51TGlzdFtpbmRleF0uaWQpO1xyXG4gICAgICAgICAgICBpZiAoY2hpbGQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbWVudUxvY2F0aW9ubGlzdFtpbmRleF0gPSBjaGlsZC5vZmZzZXRUb3AgKyBjaGlsZC5vZmZzZXRIZWlnaHQgLSA4MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtZW51SXRlbUNsaWNrKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoaW5kZXggIT09IHNlbGVjdEluZGV4KSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdEluZGV4KGluZGV4KTtcclxuICAgICAgICAgICAgY29uc3QgdGVzTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduJyArIG1lbnVMaXN0W2luZGV4XS5pZCk7XHJcbiAgICAgICAgICAgIGlmICh0ZXNOb2RlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlzRG93bisrO1xyXG4gICAgICAgICAgICAgICAgdGltZXJJRCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpc0Rvd24tLTtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXJJRCk7XHJcbiAgICAgICAgICAgICAgICB9LCA3MDApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxPZmZzZXQgPSB0ZXNOb2RlLm9mZnNldFRvcCAtIDgwO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IGVsT2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJpbmRIYW5kbGVTY3JvbGwgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGRvU2Nyb2xsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5bem6L656I+c5Y2V5a+86Iiq5qCP5L2N572u5Y+K5rua5YqoXHJcbiAgICBmdW5jdGlvbiBkb1Njcm9sbCgpIHtcclxuICAgICAgICBsZXQgbGVmdE1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdE1lbnUnKTtcclxuICAgICAgICBpZiAobGVmdE1lbnUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMzgxKSB7XHJcbiAgICAgICAgICAgIGxlZnRNZW51LnN0eWxlLnRvcCA9IFwiODBweFwiO1xyXG4gICAgICAgICAgICBjb25zdCBwYWdlV2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgICAgIGlmIChwYWdlV2lkdGggPCAxMzAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0TWVudS5zdHlsZS5sZWZ0ID0gKDUwIC0gd2luZG93LnBhZ2VYT2Zmc2V0KSArIFwicHhcIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxlZnRNZW51LnN0eWxlLmxlZnQgPSBwYWdlV2lkdGggLyAyICsgd2luZG93LnBhZ2VYT2Zmc2V0IC0gNjAwICsgXCJweFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxlZnRNZW51LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxlZnRNZW51LnN0eWxlLnRvcCA9IFwiMHB4XCI7XHJcbiAgICAgICAgICAgIGxlZnRNZW51LnN0eWxlLmxlZnQgPSBcIjBweFwiO1xyXG4gICAgICAgICAgICBsZWZ0TWVudS5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc0Rvd24gPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TWVudUxvY2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0TWVudUxvY2F0aW9uKCkge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBtZW51TG9jYXRpb25saXN0Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0IDwgbWVudUxvY2F0aW9ubGlzdFtpbmRleF0pIHtcclxuICAgICAgICAgICAgICAgIHNldFNlbGVjdEluZGV4KGluZGV4KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgIDxIb21lQmFubmVyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudEJvZHl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50TGVmdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExlZnRNZW51V2lkZ2V0IGlkPVwibGVmdE1lbnVcIiBzZWxlY3RJbmRleD17c2VsZWN0SW5kZXh9IG1lbnVMaXN0PXttZW51TGlzdH0gbWVudUl0ZW1DbGljaz17bWVudUl0ZW1DbGlja30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50Q2VudGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8SG9tZUNlbnRlciBkYXRhPXttZW51TGlzdH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50UmlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaG90TmV3c30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb2R1bGVUaXRsZSB0aXRsZT1cIuS6kuW4ruWktOadoVwiIGltYWdlPVwiL3N0YXRpYy9pbWFnZXMvaWNvX2hvdC5wbmdcIiBsaW5rPVwiL1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5ob3ROZXdzQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG90TmV3cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpdGVtLmlkfSBjbGFzc05hbWU9e3N0eWxlcy5ob3ROZXdzSXRlbX0gID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW0ubGlua30+e2l0ZW0udGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMucmVjb21tZW5kQ2lyY2xlICYmIDxSZWNvbW1lbmRDaXJjbGUgey4uLnByb3BzLnJlY29tbWVuZENpcmNsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lQ29udGVudDsiLCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hvbWVfYmFubmVyLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IExlZnRVc2VyQ2FyZCBmcm9tIFwiLi4vLi4vd2lkZ2V0L0xlZnRVc2VyQ2FyZFwiO1xyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL3N0b3JlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyByb3V0ZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBzaG93T3JIaWRlTG9naW4gfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvc2xpY2VzL2xvZ2luU2xpY2VcIjtcclxuaW1wb3J0IHsgc3dpdGNoVXNlclBhZ2VTZWxlY3RJbmRleCB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9zbGljZXMvbWluZVNsaWNlXCI7XHJcblxyXG52YXIgc3RvcCA9IGZhbHNlO1xyXG52YXIgdGltZXJJRDtcclxudmFyIHRpbWVySURNb3ZlO1xyXG52YXIgcmVhbEluZGV4ID0gMDtcclxuXHJcbmNvbnN0IEhvbWVCYW5uZXI6IE5leHRQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBpc0xvZ2luLCB1c2VyIH0gPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2NkbjYuaGFpdG91LmNjL2hvbWVwYWdlLzE2MzI4MTMzOTQucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLG1fZml4ZWQsd182OTUsaF8zNzhcIixcclxuICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL3N4aC5oYWl0b3UuY2MvMTAyNHh6aFwiLFxyXG4gICAgICAgICAgICBcImJnXCI6ICcjMzg5OUZGJyxcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIuenkeWkp+iur+mjnjEwMjTmoKHmi5vkvJpcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9jZG42LmhhaXRvdS5jYy9ob21lcGFnZS8xNjMyODE1ODA5LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxtX2ZpeGVkLHdfNjk1LGhfMzc4XCIsXHJcbiAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHA6Ly94eXpwLmhhaXRvdS5jYy9hcnRpY2xlLzIyNjEzNzYuaHRtbFwiLFxyXG4gICAgICAgICAgICBcImJnXCI6ICcjMUU3M0YyJyxcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkFUTOaWsOiDvea6kOmbhuWbolwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogMyxcclxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2NkbjYuaGFpdG91LmNjL2hvbWVwYWdlLzE2MjkxMDA0NzkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLG1fZml4ZWQsd182OTUsaF8zNzhcIixcclxuICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL3h5enAuaGFpdG91LmNjL2FydGljbGUvMjE1MjM3OS5odG1sXCIsXHJcbiAgICAgICAgICAgIFwiYmdcIjogJyM4RENERjEnLFxyXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi5b636YKm5b+r6YCSXCJcclxuICAgICAgICB9LFxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBtZW51cyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb19oZWxwZXIucG5nXCIsXHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCLmiJHnmoTmsYLliqlcIixcclxuICAgICAgICAgICAgXCJsaW5rXCI6IFwiL3VzZXIvXCIgKyB1c2VyPy5pZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgIFwiaW1hZ2VcIjogXCIvc3RhdGljL2ltYWdlcy9pY29fb3JkZXIucG5nXCIsXHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCLmiJHnmoTorqLljZVcIixcclxuICAgICAgICAgICAgXCJsaW5rXCI6IFwiXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICBcImltYWdlXCI6IFwiL3N0YXRpYy9pbWFnZXMvaWNvX25vdGlmeS5wbmdcIixcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIuezu+e7n+mAmuefpVwiLFxyXG4gICAgICAgICAgICBcImxpbmtcIjogXCJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IDMsXHJcbiAgICAgICAgICAgIFwiaW1hZ2VcIjogXCIvc3RhdGljL2ltYWdlcy9pY29fY29udHJhY3QucG5nXCIsXHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCLogZTns7vkurpcIixcclxuICAgICAgICAgICAgXCJsaW5rXCI6IFwiXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiA0LFxyXG4gICAgICAgICAgICBcImltYWdlXCI6IFwiL3N0YXRpYy9pbWFnZXMvaWNvX2dyb3VwLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi5oiR55qE576k6IGKXCIsXHJcbiAgICAgICAgICAgIFwibGlua1wiOiBcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogNSxcclxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb19jaXJjbGUucG5nXCIsXHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCLmiJHnmoTluK7lnIhcIixcclxuICAgICAgICAgICAgXCJsaW5rXCI6IFwiL3VzZXIvXCIgKyB1c2VyPy5pZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IDYsXHJcbiAgICAgICAgICAgIFwiaW1hZ2VcIjogXCIvc3RhdGljL2ltYWdlcy9pY29fcnoucG5nXCIsXHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCLlrp7lkI3orqTor4FcIixcclxuICAgICAgICAgICAgXCJsaW5rXCI6IFwiXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiA3LFxyXG4gICAgICAgICAgICBcImltYWdlXCI6IFwiL3N0YXRpYy9pbWFnZXMvaWNvX3NjLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi56ev5YiG5ZWG5Z+OXCIsXHJcbiAgICAgICAgICAgIFwibGlua1wiOiBcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogOCxcclxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb193b3JrLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi5oub6IGY5YW86IGMXCIsXHJcbiAgICAgICAgICAgIFwibGlua1wiOiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuICAgIGNvbnN0IFtzZWxlY3RJbmRleCwgc2V0U2VsZWN0SW5kZXhdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHN0YXJ0VGltZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVySURNb3ZlKTtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcklEKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHN0YXJ0VGltZSgpIHtcclxuICAgICAgICB0aW1lcklEID0gc2V0SW50ZXJ2YWwoXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaEJhbm5lcihyZWFsSW5kZXggKyAxKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNTAwMFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3dpdGNoQmFubmVyKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoc3RvcCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluZGV4ID0gaW5kZXggJSBkYXRhLmxlbmd0aDtcclxuICAgICAgICBpZiAocmVhbEluZGV4ICE9IGluZGV4KSB7XHJcbiAgICAgICAgICAgIHJlYWxJbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RJbmRleChpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGJhbm5lciBpdGVt54K55Ye75LqL5Lu2XHJcbiAgICBmdW5jdGlvbiBpdGVtQ2xpY2soaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGRvTG9uZ1N0b3BDbGljayhpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25NeU1vdXNlRW50ZXIoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIC8vIOWcqOS4gOS4quaOp+S7tuS4iuWBnOeVmW7np5Lop6blj5Hplb/ml7bpl7TlgZznlZnkuovku7ZcclxuICAgICAgICB0aW1lcklETW92ZSA9IHNldEludGVydmFsKFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkb0xvbmdTdG9wQ2xpY2soaW5kZXgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxMDAwXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk15TW91c2VMZWF2ZSgpIHtcclxuICAgICAgICAvLyDmuIXpmaTliKTlrprmmK/lkKbplb/ml7bpl7TlgZznlZnnmoTlrprml7blmahcclxuICAgICAgICBjbGVhckludGVydmFsKHRpbWVySURNb3ZlKTtcclxuICAgICAgICBpZiAoc3RvcCkge1xyXG4gICAgICAgICAgICBzdG9wID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIOS4unN0b3Dml7bvvIzooajnpLrlnKjmn5DkuKrkuIrpnaLplb/ml7bpl7TlgZznlZnkuobvvIznp7vlvIDml7bvvIzpnIDph43lkK/oh6rliqjliIfmjaLlrprml7blmahcclxuICAgICAgICAgICAgc3RhcnRUaW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOmVv+aXtumXtOWBnOeVmeS6i+S7tlxyXG4gICAgZnVuY3Rpb24gZG9Mb25nU3RvcENsaWNrKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICAvLyDlgZzmraLoh6rlt7FcclxuICAgICAgICBjbGVhckludGVydmFsKHRpbWVySURNb3ZlKTtcclxuICAgICAgICBzdG9wID0gdHJ1ZTtcclxuICAgICAgICAvLyDplb/ml7bpl7TlgZznlZnlgZzmraLoh6rliqjliIfmjaLnmoTlrprml7blmahcclxuICAgICAgICBjbGVhckludGVydmFsKHRpbWVySUQpO1xyXG4gICAgICAgIGlmIChyZWFsSW5kZXggIT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgcmVhbEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdEluZGV4KGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pu05aSa5Yqf6IO9aXRlbeeCueWHu+S6i+S7tlxyXG4gICAgY29uc3QgZGVhbENsaWNrID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICBpZiAoaXNMb2dpbiAmJiB1c2VyKSB7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChzd2l0Y2hVc2VyUGFnZVNlbGVjdEluZGV4KHsga2V5OiB1c2VyLmlkLCBpbmRleDogMSB9KSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PSA1KSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChzd2l0Y2hVc2VyUGFnZVNlbGVjdEluZGV4KHsga2V5OiB1c2VyLmlkLCBpbmRleDogMiB9KSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogbWVudXNbaW5kZXhdLmxpbmssXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2hvd0xvZ2luKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dMb2dpbiA9ICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChzaG93T3JIaWRlTG9naW4odHJ1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYW5uZXJ9PlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkgY2xhc3NOYW1lPXtbc3R5bGVzLmJhbm5lckl0ZW0sIGluZGV4ID09IHNlbGVjdEluZGV4ID8gc3R5bGVzLml0ZW1TaG93IDogc3R5bGVzLml0ZW1IaWRlXS5qb2luKCcgJyl9IGtleT17aXRlbS5pZH0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBpdGVtLmJnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbUltZ30gaHJlZj17aXRlbS5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS51cmx9IHRpdGxlPXtpdGVtLnRpdGxlfSB3aWR0aD1cIjcwMHB4XCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYW5uZXJJbmRpY2F0b3J9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmRpY2F0b3JDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVMZWZ0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExlZnRVc2VyQ2FyZCBjbGFzc05hbWU9e3N0eWxlcy51c2VyQ2FyZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZGljYXRvcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tzdHlsZXMuaW5kaWNhdG9ySXRlbSwgaW5kZXggPT09IHNlbGVjdEluZGV4ID8gc3R5bGVzLmluZGljYXRvckl0ZW1DaGVjayA6IFwiXCJdLmpvaW4oJyAnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4geyBvbk15TW91c2VFbnRlcihpbmRleCkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4geyBvbk15TW91c2VMZWF2ZSgpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpdGVtQ2xpY2soaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51UmlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMubWVudVJpZ2h0VGl0bGV9PuabtOWkmuWKn+iDvTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5tZW51Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVudXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPXtzdHlsZXMubWVudUl0ZW19IG9uQ2xpY2s9eygpID0+IHsgZGVhbENsaWNrKGluZGV4KSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudUltZ0Rpdn0gc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyBpdGVtLmltYWdlICsgJyknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLm1lbnVJbWd9IHNyYz17aXRlbS5pbWFnZX0gYWx0PVwiXCIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZUJhbm5lcjsiLCJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hvbWVfY29udGVudF9pdGVtLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IEhlbHBlckl0ZW0gZnJvbSAnLi4vaGVscGVySXRlbS9IZWxwZXJJdGVtJztcclxuaW1wb3J0IHsgSU1lbnVJdGVtIH0gZnJvbSAnLi4vaG9tZUNlbnRlci9Ib21lQ2VudGVyJztcclxuXHJcbmNvbnN0IEhvbWVDb250ZW50SXRlbTogTmV4dFBhZ2U8SU1lbnVJdGVtPiA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPXsnbicgKyBwcm9wcy5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuaXRlbUNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRUaXRsZX0+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57cHJvcHMudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubG9va01vcmV9Puafpeeci+abtOWkmjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLmxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8SGVscGVySXRlbSBrZXk9e2l0ZW0uaWR9IHsuLi5pdGVtfSAvPjtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVDb250ZW50SXRlbTsiLCJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBzdHlsZSBmcm9tICcuL2hlbHBlcl9pdGVtLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHR5cGUgeyBOYW1lSWRCZWFuIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvc2VydmljZXMvaG9tZSc7XHJcbmltcG9ydCB0eXBlIHsgSGVscGVySXRlbURhdGEgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9zZXJ2aWNlcy9oZWxwZXInO1xyXG5pbXBvcnQgeyBnZXRIZWxwTW9uZXksIGdldFRpbWVTdHJpbmdCeU5vdyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgSGVscGVySXRlbTogTmV4dFBhZ2U8SGVscGVySXRlbURhdGE+ID0gKHByb3BzKSA9PiB7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEhlbHBUaW1lKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHN0YXJ0VGltZSA9IGdldFRpbWVTdHJpbmdCeU5vdyhzdGFydCwgXCLkuI3pmZBcIik7XHJcbiAgICAgICAgbGV0IGVuZFRpbWUgPSBnZXRUaW1lU3RyaW5nQnlOb3coZW5kLCBcIuS4jemZkFwiKTtcclxuICAgICAgICBpZiAoc3RhcnRUaW1lID09PSBcIuS4jemZkFwiICYmIGVuZFRpbWUgPT09IFwi5LiN6ZmQXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwi5LiN6ZmQXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdGFydFRpbWUgKyBcIiAtIFwiICsgZW5kVGltZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQZW9wbGVOdW1iZXIobnVtOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAobnVtIDw9IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwi5LiN6ZmQXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudW0gKyBcIuS6ulwiO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEFkZHJlc3MocHJvdmluY2U6IE5hbWVJZEJlYW4sIGNpdHk6IE5hbWVJZEJlYW4sIGFyZWE6IE5hbWVJZEJlYW4pIHtcclxuICAgICAgICBpZiAocHJvdmluY2UgPT0gbnVsbCB8fCBwcm92aW5jZS5pZCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIuS4jemZkFwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChjaXR5ID09IG51bGwgfHwgY2l0eS5pZCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvdmluY2UubmFtZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChhcmVhID09IG51bGwgfHwgYXJlYS5pZCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNpdHkubmFtZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNpdHkubmFtZSArIFwiIFwiICsgYXJlYS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaXRlbUNvbnRlbnR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50aXRsZX0+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e3N0eWxlLmhlbHBOYW1lfT57cHJvcHMudHlwZS5jaGlsZC5uYW1lICsgJy0nICsgcHJvcHMudGl0bGV9PC9oND5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5oZWxwTW9uZXl9PntnZXRIZWxwTW9uZXkocHJvcHMubG93ZXN0X3ByaWNlLCBwcm9wcy5oaWdoZXN0X3ByaWNlKX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmhlbHBUaW1lfT5cclxuICAgICAgICAgICAge1wi5pe26Ze077yaXCIgKyBnZXRIZWxwVGltZShwcm9wcy5zdGFydF90aW1lLCBwcm9wcy5lbmRfdGltZSl9XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUucGVvcGxlTnVtYmVyfT57XCLkurrmlbDvvJpcIiArIGdldFBlb3BsZU51bWJlcihwcm9wcy5wZW9wbGVfbnVtYmVyKX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZS5ob3RJbWd9IHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb196aGVuZ21pbmcucG5nXCIgd2lkdGg9XCIyMHB4XCIgc3R5bGU9e3sgZGlzcGxheTogcHJvcHMuZmluaXNoX3Byb3ZlID8gXCJibG9ja1wiIDogXCJub25lXCIgfX0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlLmhvdEltZ30gc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvX2FueGlvdXMucG5nXCIgd2lkdGg9XCIyMHB4XCIgc3R5bGU9e3sgZGlzcGxheTogcHJvcHMuaXNfdXJnZW50ID8gXCJibG9ja1wiIDogXCJub25lXCIgfX0gYWx0PVwiXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmhlbHBVc2VyfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvdXNlci9cIiArIHByb3BzLnNlbmRlci5pZH0gPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlLnVzZXJIZWFkfVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJvcHMuc2VuZGVyLmF2YXRhciA9PSBudWxsID8gXCJodHRwOi8vd3l5aHViYW5nLm9zcy1jbi1jaGVuZ2R1LmFsaXl1bmNzLmNvbS9kZWZhdWx0L2RlZmF1bHRfdXNlci5wbmdcIiA6IHByb3BzLnNlbmRlci5hdmF0YXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNTBweFwiIHdpZHRoPVwiNTBweFwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS51c2VyTmFtZX0+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuc2VuZGVyLmFsaWFzID09IG51bGwgPyBwcm9wcy5zZW5kZXIubmlja25hbWUgOiBwcm9wcy5zZW5kZXIuYWxpYXN9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5hZGRyZXNzfT5cclxuICAgICAgICAgICAgICAgIHtnZXRBZGRyZXNzKHByb3BzLnByb3ZpbmNlLCBwcm9wcy5jaXR5LCBwcm9wcy5hcmVhKX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWxwZXJJdGVtOyIsImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgSG9tZUNvbnRlbnRJdGVtIGZyb20gXCIuLi9jb250ZW50SXRlbS9Ib21lQ29udGVudEl0ZW1cIjtcclxuaW1wb3J0IHR5cGUgeyBIZWxwZXJJdGVtRGF0YSB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3NlcnZpY2VzL2hlbHBlcic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElNZW51SXRlbSB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGltYWdlOiBzdHJpbmc7XHJcbiAgICBsaXN0OiBIZWxwZXJJdGVtRGF0YVtdXHJcbn1cclxuXHJcbmludGVyZmFjZSBJTWVudSB7XHJcbiAgICBkYXRhOiBJTWVudUl0ZW1bXTtcclxufVxyXG5cclxuY29uc3QgSG9tZUNlbnRlcjogTmV4dFBhZ2U8SU1lbnU+ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLmRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8SG9tZUNvbnRlbnRJdGVtIGtleT17aXRlbS5pZH0gey4uLml0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVDZW50ZXI7IiwiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9jaXJjbGVfaXRlbS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB0eXBlIHsgQ2lyY2xlQmVhbiB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3NlcnZpY2VzL2NpcmNsZSc7XHJcblxyXG5jb25zdCBDaXJjbGVJdGVtOiBOZXh0UGFnZTxDaXJjbGVCZWFuPiA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEZvbGxvdyh0eXBlOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodHlwZSA9PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCLlt7LnlLPor7dcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gMSB8fCB0eXBlID09IDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwi5bey5Yqg5YWlXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09IDMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwi5ZyI5Li7XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIueUs+ivt1wiO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2lyY2xlSXRlbX0+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlLmxvZ299XHJcbiAgICAgICAgICAgIHNyYz17cHJvcHMuYXZhdGFyID09IG51bGwgPyBcImh0dHA6Ly93eXlodWJhbmcub3NzLWNuLWNoZW5nZHUuYWxpeXVuY3MuY29tL2RlZmF1bHQvZGVmYXVsdF9ncm91cC5wbmdcIiA6IHByb3BzLmF2YXRhcn1cclxuICAgICAgICAgICAgd2lkdGg9XCIzNXB4XCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMzVweFwiXHJcbiAgICAgICAgICAgIGFsdD1cIlwiIC8+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jaXJjbGVDb250ZW50fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNlbnRlckNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGUuY2lyY2xlTmFtZX0+e3Byb3BzLmNpcmNsZV9uYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLmRlc2N9Pntwcm9wcy5kZXNjcmlwdGlvbiA9PSBudWxsID8gXCLnvqTkuLvlvojnpZ7np5jvvIzku4DkuYjpg73msqHlhpl+XCIgOiBwcm9wcy5kZXNjcmlwdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5mb2xsb3d9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBwcm9wcy5qb2luX3R5cGUgPT0gMCA/ICcjMzM4OEZGJyA6ICcjQ0JDRkREJyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogcHJvcHMuam9pbl90eXBlID09IDAgPyAnIzMzODhGRicgOiAnI0NCQ0ZERCcsXHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIHtnZXRGb2xsb3cocHJvcHMuam9pbl90eXBlKX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaXJjbGVJdGVtOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL21vZHVsZV90aXRsZS5tb2R1bGUuc2Nzcyc7XHJcblxyXG5pbnRlcmZhY2UgSU1vZHVsZVRpdGxlIHtcclxuICAgIHRpdGxlOiBzdHJpbmcsXHJcbiAgICBsaW5rOiBzdHJpbmcsXHJcbiAgICBpbWFnZT86IHN0cmluZyxcclxufVxyXG5cclxuY29uc3QgTW9kdWxlVGl0bGUgPSAocHJvcHM6IElNb2R1bGVUaXRsZSkgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVDb250ZW50fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRCb3JkZXJ9IC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9IHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogcHJvcHMuaW1hZ2UgPT0gbnVsbCA/IFwiXCIgOiBcInVybChcIiArIHByb3BzLmltYWdlICsgXCIpXCIgfX0+e3Byb3BzLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3BzLmxpbmsgJiYgPGEgY2xhc3NOYW1lPXtzdHlsZXMubW9yZX0gaHJlZj17cHJvcHMubGlua30+5pu05aSaPC9hPlxyXG4gICAgICAgIH1cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2R1bGVUaXRsZTsiLCJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2NvbXBvbmVudHMvd2lkZ2V0L2xlZnRfbWVudV93aWRnZXQubW9kdWxlLnNjc3MnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMZWZ0TWVudUJlYW4ge1xyXG4gICAgaWQ6IG51bWJlcixcclxuICAgIGltYWdlOiBzdHJpbmcsXHJcbiAgICB0aXRsZTogc3RyaW5nLFxyXG4gICAgbnVtOiBudW1iZXIsXHJcbn1cclxuXHJcbmludGVyZmFjZSBJTGVmdE1lbnVXaWRnZXQge1xyXG4gICAgaWQ/OiBzdHJpbmcsXHJcbiAgICBtZW51TGlzdDogTGVmdE1lbnVCZWFuW10sXHJcbiAgICBzZWxlY3RJbmRleDogbnVtYmVyLFxyXG4gICAgbWVudUl0ZW1DbGljaz86IChpbmRleDogbnVtYmVyKSA9PiB2b2lkXHJcbn1cclxuXHJcblxyXG5jb25zdCBMZWZ0TWVudVdpZGdldDogTmV4dFBhZ2U8SUxlZnRNZW51V2lkZ2V0PiA9IChcclxuICAgIHtcclxuICAgICAgICBpZCxcclxuICAgICAgICBtZW51TGlzdCA9IFtdLFxyXG4gICAgICAgIHNlbGVjdEluZGV4ID0gMCxcclxuICAgICAgICBtZW51SXRlbUNsaWNrXHJcbiAgICB9XHJcbikgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgaWQ9e2lkfSBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50TGVmdFB9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdE1lbnVMaXN0Q2hlY2t9IHN0eWxlPXt7IHRvcDogNSArIHNlbGVjdEluZGV4ICogNDAgKyBcInB4XCIgfX0+PC9kaXY+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmxlZnRNZW51TGlzdH0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1lbnVMaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aXRlbS5pZH0gb25DbGljaz17KCkgPT4geyBtZW51SXRlbUNsaWNrICYmIG1lbnVJdGVtQ2xpY2soaW5kZXgpIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5tZW51SXRlbX0gc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyBpdGVtLmltYWdlICsgJyknIH19PntpdGVtLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZX0gc3R5bGU9e3sgdmlzaWJpbGl0eTogaXRlbS5udW0gPD0gMCA/IFwiaGlkZGVuXCIgOiBcInZpc2libGVcIiB9fT57aXRlbS5udW19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMZWZ0TWVudVdpZGdldDsiLCJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2NvbXBvbmVudHMvd2lkZ2V0L2xlZnRfdXNlcl9jYXJkLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIi4uLy4uL3N0b3JlL3N0b3JlXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBzaG93T3JIaWRlTG9naW4gfSBmcm9tIFwiLi4vLi4vc3RvcmUvc2xpY2VzL2xvZ2luU2xpY2VcIjtcclxuXHJcbmludGVyZmFjZSBJTGVmdFVzZXJDYXJkIHtcclxuICAgIGNsYXNzTmFtZT86IHt9LFxyXG4gICAgZGVzY01heExpbmU/OiBudW1iZXJcclxufVxyXG5cclxuY29uc3QgTGVmdFVzZXJDYXJkOiBOZXh0UGFnZTxJTGVmdFVzZXJDYXJkPiA9ICh7XHJcbiAgICBkZXNjTWF4TGluZSA9IDQsXHJcbiAgICBjbGFzc05hbWVcclxufSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgaXNMb2dpbiwgdXNlciB9ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IFtpc1NpZ24sIHNldFNpZ25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGRvU2lnbiA9ICgpID0+IHtcclxuICAgICAgICBzZXRTaWduKCFpc1NpZ24pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRvTG9naW4gPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goc2hvd09ySGlkZUxvZ2luKHRydWUpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e1tzdHlsZXMubWVudUxlZnQsIGNsYXNzTmFtZV0uam9pbihcIiBcIil9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lnblVzZXJ9PlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJIZWFkZXJ9IHNyYz17dXNlcj8uYXZhdGFyID8gdXNlcj8uYXZhdGFyIDogXCIvc3RhdGljL2ltYWdlcy9kZWZhdWx0X3VzZXIucG5nXCJ9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDxzcGFuPntpc0xvZ2luICYmIHVzZXI/Lm5pY2tuYW1lID8gdXNlcj8ubmlja25hbWUgOiAn5ri45a6i6Lqr5Lu9J308L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudXNlckRlc2N9IHN0eWxlPXt7IFdlYmtpdExpbmVDbGFtcDogZGVzY01heExpbmUsIG1heExpbmVzOiBkZXNjTWF4TGluZSB9fT57aXNMb2dpbiA/IHVzZXI/LmRlc2NyaXB0aW9uIDogXCJcIn08L3A+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpc0xvZ2luID9cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnNpZ25CdG59XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBpc1NpZ24gPyBcIiNGMUYyRjNcIiA6IFwiI2Q5ZThmY1wiLCBjb2xvcjogaXNTaWduID8gXCIjQkFCREMzXCIgOiBcIiMzMzg4RkZcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2RvU2lnbn0+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzU2lnbiA/ICflt7Lnrb7liLAnIDogJ+etvuWIsCd9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+IDpcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luQnRufSBvbkNsaWNrPXtkb0xvZ2lufT7nmbvlvZU8L3NwYW4+XHJcbiAgICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlZnRVc2VyQ2FyZDsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9mb290ZXIubW9kdWxlLnNjc3NcIjtcclxuXHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvZm9vdGVyLnBuZ1wiIHdpZHRoPVwiMTAwJVwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPuWFs+S6juaIkeS7rDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiXCI+572R56uZ5LuL57uNPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiXCI+5YWN6LSj5aOw5piOPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiXCI+5Y+L5oOF6ZO+5o6lPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+5Lqn5ZOB5pyN5YqhPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJcIj7luK7lnIg8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJcIj7lrp7lkI3orqTor4E8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJcIj7msYLogYzmi5vogZg8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJcIj7mm53lhYnlj7A8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7luK7liqnkuK3lv4M8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIlwiPuW4uOingemXrumimDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIlwiPuacjeWKoeS7i+e7jTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIlwiPuiBlOezu+aIkeS7rDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZG93bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZG93bk90aGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvYXBwX2Rvd24ucG5nXCIgd2lkdGg9XCI4MHB4XCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFQUOS4i+i9vVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kb3duT3RoZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9hcHBfZG93bi5wbmdcIiB3aWR0aD1cIjgwcHhcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5omL5py6572R6aG154mIXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRvd25PdGhlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2FwcF9kb3duLnBuZ1wiIHdpZHRoPVwiODBweFwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDlvq7kv6HlsI/nqIvluo9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNvcHl9PiDCqSBDb3B5cmlnaHQgMjAyMS4g5ZC05rSL5q+FXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuY29weUxpbmt9IGhyZWY9XCJodHRwOi8vYmVpYW4ubWlpdC5nb3YuY24vXCIgdGFyZ2V0PVwiYmxhbmtcIiByZWw9XCJub2ZvbGxvd1wiPumEgklDUOWkhzIwMjEwMDI0MTjlj7c8L2E+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9oZWFkZXIubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgd3JhcHBlciwgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICcuLi9zdG9yZS9zdG9yZSc7XHJcbmltcG9ydCB7IHNob3dPckhpZGVMb2dpbiB9IGZyb20gJy4uL3N0b3JlL3NsaWNlcy9sb2dpblNsaWNlJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZ2V0U2Nyb2xsYmFyV2lkdGggfSBmcm9tICcuLi91dGlscy91dGlsJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBzd2l0Y2hVc2VyUGFnZVNlbGVjdEluZGV4IH0gZnJvbSAnLi4vc3RvcmUvc2xpY2VzL21pbmVTbGljZSc7XHJcbmltcG9ydCB7IG91dExvZ2luIH0gZnJvbSAnLi4vc3RvcmUvc2xpY2VzL3VzZXJTbGljZSc7XHJcblxyXG5pbnRlcmZhY2UgSUhlYWRlciB7XHJcbiAgICBwYWdlOiBudW1iZXIsXHJcbiAgICB1c2VyQ2VudGVyQ2hhbmdlPzogKGluZGV4OiBudW1iZXIpID0+IHZvaWRcclxufVxyXG5cclxuY29uc3QgSGVhZGVyOiBOZXh0UGFnZTxJSGVhZGVyPiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgaXNTaG93TG9naW4gPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmxvZ2luLmlzU2hvd0xvZ2luKTtcclxuICAgIGNvbnN0IHsgaXNMb2dpbiwgdXNlciB9ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IHVzZXJDZW50ZXJMaXN0ID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb19teV9jZW50ZXIucG5nXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIuaIkeeahOS4u+mhtVwiLFxyXG4gICAgICAgICAgICBsaW5rOiBcIi91c2VyL1wiICsgdXNlcj8uaWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb19teV9jaXJjbGUucG5nXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIuaIkeeahOW4ruWciFwiLFxyXG4gICAgICAgICAgICBsaW5rOiBcIi91c2VyL1wiICsgdXNlcj8uaWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb19jb2xsZWN0LnBuZ1wiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLmiJHnmoTmlLbol49cIixcclxuICAgICAgICAgICAgbGluazogXCIvdXNlci9cIiArIHVzZXI/LmlkXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgICBpbWFnZTogXCIvc3RhdGljL2ltYWdlcy9pY29fc2V0dGluZy5wbmdcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwi57O757uf6K6+572uXCIsXHJcbiAgICAgICAgICAgIGxpbms6IFwiXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb19vdXRfbG9naW4ucG5nXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIumAgOWHuueZu+W9lVwiLFxyXG4gICAgICAgICAgICBsaW5rOiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBzZW5kTGlzdCA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgICBpbWFnZTogXCIvc3RhdGljL2ltYWdlcy9pY29fcmVsZWFzZV9oZWxwLnBuZ1wiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLlj5HmsYLliqlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgaW1hZ2U6IFwiL3N0YXRpYy9pbWFnZXMvaWNvX3JlbGVhc2VfZHluYW1pYy5wbmdcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwi5Y+R5Yqo5oCBXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb19yZWxlYXNlX3d6LnBuZ1wiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLlj5Hmlofnq6BcIlxyXG4gICAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgW2lzU2hvd1VzZXJDZW50ZXIsIHNldFNob3dVc2VyQ2VudGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc1Nob3dTZW5kRHluYW1pYywgc2V0U2hvd1NlbmREeW5hbWljXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICAvLyDmuLLmn5PlrozmiJDlm57osINcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlRGlhbG9nKTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IGhpZGVEaWFsb2cgPSAoZXY6IGFueSkgPT4ge1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBldi50YXJnZXQgfHwgZXYuc3JjRWxlbWVudDtcclxuICAgICAgICBsZXQgaWQgPSB0YXJnZXQuaWQ7XHJcbiAgICAgICAgaWYgKGlkICE9PSBcInVzZXJIZWFkXCIpIHtcclxuICAgICAgICAgICAgc2V0U2hvd1VzZXJDZW50ZXIoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaWQgIT09IFwic2VuZER5bmFtaWNcIikge1xyXG4gICAgICAgICAgICBzZXRTaG93U2VuZER5bmFtaWMoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1c2VyQ2VudGVyU2hvdygpIHtcclxuICAgICAgICBzZXRTaG93VXNlckNlbnRlcighaXNTaG93VXNlckNlbnRlcik7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHNlbmRTaG93KCkge1xyXG4gICAgICAgIHNldFNob3dTZW5kRHluYW1pYyghaXNTaG93U2VuZER5bmFtaWMpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXNlckNlbnRlckl0ZW1DbGljayA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgaWYgKGluZGV4IDwgMykge1xyXG4gICAgICAgICAgICBpZiAocHJvcHMudXNlckNlbnRlckNoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMudXNlckNlbnRlckNoYW5nZShpbmRleCA9PSAwID8gMCA6IGluZGV4ICsgMSlcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHN3aXRjaFVzZXJQYWdlU2VsZWN0SW5kZXgoeyBrZXk6IHVzZXIuaWQsIGluZGV4OiBpbmRleCA9PSAwID8gMCA6IGluZGV4ICsgMSB9KSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogdXNlckNlbnRlckxpc3RbaW5kZXhdLmxpbmtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09IDMpIHtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6IHVzZXJDZW50ZXJMaXN0W2luZGV4XS5saW5rXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PSA0KSB7XHJcbiAgICAgICAgICAgIC8vIOmAgOWHuueZu+W9lVxyXG4gICAgICAgICAgICBkaXNwYXRjaChvdXRMb2dpbigpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZW5kRHluYW1pY0l0ZW1DbGljayA9IChldjogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLngrnlh7vkuoZcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd0xvZ2luID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHNob3dPckhpZGVMb2dpbih0cnVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0gc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiBpc1Nob3dMb2dpbiA/IChnZXRTY3JvbGxiYXJXaWR0aCgpICsgJ3B4JykgOiAnMHB4JyB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIuLi9cIj48aW1nIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2xvZ28ucG5nXCIgdGl0bGU9XCLkupLluK5cIiBhbHQ9XCJcIiAvPjwvYT5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5tZW51fT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwcm9wcy5wYWdlID09PSAwID8gc3R5bGVzLm1lbnVTZWxlY3QgOiAnJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGEgY2xhc3NOYW1lPXtzdHlsZXMubWVudUFIb21lfT7pppbpobU8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cHJvcHMucGFnZSA9PT0gMSA/IHN0eWxlcy5tZW51U2VsZWN0IDogJyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2hlbHBlci9saXN0XCI+PGEgY2xhc3NOYW1lPXtzdHlsZXMubWVudUFIZWxwfT7msYLliqk8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cHJvcHMucGFnZSA9PT0gMiA/IHN0eWxlcy5tZW51U2VsZWN0IDogJyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2R5bmFtaWNcIj48YSBjbGFzc05hbWU9e3N0eWxlcy5tZW51QUR5bmFtaWN9PuWKqOaAgTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwcm9wcy5wYWdlID09PSAzID8gc3R5bGVzLm1lbnVTZWxlY3QgOiAnJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2lyY2xlXCI+PGEgY2xhc3NOYW1lPXtzdHlsZXMubWVudUFDaXJjbGV9PuW4ruWciDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2h9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi5pCc57SiIOaxguWKqS/liqjmgIEv5ZyI5a2QL+aWh+eroFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoSWNvbn0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VySW5mb30+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0xvZ2luID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJNZW51fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMudXNlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJ1c2VySGVhZFwiIHNyYz17dXNlcj8uYXZhdGFyID8gdXNlcj8uYXZhdGFyIDogJy9zdGF0aWMvaW1hZ2VzL2RlZmF1bHRfdXNlci5wbmcnfSBvbkNsaWNrPXsoKSA9PiB7IHVzZXJDZW50ZXJTaG93KCkgfX0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyQ2VudGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdmlzaWJpbGl0eTogaXNTaG93VXNlckNlbnRlciA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy51c2VyQ2VudGVyTmFtZX0+e3VzZXI/Lm5pY2tuYW1lID8gdXNlcj8ubmlja25hbWUgOiAn5pyq55m75b2VJ308L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlckNlbnRlckxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy51c2VyQ2VudGVySXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgaXRlbS5pbWFnZSArIFwiKVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyB1c2VyQ2VudGVySXRlbUNsaWNrKGluZGV4KSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvaGVhZGVyX21lc3NhZ2UucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZUhpbnR9Pjk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJzZW5kRHluYW1pY1wiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2hlYWRlcl9zZW5kLnBuZ1wiIG9uQ2xpY2s9eygpID0+IHsgc2VuZFNob3coKSB9fSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlbmREeW5hbWljfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdmlzaWJpbGl0eTogaXNTaG93U2VuZER5bmFtaWMgPyAndmlzaWJsZScgOiAnaGlkZGVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRMaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpdGVtLmlkfSBjbGFzc05hbWU9e3N0eWxlcy5zZW5kRG5hbWljSXRlbX0gb25DbGljaz17c2VuZER5bmFtaWNJdGVtQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlfSB3aWR0aD1cIjQwcHhcIiBoZWlnaHQ9XCI0MHB4XCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRvd25Mb2dpbn0gb25DbGljaz17c2hvd0xvZ2lufT7ngrnlh7vnmbvlvZU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7IiwiXHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IFJlYWN0Tm9kZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9sYXlvdXQubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgTGF5b3V0OiBOZXh0UGFnZTx7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG4gICAga2V5d29yZHM/OiBzdHJpbmc7XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlIHwgUmVhY3ROb2RlW107XHJcbn0+ID0gKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBrZXl3b3JkcywgY2xhc3NOYW1lLCBjaGlsZHJlbiB9KSA9PiB7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0b1RvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b1RvcCcpO1xyXG4gICAgICAgICAgICBpZiAodG9Ub3AgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDEwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0b1RvcC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvVG9wLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDwgMTMwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvVG9wLnN0eWxlLnJpZ2h0ID0gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCAtIDEzMDAgKyB3aW5kb3cucGFnZVhPZmZzZXQpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0b1RvcC5zdHlsZS5yaWdodCA9IFwiY2FsYygoMTAwJSAtIDEzMDBweCkgLyAyIC0gNTBweCArIFwiICsgd2luZG93LnBhZ2VYT2Zmc2V0ICsgXCIpXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiA8PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+e3RpdGxlIHx8ICfkupLluK4nfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9e2tleXdvcmRzIHx8ICcnfSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbiB8fCAnJ30gLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9uIHx8ICcnfSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57Y2hpbGRyZW59PC9tYWluPlxyXG5cclxuICAgICAgICA8aW1nIGlkPVwidG9Ub3BcIiBjbGFzc05hbWU9e3N0eWxlcy50b1RvcH0gc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvX2dvX3RvcC5wbmdcIiB3aWR0aD1cIjQwcHhcIiB0aXRsZT1cIui/lOWbnumhtumDqFwiIGFsdD1cIlwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfX0gLz5cclxuICAgIDwvPlxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpO1xudmFyIF9yb3V0ZXIxID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xudmFyIF91c2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3QgcHJlZmV0Y2hlZCA9IHtcbn07XG5mdW5jdGlvbiBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVybjtcbiAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBjdXJMb2NhbGUgPSBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWU7XG59XG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCB7IHRhcmdldCAgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgcmV0dXJuIHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMjtcbn1cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKSB7XG4gICAgY29uc3QgeyBub2RlTmFtZSAgfSA9IGUuY3VycmVudFRhcmdldDtcbiAgICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCAmJiBhcy5pbmRleE9mKCcjJykgPj0gMCkge1xuICAgICAgICBzY3JvbGwgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gICAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICAgIHNoYWxsb3csXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgc2Nyb2xsXG4gICAgfSk7XG59XG5mdW5jdGlvbiBMaW5rKHByb3BzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZCA9IHtcbiAgICAgICAgICAgIGhyZWY6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wcyA9IE9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7XG4gICAgICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gPT0gbnVsbCB8fCB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZCA9IHtcbiAgICAgICAgICAgIGFzOiB0cnVlLFxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgICAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICAgICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgICAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgICAgICAgbG9jYWxlOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHMgPSBPYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO1xuICAgICAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XTtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAncmVwbGFjZScgfHwga2V5ID09PSAnc2Nyb2xsJyB8fCBrZXkgPT09ICdzaGFsbG93JyB8fCBrZXkgPT09ICdwYXNzSHJlZicgfHwga2V5ID09PSAncHJlZmV0Y2gnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICAgICAgY29uc3QgaGFzV2FybmVkID0gX3JlYWN0LmRlZmF1bHQudXNlUmVmKGZhbHNlKTtcbiAgICAgICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2U7XG4gICAgY29uc3Qgcm91dGVyID0gKDAsIF9yb3V0ZXIxKS51c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IGhyZWYgLCBhcyAgfSA9IF9yZWFjdC5kZWZhdWx0LnVzZU1lbW8oKCk9PntcbiAgICAgICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5ocmVmLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGFzOiBwcm9wcy5hcyA/ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmFzKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG4gICAgICAgIH07XG4gICAgfSwgW1xuICAgICAgICByb3V0ZXIsXG4gICAgICAgIHByb3BzLmhyZWYsXG4gICAgICAgIHByb3BzLmFzXG4gICAgXSk7XG4gICAgbGV0IHsgY2hpbGRyZW4gLCByZXBsYWNlICwgc2hhbGxvdyAsIHNjcm9sbCAsIGxvY2FsZSAgfSA9IHByb3BzO1xuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNoaWxkcmVuID0gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBudWxsLCBjaGlsZHJlbik7XG4gICAgfVxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGxldCBjaGlsZDtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiIFxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGRSZWYgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZjtcbiAgICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46ICcyMDBweCdcbiAgICB9KTtcbiAgICBjb25zdCBzZXRSZWYgPSBfcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZihlbCk7XG4gICAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgY2hpbGRSZWYsXG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZlxuICAgIF0pO1xuICAgIF9yZWFjdC5kZWZhdWx0LnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmICgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpO1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldO1xuICAgICAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgICAgIGxvY2FsZTogY3VyTG9jYWxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgYXMsXG4gICAgICAgIGhyZWYsXG4gICAgICAgIGlzVmlzaWJsZSxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBwLFxuICAgICAgICByb3V0ZXJcbiAgICBdKTtcbiAgICBjb25zdCBjaGlsZFByb3BzID0ge1xuICAgICAgICByZWY6IHNldFJlZixcbiAgICAgICAgb25DbGljazogKGUpPT57XG4gICAgICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGUpPT57XG4gICAgICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTtcbiAgICAgICAgfVxuICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICBwcmlvcml0eTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChwcm9wcy5wYXNzSHJlZiB8fCBjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSB7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9IHJvdXRlciAmJiByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiYgKDAsIF9yb3V0ZXIpLmdldERvbWFpbkxvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlcyk7XG4gICAgICAgIGNoaWxkUHJvcHMuaHJlZiA9IGxvY2FsZURvbWFpbiB8fCAoMCwgX3JvdXRlcikuYWRkQmFzZVBhdGgoKDAsIF9yb3V0ZXIpLmFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKTtcbiAgICB9XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKSk7XG59XG52YXIgX2RlZmF1bHQgPSBMaW5rO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmsuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gdm9pZCAwO1xuZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoO1xufVxuY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0ggPyAocGF0aCk9PntcbiAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO1xuICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nO1xuICAgIH1cbn0gOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSB2b2lkIDA7XG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGNiKSB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2Ioe1xuICAgICAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIDEpO1xufTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2s7XG5jb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2sgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGlkKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG59O1xuZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSBjYW5jZWxJZGxlQ2FsbGJhY2s7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubWFya0Fzc2V0RXJyb3IgPSBtYXJrQXNzZXRFcnJvcjtcbmV4cG9ydHMuaXNBc3NldEVycm9yID0gaXNBc3NldEVycm9yO1xuZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0ID0gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdDtcbmV4cG9ydHMuY3JlYXRlUm91dGVMb2FkZXIgPSBjcmVhdGVSb3V0ZUxvYWRlcjtcbnZhciBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZVwiKSk7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwO1xuZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksIG1hcCwgZ2VuZXJhdG9yKSB7XG4gICAgbGV0IGVudHJ5ID0gbWFwLmdldChrZXkpO1xuICAgIGlmIChlbnRyeSkge1xuICAgICAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgICAgICAgIHJldHVybiBlbnRyeS5mdXR1cmU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7XG4gICAgfVxuICAgIGxldCByZXNvbHZlcjtcbiAgICBjb25zdCBwcm9tID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIHJlc29sdmVyID0gcmVzb2x2ZTtcbiAgICB9KTtcbiAgICBtYXAuc2V0KGtleSwgZW50cnkgPSB7XG4gICAgICAgIHJlc29sdmU6IHJlc29sdmVyLFxuICAgICAgICBmdXR1cmU6IHByb21cbiAgICB9KTtcbiAgICByZXR1cm4gZ2VuZXJhdG9yID8gZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpPT4ocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSlcbiAgICApIDogcHJvbTtcbn1cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspIHtcbiAgICB0cnkge1xuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICByZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSkgfHwgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5jb25zdCBjYW5QcmVmZXRjaCA9IGhhc1ByZWZldGNoKCk7XG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShocmVmLCBhcywgbGluaykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopPT57XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICAgICAgaWYgKGFzKSBsaW5rLmFzID0gYXM7XG4gICAgICAgIGxpbmsucmVsID0gYHByZWZldGNoYDtcbiAgICAgICAgbGluay5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIGxpbmsub25sb2FkID0gcmVzO1xuICAgICAgICBsaW5rLm9uZXJyb3IgPSByZWo7XG4gICAgICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgICAgIGxpbmsuaHJlZiA9IGhyZWY7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfSk7XG59XG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7XG5mdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7XG59XG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLCBzY3JpcHQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9ICgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcbiAgICAgICAgO1xuICAgICAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAgICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgICAgICBzY3JpcHQuc3JjID0gc3JjO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfSk7XG59XG4vLyBXZSB3YWl0IGZvciBwYWdlcyB0byBiZSBidWlsdCBpbiBkZXYgYmVmb3JlIHdlIHN0YXJ0IHRoZSByb3V0ZSB0cmFuc2l0aW9uXG4vLyB0aW1lb3V0IHRvIHByZXZlbnQgYW4gdW4tbmVjZXNzYXJ5IGhhcmQgbmF2aWdhdGlvbiBpbiBkZXZlbG9wbWVudC5cbmxldCBkZXZCdWlsZFByb21pc2U7XG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLCBtcywgZXJyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgcC50aGVuKChyKT0+e1xuICAgICAgICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmUocik7XG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIC8vIFdlIHdyYXAgdGhlc2UgY2hlY2tzIHNlcGFyYXRlbHkgZm9yIGJldHRlciBkZWFkLWNvZGUgZWxpbWluYXRpb24gaW5cbiAgICAgICAgLy8gcHJvZHVjdGlvbiBidW5kbGVzLlxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgIChkZXZCdWlsZFByb21pc2UgfHwgUHJvbWlzZS5yZXNvbHZlKCkpLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSB7XG4gICAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgfVxuICAgIGNvbnN0IG9uQnVpbGRNYW5pZmVzdCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO1xuICAgICAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKT0+e1xuICAgICAgICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChvbkJ1aWxkTWFuaWZlc3QsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7XG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgICAgICAgICBhc3NldFByZWZpeCArICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgKyBlbmNvZGVVUkkoKDAsIF9nZXRBc3NldFBhdGhGcm9tUm91dGUpLmRlZmF1bHQocm91dGUsICcuanMnKSksIFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgICAgICAgIGNzczogW11cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpPT57XG4gICAgICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoKGVudHJ5KT0+YXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuanMnKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmNzcycpXG4gICAgICAgICAgICApXG4gICAgICAgIH07XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeCkge1xuICAgIGNvbnN0IGVudHJ5cG9pbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IGxvYWRlZFNjcmlwdHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgc3R5bGVTaGVldHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgcm91dGVzID0gbmV3IE1hcCgpO1xuICAgIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmMpIHtcbiAgICAgICAgbGV0IHByb20gPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgcHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKSB7XG4gICAgICAgIGxldCBwcm9tID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgc3R5bGVTaGVldHMuc2V0KGhyZWYsIHByb20gPSBmZXRjaChocmVmKS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRleHRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHdoZW5FbnRyeXBvaW50IChyb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FbnRyeXBvaW50IChyb3V0ZSwgZXhlY3V0ZSkge1xuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oKGZuKT0+Zm4oKVxuICAgICAgICAgICAgKS50aGVuKChleHBvcnRzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCB8fCBleHBvcnRzLFxuICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICwgKGVycik9Pih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKS50aGVuKChpbnB1dCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpO1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpO1xuICAgICAgICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRSb3V0ZSAocm91dGUsIHByZWZldGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgcm91dGVzLCAoKT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlRmlsZXNQcm9taXNlID0gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKHsgc2NyaXB0cyAsIGNzcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSkgPyBbXSA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSwgXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpPT4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiByZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGRldkJ1aWxkUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdXRlRmlsZXNQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlRmlsZXNQcm9taXNlLmZpbmFsbHkoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocm91dGVGaWxlc1Byb21pc2UsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHsgZW50cnlwb2ludCAsIHN0eWxlcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHN0eWxlc1xuICAgICAgICAgICAgICAgICAgICB9LCBlbnRyeXBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXM7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZWZldGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHByZWZldGNoIChyb3V0ZSkge1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgICAgICAgbGV0IGNuO1xuICAgICAgICAgICAgaWYgKGNuID0gbmF2aWdhdG9yLmNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKG91dHB1dCk9PlByb21pc2UuYWxsKGNhblByZWZldGNoID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpPT5wcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKVxuICAgICAgICAgICAgICAgICkgOiBbXSlcbiAgICAgICAgICAgICkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsIHRydWUpLmNhdGNoKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgICAoKT0+e1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIndpdGhSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF93aXRoUm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5leHBvcnRzLnVzZVJvdXRlciA9IHVzZVJvdXRlcjtcbmV4cG9ydHMuY3JlYXRlUm91dGVyID0gY3JlYXRlUm91dGVyO1xuZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2UgPSBtYWtlUHVibGljUm91dGVySW5zdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIikpO1xudmFyIF9yb3V0ZXJDb250ZXh0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHRcIik7XG52YXIgX3dpdGhSb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHNpbmdsZXRvblJvdXRlciA9IHtcbiAgICByb3V0ZXI6IG51bGwsXG4gICAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICAgIHJlYWR5IChjYikge1xuICAgICAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncm91dGUnLFxuICAgICdxdWVyeScsXG4gICAgJ2FzUGF0aCcsXG4gICAgJ2NvbXBvbmVudHMnLFxuICAgICdpc0ZhbGxiYWNrJyxcbiAgICAnYmFzZVBhdGgnLFxuICAgICdsb2NhbGUnLFxuICAgICdsb2NhbGVzJyxcbiAgICAnZGVmYXVsdExvY2FsZScsXG4gICAgJ2lzUmVhZHknLFxuICAgICdpc1ByZXZpZXcnLFxuICAgICdpc0xvY2FsZURvbWFpbicsXG4gICAgJ2RvbWFpbkxvY2FsZXMnLCBcbl07XG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAgICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAgICdoYXNoQ2hhbmdlQ29tcGxldGUnLCBcbl07XG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAgICdwdXNoJyxcbiAgICAncmVwbGFjZScsXG4gICAgJ3JlbG9hZCcsXG4gICAgJ2JhY2snLFxuICAgICdwcmVmZXRjaCcsXG4gICAgJ2JlZm9yZVBvcFN0YXRlJywgXG5dO1xuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgICBnZXQgKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICB9XG59KTtcbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbiAgICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7XG4gICAgfTtcbn0pO1xucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KT0+e1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e1xuICAgICAgICBfcm91dGVyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKDEpfWA7XG4gICAgICAgICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyO1xuICAgICAgICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbmZ1bmN0aW9uIGdldFJvdXRlcigpIHtcbiAgICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBvbiB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJztcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbnZhciBfZGVmYXVsdCA9IHNpbmdsZXRvblJvdXRlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuZnVuY3Rpb24gdXNlUm91dGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVyKC4uLmFyZ3MpIHtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IF9yb3V0ZXIuZGVmYXVsdCguLi5hcmdzKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpPT5jYigpXG4gICAgKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXTtcbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbmZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpIHtcbiAgICBjb25zdCBfcm91dGVyMSA9IHJvdXRlcjtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICB9O1xuICAgIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe1xuICAgICAgICBpZiAodHlwZW9mIF9yb3V0ZXIxW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyMVtwcm9wZXJ0eV0pID8gW10gOiB7XG4gICAgICAgICAgICB9LCBfcm91dGVyMVtwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyMVtwcm9wZXJ0eV07XG4gICAgfVxuICAgIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgICBpbnN0YW5jZS5ldmVudHMgPSBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgcmV0dXJuIF9yb3V0ZXIxW2ZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXNlSW50ZXJzZWN0aW9uID0gdXNlSW50ZXJzZWN0aW9uO1xudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7IHJvb3RNYXJnaW4gLCBkaXNhYmxlZCAgfSkge1xuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7XG4gICAgY29uc3QgdW5vYnNlcnZlID0gKDAsIF9yZWFjdCkudXNlUmVmKCk7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gKDAsIF9yZWFjdCkudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHNldFJlZiA9ICgwLCBfcmVhY3QpLnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpO1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuO1xuICAgICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKGVsLCAoaXNWaXNpYmxlKT0+aXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKVxuICAgICAgICAgICAgLCB7XG4gICAgICAgICAgICAgICAgcm9vdE1hcmdpblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGlzRGlzYWJsZWQsXG4gICAgICAgIHJvb3RNYXJnaW4sXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICAoMCwgX3JlYWN0KS51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRWaXNpYmxlKHRydWUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCk9PigwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykuY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICByZXR1cm4gW1xuICAgICAgICBzZXRSZWYsXG4gICAgICAgIHZpc2libGVcbiAgICBdO1xufVxuZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgaWQgLCBvYnNlcnZlciAsIGVsZW1lbnRzICB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7XG4gICAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XG4gICAgICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKSB7XG4gICAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJyc7XG4gICAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZCk7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpPT57XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpPT57XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIG9wdGlvbnMpO1xuICAgIG9ic2VydmVycy5zZXQoaWQsIGluc3RhbmNlID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgb2JzZXJ2ZXIsXG4gICAgICAgIGVsZW1lbnRzXG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gd2l0aFJvdXRlcjtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpIHtcbiAgICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcykge1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHJvdXRlcjogKDAsIF9yb3V0ZXIpLnVzZVJvdXRlcigpXG4gICAgICAgIH0sIHByb3BzKSkpO1xuICAgIH1cbiAgICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgV2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xuICAgICAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYDtcbiAgICB9XG4gICAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0RG9tYWluTG9jYWxlID0gZ2V0RG9tYWluTG9jYWxlO1xuZXhwb3J0cy5hZGRMb2NhbGUgPSBhZGRMb2NhbGU7XG5leHBvcnRzLmRlbExvY2FsZSA9IGRlbExvY2FsZTtcbmV4cG9ydHMuaGFzQmFzZVBhdGggPSBoYXNCYXNlUGF0aDtcbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmV4cG9ydHMuaXNMb2NhbFVSTCA9IGlzTG9jYWxVUkw7XG5leHBvcnRzLmludGVycG9sYXRlQXMgPSBpbnRlcnBvbGF0ZUFzO1xuZXhwb3J0cy5yZXNvbHZlSHJlZiA9IHJlc29sdmVIcmVmO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7XG52YXIgX3JvdXRlTG9hZGVyID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXJcIik7XG52YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGggPSByZXF1aXJlKFwiLi4vLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTtcbnZhciBfbm9ybWFsaXplTG9jYWxlUGF0aCA9IHJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTtcbnZhciBfbWl0dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciBfaXNEeW5hbWljID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcbnZhciBfcGFyc2VSZWxhdGl2ZVVybCA9IHJlcXVpcmUoXCIuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybFwiKTtcbnZhciBfcXVlcnlzdHJpbmcgPSByZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTtcbnZhciBfcmVzb2x2ZVJld3JpdGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTtcbnZhciBfcm91dGVNYXRjaGVyID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbnZhciBfcm91dGVSZWdleCA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtcbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTtcbn1cbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgICAgICBjYW5jZWxsZWQ6IHRydWVcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCwgcHJlZml4KSB7XG4gICAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IHBhdGggPT09ICcvJyA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KSA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWAgOiBwYXRoO1xufVxuZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsIGxvY2FsZSwgbG9jYWxlcywgZG9tYWluTG9jYWxlcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGxvY2FsZSA9IGxvY2FsZSB8fCAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKTtcbiAgICAgICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICAgICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2Jhc2VQYXRoIHx8ICcnfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCwgbG9jYWxlLCBkZWZhdWx0TG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmIHBhdGhMb3dlciAhPT0gJy8nICsgbG9jYWxlTG93ZXIgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLCBsb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fCBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKSA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICsgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCkge1xuICAgIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKTtcbiAgICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKTtcbiAgICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKTtcbn1cbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICAgIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKTtcbn1cbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpO1xuICAgIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gO1xuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpIHtcbiAgICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSB8fCB1cmwuc3RhcnRzV2l0aCgnPycpKSByZXR1cm4gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICAgICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgICAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbik7XG4gICAgICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSkge1xuICAgIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnO1xuICAgIGNvbnN0IGR5bmFtaWNSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHM7XG4gICAgY29uc3QgZHluYW1pY01hdGNoZXMgPSAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8IC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeTtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlO1xuICAgIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO1xuICAgIGlmICghcGFyYW1zLmV2ZXJ5KChwYXJhbSk9PntcbiAgICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnO1xuICAgICAgICBjb25zdCB7IHJlcGVhdCAsIG9wdGlvbmFsICB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV07XG4gICAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWA7XG4gICAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJiAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID0gaW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCwgcmVwZWF0ID8gdmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgKHNlZ21lbnQpPT5lbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgKS5qb2luKCcvJykgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKSB8fCAnLycpO1xuICAgIH0pKSB7XG4gICAgICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcbiAgICAgICAgO1xuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGFyYW1zLFxuICAgICAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlXG4gICAgfTtcbn1cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSB7XG4gICAgY29uc3QgZmlsdGVyZWRRdWVyeSA9IHtcbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVyZWRRdWVyeTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVIcmVmKHJvdXRlciwgaHJlZiwgcmVzb2x2ZUFzKSB7XG4gICAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgICBsZXQgYmFzZTtcbiAgICBsZXQgdXJsQXNTdHJpbmcgPSB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZik7XG4gICAgLy8gcmVwZWF0ZWQgc2xhc2hlcyBhbmQgYmFja3NsYXNoZXMgaW4gdGhlIFVSTCBhcmUgY29uc2lkZXJlZFxuICAgIC8vIGludmFsaWQgYW5kIHdpbGwgbmV2ZXIgbWF0Y2ggYSBOZXh0LmpzIHBhZ2UvZmlsZVxuICAgIGNvbnN0IHVybFByb3RvTWF0Y2ggPSB1cmxBc1N0cmluZy5tYXRjaCgvXlthLXpBLVpdezEsfTpcXC9cXC8vKTtcbiAgICBjb25zdCB1cmxBc1N0cmluZ05vUHJvdG8gPSB1cmxQcm90b01hdGNoID8gdXJsQXNTdHJpbmcuc3Vic3RyKHVybFByb3RvTWF0Y2hbMF0ubGVuZ3RoKSA6IHVybEFzU3RyaW5nO1xuICAgIGNvbnN0IHVybFBhcnRzID0gdXJsQXNTdHJpbmdOb1Byb3RvLnNwbGl0KCc/Jyk7XG4gICAgaWYgKCh1cmxQYXJ0c1swXSB8fCAnJykubWF0Y2goLyhcXC9cXC98XFxcXCkvKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIG5leHQvcm91dGVyOiAke3VybEFzU3RyaW5nfSwgcmVwZWF0ZWQgZm9yd2FyZC1zbGFzaGVzICgvLykgb3IgYmFja3NsYXNoZXMgXFxcXCBhcmUgbm90IHZhbGlkIGluIHRoZSBocmVmYCk7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRVcmwgPSAoMCwgX3V0aWxzKS5ub3JtYWxpemVSZXBlYXRlZFNsYXNoZXModXJsQXNTdHJpbmdOb1Byb3RvKTtcbiAgICAgICAgdXJsQXNTdHJpbmcgPSAodXJsUHJvdG9NYXRjaCA/IHVybFByb3RvTWF0Y2hbMF0gOiAnJykgKyBub3JtYWxpemVkVXJsO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICAgIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgYmFzZSA9IG5ldyBVUkwodXJsQXNTdHJpbmcuc3RhcnRzV2l0aCgnIycpID8gcm91dGVyLmFzUGF0aCA6IHJvdXRlci5wYXRobmFtZSwgJ2h0dHA6Ly9uJyk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICAvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuICAgICAgICBiYXNlID0gbmV3IFVSTCgnLycsICdodHRwOi8vbicpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpO1xuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpO1xuICAgICAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJztcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiYgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmIHJlc29sdmVBcykge1xuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSAoMCwgX3F1ZXJ5c3RyaW5nKS5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7XG4gICAgICAgICAgICBjb25zdCB7IHJlc3VsdCAsIHBhcmFtcyAgfSA9IGludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsIGZpbmFsVXJsLnBhdGhuYW1lLCBxdWVyeSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKSA6IGZpbmFsVXJsLmhyZWY7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgXSA6IHJlc29sdmVkSHJlZjtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxufVxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKSB7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmw7XG59XG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLCB1cmwsIGFzKSB7XG4gICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIsIHVybCwgdHJ1ZSk7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKTtcbiAgICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBcztcbiAgICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpO1xuICAgIGNvbnN0IHByZXBhcmVkQXMgPSBhcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlciwgYXMpKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKVxuICAgIH07XG59XG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcykge1xuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKCgwLCBfZGVub3JtYWxpemVQYWdlUGF0aCkuZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSkpO1xuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICAgIHJldHVybiBwYXRobmFtZTtcbiAgICB9XG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgICBwYWdlcy5zb21lKChwYWdlKT0+e1xuICAgICAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lID0gcGFnZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKTtcbn1cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID0gcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmICEhZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHYgPSAnX19uZXh0JztcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZTtcbiAgICB9IGNhdGNoIChuKSB7XG4gICAgfVxufSgpO1xuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtcbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cykge1xuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlcikge1xuICAgIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgKDAsIF9yb3V0ZUxvYWRlcikubWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lMSwgcXVlcnkxLCBhczEsIHsgaW5pdGlhbFByb3BzICwgcGFnZUxvYWRlciAsIEFwcCAsIHdyYXBBcHAgLCBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBlcnI6IGVycjEgLCBzdWJzY3JpcHRpb24gLCBpc0ZhbGxiYWNrICwgbG9jYWxlICwgbG9jYWxlcyAsIGRlZmF1bHRMb2NhbGUgLCBkb21haW5Mb2NhbGVzICwgaXNQcmV2aWV3ICB9KXtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gICAgICAgIHRoaXMuc2RyID0ge1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9pZHggPSAwO1xuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSAoZSk9PntcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZm9yY2VkU2Nyb2xsO1xuICAgICAgICAgICAgY29uc3QgeyB1cmwgLCBhczogYXMxICwgb3B0aW9ucyAsIGlkeCAgfSA9IHN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2Uodik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2lkeCA9IGlkeDtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAgfSA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3NyICYmIGFzMSA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUxID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhczEsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgfSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICAgICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICB9KSwgZm9yY2VkU2Nyb2xsKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgICAgICBpZiAocGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICAgICAgICAgIGVycjogZXJyMSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgICAgICAgIENvbXBvbmVudDogQXBwLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50cztcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lMTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5MTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPSAoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGF0aG5hbWUxKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydDtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lMSA6IGFzMTtcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcDtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgICAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICB0aGlzLmlzU3NyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFjaztcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHwgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uYXBwR2lwICYmICFzZWxmLl9fTkVYVF9EQVRBX18uZ3NwIHx8ICFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiYgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpO1xuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3O1xuICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2U7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzMS5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSBhczEgIT09IHBhdGhuYW1lMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi8gYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHB1c2godXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgICAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBhc3luYyBjaGFuZ2UobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zLCBmb3JjZWRTY3JvbGwpIHtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNob3VsZFJlc29sdmVIcmVmID0gdXJsID09PSBhcyB8fCBvcHRpb25zLl9oIHx8IG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmO1xuICAgICAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAgICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgICAgIGlmIChvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByZXZMb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlID8gdGhpcy5kZWZhdWx0TG9jYWxlIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgICAgICAgICAgaWYgKCEoKHJlZiA9IHRoaXMubG9jYWxlcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYuaW5jbHVkZXModGhpcy5sb2NhbGUpKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAgICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgICAgICAgICAgaWYgKCFkaWROYXZpZ2F0ZSAmJiBkZXRlY3RlZERvbWFpbiAmJiB0aGlzLmlzTG9jYWxlRG9tYWluICYmIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLycpfWA7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgIGlmIChfdXRpbHMuU1QpIHtcbiAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBzaGFsbG93ID1mYWxzZSAgfSA9IG9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7XG4gICAgICAgICAgICBzaGFsbG93XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFkZExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSkpO1xuICAgICAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzO1xuICAgICAgICBsZXQgbG9jYWxlQ2hhbmdlID0gcHJldkxvY2FsZSAhPT0gdGhpcy5sb2NhbGU7XG4gICAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBcztcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcyk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gcGFyc2VkO1xuICAgICAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgICAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgICAgICBsZXQgcGFnZXMsIHJld3JpdGVzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAgICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAgICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzO1xuICAgICAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAgICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICAgICAgcGF0aG5hbWUxID0gcGF0aG5hbWUxID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZTEpKSA6IHBhdGhuYW1lMTtcbiAgICAgICAgaWYgKHNob3VsZFJlc29sdmVIcmVmICYmIHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IHRydWU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcXVlcnkxLCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGg7XG4gICAgICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUxLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUxKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKTtcbiAgICAgICAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZSA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5MSkgOiB7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcigocGFyYW0pPT4hcXVlcnkxW3BhcmFtXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlID8gYEludGVycG9sYXRpbmcgaHJlZmAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICsgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKChzaG91bGRJbnRlcnBvbGF0ZSA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7c2hvdWxkSW50ZXJwb2xhdGUgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCcgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgIH0sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkxLCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnkxLCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgcmVmLCByZWYxO1xuICAgICAgICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgbGV0IHsgZXJyb3IgLCBwcm9wcyAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICAgICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMucGFnZVByb3BzICYmIHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUO1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgICAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCAsIGFzOiBuZXdBcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCBkZXN0aW5hdGlvbiwgZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVc7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0JztcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLCBub3RGb3VuZFJvdXRlLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFsbG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPSBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLl9oICYmIHBhdGhuYW1lMSA9PT0gJy9fZXJyb3InICYmICgocmVmID0gc2VsZi5fX05FWFRfREFUQV9fLnByb3BzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChyZWYxID0gcmVmLnBhZ2VQcm9wcykgPT09IG51bGwgfHwgcmVmMSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmMS5zdGF0dXNDb2RlKSA9PT0gNTAwICYmIChwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMucGFnZVByb3BzKSkge1xuICAgICAgICAgICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGU7XG4gICAgICAgICAgICB2YXIgX3Njcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZFNjcm9sbCA9IChfc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwpICE9PSBudWxsICYmIF9zY3JvbGwgIT09IHZvaWQgMCA/IF9zY3JvbGwgOiAhaXNWYWxpZFNoYWxsb3dSb3V0ZTtcbiAgICAgICAgICAgIGNvbnN0IHJlc2V0U2Nyb2xsID0gc2hvdWxkU2Nyb2xsID8ge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgfSA6IG51bGw7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGNsZWFuZWRBcywgcm91dGVJbmZvLCBmb3JjZWRTY3JvbGwgIT09IG51bGwgJiYgZm9yY2VkU2Nyb2xsICE9PSB2b2lkIDAgPyBmb3JjZWRTY3JvbGwgOiByZXNldFNjcm9sbCkuY2F0Y2goKGUpPT57XG4gICAgICAgICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGU7XG4gICAgICAgICAgICAgICAgZWxzZSB0aHJvdyBlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIGlmIChlcnIxLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycjE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgKDAsIF91dGlscykuZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICAgICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93O1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDFcbiAgICAgICAgICAgIH0sIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKDAsIF9yb3V0ZUxvYWRlcikuaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IENvbXBvbmVudDE7XG4gICAgICAgICAgICBsZXQgc3R5bGVTaGVldHM7XG4gICAgICAgICAgICBsZXQgcHJvcHM7XG4gICAgICAgICAgICBpZiAodHlwZW9mIENvbXBvbmVudDEgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBzdHlsZVNoZWV0cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAoeyBwYWdlOiBDb21wb25lbnQxICwgc3R5bGVTaGVldHMgIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0ge1xuICAgICAgICAgICAgICAgIHByb3BzLFxuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm8gPyB1bmRlZmluZWQgOiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mbyA/IGNhY2hlZFJvdXRlSW5mbyA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQ29tcG9uZW50MSAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSAgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50MSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkYXRhSHJlZjtcbiAgICAgICAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgIH0pLCByZXNvbHZlZEFzLCBfX05fU1NHLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSA6IF9fTl9TU1AgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZXM6IHRoaXMubG9jYWxlcyxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdExvY2FsZTogdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChlcnIyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbiAgICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovIGJlZm9yZVBvcFN0YXRlKGNiKSB7XG4gICAgICAgIHRoaXMuX2JwcyA9IGNiO1xuICAgIH1cbiAgICBvbmx5QUhhc2hDaGFuZ2UoYXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqLyBhc3luYyBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMiAgfSA9IHBhcnNlZDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUyLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIGxldCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICAgICAgYXNQYXRoID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBsZXQgcmV3cml0ZXM7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcGFyc2VkLnF1ZXJ5LCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUyKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTIpO1xuICAgICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbigoaXNTc2cpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzU3NnID8gdGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLCByZXNvbHZlZEFzLCB0cnVlLCB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiB0aGlzLmxvY2FsZSkpIDogZmFsc2U7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSwgXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IHRoaXMuY2xjID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xjID0gY2FuY2VsO1xuICAgICAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyMiA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVycjIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAhdGhpcy5pc1ByZXZpZXcgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV0gPSBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KS5jYXRjaCgoZXJyMik9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAxICB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddO1xuICAgICAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAxKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscykubG9hZEdldEluaXRpYWxQcm9wcyhBcHAxLCB7XG4gICAgICAgICAgICBBcHBUcmVlLFxuICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgICAgICAgY3R4XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LCByZXNldFNjcm9sbCk7XG4gICAgfVxufVxuUm91dGVyLmV2ZW50cyA9ICgwLCBfbWl0dCkuZGVmYXVsdCgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2xheW91dC9Gb290ZXInXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2xheW91dC9IZWFkZXInXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dC9MYXlvdXQnXG5pbXBvcnQgSG9tZUNvbnRlbnQgZnJvbSAnLi4vY29tcG9uZW50cy9ob21lL0hvbWVDb250ZW50J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2NzcydcbmltcG9ydCB3cmFwcGVyLCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vc3RvcmUvc3RvcmUnXG5pbXBvcnQgeyBmZXRjaFJlY29tbWVuZExpc3QsIGZldGNoTGlrZUxpc3QsIGZldGNoTmVhcmJ5TGlzdCwgZmV0Y2hIb3J0TGlzdCwgZmV0Y2hSZWNvbW1lbmRDaXJjbGVMaXN0IH0gZnJvbSAnLi4vc3RvcmUvc2xpY2VzL2hvbWVTbGljZSc7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuXG4gIGNvbnN0IHsgcmVjb21tZW5kRGF0YSwgbGlrZURhdGEsIG5lYXJieURhdGEsIGhvcnREYXRhLCByZWNvbW1lbmRDaXJjbGVEYXRhIH0gPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmhvbWUpO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fT5cbiAgICAgIDxIZWFkZXIgcGFnZT17MH0gLz5cbiAgICAgIDxIb21lQ29udGVudCByZWNvbW1lbmREYXRhPXtyZWNvbW1lbmREYXRhfSBsaWtlRGF0YT17bGlrZURhdGF9IG5lYXJieURhdGE9e25lYXJieURhdGF9IGhvcnREYXRhPXtob3J0RGF0YX0gcmVjb21tZW5kQ2lyY2xlPXtyZWNvbW1lbmRDaXJjbGVEYXRhfSAvPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5cbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gd3JhcHBlci5nZXRJbml0aWFsUGFnZVByb3BzKChzdG9yZSkgPT4gYXN5bmMgKHsgcmVxIH0pID0+IHtcbiAgaWYgKCFzdG9yZS5nZXRTdGF0ZSgpLmhvbWUuaXNMb2FkKSB7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIGZldGNoUmVjb21tZW5kTGlzdCh7XG4gICAgICAgICAgbGltaXQ6IDIwLFxuICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgdHlwZTogXCJyZWNvbW1lbmRcIlxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICBzdG9yZS5kaXNwYXRjaChcbiAgICAgICAgZmV0Y2hMaWtlTGlzdCh7XG4gICAgICAgICAgbGltaXQ6IDIwLFxuICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgdHlwZTogXCJhdHRlbnRpb25cIlxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICBzdG9yZS5kaXNwYXRjaChcbiAgICAgICAgZmV0Y2hOZWFyYnlMaXN0KHtcbiAgICAgICAgICBsaW1pdDogMjAsXG4gICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgICB0eXBlOiBcIm5lYXJieVwiXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBmZXRjaEhvcnRMaXN0KHtcbiAgICAgICAgICBsaW1pdDogMjAsXG4gICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgICB0eXBlOiBcInVyZ2VudFwiXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBmZXRjaFJlY29tbWVuZENpcmNsZUxpc3Qoe1xuICAgICAgICAgIGxpbWl0OiA4LFxuICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgdHlwZTogXCJyZWNvbW1lbmRcIlxuICAgICAgICB9KSxcbiAgICAgIClcbiAgICBdKTtcbiAgfVxuICByZXR1cm4ge307XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiIsImltcG9ydCBhcGkgZnJvbSAnLi4vLi4vdXRpbHMvYXBpJztcclxuaW1wb3J0IFVybCBmcm9tICcuLi8uLi91dGlscy91cmwnO1xyXG5pbXBvcnQgeyBGZXRjaEZuLCBMaW1pdElkUGFyYW1zLCBMaW1pdFR5cGVQYXJhbXMgfSBmcm9tICcuLi9wYXJhbXMnO1xyXG5pbXBvcnQgdHlwZSB7IFJlcyB9IGZyb20gJy4vaG9tZSc7XHJcblxyXG5cclxuZXhwb3J0IHR5cGUgTGlzdFBhZ2VCZWFuPFQ+ID0ge1xyXG4gICAgdG90YWw6IG51bWJlcixcclxuICAgIGxpc3Q6IEFycmF5PFQ+XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBDaXJjbGVCZWFuID0ge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGNpcmNsZV9uYW1lOiBzdHJpbmc7XHJcbiAgICBhdmF0YXI6IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBjaXJjbGVfdGFnOiBzdHJpbmc7XHJcbiAgICBjaXJjbGVfYmFja2dyb3VuZDogc3RyaW5nO1xyXG4gICAgb3duZXJfaWQ6IHN0cmluZztcclxuICAgIHR5cGU6IG51bWJlcjtcclxuICAgIHN0YXR1czogbnVtYmVyO1xyXG4gICAgb3V0X3Zpc2lhYmxlX2xldmVsOiBudW1iZXI7XHJcbiAgICBuZWVkX2FwcGx5OiBudW1iZXI7XHJcbiAgICBjcmVhdGVfdGltZTogc3RyaW5nO1xyXG4gICAgam9pbl90eXBlOiBudW1iZXI7XHJcbn07XHJcblxyXG5cclxuLyoq5ZyI5a2Q5YiX6KGoICovXHJcbmV4cG9ydCBjb25zdCBnZXRDaXJjbGVMaXN0OiBGZXRjaEZuPExpbWl0VHlwZVBhcmFtcz4gPSAocGFyYW1zKSA9PiB7XHJcbiAgICByZXR1cm4gYXBpLnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogVXJsLmNpcmNsZUxpc3QsXHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIHBhcmFtczogcGFyYW1zLFxyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vKirnlKjmiLfnmoTlnIjlrZDliJfooaggKi9cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJDaXJjbGVMaXN0OiBGZXRjaEZuPExpbWl0SWRQYXJhbXM+ID0gKHBhcmFtcykgPT4ge1xyXG4gICAgcmV0dXJuIGFwaS5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IFVybC51c2VyQ2lyY2xlTGlzdCxcclxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgcGFyYW1zOiBwYXJhbXMsXHJcbiAgICB9KTtcclxufTtcclxuIiwiaW1wb3J0IGFwaSBmcm9tICcuLi8uLi91dGlscy9hcGknO1xyXG5pbXBvcnQgVXJsIGZyb20gJy4uLy4uL3V0aWxzL3VybCc7XHJcbmltcG9ydCB7IEZldGNoRm4gfSBmcm9tICcuLi9wYXJhbXMnO1xyXG5pbXBvcnQgeyBIZWxwVHlwZUJlYW4gfSBmcm9tICcuL2hlbHBlcic7XHJcbmltcG9ydCB0eXBlIHsgTmFtZUlkQmVhbiwgUmVzIH0gZnJvbSAnLi9ob21lJztcclxuXHJcbi8vIOWtpuagoWJlYW5cclxuZXhwb3J0IHR5cGUgU2Nob29sQmVhbiA9IE5hbWVJZEJlYW4gJiB7XHJcbiAgICBwYXJ0OiBzdHJpbmcsXHJcbn07XHJcblxyXG4vLyDlnLDlnYBiZWFuXHJcbmV4cG9ydCB0eXBlIEFkZHJlc3NCZWFuID0gTmFtZUlkQmVhbiAmIHtcclxuICAgIGNpdGllczogQXJyYXk8Q2l0eUJlYW4+XHJcbn07XHJcblxyXG4vLyDln47luIJiZWFuXHJcbmV4cG9ydCB0eXBlIENpdHlCZWFuID0gTmFtZUlkQmVhbiAmIHtcclxuICAgIHByb3ZpbmNlX2lkOiBudW1iZXIsXHJcbiAgICBhcmVhOiBBcnJheTxBcmVhQmVhbj5cclxufTtcclxuXHJcbi8vIOWMumJlYW5cclxuZXhwb3J0IHR5cGUgQXJlYUJlYW4gPSBOYW1lSWRCZWFuICYge1xyXG4gICAgcHJvdmluY2VfaWQ6IG51bWJlcixcclxuICAgIGNpdHlfaWQ6IG51bWJlclxyXG59O1xyXG5cclxuLy8g5ZyI5a2Q57G75Z6LYmVhblxyXG5leHBvcnQgdHlwZSBDaXJjbGVUeXBlQmVhbiA9IHtcclxuICAgIGlkOiBudW1iZXIsXHJcbiAgICB0eXBlOiBzdHJpbmcsXHJcbiAgICB0YWdzOiBBcnJheTxUYWdzQmVhbj5cclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIFRhZ3NCZWFuID0gTmFtZUlkQmVhbiAmIHtcclxuICAgIHR5cGVfaWQ6IG51bWJlcixcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVHlwZUFkZHJlc3NTY2hvb2xCZWFuID0ge1xyXG4gICAgdHlwZTogQXJyYXk8SGVscFR5cGVCZWFuPixcclxuICAgIHNjaG9vbDogQXJyYXk8U2Nob29sQmVhbj4sXHJcbiAgICBhZGRyZXNzOiBBcnJheTxBZGRyZXNzQmVhbj4sXHJcbiAgICBob3RfY2l0eTogQXJyYXk8Q2l0eUJlYW4+LFxyXG4gICAgaW5kdXN0cnk6IEFycmF5PE5hbWVJZEJlYW4+LFxyXG4gICAgY2lyY2xlX3R5cGU6IEFycmF5PENpcmNsZVR5cGVCZWFuPlxyXG59O1xyXG5cclxuXHJcbi8qKuiOt+WPluWtpuagoeOAgeS6kuW4ruexu+Wei+OAgeecgeW4guWMuiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0VHlwZUFkZHJlc3NTY2hvb2w6IEZldGNoRm48dW5rbm93bj4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXBpLnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogVXJsLmNvbW1pdCxcclxuICAgICAgICBtZXRob2Q6IFwiR0VUXCJcclxuICAgIH0pO1xyXG59O1xyXG5cclxuXHJcbi8qKuiOt+WPluWciOWtkOexu+WIqyAqL1xyXG5leHBvcnQgY29uc3QgZ2V0Q2lyY2xlVHlwZTogRmV0Y2hGbjx1bmtub3duPiA9ICgpID0+IHtcclxuICAgIHJldHVybiBhcGkucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiBVcmwuZ2V0Q2lyY2xlVHlwZSxcclxuICAgICAgICBtZXRob2Q6IFwiR0VUXCJcclxuICAgIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBOYW1lSWRCZWFuIH0gZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgeyBVc2VyQmVhbiB9IGZyb20gXCIuL3VzZXJcIjtcclxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi91dGlscy9hcGknO1xyXG5pbXBvcnQgVXJsIGZyb20gJy4uLy4uL3V0aWxzL3VybCc7XHJcbmltcG9ydCB7IEZldGNoRm4sIExpbWl0SWRQYXJhbXMsIExpbWl0VHlwZVBhcmFtcyB9IGZyb20gXCIuLi9wYXJhbXNcIjtcclxuXHJcblxyXG5leHBvcnQgdHlwZSBIZWxwVHlwZUJlYW4gPSBOYW1lSWRCZWFuICYge1xyXG4gICAgY2hpbGQ6IE5hbWVJZEJlYW47XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBIZWxwZXJJdGVtRGF0YSA9IHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBzZW5kZXJfaWQ6IHN0cmluZztcclxuICAgIHNlbmRlcjogVXNlckJlYW47XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgY29udGVudDogc3RyaW5nO1xyXG4gICAgdHlwZTogSGVscFR5cGVCZWFuO1xyXG4gICAgcHJvdmluY2U6IE5hbWVJZEJlYW47XHJcbiAgICBjaXR5OiBOYW1lSWRCZWFuO1xyXG4gICAgYXJlYTogTmFtZUlkQmVhbjtcclxuICAgIGFkZHJlc3M6IHN0cmluZztcclxuICAgIHN0YXJ0X3RpbWU6IG51bWJlcjtcclxuICAgIGVuZF90aW1lOiBudW1iZXI7XHJcbiAgICBsb3dlc3RfcHJpY2U6IG51bWJlcjtcclxuICAgIGhpZ2hlc3RfcHJpY2U6IG51bWJlcjtcclxuICAgIGlzX3VyZ2VudDogbnVtYmVyO1xyXG4gICAgcGVvcGxlX251bWJlcjogbnVtYmVyO1xyXG4gICAgaXNfdGltZW91dF9jYW5jZWw6IG51bWJlcjtcclxuICAgIGZpbmlzaF9wcm92ZTogbnVtYmVyO1xyXG4gICAgc3RhdHVzOiBudW1iZXI7XHJcbiAgICBsb25naXR1ZGU6IG51bWJlcjtcclxuICAgIGxhdGl0dWRlOiBudW1iZXI7XHJcbn07XHJcblxyXG5cclxuLyoq5LqS5biu5YiX6KGoICovXHJcbmV4cG9ydCBjb25zdCBnZXRIZWxwZXJMaXN0OiBGZXRjaEZuPExpbWl0VHlwZVBhcmFtcz4gPSAocGFyYW1zKSA9PiB7XHJcbiAgICByZXR1cm4gYXBpLnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogVXJsLmhlbHBlckxpc3QsXHJcbiAgICAgICAgcGFyYW1zOiBwYXJhbXMsXHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8qKuiOt+WPlueUqOaIt+axguWKqeWIl+ihqCAqL1xyXG5leHBvcnQgY29uc3QgZ2V0VXNlckhlbHBlckxpc3Q6IEZldGNoRm48TGltaXRJZFBhcmFtcz4gPSAocGFyYW1zKSA9PiB7XHJcbiAgICByZXR1cm4gYXBpLnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogVXJsLnVzZXJIZWxwTGlzdCxcclxuICAgICAgICBwYXJhbXM6IHBhcmFtcyxcclxuICAgIH0pO1xyXG59OyIsImltcG9ydCBVcmwgZnJvbSBcIi4uLy4uL3V0aWxzL3VybFwiO1xyXG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uL3V0aWxzL2FwaSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlckluZm8ocGFyYW1zOiB7IGlkOiBzdHJpbmcgfSkge1xyXG4gICAgcmV0dXJuIGFwaS5yZXF1ZXN0KHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIHVybDogVXJsLnVzZXJJbmZvICsgXCI/aWQ9XCIgKyBwYXJhbXMuaWQsXHJcbiAgICB9KTtcclxufTsiLCJpbXBvcnQgYXBpIGZyb20gJy4uLy4uL3V0aWxzL2FwaSc7XHJcbmltcG9ydCBVcmwgZnJvbSAnLi4vLi4vdXRpbHMvdXJsJztcclxuaW1wb3J0IHsgTmFtZUlkQmVhbiB9IGZyb20gJy4vaG9tZSc7XHJcblxyXG5leHBvcnQgdHlwZSBVc2VyQmVhbiA9IHtcclxuICAgIGlkOiBzdHJpbmc7IC8vIGlkXHJcbiAgICBhbGlhczogc3RyaW5nOyAvLyDliKvlkI1cclxuICAgIG5pY2tuYW1lOiBzdHJpbmc7IC8vIOaYteensFxyXG4gICAgYXZhdGFyOiBzdHJpbmc7IC8vIOWktOWDj1xyXG4gICAgc2V4OiBudW1iZXI7IC8vIOaAp+WIq1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZzsgLy/nroDku4tcclxuICAgIGJpcnRoZGF5OiBzdHJpbmc7ICAvLyDnlJ/ml6VcclxuICAgIHByb3ZpbmNlOiBOYW1lSWRCZWFuOyAvL+ecgVxyXG4gICAgY2l0eTogTmFtZUlkQmVhbjtcclxuICAgIHNjaG9vbDogTmFtZUlkQmVhbjsgLy/lrabmoKFcclxuICAgIGF1dGhlbnRpY2F0aW9uX3R5cGU6IG51bWJlcjsgLy/orqTor4HnsbvlnotcclxuICAgIG9ubGluZV9zdGF0dXM6IG51bWJlcjsgLy/lnKjnur/nirbmgIFcclxuICAgIGNyZWRpdF9zY29yZTogbnVtYmVyOyAvLyDkv6HnlKjor4TliIZcclxuICAgIG9yZGVyX3JhdGU6IG51bWJlcjsgLy/miJDljZXnjodcclxuICAgIGZvbGxvd19udW1iZXI6IG51bWJlcjsgLy/lhbPms6jmlbDnm65cclxuICAgIGZhbl9udW1iZXI6IG51bWJlcjsgLy/nsonkuJ3mlbDnm65cclxuICAgIGZvbGxvd2VkOiBib29sZWFuOyAvL+aYr+WQpuW3suWFs+azqFxyXG4gICAgZm9sbG93aW5nOiBib29sZWFuOyAvL+aYr+WQpuiiq+WFs+azqFxyXG4gICAgcGhvbmU6IHN0cmluZzsgLy/miYvmnLrlj7fvvIjku4XnmbvlvZXnmoTlvZPliY3nlKjmiLfmnInvvIlcclxufVxyXG5cclxuXHJcbmV4cG9ydCB0eXBlIExvZ2luQmVhbiA9IHtcclxuICAgIHRva2VuOiBzdHJpbmcsXHJcbiAgICB1c2VyOiBVc2VyQmVhbixcclxuICAgIGlzX2ZpbmlzaDogbnVtYmVyLFxyXG59O1xyXG5cclxuXHJcbnR5cGUgTG9naW5QYXJhbXMgPSB7XHJcbiAgICBwaG9uZT86IHN0cmluZztcclxuICAgIHBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgY29kZT86IHN0cmluZztcclxuICAgIHR5cGU/OiBudW1iZXI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGhvbmVDb2RlKHBhcmFtczogTG9naW5QYXJhbXMpIHtcclxuICAgIHJldHVybiBhcGkucmVxdWVzdCh7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBVcmwuZ2V0Q29kZSxcclxuICAgICAgICBkYXRhOiBwYXJhbXMsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHB3ZExvZ2luKHBhcmFtczogTG9naW5QYXJhbXMpIHtcclxuICAgIHJldHVybiBhcGkucmVxdWVzdCh7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBVcmwucHdkTG9naW4sXHJcbiAgICAgICAgZGF0YTogcGFyYW1zLFxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29kZUxvZ2luKHBhcmFtczogTG9naW5QYXJhbXMpIHtcclxuICAgIHJldHVybiBhcGkucmVxdWVzdCh7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBVcmwuY29kZUxvZ2luLFxyXG4gICAgICAgIGRhdGE6IHBhcmFtcyxcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLyoq6Ieq5Yqo55m75b2VICovXHJcbmV4cG9ydCBjb25zdCBhdXRvTG9naW4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXBpLnJlcXVlc3Qoe1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogVXJsLmF1dG9Mb2dpbixcclxuICAgIH0pO1xyXG59OyIsImltcG9ydCB7IHRodW5rV3JhcHBlciB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgdHlwZSB7IFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuXHJcbmltcG9ydCB0eXBlIHsgUmVzIH0gZnJvbSAnLi4vc2VydmljZXMvaG9tZSc7XHJcbmltcG9ydCB7IENpcmNsZUJlYW4sIGdldFVzZXJDaXJjbGVMaXN0LCBMaXN0UGFnZUJlYW4gfSBmcm9tICcuLi9zZXJ2aWNlcy9jaXJjbGUnO1xyXG5pbXBvcnQgeyBnZXRDaXJjbGVMaXN0IH0gZnJvbSAnLi4vc2VydmljZXMvY2lyY2xlJztcclxuXHJcbi8vIEFzeW5jVGh1bms86L+U5Zue55qE5YC857G75Z6LLOWHveaVsOexu+Wei3ZvaWTooajnpLrkuI3luKblj4LmlbAs5LiN5riF5qWaPlxyXG5leHBvcnQgY29uc3QgZmV0Y2hBbGxDaXJjbGVMaXN0ID0gdGh1bmtXcmFwcGVyKCdjbGlyY2xlL2FsbCcsIGdldENpcmNsZUxpc3QpO1xyXG5leHBvcnQgY29uc3QgZmV0Y2hVc2VyQ2lyY2xlTGlzdCA9IHRodW5rV3JhcHBlcignY2xpcmNsZS91c2VyX2xpc3QnLCBnZXRVc2VyQ2lyY2xlTGlzdCk7XHJcblxyXG50eXBlIEluaVN0YXRlID0ge1xyXG4gICAgYWxsQ2lyY2xlRGF0YTogTGlzdFBhZ2VCZWFuPENpcmNsZUJlYW4+O1xyXG4gICAgbXlDaXJjbGVMaXN0OiBMaXN0UGFnZUJlYW48Q2lyY2xlQmVhbj47XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IEluaVN0YXRlID0ge1xyXG4gICAgYWxsQ2lyY2xlRGF0YTogeyB0b3RhbDogMCwgbGlzdDogW10gfSxcclxuICAgIG15Q2lyY2xlTGlzdDogeyB0b3RhbDogMCwgbGlzdDogW10gfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBob21lU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiAnY2lyY2xlJyxcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICB9LFxyXG4gICAgZXh0cmFSZWR1Y2Vyczoge1xyXG4gICAgICAgIFtmZXRjaEFsbENpcmNsZUxpc3QuZnVsZmlsbGVkLnR5cGVdOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxSZXM8TGlzdFBhZ2VCZWFuPENpcmNsZUJlYW4+Pj4pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUuYWxsQ2lyY2xlRGF0YSA9IGFjdGlvbi5wYXlsb2FkLmRhdGE7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbZmV0Y2hVc2VyQ2lyY2xlTGlzdC5mdWxmaWxsZWQudHlwZV06IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFJlczxMaXN0UGFnZUJlYW48Q2lyY2xlQmVhbj4+PikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5teUNpcmNsZUxpc3QgPSBhY3Rpb24ucGF5bG9hZC5kYXRhO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbWVTbGljZS5yZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyB0aHVua1dyYXBwZXIgfSBmcm9tICcuLi8uLi91dGlscy91dGlsJztcclxuaW1wb3J0IHR5cGUgeyBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcblxyXG5pbXBvcnQgeyBDaXJjbGVUeXBlQmVhbiwgZ2V0Q2lyY2xlVHlwZSwgZ2V0VHlwZUFkZHJlc3NTY2hvb2wsIFR5cGVBZGRyZXNzU2Nob29sQmVhbiB9IGZyb20gJy4uL3NlcnZpY2VzL2NvbW1vbic7XHJcbmltcG9ydCB7IFJlcyB9IGZyb20gJy4uL3NlcnZpY2VzL2hvbWUnO1xyXG5cclxuLy8gQXN5bmNUaHVuazzov5Tlm57nmoTlgLznsbvlnoss5Ye95pWw57G75Z6Ldm9pZOihqOekuuS4jeW4puWPguaVsCzkuI3muIXmpZo+XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hUeXBlQWRkcmVzc1NjaG9vbCA9IHRodW5rV3JhcHBlcignY29tbW9uL3R5cGVBZGRyZXNzU2Nob29sJywgZ2V0VHlwZUFkZHJlc3NTY2hvb2wpO1xyXG5leHBvcnQgY29uc3QgZmV0Y2hDaXJjbGVUeXBlID0gdGh1bmtXcmFwcGVyKCdjb21tb24vY2lyY2xlVHlwZScsIGdldENpcmNsZVR5cGUpO1xyXG5cclxudHlwZSBJbmlTdGF0ZSA9IHtcclxuICAgIGNpcmNsZVR5cGU6IEFycmF5PENpcmNsZVR5cGVCZWFuPlxyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBJbmlTdGF0ZSA9IHtcclxuICAgIGNpcmNsZVR5cGU6IFtdXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY29tbW9uU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiAnY29tbW9uJyxcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgaW5jcmVtZW50OiAoKSA9PiB7IH0sXHJcbiAgICB9LFxyXG4gICAgZXh0cmFSZWR1Y2Vyczoge1xyXG4gICAgICAgIC8vIFtmZXRjaFR5cGVBZGRyZXNzU2Nob29sLmZ1bGZpbGxlZC50eXBlXTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UmVzPFR5cGVBZGRyZXNzU2Nob29sQmVhbj4+KSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwi5pWw5o2uXCIsIGFjdGlvbi5wYXlsb2FkLmRhdGEpO1xyXG4gICAgICAgIC8vICAgICBzdGF0ZS5pc0xvYWREYXRhID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgc3RhdGUudHlwZUFkZHJlc3NTY2hvb2xCZWFuID0gYWN0aW9uLnBheWxvYWQuZGF0YTtcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIFtmZXRjaENpcmNsZVR5cGUuZnVsZmlsbGVkLnR5cGVdOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxSZXM8QXJyYXk8Q2lyY2xlVHlwZUJlYW4+Pj4pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUuY2lyY2xlVHlwZSA9IGFjdGlvbi5wYXlsb2FkLmRhdGE7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgaW5jcmVtZW50IH0gPSBjb21tb25TbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCBjb21tb25TbGljZS5yZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyB0aHVua1dyYXBwZXIgfSBmcm9tICcuLi8uLi91dGlscy91dGlsJztcclxuaW1wb3J0IHR5cGUgeyBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcblxyXG5pbXBvcnQgdHlwZSB7IFJlcyB9IGZyb20gJy4uL3NlcnZpY2VzL2hvbWUnO1xyXG5pbXBvcnQgdHlwZSB7IEhlbHBlckl0ZW1EYXRhIH0gZnJvbSAnLi4vc2VydmljZXMvaGVscGVyJztcclxuaW1wb3J0IHsgZ2V0SGVscGVyTGlzdCB9IGZyb20gJy4uL3NlcnZpY2VzL2hlbHBlcic7XHJcbmltcG9ydCB0eXBlIHsgQ2lyY2xlQmVhbiwgTGlzdFBhZ2VCZWFuIH0gZnJvbSAnLi4vc2VydmljZXMvY2lyY2xlJztcclxuaW1wb3J0IHsgZ2V0Q2lyY2xlTGlzdCB9IGZyb20gJy4uL3NlcnZpY2VzL2NpcmNsZSc7XHJcblxyXG4vLyBBc3luY1RodW5rPOi/lOWbnueahOWAvOexu+Weiyzlh73mlbDnsbvlnot2b2lk6KGo56S65LiN5bim5Y+C5pWwLOS4jea4healmj5cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFJlY29tbWVuZExpc3QgPSB0aHVua1dyYXBwZXIoJ2hvbWUvcmVjb21tZW5kJywgZ2V0SGVscGVyTGlzdCk7XHJcbmV4cG9ydCBjb25zdCBmZXRjaExpa2VMaXN0ID0gdGh1bmtXcmFwcGVyKCdob21lL2xpa2UnLCBnZXRIZWxwZXJMaXN0KTtcclxuZXhwb3J0IGNvbnN0IGZldGNoTmVhcmJ5TGlzdCA9IHRodW5rV3JhcHBlcignaG9tZS9uZWFyYnknLCBnZXRIZWxwZXJMaXN0KTtcclxuZXhwb3J0IGNvbnN0IGZldGNoSG9ydExpc3QgPSB0aHVua1dyYXBwZXIoJ2hvbWUvaG9ydCcsIGdldEhlbHBlckxpc3QpO1xyXG5leHBvcnQgY29uc3QgZmV0Y2hSZWNvbW1lbmRDaXJjbGVMaXN0ID0gdGh1bmtXcmFwcGVyKCdob21lL2NpcmNsZS9yZWNvbW1lbmQnLCBnZXRDaXJjbGVMaXN0KTtcclxuXHJcbnR5cGUgSW5pU3RhdGUgPSB7XHJcbiAgaXNMb2FkOiBib29sZWFuO1xyXG4gIHJlY29tbWVuZERhdGE6IEhlbHBlckl0ZW1EYXRhW107XHJcbiAgbGlrZURhdGE6IEhlbHBlckl0ZW1EYXRhW107XHJcbiAgbmVhcmJ5RGF0YTogSGVscGVySXRlbURhdGFbXTtcclxuICBob3J0RGF0YTogSGVscGVySXRlbURhdGFbXTtcclxuICByZWNvbW1lbmRDaXJjbGVEYXRhOiBMaXN0UGFnZUJlYW48Q2lyY2xlQmVhbj47XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IEluaVN0YXRlID0ge1xyXG4gIGlzTG9hZDogZmFsc2UsXHJcbiAgcmVjb21tZW5kRGF0YTogW10sXHJcbiAgbGlrZURhdGE6IFtdLFxyXG4gIG5lYXJieURhdGE6IFtdLFxyXG4gIGhvcnREYXRhOiBbXSxcclxuICByZWNvbW1lbmRDaXJjbGVEYXRhOiB7XHJcbiAgICB0b3RhbDogMCxcclxuICAgIGxpc3Q6IFtdXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBob21lU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ2hvbWUnLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gIH0sXHJcbiAgZXh0cmFSZWR1Y2Vyczoge1xyXG4gICAgW2ZldGNoUmVjb21tZW5kTGlzdC5mdWxmaWxsZWQudHlwZV06IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFJlczxBcnJheTxIZWxwZXJJdGVtRGF0YT4+PikgPT4ge1xyXG4gICAgICBzdGF0ZS5pc0xvYWQgPSB0cnVlO1xyXG4gICAgICBzdGF0ZS5yZWNvbW1lbmREYXRhID0gYWN0aW9uLnBheWxvYWQuZGF0YTtcclxuICAgICAgY29uc29sZS5sb2coXCJmZXRjaFJlY29tbWVuZExpc3RcIiwgYWN0aW9uLnBheWxvYWQuZGF0YS5sZW5ndGgpO1xyXG5cclxuICAgIH0sXHJcbiAgICBbZmV0Y2hMaWtlTGlzdC5mdWxmaWxsZWQudHlwZV06IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFJlczxIZWxwZXJJdGVtRGF0YVtdPj4pID0+IHtcclxuICAgICAgc3RhdGUubGlrZURhdGEgPSBhY3Rpb24ucGF5bG9hZC5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImZldGNoTGlrZUxpc3RcIiwgYWN0aW9uLnBheWxvYWQuZGF0YS5sZW5ndGgpO1xyXG4gICAgfSxcclxuICAgIFtmZXRjaE5lYXJieUxpc3QuZnVsZmlsbGVkLnR5cGVdOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxSZXM8SGVscGVySXRlbURhdGFbXT4+KSA9PiB7XHJcbiAgICAgIHN0YXRlLm5lYXJieURhdGEgPSBhY3Rpb24ucGF5bG9hZC5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImZldGNoTmVhcmJ5TGlzdFwiLCBhY3Rpb24ucGF5bG9hZC5kYXRhLmxlbmd0aCk7XHJcbiAgICB9LFxyXG4gICAgW2ZldGNoSG9ydExpc3QuZnVsZmlsbGVkLnR5cGVdOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxSZXM8SGVscGVySXRlbURhdGFbXT4+KSA9PiB7XHJcbiAgICAgIHN0YXRlLmhvcnREYXRhID0gYWN0aW9uLnBheWxvYWQuZGF0YTtcclxuICAgICAgY29uc29sZS5sb2coXCJmZXRjaEhvcnRMaXN0XCIsIGFjdGlvbi5wYXlsb2FkLmRhdGEubGVuZ3RoKTtcclxuICAgIH0sXHJcbiAgICBbZmV0Y2hSZWNvbW1lbmRDaXJjbGVMaXN0LmZ1bGZpbGxlZC50eXBlXTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UmVzPExpc3RQYWdlQmVhbjxDaXJjbGVCZWFuPj4+KSA9PiB7XHJcbiAgICAgIHN0YXRlLnJlY29tbWVuZENpcmNsZURhdGEgPSBhY3Rpb24ucGF5bG9hZC5kYXRhO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbWVTbGljZS5yZWR1Y2VyO1xyXG4iLCIvKipcclxuICogQGF1dGhvcjogbGVyb3lcclxuICogQGRhdGU6IDIwMjEvOC8yMyAxNjowOVxyXG4gKiBAZGVzY3JpcHRpb27vvJrnm5HlkKwgQXN5bmNUaHVuayBsb2FkaW5nIOeKtuaAgVxyXG4gKi9cclxuaW1wb3J0IHR5cGUgeyBBbnlBY3Rpb24sIEFzeW5jVGh1bmsgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuXHJcbnR5cGUgR2VuZXJpY0FzeW5jVGh1bmsgPSBBc3luY1RodW5rPHVua25vd24sIHVua25vd24sIGFueT47XHJcblxyXG50eXBlIFBlbmRpbmdBY3Rpb24gPSBSZXR1cm5UeXBlPEdlbmVyaWNBc3luY1RodW5rWydwZW5kaW5nJ10+O1xyXG50eXBlIFJlamVjdGVkQWN0aW9uID0gUmV0dXJuVHlwZTxHZW5lcmljQXN5bmNUaHVua1sncmVqZWN0ZWQnXT47XHJcbnR5cGUgRnVsZmlsbGVkQWN0aW9uID0gUmV0dXJuVHlwZTxHZW5lcmljQXN5bmNUaHVua1snZnVsZmlsbGVkJ10+O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUGVuZGluZ0FjdGlvbihhY3Rpb246IEFueUFjdGlvbik6IGFjdGlvbiBpcyBQZW5kaW5nQWN0aW9uIHtcclxuICByZXR1cm4gYWN0aW9uLnR5cGUuZW5kc1dpdGgoJy9wZW5kaW5nJyk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVqZWN0ZWRBY3Rpb24oYWN0aW9uOiBBbnlBY3Rpb24pOiBhY3Rpb24gaXMgUmVqZWN0ZWRBY3Rpb24ge1xyXG4gIHJldHVybiBhY3Rpb24udHlwZS5lbmRzV2l0aCgnL3JlamVjdGVkJyk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVsZmlsbGVkQWN0aW9uKGFjdGlvbjogQW55QWN0aW9uKTogYWN0aW9uIGlzIEZ1bGZpbGxlZEFjdGlvbiB7XHJcbiAgcmV0dXJuIGFjdGlvbi50eXBlLmVuZHNXaXRoKCcvZnVsZmlsbGVkJyk7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIExvYWRpbmdTdGF0ZSA9IFJlY29yZDxzdHJpbmcsIGJvb2xlYW4+O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBMb2FkaW5nU3RhdGUgPSB7fTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkaW5nU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ2xvYWRpbmcnLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICAvLyBUaGUgYHJlZHVjZXJzYCBmaWVsZCBsZXRzIHVzIGRlZmluZSByZWR1Y2VycyBhbmQgZ2VuZXJhdGUgYXNzb2NpYXRlZCBhY3Rpb25zXHJcbiAgcmVkdWNlcnM6IHt9LFxyXG4gIC8vIFRoZSBgZXh0cmFSZWR1Y2Vyc2AgZmllbGQgbGV0cyB0aGUgc2xpY2UgaGFuZGxlIGFjdGlvbnMgZGVmaW5lZCBlbHNld2hlcmUsXHJcbiAgLy8gaW5jbHVkaW5nIGFjdGlvbnMgZ2VuZXJhdGVkIGJ5IGNyZWF0ZUFzeW5jVGh1bmsgb3IgaW4gb3RoZXIgc2xpY2VzLlxyXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XHJcbiAgICBidWlsZGVyXHJcbiAgICAgIC5hZGRNYXRjaGVyKGlzUGVuZGluZ0FjdGlvbiwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCB0eXBlID0gYWN0aW9uLnR5cGUucmVwbGFjZSgnL3BlbmRpbmcnLCAnJyk7XHJcbiAgICAgICAgc3RhdGVbdHlwZV0gPSB0cnVlO1xyXG4gICAgICB9KVxyXG4gICAgICAuYWRkTWF0Y2hlcihpc1JlamVjdGVkQWN0aW9uLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBhY3Rpb24udHlwZS5yZXBsYWNlKCcvcmVqZWN0ZWQnLCAnJyk7XHJcbiAgICAgICAgc3RhdGVbdHlwZV0gPSBmYWxzZTtcclxuICAgICAgfSlcclxuICAgICAgLy8gbWF0Y2hlciBjYW4ganVzdCByZXR1cm4gYm9vbGVhbiBhbmQgdGhlIG1hdGNoZXIgY2FuIHJlY2VpdmUgYSBnZW5lcmljIGFyZ3VtZW50XHJcbiAgICAgIC5hZGRNYXRjaGVyKGlzRnVsZmlsbGVkQWN0aW9uLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBhY3Rpb24udHlwZS5yZXBsYWNlKCcvZnVsZmlsbGVkJywgJycpO1xyXG4gICAgICAgIHN0YXRlW3R5cGVdID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZGluZ1NsaWNlLnJlZHVjZXI7XHJcbiIsIlxyXG5pbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgeyBnZXRTY3JvbGxiYXJXaWR0aCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgdHlwZSB7IEFwcFN0YXRlLCBBcHBUaHVuayB9IGZyb20gJy4uL3N0b3JlJztcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvZ2luU3RhdGUge1xyXG4gICAgaXNTaG93TG9naW46IGJvb2xlYW47XHJcbiAgICBzaG93Rm9yZ2V0UHdkOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IExvZ2luU3RhdGUgPSB7XHJcbiAgICBpc1Nob3dMb2dpbjogZmFsc2UsXHJcbiAgICBzaG93Rm9yZ2V0UHdkOiBmYWxzZSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ2xvZ2luJyxcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIC8vIFRoZSBgcmVkdWNlcnNgIGZpZWxkIGxldHMgdXMgZGVmaW5lIHJlZHVjZXJzIGFuZCBnZW5lcmF0ZSBhc3NvY2lhdGVkIGFjdGlvbnNcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgc2hvd0xvZ2luOiAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoID49IDEzMDApIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gZ2V0U2Nyb2xsYmFyV2lkdGgoKSArICdweCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RhdGUuaXNTaG93TG9naW4gPSB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGlkZUxvZ2luOiAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnMHB4JztcclxuICAgICAgICAgICAgc3RhdGUuaXNTaG93TG9naW4gPSBmYWxzZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dMb2dpblBhZ2U6IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUuc2hvd0ZvcmdldFB3ZCkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuc2hvd0ZvcmdldFB3ZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2hvd0ZvcmdldFB3ZFBhZ2U6IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXN0YXRlLnNob3dGb3JnZXRQd2QpIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnNob3dGb3JnZXRQd2QgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgc2hvd0xvZ2luLCBoaWRlTG9naW4sIHNob3dMb2dpblBhZ2UsIHNob3dGb3JnZXRQd2RQYWdlIH0gPSBsb2dpblNsaWNlLmFjdGlvbnM7XHJcblxyXG4vLyBUaGUgZnVuY3Rpb24gYmVsb3cgaXMgY2FsbGVkIGEgc2VsZWN0b3IgYW5kIGFsbG93cyB1cyB0byBzZWxlY3QgYSB2YWx1ZSBmcm9tXHJcbi8vIHRoZSBzdGF0ZS4gU2VsZWN0b3JzIGNhbiBhbHNvIGJlIGRlZmluZWQgaW5saW5lIHdoZXJlIHRoZXkncmUgdXNlZCBpbnN0ZWFkIG9mXHJcbi8vIGluIHRoZSBzbGljZSBmaWxlLiBGb3IgZXhhbXBsZTogYHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5jb3VudGVyLnZhbHVlKWBcclxuZXhwb3J0IGNvbnN0IGlzU2hvd0xvZ2luID0gKHN0YXRlOiBBcHBTdGF0ZSkgPT4gc3RhdGUubG9naW4uaXNTaG93TG9naW47XHJcblxyXG4vLyBXZSBjYW4gYWxzbyB3cml0ZSBzZXJ2aWNlcyBieSBoYW5kLCB3aGljaCBtYXkgY29udGFpbiBib3RoIHN5bmMgYW5kIGFzeW5jIGxvZ2ljLlxyXG4vLyBIZXJlJ3MgYW4gZXhhbXBsZSBvZiBjb25kaXRpb25hbGx5IGRpc3BhdGNoaW5nIGFjdGlvbnMgYmFzZWQgb24gY3VycmVudCBzdGF0ZS5cclxuZXhwb3J0IGNvbnN0IHNob3dPckhpZGVMb2dpbiA9XHJcbiAgICAoaXNTaG93OiBib29sZWFuKTogQXBwVGh1bmsgPT5cclxuICAgICAgICAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzTm93U2hvdyA9IGlzU2hvd0xvZ2luKGdldFN0YXRlKCkpO1xyXG4gICAgICAgICAgICBpZiAoaXNOb3dTaG93ICE9PSBpc1Nob3cpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc1Nob3cpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChzaG93TG9naW4oKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGhpZGVMb2dpbigpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2dpblNsaWNlLnJlZHVjZXI7XHJcbiIsIlxyXG5pbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IHRodW5rV3JhcHBlciB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgeyBDaXJjbGVCZWFuLCBnZXRDaXJjbGVMaXN0LCBMaXN0UGFnZUJlYW4gfSBmcm9tICcuLi9zZXJ2aWNlcy9jaXJjbGUnO1xyXG5pbXBvcnQgeyBnZXRVc2VySGVscGVyTGlzdCwgSGVscGVySXRlbURhdGEgfSBmcm9tICcuLi9zZXJ2aWNlcy9oZWxwZXInO1xyXG5pbXBvcnQgeyBSZXMgfSBmcm9tICcuLi9zZXJ2aWNlcy9ob21lJztcclxuaW1wb3J0IHsgZ2V0VXNlckluZm8gfSBmcm9tICcuLi9zZXJ2aWNlcy9taW5lJztcclxuaW1wb3J0IHsgVXNlckJlYW4gfSBmcm9tICcuLi9zZXJ2aWNlcy91c2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJJbmZvID0gdGh1bmtXcmFwcGVyKCd1c2VyL3VzZXJJbmZvJywgZ2V0VXNlckluZm8pO1xyXG5leHBvcnQgY29uc3QgZmV0Y2hNaW5lUmVjb21tZW5kQ2lyY2xlTGlzdCA9IHRodW5rV3JhcHBlcignbWluZS9jaXJjbGUvcmVjb21tZW5kJywgZ2V0Q2lyY2xlTGlzdCk7XHJcbmV4cG9ydCBjb25zdCBmZXRjaE1pbmVIZWxwZXJMaXN0ID0gdGh1bmtXcmFwcGVyKCdtaW5lL2hlbHBlcicsIGdldFVzZXJIZWxwZXJMaXN0KTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWluZVN0YXRlIHtcclxuICAgIHVzZXJJbmZvPzogVXNlckJlYW4sXHJcbiAgICByZWNvbW1lbmRDaXJjbGVEYXRhOiBMaXN0UGFnZUJlYW48Q2lyY2xlQmVhbj47XHJcbiAgICBtaW5lSGVscGVyRGF0YTogTGlzdFBhZ2VCZWFuPEhlbHBlckl0ZW1EYXRhPjtcclxuICAgIHVzZXJQYWdlU2VsZWN0SW5kZXg6IGFueVxyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IE1pbmVTdGF0ZSA9IHtcclxuICAgIHVzZXJJbmZvOiB1bmRlZmluZWQsXHJcbiAgICByZWNvbW1lbmRDaXJjbGVEYXRhOiB7XHJcbiAgICAgICAgdG90YWw6IDAsXHJcbiAgICAgICAgbGlzdDogW11cclxuICAgIH0sXHJcbiAgICBtaW5lSGVscGVyRGF0YToge1xyXG4gICAgICAgIHRvdGFsOiAwLFxyXG4gICAgICAgIGxpc3Q6IFtdXHJcbiAgICB9LFxyXG4gICAgdXNlclBhZ2VTZWxlY3RJbmRleDoge31cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBtaW5lU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiAnbWluZScsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIHN3aXRjaFVzZXJQYWdlU2VsZWN0SW5kZXg6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHsga2V5OiBzdHJpbmcsIGluZGV4OiBudW1iZXIgfT4pID0+IHtcclxuICAgICAgICAgICAgbGV0IHsga2V5LCBpbmRleCB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJQYWdlU2VsZWN0SW5kZXhba2V5XSA9IGluZGV4O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleSBpbiBzdGF0ZS51c2VyUGFnZVNlbGVjdEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUudXNlclBhZ2VTZWxlY3RJbmRleFtrZXldID0gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHN0YXRlLnVzZXJQYWdlU2VsZWN0SW5kZXhba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIumUgOavgVwiLCBzdGF0ZS51c2VyUGFnZVNlbGVjdEluZGV4W2tleV0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZXh0cmFSZWR1Y2Vyczoge1xyXG4gICAgICAgIFtmZXRjaFVzZXJJbmZvLmZ1bGZpbGxlZC50eXBlXTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UmVzPFVzZXJCZWFuPj4pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUudXNlckluZm8gPSBhY3Rpb24ucGF5bG9hZC5kYXRhO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW2ZldGNoTWluZVJlY29tbWVuZENpcmNsZUxpc3QuZnVsZmlsbGVkLnR5cGVdOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxSZXM8TGlzdFBhZ2VCZWFuPENpcmNsZUJlYW4+Pj4pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUucmVjb21tZW5kQ2lyY2xlRGF0YSA9IGFjdGlvbi5wYXlsb2FkLmRhdGE7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbZmV0Y2hNaW5lSGVscGVyTGlzdC5mdWxmaWxsZWQudHlwZV06IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFJlczxMaXN0UGFnZUJlYW48SGVscGVySXRlbURhdGE+Pj4pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUubWluZUhlbHBlckRhdGEgPSBhY3Rpb24ucGF5bG9hZC5kYXRhO1xyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn0pO1xyXG5leHBvcnQgY29uc3QgeyBzd2l0Y2hVc2VyUGFnZVNlbGVjdEluZGV4IH0gPSBtaW5lU2xpY2UuYWN0aW9ucztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1pbmVTbGljZS5yZWR1Y2VyO1xyXG4iLCJcclxuaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuaywgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgeyByZW1vdmVUb2tlbiwgc2F2ZVRva2VuIH0gZnJvbSAnLi4vLi4vdXRpbHMvdG9rZW5fdXRpbCc7XHJcbmltcG9ydCB7IHRodW5rV3JhcHBlciB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgeyBSZXMgfSBmcm9tICcuLi9zZXJ2aWNlcy9ob21lJztcclxuaW1wb3J0IHsgVXNlckJlYW4sIExvZ2luQmVhbiwgYXV0b0xvZ2luIH0gZnJvbSAnLi4vc2VydmljZXMvdXNlcic7XHJcbmltcG9ydCB7IEFwcFRodW5rIH0gZnJvbSAnLi4vc3RvcmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoQXV0b0xvZ2luID0gdGh1bmtXcmFwcGVyKCd1c2VyL2F1dG9Mb2dpbicsIGF1dG9Mb2dpbik7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJTdGF0ZSB7XHJcbiAgICBpc0xvZ2luOiBib29sZWFuLFxyXG4gICAgaXNGaW5pc2g6IGJvb2xlYW4sXHJcbiAgICB0b2tlbjogc3RyaW5nLFxyXG4gICAgdXNlcj86IFVzZXJCZWFuLFxyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFVzZXJTdGF0ZSA9IHtcclxuICAgIGlzTG9naW46IGZhbHNlLFxyXG4gICAgaXNGaW5pc2g6IGZhbHNlLFxyXG4gICAgdG9rZW46ICcnLFxyXG4gICAgdXNlcjogdW5kZWZpbmVkXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ3VzZXInLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBzYXZlVXNlckluZm86IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFJlczxMb2dpbkJlYW4+PikgPT4ge1xyXG4gICAgICAgICAgICBzYXZlVXNlckRhdGEoc3RhdGUsIGFjdGlvbi5wYXlsb2FkLmRhdGEpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIOmAgOWHuueZu+W9lVxyXG4gICAgICAgIG91dExvZ2luOiAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLpgIDlh7rnmbvlvZVcIik7XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS5pc0xvZ2luID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzRmluaXNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHN0YXRlLnRva2VuID0gXCJcIjtcclxuICAgICAgICAgICAgc3RhdGUudXNlciA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgcmVtb3ZlVG9rZW4oKTtcclxuICAgICAgICAgICAgLy8gZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGV4dHJhUmVkdWNlcnM6IHtcclxuICAgICAgICBbZmV0Y2hBdXRvTG9naW4uZnVsZmlsbGVkLnR5cGVdOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxSZXM8TG9naW5CZWFuPj4pID0+IHtcclxuICAgICAgICAgICAgc2F2ZVVzZXJEYXRhKHN0YXRlLCBhY3Rpb24ucGF5bG9hZC5kYXRhKTtcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vIOS/neWtmOeUqOaIt+aVsOaNrlxyXG5mdW5jdGlvbiBzYXZlVXNlckRhdGEoc3RhdGUsIGRhdGE6IExvZ2luQmVhbikge1xyXG4gICAgY29uc29sZS5sb2coXCJ0b2tlblwiLCBkYXRhLnRva2VuKTtcclxuXHJcbiAgICBzdGF0ZS5pc0xvZ2luID0gdHJ1ZTtcclxuICAgIGNvbnN0IHRva2VuID0gZGF0YS50b2tlbjtcclxuICAgIHN0YXRlLnRva2VuID0gdG9rZW47XHJcbiAgICBzYXZlVG9rZW4odG9rZW4pO1xyXG4gICAgc3RhdGUuaXNGaW5pc2ggPSBkYXRhLmlzX2ZpbmlzaCA9PT0gMTtcclxuICAgIHN0YXRlLnVzZXIgPSBkYXRhLnVzZXI7XHJcbn1cclxuXHJcbmNvbnN0IHsgc2F2ZVVzZXJJbmZvIH0gPSB1c2VyU2xpY2UuYWN0aW9ucztcclxuXHJcbmV4cG9ydCBjb25zdCB7IG91dExvZ2luIH0gPSB1c2VyU2xpY2UuYWN0aW9ucztcclxuXHJcbmV4cG9ydCBjb25zdCBzYXZlVXNlciA9XHJcbiAgICAoZGF0YTogYW55KTogQXBwVGh1bmsgPT5cclxuICAgICAgICAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNhdmVVc2VySW5mbyhkYXRhKSlcclxuICAgICAgICB9O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJTbGljZS5yZWR1Y2VyO1xyXG4iLCIvKipcclxuICogQGF1dGhvcjogbGVyb3lcclxuICogQGRhdGU6IDIwMjEvOC8yMyAxNjowOVxyXG4gKiBAZGVzY3JpcHRpb27vvJpzdG9yZVxyXG4gKi9cclxuaW1wb3J0IHR5cGUgeyBUaHVua0FjdGlvbiwgQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB0eXBlIHsgVHlwZWRVc2VTZWxlY3Rvckhvb2sgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyLCBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuXHJcbmltcG9ydCBsb2FkaW5nUmVkdWNlciBmcm9tICcuL3NsaWNlcy9sb2FkaW5nU2xpY2UnO1xyXG5pbXBvcnQgaG9tZVJlZHVjZXIgZnJvbSAnLi9zbGljZXMvaG9tZVNsaWNlJztcclxuaW1wb3J0IGxvZ2luUmVkdWNlciBmcm9tICcuL3NsaWNlcy9sb2dpblNsaWNlJztcclxuaW1wb3J0IHVzZXJSZWR1Y2VyIGZyb20gJy4vc2xpY2VzL3VzZXJTbGljZSc7XHJcbmltcG9ydCBjb21tb25SZWR1Y2VyIGZyb20gJy4vc2xpY2VzL2NvbW1vblNsaWNlJztcclxuaW1wb3J0IGNpcmNsZVJlZHVjZXIgZnJvbSAnLi9zbGljZXMvY2lyY2xlU2xpY2UnO1xyXG5pbXBvcnQgbWluZVJlZHVjZXIgZnJvbSAnLi9zbGljZXMvbWluZVNsaWNlJztcclxuXHJcbmNvbnN0IGNvbWJpbmVkUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBsb2FkaW5nOiBsb2FkaW5nUmVkdWNlcixcclxuICAgIGhvbWU6IGhvbWVSZWR1Y2VyLFxyXG4gICAgbG9naW46IGxvZ2luUmVkdWNlcixcclxuICAgIHVzZXI6IHVzZXJSZWR1Y2VyLFxyXG4gICAgY29tbW9uOiBjb21tb25SZWR1Y2VyLFxyXG4gICAgY2lyY2xlOiBjaXJjbGVSZWR1Y2VyLFxyXG4gICAgbWluZTogbWluZVJlZHVjZXIsXHJcbn0pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IEhZRFJBVEUpIHtcclxuICAgICAgICBjb25zdCBuZXh0U3RhdGUgPSB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLCAvLyB1c2UgcHJldmlvdXMgc3RhdGVcclxuICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsIC8vIGFwcGx5IGRlbHRhIGZyb20gaHlkcmF0aW9uXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gY29tYmluZWRSZWR1Y2VyKG5leHRTdGF0ZSwgYWN0aW9uKTtcclxuICAgIH1cclxuICAgIHJldHVybiBjb21iaW5lZFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcbn07XHJcblxyXG5jb25zdCBtYWtlU3RvcmUgPSAoKSA9PlxyXG4gICAgY29uZmlndXJlU3RvcmUoe1xyXG4gICAgICAgIHJlZHVjZXIsXHJcbiAgICAgICAgZGV2VG9vbHM6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxyXG4gICAgfSk7XHJcblxyXG5leHBvcnQgdHlwZSBBcHBTdG9yZSA9IFJldHVyblR5cGU8dHlwZW9mIG1ha2VTdG9yZT47XHJcbmV4cG9ydCB0eXBlIEFwcFN0YXRlID0gUmV0dXJuVHlwZTxBcHBTdG9yZVsnZ2V0U3RhdGUnXT47XHJcbmV4cG9ydCB0eXBlIEFwcERpc3BhdGNoID0gQXBwU3RvcmVbJ2Rpc3BhdGNoJ107XHJcblxyXG5leHBvcnQgdHlwZSBBcHBUaHVuazxSZXR1cm5UeXBlID0gdm9pZD4gPSBUaHVua0FjdGlvbjxcclxuICAgIFJldHVyblR5cGUsXHJcbiAgICBBcHBTdGF0ZSxcclxuICAgIHVua25vd24sXHJcbiAgICBBY3Rpb248c3RyaW5nPlxyXG4+O1xyXG5cclxuLy8gVXNlIHRocm91Z2hvdXQgeW91ciBhcHAgaW5zdGVhZCBvZiBwbGFpbiBgdXNlRGlzcGF0Y2hgIGFuZCBgdXNlU2VsZWN0b3JgXHJcbmV4cG9ydCBjb25zdCB1c2VBcHBEaXNwYXRjaCA9ICgpID0+IHVzZURpc3BhdGNoPEFwcERpc3BhdGNoPigpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUFwcFNlbGVjdG9yOiBUeXBlZFVzZVNlbGVjdG9ySG9vazxBcHBTdGF0ZT4gPSB1c2VTZWxlY3RvcjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVdyYXBwZXI8QXBwU3RvcmU+KG1ha2VTdG9yZSk7XHJcbiIsImltcG9ydCBDcnlwdG9KUyBmcm9tICdjcnlwdG8tanMnO1xyXG5cclxuY29uc3Qga2V5ID0gQ3J5cHRvSlMuZW5jLlV0ZjgucGFyc2UoJ3MzNzllOGI1NTFiZTRlZDAnKTtcclxuY29uc3QgaXYgPSBDcnlwdG9KUy5lbmMuVXRmOC5wYXJzZSgnMjAwMjAzODUwNTA2NTU4OCcpO1xyXG5cclxuLy8gYWVzIOWKoOWvhlxyXG5leHBvcnQgZnVuY3Rpb24gZW5jcnlwdChtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIGxldCBzcmNzID0gQ3J5cHRvSlMuZW5jLlV0ZjgucGFyc2UobWVzc2FnZSk7XHJcbiAgICBsZXQgZW5jcnlwdGVkID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQoc3Jjcywga2V5LCB7XHJcbiAgICAgICAgaXY6IGl2LFxyXG4gICAgICAgIG1vZGU6IENyeXB0b0pTLm1vZGUuRUNCLFxyXG4gICAgICAgIHBhZGRpbmc6IENyeXB0b0pTLnBhZC5Qa2NzN1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZW5jcnlwdGVkLmNpcGhlcnRleHQudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLkJhc2U2NCk7XHJcbn1cclxuXHJcbi8vIGFlcyDop6Plr4ZcclxuZXhwb3J0IGZ1bmN0aW9uIGRlY3J5cHQod29yZDogc3RyaW5nKSB7XHJcbiAgICBsZXQgZGVjcnlwdCA9IENyeXB0b0pTLkFFUy5kZWNyeXB0KHdvcmQsIGtleSwge1xyXG4gICAgICAgIGl2OiBpdixcclxuICAgICAgICBtb2RlOiBDcnlwdG9KUy5tb2RlLkVDQixcclxuICAgICAgICBwYWRkaW5nOiBDcnlwdG9KUy5wYWQuUGtjczdcclxuICAgIH0pO1xyXG4gICAgbGV0IGRlY3J5cHRlZFN0ciA9IGRlY3J5cHQudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpO1xyXG4gICAgcmV0dXJuIGRlY3J5cHRlZFN0ci50b1N0cmluZygpO1xyXG59IiwiaW1wb3J0IGF4aW9zLCB7IEF4aW9zUmVxdWVzdENvbmZpZyB9IGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgbm90aWZpY2F0aW9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IGRlY3J5cHQsIGVuY3J5cHQgfSBmcm9tICcuL2Flcyc7XHJcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSAnLi90b2tlbl91dGlsJztcclxuXHJcblxyXG5cclxuY29uc3QgcXMgPSByZXF1aXJlKCdxcycpO1xyXG5cclxuY29uc3QgY29kZU1lc3NhZ2U6IFJlY29yZDxudW1iZXIsIHN0cmluZz4gPSB7XHJcbiAgICAyMDA6ICfmnI3liqHlmajmiJDlip/ov5Tlm57or7fmsYLnmoTmlbDmja7jgIInLFxyXG4gICAgMjAxOiAn5paw5bu65oiW5L+u5pS55pWw5o2u5oiQ5Yqf44CCJyxcclxuICAgIDIwMjogJ+S4gOS4quivt+axguW3sue7j+i/m+WFpeWQjuWPsOaOkumYn++8iOW8guatpeS7u+WKoe+8ieOAgicsXHJcbiAgICAyMDQ6ICfliKDpmaTmlbDmja7miJDlip/jgIInLFxyXG4gICAgNDAwOiAn5Y+R5Ye655qE6K+35rGC5pyJ6ZSZ6K+v77yM5pyN5Yqh5Zmo5rKh5pyJ6L+b6KGM5paw5bu65oiW5L+u5pS55pWw5o2u55qE5pON5L2c44CCJyxcclxuICAgIDQwMTogJ+eUqOaIt+ayoeacieadg+mZkO+8iOS7pOeJjOOAgeeUqOaIt+WQjeOAgeWvhueggemUmeivr++8ieOAgicsXHJcbiAgICA0MDM6ICfnlKjmiLflvpfliLDmjojmnYPvvIzkvYbmmK/orr/pl67mmK/ooqvnpoHmraLnmoTjgIInLFxyXG4gICAgNDA0OiAn5Y+R5Ye655qE6K+35rGC6ZKI5a+555qE5piv5LiN5a2Y5Zyo55qE6K6w5b2V77yM5pyN5Yqh5Zmo5rKh5pyJ6L+b6KGM5pON5L2c44CCJyxcclxuICAgIDQwNTogJ+ivt+axguaWueazleS4jeiiq+WFgeiuuOOAgicsXHJcbiAgICA0MDY6ICfor7fmsYLnmoTmoLzlvI/kuI3lj6/lvpfjgIInLFxyXG4gICAgNDEwOiAn6K+35rGC55qE6LWE5rqQ6KKr5rC45LmF5Yig6Zmk77yM5LiU5LiN5Lya5YaN5b6X5Yiw55qE44CCJyxcclxuICAgIDQyMjogJ+W9k+WIm+W7uuS4gOS4quWvueixoeaXtu+8jOWPkeeUn+S4gOS4qumqjOivgemUmeivr+OAgicsXHJcbiAgICA1MDA6ICfmnI3liqHlmajlj5HnlJ/plJnor6/vvIzor7fmo4Dmn6XmnI3liqHlmajjgIInLFxyXG4gICAgNTAyOiAn572R5YWz6ZSZ6K+v44CCJyxcclxuICAgIDUwMzogJ+acjeWKoeS4jeWPr+eUqO+8jOacjeWKoeWZqOaaguaXtui/h+i9veaIlue7tOaKpOOAgicsXHJcbiAgICA1MDQ6ICfnvZHlhbPotoXml7bjgIInLFxyXG59O1xyXG5cclxuY29uc3QgYXBpID0ge1xyXG5cclxuICAgIGdldEhlYWRlcigpIHtcclxuICAgICAgICBsZXQgdG9rZW4gPSBnZXRUb2tlbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidG9rZW5cIiwgdG9rZW4pO1xyXG5cclxuICAgICAgICBsZXQgaGVhZGVyID0ge1xyXG4gICAgICAgICAgICBub3dfdGltZTogKG5ldyBEYXRlKCkpLmdldFRpbWUoKSArICcnLFxyXG4gICAgICAgICAgICB2ZXJzaW9uOiAnMC4xLjAnLFxyXG4gICAgICAgICAgICBjbGllbnQ6ICdwYycsXHJcbiAgICAgICAgICAgIHRva2VuOiB0b2tlbixcclxuICAgICAgICAgICAgZGlkOiBcIkhVQkFOR19QQ1wiLFxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYWVzSGVhZGVyID0gXCJub3dfdGltZT1cIiArIGhlYWRlcltcIm5vd190aW1lXCJdXHJcbiAgICAgICAgICAgICsgXCImY2xpZW50PVwiICsgaGVhZGVyW1wiY2xpZW50XCJdXHJcbiAgICAgICAgICAgICsgXCImdmVyc2lvbj1cIiArIGhlYWRlcltcInZlcnNpb25cIl1cclxuICAgICAgICAgICAgKyBcIiZkaWQ9XCIgKyBoZWFkZXJbXCJkaWRcIl1cclxuICAgICAgICAgICAgKyBcIiZ0b2tlbj1cIiArIGhlYWRlcltcInRva2VuXCJdO1xyXG5cclxuICAgICAgICBoZWFkZXJbJ3NpZ24nXSA9IGVuY3J5cHQoSlNPTi5zdHJpbmdpZnkoYWVzSGVhZGVyKSk7XHJcbiAgICAgICAgLy8gaGVhZGVyW1wiQ29ubmVjdGlvblwiXSA9ICdrZWVwLWFsaXZlJztcclxuICAgICAgICBoZWFkZXJbXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIl0gPSAnKic7XHJcbiAgICAgICAgcmV0dXJuIGhlYWRlcjtcclxuICAgIH0sXHJcblxyXG4gICAgcmVxdWVzdChjb25maWc/OiBBeGlvc1JlcXVlc3RDb25maWcpIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMuZ2V0SGVhZGVyKCk7XHJcbiAgICAgICAgbGV0IGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcclxuICAgICAgICAgICAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuQVBJX0hPU1QsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgICAgIHRpbWVvdXQ6IDEwMDAwLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyDor7fmsYLmi6bmiKrlmahcclxuICAgICAgICBpbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoXHJcbiAgICAgICAgICAgIChjb25maWcpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIOWPkei1t+ivt+axguaXtu+8jOWPlua2iOaOieW9k+WJjeato+WcqOi/m+ihjOeahOebuOWQjOivt+axglxyXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5tZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLnVybCxcclxuICAgICAgICAgICAgICAgICAgICBxcy5zdHJpbmdpZnkoY29uZmlnLnBhcmFtcyksXHJcbiAgICAgICAgICAgICAgICAgICAgcXMuc3RyaW5naWZ5KGNvbmZpZy5kYXRhKSxcclxuICAgICAgICAgICAgICAgIF0uam9pbignJicpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBlbmRpbmcuaGFzKHVybCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzlnKggcGVuZGluZyDkuK3lrZjlnKjlvZPliY3or7fmsYLmoIfor4bvvIzpnIDopoHlj5bmtojlvZPliY3or7fmsYLvvIzlubbkuJTnp7vpmaRcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYW5jZWwgPSBwZW5kaW5nLmdldCh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbCh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBlbmRpbmcuZGVsZXRlKHVybCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgYXhpb3MuQ2FuY2VsVG9rZW4oKGNhbmNlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVuZGluZy5zZXQodXJsLCBjYW5jZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuivt+axguaLpuaIqlwiLCBjb25maWcudXJsLCBjb25maWc/LmhlYWRlcnM/LlsndG9rZW4nXSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIOi9rOWPmOaVsOaNruagvOW8j1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZz8uaGVhZGVycz8uWydDb250ZW50LVR5cGUnXSA9PT0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdCA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ciA9IE9iamVjdC5rZXlzKGRhdGEpLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChrZXkpID0+IGAke2VuY29kZVVSSUNvbXBvbmVudChrZXkpfT0ke2VuY29kZVVSSUNvbXBvbmVudChkYXRhW2tleV0pfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHIuam9pbignJicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uZmlnO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IGVycm9yO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yVGV4dCA9IGNvZGVNZXNzYWdlW3Jlc3BvbnNlLnN0YXR1c10gfHwgcmVzcG9uc2Uuc3RhdHVzVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHN0YXR1cywgdXJsIH0gPSByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSA0MDEgfHwgc3RhdHVzID09PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLmVycm9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfmnKrnmbvlvZXmiJbnmbvlvZXlt7Lov4fmnJ/vvIzor7fph43mlrDnmbvlvZXjgIInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLmVycm9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYOivt+axgumUmeivryAke3N0YXR1c306ICR7dXJsfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBlcnJvclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5lcnJvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn5oKo55qE572R57uc5Y+R55Sf5byC5bi477yM5peg5rOV6L+e5o6l5pyN5Yqh5ZmoJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+e9kee7nOW8guW4uCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyDlk43lupTmi6bmiKrlmajljbPlvILluLjlpITnkIZcclxuICAgICAgICBpbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgIGlmIChkYXRhICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLm5lZWRfZGVjcnlwdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBKU09OLnBhcnNlKGRlY3J5cHQoZGF0YS5kYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmRhdGEgPSBjb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaW5zdGFuY2UoY29uZmlnID8gY29uZmlnIDoge30pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgcGVuZGluZyA9IG5ldyBNYXAoKTtcclxuXHJcbi8vIOa4heepuiBwZW5kaW5nIOS4reeahOivt+axgu+8iOWcqOi3r+eUsei3s+i9rOaXtuiwg+eUqO+8iVxyXG5leHBvcnQgY29uc3QgY2xlYXJQZW5kaW5nID0gKCkgPT4ge1xyXG4gICAgcGVuZGluZy5mb3JFYWNoKGZ1bmN0aW9uIChjYW5jZWwsIHVybCkge1xyXG4gICAgICAgIGNhbmNlbCh1cmwpO1xyXG4gICAgfSk7XHJcbiAgICBwZW5kaW5nLmNsZWFyKCk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpOyIsIlxyXG5jb25zdCBzdGF0aWNEYXRhID0ge1xyXG4gICAgY29sb3JMaXN0OiBbXHJcbiAgICAgICAgXCIjZmY4MjgyXCIsXHJcbiAgICAgICAgXCIjZmMyOTUwXCIsXHJcbiAgICAgICAgXCIjZjQ0ZWJmXCIsXHJcbiAgICAgICAgXCIjZDMzM2JlXCIsXHJcbiAgICAgICAgXCIjYmUzM2QzXCIsXHJcbiAgICAgICAgXCIjOTkzM2QzXCIsXHJcbiAgICAgICAgXCIjNzYzMmMzXCIsXHJcbiAgICAgICAgXCIjNjE0OWY0XCIsXHJcbiAgICAgICAgXCIjNDY2M2NjXCIsXHJcbiAgICAgICAgXCIjNTY5ZGUwXCIsXHJcbiAgICAgICAgXCIjNTZlMGRlXCIsXHJcbiAgICAgICAgXCIjMmZjZGE2XCIsXHJcbiAgICAgICAgXCIjMmZjZGNiXCIsXHJcbiAgICAgICAgXCIjNGNmMDkyXCIsXHJcbiAgICAgICAgXCIjYjRmMDRjXCIsXHJcbiAgICAgICAgXCIjZTFlNzNiXCIsXHJcbiAgICAgICAgXCIjZTdjNTNiXCIsXHJcbiAgICAgICAgXCIjZjY4ZjQzXCIsXHJcbiAgICAgICAgXCIjZjY0YjQzXCIsXHJcbiAgICAgICAgXCIjYzhhZGFjXCIsXHJcbiAgICAgICAgXCIjNjAxNWI1XCIsXHJcbiAgICAgICAgXCIjM2QyNDQ5XCIsXHJcbiAgICAgICAgXCIjM2QyNDQ5XCIsXHJcbiAgICAgICAgXCIjYjY0Y2EzXCIsXHJcbiAgICAgICAgXCIjNmM0NjY1XCIsXHJcbiAgICAgICAgXCIjNGM3NDcxXCIsXHJcbiAgICAgICAgXCIjOTM5ZDljXCIsXHJcbiAgICBdLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdGF0aWNEYXRhOyIsImltcG9ydCBjb29raWUgZnJvbSAncmVhY3QtY29va2llcydcclxuZXhwb3J0IGNvbnN0IHRva2VuS2V5ID0gXCJ1c2VyX3Rva2VuXCI7XHJcblxyXG4vKipcclxuICog5L+d5a2YdG9rZW5cclxuICogQHBhcmFtIHRva2VuIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNhdmVUb2tlbiA9ICh0b2tlbjogc3RyaW5nKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIuS/neWtmHRva2VuXCIsIHRva2VuKTtcclxuICAgIGNvb2tpZS5zYXZlKHRva2VuS2V5LCB0b2tlbik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDnp7vpmaR0b2tlblxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlbW92ZVRva2VuID0gKCkgPT4ge1xyXG4gICAgY29va2llLnJlbW92ZSh0b2tlbktleSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDojrflj5Z0b2tlblxyXG4gKiBAcmV0dXJucyBcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRUb2tlbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRva2VuID0gY29va2llLmxvYWQodG9rZW5LZXkpO1xyXG4gICAgY29uc29sZS5sb2coXCLojrflj5Z0b2tlblwiLCB0b2tlbik7XHJcbiAgICByZXR1cm4gdG9rZW4gPT0gbnVsbCA/ICcnIDogdG9rZW47XHJcbn0iLCJsZXQgZG9tYWluID0gcHJvY2Vzcy5lbnYuQVBJX0hPU1QgfHwgJyc7XHJcbi8vIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4vLyAgICAgZG9tYWluID0gZG9tYWluLnJlcGxhY2UoL15odHRwcy9pLCAnaHR0cCcpO1xyXG4vLyB9XHJcblxyXG5jb25zdCBVcmwgPSB7XHJcbiAgICBzdGF0aWNIb3N0OiBwcm9jZXNzLmVudi5TVEFUSUNfSE9TVCxcclxuICAgIGRvbWFpbixcclxuICAgIGNvbW1pdDogXCJjb21taXRcIiwgLy/lrabmoKHliIbnsbvln47luILnrYnkv6Hmga/ojrflj5ZcclxuICAgIGdldENpcmNsZVR5cGU6IFwiZ2V0X2NpcmNsZV90eXBlXCIsIC8v6I635b6X5ZyI5a2Q57G75YirXHJcblxyXG4gICAgZ2V0Q29kZTogXCJnZXRfY29kZVwiLCAvL+iOt+WPlumqjOivgeeggVxyXG4gICAgcHdkTG9naW46IFwibG9naW5cIiwgLy/lr4bnoIHnmbvlvZVcclxuICAgIGNvZGVMb2dpbjogXCJxdWlja19sb2dpblwiLCAvL+mqjOivgeeggeeZu+W9lVxyXG4gICAgYXV0b0xvZ2luOiBcImF1dG9fbG9naW5cIiwgLy/oh6rliqjnmbvlvZVcclxuICAgIHVzZXJJbmZvOiBcInVzZXIvaW5mb1wiLCAvL+eUqOaIt+S/oeaBr1xyXG5cclxuICAgIHVzZXJDaXJjbGVMaXN0OiBcImNpcmNsZS91c2VyX2pvaW5cIiwgLy/nlKjmiLfliqDlhaXnmoTlnIjlrZBcclxuICAgIGNpcmNsZUxpc3Q6IFwiY2lyY2xlL2xpc3RcIiwgLy/lnIjlrZDliJfooahcclxuXHJcbiAgICBoZWxwZXJMaXN0OiBcImhlbHBlci9saXN0XCIsIC8v5rGC5Yqp5YiX6KGoXHJcbiAgICB1c2VySGVscExpc3Q6IFwiaGVscGVyL3VzZXIvbGlzdFwiLCAvLyDnlKjmiLfmsYLliqnliJfooahcclxuXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFVybDtcclxuIiwiaW1wb3J0IHR5cGUgeyBBc3luY1RodW5rIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgbG93ZXJDYXNlIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHN0YXRpY0RhdGEgZnJvbSAnLi9zdGF0aWNEYXRhJztcclxuXHJcbmV4cG9ydCBjb25zdCB3YWl0VGltZSA9ICh0aW1lOiBudW1iZXIgPSAxMDApID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgIH0sIHRpbWUpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIG5hbWUgYWN0aW9u5ZCNXHJcbiAqIEBwYXJhbSBmbiDor7fmsYLlh73mlbBcclxuICogQHJldHVybnMgdGh1bmvljIXoo7nnmoRhY3Rpb25cclxuICogQFMg5YyF6KO555qE5Ye95pWw55qE57G75Z6L77yM5aaC5p6c5LiN5bim5Y+C5pWw55qE6K+d77yM6KaB5aGrdm9pZO+8jOS4jeeEtue8luivkeWZqOS8muaKpemUmVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHRodW5rV3JhcHBlciA9IDxUID0gYW55LCBTID0gYW55PihuYW1lOiBzdHJpbmcsIGZuOiAocGFyYW1zPzogYW55KSA9PiBQcm9taXNlPFQ+KSA9PiB7XHJcbiAgICByZXR1cm4gY3JlYXRlQXN5bmNUaHVuayhuYW1lLCBhc3luYyAocGFyYW1zPzogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKHBhcmFtcykge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZm4ocGFyYW1zISk7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9XHJcbiAgICB9KSBhcyBBc3luY1RodW5rPHVua25vd24sIFMsIFJlY29yZDxzdHJpbmcsIGFueT4+O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIOiOt+WPluacgOWkmuS4pOS9jeacieaViOWwj+aVsFxyXG4gKiBAcGFyYW0gZCBcclxuICogQHJldHVybnMgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0TWF4VHdvWmVybyA9IChkOiBudW1iZXIpID0+IHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKGQgKiAxMDApIC8gMTAwXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDojrflj5bkupLluK7mmL7npLrnmoTph5Hpop1cclxuICogQHBhcmFtIG1pbiDmnIDlsI/ph5Hpop1cclxuICogQHBhcmFtIG1heCDmnIDlpKfph5Hpop1cclxuICogQHJldHVybnMgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0SGVscE1vbmV5ID0gKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikgPT4ge1xyXG4gICAgaWYgKG1heCA9PSAwKSB7XHJcbiAgICAgICAgaWYgKG1pbiA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIuW+heWumlwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIu+/pVwiICsgZ2V0TWF4VHdvWmVybyhtaW4pICsgXCLlhYNcIjtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBcIu+/pVwiICsgZ2V0TWF4VHdvWmVybyhtaW4pICsgXCItXCIgKyBnZXRNYXhUd29aZXJvKG1heCkgKyBcIuWFg1wiO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5qC55o2u5b2T5YmN6I635Y+W5pe26Ze05a2X56ym5LiyXHJcbiAqIEBwYXJhbSB0aW1lIOaXtumXtOaIs1xyXG4gKiBAcGFyYW0gZGVmYXVsdFZhbHVlIOm7mOiupOWAvFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldFRpbWVTdHJpbmdCeU5vdyA9ICh0aW1lOiBudW1iZXIsIGRlZmF1bHRWYWx1ZTogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAodGltZSA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUodGltZSk7XHJcbiAgICBpZiAoZGF0ZSA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxuICAgIGxldCBub3dEYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGxldCB5ZXNEYXRlID0gbmV3IERhdGUobm93RGF0ZS5nZXRUaW1lKCkgLSAoMjQgKiA2MCAqIDYwICogMTAwMCkpO1xyXG4gICAgbGV0IHRvbW9ycm93RGF0ZSA9IG5ldyBEYXRlKG5vd0RhdGUuZ2V0VGltZSgpICsgKDI0ICogNjAgKiA2MCAqIDEwMDApKTtcclxuICAgIGlmIChub3dEYXRlLmdldEZ1bGxZZWFyKCkgPT09IGRhdGUuZ2V0RnVsbFllYXIoKVxyXG4gICAgICAgICYmIG5vd0RhdGUuZ2V0TW9udGgoKSA9PT0gZGF0ZS5nZXRNb250aCgpXHJcbiAgICAgICAgJiYgbm93RGF0ZS5nZXREYXRlKCkgPT09IGRhdGUuZ2V0RGF0ZSgpKSB7XHJcbiAgICAgICAgLy8g5ZCM5LiA5aSpXHJcbiAgICAgICAgcmV0dXJuIEFkZFooZGF0ZS5nZXRIb3VycygpKSArIFwiOlwiICsgQWRkWihkYXRlLmdldE1pbnV0ZXMoKSk7XHJcbiAgICB9IGVsc2UgaWYgKHllc0RhdGUuZ2V0RnVsbFllYXIoKSA9PT0gZGF0ZS5nZXRGdWxsWWVhcigpXHJcbiAgICAgICAgJiYgeWVzRGF0ZS5nZXRNb250aCgpID09PSBkYXRlLmdldE1vbnRoKClcclxuICAgICAgICAmJiB5ZXNEYXRlLmdldERhdGUoKSA9PT0gZGF0ZS5nZXREYXRlKCkpIHtcclxuICAgICAgICAvLyDmmKjlpKlcclxuICAgICAgICByZXR1cm4gXCLmmKjlpKkgXCIgKyBBZGRaKGRhdGUuZ2V0SG91cnMoKSkgKyBcIjpcIiArIEFkZFooZGF0ZS5nZXRNaW51dGVzKCkpO1xyXG4gICAgfSBlbHNlIGlmICh0b21vcnJvd0RhdGUuZ2V0RnVsbFllYXIoKSA9PT0gZGF0ZS5nZXRGdWxsWWVhcigpXHJcbiAgICAgICAgJiYgdG9tb3Jyb3dEYXRlLmdldE1vbnRoKCkgPT09IGRhdGUuZ2V0TW9udGgoKVxyXG4gICAgICAgICYmIHRvbW9ycm93RGF0ZS5nZXREYXRlKCkgPT09IGRhdGUuZ2V0RGF0ZSgpKSB7XHJcbiAgICAgICAgLy8g5piO5aSpXHJcbiAgICAgICAgcmV0dXJuIFwi5piO5aSpIFwiICsgQWRkWihkYXRlLmdldEhvdXJzKCkpICsgXCI6XCIgKyBBZGRaKGRhdGUuZ2V0TWludXRlcygpKTtcclxuICAgIH0gZWxzZSBpZiAobm93RGF0ZS5nZXRGdWxsWWVhcigpID09PSBkYXRlLmdldEZ1bGxZZWFyKCkpIHtcclxuICAgICAgICAvLyDlkIzkuIDlubRcclxuICAgICAgICByZXR1cm4gQWRkWihkYXRlLmdldE1vbnRoKCkpICsgXCLmnIhcIiArIEFkZFooZGF0ZS5nZXREYXRlKCkpICsgXCLml6UgXCIgKyBBZGRaKGRhdGUuZ2V0SG91cnMoKSkgKyBcIjpcIiArIEFkZFooZGF0ZS5nZXRNaW51dGVzKCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKSArIFwi5bm0XCIgKyBBZGRaKGRhdGUuZ2V0TW9udGgoKSkgKyBcIuaciFwiICsgQWRkWihkYXRlLmdldERhdGUoKSkgKyBcIuaXpSBcIiArIEFkZFooZGF0ZS5nZXRIb3VycygpKSArIFwiOlwiICsgQWRkWihkYXRlLmdldE1pbnV0ZXMoKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmlbDlrZflsI/kuo4xMCDliY3pnaLooaUwXHJcbiAqIEBwYXJhbSBudW0gXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuZnVuY3Rpb24gQWRkWihudW06IG51bWJlcikge1xyXG4gICAgaWYgKG51bSA8IDEwKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiMFwiICsgbnVtO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCIgKyBudW07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmiYvmnLrlj7fpqozor4FcclxuICogQHBhcmFtIHBob25lIOaJi+acuuWPt1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNoZWNrUGhvbmUgPSAocGhvbmU6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKCFwaG9uZSkge1xyXG4gICAgICAgIHJldHVybiAn6K+36L6T5YWl5omL5py65Y+3JztcclxuICAgIH1cclxuICAgIHZhciBteXJlZyA9IC9eMVxcZHsxMH0kLztcclxuICAgIGlmICghbXlyZWcudGVzdChwaG9uZSkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuaJi+acuuWPt+agvOW8j+mUmeivr1wiKTtcclxuICAgICAgICByZXR1cm4gJ+aJi+acuuWPt+agvOW8j+mUmeivryc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDpqozor4HnoIHpqozor4FcclxuICogQHBhcmFtIGNvZGUgXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNoZWNrQ29kZSA9IChjb2RlOiBzdHJpbmcpID0+IHtcclxuICAgIGlmICghY29kZSkge1xyXG4gICAgICAgIHJldHVybiAn6K+35YWI6I635Y+W6aqM6K+B56CBJztcclxuICAgIH1cclxuICAgIHZhciBteXJlZyA9IC9eXFxkezQsNn0kLztcclxuICAgIGlmICghbXlyZWcudGVzdChjb2RlKSkge1xyXG4gICAgICAgIHJldHVybiAn6K+36L6T5YWl5q2j56Gu55qE6aqM6K+B56CBJztcclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxufVxyXG5cclxuLyoqXHJcbiAqIOmqjOivgeWvhueggVxyXG4gKiBAcGFyYW0gcHdkIFxyXG4gKiBAcmV0dXJucyBcclxuICovXHJcbmV4cG9ydCBjb25zdCBjaGVja1B3ZCA9IChwd2Q6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKCFwd2QpIHtcclxuICAgICAgICByZXR1cm4gJ+ivt+i+k+WFpeWvhueggSc7XHJcbiAgICB9XHJcbiAgICBpZiAocHdkLmxlbmd0aCA8IDYgfHwgcHdkLmxlbmd0aCA+IDIwKSB7XHJcbiAgICAgICAgcmV0dXJuICfor7fovpPlhaU2LTIw5L2N5a+G56CBJztcclxuICAgIH1cclxuICAgIHZhciBteXJlZyA9IC9eKD89LipbYS16QS1aXSkoPz0uKlxcZCkuezYsMjB9JC87XHJcbiAgICBpZiAoIW15cmVnLnRlc3QocHdkKSkge1xyXG4gICAgICAgIHJldHVybiAn5a+G56CB5qC85byP6ZSZ6K+vJztcclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPlua7muWKqOadoeWuveW6plxyXG4gKiBAcmV0dXJucyBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JvbGxiYXJXaWR0aCgpIHtcclxuICAgIHZhciBvUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSxcclxuICAgICAgICBzdHlsZXMgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnXHJcbiAgICAgICAgfSwgaSwgY2xpZW50V2lkdGgxLCBjbGllbnRXaWR0aDIsIHNjcm9sbGJhcldpZHRoO1xyXG4gICAgZm9yIChpIGluIHN0eWxlcykgb1Auc3R5bGVbaV0gPSBzdHlsZXNbaV07XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG9QKTtcclxuICAgIGNsaWVudFdpZHRoMSA9IG9QLmNsaWVudFdpZHRoO1xyXG4gICAgb1Auc3R5bGUub3ZlcmZsb3dZID0gJ3Njcm9sbCc7XHJcbiAgICBjbGllbnRXaWR0aDIgPSBvUC5jbGllbnRXaWR0aDtcclxuICAgIHNjcm9sbGJhcldpZHRoID0gY2xpZW50V2lkdGgxIC0gY2xpZW50V2lkdGgyO1xyXG4gICAgb1AucmVtb3ZlKCk7XHJcbiAgICByZXR1cm4gc2Nyb2xsYmFyV2lkdGg7XHJcbn1cclxuXHJcbi8vIOagueaNruWtl+espuS4summluWtl+espmFzY2lp5YC86I635Y+W6aKc6ImyXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb2xvckJ5U3RyaW5nKGtleTogc3RyaW5nKSB7XHJcbiAgICBsZXQgY29kZSA9IGtleS5jaGFyQ29kZUF0KDApO1xyXG4gICAgcmV0dXJuIHN0YXRpY0RhdGEuY29sb3JMaXN0W2NvZGUgJSBzdGF0aWNEYXRhLmNvbG9yTGlzdC5sZW5ndGhdO1xyXG59XHJcblxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJyZWNvbW1lbmRDaXJjbGVcIjogXCJyZWNvbW1lbmRfY2lyY2xlX3JlY29tbWVuZENpcmNsZV9fMlBoQnBcIixcblx0XCJyZWNvbW1lbmRDaXJjbGVDb250ZW50XCI6IFwicmVjb21tZW5kX2NpcmNsZV9yZWNvbW1lbmRDaXJjbGVDb250ZW50X18xOHVUbVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYmFubmVyXCI6IFwiaG9tZV9iYW5uZXJfYmFubmVyX18zc1d4M1wiLFxuXHRcImJhbm5lckl0ZW1cIjogXCJob21lX2Jhbm5lcl9iYW5uZXJJdGVtX18ydTFlbFwiLFxuXHRcIml0ZW1JbWdcIjogXCJob21lX2Jhbm5lcl9pdGVtSW1nX18xOFZNTVwiLFxuXHRcIml0ZW1TaG93XCI6IFwiaG9tZV9iYW5uZXJfaXRlbVNob3dfXzJzb1U5XCIsXG5cdFwiaXRlbUhpZGVcIjogXCJob21lX2Jhbm5lcl9pdGVtSGlkZV9fMl9rZDRcIixcblx0XCJiYW5uZXJJbmRpY2F0b3JcIjogXCJob21lX2Jhbm5lcl9iYW5uZXJJbmRpY2F0b3JfXzNXQ1ZLXCIsXG5cdFwiaW5kaWNhdG9yQ29udGVudFwiOiBcImhvbWVfYmFubmVyX2luZGljYXRvckNvbnRlbnRfXzFiWERCXCIsXG5cdFwibWVudUxlZnRcIjogXCJob21lX2Jhbm5lcl9tZW51TGVmdF9fMjNJUHdcIixcblx0XCJ1c2VyQ2FyZFwiOiBcImhvbWVfYmFubmVyX3VzZXJDYXJkX19WQTFfNVwiLFxuXHRcImluZGljYXRvclwiOiBcImhvbWVfYmFubmVyX2luZGljYXRvcl9fM3BJLWdcIixcblx0XCJpbmRpY2F0b3JJdGVtXCI6IFwiaG9tZV9iYW5uZXJfaW5kaWNhdG9ySXRlbV9fWGVMaC1cIixcblx0XCJpbmRpY2F0b3JJdGVtQ2hlY2tcIjogXCJob21lX2Jhbm5lcl9pbmRpY2F0b3JJdGVtQ2hlY2tfX2JjWmNOXCIsXG5cdFwibWVudVJpZ2h0XCI6IFwiaG9tZV9iYW5uZXJfbWVudVJpZ2h0X18zMEZlZVwiLFxuXHRcIm1lbnVSaWdodFRpdGxlXCI6IFwiaG9tZV9iYW5uZXJfbWVudVJpZ2h0VGl0bGVfX1FHY2hUXCIsXG5cdFwibWVudUNvbnRlbnRcIjogXCJob21lX2Jhbm5lcl9tZW51Q29udGVudF9fMm1MSFVcIixcblx0XCJtZW51SXRlbVwiOiBcImhvbWVfYmFubmVyX21lbnVJdGVtX18zSmgwRFwiLFxuXHRcIm1lbnVJbWdEaXZcIjogXCJob21lX2Jhbm5lcl9tZW51SW1nRGl2X19VU2JfVVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaXRlbUNvbnRlbnRcIjogXCJob21lX2NvbnRlbnRfaXRlbV9pdGVtQ29udGVudF9fMWhVOEZcIixcblx0XCJjb250ZW50VGl0bGVcIjogXCJob21lX2NvbnRlbnRfaXRlbV9jb250ZW50VGl0bGVfXzFwZzBZXCIsXG5cdFwibG9va01vcmVcIjogXCJob21lX2NvbnRlbnRfaXRlbV9sb29rTW9yZV9fM2hjTWhcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIml0ZW1Db250ZW50XCI6IFwiaGVscGVyX2l0ZW1faXRlbUNvbnRlbnRfX1BiSzNJXCIsXG5cdFwidGl0bGVcIjogXCJoZWxwZXJfaXRlbV90aXRsZV9fM1hWOGNcIixcblx0XCJoZWxwTmFtZVwiOiBcImhlbHBlcl9pdGVtX2hlbHBOYW1lX19UY2hjRVwiLFxuXHRcImhlbHBNb25leVwiOiBcImhlbHBlcl9pdGVtX2hlbHBNb25leV9fMW5hSUxcIixcblx0XCJoZWxwVGltZVwiOiBcImhlbHBlcl9pdGVtX2hlbHBUaW1lX18yUHEzOFwiLFxuXHRcInBlb3BsZU51bWJlclwiOiBcImhlbHBlcl9pdGVtX3Blb3BsZU51bWJlcl9fMU1aRm9cIixcblx0XCJob3RJbWdcIjogXCJoZWxwZXJfaXRlbV9ob3RJbWdfXzNRVHBuXCIsXG5cdFwiaGVscFVzZXJcIjogXCJoZWxwZXJfaXRlbV9oZWxwVXNlcl9fMXJFRnZcIixcblx0XCJ1c2VySGVhZFwiOiBcImhlbHBlcl9pdGVtX3VzZXJIZWFkX18zMEpiOVwiLFxuXHRcInVzZXJOYW1lXCI6IFwiaGVscGVyX2l0ZW1fdXNlck5hbWVfXzEwQWRtXCIsXG5cdFwiYWRkcmVzc1wiOiBcImhlbHBlcl9pdGVtX2FkZHJlc3NfXzNza0xmXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250ZW50XCI6IFwiaG9tZV9jb250ZW50X2NvbnRlbnRfX3J6SzEwXCIsXG5cdFwiY29udGVudEJvZHlcIjogXCJob21lX2NvbnRlbnRfY29udGVudEJvZHlfX0phV3J1XCIsXG5cdFwiY29udGVudExlZnRcIjogXCJob21lX2NvbnRlbnRfY29udGVudExlZnRfXzNEUkVKXCIsXG5cdFwiY29udGVudENlbnRlclwiOiBcImhvbWVfY29udGVudF9jb250ZW50Q2VudGVyX19XZ1R3TFwiLFxuXHRcImNvbnRlbnRSaWdodFwiOiBcImhvbWVfY29udGVudF9jb250ZW50UmlnaHRfXzFzaGMzXCIsXG5cdFwiaG90TmV3c1wiOiBcImhvbWVfY29udGVudF9ob3ROZXdzX18ycFVVSVwiLFxuXHRcImhvdE5ld3NDb250ZW50XCI6IFwiaG9tZV9jb250ZW50X2hvdE5ld3NDb250ZW50X19oaXI2YlwiLFxuXHRcImhvdE5ld3NJdGVtXCI6IFwiaG9tZV9jb250ZW50X2hvdE5ld3NJdGVtX19Tei1FQlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2lyY2xlSXRlbVwiOiBcImNpcmNsZV9pdGVtX2NpcmNsZUl0ZW1fXzNvQXUtXCIsXG5cdFwibG9nb1wiOiBcImNpcmNsZV9pdGVtX2xvZ29fX0lMWGY2XCIsXG5cdFwiY2lyY2xlQ29udGVudFwiOiBcImNpcmNsZV9pdGVtX2NpcmNsZUNvbnRlbnRfXzFnMTI3XCIsXG5cdFwiY2VudGVyQ29udGVudFwiOiBcImNpcmNsZV9pdGVtX2NlbnRlckNvbnRlbnRfXzFTRFRuXCIsXG5cdFwiY2lyY2xlTmFtZVwiOiBcImNpcmNsZV9pdGVtX2NpcmNsZU5hbWVfXzFPcUV1XCIsXG5cdFwiZGVzY1wiOiBcImNpcmNsZV9pdGVtX2Rlc2NfXzItRUhJXCIsXG5cdFwiZm9sbG93XCI6IFwiY2lyY2xlX2l0ZW1fZm9sbG93X18yLXRRSFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidGl0bGVDb250ZW50XCI6IFwibW9kdWxlX3RpdGxlX3RpdGxlQ29udGVudF9fcUxiVEdcIixcblx0XCJsZWZ0Qm9yZGVyXCI6IFwibW9kdWxlX3RpdGxlX2xlZnRCb3JkZXJfX2YwRUNZXCIsXG5cdFwidGl0bGVcIjogXCJtb2R1bGVfdGl0bGVfdGl0bGVfXzNSbFZ0XCIsXG5cdFwibW9yZVwiOiBcIm1vZHVsZV90aXRsZV9tb3JlX18xUXBYeVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYm9keVwiOiBcIkhvbWVfYm9keV9fMmtlMmdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRlbnRMZWZ0UFwiOiBcImxlZnRfbWVudV93aWRnZXRfY29udGVudExlZnRQX18xa0h3ZFwiLFxuXHRcImxlZnRNZW51TGlzdFwiOiBcImxlZnRfbWVudV93aWRnZXRfbGVmdE1lbnVMaXN0X19fSGQ1aVwiLFxuXHRcIm1lbnVJdGVtXCI6IFwibGVmdF9tZW51X3dpZGdldF9tZW51SXRlbV9fMkM5SHJcIixcblx0XCJtZXNzYWdlXCI6IFwibGVmdF9tZW51X3dpZGdldF9tZXNzYWdlX18xU0NJNlwiLFxuXHRcImxlZnRNZW51TGlzdENoZWNrXCI6IFwibGVmdF9tZW51X3dpZGdldF9sZWZ0TWVudUxpc3RDaGVja19fM3RJOFlcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1lbnVMZWZ0XCI6IFwibGVmdF91c2VyX2NhcmRfbWVudUxlZnRfXzNKV2tBXCIsXG5cdFwic2lnblVzZXJcIjogXCJsZWZ0X3VzZXJfY2FyZF9zaWduVXNlcl9fMm5EVlZcIixcblx0XCJ1c2VySGVhZGVyXCI6IFwibGVmdF91c2VyX2NhcmRfdXNlckhlYWRlcl9fMzJiZlhcIixcblx0XCJ1c2VyRGVzY1wiOiBcImxlZnRfdXNlcl9jYXJkX3VzZXJEZXNjX18zUzJhdVwiLFxuXHRcInNpZ25CdG5cIjogXCJsZWZ0X3VzZXJfY2FyZF9zaWduQnRuX19DTEFmMlwiLFxuXHRcImxvZ2luQnRuXCI6IFwibGVmdF91c2VyX2NhcmRfbG9naW5CdG5fXzE2eDE5XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb290ZXJcIjogXCJmb290ZXJfZm9vdGVyX18xY0J5QVwiLFxuXHRcImNvbnRlbnRcIjogXCJmb290ZXJfY29udGVudF9fMnhWY2lcIixcblx0XCJkb3duXCI6IFwiZm9vdGVyX2Rvd25fXzFUZnBLXCIsXG5cdFwiZG93bk90aGVyXCI6IFwiZm9vdGVyX2Rvd25PdGhlcl9fMjNFUHVcIixcblx0XCJjb3B5XCI6IFwiZm9vdGVyX2NvcHlfXzJzbDV1XCIsXG5cdFwiY29weUxpbmtcIjogXCJmb290ZXJfY29weUxpbmtfXzE4YTFpXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkZXJcIjogXCJoZWFkZXJfaGVhZGVyX18ycTF3RlwiLFxuXHRcImNvbnRlbnRcIjogXCJoZWFkZXJfY29udGVudF9fbTM0cWFcIixcblx0XCJsb2dvXCI6IFwiaGVhZGVyX2xvZ29fX1pIa2NHXCIsXG5cdFwibWVudVwiOiBcImhlYWRlcl9tZW51X18zS3I3QlwiLFxuXHRcIm1lbnVBSG9tZVwiOiBcImhlYWRlcl9tZW51QUhvbWVfXzFKNWZpXCIsXG5cdFwibWVudUFIZWxwXCI6IFwiaGVhZGVyX21lbnVBSGVscF9fMW5xN1NcIixcblx0XCJtZW51QUR5bmFtaWNcIjogXCJoZWFkZXJfbWVudUFEeW5hbWljX18ybWl4cVwiLFxuXHRcIm1lbnVBQ2lyY2xlXCI6IFwiaGVhZGVyX21lbnVBQ2lyY2xlX18zOVJ2WFwiLFxuXHRcIm1lbnVTZWxlY3RcIjogXCJoZWFkZXJfbWVudVNlbGVjdF9fMUNKYWFcIixcblx0XCJzZWFyY2hcIjogXCJoZWFkZXJfc2VhcmNoX18xQWlTVVwiLFxuXHRcInNlYXJjaEljb25cIjogXCJoZWFkZXJfc2VhcmNoSWNvbl9fMU5sUGJcIixcblx0XCJ1c2VySW5mb1wiOiBcImhlYWRlcl91c2VySW5mb19fMi0zV2pcIixcblx0XCJ1c2VyTWVudVwiOiBcImhlYWRlcl91c2VyTWVudV9fM1BveTNcIixcblx0XCJ1c2VyQ2VudGVyXCI6IFwiaGVhZGVyX3VzZXJDZW50ZXJfXzFrdFEwXCIsXG5cdFwidXNlckNlbnRlck5hbWVcIjogXCJoZWFkZXJfdXNlckNlbnRlck5hbWVfXzJ4LU85XCIsXG5cdFwidXNlckNlbnRlckl0ZW1cIjogXCJoZWFkZXJfdXNlckNlbnRlckl0ZW1fX1JmVXB3XCIsXG5cdFwic2VuZER5bmFtaWNcIjogXCJoZWFkZXJfc2VuZER5bmFtaWNfXzFxOGtBXCIsXG5cdFwic2VuZERuYW1pY0l0ZW1cIjogXCJoZWFkZXJfc2VuZERuYW1pY0l0ZW1fXzE5cURKXCIsXG5cdFwibWVzc2FnZUhpbnRcIjogXCJoZWFkZXJfbWVzc2FnZUhpbnRfXzE5cHg1XCIsXG5cdFwiZG93bkxvZ2luXCI6IFwiaGVhZGVyX2Rvd25Mb2dpbl9fMjF2SDRcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRvVG9wXCI6IFwibGF5b3V0X3RvVG9wX18yWXg1UFwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyeXB0by1qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInFzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvb2tpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJNb2R1bGVUaXRsZSIsIkNpcmNsZUl0ZW0iLCJSZWNvbW1lbmRDaXJjbGUiLCJyZWNvbW1lbmRDaXJjbGUiLCJyZWNvbW1lbmRDaXJjbGVDb250ZW50IiwibGlzdCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImlkIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWVCYW5uZXIiLCJIb21lQ2VudGVyIiwiTGVmdE1lbnVXaWRnZXQiLCJpc0Rvd24iLCJIb21lQ29udGVudCIsInByb3BzIiwibWVudUxpc3QiLCJyZWNvbW1lbmREYXRhIiwibGlrZURhdGEiLCJuZWFyYnlEYXRhIiwiaG9ydERhdGEiLCJob3ROZXdzIiwidGl0bGUiLCJsaW5rIiwidGltZXJJRCIsIm1lbnVMb2NhdGlvbmxpc3QiLCJzZWxlY3RJbmRleCIsInNldFNlbGVjdEluZGV4Iiwid2luZG93Iiwib25zY3JvbGwiLCJiaW5kSGFuZGxlU2Nyb2xsIiwiaW5pdE1lbnVMb2NhdGlvbkxpc3QiLCJzZXRNZW51TG9jYXRpb24iLCJkb1Njcm9sbCIsImNsZWFySW50ZXJ2YWwiLCJsZW5ndGgiLCJjaGlsZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvZmZzZXRUb3AiLCJvZmZzZXRIZWlnaHQiLCJtZW51SXRlbUNsaWNrIiwidGVzTm9kZSIsInNldEludGVydmFsIiwiY2xlYXJUaW1lb3V0IiwiZWxPZmZzZXQiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiZXZlbnQiLCJzY3JvbGxUb1RvcCIsImxlZnRNZW51IiwicGFnZVlPZmZzZXQiLCJzdHlsZSIsInBhZ2VXaWR0aCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwibGVmdCIsInBhZ2VYT2Zmc2V0IiwicG9zaXRpb24iLCJjb250ZW50IiwiY29udGVudEJvZHkiLCJjb250ZW50TGVmdCIsImNvbnRlbnRDZW50ZXIiLCJjb250ZW50UmlnaHQiLCJob3ROZXdzQ29udGVudCIsImhvdE5ld3NJdGVtIiwiTGVmdFVzZXJDYXJkIiwidXNlQXBwU2VsZWN0b3IiLCJ1c2VSb3V0ZXIiLCJ1c2VEaXNwYXRjaCIsInNob3dPckhpZGVMb2dpbiIsInN3aXRjaFVzZXJQYWdlU2VsZWN0SW5kZXgiLCJzdG9wIiwidGltZXJJRE1vdmUiLCJyZWFsSW5kZXgiLCJpc0xvZ2luIiwidXNlciIsInN0YXRlIiwicm91dGVyIiwiZGlzcGF0Y2giLCJkYXRhIiwibWVudXMiLCJzdGFydFRpbWUiLCJzd2l0Y2hCYW5uZXIiLCJpdGVtQ2xpY2siLCJkb0xvbmdTdG9wQ2xpY2siLCJvbk15TW91c2VFbnRlciIsIm9uTXlNb3VzZUxlYXZlIiwiZGVhbENsaWNrIiwia2V5IiwicHVzaCIsInBhdGhuYW1lIiwic2hvd0xvZ2luIiwiYmFubmVyIiwiYmFubmVySXRlbSIsIml0ZW1TaG93IiwiaXRlbUhpZGUiLCJqb2luIiwiYmFja2dyb3VuZENvbG9yIiwiYmciLCJpdGVtSW1nIiwidXJsIiwiYmFubmVySW5kaWNhdG9yIiwiaW5kaWNhdG9yQ29udGVudCIsIm1lbnVMZWZ0IiwidXNlckNhcmQiLCJpbmRpY2F0b3IiLCJpbmRpY2F0b3JJdGVtIiwiaW5kaWNhdG9ySXRlbUNoZWNrIiwibWVudVJpZ2h0IiwibWVudVJpZ2h0VGl0bGUiLCJtZW51Q29udGVudCIsIm1lbnVJdGVtIiwibWVudUltZ0RpdiIsImJhY2tncm91bmRJbWFnZSIsImltYWdlIiwiSGVscGVySXRlbSIsIkhvbWVDb250ZW50SXRlbSIsIml0ZW1Db250ZW50IiwiY29udGVudFRpdGxlIiwibG9va01vcmUiLCJnZXRIZWxwTW9uZXkiLCJnZXRUaW1lU3RyaW5nQnlOb3ciLCJMaW5rIiwiZ2V0SGVscFRpbWUiLCJzdGFydCIsImVuZCIsImVuZFRpbWUiLCJnZXRQZW9wbGVOdW1iZXIiLCJudW0iLCJnZXRBZGRyZXNzIiwicHJvdmluY2UiLCJjaXR5IiwiYXJlYSIsIm5hbWUiLCJoZWxwTmFtZSIsInR5cGUiLCJoZWxwTW9uZXkiLCJsb3dlc3RfcHJpY2UiLCJoaWdoZXN0X3ByaWNlIiwiaGVscFRpbWUiLCJzdGFydF90aW1lIiwiZW5kX3RpbWUiLCJwZW9wbGVOdW1iZXIiLCJwZW9wbGVfbnVtYmVyIiwiaG90SW1nIiwiZGlzcGxheSIsImZpbmlzaF9wcm92ZSIsImlzX3VyZ2VudCIsImhlbHBVc2VyIiwic2VuZGVyIiwidXNlckhlYWQiLCJhdmF0YXIiLCJ1c2VyTmFtZSIsImFsaWFzIiwibmlja25hbWUiLCJhZGRyZXNzIiwiZ2V0Rm9sbG93IiwiY2lyY2xlSXRlbSIsImxvZ28iLCJjaXJjbGVDb250ZW50IiwiY2VudGVyQ29udGVudCIsImNpcmNsZU5hbWUiLCJjaXJjbGVfbmFtZSIsImRlc2MiLCJkZXNjcmlwdGlvbiIsImZvbGxvdyIsImNvbG9yIiwiam9pbl90eXBlIiwiYm9yZGVyQ29sb3IiLCJ0aXRsZUNvbnRlbnQiLCJsZWZ0Qm9yZGVyIiwibW9yZSIsImNvbnRlbnRMZWZ0UCIsImxlZnRNZW51TGlzdENoZWNrIiwibGVmdE1lbnVMaXN0IiwibWVzc2FnZSIsInZpc2liaWxpdHkiLCJ1c2VBcHBEaXNwYXRjaCIsImRlc2NNYXhMaW5lIiwiY2xhc3NOYW1lIiwiaXNTaWduIiwic2V0U2lnbiIsImRvU2lnbiIsImRvTG9naW4iLCJzaWduVXNlciIsInVzZXJIZWFkZXIiLCJ1c2VyRGVzYyIsIldlYmtpdExpbmVDbGFtcCIsIm1heExpbmVzIiwic2lnbkJ0biIsImxvZ2luQnRuIiwiRm9vdGVyIiwiZm9vdGVyIiwiZG93biIsImRvd25PdGhlciIsImNvcHkiLCJjb3B5TGluayIsImdldFNjcm9sbGJhcldpZHRoIiwib3V0TG9naW4iLCJIZWFkZXIiLCJpc1Nob3dMb2dpbiIsImxvZ2luIiwidXNlckNlbnRlckxpc3QiLCJzZW5kTGlzdCIsImlzU2hvd1VzZXJDZW50ZXIiLCJzZXRTaG93VXNlckNlbnRlciIsImlzU2hvd1NlbmREeW5hbWljIiwic2V0U2hvd1NlbmREeW5hbWljIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhpZGVEaWFsb2ciLCJldiIsInRhcmdldCIsInNyY0VsZW1lbnQiLCJ1c2VyQ2VudGVyU2hvdyIsInNlbmRTaG93IiwidXNlckNlbnRlckl0ZW1DbGljayIsInVzZXJDZW50ZXJDaGFuZ2UiLCJzZW5kRHluYW1pY0l0ZW1DbGljayIsImNvbnNvbGUiLCJsb2ciLCJoZWFkZXIiLCJwYWRkaW5nUmlnaHQiLCJtZW51IiwicGFnZSIsIm1lbnVTZWxlY3QiLCJtZW51QUhvbWUiLCJtZW51QUhlbHAiLCJtZW51QUR5bmFtaWMiLCJtZW51QUNpcmNsZSIsInNlYXJjaCIsInNlYXJjaEljb24iLCJ1c2VySW5mbyIsInVzZXJNZW51IiwidXNlckNlbnRlciIsInVzZXJDZW50ZXJOYW1lIiwidXNlckNlbnRlckl0ZW0iLCJtZXNzYWdlSGludCIsInNlbmREeW5hbWljIiwic2VuZERuYW1pY0l0ZW0iLCJkb3duTG9naW4iLCJIZWFkIiwiTGF5b3V0Iiwia2V5d29yZHMiLCJjaGlsZHJlbiIsInRvVG9wIiwicmlnaHQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9yb3V0ZXIiLCJfcm91dGVyMSIsIl91c2VJbnRlcnNlY3Rpb24iLCJvYmoiLCJfX2VzTW9kdWxlIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwiaHJlZiIsImFzIiwib3B0aW9ucyIsImlzTG9jYWxVUkwiLCJjYXRjaCIsImVyciIsImN1ckxvY2FsZSIsImxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwiZSIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsImluZGV4T2YiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiRXJyb3IiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJrZXlzIiwiZm9yRWFjaCIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwidXNlUmVmIiwiY3VycmVudCIsIndhcm4iLCJwIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNyZWF0ZUVsZW1lbnQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFJlZiIsInJlZiIsInNldEludGVyc2VjdGlvblJlZiIsImlzVmlzaWJsZSIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJ1c2VDYWxsYmFjayIsImVsIiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwYXRoIiwiZW5kc1dpdGgiLCJzbGljZSIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfVFJBSUxJTkdfU0xBU0giLCJ0ZXN0IiwicmVxdWVzdElkbGVDYWxsYmFjayIsImNhbmNlbElkbGVDYWxsYmFjayIsInNlbGYiLCJiaW5kIiwiY2IiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsIm1heCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJnZXQiLCJmdXR1cmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlc29sdmVyIiwicHJvbSIsInNldCIsInRoZW4iLCJoYXNQcmVmZXRjaCIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwicmVsTGlzdCIsInN1cHBvcnRzIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJyZWwiLCJjcm9zc09yaWdpbiIsIl9fTkVYVF9DUk9TU19PUklHSU4iLCJvbmxvYWQiLCJvbmVycm9yIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFwcGVuZFNjcmlwdCIsInNyYyIsInNjcmlwdCIsInJlamVjdCIsImJvZHkiLCJkZXZCdWlsZFByb21pc2UiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwiZmlsdGVyIiwidiIsImVudHJ5cG9pbnRzIiwiTWFwIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsInRleHQiLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImVycm9yIiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJyb3V0ZUZpbGVzUHJvbWlzZSIsImFsbCIsImhhcyIsImVudHJ5cG9pbnQiLCJmaW5hbGx5IiwiYXNzaWduIiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJlZmZlY3RpdmVUeXBlIiwib3V0cHV0IiwiZW51bWVyYWJsZSIsIl93aXRoUm91dGVyIiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlckNvbnRleHQiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkFycmF5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVuZGVmaW5lZCIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJfX05FWFRfSTE4Tl9TVVBQT1JUIiwiYmFzZVBhdGgiLCJfX05FWFRfUk9VVEVSX0JBU0VQQVRIIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwicGF0aE5vUXVlcnlIYXNoIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsImRldGVjdGVkTG9jYWxlIiwiZGV0ZWN0ZWREb21haW4iLCJodHRwIiwiZG9tYWluIiwicGF0aExvd2VyIiwidG9Mb3dlckNhc2UiLCJsb2NhbGVMb3dlciIsInN1YnN0ciIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsInVybFByb3RvTWF0Y2giLCJtYXRjaCIsInVybEFzU3RyaW5nTm9Qcm90byIsInVybFBhcnRzIiwic3BsaXQiLCJub3JtYWxpemVkVXJsIiwibm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwic29tZSIsInJlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJfX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OIiwiaGlzdG9yeSIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJuIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJzdGF0dXMiLCJqc29uIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwicGF0aG5hbWUxIiwicXVlcnkxIiwiYXMxIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJDb21wb25lbnQxIiwiZXJyMSIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJzZGMiLCJzZHIiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwiSlNPTiIsInN0cmluZ2lmeSIsIngiLCJ5IiwiZ2V0SXRlbSIsInBhcnNlIiwicGFyc2VSZWxhdGl2ZVVybCIsImlzU3NyIiwiX2JwcyIsImNoYW5nZSIsIl9zaGFsbG93IiwiY29tcG9uZW50cyIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJzdWIiLCJjbGMiLCJfd3JhcEFwcCIsImlzUmVhZHkiLCJnc3NwIiwiZ2lwIiwiYXBwR2lwIiwiZ3NwIiwibG9jYXRpb24iLCJfX05FWFRfSEFTX1JFV1JJVEVTIiwiaG9zdG5hbWUiLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJzY3JvbGxSZXN0b3JhdGlvbiIsInJlbG9hZCIsImJhY2siLCJtZXRob2QiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwicHJldkxvY2FsZSIsInBhcnNlZEFzIiwibG9jYWxlUGF0aFJlc3VsdCIsImRpZE5hdmlnYXRlIiwiYXNOb0Jhc2VQYXRoIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiX2luRmxpZ2h0Um91dGUiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJsb2NhbGVDaGFuZ2UiLCJvbmx5QUhhc2hDaGFuZ2UiLCJlbWl0Iiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInJld3JpdGVzUmVzdWx0IiwibWF0Y2hlZFBhZ2UiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJlZjEiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJfc2Nyb2xsIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJsYW5nIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImVycjIiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaWRFbCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwYXRobmFtZTIiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcDEiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIndyYXBwZXIiLCJmZXRjaFJlY29tbWVuZExpc3QiLCJmZXRjaExpa2VMaXN0IiwiZmV0Y2hOZWFyYnlMaXN0IiwiZmV0Y2hIb3J0TGlzdCIsImZldGNoUmVjb21tZW5kQ2lyY2xlTGlzdCIsIkhvbWUiLCJyZWNvbW1lbmRDaXJjbGVEYXRhIiwiaG9tZSIsImdldEluaXRpYWxQYWdlUHJvcHMiLCJzdG9yZSIsInJlcSIsImdldFN0YXRlIiwiaXNMb2FkIiwibGltaXQiLCJhcGkiLCJVcmwiLCJnZXRDaXJjbGVMaXN0IiwicmVxdWVzdCIsImNpcmNsZUxpc3QiLCJnZXRVc2VyQ2lyY2xlTGlzdCIsInVzZXJDaXJjbGVMaXN0IiwiZ2V0VHlwZUFkZHJlc3NTY2hvb2wiLCJjb21taXQiLCJnZXRDaXJjbGVUeXBlIiwiZ2V0SGVscGVyTGlzdCIsImhlbHBlckxpc3QiLCJnZXRVc2VySGVscGVyTGlzdCIsInVzZXJIZWxwTGlzdCIsImdldFVzZXJJbmZvIiwiZ2V0UGhvbmVDb2RlIiwiZ2V0Q29kZSIsImhlYWRlcnMiLCJwd2RMb2dpbiIsImNvZGVMb2dpbiIsImF1dG9Mb2dpbiIsInRodW5rV3JhcHBlciIsImNyZWF0ZVNsaWNlIiwiZmV0Y2hBbGxDaXJjbGVMaXN0IiwiZmV0Y2hVc2VyQ2lyY2xlTGlzdCIsImluaXRpYWxTdGF0ZSIsImFsbENpcmNsZURhdGEiLCJ0b3RhbCIsIm15Q2lyY2xlTGlzdCIsImhvbWVTbGljZSIsInJlZHVjZXJzIiwiZXh0cmFSZWR1Y2VycyIsImZ1bGZpbGxlZCIsImFjdGlvbiIsInBheWxvYWQiLCJyZWR1Y2VyIiwiZmV0Y2hUeXBlQWRkcmVzc1NjaG9vbCIsImZldGNoQ2lyY2xlVHlwZSIsImNpcmNsZVR5cGUiLCJjb21tb25TbGljZSIsImluY3JlbWVudCIsImFjdGlvbnMiLCJpc1BlbmRpbmdBY3Rpb24iLCJpc1JlamVjdGVkQWN0aW9uIiwiaXNGdWxmaWxsZWRBY3Rpb24iLCJsb2FkaW5nU2xpY2UiLCJidWlsZGVyIiwiYWRkTWF0Y2hlciIsInNob3dGb3JnZXRQd2QiLCJsb2dpblNsaWNlIiwib3ZlcmZsb3ciLCJoaWRlTG9naW4iLCJzaG93TG9naW5QYWdlIiwic2hvd0ZvcmdldFB3ZFBhZ2UiLCJpc1Nob3ciLCJpc05vd1Nob3ciLCJmZXRjaFVzZXJJbmZvIiwiZmV0Y2hNaW5lUmVjb21tZW5kQ2lyY2xlTGlzdCIsImZldGNoTWluZUhlbHBlckxpc3QiLCJtaW5lSGVscGVyRGF0YSIsInVzZXJQYWdlU2VsZWN0SW5kZXgiLCJtaW5lU2xpY2UiLCJyZW1vdmVUb2tlbiIsInNhdmVUb2tlbiIsImZldGNoQXV0b0xvZ2luIiwiaXNGaW5pc2giLCJ0b2tlbiIsInVzZXJTbGljZSIsInNhdmVVc2VySW5mbyIsInNhdmVVc2VyRGF0YSIsImlzX2ZpbmlzaCIsInNhdmVVc2VyIiwiY29uZmlndXJlU3RvcmUiLCJ1c2VTZWxlY3RvciIsImNvbWJpbmVSZWR1Y2VycyIsImNyZWF0ZVdyYXBwZXIiLCJIWURSQVRFIiwibG9hZGluZ1JlZHVjZXIiLCJob21lUmVkdWNlciIsImxvZ2luUmVkdWNlciIsInVzZXJSZWR1Y2VyIiwiY29tbW9uUmVkdWNlciIsImNpcmNsZVJlZHVjZXIiLCJtaW5lUmVkdWNlciIsImNvbWJpbmVkUmVkdWNlciIsImxvYWRpbmciLCJjb21tb24iLCJjaXJjbGUiLCJtaW5lIiwibmV4dFN0YXRlIiwibWFrZVN0b3JlIiwiZGV2VG9vbHMiLCJDcnlwdG9KUyIsImVuYyIsIlV0ZjgiLCJpdiIsImVuY3J5cHQiLCJzcmNzIiwiZW5jcnlwdGVkIiwiQUVTIiwibW9kZSIsIkVDQiIsInBhZGRpbmciLCJwYWQiLCJQa2NzNyIsImNpcGhlcnRleHQiLCJ0b1N0cmluZyIsIkJhc2U2NCIsImRlY3J5cHQiLCJ3b3JkIiwiZGVjcnlwdGVkU3RyIiwiYXhpb3MiLCJub3RpZmljYXRpb24iLCJnZXRUb2tlbiIsInFzIiwiY29kZU1lc3NhZ2UiLCJnZXRIZWFkZXIiLCJub3dfdGltZSIsImdldFRpbWUiLCJ2ZXJzaW9uIiwiY2xpZW50IiwiZGlkIiwiYWVzSGVhZGVyIiwiY29uZmlnIiwiY3JlYXRlIiwiYmFzZVVSTCIsIkFQSV9IT1NUIiwidGltZW91dCIsImludGVyY2VwdG9ycyIsInVzZSIsInBlbmRpbmciLCJjYW5jZWxUb2tlbiIsIkNhbmNlbFRva2VuIiwidHJhbnNmb3JtUmVxdWVzdCIsInN0ciIsInJlc3BvbnNlIiwiZXJyb3JUZXh0Iiwic3RhdHVzVGV4dCIsIm5lZWRfZGVjcnlwdCIsImNsZWFyUGVuZGluZyIsImNsZWFyIiwic3RhdGljRGF0YSIsImNvbG9yTGlzdCIsImNvb2tpZSIsInRva2VuS2V5Iiwic2F2ZSIsInJlbW92ZSIsImxvYWQiLCJzdGF0aWNIb3N0IiwiU1RBVElDX0hPU1QiLCJjcmVhdGVBc3luY1RodW5rIiwid2FpdFRpbWUiLCJ0aW1lIiwiZ2V0TWF4VHdvWmVybyIsImQiLCJyb3VuZCIsIm1pbiIsImRlZmF1bHRWYWx1ZSIsImRhdGUiLCJub3dEYXRlIiwieWVzRGF0ZSIsInRvbW9ycm93RGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiQWRkWiIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImNoZWNrUGhvbmUiLCJwaG9uZSIsIm15cmVnIiwiY2hlY2tDb2RlIiwiY29kZSIsImNoZWNrUHdkIiwicHdkIiwib1AiLCJ3aWR0aCIsImhlaWdodCIsImkiLCJjbGllbnRXaWR0aDEiLCJjbGllbnRXaWR0aDIiLCJzY3JvbGxiYXJXaWR0aCIsIm92ZXJmbG93WSIsImdldENvbG9yQnlTdHJpbmciLCJjaGFyQ29kZUF0Il0sInNvdXJjZVJvb3QiOiIifQ==