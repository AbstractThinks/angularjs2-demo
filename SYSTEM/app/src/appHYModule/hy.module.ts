import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgSemanticModule } from "ng-semantic";
import { StickyNavModule } from 'ng2-sticky-nav';
import { AppPublicModule } from '../appPublicModule/appPublic.module';
import { appCMSPersonalModule } from './personalModule/personal.module';

import { CMSComponent } from './cms.component';

require('../assets/style/cms.style.scss');




const APP_CMS_COMPONENT = [
	CMSComponent,
]
const APP_CMS_IMPORT = [
	FormsModule,
	RouterModule,
	CommonModule,
	NgSemanticModule,
	StickyNavModule,
	AppPublicModule,
	appCMSPersonalModule
]

@NgModule({
	imports: [
        ...APP_CMS_IMPORT
	],
    declarations: [
    	...APP_CMS_COMPONENT
    ],
})
export class appCMSModule {}
