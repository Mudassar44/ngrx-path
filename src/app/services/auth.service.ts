import {  Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponseData } from '../models/auth.response.model';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
@Injectable({
    providedIn : 'root',
})

export class AuthService {
    /**
     *
     */
    constructor(private http : HttpClient) {
        
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
}