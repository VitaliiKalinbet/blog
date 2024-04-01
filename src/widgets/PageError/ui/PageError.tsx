import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

export const PageError: FC = () => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [])}>
            <p>
                {t('errorText')}
            </p>
            <Button
                onClick={reloadPage}
            >
                {t('refreshPage')}
            </Button>
        </div>
    );
};
