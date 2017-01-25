import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import {AppComponent } from './app.component';
import {AppRoutingModule} from './appRouter/appRouter.module';

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        HttpModule,
        AppRoutingModule,

    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
    }
}
