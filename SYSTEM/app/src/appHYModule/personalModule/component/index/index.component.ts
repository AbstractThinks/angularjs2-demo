import {
	Component,
	ViewChild,
	AfterViewInit
} from '@angular/core';
import { UrlService } from '../../../../appServiceModule/urlService.component';
import { HYService  } from '../../../../appServiceModule/HYService.component';

@Component({
  selector: 'hy-personal-index-container',
  templateUrl:  `./index.html`,
})

export class HYPersonalIndexComponent {
	staff:any = {};
	storagestaff:any = {};
	constructor (private urlservice: UrlService, private hyService: HYService) {
		let that = this;
		this.urlservice.hy_req_get('api/staff/50').then((response:any) => {
			that.staff = response.json();
			that.storagestaff = response.json();
			console.log(response.json())
		});
	}
	ngAfterViewInit(): void {

	}
	handleSaveData():void {
		let that = this;
		let urlParam = this.hyService.urlEncode(this.staff).substring(1);
        this.urlservice.hy_req_post(`api/staff/${that.staff.id}?${urlParam}`, that.staff).then((response:any) => {
            that.staff = response.json();
        });

	}
	handleResetData():void {
		let cloneData = {};
		$.extend(cloneData, this.storagestaff)
		this.staff = cloneData;
	}
}
