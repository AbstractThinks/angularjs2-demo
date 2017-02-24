import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { appContentRoutesModule } from '../appRouterModule/appContentRouter.module'
import { ContentComponent } from './content.component';

import { PublicModule } from '../appPublicModule/public.module';
import {PersonalComponent} from './component/personal/personal.component';
import {AssetsComponent} from './component/assets/assets.component';
import {AuditingComponent} from './component/auditing/auditing.component';
import {MyresourcesComponent} from './component/myresources/myresources.component';
import {PersonnelComponent} from './component/personnel/personnel.component';
import {PreparingexamsComponent} from './component/preparingexams/preparingexams.component';
import {PreparinglessonComponent} from './component/preparinglesson/preparinglesson.component';
import {ResourcesComponent} from './component/resources/resources.component';

@NgModule({
	imports: [
		MaterialModule.forRoot(),
		FlexLayoutModule.forRoot(),
		CommonModule,
		
		PublicModule,
		appContentRoutesModule,
	],
    declarations: [
        ContentComponent,
        PersonalComponent,
        AssetsComponent,
        AuditingComponent,
        MyresourcesComponent,
        PersonnelComponent,
        PreparinglessonComponent,
        PreparingexamsComponent,
        ResourcesComponent,
    ]
})
export class appContentModule {}
