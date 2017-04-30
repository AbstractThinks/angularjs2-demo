import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { PersonIndexComponent } from '../person-index/person-index.component';
import { PersonListComponent } from '../person-list/person-list.component'; 
import { PersonDetailComponent } from '../person-detail/person-detail.component'
const PersonRoutes: Route[] = [
	{ path: '', redirectTo: 'index',  pathMatch: 'full'},
	{ path: 'index', component: PersonIndexComponent },
	{ path: 'list', component: PersonListComponent },
	{ path: 'detail', component: PersonDetailComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PersonRoutes),
  ],
  declarations: []
})
export class PersonRouterModule { }