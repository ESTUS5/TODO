

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, finalize } from 'rxjs/operators';
import { UsersService } from '../users.service';
import { User } from '../User';
import { log } from 'util';

@Component({
  selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})

    //implements OnInit
export class SigninComponent {

    @Input() user: User;

    constructor(
        private userService: UsersService,
        private route: ActivatedRoute
    ) {
    }

    onSubmitAccount(user: User) {
        this.userService
            .createAccount(user)
    }
}
