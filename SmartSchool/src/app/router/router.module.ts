import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
	RouterModule, 
	Routes 
} from '@angular/router';
import { LoginComponent } from '../module/login/login.component';

const router: Routes = [
	{ path: '', redirectTo: 'app',  pathMatch: 'full' },
	{
		path: 'app',
		children: [
			{ path: '', redirectTo: 'login',  pathMatch: 'full' },
			{
				path: 'login',
				component: LoginComponent,
				loadChildren: '../module/login/login.module#LoginModule',
		    }
		]
	}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(router,{ useHash: true }),
  ],
  declarations: []
})
export class AppRouterModule { }



