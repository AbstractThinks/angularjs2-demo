import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HyPersonIndexComponent } from '../hy-person-index/hy-person-index.component';
import { HyPersonDetailComponent } from '../hy-person-detail/hy-person-detail.component'

const HyPersonRoutes: Route[] = [
	{ path: '', redirectTo: 'index',  pathMatch: 'full'},
	{ path: 'index', component: HyPersonIndexComponent },
	{ path: 'detail/:id', component: HyPersonDetailComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HyPersonRoutes),
  ],
  declarations: []
})
export class HyPersonRouterModule { }
