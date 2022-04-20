
import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { removeToken, saveToken } from '../../utils/token_util';
import { thunkWrapper } from '../../utils/util';
import { Res } from '../services/home';
import { UserBean, LoginBean, autoLogin } from '../services/user';
import { AppThunk } from '../store';

export const fetchAutoLogin = thunkWrapper('user/autoLogin', autoLogin);

export interface UserState {
    isLogin: boolean,
    isFinish: boolean,
    token: string,
    user?: UserBean,
}

const initialState: UserState = {
    isLogin: false,
    isFinish: false,
    token: '',
    user: undefined
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        saveUserInfo: (state, action: PayloadAction<Res<LoginBean>>) => {
            if (action.payload.status == 1) {
                saveUserData(state, action.payload.data);
            }
        },

        // 退出登录
        outLogin: (state) => {
            console.log("退出登录");

            state.isLogin = false;
            state.isFinish = false;
            state.token = "";
            state.user = undefined;
            removeToken();
            // document.location.reload();
        }
    },
    extraReducers: {
        [fetchAutoLogin.fulfilled.type]: (state, action: PayloadAction<Res<LoginBean>>) => {
            if (action.payload.status == 1) {
                saveUserData(state, action.payload.data);
            }
        },
    }
});

// 保存用户数据
function saveUserData(state, data: LoginBean) {
    if (!data || !data.token) {
        return;
    }
    console.log("token", data.token);

    state.isLogin = true;
    const token = data.token;
    state.token = token;
    saveToken(token);
    state.isFinish = data.is_finish === 1;
    state.user = data.user;
}

const { saveUserInfo } = userSlice.actions;

export const { outLogin } = userSlice.actions;

export const saveUser =
    (data: any): AppThunk =>
        (dispatch, getState) => {
            dispatch(saveUserInfo(data))
        };


export default userSlice.reducer;
