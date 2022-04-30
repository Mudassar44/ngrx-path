import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.model";

export const LOGIN_START = '[auth page] login start';
export const LOGIN_SUCCESS = '[auth page] login success';
export const LOGIN_FAIL = '[auth page] login fail';

export const SIGNUP_START = '[auth page] signup start';
export const SIGNUP_SUCCESS = '[auth page] signup success';

export const signupstart = createAction(SIGNUP_START,props<{email : string, password : string}>());
export const signupsuccess = createAction(SIGNUP_SUCCESS, props<{ user : User}>());


export const loginstart = createAction(LOGIN_START,props<{email:string, password:string}>());
export const loginsuccess = createAction(LOGIN_SUCCESS, props<{user : User}>());