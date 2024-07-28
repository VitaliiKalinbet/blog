import { useEffect } from 'react';

export function useInitialEffect(callback: () => void) {
    useEffect(() => {
        // @ts-ignore
        if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
            callback();
        }
        // eslint-disable-next-line
    }, []);
}
