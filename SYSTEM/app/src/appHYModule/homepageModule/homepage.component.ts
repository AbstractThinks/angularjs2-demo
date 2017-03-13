import {
	Component,
	AfterViewInit
} from '@angular/core';
import { UrlService } from '../../appServiceModule/urlService.component';

@Component({
  selector: 'yh-homepage-module-container',
  templateUrl:  `./homepage.html`,
})
export class HYHomepageModuleComponent implements AfterViewInit{
	ngAfterViewInit():void {
		// $('cms-personalmodule-container .ui.accordion').accordion()
	}
}
