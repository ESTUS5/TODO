import { Component, Input,Output, EventEmitter, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../User';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-log-in',
    templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  providers: [UsersService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  user: User = new User();

  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required]
      });

    this.authenticationService.logout();

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.user.Username = this.f.username.value;
    this.user.Password = this.f.password.value;
    /*this.userService.getUser(this.user)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        }
      );*/
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }


  onLogin(user: User) {
    this.userService
      .getUser(user)
      .subscribe(
        (_user) => {
          _user = user;
        }
      )
  }
}
