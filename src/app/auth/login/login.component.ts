import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinner } from 'src/app/store/shared/shared.action';
import { loginstart } from '../store/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   public loginForm : FormGroup;
  constructor(
    private store : Store<AppState>
    ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email : new FormControl(''),
      password : new FormControl('')
    });
  }
  onSubmit() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.store.dispatch(setLoadingSpinner({status : true}))
    this.store.dispatch(loginstart({email,password}));
  }
}
