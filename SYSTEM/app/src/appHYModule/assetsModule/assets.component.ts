import {
	Component,
	AfterViewInit
} from '@angular/core';
import { UrlService } from '../../appServiceModule/urlService.component';

@Component({
  selector: 'yh-assets-module-container',
  templateUrl:  `./assets.html`,
})
export class HYAssetsModuleComponent implements AfterViewInit{
	ngAfterViewInit():void {
		// $('cms-personalmodule-container .ui.accordion').accordion()
	}
}
