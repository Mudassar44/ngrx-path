import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AddPostsComponent } from "./add-posts/add-posts.component";
import { EditPostsComponent } from "./edit-posts/edit-posts.component";
import { PostlistComponent } from "./postlist/postlist.component";
import { PostsEffects } from "./states/posts.effects";
import { postsReducer } from "./states/posts.reducer";

const routes : Routes = [
    {
    path : '',
    component : PostlistComponent,
    children: [
    {
        path : 'add',
        component : AddPostsComponent
    },
    {
        path : 'edit/:id',
        component : EditPostsComponent
    }
    ]
    }
];
@NgModule({
    declarations : [
        PostlistComponent,
        AddPostsComponent,
        EditPostsComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('posts',postsReducer),
        EffectsModule.forFeature([PostsEffects]),
    ],
    exports: [RouterModule]
})

export class PostsModule {

}