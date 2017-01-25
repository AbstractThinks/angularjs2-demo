import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {LoginComponent2} from '../component/login2/login.component';


const appRoutes: Routes = [
  { path: '', component: LoginComponent2 },
  { path: 'login2', component: LoginComponent2 },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,{ useHash: true })
  ],
  declarations: [
    LoginComponent2,
  ],
  exports: [
    RouterModule
  ],

})
export class AppRoutingModule {
    constructor() {
    }
}
