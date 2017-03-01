import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ContentComponent} from '../appContentModule/content.component';
import {TestContentComponent} from '../appContentModule/test.component'



export const appContentRoutes: Routes = [

    { 
      path: 'content',
      component: ContentComponent,
      children: [
    		{ path: '', redirectTo: 'test',  pathMatch: 'full'},
    		{ path: 'test', component: TestContentComponent },
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

