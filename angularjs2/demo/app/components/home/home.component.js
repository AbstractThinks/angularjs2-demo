import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import template from './home.template.html';

@Component({
  directives: [ROUTER_DIRECTIVES],
  template: template
})

export class HomeComponent {}
