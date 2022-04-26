
import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { thunkWrapper } from '../../utils/util';
import { CircleBean, getCircleList, ListPageBean } from '../services/circle';
import { getUserHelperList, HelperItemData } from '../services/helper';
import { Res } from '../services/home';
import { getUserInfo } from '../services/mine';
import { UserBean } from '../services/user';

export const fetchUserInfo = thunkWrapper('user/userInfo', getUserInfo);
export const fetchMineRecommendCircleList = thunkWrapper('mine/circle/recommend', getCircleList);
export const fetchMineHelperList = thunkWrapper('mine/helper', getUserHelperList);

export interface MineState {
    userInfo?: UserBean,
    recommendCircleData: ListPageBean<CircleBean>;
    mineHelperData: ListPageBean<HelperItemData>;
    userPageSelectIndex: any
}

const initialState: MineState = {
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

export const mineSlice = createSlice({
    name: 'mine',
    initialState,
    reducers: {
        switchUserPageSelectIndex: (state, action: PayloadAction<{ key: string, index: number }>) => {
            let { key, index } = action.payload;
            if (index > 0) {
                state.userPageSelectIndex[key] = index;
            } else {
                if (key in state.userPageSelectIndex) {
                    state.userPageSelectIndex[key] = index;
                    delete state.userPageSelectIndex[key];
                    console.log("销毁", state.userPageSelectIndex[key]);

                }
            }
        },
    },
    extraReducers: {
        [fetchUserInfo.fulfilled.type]: (state, action: PayloadAction<Res<UserBean>>) => {
            if (action.payload.status == 1) {
                state.userInfo = action.payload.data;
            }
        },
        [fetchMineRecommendCircleList.fulfilled.type]: (state, action: PayloadAction<Res<ListPageBean<CircleBean>>>) => {
            if (action.payload.status == 1) {
                state.recommendCircleData = action.payload.data;
            } else {
                state.recommendCircleData = {
                    total: 0,
                    list: []
                }
            }
        },
        [fetchMineHelperList.fulfilled.type]: (state, action: PayloadAction<Res<ListPageBean<HelperItemData>>>) => {
            if (action.payload.status == 1) {
                state.mineHelperData = action.payload.data;
            } else {
                state.mineHelperData = {
                    total: 0,
                    list: []
                }
            }
        },
    }
});
export const { switchUserPageSelectIndex } = mineSlice.actions;

export default mineSlice.reducer;
