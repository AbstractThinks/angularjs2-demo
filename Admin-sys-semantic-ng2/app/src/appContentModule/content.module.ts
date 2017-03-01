import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {ContentComponent} from './content.component';
import {TestContentComponent} from './test.component';
import { NgSemanticModule } from "ng-semantic";
import { StickyNavModule } from 'ng2-sticky-nav';

import { ContentPersonalComponent } from './component/personal/personal.component';

const APP_CONTENT_COMPONENT = [
	ContentComponent,
	TestContentComponent,
	ContentPersonalComponent
]
const APP_CONTENT_IMPORT = [
	FormsModule,
	RouterModule,
	CommonModule,
	NgSemanticModule,
	StickyNavModule
]

@NgModule({
	imports: [
        ...APP_CONTENT_IMPORT
	],
    declarations: [
        ...APP_CONTENT_COMPONENT
    ]
})
export class appContentModule {}
