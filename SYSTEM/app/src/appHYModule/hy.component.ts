import {
	Component,
	AfterViewInit
} from '@angular/core';
import { HYMENUS } from '../../config/HYCONFIG';
import { UrlService } from '../appServiceModule/urlService.component';

@Component({
  selector: 'hy-container',
  templateUrl:  `./hy.html`,
})
export class HYComponent implements AfterViewInit{
	MENUS:any;
	constructor() {
		this.MENUS = HYMENUS;
	}
	ngAfterViewInit():void {
		$('.sidebar .ui.accordion').accordion()
	}
}
