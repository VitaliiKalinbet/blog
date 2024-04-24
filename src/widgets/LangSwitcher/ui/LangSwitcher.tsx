import React, { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = memo((props) => {
    const { className, short } = props;
    const { t, i18n } = useTranslation();

    const toggleLanguage = async () => {
        i18n.changeLanguage(i18n.language === 'uk' ? 'en' : 'uk');
    };

    return (
        <div>
            <Button
                className={classNames('', {}, [className])}
                theme={ButtonTheme.CLEAR}
                onClick={toggleLanguage}
            >
                {t(short ? 'shortLang' : 'lang')}
            </Button>
        </div>
    );
});
