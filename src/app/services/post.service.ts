import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Post } from '../posts/states/posts.states';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http : HttpClient) { }

  getPosts() {
    return this.http.get('https://my-project-ec1b2-default-rtdb.firebaseio.com/posts.json');
  }

  addPost(post : Post) : Observable<{}> {
    return this.http.post('https://my-project-ec1b2-default-rtdb.firebaseio.com/posts.json',post);
  }
}
