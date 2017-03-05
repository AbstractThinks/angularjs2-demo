import {Component} from '@angular/core';
import {Menu} from '../../../mockData/menu';
@Component({
  selector: 'content-container',
  templateUrl:  `./content.html`,
  // directives: [],
})
export class ContentComponent {
	menu:any = [];
    notes:any = [];
    constructor () {
    	this.menu = Menu;
    }
}
