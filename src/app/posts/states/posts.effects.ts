import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { map, mergeMap } from "rxjs";
import { PostService } from "src/app/services/post.service";
import { addPost, loadPost, loadPostSuccess } from "./posts.actions";
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
                        postsData.forEach((val)=>{
                            posts.push({id : val.id,title : val.title,description : val.description});
                        })
                      return  loadPostSuccess({posts});
                    })
                )
            })
        )
    });
}