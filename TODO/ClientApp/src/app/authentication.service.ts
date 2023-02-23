import { Injectable } from '@angular/core';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private api: ApiService) { }

  login(username: string, password: string) {
    return this.api.authenticate(username, password);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
