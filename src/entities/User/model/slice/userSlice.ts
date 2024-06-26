import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {
    _inited: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initUserAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
            if (user) {
                state.authData = JSON.parse(user);
                state._inited = true;
            }
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
