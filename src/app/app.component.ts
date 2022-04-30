import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './store/app.state';
import { getLoading } from './store/shared/shared.selectore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ngrx-path';
  showLoading : Observable<boolean> = new Observable;
  /**
   *
   */
  constructor(private store : Store<AppState>) {
    
    
  }
  ngOnInit(): void {
    this.showLoading = this.store.select(getLoading);
  }
}
