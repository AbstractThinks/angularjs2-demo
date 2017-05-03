import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
	RouterModule, 
	Routes 
} from '@angular/router';
import { AppComponent } from '../app.component';
import { PersonComponent } from '../module/person/person.component';
import { ResourceComponent } from '../module/resource/resource.component';
import { LoginComponent } from '../module/login/login.component';
import { ChartComponent } from '../module/chart/chart.component';
import { ScheduleComponent } from '../module/schedule/schedule.component';
import { AuthGuard } from '../guards/auth.guard';

const router: Routes = [
	{ path: '', redirectTo: 'app',  pathMatch: 'full' },
    {
		path: 'app',
		canActivate: [AuthGuard],
		children: [
			{ path: '', redirectTo: 'login',  pathMatch: 'full' },
			{
				path: 'login',
				canActivateChild: [AuthGuard],
				component: LoginComponent,
				loadChildren: '../module/login/login.module#LoginModule',
		    },
		    {
				path: 'person',
				canActivateChild: [AuthGuard],
				component: PersonComponent,
				loadChildren: '../module/person/person.module#PersonModule',
		    },
		    {
				path: 'resource',
				component: ResourceComponent,
				canActivateChild: [AuthGuard],
				loadChildren: '../module/resource/resource.module#ResourceModule',
		    },
		    {
				path: 'chart',
				component: ChartComponent,
				canActivateChild: [AuthGuard],
				loadChildren: '../module/chart/chart.module#ChartModule',
		    },
		    {
		    	path: 'schedule',
				component: ScheduleComponent,
				canActivateChild: [AuthGuard],
				loadChildren: '../module/schedule/schedule.module#ScheduleModule',
		    }


		]
    }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(router,{ useHash: true }),
  ],
  declarations: []
})
export class AppRouterModule { }
