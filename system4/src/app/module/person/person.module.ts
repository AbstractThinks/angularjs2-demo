import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { RouterModule } from '@angular/router';
import { PersonRouterModule } from './person-router/person-router.module';

import { RequestServiceService } from '../../services/request-service.service';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FlexLayoutModule } from '@angular/flex-layout';
import { 
	MdButtonModule,
	MdInputModule, 
	MdGridListModule,
  MdToolbarModule,
  MdDialogModule,
  MdAutocompleteModule,
  MdSelectModule,
} from '@angular/material';

import { MyNewDirectiveDirective } from '../../directives/my-new-directive.directive';
import { MyNewAttributeDirective } from '../../directives/my-new-attribute.directive';
import { MyNewPipePipe } from '../../pipes/my-new-pipe.pipe';

import { PersonComponent } from './person.component';
import { PersonIndexComponent } from './person-index/person-index.component';
import { PersonListComponent, PersonListModalComponent } from './person-list/person-list.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
    MdSelectModule,
    
  ],
  declarations: [ MyNewAttributeDirective, MyNewDirectiveDirective, MyNewPipePipe, PersonComponent, PersonIndexComponent, PersonListComponent, PersonListModalComponent, PersonDetailComponent],
  entryComponents: [
    PersonListModalComponent
  ],
  providers:[
    RequestServiceService
  ]
})
export class PersonModule { }
