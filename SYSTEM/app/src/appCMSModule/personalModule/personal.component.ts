import {
	Component,
	AfterViewInit
} from '@angular/core';
import { UrlService } from '../../appServiceModule/urlService.component';

@Component({
  selector: 'cms-personalmodule-container',
  templateUrl:  `./personal.html`,
})
export class CMSPersonalModuleComponent implements AfterViewInit{
	ngAfterViewInit():void {
		// $('cms-personalmodule-container .ui.accordion').accordion()
	}
}
