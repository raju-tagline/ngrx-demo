import { PostsComponent } from './posts/posts.component';
import { PostsEffects } from './ng-store/store.effects';
import { metaReducers } from './ng-store/index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './Graph Module/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { CounterComponent } from './counter/counter.component';
import { reducers } from './ng-store';

@NgModule({
  declarations: [AppComponent, CounterComponent, PostsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forRoot([PostsEffects]),
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 100,
    }),
    GraphQLModule,
    HttpClientModule,
  ],
  // schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
