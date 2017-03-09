import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }  from '@angular/http';
import {DndModule} from 'ng2-dnd';


import {AppRoutingModule} from './appRouterModule/appRouter.module';
import {AppComponent} from './app.component';


require('./assets/style/style.scss');

@NgModule({
    imports: [
    	FormsModule,
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        DndModule.forRoot()
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
