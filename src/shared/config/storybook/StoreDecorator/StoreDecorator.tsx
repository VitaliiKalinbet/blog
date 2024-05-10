import React from 'react';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsPageReducer } from '../../../../pages/ArticleDetailsPage/model/slices';
import { articlesPageReducer } from '../../../../pages/ArticlesPage/model/slices/articlesPageSlice';
import { profileReducer } from '../../../../entities/Profile';
import { articleDetailsReducer } from '../../../../entities/Article/model/slice/articleDetailsSlice';
import { addCommentFormReducer } from '../../../../features/addCommentForm/model/slices/addCommentFormSlice';

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articlesPage: articlesPageReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducerList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
