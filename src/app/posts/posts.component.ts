import { AppState } from '../ng-store/index';
import { loadPosts } from '../ng-store/store.action';
import { GET_POSTS } from '../ng-store/store.selector';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  public storePost$!: Observable<any>;
  public postList: any = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  public getPost() {
    this.storePost$ = this.store?.select(GET_POSTS);
    // this.storePost$.subscribe((res) => {
    //   console.log('res :>> ', res);
    // });
    this.store.dispatch(loadPosts());
  }
}
