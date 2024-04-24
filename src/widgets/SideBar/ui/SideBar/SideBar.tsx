import React, { FC, memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { SideBarItemsList, SideBarItemType } from '../../model/item';
import { SideBarItem } from '../SideBarItem/SideBarItem';
import cls from './SideBar.module.scss';
import { Button, ButtonSize, ButtonTheme } from '../../../../shared/ui/Button/Button';

interface SideBarProps {
    className?: string;
}

export const SideBar: FC<SideBarProps> = memo((props) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={cls.items}>
                {SideBarItemsList.map((item: SideBarItemType) => (
                    <SideBarItem
                        item={item}
                        collapsed={collapsed}
                        key={item.path}
                    />
                ))}
            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    );
});
