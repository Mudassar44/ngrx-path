import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { map, mergeMap } from "rxjs";
import { PostService } from "src/app/services/post.service";
import { addPost, addPostSuccess, loadPost, loadPostSuccess } from "./posts.actions";
import { Post } from "./posts.states";
@Injectable()
export class PostsEffects {
    /**
     *
     */
    constructor(
        private actions$ : Actions,
        private postsService : PostService 
    ) {
        
    }

    $loadPosts = createEffect(()=>{
        return this.actions$.pipe(
            ofType(loadPost),
            mergeMap((action)=>{ 
                return this.postsService.getPosts().pipe(
                    map((postsData:any[])=>{
                        console.log(postsData);
                        let posts: Post[] = [];
                       let keys = Object.keys(postsData);

                        keys.forEach((val)=>{
                            let post = postsData[val];
                            posts.push({id : post.id,title : post.title,description : post.description});
                        })
                      return  loadPostSuccess({posts});
                    })
                )
            })
        )
    });

    addPost$ = createEffect(() => {
       return this.actions$.pipe(ofType(addPost), mergeMap(action => {
            return this.postsService.addPost(action.post).pipe(map((data:any) => {
                console.log(data);
                const post = {...action.post, id : data?.name};
                return addPostSuccess({post});
            }))
        }))   
    })
}