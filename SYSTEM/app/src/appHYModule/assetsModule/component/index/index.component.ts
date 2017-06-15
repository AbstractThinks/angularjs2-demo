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
    infoModal: any;
    @ViewChild('quickMarkModal')
    quickMarkModal: any;
    infoDatas: any = {};
    quickMarkDatas: any = [];
    equipment: any = {};
    userProfile: any = {};
    TYPEDICTIONARY: any = {};
    SUPPLIERDICTIONARY: any = {};

    constructor(private urlService: UrlService, private hyService: HYService) {

    }

    ngAfterViewInit(): void {
        let that = this;
        this.urlService.hy_req_get('api/profile').then((response: any) => {
            that.userProfile = response.json();
            // 获取所有设备列表
            this.urlService.hy_req_get(`api/equipment/1/1/10`).then((response: any) => {
                that.infoDatas = response.json();
            });
            // 获取供应商列表
            this.urlService.hy_req_get('api/equipment-supplier-names/1').then((response: any) => {
                that.SUPPLIERDICTIONARY = response.json();
            });
        });

        this.urlService.hy_req_get('api/equipment-type-names').then((response: any) => {
            that.TYPEDICTIONARY = response.json();
        });

    }

    handleChangeCondition(e: any): void {
        let that = this;
        $("." + e[0] + " .item.active").removeClass('active');
        $("." + e[0] + " .item." + e[1]).addClass('active');
        let assetsStatusId = $(".menu.ASSETSSTATUSDICTIONARY .item.active").attr('name');
        let url = "";
        switch (assetsStatusId) {
            case '1':
                url = `api/equipment-specific-valid`
                break;
            case '2':
                url = `api/equipment-specific-invalid`
                break;
        }

        this.urlService.hy_req_get(url).then((response: any) => {
            that.infoDatas = response.json();
        })
    }

    handleSave(): void {
        let data = this.hyService.urlEncode(this.equipment).substr(1);
        let that = this;

        this.urlService.hy_req_post(`api/equipment?${data}`, this.equipment).then((response: any) => {
            that.infoModal.hide();
        });
    }

    handleMake(): void {
        let that = this;
        that.quickMarkModal.show({inverted: true});

        for (var i = 0; i < $('.checkbox.checked').length; i++) {
            let id = $('.checkbox.checked input').attr('id');
            let name = $('.checkbox.checked input').attr('name');
            that.quickMarkDatas.push({"id": id, "name": name});
        }

    }

    onFirstHandler(e: any): void {
        let that = this;
        this.urlService.hy_req_get(`api/equipment/${that.userProfile.schoolId}/1/2`).then((response: any) => {
            that.infoDatas = response.json();
        })
    }

    onLastHandler(e: any): void {
        let that = this;
        this.urlService.hy_req_get(`api/equipment/${that.userProfile.schoolId}/${that.infoDatas.totalPage}/2`).then((response: any) => {
            that.infoDatas = response.json();
        })
    }

    onNextHandler(e: any): void {
        let that = this;
        this.urlService.hy_req_get(`api/equipment/${that.userProfile.schoolId}/${that.infoDatas.pageNumber + 1}/2`).then((response: any) => {
            that.infoDatas = response.json();
        })
    }

    onPreviousHandler(e: any): void {
        let that = this;
        this.urlService.hy_req_get(`api/equipment/${that.userProfile.schoolId}/${that.infoDatas.pageNumber - 1}/2`).then((response: any) => {
            that.infoDatas = response.json();
        })
    }
}
