import {
	Component,
	AfterViewInit
} from '@angular/core';
import { UrlService } from '../../appServiceModule/urlService.component';

@Component({
  selector: 'yh-shedule-module-container',
  templateUrl:  `./shedule.html`,
})
export class HYSheduleModuleComponent implements AfterViewInit{
	ngAfterViewInit():void {
		// $('cms-personalmodule-container .ui.accordion').accordion()
	}
}
