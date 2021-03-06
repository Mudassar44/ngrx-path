import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { AppState } from 'src/app/store/app.state';
import { CounterState } from '../store/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
  counter$: Observable<CounterState> = new Observable<CounterState>();
  // counter : number = 0;
  constructor(
    private store : Store<AppState>,
  ) {
   }

  ngOnInit(): void {
  //   this.store.select('counter').subscribe((counter)=>{
  //     this.counter = counter.counter;
  //   })
  //  this.counter$ = this.store.select(getCounterState);
  }

}
