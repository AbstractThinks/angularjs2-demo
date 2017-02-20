import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { NgSemanticModule } from 'ng-semantic';

import {AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import {InfoComponent} from './info/info.component';
import {DetailedComponent} from './detailed/detailed.component';
// import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {Routing} from './appRouter/appRouter.component';

import {AppRoutingModule} from './appRouter/appRouter.module';
import {FooterModule} from './footer/footer.module';


@NgModule({
    imports: [
        NgSemanticModule,
        FormsModule,
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        FooterModule,

    ],
    declarations: [
        AppComponent,
        LoginComponent,
        InfoComponent,
        DetailedComponent,
        // FooterComponent,
        HeaderComponent,

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
        // $('.loading-dimmer').removeClass('visible active').addClass('hidden').removeAttr("style");
    }
}
