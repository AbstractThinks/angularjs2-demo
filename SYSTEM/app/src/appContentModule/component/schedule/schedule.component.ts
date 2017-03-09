import {
	Component,
	ViewChild
} from '@angular/core';


// import { UrlService } from '../../../appServiceModule/urlService.component';
@Component({
	selector: 'schedule-component',
	templateUrl:  './schedule.component.html',
})
export class ContentScheduleComponent {
	dragEnabled: any = null;
	simpleDrop: any = null;
	constructor() {

	}
}
