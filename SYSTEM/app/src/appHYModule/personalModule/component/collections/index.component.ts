import {
	Component,
	ViewChild,
  	AfterViewInit,
  	EventEmitter
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
		this.urlservice.hy_req_get('api/resources/favorite/0/1/1').then((response:any) => {
			that.collections = response.json();
		});
	}
	ngAfterViewInit(): void {

	}
	cancelCollection(e:any, i:any):void {
		let that = this;
		this.urlservice.hy_req_post(`api/resources/favorite/${e}/delete`, {resourceId:e}).then((response:any) => {
			that.collections.entries.splice(i, 1);
		})
	}

	onFirstHandler(e:any): void {
		let that = this;
		this.urlservice.hy_req_get(`api/resources/favorite/0/1/1`).then((response:any) => {
			that.collections = response.json();
		});
	}
	onLastHandler(e:any): void {
		let that = this;
		this.urlservice.hy_req_get('api/resources/favorite/0/1/1').then((response:any) => {
			that.collections = response.json();
		});
	}
	onNextHandler(e:any): void {
		let that = this;
		this.urlservice.hy_req_get(`api/resources/favorite/0/${that.collections.pageNumber+1}/1`).then((response:any) => {
			that.collections = response.json();
		});
	}
	onPreviousHandler(e:any): void {
		let that = this;
		this.urlservice.hy_req_get(`api/resources/favorite/0/${that.collections.pageNumber-1}/1`).then((response:any) => {
			that.collections = response.json();
		});
	}
}
