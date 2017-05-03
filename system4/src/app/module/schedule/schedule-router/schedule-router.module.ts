import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ScheduleIndexComponent } from '../schedule-index/schedule-index.component';

const ScheduleRoutes: Route[] = [
	{ path: '', redirectTo: 'index',  pathMatch: 'full'},
	{ path: 'index', component: ScheduleIndexComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ScheduleRoutes),
  ],
  declarations: []
})
export class ScheduleRouterModule { }
