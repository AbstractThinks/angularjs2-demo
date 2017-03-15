import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule}   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgSemanticModule } from "ng-semantic";
import { StickyNavModule } from 'ng2-sticky-nav';
import { AppPublicModule } from '../../appPublicModule/appPublic.module';

import { HYPersonalModuleComponent } from './personal.component';
import { HYPersonalIndexComponent } from './component/index/index.component';
import { HYPersonalCollectionsComponent } from './component/collections/index.component';
import { HYPersonalUploadComponent } from './component/upload/index.component';
import { HYPersonalOtherComponent } from './component/other/index.component';

const APP_CMS_COMPONENT = [
	HYPersonalModuleComponent,
	HYPersonalIndexComponent,
	HYPersonalCollectionsComponent,
	HYPersonalUploadComponent,
	HYPersonalOtherComponent,
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
export class appHYPersonalModule {}
