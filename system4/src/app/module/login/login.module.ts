import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule }   from '@angular/forms';

import { RouterModule } from '@angular/router';
import { LoginRouterModule } from './login-router/login-router.module'

import { LoginComponent } from './login.component';
import { LoginPageComponent } from './login-page/login-page.component';

import { 
	MdButtonModule,
	MdInputModule, 
  	MdAutocompleteModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FlexLayoutModule,
    LoginRouterModule,

    MdButtonModule,
    MdInputModule,
    MdAutocompleteModule,
  ],
  declarations: [LoginComponent, LoginPageComponent]
})
export class LoginModule { }
