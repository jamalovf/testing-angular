import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable()
export class UserService {
  // private url = 'http://jsonplaceholder.typicode.com/users';

  users = [
    {
        id: 1,
        name: 'Filip',
        surname: 'Jamalov'
    },
    {
        id: 2,
        name: 'Stefan',
        surname: 'Daskalov'
    },
    {
        id: 3,
        name: 'Marko',
        surname: 'Krstevski'
    }
];

  constructor(private http: HttpClient) {}

  getUsers() {
    // real scenario: this.http.get(this.url);
    return from([this.users]);
  }

  deleteUser(userId: any) {
    // real scenario: this.http.delete(this.getUserUrl(userId))
    return from([this.users[userId]]);
  }
}
