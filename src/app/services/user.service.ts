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

  private cache?: Array<User>;


  constructor(
    private http: HttpClient
  ) { }


  getAllUsers(): Promise<Array<User>> {

    // Adding in a simple cache to prevent reloading user data
    if (this.cache) {
      return Promise.resolve(this.cache);
    }


    return this.http.get(`${environment.apiBase}${this.path}`).toPromise()
    .then( data => {
      this.cache = data as Array<User>;
      return data as Array<User>;
    })
    .catch( error => {
      console.log('Failed to load getAllUsers');
      return [];
    });

  }


  getUserById(userId: number): Promise<User | undefined>  {

    // Another simple cache with fallback
    if (this.cache) {
      return Promise.resolve(this.cache.find( u => { return u.id === Number(userId); }));
    }

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
