import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { BasicrouterModule } from './basicrouter/basicrouter.module';
import { BasicComponent } from './basic.component';
import { SchoolsComponent } from './schools/schools.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { GradesComponent } from './grades/grades.component';
import { ClassesComponent } from './classes/classes.component';

import {
  MdToolbarModule,
  MdButtonModule,
  MdSidenavModule,
  MdIconModule,
  MdListModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BasicrouterModule,
    FlexLayoutModule,
    RouterModule,
    FormsModule,
    MdSidenavModule,
  ],
  declarations: [BasicComponent, SchoolsComponent, SubjectsComponent, GradesComponent, ClassesComponent]
})
export class BasicModule { }
