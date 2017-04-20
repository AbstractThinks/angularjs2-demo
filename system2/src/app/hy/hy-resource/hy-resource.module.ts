import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HyResourceRouterModule } from './hy-resource-router/hy-resource-router.module';
import { HyResourceComponent } from './hy-resource.component';
import { HyResourceIndexComponent } from './hy-resource-index/hy-resource-index.component';

const declarationsComponent = [
	HyResourceComponent,
	HyResourceIndexComponent,
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HyResourceRouterModule,
  ],
  declarations: declarationsComponent
})
export class HyResourceModule { }
