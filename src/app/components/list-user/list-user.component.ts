import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss',
})
export class ListUserComponent {
  users: any;
  loadSpinner:boolean = true;
  constructor(private userService: UserService) {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (res) => {this.users = res; this.loadSpinner = false;},
      error: (err) => {console.log(err);},
    });
  }
}
