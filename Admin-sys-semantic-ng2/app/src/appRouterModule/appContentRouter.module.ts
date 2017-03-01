import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ContentComponent} from '../appContentModule/content.component';
import {TestContentComponent} from '../appContentModule/test.component'
import {ContentPersonalComponent} from '../appContentModule/component/personal/personal.component';



export const appContentRoutes: Routes = [

    { 
      path: 'content',
      component: ContentComponent,
      children: [
    		{ path: '', redirectTo: 'personal',  pathMatch: 'full'},
    		{ path: 'test', component: TestContentComponent },
        { path: 'personal', component: ContentPersonalComponent }
      ]
    }
];

@NgModule({
  imports: [ 
  	// RouterModule.forChild(appContentRoutes) 
  ],
  exports: [ RouterModule ]
})
export class appContentRoutesModule{ }

