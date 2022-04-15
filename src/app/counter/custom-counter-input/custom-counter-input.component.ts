import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from '../store/counter.actions';
import { CounterState } from '../store/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {
  value : number = 0;
  constructor(
    private store : Store<{counter : CounterState}>,
  ) { }

  ngOnInit(): void {
  }

  onAdd() {
    this.store.dispatch(customIncrement({count : +this.value}));
  }

}
