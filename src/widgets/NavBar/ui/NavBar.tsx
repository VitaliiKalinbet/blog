import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('login')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                {/* eslint-disable-next-line max-len */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo maiores non, officia officiis optio quasi repellendus reprehenderit veritatis. Adipisci asperiores consequuntur culpa debitis delectus deserunt distinctio earum est explicabo facere illo nam neque numquam obcaecati officiis perferendis provident quidem ratione recusandae rem saepe sit sunt voluptas voluptatem, voluptates. Animi blanditiis deleniti impedit maxime nemo quae qui quia quisquam, sequi? Doloribus, earum enim fuga labore laborum, obcaecati officia provident quibusdam quod ratione saepe sed, tempore voluptas. Assumenda aut beatae commodi culpa cum deleniti deserunt dicta eum eveniet ipsum maxime nam, quibusdam reiciendis repellendus, suscipit ullam unde vel! Officia rem, sint. Culpa.
            </Modal>
        </div>
    );
};
