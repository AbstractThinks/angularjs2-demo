import {
	Component,
	ViewChild
} from '@angular/core';
import { UrlService } from '../../../appServiceModule/urlService.component';
@Component({
  selector: 'menus-component',
  templateUrl:  './menus.component.html',
})
export class ContentMenusComponent {
  menus:any = [];
	constructor(private urlService: UrlService) {
    let that = this;
    this.urlService.req_get('menu.json').then((response:any) => {
      that.menus = response.json().data;
    });
  }
}
