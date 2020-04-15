import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

    constructor(
        private api: ApiService
    ) {
    }

    //  POST 
    createAccount(user: User) {
        return this.api.createAccount(user);
    }
    // GET 
    getAccount(user: User) {
        return this.api.getAccount(user);
    }
    
}
