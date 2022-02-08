(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: ./layout/Footer.tsx
var Footer = __webpack_require__(8131);
// EXTERNAL MODULE: ./layout/Header.tsx
var Header = __webpack_require__(1162);
// EXTERNAL MODULE: ./layout/Layout.tsx
var Layout = __webpack_require__(5618);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/home/home_content.module.scss
var home_content_module = __webpack_require__(5864);
var home_content_module_default = /*#__PURE__*/__webpack_require__.n(home_content_module);
// EXTERNAL MODULE: ./components/home/banner/home_banner.module.scss
var home_banner_module = __webpack_require__(6633);
var home_banner_module_default = /*#__PURE__*/__webpack_require__.n(home_banner_module);
// EXTERNAL MODULE: ./components/widget/LeftUserCard.tsx
var LeftUserCard = __webpack_require__(2799);
// EXTERNAL MODULE: ./store/store.ts + 1 modules
var store = __webpack_require__(9341);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./store/slices/loginSlice.ts
var loginSlice = __webpack_require__(5014);
// EXTERNAL MODULE: ./store/slices/mineSlice.ts + 1 modules
var mineSlice = __webpack_require__(4161);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/home/banner/HomeBanner.tsx










var stop = false;
var timerID;
var timerIDMove;
var realIndex = 0;

const HomeBanner = () => {
  const {
    isLogin,
    user
  } = (0,store/* useAppSelector */.CG)(state => state.user);
  const router = (0,router_.useRouter)();
  const dispatch = (0,external_react_redux_.useDispatch)();
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
  } = (0,external_react_.useState)(0);
  (0,external_react_.useEffect)(() => {
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
        dispatch((0,mineSlice/* switchUserPageSelectIndex */._4)({
          key: user.id,
          index: 1
        }));
      } else if (index == 5) {
        dispatch((0,mineSlice/* switchUserPageSelectIndex */._4)({
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
    dispatch((0,loginSlice/* showOrHideLogin */.Hu)(true));
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (home_banner_module_default()).banner,
    children: [/*#__PURE__*/jsx_runtime_.jsx("ul", {
      children: data.map((item, index) => {
        return /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: [(home_banner_module_default()).bannerItem, index == selectIndex ? (home_banner_module_default()).itemShow : (home_banner_module_default()).itemHide].join(' '),
          style: {
            backgroundColor: item.bg
          },
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: (home_banner_module_default()).itemImg,
            href: item.link,
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: item.url,
              title: item.title,
              width: "700px",
              alt: ""
            })
          })
        }, item.id);
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (home_banner_module_default()).bannerIndicator,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (home_banner_module_default()).indicatorContent,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (home_banner_module_default()).menuLeft,
          children: /*#__PURE__*/jsx_runtime_.jsx(LeftUserCard/* default */.Z, {
            className: (home_banner_module_default()).userCard
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (home_banner_module_default()).indicator,
          children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
            children: data.map((item, index) => {
              return /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: [(home_banner_module_default()).indicatorItem, index === selectIndex ? (home_banner_module_default()).indicatorItemCheck : ""].join(' '),
                onMouseEnter: () => {
                  onMyMouseEnter(index);
                },
                onMouseLeave: () => {
                  onMyMouseLeave();
                },
                onClick: () => itemClick(index),
                children: item.title
              }, item.id);
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (home_banner_module_default()).menuRight,
          children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
            className: (home_banner_module_default()).menuRightTitle,
            children: "\u66F4\u591A\u529F\u80FD"
          }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
            className: (home_banner_module_default()).menuContent,
            children: menus.map((item, index) => {
              return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                className: (home_banner_module_default()).menuItem,
                onClick: () => {
                  dealClick(index);
                },
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: (home_banner_module_default()).menuImgDiv,
                  style: {
                    backgroundImage: 'url(' + item.image + ')'
                  }
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: item.title
                })]
              }, item.id);
            })
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const banner_HomeBanner = (HomeBanner);
// EXTERNAL MODULE: ./components/module_title/ModuleTitle.tsx
var ModuleTitle = __webpack_require__(445);
// EXTERNAL MODULE: ./components/home/contentItem/home_content_item.module.scss
var home_content_item_module = __webpack_require__(1274);
var home_content_item_module_default = /*#__PURE__*/__webpack_require__.n(home_content_item_module);
// EXTERNAL MODULE: ./components/home/helperItem/HelperItem.tsx
var HelperItem = __webpack_require__(2931);
;// CONCATENATED MODULE: ./components/home/contentItem/HomeContentItem.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const HomeContentItem = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    id: 'n' + props.id,
    className: (home_content_item_module_default()).itemContent,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (home_content_item_module_default()).contentTitle,
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        children: props.title
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: (home_content_item_module_default()).lookMore,
        children: "\u67E5\u770B\u66F4\u591A"
      })]
    }), props.list.map((item, index) => {
      return /*#__PURE__*/jsx_runtime_.jsx(HelperItem/* default */.Z, _objectSpread({}, item), item.id);
    })]
  });
};

/* harmony default export */ const contentItem_HomeContentItem = (HomeContentItem);
;// CONCATENATED MODULE: ./components/home/homeCenter/HomeCenter.tsx
function HomeCenter_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function HomeCenter_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { HomeCenter_ownKeys(Object(source), true).forEach(function (key) { HomeCenter_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { HomeCenter_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function HomeCenter_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const HomeCenter = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: props.data.map((item, index) => {
      return /*#__PURE__*/jsx_runtime_.jsx(contentItem_HomeContentItem, HomeCenter_objectSpread({}, item), item.id);
    })
  });
};

/* harmony default export */ const homeCenter_HomeCenter = (HomeCenter);
// EXTERNAL MODULE: ./components/widget/LeftMenuWidget.tsx
var LeftMenuWidget = __webpack_require__(310);
// EXTERNAL MODULE: ./components/circle/recommend_circle/RecommendCircle.tsx + 1 modules
var RecommendCircle = __webpack_require__(2013);
;// CONCATENATED MODULE: ./components/home/HomeContent.tsx
function HomeContent_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function HomeContent_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { HomeContent_ownKeys(Object(source), true).forEach(function (key) { HomeContent_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { HomeContent_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function HomeContent_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










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
  } = (0,external_react_.useState)(0);
  (0,external_react_.useEffect)(() => {
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

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (home_content_module_default()).content,
    children: [/*#__PURE__*/jsx_runtime_.jsx(banner_HomeBanner, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (home_content_module_default()).contentBody,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (home_content_module_default()).contentLeft,
        children: /*#__PURE__*/jsx_runtime_.jsx(LeftMenuWidget/* default */.Z, {
          id: "leftMenu",
          selectIndex: selectIndex,
          menuList: menuList,
          menuItemClick: menuItemClick
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (home_content_module_default()).contentCenter,
        children: /*#__PURE__*/jsx_runtime_.jsx(homeCenter_HomeCenter, {
          data: menuList
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (home_content_module_default()).contentRight,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (home_content_module_default()).hotNews,
          children: [/*#__PURE__*/jsx_runtime_.jsx(ModuleTitle/* default */.Z, {
            title: "\u4E92\u5E2E\u5934\u6761",
            image: "/static/images/ico_hot.png",
            link: "/"
          }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
            className: (home_content_module_default()).hotNewsContent,
            children: hotNews.map((item, index) => {
              return /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: (home_content_module_default()).hotNewsItem,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: item.link,
                  children: item.title
                })
              }, item.id);
            })
          })]
        }), props.recommendCircle && /*#__PURE__*/jsx_runtime_.jsx(RecommendCircle/* default */.Z, HomeContent_objectSpread({}, props.recommendCircle))]
      })]
    })]
  });
};

/* harmony default export */ const home_HomeContent = (HomeContent);
// EXTERNAL MODULE: ./styles/Home.module.scss
var Home_module = __webpack_require__(6397);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: ./store/slices/homeSlice.ts
var homeSlice = __webpack_require__(2476);
;// CONCATENATED MODULE: ./pages/index.tsx










const Home = () => {
  const {
    recommendData,
    likeData,
    nearbyData,
    hortData,
    recommendCircleData
  } = (0,store/* useAppSelector */.CG)(state => state.home);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
    className: (Home_module_default()).body,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header/* default */.Z, {
      page: 0
    }), /*#__PURE__*/jsx_runtime_.jsx(home_HomeContent, {
      recommendData: recommendData,
      likeData: likeData,
      nearbyData: nearbyData,
      hortData: hortData,
      recommendCircle: recommendCircleData
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {})]
  });
};

Home.getInitialProps = store/* default.getInitialPageProps */.ZP.getInitialPageProps(store => async ({
  req
}) => {
  if (!store.getState().home.isLoad) {
    await Promise.all([store.dispatch((0,homeSlice/* fetchRecommendList */.ny)({
      limit: 20,
      page: 1,
      type: "recommend"
    })), store.dispatch((0,homeSlice/* fetchLikeList */.o8)({
      limit: 20,
      page: 1,
      type: "attention"
    })), store.dispatch((0,homeSlice/* fetchNearbyList */.G9)({
      limit: 20,
      page: 1,
      type: "nearby"
    })), store.dispatch((0,homeSlice/* fetchHortList */.m9)({
      limit: 20,
      page: 1,
      type: "urgent"
    })), store.dispatch((0,homeSlice/* fetchRecommendCircleList */._s)({
      limit: 8,
      page: 1,
      type: "recommend"
    }))]);
  }

  return {};
});
/* harmony default export */ const pages = (Home);

/***/ }),

/***/ 6633:
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

/***/ 1274:
/***/ ((module) => {

// Exports
module.exports = {
	"itemContent": "home_content_item_itemContent__1hU8F",
	"contentTitle": "home_content_item_contentTitle__1pg0Y",
	"lookMore": "home_content_item_lookMore__3hcMh"
};


/***/ }),

/***/ 5864:
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

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [664,707,270,511,345], () => (__webpack_exec__(2216)));
module.exports = __webpack_exports__;

})();