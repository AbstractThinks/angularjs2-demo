import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgSemanticModule } from "ng-semantic";
import { StickyNavModule } from 'ng2-sticky-nav';
import { AppPublicModule } from '../../appPublicModule/appPublic.module';

import { HYAssetsModuleComponent } from './assets.component';
import { HYAssetsIndexComponent } from './component/index/index.component';
import { HYAssetsDetailComponent } from './component/detail/index.component';
import { HYAssetsSupplierComponent } from './component/supplier/index.component';

const APP_CMS_COMPONENT = [
	HYAssetsModuleComponent,
	HYAssetsIndexComponent,
	HYAssetsDetailComponent,
	HYAssetsSupplierComponent,
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
export class appHYAssetsModule {}
