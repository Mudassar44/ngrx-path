import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { counterReducer } from './counter/store/counter.reducer';
import { CounterModule } from './counter/counter.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    AppRoutingModule,
    StoreModule.forRoot({counter : counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
