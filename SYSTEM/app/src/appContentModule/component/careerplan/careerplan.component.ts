import {
	Component,
	ViewChild
} from '@angular/core';
import { UrlService } from '../../../appServiceModule/urlService.component';

@Component({
  selector: 'careerplan-component',
  templateUrl:  './careerplan.component.html',
})
export class CareerPlanComponent {
	careerplan:any = {};
	constructor (private urlService: UrlService) {
		let that = this;
		this.urlService.req_get('careerplan.json').then((response:any) => {
			that.careerplan = response.json().data;
		});
	}
}
