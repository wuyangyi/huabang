import { thunkWrapper } from '../../utils/util';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { Res } from '../services/home';
import { CircleBean, getUserCircleList, ListPageBean } from '../services/circle';
import { getCircleList } from '../services/circle';

// AsyncThunk<返回的值类型,函数类型void表示不带参数,不清楚>
export const fetchAllCircleList = thunkWrapper('clircle/all', getCircleList);
export const fetchUserCircleList = thunkWrapper('clircle/user_list', getUserCircleList);

type IniState = {
    allCircleData: ListPageBean<CircleBean>;
    myCircleList: ListPageBean<CircleBean>;
};

const initialState: IniState = {
    allCircleData: { total: 0, list: [] },
    myCircleList: { total: 0, list: [] },
};

export const homeSlice = createSlice({
    name: 'circle',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchAllCircleList.fulfilled.type]: (state, action: PayloadAction<Res<ListPageBean<CircleBean>>>) => {
            state.allCircleData = action.payload.data;
        },
        [fetchUserCircleList.fulfilled.type]: (state, action: PayloadAction<Res<ListPageBean<CircleBean>>>) => {
            state.myCircleList = action.payload.data;
        },
    },
});

export default homeSlice.reducer;
