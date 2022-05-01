import {  Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponseData } from '../models/auth.response.model';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { autologin, autologout } from '../auth/store/auth.actions';
@Injectable({
    providedIn : 'root',
})

export class AuthService {
    logout() {
        localStorage.removeItem('userData');
        if(this.timeInterval) {
          clearTimeout(this.timeInterval);
          this.timeInterval = null;
        }
    }
    timeInterval: any;
    /**
     *
     */
    constructor(
      private http : HttpClient,
      private store : Store<AppState>
      ) {
        
    }

    signup(email,password) : Observable<AuthResponseData> {
      return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIREBASE_API_KEY}`,
      {email,password,returnSecureToken: true});
    }

    login(email,password)  : Observable<AuthResponseData>{

      return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASE_API_KEY}`,
      {email,password,returnSecureToken : true}
      );
    }
    
    formatUser(data : AuthResponseData) {
      const expirationDate = new Date(new Date().getTime() + +data.expireIn * 1000);
      const user = new User(data.email, data.idToken, data.localId,expirationDate);
      return user;
  }

  setUserIntoLocalStorage(user : User) {
    localStorage.setItem('userData',JSON.stringify(user));
    this.runTimeOutInterval(user);
  
  }

  runTimeOutInterval(user) {
    const todayDate = new Date().getTime();
    const expirationDate = user.expireDate.getTime();

    const interval = todayDate - expirationDate;

  this.timeInterval =  setTimeout(() => {
      //logout
    this.store.dispatch(autologout());
    }, interval);
  }

  getUserFromLocalStorage() {
    const userDateString = localStorage.getItem('userData');
    if(userDateString) {
      const userData = JSON.parse(userDateString);
      const expirationDate = new Date(userData.expirationDate);
      const user = new User(userData.email,userData.token,userData.localId,expirationDate);
      this.runTimeOutInterval(user); return user;
    }
    return null;
    
  }
}