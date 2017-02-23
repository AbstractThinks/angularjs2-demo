import { NgModule,enableProdMode  } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { MaterialModule } from '@angular/material';
import {AppRoutingModule} from './appRouterModule/appRouter.module';
import {AppComponent} from './app.component';

require('./assets/style/style.scss');
// if (environment.production) {
enableProdMode();
// }
@NgModule({
    imports: [
    	FormsModule,
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        MaterialModule.forRoot(),
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
