import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ContentComponent} from '../appContentModule/content.component';
// import {TestContentComponent} from '../appContentModule/test.component'
import {ContentPersonalComponent} from '../appContentModule/component/personal/personal.component';
import {ContentResourcesComponent} from '../appContentModule/component/resources/resources.component';
import {ContentAuditingComponent} from '../appContentModule/component/auditing/auditing.component';
import {ContentPersonnelComponent} from '../appContentModule/component/personnel/personnel.component';
import {ContentMyresourcesComponent} from '../appContentModule/component/myresources/myresources.component';
import {ContentPreparingexamsComponent} from '../appContentModule/component/preparingexams/preparingexams.component';
import {ContentPreparinglessonComponent} from '../appContentModule/component/preparinglesson/preparinglesson.component';
import {ContentAssetsComponent} from '../appContentModule/component/assets/assets.component';

export const appContentRoutes: Routes = [

    { 
      path: 'content',
      component: ContentComponent,
      children: [
    		{ path: '', redirectTo: 'personal',  pathMatch: 'full'},
    		// { path: 'test', component: TestContentComponent },
        { path: 'personal', component: ContentPersonalComponent },
        { path: 'personnel', component: ContentPersonnelComponent },
        { path: 'resources', component: ContentResourcesComponent },
        { path: 'myresources', component: ContentMyresourcesComponent },
        { path: 'preparingexams', component: ContentPreparingexamsComponent },
        { path: 'preparinglesson', component: ContentPreparinglessonComponent },
        { path: 'auditing', component: ContentAuditingComponent },
        { path: 'assets', component: ContentAssetsComponent }
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

