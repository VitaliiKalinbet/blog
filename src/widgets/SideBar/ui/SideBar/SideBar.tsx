import React, {
    FC, memo, useMemo, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { SideBarItemType } from 'widgets/SideBar/model/types/sideBar';
import { useSelector } from 'react-redux';
import { SideBarItem } from '../SideBarItem/SideBarItem';
import cls from './SideBar.module.scss';
import { Button, ButtonSize, ButtonTheme } from '../../../../shared/ui/Button/Button';
import { getSideBarItems } from '../../model/selectors/getSideBarItems';

interface SideBarProps {
    className?: string;
}

export const SideBar: FC<SideBarProps> = memo((props) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);
    const sideBarItemsList = useSelector(getSideBarItems);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(() => sideBarItemsList.map((item: SideBarItemType) => (
        <SideBarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
    )), [collapsed, sideBarItemsList]);

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
                {itemsList}
            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    );
});
