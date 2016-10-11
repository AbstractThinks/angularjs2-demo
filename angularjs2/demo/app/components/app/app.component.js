import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';


import { MyHeaderComponent } from '../my-header/my-header.component';
import { MyAsideComponent } from '../my-aside/my-aside.component';

import template from './app.template.html';
import css from './app.css';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES, MyHeaderComponent, MyAsideComponent],
  template: template,
  style: css
})
@RouteConfig([
  { path: '/login', name: 'Login', component: LoginComponent },
  { path: '/home', name: 'Home', component: HomeComponent},
])
export class AppComponent {
	constructor() {
		this.switch = {
  			showMenu : false		
  		}

  		this.initMenuShow();
  		this.initChangeUrl();
  		
  	}

  	initMenuShow(route: Router){

  		if ( window.location.hash === '#/login' ) {
  			this.switch.showMenu = false;
  		} else {
  			this.switch.showMenu = true;
  		}
  	}

  	initChangeUrl() {
  		let that = this;
  		window.addEventListener("hashchange", () => {

  			if ( window.location.hash === '#/login' ) {

	  			that.switch.showMenu = false;

	  		} else {

	  			that.switch.showMenu = true;

	  		}

  		});
  	}
	
}
