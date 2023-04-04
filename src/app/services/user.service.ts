import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private path: string = 'users';


  constructor(
    private http: HttpClient
  ) { }


  getAllUsers(): Promise<Array<User>> {

    return this.http.get(`${environment.apiBase}${this.path}`).toPromise()
    .then( data => {
      return data as Array<User>;
    })
    .catch( error => {
      console.log('Failed to load getAllUsers');
      return [];
    });

  }


  getUserById(userId: string): Promise<User | undefined>  {


    return this.http.get(`${environment.apiBase}${this.path}/${userId}`).toPromise()
    .then( data => {
      return data as User;
    })
    .catch( error => {
      console.log('Failed to load getUserById');
      return undefined;
    });


  }


}
