import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { ResourceIndexComponent } from '../resource-index/resource-index.component';
import { ResourceDetailComponent } from '../resource-detail/resource-detail.component';

const ResourceRoutes: Route[] = [
	{ path: '', redirectTo: 'index',  pathMatch: 'full'},
	{ path: 'index', component: ResourceIndexComponent },
	{ path: 'detail', component: ResourceDetailComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ResourceRoutes),
  ],
  declarations: []
})
export class ResourceRouterModule { }
