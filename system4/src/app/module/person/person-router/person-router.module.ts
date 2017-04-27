import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { PersonIndexComponent } from '../person-index/person-index.component';

const PersonRoutes: Route[] = [
	{ path: '', redirectTo: 'index',  pathMatch: 'full'},
	{ path: 'index', component: PersonIndexComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PersonRoutes),
  ],
  declarations: []
})
export class PersonRouterModule { }