import {
	Component,
	AfterViewInit
} from '@angular/core';
import {Menu,MenuSubmenu} from '../../../mockData/menu';
@Component({
  selector: 'content-container',
  templateUrl:  `./content.html`,
  // directives: [],
})
export class ContentComponent implements AfterViewInit{
	menu:any = [];
    notes:any = [];
    MenuSubmenu:any = [];
    constructor () {
    	this.menu = Menu;
    	this.MenuSubmenu = MenuSubmenu;
    }
    ngAfterViewInit():void {
	    $('.sidebar .ui.accordion').accordion();
	}
}
