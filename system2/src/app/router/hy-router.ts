import { Routes } from '@angular/router';

import { HyComponent } from '../hy/hy.component';


import { HyPersonComponent } from '../hy/hy-person/hy-person.component';
import { HyPersonIndexComponent } from '../hy/hy-person/hy-person-index/hy-person-index.component';
import { HyPersonDetailComponent } from '../hy/hy-person/hy-person-detail/hy-person-detail.component';

import { HyResourceComponent } from '../hy/hy-resource/hy-resource.component';
import { HyResourceIndexComponent } from '../hy/hy-resource/hy-resource-index/hy-resource-index.component';


export const HyRouter: Routes = [
    {
		path: 'hy',
		component: HyComponent,
		children: [
			{ path: '', redirectTo: 'personal',  pathMatch: 'full' },
		    {
				path: 'personal',
				component: HyPersonComponent,
				children: [
					{ path: '', redirectTo: 'index',  pathMatch: 'full'},
					{ path: 'index', component: HyPersonIndexComponent },
					{ path: 'detail/:id', component: HyPersonDetailComponent },
				]
		    },
		    {
				path: 'resource',
				loadChildren: '../hy/hy-resource/hy-resource-router.module#HyResourceRouterModule'
		    }

		]
    }
];