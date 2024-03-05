import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation('mainPage');

    return (
        <div>
            {t('mainPage')}
        </div>
    );
};

export default MainPage;
