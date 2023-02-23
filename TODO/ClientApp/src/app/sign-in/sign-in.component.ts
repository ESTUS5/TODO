

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { map, finalize } from 'rxjs/operators';
import { UsersService } from '../users.service';
import { User } from '../User';
import { log } from 'util';

@Component({
  selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [UsersService]
})


    //implements OnInit
export class SigninComponent implements OnInit {

  //@Input() user: User;

  @Output() submitUser: EventEmitter<User> = new EventEmitter();

  user: User = new User();

  //createUserForm = this.formBuilder.group(
  //  {
   //   username: '',
   //   password: ''
   // });

    constructor(
        private userService: UsersService,
      private route: ActivatedRoute,
      //private formBuilder: FormBuilder
  ) { }

  users: User[] = [];

  public ngOnInit() {
    this.route.data.pipe(
      map(data => data['users'])
    )
      .subscribe(
        (data: User[]) => {
          this.users = data;
        }
      )
  }

   // onSubmit(user: User) {
   //   this.submitUser.emit(this.user);
   //   console.log(this.user);
   //   this.user = new User();
 // }

  onSubmit(user: User) {
    this.userService
      .registerUser(user)
      .subscribe(
        (newUser) => {     
            this.users = this.users.concat(newUser);
        }
      );
  }
}
