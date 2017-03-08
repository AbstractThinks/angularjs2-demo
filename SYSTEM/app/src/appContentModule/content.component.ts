import {
	Component,
	AfterViewInit
} from '@angular/core';
import {Menu,MenuSubmenu} from '../../../mockData/menu';
import { UrlService } from '../appServiceModule/urlService.component';

@Component({
  selector: 'content-container',
  templateUrl:  `./content.html`,
  // directives: [],
})
export class ContentComponent implements AfterViewInit{
	menu:any = [];
    notes:any = [];
    MenuSubmenu:any = [];
    constructor (private urlService: UrlService) {
      let that = this;
      this.urlService.req_get_module('menu.json').then((response:any) => {
        that.MenuSubmenu = response.json().data;
        setTimeout(() => {$('.sidebar .ui.accordion').accordion()},0);
      });
    }
    handleBeforeOut():void {
      console.log(1);
    }
    ngAfterViewInit():void {
	  }
}
