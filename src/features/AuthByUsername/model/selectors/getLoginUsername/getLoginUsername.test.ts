import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from 'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';

describe('getLoginUsername.test', () => {
    test('should return mock username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'asdf',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('asdf');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
