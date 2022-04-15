import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterComponent } from './counter/counter/counter.component';
import { HomeComponent } from './home/home.component';
import { PostlistComponent } from './posts/postlist/postlist.component';

const routes: Routes = [
  {
    path : 'counter',
    component : CounterComponent
  },
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'posts',
    component : PostlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
