import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgSemanticModule } from "ng-semantic";
import { StickyNavModule } from 'ng2-sticky-nav';


import {ContentComponent} from './content.component';
import { PaginationComponent } from '../appPublicModule/pagination/pagination.component'

// import {TestContentComponent} from './test.component';
import { ContentIndexComponent } from './component/index/index.component';
import { ContentPersonalComponent } from './component/personal/personal.component';
import { ContentResourcesComponent } from './component/resources/resources.component';
import { ContentAuditingComponent } from './component/auditing/auditing.component';
import { ContentPersonnelComponent } from './component/personnel/personnel.component';
import { ContentMyresourcesComponent } from './component/myresources/myresources.component';
import { ContentPreparingexamsComponent } from './component/preparingexams/preparingexams.component';
import { ContentPreparinglessonComponent } from './component/preparinglesson/preparinglesson.component';
import { ContentAssetsComponent } from './component/assets/assets.component';


const APP_CONTENT_COMPONENT = [
	ContentComponent,
	// TestContentComponent,
	ContentIndexComponent,
	ContentPersonalComponent,
	ContentResourcesComponent,
	ContentAuditingComponent,
	ContentPersonnelComponent,
	ContentMyresourcesComponent,
	ContentPreparingexamsComponent,
	ContentPreparinglessonComponent,
	ContentAssetsComponent,
	PaginationComponent
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
