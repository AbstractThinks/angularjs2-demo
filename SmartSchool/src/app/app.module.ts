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
import { AuthGuard } from './guard/auth.guard';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRouterModule,
    BrowserAnimationsModule,
    MdSidenavModule,
    MdListModule,
    MdIconModule,
    MdToolbarModule,

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
