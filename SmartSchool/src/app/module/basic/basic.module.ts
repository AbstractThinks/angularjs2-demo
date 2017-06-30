import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import {
  MdToolbarModule,
  MdButtonModule,
  MdSidenavModule,
  MdInputModule,
  MdIconModule,
  MdListModule,
  MdDialogModule,
  MdSelectModule,
} from '@angular/material';
import { 
  CovalentDataTableModule,
  CovalentPagingModule, 
} from '@covalent/core';

import { ApiService } from '../../service/api.service';
import { BasicrouterModule } from './basicrouter/basicrouter.module';
import { BasicComponent } from './basic.component';
import { SchoolsComponent } from './schools/schools.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { GradesComponent } from './grades/grades.component';
import { ClassesComponent } from './classes/classes.component';
import { SchoolsmodalComponent } from './public/schoolsmodal/schoolsmodal.component';



@NgModule({
  imports: [
    CommonModule,
    BasicrouterModule,
    FlexLayoutModule,
    RouterModule,
    FormsModule,
    MdSidenavModule,
    MdButtonModule,
    MdInputModule,
    MdToolbarModule,
    MdIconModule,
    MdDialogModule,
    MdSelectModule,
    CovalentDataTableModule,
    CovalentPagingModule,
  ],
  declarations: [BasicComponent, SchoolsComponent, SubjectsComponent, GradesComponent, ClassesComponent, SchoolsmodalComponent],
  entryComponents: [
    SchoolsmodalComponent
  ],
  providers:[
    ApiService
  ]
})
export class BasicModule { }
