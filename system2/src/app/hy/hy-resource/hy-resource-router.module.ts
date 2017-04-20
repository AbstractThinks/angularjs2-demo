import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HyResourceComponent } from './hy-resource.component';
import { HyResourceIndexComponent } from './hy-resource-index/hy-resource-index.component';

const HyResourceRoutes: Route[] = [
    {
        path: 'resource',
        component: HyResourceComponent,
        children: [
            { path: '', redirectTo: 'index',  pathMatch: 'full'},
			{ path: 'index', component: HyResourceIndexComponent },
        ]
    }
];

@NgModule({
  imports: [
  	RouterModule.forChild(HyResourceRoutes),
    RouterModule,
  ]
})
export class HyResourceRouterModule { }
