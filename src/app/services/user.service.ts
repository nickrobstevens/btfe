import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private path: string = 'users';


  constructor(
    private http: HttpClient
  ) { }


  getAllUsers() {


    return this.http.get(`${environment.apiBase}${this.path}`);


  }


}
