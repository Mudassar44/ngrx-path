import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { updatePost } from '../states/posts.actions';
import { getPostById } from '../states/posts.selector';

@Component({
  selector: 'app-edit-posts',
  templateUrl: './edit-posts.component.html',
  styleUrls: ['./edit-posts.component.css']
})
export class EditPostsComponent implements OnInit {
  post: any;
  postForm : FormGroup;
  id : any;
  constructor(private route : ActivatedRoute, private store : Store<AppState>) {
    this.route.paramMap.subscribe((parms)=>{
     const id = parms.get('id');
     this.id = id;
     this.store.select(getPostById,{id}).subscribe((data)=>{
       this.post = data;
       console.log(this.post);
       this.createForm();
     })
    })
   }
  createForm() {
    this.postForm = new FormGroup({
      title : new FormControl(this.post?.title),
      description : new FormControl(this.post?.description)
    })
  }

  ngOnInit(): void {
  }

  onUpdatePost() {
    this.postForm.value.title;
    this.postForm.value.description;

    let post = {
      id : this.id,
      title : this.postForm.value.title,
      description : this.postForm.value.description
    }
    this.store.dispatch(updatePost({post}));
  }

}
