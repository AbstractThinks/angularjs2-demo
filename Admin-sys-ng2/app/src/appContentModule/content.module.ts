import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { appContentRoutesModule } from '../appRouterModule/appContentRouter.module'
import { ContentComponent } from './content.component';
import { TestContentComponent } from './test.component';
import { PublicModule } from '../appPublicModule/public.module';

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
        TestContentComponent
    ]
})
export class appContentModule {}
