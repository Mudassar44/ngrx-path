import { createReducer, on } from "@ngrx/store";
import { loginsuccess } from "./auth.actions";
import { initialState } from "./auth.state";

const _authReducer = createReducer(initialState,
    on(loginsuccess,
        (state,action)=>{
            return {
                ...state,
                user : action.user
            };
    }
))

export function AuthReducer(state, action) {
    return _authReducer(state,action);
}