import { loadPosts, loadPostsSuccess } from './store.action';
import { createReducer, on } from '@ngrx/store';
import { initialState, POSTS_ADAPTER } from './store.state';

const _postsReducer = createReducer(
  initialState,
  on(loadPostsSuccess, (state, action) => {
    console.log('state,action :>> ', state);
    console.log('action.payload :>> ', action.payload);
    return POSTS_ADAPTER.setAll(action.payload, { ...state});
  })
);

export function postsReducer(state: any, action: any) {
  return _postsReducer(state, action);
}
