import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgSemanticModule } from "ng-semantic";
import { StickyNavModule } from 'ng2-sticky-nav';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {Ng2DragDropModule} from "ng2-drag-drop";
import { AppPublicModule } from '../appPublicModule/appPublic.module';
import {ContentComponent} from './content.component';

import { ContentIndexComponent } from './component/index/index.component';
import { ContentPersonalComponent } from './component/personal/personal.component';
import { ContentResourcesComponent } from './component/resources/resources.component';
import { ContentAuditingComponent } from './component/auditing/auditing.component';
import { ContentPersonnelComponent } from './component/personnel/personnel.component';
import { ContentMyresourcesComponent } from './component/myresources/myresources.component';
import { ContentPreparingexamsComponent } from './component/preparingexams/preparingexams.component';
import { ContentPreparinglessonComponent } from './component/preparinglesson/preparinglesson.component';
import { ContentAssetsComponent } from './component/assets/assets.component';
import { ContentOtherComponent } from './component/other/other.component';
import { AchievementAnalysisComponent } from './component/achievementanalysis/achievementanalysis.component';
import { StudentComponent } from './component/student/student.component';
import { GrowthFileComponent } from './component/growthfile/growthfile.component';
import { CareerPlanComponent } from './component/careerplan/careerplan.component';
import { ContentMenusComponent } from './component/menus/menus.component';
import { ContentScheduleComponent } from './component/schedule/schedule.component';
import { ContentFinancialComponent } from './component/financial/financial.component';
import { ContentBasicDataComponent } from './component/basicdata/basicdata.component';


require('../assets/style/content.style.scss');


const APP_CONTENT_COMPONENT = [
	ContentComponent,
	ContentIndexComponent,
	ContentPersonalComponent,
	ContentResourcesComponent,
	ContentAuditingComponent,
	ContentPersonnelComponent,
	ContentMyresourcesComponent,
	ContentPreparingexamsComponent,
	ContentPreparinglessonComponent,
	ContentAssetsComponent,
	ContentOtherComponent,
	AchievementAnalysisComponent,
	StudentComponent,
	GrowthFileComponent,
	CareerPlanComponent,
	ContentMenusComponent,
	ContentScheduleComponent,
	ContentFinancialComponent,
	ContentBasicDataComponent,
	

]
const APP_CONTENT_IMPORT = [
	FormsModule,
	RouterModule,
	CommonModule,
	NgSemanticModule,
	ChartsModule,
	StickyNavModule,
	Ng2DragDropModule,
	AppPublicModule,
]

@NgModule({
	imports: [
        ...APP_CONTENT_IMPORT
	],
    declarations: [
        ...APP_CONTENT_COMPONENT
    ],
})
export class appContentModule {}
