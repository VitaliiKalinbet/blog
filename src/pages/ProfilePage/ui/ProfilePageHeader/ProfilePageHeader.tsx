import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getProfileReadonly, profileActions, updateProfileData } from '../../../../entities/Profile';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const { className } = props;
    const dispatch = useAppDispatch();

    const readonly = useSelector(getProfileReadonly);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSaveEdit = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('userProfile')} />
            {readonly ? (
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.editBtn}
                    onClick={onEdit}
                >
                    {t('editButton')}
                </Button>
            ) : (
                <>
                    <Button
                        theme={ButtonTheme.OUTLINE_RED}
                        className={cls.editBtn}
                        onClick={onCancelEdit}
                    >
                        {t('cancelEdit')}
                    </Button>
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        className={cls.saveBtn}
                        onClick={onSaveEdit}
                    >
                        {t('saveEdit')}
                    </Button>
                </>
            )}
        </div>
    );
};
