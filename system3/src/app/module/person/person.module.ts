import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PersonRouterModule } from './person-router/person-router.module';
import { PersonComponent } from './person.component';
import { PersonIndexComponent } from './person-index/person-index.component';

import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PersonRouterModule,

    FlexLayoutModule,
    
  ],
  declarations: [PersonComponent, PersonIndexComponent]
})
export class PersonModule { }
