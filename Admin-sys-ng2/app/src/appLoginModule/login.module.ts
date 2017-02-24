import { NgModule } from '@angular/core';
import {Login1Component} from './login1.component';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
	imports: [
		MaterialModule.forRoot(),
		FlexLayoutModule.forRoot(),
	],
    declarations: [
        Login1Component,
       
    ],
    exports:[
        Login1Component
    ],
})
export class appLoginModule {}
