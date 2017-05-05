import {
	Component,
	ViewChild,
  AfterViewInit
} from '@angular/core';
import { UrlService } from '../../../../appServiceModule/urlService.component';
import {
	Router,
	ActivatedRoute,
	Params
} from "@angular/router";

@Component({
  selector: 'hy-assets-supplier-container',
  templateUrl:  `./index.html`,

})
export class HYAssetsSupplierComponent {
	
	constructor (
		private urlService: UrlService,
		private aRoute: ActivatedRoute
	) {
		let that = this;
		
		

	}
	ngAfterViewInit(): void {
		
	}
	
}
