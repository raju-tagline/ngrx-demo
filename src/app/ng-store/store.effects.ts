import { GraphqlService } from './../graphql.service';
import { mergeMap } from 'rxjs/operators';
import { loadPosts, loadPostsSuccess } from './store.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

@Injectable()
export class PostsEffects {
  constructor(
    private actions$: Actions,
    private graphqlService: GraphqlService
  ) {}

  loadPostsList$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(loadPosts),
      mergeMap(() => {
        return this.graphqlService.getAllPost().then((res: any) => {
          return loadPostsSuccess({ payload: res });
        });
      })
    );
  });

  //   addPost$ = createEffect(() => {
  //     return this.actions$.pipe(
  //       ofType(addPost),
  //       mergeMap((action) => {
  //         return this.graphqlService.addPost(action.post).pipe(
  //           map((data) => {
  //             const post = { ...action.post, id: data.name };
  //             return addPostSuccess({ post });
  //           })
  //         );
  //       })
  //     );
  //   });

  //   updatePost$ = createEffect(() => {
  //     return this.actions$.pipe(
  //       ofType(updatePost),
  //       switchMap((action) => {
  //         return this.graphqlService.updatePost(action.post).pipe(
  //           map((data) => {
  //             const updatedPost: Update<Post> = {
  //               id: action.post.id,
  //               changes: {
  //                 ...action.post,
  //               },
  //             };
  //             return updatePostSuccess({ post: updatedPost });
  //           })
  //         );
  //       })
  //     );
  //   });
  //   deletePost$ = createEffect(() => {
  //     return this.actions$.pipe(
  //       ofType(deletePost),
  //       switchMap((action) => {
  //         return this.graphqlService.deletePost(action.id).pipe(
  //           map((data) => {
  //             return deletePostSuccess({ id: action.id });
  //           })
  //         );
  //       })
  //     );
  //   });

  //   getSinglePost$ = createEffect((): any => {
  //     return this.actions$.pipe(
  //       ofType(ROUTER_NAVIGATION),
  //       filter((r: RouterNavigatedAction) => {
  //         return r.payload.routerState.url.startsWith('/posts/details');
  //       })
  //       // map((r: RouterNavigatedAction) => {
  //       //   return r.payload.routerState['params']['id'];
  //       // }),
  //       // switchMap((id) => {
  //       //   return this.graphqlService.getPostById(id).pipe(
  //       //     map((post) => {
  //       //       const postData = [{ ...post, id }];
  //       //       return loadPostsSuccess({ posts: postData });
  //       //     })
  //       //   );
  //       // })
  //     );
  //   });
}
