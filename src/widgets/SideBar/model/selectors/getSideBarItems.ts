import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';
import { SideBarItemType } from '../types/sideBar';

export const getSideBarItems = createSelector(
    getUserAuthData,
    (userAuthData) => {
        const sideBarItemsList: SideBarItemType[] = [
            {
                path: RoutePath.main,
                text: 'Main page',
                // @ts-ignore
                Icon: MainIcon,
            },
            {
                path: RoutePath.about,
                text: 'About page',
                // @ts-ignore
                Icon: AboutIcon,
            },
        ];

        if (userAuthData) {
            sideBarItemsList.push(
                {
                    path: RoutePath.profile + userAuthData.id,
                    text: 'Profile page',
                    // @ts-ignore
                    Icon: ProfileIcon,
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    text: 'Article page',
                    // @ts-ignore
                    Icon: ArticleIcon,
                    authOnly: true,
                },
            );
        }

        return sideBarItemsList;
    },
);
