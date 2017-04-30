import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HyComponent } from './hy.component';

import { HyPersonModule } from './hy-person/hy-person.module';
import { HyResourceModule } from './hy-resource/hy-resource.module';

const importsModule = [
	CommonModule,
    RouterModule,
	HyPersonModule,
    HyResourceModule,
];

@NgModule({
  imports: importsModule,
  declarations: [HyComponent]
})
export class HyModule { }
