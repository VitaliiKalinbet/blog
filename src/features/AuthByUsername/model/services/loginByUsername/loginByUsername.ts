import { createAsyncThunk } from '@reduxjs/toolkit';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';
import { ThunkConfig, ThunkExtraArg } from 'app/providers/StoreProvider';
import { User, userActions } from '../../../../../entities/User/index';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>>(
        'login/loginByUsername',
        async (authData, thunkAPI) => {
            const { extra, dispatch, rejectWithValue } = thunkAPI;

            try {
                const response = await extra.api.post<User>('/login', authData);

                if (!response.data) {
                    throw new Error();
                }

                localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
                dispatch(userActions.setUserAuthData(response.data));

                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
