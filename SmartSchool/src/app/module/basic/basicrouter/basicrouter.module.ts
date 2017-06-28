import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { SchoolsComponent } from '../schools/schools.component';
const BasicRoutes: Route[] = [
	{ path: '', redirectTo: 'schools',  pathMatch: 'full'},
	{ path: 'schools', component: SchoolsComponent },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BasicRoutes),
  ],
  declarations: []
})
export class BasicrouterModule { }
