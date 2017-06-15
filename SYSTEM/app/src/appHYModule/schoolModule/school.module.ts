import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgSemanticModule } from "ng-semantic";
import { AppPublicModule } from '../../appPublicModule/appPublic.module';
import { CustomFormsModule } from "ng2-validation";

import { HYSchoolModuleComponent } from './school.component';
import { HYSchoolIndexComponent } from './component/index/index.component';
import { HYSchoolGradeComponent } from './component/grade/grade.component';
import { HYSchoolClassComponent } from './component/class/class.component';
import { HYSchoolSubjectComponent } from './component/subject/index.component';
const APP_CMS_COMPONENT = [
	HYSchoolModuleComponent,
	HYSchoolIndexComponent,
	HYSchoolGradeComponent,
	HYSchoolClassComponent,
	HYSchoolSubjectComponent,
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
export class appHYSchoolModule {}
