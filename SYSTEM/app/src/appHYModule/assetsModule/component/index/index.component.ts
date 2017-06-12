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
  @ViewChild('quickMarkModal')
  quickMarkModal:any;
  infoDatas:any = {};
  quickMarkDatas:any = [];
  equipment:any = {};
  userProfile:any = {};
	constructor (private urlService: UrlService,private hyService: HYService) {

	}
	ngAfterViewInit(): void {
	    let that = this;
		this.urlService.hy_req_get('api/profile').then((response:any) => {
			that.userProfile = response.json();
			this.urlService.hy_req_get(`api/equipment/${that.userProfile.schoolId}/1/2`).then((response:any) => {
				that.infoDatas = response.json();
                setTimeout(() => {$('.checkbox').checkbox()}, 0);
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
    handleMake ():void {
        let that = this;
        that.quickMarkModal.show({inverted: true});

        for (var i = 0; i < $('.checkbox.checked').length; i++) {
            let id = $('.checkbox.checked input').attr('id');
            let name = $('.checkbox.checked input').attr('name');
            that.quickMarkDatas.push({"id":id,"name":name});

            new QRcode('.quickMark', {
                text: id,
                width: 256,
                height: 256,
                colorDark : '#000000',
                colorLight : '#ffffff',
                correctLevel : QRcode.CorrectLevel.H
            });
        }

    }
    handlePrint (e:any):void {

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
