import { createReducer, on } from "@ngrx/store";
import { autologout, loginsuccess, signupsuccess } from "./auth.actions";
import { initialState } from "./auth.state";

const _authReducer = createReducer(initialState,
    on(loginsuccess,
        (state,action)=>{
            return {
                ...state,
                user : action.user
            };
    }
    ),
    on(signupsuccess,
        (state,action)=>{
            return {
                ...state,
                user : action.user
            }
        }),
    on(autologout,
        (state,action)=>{
            return  {
                ...state,
                user : null
            }
        })
)

export function AuthReducer(state, action) {
    return _authReducer(state,action);
}