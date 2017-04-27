import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PersonRouterModule } from './person-router/person-router.module';
import { PersonComponent } from './person.component';
import { PersonIndexComponent } from './person-index/person-index.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MdButtonModule} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PersonRouterModule,

    FlexLayoutModule,

    MdButtonModule,
    
  ],
  declarations: [PersonComponent, PersonIndexComponent]
})
export class PersonModule { }
