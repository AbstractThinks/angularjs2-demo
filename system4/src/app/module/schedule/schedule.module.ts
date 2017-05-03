import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScheduleRouterModule } from './schedule-router/schedule-router.module';

import { ScheduleComponent } from './schedule.component';
import { ScheduleIndexComponent } from './schedule-index/schedule-index.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ScheduleRouterModule,
  ],
  declarations: [ScheduleComponent, ScheduleIndexComponent]
})
export class ScheduleModule { }
