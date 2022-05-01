import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http : HttpClient) { }

  getPosts()  : Observable<any[]>{
    return this.http.get('https://my-project-ec1b2-default-rtdb.firebaseio.com/posts.json').pipe(
      map((data:any[])=>{
        return data;
      })
    );
  }
}
