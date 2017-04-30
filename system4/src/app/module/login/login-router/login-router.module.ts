import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LoginPageComponent } from '../login-page/login-page.component';

const LoginRoutes: Route[] = [
	{ path: '', redirectTo: 'page',  pathMatch: 'full'},
	{ path: 'page', component: LoginPageComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LoginRoutes),
  ],
  declarations: []
})
export class LoginRouterModule { }
