import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { addPost } from '../states/posts.actions';

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css']
})
export class AddPostsComponent implements OnInit {
  postFrom : FormGroup;
  constructor(
    private store : Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.postFrom = new FormGroup({
      title : new FormControl(null, [Validators.required]),
      description : new FormControl(null)
    })
  }

  onAddPost() {
    console.log(this.postFrom);
   let title = this.postFrom.value.title;
   let des = this.postFrom.value.description 
   let post = {
     title : this.postFrom.value.title,
     description :  this.postFrom.value.description 
   }
   this.store.dispatch(addPost({ post }))

   
  }

}
