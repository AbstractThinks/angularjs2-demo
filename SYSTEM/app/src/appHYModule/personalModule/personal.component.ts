import {
	Component,
	AfterViewInit
} from '@angular/core';
import { UrlService } from '../../appServiceModule/urlService.component';

@Component({
  selector: 'hy-personal-module-container',
  templateUrl:  `./personal.html`,
})
export class HYPersonalModuleComponent implements AfterViewInit{
	ngAfterViewInit():void {
		// $('cms-personalmodule-container .ui.accordion').accordion()
	}
}
