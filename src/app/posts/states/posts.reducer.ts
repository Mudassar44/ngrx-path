import { createReducer, on } from "@ngrx/store";
import { addPost, deletePost, loadPostSuccess, updatePost } from "./posts.actions";
import { initialState } from "./posts.states";


const _postsReducer = createReducer(initialState, on(addPost, (state, action) => {
    let post = { ...action.post };
    post.id = ((state.posts.length) + 1).toString()
    return {
        ...state,
        posts: [...state.posts, post]
    }
}),
on(loadPostSuccess,(state,action)=>{
    debugger;
    return {
        ...state,
        posts : action.posts
    }
}),
on(updatePost, (state, action)=>{
    const updatePost = state.posts.map((post)=>{
        return post.id === action.post.id ? post : action.post;
    });

    return {
        ...state,
        posts : updatePost,
    }
}),
on(deletePost,(state,action)=>{
    
    let updatedPosts = state.posts.filter((p => p.id != Number(action.id)));
    return {
        ...state,
        posts : updatedPosts
    }
})
)
export function postsReducer(state: any, action: any) {
    return _postsReducer(state, action)
}