import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRouterModule } from './router/router.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/hy/counter/counter.reducer';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRouterModule,
    StoreModule.provideStore({ 
      counterReducer
    })
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
