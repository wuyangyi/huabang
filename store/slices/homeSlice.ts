import { thunkWrapper } from '../../utils/util';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { Res } from '../services/home';
import type { HelperItemData } from '../services/helper';
import { getHelperList } from '../services/helper';
import type { CircleBean, ListPageBean } from '../services/circle';
import { getCircleList } from '../services/circle';

// AsyncThunk<返回的值类型,函数类型void表示不带参数,不清楚>

export const fetchRecommendList = thunkWrapper('home/recommend', getHelperList);
export const fetchLikeList = thunkWrapper('home/like', getHelperList);
export const fetchNearbyList = thunkWrapper('home/nearby', getHelperList);
export const fetchHortList = thunkWrapper('home/hort', getHelperList);
export const fetchRecommendCircleList = thunkWrapper('home/circle/recommend', getCircleList);

type IniState = {
  isLoad: boolean;
  recommendData: HelperItemData[];
  likeData: HelperItemData[];
  nearbyData: HelperItemData[];
  hortData: HelperItemData[];
  recommendCircleData: ListPageBean<CircleBean>;
};

const initialState: IniState = {
  isLoad: false,
  recommendData: [],
  likeData: [],
  nearbyData: [],
  hortData: [],
  recommendCircleData: {
    total: 0,
    list: []
  },
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchRecommendList.fulfilled.type]: (state, action: PayloadAction<Res<Array<HelperItemData>>>) => {
      state.isLoad = true;
      state.recommendData = action.payload.data || [];
      console.log("fetchRecommendList", action.payload.data ? action.payload.data.length : 0);

    },
    [fetchLikeList.fulfilled.type]: (state, action: PayloadAction<Res<HelperItemData[]>>) => {
      if (action.payload.status == 1) {
        state.likeData = action.payload.data || [];
        console.log("fetchLikeList", action.payload.data ? action.payload.data.length : 0);
      }
    },
    [fetchNearbyList.fulfilled.type]: (state, action: PayloadAction<Res<HelperItemData[]>>) => {
      if (action.payload.status == 1) {
        state.nearbyData = action.payload.data || [];
        console.log("fetchNearbyList", action.payload.data ? action.payload.data.length : 0);
      }
    },
    [fetchHortList.fulfilled.type]: (state, action: PayloadAction<Res<HelperItemData[]>>) => {
      if (action.payload.status == 1) {
        state.hortData = action.payload.data || [];
        console.log("fetchHortList", action.payload.data ? action.payload.data.length : 0);
      }
    },
    [fetchRecommendCircleList.fulfilled.type]: (state, action: PayloadAction<Res<ListPageBean<CircleBean>>>) => {
      if (action.payload.status == 1) {
        state.recommendCircleData = action.payload.data;
      }
    },
  },
});

export default homeSlice.reducer;
