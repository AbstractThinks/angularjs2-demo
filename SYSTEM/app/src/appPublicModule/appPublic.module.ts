import { NgModule } from '@angular/core';

import {PaginationComponent} from './pagination/pagination.component';
import {ScreenMenuComponent} from './screenmenu/screenmenu.component';



@NgModule({
    declarations: [
        PaginationComponent,
        ScreenMenuComponent,
    ],
    exports: [
        PaginationComponent,
        ScreenMenuComponent,
    ],
})
export class AppPublicModule {}
