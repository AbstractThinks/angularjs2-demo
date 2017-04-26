import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PersonRouterModule } from './person-router/person-router.module';
import { PersonComponent } from './person.component';
import { PersonIndexComponent } from './person-index/person-index.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PersonRouterModule
  ],
  declarations: [PersonComponent, PersonIndexComponent]
})
export class PersonModule { }
