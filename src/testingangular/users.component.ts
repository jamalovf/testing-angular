import { OnInit } from '@angular/core';
import { UserService } from './user.service';

export class UsersComponent implements OnInit {
  
  users: any[] = [];

  constructor(private service: UserService) {}

  ngOnInit() {
    this.service.getUsers().subscribe(users => this.users = users);
  }

  deleteUser(user: any) {
    const index = this.users.indexOf(user);
    this.users.splice(index, 1);

    this.service.deleteUser(user.id).subscribe(null, (err) => {
        this.users.splice(index, 0, user);
    });
  }
}
