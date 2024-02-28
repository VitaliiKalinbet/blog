import React, {FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const { className } = props;
    const { t, i18n } = useTranslation();

    const toggleLanguage = async () => {
        console.log('i18n.language: ', i18n.language)
        i18n.changeLanguage(i18n.language === 'uk' ? 'en' : 'uk')
    }

    return (
        <div >
            <Button
                className={classNames(cls.LangSwitcher, {}, [className])}
                theme={ThemeButton.CLEAR}
                onClick={toggleLanguage}>
                {t('langUkr')}
            </Button>
            /
            <Button
                className={classNames(cls.LangSwitcher, {}, [className])}
                theme={ThemeButton.CLEAR}
                onClick={toggleLanguage}>
                {t('langEng')}
            </Button>
        </div>
    );
};