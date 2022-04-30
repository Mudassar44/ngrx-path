import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { LoginComponent } from './login/login.component';
import { AuthEffect } from "./store/auth.effects";
import { AuthReducer } from "./store/auth.reducer";


const routes : Routes = [
    { path : '', children : [
        {
            path : '', redirectTo : 'login',
        },
        {
            path : 'login', component : LoginComponent
        }
    ]
    }
]

@NgModule({
    declarations : [
    LoginComponent
  ],
    imports : [
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        // StoreModule.forFeature('auth',AuthReducer),
       
    ],
    exports : [],
}) 
export class AuthModule {

}