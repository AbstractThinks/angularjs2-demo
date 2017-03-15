import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgSemanticModule } from "ng-semantic";
import { AppPublicModule } from '../../appPublicModule/appPublic.module';
import { CustomFormsModule } from "ng2-validation";

import { HYPersonnelModuleComponent } from './personnel.component';
import { HYPersonnelIndexComponent } from './component/index/index.component';

const APP_CMS_COMPONENT = [
	HYPersonnelModuleComponent,
	HYPersonnelIndexComponent,
]
const APP_CMS_IMPORT = [
	FormsModule,
	RouterModule,
	CommonModule,
	NgSemanticModule,
	ReactiveFormsModule,
	CustomFormsModule,
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
export class appHYPersonnelModule {}
