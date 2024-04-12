import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
    const { t } = useTranslation();
    const { className } = props;

    const [username, setUsername] = useState('');
    const onChangeUsername = (val: string) => {
        setUsername(val);
    };

    const [password, setPassword] = useState('');
    const onChangePassword = (val: string) => {
        setPassword(val);
    };

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                value={username}
                onChange={onChangeUsername}
                className={cls.input}
                type="text"
                placeholder={t('usernamePlaceholder')}
                autoFocus
            />
            <Input
                value={password}
                onChange={onChangePassword}
                className={cls.input}
                type="text"
                placeholder={t('passwordPlaceholder')}
            />
            <Button
                className={cls.loginBtn}
            >
                {t('loginBtn')}
            </Button>
        </div>
    );
};
