import {
	Component,
	AfterViewInit
} from '@angular/core';
import { UrlService } from '../../appServiceModule/urlService.component';

@Component({
  selector: 'hy-school-module-container',
  templateUrl:  `./school.html`,
})
export class HYSchoolModuleComponent implements AfterViewInit{
	ngAfterViewInit():void {
	}
}
