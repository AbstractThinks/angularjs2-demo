import { NgModule } from '@angular/core';

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PublickHeaderComponent } from './header.component';

@NgModule({
	imports: [
		// MaterialModule.forRoot(),
		// FlexLayoutModule.forRoot(),
	],
    declarations: [
        PublickHeaderComponent
    ],
    exports: [
	    PublickHeaderComponent
	],
})
export class PublicModule {}
