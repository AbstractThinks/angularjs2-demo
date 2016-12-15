import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {AppComponent } from './app.component';
import {APP_BASE_HREF} from '@angular/common';
import {IndexComponent} from './index/index.component';
import {LoginComponent} from './login/login.component';

import {Routing} from './appRouter/appRouter.component';
import {AppRoutingModule} from './appRouter/appRouter.module';

@NgModule({
    imports: [
        BrowserModule,
        // Routing,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        IndexComponent,
        LoginComponent

    ],
    providers: [
            {provide: APP_BASE_HREF, useValue : '#' }
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
