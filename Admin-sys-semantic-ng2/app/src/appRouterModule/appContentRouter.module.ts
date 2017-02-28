import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ContentComponent} from '../appContentModule/content.component';




export const appContentRoutes: Routes = [

    { 
      path: 'content',
      component: ContentComponent,
      children: [
      	
      ]
    }
];

@NgModule({
//   imports: [ RouterModule.forChild(appContentRoutes) ],
  exports: [ RouterModule ]
})
export class appContentRoutesModule{ }

