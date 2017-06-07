import {
	Component,
	AfterViewInit
} from '@angular/core';
import { HYMENUS } from '../../config/HYCONFIG';
import { UrlService } from '../appServiceModule/urlService.component';
import { HYService } from '../appServiceModule/HYService.component';

@Component({
  selector: 'hy-container',
  templateUrl:  `./hy.html`,
  providers: [HYService],
})
export class HYComponent implements AfterViewInit{
	MENUS:any = [];
	USER:any = {};
	constructor(private urlService: UrlService) {
		let that = this;
		this.urlService.hy_req_get('api/profile').then((response:any) => {
			that.USER = response.json();
			console.log(that.USER)
			that.MENUS = HYMENUS[that.USER.roleId-1]
			setTimeout(() => {$('.sidebar .ui.accordion').accordion()}, 0)
		});
	}
	ngAfterViewInit():void {
		
	}
}
