import {
	Component,
	ViewChild,
  AfterViewInit
} from '@angular/core';
import { UrlService } from '../../../../appServiceModule/urlService.component';

@Component({
  selector: 'hy-personal-collections-container',
  templateUrl:  `./index.html`,
})

export class HYPersonalCollectionsComponent {
	collections:any = {};
	constructor (private urlservice: UrlService) {
		let that = this;
		this.urlservice.hy_req_get('api/resources/favorite/0/1/10').then((response:any) => {
			that.collections = response.json();
			console.log(response.json())
		});
	}
	ngAfterViewInit(): void {

	}
}
