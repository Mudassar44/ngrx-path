import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { exhaustMap, map, merge, mergeMap, of, tap } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { AppState } from "src/app/store/app.state";
import { setLoadingSpinner } from "src/app/store/shared/shared.action";
import { autologin, autologout, loginstart, loginsuccess, signupstart, signupsuccess } from "./auth.actions";



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

    autologin$ = createEffect(()=>{
        return this.actions$.pipe(
            ofType(autologin),
            mergeMap((action)=>{
                const user = this.authService.getUserFromLocalStorage();
                console.log(user);
                return of(loginsuccess({user, redirect : true}));
            })
        )
    })

    autologout$ = createEffect(()=>{
        return this.actions$.pipe(
            ofType(autologout),
            map(action=>{
                this.authService.logout();
                this.router.navigate(['auth'])
            })
        )
    },{dispatch:false})

    login$ = createEffect(()=>{
        return this.actions$.pipe(
                ofType(loginstart),
                exhaustMap((action)=>{

                    return this.authService.login(action.email,action.password).pipe(map((data)=>{
                        this.store.dispatch(setLoadingSpinner({status:false}));
                       const user =  this.authService.formatUser(data);
                       this.authService.setUserIntoLocalStorage(user);
                        return loginsuccess({user, redirect : true});
                    }))
                })
            )
        })

    loginRedirect$ = createEffect(()=> {
        return this.actions$.pipe(
            ofType(...[loginsuccess,signupsuccess]),
            tap((action)=>{
                this.router.navigate(['/']);
            })
        )
    },{dispatch:false});

    signUp$ = createEffect(()=>{
        return this.actions$.pipe(
            ofType(signupstart),
            exhaustMap((action)=>{
                return this.authService.signup(action.email,action.password).pipe(
                    map((data)=>{
                        const user = this.authService.formatUser(data);
                        return signupsuccess({user, redirect:true});
                    })
                )
            })
        )
    })
    }
