import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { CounterComponent } from './counter/counter.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';


@NgModule({
  declarations: [
    CounterButtonsComponent,
    CounterOutputComponent,
    CounterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CounterModule { }
