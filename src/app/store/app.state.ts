import { AuthReducer } from "../auth/store/auth.reducer";
import { AUTH_STATE_NAME } from "../auth/store/auth.selector";
import { AuthState } from "../auth/store/auth.state";
import { counterReducer } from "../counter/store/counter.reducer";
import { CounterState } from "../counter/store/counter.state";
import { postsReducer } from "../posts/states/posts.reducer";
import { PostsState } from "../posts/states/posts.states";
import { SharedReducer } from "./shared/shared.reducer";
import { SHARED_STATE_NAME } from "./shared/shared.selectore";
import { SharedState } from "./shared/shared.state";



export interface AppState {
    // counter : CounterState,
    // posts : PostsState,
    [SHARED_STATE_NAME]: SharedState
    [AUTH_STATE_NAME] : AuthState
}

export const appReducer = {
    [SHARED_STATE_NAME] : SharedReducer,
    [AUTH_STATE_NAME] : AuthReducer
    // counter : counterReducer,
    // posts : postsReducer,
}