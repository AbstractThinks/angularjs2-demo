import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { NgSemanticModule } from 'ng-semantic';
import { DemoSemanticComponent } from './demo.component';
// import {jQuery} from 'jquery';

@NgModule({
    imports: [
        BrowserModule,
        NgSemanticModule
    ],
    declarations: [
        DemoSemanticComponent
    ],
    bootstrap: [ DemoSemanticComponent ]
})
export class AppModule { }
