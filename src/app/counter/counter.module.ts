import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { CounterComponent } from './counter/counter.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CustomCounterInputComponent } from './custom-counter-input/custom-counter-input.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';

const routes : Routes = [
    {
      path : 'counter',
      component : CounterComponent
    },
  
]

@NgModule({
  declarations: [
    CounterButtonsComponent,
    CounterOutputComponent,
    CounterComponent,
    CustomCounterInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature("counter",counterReducer),
    RouterModule.forChild(routes)
  ]
})
export class CounterModule { }
