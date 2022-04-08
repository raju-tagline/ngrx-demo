import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { IPostList } from './store.interface';

export interface PostsState extends EntityState<IPostList> {}

export const POSTS_ADAPTER = createEntityAdapter<IPostList>();

export const initialState: PostsState = POSTS_ADAPTER.getInitialState();
