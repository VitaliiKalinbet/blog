import React from 'react';
import {FC, useState} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SideBar.module.scss';
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";

interface SideBarProps {
    className?: string;
}

export const SideBar: FC<SideBarProps> = (props) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed(prev => !prev)
    };

    return (
        <div className={classNames(cls.SideBar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>toggle</button>

            <div className={cls.switchers}>
                <ThemeSwitcher className={cls.themeBlock} />
                <LangSwitcher />
            </div>
        </div>
    );
};
