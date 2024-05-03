import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleView } from 'entities/Article';
import { ArticlesViewSwitcher } from './ArticlesViewSwitcher';

export default {
    title: 'features/ArticlesViewSwitcher',
    component: ArticlesViewSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesViewSwitcher>;

const Template: ComponentStory<typeof ArticlesViewSwitcher> = (args) => <ArticlesViewSwitcher {...args} />;

export const SmallSwitch = Template.bind({});
SmallSwitch.args = {
    view: ArticleView.SMALL,
};

export const BigSwitch = Template.bind({});
BigSwitch.args = {
    view: ArticleView.BIG,
};
