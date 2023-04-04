import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private path: string = 'posts';


  constructor(
    private http: HttpClient
  ) { }


  getAllPosts(): Promise<Array<Post>> {

    return this.http.get(`${environment.apiBase}${this.path}`).toPromise()
    .then( data => {
      return data as Array<Post>;
    })
    .catch( error => {
      console.log('Failed to load getAllPosts');
      return [];
    });

  }


  getPostsByUserID(userId: string): Promise<Array<Post> | undefined>  {


    return this.http.get(`${environment.apiBase}${this.path}/?userId=${userId}`).toPromise()
    .then( data => {
      return data as Array<Post>;
    })
    .catch( error => {
      console.log('Failed to load getPostsByUserID');
      return undefined;
    });


  }
}
