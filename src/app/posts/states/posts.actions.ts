import { createAction, props } from "@ngrx/store";
export const Add_POST_ACTION = '[posts page] add post';


export const addPost = createAction(Add_POST_ACTION, props<{post}>());