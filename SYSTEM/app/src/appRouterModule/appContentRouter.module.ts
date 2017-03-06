import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ContentComponent} from '../appContentModule/content.component';

import {ContentIndexComponent} from '../appContentModule/component/index/index.component';
import {ContentPersonalComponent} from '../appContentModule/component/personal/personal.component';
import {ContentResourcesComponent} from '../appContentModule/component/resources/resources.component';
import {ContentAuditingComponent} from '../appContentModule/component/auditing/auditing.component';
import {ContentPersonnelComponent} from '../appContentModule/component/personnel/personnel.component';
import {ContentMyresourcesComponent} from '../appContentModule/component/myresources/myresources.component';
import {ContentPreparingexamsComponent} from '../appContentModule/component/preparingexams/preparingexams.component';
import {ContentPreparinglessonComponent} from '../appContentModule/component/preparinglesson/preparinglesson.component';
import {ContentAssetsComponent} from '../appContentModule/component/assets/assets.component';
import {ContentOtherComponent} from '../appContentModule/component/other/other.component';
import {AchievementAnalysisComponent} from '../appContentModule/component/achievementanalysis/achievementanalysis.component';
import {StudentComponent} from '../appContentModule/component/student/student.component';
export const appContentRoutes: Routes = [

    { 
      path: 'content',
      component: ContentComponent,
      children: [
    		{ path: '', redirectTo: 'index',  pathMatch: 'full'},
        { path: 'index', component: ContentIndexComponent },
        { path: 'personal', component: ContentPersonalComponent },
        { path: 'personnel', component: ContentPersonnelComponent },
        { path: 'resources', component: ContentResourcesComponent },
        { path: 'myresources', component: ContentMyresourcesComponent },
        { path: 'preparingexams', component: ContentPreparingexamsComponent },
        { path: 'preparinglesson', component: ContentPreparinglessonComponent },
        { path: 'auditing', component: ContentAuditingComponent },
        { path: 'assets', component: ContentAssetsComponent },
        { path: 'other', component: ContentOtherComponent},
        { path: 'achievementanalysis', component: AchievementAnalysisComponent},
        { path: 'student', component: StudentComponent}
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

