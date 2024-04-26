import React, { CSSProperties, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = (props: AvatarProps) => {
    const {
        className,
        src,
        size,
        alt = 'avatar-image',
    } = props;
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <img
            alt={alt}
            className={classNames(cls.Avatar, mods, [className])}
            style={styles}
            src={src}
        />
    );
};
