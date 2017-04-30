import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRouterModule } from './router/router.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from '../store/reducer/index';
import { HttpEffects } from './service/storeService';



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
    StoreModule.provideStore(reducer),
    EffectsModule.run(HttpEffects),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
