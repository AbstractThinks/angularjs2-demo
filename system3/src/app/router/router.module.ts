import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
	RouterModule, 
	Routes 
} from '@angular/router';
import { AppComponent } from '../app.component';
import { PersonComponent } from '../module/person/person.component';

const router: Routes = [
    {
		path: 'app',
		children: [
			{ path: '', redirectTo: 'person',  pathMatch: 'full' },
		    {
				path: 'person',
				component: PersonComponent,
				loadChildren: '../module/person/person.module#PersonModule',
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
