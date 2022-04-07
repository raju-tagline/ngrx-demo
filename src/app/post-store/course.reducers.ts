import { Course } from './course.interface';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import {
  createReducer,
  on,
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';
import { courseActionTypes } from './course.actions';

export interface CourseState extends EntityState<Course> {
  coursesLoaded: boolean;
  ids: any;
}

export const adapter: EntityAdapter<Course> = createEntityAdapter<Course>();

export const initialState = adapter.getInitialState({
  coursesLoaded: false,
  ids: [],
});

export const courseReducer = createReducer(
  initialState,

  on(courseActionTypes.coursesLoaded, (state, action) => {
    return adapter.setAll(action.courses, { ...state, coursesLoaded: true });
  })
);

export const { selectAll, selectIds } = adapter.getSelectors();

const getPostFeatureState = createFeatureSelector<CourseState>('posts');

export const getPosts = createSelector(
  getPostFeatureState,
  adapter.getSelectors().selectAll
);
