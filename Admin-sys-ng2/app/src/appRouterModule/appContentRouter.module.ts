import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ContentComponent} from '../appContentModule/content.component';

import {PersonalComponent} from '../appContentModule/component/personal/personal.component';
import {AssetsComponent} from '../appContentModule/component/assets/assets.component';
import {AuditingComponent} from '../appContentModule/component/auditing/auditing.component';
import {MyresourcesComponent} from '../appContentModule/component/myresources/myresources.component';
import {PersonnelComponent} from '../appContentModule/component/personnel/personnel.component';
import {PreparingexamsComponent} from '../appContentModule/component/preparingexams/preparingexams.component';
import {PreparinglessonComponent} from '../appContentModule/component/preparinglesson/preparinglesson.component';
import {ResourcesComponent} from '../appContentModule/component/resources/resources.component';



export const appContentRoutes: Routes = [

    { 
      path: 'content',
      component: ContentComponent,
      children: [
      	{ path: '', redirectTo: 'personal',  pathMatch: 'full'},
        { path: 'personal', component: PersonalComponent},
        { path: 'assets', component: AssetsComponent},
        { path: 'auditing', component: AuditingComponent},
        { path: 'myresources', component: MyresourcesComponent},
        { path: 'personnel', component: PersonnelComponent},
        { path: 'preparingexams', component: PreparingexamsComponent},
        { path: 'preparinglesson', component: PreparinglessonComponent},
       	{ path: 'resources', component: ResourcesComponent}
      ]
    }
];

@NgModule({
//   imports: [ RouterModule.forChild(appContentRoutes) ],
  exports: [ RouterModule ]
})
export class appContentRoutesModule{ }

