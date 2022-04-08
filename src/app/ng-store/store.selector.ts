import { POSTS_ADAPTER, PostsState } from './store.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const POST_STATE_NAME = 'posts';
const GET_POSTSSTATE = createFeatureSelector<PostsState>(POST_STATE_NAME);
export const POSTS_SELECTORS = POSTS_ADAPTER.getSelectors();

export const GET_POSTS = createSelector(
  GET_POSTSSTATE,
  POSTS_SELECTORS.selectAll
);
export const getPostEntities = createSelector(
  GET_POSTSSTATE,
  POSTS_SELECTORS.selectEntities
);
