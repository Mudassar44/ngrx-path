import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path : 'counter',
    loadChildren : () => import('./counter/counter.module').then((m)=> m.CounterModule)
  },
  {
    path : 'posts',
    loadChildren : () => import('./posts/posts.module').then((m)=> m.PostsModule)
  },
  {
    path : '',
    component : HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
