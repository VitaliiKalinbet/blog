import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { CommentType } from 'entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
    CommentType[],
    string | undefined,
    ThunkConfig<string>
    >(
        'articleDetails/fetchCommentsByArticleId',
        async (articleId, thunkAPI) => {
            const { extra, rejectWithValue } = thunkAPI;

            if (!articleId) {
                return rejectWithValue('No articleId in fetchCommentsByArticleId');
            }

            try {
                const response = await extra.api.get<CommentType[]>('/comments', {
                    params: {
                        articleId,
                        _expand: 'user',
                    },
                });

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
