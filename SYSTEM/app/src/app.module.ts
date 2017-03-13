import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }  from '@angular/http';

import {AppRoutingModule} from './appRouterModule/appRouter.module';
import {AppComponent} from './app.component';
import {AppPublicModule} from './appPublicModule/appPublic.module'

require('./assets/style/style.scss');

@NgModule({
    imports: [
    	FormsModule,
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        AppPublicModule,
    ],
    declarations: [
    	AppComponent,
    ],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
    }
}
