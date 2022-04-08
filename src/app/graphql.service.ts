import { IPostList } from './ng-store/store.interface';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
const GET_ALLINFO = gql`
  query ($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
        body
      }
      meta {
        totalCount
      }
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class GraphqlService {
  constructor(private apollo: Apollo) {}

  /**
   * getAllPost
   */
  public getAllPost(): any {
    return new Promise((resolve) => {
      this.apollo
        .watchQuery({
          query: GET_ALLINFO,
        })
        .valueChanges.subscribe((res: any) => {
          resolve(res?.data?.posts?.data);
        });
    });
  }
}
