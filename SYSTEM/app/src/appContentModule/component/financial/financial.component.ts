import {
	Component,
	ViewChild
} from '@angular/core';


// import { UrlService } from '../../../appServiceModule/urlService.component';
@Component({
	selector: 'financial-component',
	templateUrl:  './financial.component.html',
})
export class ContentFinancialComponent {
	dragEnabled: any = null;
	simpleDrop: any = null;
	constructor() {

	}
}
