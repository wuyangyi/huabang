import { thunkWrapper } from '../../utils/util';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { CircleTypeBean, getCircleType, getTypeAddressSchool, TypeAddressSchoolBean } from '../services/common';
import { Res } from '../services/home';

// AsyncThunk<返回的值类型,函数类型void表示不带参数,不清楚>

export const fetchTypeAddressSchool = thunkWrapper('common/typeAddressSchool', getTypeAddressSchool);
export const fetchCircleType = thunkWrapper('common/circleType', getCircleType);

type IniState = {
    circleType: Array<CircleTypeBean>
};

const initialState: IniState = {
    circleType: []
};

export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        increment: () => { },
    },
    extraReducers: {
        // [fetchTypeAddressSchool.fulfilled.type]: (state, action: PayloadAction<Res<TypeAddressSchoolBean>>) => {
        //     console.log("数据", action.payload.data);
        //     state.isLoadData = true;
        //     state.typeAddressSchoolBean = action.payload.data;
        // },
        [fetchCircleType.fulfilled.type]: (state, action: PayloadAction<Res<Array<CircleTypeBean>>>) => {
            if (action.payload.status == 1) {
                state.circleType = action.payload.data;
            }
        },
    },
});

export const { increment } = commonSlice.actions;
export default commonSlice.reducer;
