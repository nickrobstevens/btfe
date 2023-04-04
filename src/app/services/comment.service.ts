import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {


  private path: string = 'comments';

  constructor(
    private http: HttpClient
  ) { }


  getCommentsByPostId(postId: number): Promise<Array<Comment> | undefined>  {


    return this.http.get(`${environment.apiBase}${this.path}/?postId=${postId}`).toPromise()
    .then( data => {
      return data as Array<Comment>;
    })
    .catch( error => {
      console.log('Failed to load getCommentsByPostId');
      return undefined;
    });


  }


}
