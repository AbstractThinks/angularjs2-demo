import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { PersonRouterModule } from './person-router/person-router.module';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FlexLayoutModule } from '@angular/flex-layout';
import { 
	MdButtonModule,
	MdInputModule, 
	MdGridListModule,
  MdToolbarModule,
  MdDialogModule,
  MdAutocompleteModule,
} from '@angular/material';

import { MyNewDirectiveDirective } from '../../directives/my-new-directive.directive';
import { MyNewPipePipe } from '../../pipes/my-new-pipe.pipe';
import { PersonComponent } from './person.component';
import { PersonIndexComponent } from './person-index/person-index.component';
import { PersonListComponent, PersonListModalComponent } from './person-list/person-list.component';

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    RouterModule,
    PersonRouterModule,

    FlexLayoutModule,

    MdButtonModule,
    MdInputModule,
    MdGridListModule,
    MdToolbarModule,
    MdDialogModule,
    MdAutocompleteModule,
    
  ],
  declarations: [ MyNewDirectiveDirective, MyNewPipePipe, PersonComponent, PersonIndexComponent, PersonListComponent, PersonListModalComponent],
  entryComponents: [
    PersonListModalComponent
  ]
})
export class PersonModule { }
