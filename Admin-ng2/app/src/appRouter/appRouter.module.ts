import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {LoginComponent} from '../login/login.component';
import {InfoComponent} from '../info/info.component';
import {DetailedComponent} from '../detailed/detailed.component';

/// <reference path="../../../typings/globals/jquery/index.d.ts" />
const appRoutes: Routes = [

        { path: 'login', component: LoginComponent },
        { path: '', component: InfoComponent },
        { path: 'detailed/:id', component: DetailedComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,{ useHash: true })
  ],

  exports: [
    RouterModule
  ],

})
export class AppRoutingModule {
    constructor() {
        $('.loading-dimmer').removeClass('visible active').addClass('hidden').removeAttr("style");
    }
}
