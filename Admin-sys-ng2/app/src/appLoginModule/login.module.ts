import { NgModule } from '@angular/core';
import {Login1Component} from './login1.component';
import { MaterialModule } from '@angular/material';
@NgModule({
	imports: [
		MaterialModule.forRoot(),
	],
    declarations: [
        Login1Component,
       
    ],
    exports:[
        Login1Component
    ],
})
export class appLoginModule {}
