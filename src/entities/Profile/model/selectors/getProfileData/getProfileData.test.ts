import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';
import { Country } from '../../../../Country';
import { Currency } from '../../../../Currency';

describe('getProfileData.test', () => {
    test('should get profile data', () => {
        const data = {
            username: 'admin',
            age: 31,
            country: Country.Ukraine,
            lastname: 'Bondarenko',
            first: 'Oleg',
            city: 'Lviv',
            currency: Currency.USD,
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
