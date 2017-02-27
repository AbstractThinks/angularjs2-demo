import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule }   from '@angular/forms';

import { Ng2FileInputModule } from 'ng2-file-input';
import { CustomFormsModule } from 'ng2-validation'
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ImageUploadModule } from 'angular2-image-upload';

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
import {DetailedComponent} from './component/detailed/detailed.component';


@NgModule({
	imports: [
        FormsModule,
		MaterialModule.forRoot(),
		FlexLayoutModule.forRoot(),
        Ng2FileInputModule.forRoot(),
		CommonModule,
		PublicModule,
		appContentRoutesModule,
        NgxDatatableModule,
        ImageUploadModule.forRoot(),
        CustomFormsModule,
        
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
        DetailedComponent,
        PdfViewerComponent,
    ]
})
export class appContentModule {}
