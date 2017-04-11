import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule}   from '@angular/forms';
import {Login1Component} from './login1.component';
import { NgSemanticModule } from "ng-semantic";// import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
	imports: [
        NgSemanticModule,
        FormsModule,
        CommonModule
	],
    declarations: [
        Login1Component,  
    ],
    exports:[
        Login1Component
    ],
})
export class appLoginModule {}
