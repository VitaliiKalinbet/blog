import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';

export interface SideBarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SideBarItemsList: SideBarItemType[] = [
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
    {
        path: RoutePath.profile,
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
];
