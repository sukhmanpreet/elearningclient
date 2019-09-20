import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Post } from './_models/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Post[]>(`${environment.apiUrl}/api/posts`);
  }

  getByID(postId: number) {
    return this.http.get<Post[]>(`${environment.apiUrl}/api/posts/${postId}`);
  }

  like(postId: number) {
    return this.http.post<Post[]>(`${environment.apiUrl}/api/posts/react/${postId}`, { });
  }

  getAnalytics(userId: number) {
    return this.http.get<any[]>(`${environment.apiUrl}/api/posts/analytics/${userId}`);
  }

  savePost(post:Post,tags:string): Observable<string>{

    let requestBody = {
      name: post.name,
      type: post.type, 
      content: post.content, 
      tags: tags, 
      url: post.url
    }

    return this.http.post<string>(`${environment.apiUrl}/api/posts/create`,requestBody);
  }

}
