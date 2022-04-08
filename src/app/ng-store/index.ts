import { environment } from '../../environments/environment.prod';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { postsReducer } from './store.reducer';

export interface AppState {}

export const reducers: ActionReducerMap<AppState> = {
  POSTS: postsReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
