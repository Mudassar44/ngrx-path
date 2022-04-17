import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { counterReducer } from './counter/store/counter.reducer';
import { CounterModule } from './counter/counter.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { PostlistComponent } from './posts/postlist/postlist.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './store/app.state';
import { AddPostsComponent } from './posts/add-posts/add-posts.component';
import { EditPostsComponent } from './posts/edit-posts/edit-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PostlistComponent,
    AddPostsComponent,
    EditPostsComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      autoPause: true,
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
