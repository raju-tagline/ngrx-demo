import { concatMap, mergeMap, map } from 'rxjs/operators';
import { courseActionTypes } from './course.actions';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { GraphqlService } from './../graphql.service';
import { Injectable } from '@angular/core';

@Injectable()
export class getEffectsPots {
  constructor(
    private graphqlService: GraphqlService,
    private actions$: Actions
  ) {}

  loadCoursesPosts$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(courseActionTypes?.loadCourses),
      mergeMap((action: any) =>
        this.graphqlService.getAllPost().then((posts: any) => {
          return courseActionTypes?.coursesLoaded({ courses: posts });
        })
      )
    );
  });
}
