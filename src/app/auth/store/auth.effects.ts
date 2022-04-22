import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { exhaustMap, map } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { loginstart, loginsuccess } from "./auth.actions";



@Injectable()
export class AuthEffect {
    /**
     *
     */
    constructor(
        private actions$ : Actions,
        private authService : AuthService
        ) {
    }

    login$ = createEffect(()=>{
        return this.actions$.pipe(
                ofType(loginstart),
                exhaustMap((action)=>{
                    return this.authService.login(action.email,action.password).pipe(map((data)=>{
                       const user =  this.authService.formatUser(data);
                        return loginsuccess({user});
                    }))
                })
            )
        })
}