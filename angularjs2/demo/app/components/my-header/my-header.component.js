import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';


import template from './my-header.template.html';

@Component({
  selector: 'my-header',
  template: template,
  directives: [ROUTER_DIRECTIVES]
})
export class MyHeaderComponent {
}