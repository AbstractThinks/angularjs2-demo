import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './test.component';
import {DemoSemanticComponent} from './semanticTest/demo.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        DemoSemanticComponent
    ],
    bootstrap: [ AppComponent]
})
export class AppModule { }
