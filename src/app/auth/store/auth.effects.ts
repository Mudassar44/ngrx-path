import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { exhaustMap, map, tap } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { AppState } from "src/app/store/app.state";
import { setLoadingSpinner } from "src/app/store/shared/shared.action";
import { loginstart, loginsuccess } from "./auth.actions";



@Injectable()
export class AuthEffect {
    /**
     *
     */
    constructor(
        private actions$ : Actions,
        private authService : AuthService,
        private store : Store<AppState>,
        private router : Router
        ) {
    }

    login$ = createEffect(()=>{
        return this.actions$.pipe(
                ofType(loginstart),
                exhaustMap((action)=>{

                    return this.authService.login(action.email,action.password).pipe(map((data)=>{
                        this.store.dispatch(setLoadingSpinner({status:false}));
                       const user =  this.authService.formatUser(data);
                        return loginsuccess({user});
                    }))
                })
            )
        })

    loginRedirect$ = createEffect(()=> {
        return this.actions$.pipe(
            ofType(loginsuccess),
            tap((action)=>{
                this.router.navigate(['/']);
            })
        )
    },{dispatch:false});


    }
