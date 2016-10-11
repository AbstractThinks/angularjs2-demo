import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import template from './login.template.html';
import { SignInComponent } from '../sign-in/sign-in.component';
import { AppComponent } from '../app/app.component';
import { LoginService } from './services/login.service';

import { MyFooterComponent } from '../my-footer/my-footer.component';

@Component({
  template: template,
  directives: [ROUTER_DIRECTIVES, MyFooterComponent],
  providers: [LoginService]
})
export class LoginComponent {
  user;

  loginService;

  constructor(route: Router, loginService: LoginService) {
    this.route = route;
    this.loginService = loginService;
    this.user = {};
  }

  login() {
    this.loginService.login(this.user.name, this.user.password).then(users => console.log(users));
  }


}
