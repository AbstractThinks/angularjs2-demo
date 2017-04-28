import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ResourceRouterModule } from './resource-router/resource-router.module';

import { PdfViewerComponent } from 'ng2-pdf-viewer';

import { ResourceComponent } from './resource.component';
import { ResourceIndexComponent } from './resource-index/resource-index.component';
import { ResourceDetailComponent } from './resource-detail/resource-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ResourceRouterModule,
  ],
  declarations: [PdfViewerComponent, ResourceComponent, ResourceIndexComponent, ResourceDetailComponent]
})
export class ResourceModule { }
