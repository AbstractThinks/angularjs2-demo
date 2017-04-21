import { Routes } from '@angular/router';

import { HyComponent } from '../hy/hy.component';


import { HyPersonComponent } from '../hy/hy-person/hy-person.component';
import { HyResourceComponent } from '../hy/hy-resource/hy-resource.component';


export const HyRouter: Routes = [
    {
		path: 'hy',
		component: HyComponent,
		children: [
			{ path: '', redirectTo: 'personal',  pathMatch: 'full' },
		    {
				path: 'personal',
				component: HyPersonComponent,
				loadChildren: '../hy/hy-person/hy-person.module#HyPersonModule',
		    },
		    {
				path: 'resource',
				component: HyResourceComponent,
				loadChildren: '../hy/hy-resource/hy-resource.module#HyResourceModule',
		    }

		]
    }
];