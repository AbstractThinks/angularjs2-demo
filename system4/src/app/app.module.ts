import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRouterModule } from './router/router.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdToolbarModule,
  MdButtonModule,
  MdSidenavModule,
  MdIconModule,
  MdListModule,
} from '@angular/material';
// import { MyNewDirectiveDirective } from './directives/my-new-directive.directive';
// import { MyNewPipePipe } from './pipes/my-new-pipe.pipe';



@NgModule({
  declarations: [
    AppComponent,
    // MyNewDirectiveDirective,
    // MyNewPipePipe,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule,

    BrowserAnimationsModule,
    MdToolbarModule,
    MdSidenavModule,
    MdIconModule,
    MdButtonModule,
    MdListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
