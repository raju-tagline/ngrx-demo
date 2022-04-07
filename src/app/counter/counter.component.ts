import { select, Store } from '@ngrx/store';
import * as fromPost from '../post-store/course.reducers';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../post-store/course.interface';
import { AppState } from '../post-store';
import { loadCourses } from '../post-store/course.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  public storeCounter: any;
  public courses$!: Observable<Course[]>;

  constructor(
    private store: Store<AppState> // private GraphqlService:
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadCourses());
    this.courses$ = this.store.pipe(select(fromPost.getPosts));
  }
}
