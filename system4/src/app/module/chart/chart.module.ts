import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartRouterModule } from './chart-router/chart-router.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { FlexLayoutModule } from '@angular/flex-layout';
import { 
	MdButtonModule,
	MdInputModule, 
	MdGridListModule,
	MdToolbarModule,
	MdDialogModule,
	MdAutocompleteModule,
	MdSelectModule,
} from '@angular/material';

import { ChartComponent } from './chart.component';
import { ChartReportComponent } from './chart-report/chart-report.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ChartRouterModule,

    NgxChartsModule,

    FlexLayoutModule,

	MdButtonModule,
	MdInputModule, 
	MdGridListModule,
	MdToolbarModule,
	MdDialogModule,
	MdAutocompleteModule,
	MdSelectModule,
  ],
  declarations: [ChartComponent, ChartReportComponent]
})
export class ChartModule { }
