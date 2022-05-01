import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { autologout } from 'src/app/auth/store/auth.actions';
import { AUTH_STATE_NAME, isAuthenticated } from 'src/app/auth/store/auth.selector';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated : Observable<boolean>
  constructor(
    private store : Store<AppState>
  ) { }

  ngOnInit(): void {
    this.isAuthenticated = this.store.select(isAuthenticated)
  }

  onLogout(evt) {
    evt.preventDefault();
    this.store.dispatch((autologout()));
  }

}
