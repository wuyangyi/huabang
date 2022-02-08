
import { createSlice } from '@reduxjs/toolkit';
import { getScrollbarWidth } from '../../utils/util';
import type { AppState, AppThunk } from '../store';


export interface LoginState {
    isShowLogin: boolean;
    showForgetPwd: boolean;
}

const initialState: LoginState = {
    isShowLogin: false,
    showForgetPwd: false,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        showLogin: (state) => {
            document.body.style.overflow = 'hidden';
            if (document.documentElement.clientWidth >= 1300) {
                document.body.style.paddingRight = getScrollbarWidth() + 'px';
            }
            state.isShowLogin = true;
        },
        hideLogin: (state) => {
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '0px';
            state.isShowLogin = false;
        },
        showLoginPage: (state) => {
            if (state.showForgetPwd) {
                state.showForgetPwd = false;
            }
        },

        showForgetPwdPage: (state) => {
            if (!state.showForgetPwd) {
                state.showForgetPwd = true;
            }
        },
    },
});

export const { showLogin, hideLogin, showLoginPage, showForgetPwdPage } = loginSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const isShowLogin = (state: AppState) => state.login.isShowLogin;

// We can also write services by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const showOrHideLogin =
    (isShow: boolean): AppThunk =>
        (dispatch, getState) => {
            const isNowShow = isShowLogin(getState());
            if (isNowShow !== isShow) {
                if (isShow) {
                    dispatch(showLogin());
                } else {
                    dispatch(hideLogin());
                }
            }
        };

export default loginSlice.reducer;
