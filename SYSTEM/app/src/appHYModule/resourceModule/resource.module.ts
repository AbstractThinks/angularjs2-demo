import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgSemanticModule } from "ng-semantic";
import { StickyNavModule } from 'ng2-sticky-nav';
import { AppPublicModule } from '../../appPublicModule/appPublic.module';

import { HYResourceModuleComponent } from './resource.component';
import { HYResourceIndexComponent } from './component/index/index.component'; 
import { HYResourceDetailComponent } from './component/detail/index.component';
const APP_CMS_COMPONENT = [
	HYResourceModuleComponent,
	HYResourceIndexComponent,
	HYResourceDetailComponent,
]
const APP_CMS_IMPORT = [
	FormsModule,
	RouterModule,
	CommonModule,
	NgSemanticModule,
	StickyNavModule,
	AppPublicModule,
]

@NgModule({
	imports: [
        ...APP_CMS_IMPORT
	],
    declarations: [
    	...APP_CMS_COMPONENT
    ],
})
export class appHYResourceModule {}
