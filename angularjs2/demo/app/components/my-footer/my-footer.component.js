import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';


import template from './my-footer.template.html';

@Component({
  selector: 'my-footer',
  template: template,
  directives: [ROUTER_DIRECTIVES]
})
export class MyFooterComponent {
}
