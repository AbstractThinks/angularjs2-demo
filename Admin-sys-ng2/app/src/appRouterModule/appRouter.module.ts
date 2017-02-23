import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import {appLoginModule} from '../appLoginModule/login.module';
import {Login1Component} from '../appLoginModule/login1.component'
const appRoutes: Routes = [

    { path: 'login', component: Login1Component },
    { path: '', component: Login1Component },

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,{ useHash: true }), 
  ],
   declarations: [
    Login1Component,
  ],
  exports: [
    RouterModule
  ],

})
export class AppRoutingModule {
    constructor() {
    }
}
