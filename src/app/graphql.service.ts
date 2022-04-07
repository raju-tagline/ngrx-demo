import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class GraphqlService {
  //---------ALL POSTS DETAILS---------
  public Get_AllInfo = gql`
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

  constructor(private apollo: Apollo) {}

  /**
   * getAllPost
   */
  public getAllPost() {
    return new Promise((resolve: any, reject) => {
      this.apollo
        .watchQuery({
          query: this.Get_AllInfo,
        })
        .valueChanges.subscribe((res: any) => {
          console.log('res?.data?.posts?.data :>> ', res?.data?.posts?.data);
          resolve(res?.data?.posts?.data);
        });
    });
  }
}
