import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
	RouterModule, 
	Routes 
} from '@angular/router';

import { HyRouter } from './hy-router';


const appRoutes: Routes = [
	...HyRouter
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes,{ useHash: true }),
  ],
  declarations: []
})
export class AppRouterModule { }
