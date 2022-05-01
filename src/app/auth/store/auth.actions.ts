import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.model";

export const LOGIN_START = '[auth page] login start';
export const LOGIN_SUCCESS = '[auth page] login success';
export const LOGIN_FAIL = '[auth page] login fail';

export const SIGNUP_START = '[auth page] signup start';
export const SIGNUP_SUCCESS = '[auth page] signup success';
export const AUTO_LOGIN_ACTION = '[auth page] auto login';
export const LOGOUT_ACTION = '[auth page] logout'
export const signupstart = createAction(SIGNUP_START,props<{email : string, password : string}>());
export const signupsuccess = createAction(SIGNUP_SUCCESS, props<{ user : User, redirect : boolean}>());


export const loginstart = createAction(LOGIN_START,props<{email:string, password:string}>());
export const loginsuccess = createAction(LOGIN_SUCCESS, props<{user : User, redirect : boolean}>());

export const autologin = createAction(AUTO_LOGIN_ACTION);
export const autologout = createAction(LOGOUT_ACTION);