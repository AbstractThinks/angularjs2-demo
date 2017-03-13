import {
	Component,
	ViewChild,
	AfterViewInit,
	OnDestroy
} from '@angular/core';
import { UrlService } from '../../../appServiceModule/urlService.component';

@Component({
  selector: 'careerplan-component',
  templateUrl:  './careerplan.component.html',
})
export class CareerPlanComponent implements AfterViewInit {
	careerplan:any = {};
	showhtml:string
	showtext:string
	constructor (private urlService: UrlService) {
		let that = this;
		this.urlService.req_get('careerplan.json').then((response:any) => {
			that.careerplan = response.json().data;
		});
	}

	ngAfterViewInit(): void {
		// if ($('#txtDiv .btn-container').length > 0) {

		// } else {
		// 	var $editor = $('#txtDiv').wangEditor();
		// }
		
	}


}
