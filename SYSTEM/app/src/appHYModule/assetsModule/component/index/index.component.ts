import {
	Component,
	ViewChild,
  AfterViewInit
} from '@angular/core';
import { UrlService } from '../../../../appServiceModule/urlService.component';
import { HYService } from '../../../../appServiceModule/HYService.component';

@Component({
  selector: 'hy-assets-index-container',
  templateUrl:  `./index.html`,
  // directives: [],
})

export class HYAssetsIndexComponent {
  @ViewChild('infoModal')
  infoModal:any;
  infoDatas:any = {};
  equipment:any = {};
  shcools:any = [];
  userProfile:any = {};
	constructor (private urlService: UrlService,private hyService: HYService) {

	}
	ngAfterViewInit(): void {
		let that = this;
		this.urlService.hy_req_get('api/profile').then((response:any) => {
			that.userProfile = response.json();
			this.urlService.hy_req_get(`api/equipment/${that.userProfile.schoolId}/1/2`).then((response:any) => {
				that.infoDatas = response.json();
			})
		});
	}
	handleSave ():void {
        let data = this.hyService.urlEncode(this.equipment).substr(1);
        let that = this;

        this.urlService.hy_req_post(`api/equipment?${data}`, this.equipment).then((response:any) => {
                that.infoModal.hide();
            });
    }
    onFirstHandler(e:any):void{
      let that = this;
      this.urlService.hy_req_get(`api/equipment/${that.userProfile.schoolId}/1/2`).then((response:any) => {
        that.infoDatas = response.json();
      })
    }
    onLastHandler(e:any):void{
      let that = this;
      this.urlService.hy_req_get(`api/equipment/${that.userProfile.schoolId}/${that.infoDatas.totalPage}/2`).then((response:any) => {
        that.infoDatas = response.json();
      })
    }
    onNextHandler(e:any):void{
      let that = this;
      this.urlService.hy_req_get(`api/equipment/${that.userProfile.schoolId}/${that.infoDatas.pageNumber+1}/2`).then((response:any) => {
        that.infoDatas = response.json();
      })
    }
    onPreviousHandler(e:any):void{
      let that = this;
      this.urlService.hy_req_get(`api/equipment/${that.userProfile.schoolId}/${that.infoDatas.pageNumber-1}/2`).then((response:any) => {
        that.infoDatas = response.json();
      })
    }
}
