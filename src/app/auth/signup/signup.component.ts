import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinner } from 'src/app/store/shared/shared.action';
import { signupstart } from '../store/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 signupForm : FormGroup;
  constructor(
    private store : Store<AppState>
  ) { }

  ngOnInit(): void {
    this.signupForm  = new FormGroup({
      email : new FormControl(''),
      password : new FormControl('')
    })
  }

  onSubmit() {
    const email = this.signupForm.value.email;
    let password : string = this.signupForm.value.password;
    // this.store.dispatch(setLoadingSpinner({status:true}));
    this.store.dispatch(signupstart({email,password}));
  }

}
