import { createAction, props } from "@ngrx/store";
import { Post } from "./posts.states";
export const Add_POST_ACTION = '[posts page] add post';
export const LOAD_POSTS = '[posts page] load posts';
export const LOAD_POSTS_SUCCESS = '[posts page] load posts success';


export const addPost = createAction(Add_POST_ACTION, props<{post}>());
export const updatePost = createAction('updatePost', props<{post}>());
export const deletePost = createAction('deletePost', props<{ id : string }>());

export const loadPost = createAction(LOAD_POSTS);
export const loadPostSuccess = createAction(LOAD_POSTS_SUCCESS,props<{posts:Post[]}>());