import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HYComponent } from '../appHYModule/hy.component';
import { HYHomepageModuleComponent } from '../appHYModule/homepageModule/homepage.component'
import { HYHomepageIndexComponent } from '../appHYModule/homepageModule/component/index/index.component';
import { HYResourceModuleComponent } from '../appHYModule/resourceModule/resource.component';
import { HYResourceIndexComponent } from '../appHYModule/resourceModule/component/index/index.component';
import { HYResourceDetailComponent } from '../appHYModule/resourceModule/component/detail/index.component';
import { HYResourceMyresourceComponent } from '../appHYModule/resourceModule/component/myresource/index.component';
import { HYReviewedModuleComponent } from '../appHYModule/reviewedModule/reviewed.component';
import { HYReviewedIndexComponent } from '../appHYModule/reviewedModule/component/index/index.component';
import { HYPersonalModuleComponent } from '../appHYModule/personalModule/personal.component';
import { HYPersonalIndexComponent } from '../appHYModule/personalModule/component/index/index.component';
import { HYPersonalCollectionsComponent } from '../appHYModule/personalModule/component/collections/index.component';
import { HYPersonalUploadComponent } from '../appHYModule/personalModule/component/upload/index.component';
import { HYPersonalOtherComponent } from '../appHYModule/personalModule/component/other/index.component';
import { HYPersonnelModuleComponent } from '../appHYModule/personnelModule/personnel.component';
import { HYPersonnelIndexComponent } from '../appHYModule/personnelModule/component/index/index.component';
import { HYAssetsModuleComponent } from '../appHYModule/assetsModule/assets.component';
import { HYAssetsIndexComponent } from '../appHYModule/assetsModule/component/index/index.component';
import { HYAssetsDetailComponent } from '../appHYModule/assetsModule/component/detail/index.component';
import { HYAssetsSupplierComponent } from '../appHYModule/assetsModule/component/supplier/index.component';
import { HYSheduleModuleComponent } from '../appHYModule/sheduleModule/shedule.component';
import { HYSheduleIndexComponent } from '../appHYModule/sheduleModule/component/index/index.component';
import { HYSheduleBasedataComponent } from '../appHYModule/sheduleModule/component/basedata/index.component';

export const appHYRoutes: Routes = [
    {
		path: 'hy',
		component: HYComponent,
		children: [
			{ path: '', redirectTo: 'personal',  pathMatch: 'full' },
			{
				path: 'homepage',
				component: HYHomepageModuleComponent,
				children: [
					{ path: '', redirectTo: 'index',  pathMatch: 'full'},
					{ path: 'index', component: HYHomepageIndexComponent },
				]
		    },
		    {
				path: 'resource',
				component: HYResourceModuleComponent,
				children: [
					{ path: '', redirectTo: 'index',  pathMatch: 'full'},
					{ path: 'index', component: HYResourceIndexComponent },
					{ path: 'detail/:id', component: HYResourceDetailComponent },
					{ path: 'myresource', component: HYResourceMyresourceComponent },
				]
		    },
		    {
				path: 'reviewed',
				component: HYReviewedModuleComponent,
				children: [
					{ path: '', redirectTo: 'index',  pathMatch: 'full'},
					{ path: 'index', component: HYReviewedIndexComponent },
				]
		    },
		    {
				path: 'personal',
				component: HYPersonalModuleComponent,
				children: [
					{ path: '', redirectTo: 'index',  pathMatch: 'full'},
					{ path: 'index', component: HYPersonalIndexComponent },
					{ path: 'collections', component: HYPersonalCollectionsComponent },
					{ path: 'upload', component: HYPersonalUploadComponent },
					{ path: 'other/:id', component: HYPersonalOtherComponent },
				]
		    },
		    {
				path: 'personnel',
				component: HYPersonnelModuleComponent,
				children: [
					{ path: '', redirectTo: 'index',  pathMatch: 'full'},
					{ path: 'index', component: HYPersonnelIndexComponent },
				]
		    },
		    {
				path: 'shedule',
				component: HYSheduleModuleComponent,
				children: [
					{ path: '', redirectTo: 'index',  pathMatch: 'full'},
					{ path: 'index', component: HYSheduleIndexComponent },
					{ path: 'basedata', component: HYSheduleBasedataComponent},
				]
		    },
		    {
				path: 'assets',
				component: HYAssetsModuleComponent,
				children: [
					{ path: '', redirectTo: 'index',  pathMatch: 'full'},
					{ path: 'index', component: HYAssetsIndexComponent },
					{ path: 'supplier', component: HYAssetsSupplierComponent },
					
					{ path: 'detail/:id', component: HYAssetsDetailComponent },
				]
		    }

		]
    }
];


