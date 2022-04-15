import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
  // counter$: Observable<number>;
  counter : number = 0;
  constructor(
    private store : Store<{counter : {counter : number}}>,
  ) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe((counter)=>{
      this.counter = counter.counter;
    })
  }

}
