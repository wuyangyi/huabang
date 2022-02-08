/**
 * @author: leroy
 * @date: 2021/8/23 16:09
 * @description：store.err
 */
import type { ThunkAction, Action } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { combineReducers } from 'redux';
import _ from 'lodash';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

import loadingReducer from './slices/loadingSlice';
import homeReducer from './slices/homeSlice';
import loginReducer from './slices/loginSlice';
import userReducer from './slices/userSlice';
import commonReducer from './slices/commonSlice';
import circleReducer from './slices/circleSlice';
import mineReducer from './slices/mineSlice';

const combinedReducer = combineReducers({
  loading: loadingReducer,
  home: homeReducer,
  login: loginReducer,
  user: userReducer,
  common: commonReducer,
  circle: circleReducer,
  mine: mineReducer,
});

let store;
let initStore;

function assign(srcValue) {
  const state = {};
  Object.keys(srcValue).forEach((key) => {
    const item = initStore[key];
    Object.keys(srcValue[key]).forEach((valKey) => {
      if (!_.isEqual(srcValue[key][valKey], initStore[key][valKey])) {
        item[valKey] = srcValue[key][valKey];
      }
    });
    state[key] = item;
  });
  return state;
}

// TODO: 路由切换时 getServerSideProps 会触发 HYDRATE 此时store中数据并不是最新的redux里的 而是上次触发 HYDRATE 时的数据

const reducer = (state, action) => {
  // eslint-disable-next-line no-underscore-dangle
  let _store;
  if (action.type === HYDRATE) {
    if (!store) store = state;
    if (!initStore) initStore = combinedReducer(undefined, action);
    const newStore = assign(action.payload);
    // const nextState = _.merge(state, action.payload)
    console.log('HYDRATE', {
      state,
      payload: action.payload,
      store,
      newStore,
    });
    _store = newStore;
  } else {
    _store = combinedReducer(state, action);
  }
  store = _store;
  return _store;
};

const makeStore = () =>
  configureStore({
    reducer,
    devTools: process.env.NODE_ENV === 'development',
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;

export type AppDispatch = AppStore['dispatch'];

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export default createWrapper<AppStore>(makeStore);
