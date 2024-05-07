import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Page } from 'widgets/Page/Page';

const MainPage = () => {
    const { t } = useTranslation('mainPage');

    return (
        <Page>
            <div>
                <BugButton />
            </div>
            {t('mainPage')}
        </Page>
    );
};

export default MainPage;
