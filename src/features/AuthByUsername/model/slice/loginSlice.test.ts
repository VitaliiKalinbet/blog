import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'asd' };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('asd'))).toEqual({ username: 'asd' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '12345' };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('12345'))).toEqual({ password: '12345' });
    });
});
