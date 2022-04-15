import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeChannelName, customIncrement } from '../store/counter.actions';
import { getChannelName } from '../store/counter.selector';
import { CounterState } from '../store/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {
  value : number = 0;
  channelName : string = '';
  constructor(
    private store : Store<{counter : CounterState}>,
  ) { }

  ngOnInit(): void {
    this.store.select(getChannelName).subscribe((data)=> this.channelName = data);
  }

  onAdd() {
    this.store.dispatch(customIncrement({count : +this.value}));
  }

  onChangeText() {
    this.store.dispatch(changeChannelName());
  }

}
