import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { deletePost } from '../states/posts.actions';
import { getPosts } from '../states/posts.selector';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {
  posts$ : Observable<any[]> = new Observable<any[]>();
  constructor(
    private store : Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts);
  }

  onDelete(id) {
    this.store.dispatch(deletePost({id}));
  }

}
