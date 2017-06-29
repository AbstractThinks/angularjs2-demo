import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { SchoolsComponent } from '../schools/schools.component';
import { GradesComponent } from '../grades/grades.component';
import { ClassesComponent } from '../classes/classes.component';
import { SubjectsComponent } from '../subjects/subjects.component';

const BasicRoutes: Route[] = [
	{ path: '', redirectTo: 'schools',  pathMatch: 'full'},
	{ path: 'schools', component: SchoolsComponent },
	{ path: 'grades', component: GradesComponent },
	{ path: 'subjects', component: SubjectsComponent },
	{ path: 'classes', component: ClassesComponent },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BasicRoutes),
  ],
  declarations: []
})
export class BasicrouterModule { }
