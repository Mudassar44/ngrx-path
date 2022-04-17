import { PostsState } from "./posts.states";
import { createFeatureSelector, createSelector } from "@ngrx/store";

const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostsState, (state)=>{
    return state.posts;
})

export const getPostById = createSelector(getPostsState, (state,props)=>{
    // return state.posts[props.id] ? state.posts[props.id] : null;
    return state.posts.find((post)=> post.id == props.id);
})