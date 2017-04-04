import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PaginationComponent} from './pagination/pagination.component';
import {ScreenMenuComponent} from './screenmenu/screenmenu.component';



@NgModule({
	imports:[
		CommonModule
	],
	
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
