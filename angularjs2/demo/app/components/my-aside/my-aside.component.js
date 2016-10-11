import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';


import template from './my-aside.template.html';

@Component({
  selector: 'my-aside',
  template: template,
  directives: [ROUTER_DIRECTIVES]
})
export class MyAsideComponent {
}