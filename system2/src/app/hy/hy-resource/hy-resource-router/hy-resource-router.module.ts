import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HyResourceIndexComponent } from '../hy-resource-index/hy-resource-index.component';

const HyResourceRoutes: Route[] = [
	{ path: '', redirectTo: 'index',  pathMatch: 'full'},
	{ path: 'index', component: HyResourceIndexComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HyResourceRoutes),
  ],
  declarations: []
})
export class HyResourceRouterModule { }
