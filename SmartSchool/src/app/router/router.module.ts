import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
	RouterModule, 
	Routes 
} from '@angular/router';

const router: Routes = [
	{ path: '', redirectTo: 'login',  pathMatch: 'full' },
	{
		path: '',
		children: [
			{ path: '', redirectTo: 'login',  pathMatch: 'full' },
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



