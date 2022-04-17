import { createAction, props } from "@ngrx/store";
export const Add_POST_ACTION = '[posts page] add post';


export const addPost = createAction(Add_POST_ACTION, props<{post}>());
export const updatePost = createAction('updatePost', props<{post}>());
export const deletePost = createAction('deletePost', props<{ id : string }>());