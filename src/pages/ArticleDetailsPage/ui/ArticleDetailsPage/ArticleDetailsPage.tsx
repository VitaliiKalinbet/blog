import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/addCommentForm';
import { Page } from 'widgets/Page/Page';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slices';
import { getArticleRecommendationsIsLoading } from 'pages/ArticleDetailsPage/model/selectors/recommendations';
import {
    getArticleRecommendations,
} from 'pages/ArticleDetailsPage/model/slices/articleDetailsPageRecommendationsSlice';
import {
    fetchArticleRecommendations,
} from 'pages/ArticleDetailsPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import {
    ArticleDetailsPageHeader,
} from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { CommentList } from '../../../../entities/Comment';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { Text, TextSize } from '../../../../shared/ui/Text/Text';
import { ArticleDetails, ArticleList } from '../../../../entities/Article';
import cls from './ArticleDetailsPage.module.scss';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const { id } = useParams<{id: string}>();
    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
    const dispatch = useAppDispatch();

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    if (!id) {
        return (
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('articleNotFound')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <Text
                    size={TextSize.L}
                    className={cls.commentTitle}
                    title={t('recommends')}
                />
                <ArticleList
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    className={cls.recommendations}
                    /* eslint-disable-next-line i18next/no-literal-string */
                    target="_blank"
                />
                <Text
                    size={TextSize.L}
                    className={cls.commentTitle}
                    title={t('comments')}
                />
                <AddCommentForm
                    onSendComment={onSendComment}
                />
                <CommentList
                    comments={comments}
                    isLoading={commentsIsLoading}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
