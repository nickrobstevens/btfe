import { Component } from '@angular/core';
import { User } from './models/user.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'btfe';

  public users: Array<User> = [];

  constructor(
    private usersvc: UserService
  ) { }

  ngOnInit(): void {

    this.loadUsers();

  }


  loadUsers() {

    this.usersvc.getAllUsers().then( data => {
      this.users = data;
    });

  }


}
