import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterComponent } from './counter/counter/counter.component';

const routes: Routes = [
  {
    path : 'counter',
    component : CounterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
