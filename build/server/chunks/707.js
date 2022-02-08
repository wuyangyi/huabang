exports.id = 707;
exports.ids = [707];
exports.modules = {

/***/ 5618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_layout_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7554);
/* harmony import */ var _styles_layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);







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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("title", {
        children: title || '互帮'
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("meta", {
        name: "keywords",
        content: keywords || ''
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("meta", {
        name: "description",
        content: description || ''
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("meta", {
        property: "og:description",
        content: description || ''
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("meta", {
        property: "og:image",
        content: ""
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("link", {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("main", {
      className: className,
      children: children
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
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
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ 2210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ getCircleList),
/* harmony export */   "E": () => (/* binding */ getUserCircleList)
/* harmony export */ });
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8981);
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6881);



/**圈子列表 */
const getCircleList = params => {
  return _utils_api__WEBPACK_IMPORTED_MODULE_0__/* .default.request */ .Z.request({
    url: _utils_url__WEBPACK_IMPORTED_MODULE_1__/* .default.circleList */ .Z.circleList,
    method: "GET",
    params: params
  });
};
/**用户的圈子列表 */

const getUserCircleList = params => {
  return _utils_api__WEBPACK_IMPORTED_MODULE_0__/* .default.request */ .Z.request({
    url: _utils_url__WEBPACK_IMPORTED_MODULE_1__/* .default.userCircleList */ .Z.userCircleList,
    method: "GET",
    params: params
  });
};

/***/ }),

/***/ 4778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ getHelperList),
/* harmony export */   "q": () => (/* binding */ getUserHelperList)
/* harmony export */ });
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8981);
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6881);



/**互帮列表 */
const getHelperList = params => {
  return _utils_api__WEBPACK_IMPORTED_MODULE_0__/* .default.request */ .Z.request({
    url: _utils_url__WEBPACK_IMPORTED_MODULE_1__/* .default.helperList */ .Z.helperList,
    params: params
  });
};
/**获取用户求助列表 */

const getUserHelperList = params => {
  return _utils_api__WEBPACK_IMPORTED_MODULE_0__/* .default.request */ .Z.request({
    url: _utils_url__WEBPACK_IMPORTED_MODULE_1__/* .default.userHelpList */ .Z.userHelpList,
    params: params
  });
};

/***/ }),

/***/ 9517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sy": () => (/* binding */ getPhoneCode),
/* harmony export */   "k": () => (/* binding */ pwdLogin),
/* harmony export */   "fQ": () => (/* binding */ codeLogin),
/* harmony export */   "w5": () => (/* binding */ autoLogin)
/* harmony export */ });
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8981);
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6881);


function getPhoneCode(params) {
  return _utils_api__WEBPACK_IMPORTED_MODULE_0__/* .default.request */ .Z.request({
    method: 'POST',
    url: _utils_url__WEBPACK_IMPORTED_MODULE_1__/* .default.getCode */ .Z.getCode,
    data: params,
    headers: {
      'content-type': 'application/json'
    }
  });
}
;
function pwdLogin(params) {
  return _utils_api__WEBPACK_IMPORTED_MODULE_0__/* .default.request */ .Z.request({
    method: 'POST',
    url: _utils_url__WEBPACK_IMPORTED_MODULE_1__/* .default.pwdLogin */ .Z.pwdLogin,
    data: params
  });
}
;
function codeLogin(params) {
  return _utils_api__WEBPACK_IMPORTED_MODULE_0__/* .default.request */ .Z.request({
    method: 'POST',
    url: _utils_url__WEBPACK_IMPORTED_MODULE_1__/* .default.codeLogin */ .Z.codeLogin,
    data: params
  });
}
;
/**自动登录 */

const autoLogin = () => {
  return _utils_api__WEBPACK_IMPORTED_MODULE_0__/* .default.request */ .Z.request({
    method: 'POST',
    url: _utils_url__WEBPACK_IMPORTED_MODULE_1__/* .default.autoLogin */ .Z.autoLogin
  });
};

/***/ }),

/***/ 4746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pe": () => (/* binding */ fetchAllCircleList),
/* harmony export */   "Uy": () => (/* binding */ fetchUserCircleList),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export homeSlice */
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5505);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2210);



 // AsyncThunk<返回的值类型,函数类型void表示不带参数,不清楚>

const fetchAllCircleList = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__/* .thunkWrapper */ .kP)('clircle/all', _services_circle__WEBPACK_IMPORTED_MODULE_2__/* .getCircleList */ .B);
const fetchUserCircleList = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__/* .thunkWrapper */ .kP)('clircle/user_list', _services_circle__WEBPACK_IMPORTED_MODULE_2__/* .getUserCircleList */ .E);
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

/***/ 4700:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ slices_commonSlice),
  "uY": () => (/* binding */ fetchCircleType)
});

// UNUSED EXPORTS: commonSlice, fetchTypeAddressSchool, increment

// EXTERNAL MODULE: ./utils/util.ts + 1 modules
var util = __webpack_require__(5505);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(6139);
// EXTERNAL MODULE: ./utils/api.ts
var api = __webpack_require__(8981);
// EXTERNAL MODULE: ./utils/url.ts
var url = __webpack_require__(6881);
;// CONCATENATED MODULE: ./store/services/common.ts



/**获取学校、互帮类型、省市区 */
const getTypeAddressSchool = () => {
  return api/* default.request */.Z.request({
    url: url/* default.commit */.Z.commit,
    method: "GET"
  });
};
/**获取圈子类别 */

const getCircleType = () => {
  return api/* default.request */.Z.request({
    url: url/* default.getCircleType */.Z.getCircleType,
    method: "GET"
  });
};
;// CONCATENATED MODULE: ./store/slices/commonSlice.ts



// AsyncThunk<返回的值类型,函数类型void表示不带参数,不清楚>
const fetchTypeAddressSchool = (0,util/* thunkWrapper */.kP)('common/typeAddressSchool', getTypeAddressSchool);
const fetchCircleType = (0,util/* thunkWrapper */.kP)('common/circleType', getCircleType);
const initialState = {
  circleType: []
};
const commonSlice = (0,toolkit_.createSlice)({
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
/* harmony default export */ const slices_commonSlice = (commonSlice.reducer);

/***/ }),

/***/ 2476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ny": () => (/* binding */ fetchRecommendList),
/* harmony export */   "o8": () => (/* binding */ fetchLikeList),
/* harmony export */   "G9": () => (/* binding */ fetchNearbyList),
/* harmony export */   "m9": () => (/* binding */ fetchHortList),
/* harmony export */   "_s": () => (/* binding */ fetchRecommendCircleList),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export homeSlice */
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5505);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4778);
/* harmony import */ var _services_circle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2210);



 // AsyncThunk<返回的值类型,函数类型void表示不带参数,不清楚>

const fetchRecommendList = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__/* .thunkWrapper */ .kP)('home/recommend', _services_helper__WEBPACK_IMPORTED_MODULE_2__/* .getHelperList */ .g);
const fetchLikeList = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__/* .thunkWrapper */ .kP)('home/like', _services_helper__WEBPACK_IMPORTED_MODULE_2__/* .getHelperList */ .g);
const fetchNearbyList = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__/* .thunkWrapper */ .kP)('home/nearby', _services_helper__WEBPACK_IMPORTED_MODULE_2__/* .getHelperList */ .g);
const fetchHortList = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__/* .thunkWrapper */ .kP)('home/hort', _services_helper__WEBPACK_IMPORTED_MODULE_2__/* .getHelperList */ .g);
const fetchRecommendCircleList = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__/* .thunkWrapper */ .kP)('home/circle/recommend', _services_circle__WEBPACK_IMPORTED_MODULE_3__/* .getCircleList */ .B);
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

/***/ 5014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TX": () => (/* binding */ showLogin),
/* harmony export */   "hQ": () => (/* binding */ hideLogin),
/* harmony export */   "Hu": () => (/* binding */ showOrHideLogin),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports loginSlice, showLoginPage, showForgetPwdPage, isShowLogin */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5505);


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
        document.body.style.paddingRight = (0,_utils_util__WEBPACK_IMPORTED_MODULE_1__/* .getScrollbarWidth */ .np)() + 'px';
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

/***/ 4161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ slices_mineSlice),
  "XH": () => (/* binding */ fetchMineHelperList),
  "sk": () => (/* binding */ fetchMineRecommendCircleList),
  "CS": () => (/* binding */ fetchUserInfo),
  "_4": () => (/* binding */ switchUserPageSelectIndex)
});

// UNUSED EXPORTS: mineSlice

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(6139);
// EXTERNAL MODULE: ./utils/util.ts + 1 modules
var util = __webpack_require__(5505);
// EXTERNAL MODULE: ./store/services/circle.ts
var circle = __webpack_require__(2210);
// EXTERNAL MODULE: ./store/services/helper.ts
var helper = __webpack_require__(4778);
// EXTERNAL MODULE: ./utils/url.ts
var url = __webpack_require__(6881);
// EXTERNAL MODULE: ./utils/api.ts
var api = __webpack_require__(8981);
;// CONCATENATED MODULE: ./store/services/mine.ts


function getUserInfo(params) {
  return api/* default.request */.Z.request({
    method: 'GET',
    url: url/* default.userInfo */.Z.userInfo + "?id=" + params.id
  });
}
;
;// CONCATENATED MODULE: ./store/slices/mineSlice.ts





const fetchUserInfo = (0,util/* thunkWrapper */.kP)('user/userInfo', getUserInfo);
const fetchMineRecommendCircleList = (0,util/* thunkWrapper */.kP)('mine/circle/recommend', circle/* getCircleList */.B);
const fetchMineHelperList = (0,util/* thunkWrapper */.kP)('mine/helper', helper/* getUserHelperList */.q);
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
const mineSlice = (0,toolkit_.createSlice)({
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
/* harmony default export */ const slices_mineSlice = (mineSlice.reducer);

/***/ }),

/***/ 3083:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hG": () => (/* binding */ fetchAutoLogin),
/* harmony export */   "jS": () => (/* binding */ outLogin),
/* harmony export */   "JR": () => (/* binding */ saveUser),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export userSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_token_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(711);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5505);
/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9517);




const fetchAutoLogin = (0,_utils_util__WEBPACK_IMPORTED_MODULE_2__/* .thunkWrapper */ .kP)('user/autoLogin', _services_user__WEBPACK_IMPORTED_MODULE_3__/* .autoLogin */ .w5);
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
      (0,_utils_token_util__WEBPACK_IMPORTED_MODULE_1__/* .removeToken */ .gy)(); // document.location.reload();
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
  (0,_utils_token_util__WEBPACK_IMPORTED_MODULE_1__/* .saveToken */ .Fr)(token);
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

/***/ 9341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ store),
  "TL": () => (/* binding */ useAppDispatch),
  "CG": () => (/* binding */ useAppSelector)
});

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(6139);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(7561);
// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(2744);
;// CONCATENATED MODULE: ./store/slices/loadingSlice.ts
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
const loadingSlice = (0,toolkit_.createSlice)({
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
/* harmony default export */ const slices_loadingSlice = (loadingSlice.reducer);
// EXTERNAL MODULE: ./store/slices/homeSlice.ts
var homeSlice = __webpack_require__(2476);
// EXTERNAL MODULE: ./store/slices/loginSlice.ts
var loginSlice = __webpack_require__(5014);
// EXTERNAL MODULE: ./store/slices/userSlice.ts
var userSlice = __webpack_require__(3083);
// EXTERNAL MODULE: ./store/slices/commonSlice.ts + 1 modules
var commonSlice = __webpack_require__(4700);
// EXTERNAL MODULE: ./store/slices/circleSlice.ts
var circleSlice = __webpack_require__(4746);
// EXTERNAL MODULE: ./store/slices/mineSlice.ts + 1 modules
var mineSlice = __webpack_require__(4161);
;// CONCATENATED MODULE: ./store/store.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @author: leroy
 * @date: 2021/8/23 16:09
 * @description：store
 */











const combinedReducer = (0,external_redux_.combineReducers)({
  loading: slices_loadingSlice,
  home: homeSlice/* default */.ZP,
  login: loginSlice/* default */.ZP,
  user: userSlice/* default */.ZP,
  common: commonSlice/* default */.ZP,
  circle: circleSlice/* default */.ZP,
  mine: mineSlice/* default */.ZP
});

const reducer = (state, action) => {
  if (action.type === external_next_redux_wrapper_.HYDRATE) {
    const nextState = _objectSpread(_objectSpread({}, state), action.payload);

    return combinedReducer(nextState, action);
  }

  return combinedReducer(state, action);
};

const makeStore = () => (0,toolkit_.configureStore)({
  reducer,
  devTools: false
});

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch = () => (0,external_react_redux_.useDispatch)();
const useAppSelector = external_react_redux_.useSelector;
/* harmony default export */ const store = ((0,external_next_redux_wrapper_.createWrapper)(makeStore));

/***/ }),

/***/ 4630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ encrypt),
/* harmony export */   "p": () => (/* binding */ decrypt)
/* harmony export */ });
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(419);
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

/***/ 8981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ clearPending),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(953);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _aes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4630);
/* harmony import */ var _token_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(711);





const qs = __webpack_require__(6850);

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
    let token = (0,_token_util__WEBPACK_IMPORTED_MODULE_3__/* .getToken */ .LP)();
    console.log("token", token);
    let header = {
      now_time: new Date().getTime() + '',
      version: '0.1.0',
      client: 'pc',
      token: token,
      did: "HUBANG_PC"
    };
    let aesHeader = "now_time=" + header["now_time"] + "&client=" + header["client"] + "&version=" + header["version"] + "&did=" + header["did"] + "&token=" + header["token"];
    header['sign'] = (0,_aes__WEBPACK_IMPORTED_MODULE_2__/* .encrypt */ .H)(JSON.stringify(aesHeader)); // header["Connection"] = 'keep-alive';

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
          const content = JSON.parse((0,_aes__WEBPACK_IMPORTED_MODULE_2__/* .decrypt */ .p)(data.data));

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

/***/ 711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fr": () => (/* binding */ saveToken),
/* harmony export */   "gy": () => (/* binding */ removeToken),
/* harmony export */   "LP": () => (/* binding */ getToken)
/* harmony export */ });
/* unused harmony export tokenKey */
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5287);
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

/***/ 6881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let domain = "http://local.helpweb.top/api/v1/" || 0; // if (typeof window === 'undefined') {
//     domain = domain.replace(/^https/i, 'http');
// }

const Url = {
  staticHost: "http://wyyhubang.oss-cn-chengdu.aliyuncs.com/static/",
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

/***/ 5505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Pw": () => (/* binding */ checkCode),
  "aH": () => (/* binding */ checkPhone),
  "ir": () => (/* binding */ checkPwd),
  "dH": () => (/* binding */ getColorByString),
  "Im": () => (/* binding */ getHelpMoney),
  "np": () => (/* binding */ getScrollbarWidth),
  "Rd": () => (/* binding */ getTimeStringByNow),
  "kP": () => (/* binding */ thunkWrapper),
  "pQ": () => (/* binding */ waitTime)
});

// UNUSED EXPORTS: getMaxTwoZero

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(6139);
;// CONCATENATED MODULE: ./utils/staticData.ts
const staticData = {
  colorList: ["#ff8282", "#fc2950", "#f44ebf", "#d333be", "#be33d3", "#9933d3", "#7632c3", "#6149f4", "#4663cc", "#569de0", "#56e0de", "#2fcda6", "#2fcdcb", "#4cf092", "#b4f04c", "#e1e73b", "#e7c53b", "#f68f43", "#f64b43", "#c8adac", "#6015b5", "#3d2449", "#3d2449", "#b64ca3", "#6c4665", "#4c7471", "#939d9c"]
};
/* harmony default export */ const utils_staticData = (staticData);
;// CONCATENATED MODULE: ./utils/util.ts


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
  return (0,toolkit_.createAsyncThunk)(name, async params => {
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
  return utils_staticData.colorList[code % utils_staticData.colorList.length];
}

/***/ }),

/***/ 7554:
/***/ ((module) => {

// Exports
module.exports = {
	"toTop": "layout_toTop__2Yx5P"
};


/***/ })

};
;