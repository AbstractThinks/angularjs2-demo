import {
	Component,
	ViewChild,
	AfterViewInit
} from '@angular/core';
import { UrlService } from '../../../../appServiceModule/urlService.component';

@Component({
  selector: 'hy-personal-index-container',
  templateUrl:  `./index.html`,
})

export class HYPersonalIndexComponent {
	staff:any = {};
	storagestaff:any = {};
	constructor (private urlservice: UrlService) {
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
		this.urlservice.hy_req_post(`api/staff/${this.staff.id}`, this.staff).then((response:any) => {
			console.log(response.json())
		})
	}
	handleResetData():void {
		let cloneData = {};
		$.extend(cloneData, this.storagestaff)
		this.staff = cloneData;
	}
}
