import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getPostById } from '../states/posts.selector';

@Component({
  selector: 'app-edit-posts',
  templateUrl: './edit-posts.component.html',
  styleUrls: ['./edit-posts.component.css']
})
export class EditPostsComponent implements OnInit {
  post: any;
  postForm : FormGroup;
  constructor(private route : ActivatedRoute, private store : Store<AppState>) {
    this.route.paramMap.subscribe((parms)=>{
     const id = parms.get('id');
     this.store.select(getPostById,{id}).subscribe((data)=>{
       this.post = data;
       console.log(this.post);
       this.createForm();
     })
    })
   }
  createForm() {
    this.postForm = new FormGroup({
      title : new FormControl(this.post.title),
      description : new FormControl(this.post.description)
    })
  }

  ngOnInit(): void {
  }

  onUpdatePost() {
    
  }

}
