import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { User } from './User';
import { Observable } from 'rxjs';
import { release } from 'process';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

    constructor(
        private api: ApiService
    ) {
    }
  getAllUsers() {
    return this.api.getAllUsers();
  }

  getUser(user: User) {
    return this.api.getUser(user);
  }

  registerUser(user: User) {
    return this.api.registerUser(user);
  }

  updateUser(user: User) {
    return this.api.updateUser(user);
  }

  deleteUser(id: number) {
    return this.api.deleteUser(id);
  }
  
}
