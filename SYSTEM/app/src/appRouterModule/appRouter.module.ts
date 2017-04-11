import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {appLoginModule} from '../appLoginModule/login.module';
import {Login1Component} from '../appLoginModule/login1.component';
// import {appContentModule} from '../appContentModule/content.module';
// import {appContentRoutes} from './appContentRouter.module';
// import {appCMSRoutes} from './appCMSRouter.module';
// import {appCMSModule} from '../appCMSModule/cms.module';
// 宏源项目
import {appHYRoutes} from './appHYRouter.module';
import {appHYModule} from '../appHYModule/hy.module';

const appRoutes: Routes = [

    { path: '', redirectTo: 'login',  pathMatch: 'full'},
    { path: 'login', component: Login1Component },
    // ...appContentRoutes,
    // ...appCMSRoutes,
    ...appHYRoutes,
    
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,{ useHash: true }),
    appLoginModule,
    // appContentModule, 
    // appCMSModule,
    appHYModule,
  ],
  declarations: [
  ],
  exports: [
    RouterModule
  ],

})
export class AppRoutingModule {
    constructor() {
    }
}
