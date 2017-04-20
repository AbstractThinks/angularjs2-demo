import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HyPersonComponent } from './hy-person.component';
import { HyPersonIndexComponent } from './hy-person-index/hy-person-index.component';
import { HyPersonDetailComponent } from './hy-person-detail/hy-person-detail.component';

const declarationsComponent = [
	HyPersonComponent,
	HyPersonIndexComponent,
	HyPersonDetailComponent,
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: declarationsComponent
})
export class HyPersonModule { }
