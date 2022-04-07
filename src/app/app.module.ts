import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PostList } from './Store/post.effect';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './Graph Module/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { FirstComponent } from './first/first.component';
import { postReducer } from './Store/post.reducer';
import { EffectsModule } from '@ngrx/effects';
import { counterReducer } from './State/state.reducer';
import { CounterComponent } from './counter/counter.component';
import { getDataList } from './State/state.effect';

@NgModule({
  declarations: [AppComponent, FirstComponent, CounterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forRoot([getDataList]),
    StoreModule.forRoot({ counter: counterReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 100,
    }),
    GraphQLModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
