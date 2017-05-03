import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ChartReportComponent } from '../chart-report/chart-report.component';

const ChartRoutes: Route[] = [
	{ path: '', redirectTo: 'report',  pathMatch: 'full'},
	{ path: 'report', component: ChartReportComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ChartRoutes),
  ],
  declarations: []
})
export class ChartRouterModule { }
