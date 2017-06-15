import {
	Component,
	ViewChild,
  AfterViewInit
} from '@angular/core';
import { UrlService } from '../../../../appServiceModule/urlService.component';

@Component({
  selector: 'hy-shedule-basedata-container',
  templateUrl:  `./index.html`,
  // directives: [],
})

export class HYSheduleBasedataComponent {

	constructor (private urlService: UrlService) {

	}
	ngAfterViewInit(): void {

	}
}
