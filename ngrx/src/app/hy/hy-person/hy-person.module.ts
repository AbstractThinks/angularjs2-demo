import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HyPersonRouterModule } from './hy-person-router/hy-person-router.module';

// import { StoreModule } from '@ngrx/store';
// import { counterReducer } from '../../store/hy/counter/counter.reducer';

import { HyPersonComponent } from './hy-person.component';
import { HyPersonIndexComponent } from './hy-person-index/hy-person-index.component';
import { HyPersonDetailComponent } from './hy-person-detail/hy-person-detail.component';

const declarationsComponent = [
	HyPersonComponent,
	HyPersonIndexComponent,
	HyPersonDetailComponent,
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HyPersonRouterModule,
    // StoreModule.provideStore({ 
    //   counterReducer
    // })

  ],
  declarations: declarationsComponent
})
export class HyPersonModule { }
