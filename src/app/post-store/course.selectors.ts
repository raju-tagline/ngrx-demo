import { CourseState } from './course.reducers';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { selectAll } from './course.reducers';

export const courseFeatureSelector =
  createFeatureSelector<CourseState>('courses');

export const getAllCourses = createSelector(courseFeatureSelector, selectAll);

export const areCoursesLoaded = createSelector(
  courseFeatureSelector,
  (state) => state.coursesLoaded
);
