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
    @ViewChild('qrCodeModel')
    qrCodeModel: any;
    @ViewChild('typeModel')
    typeModel: any;
    @ViewChild('supplierModel')
    supplierModel: any;
    @ViewChild('equipmentNoModel')
    equipmentNoModel: any;
    @ViewChild('inOutStockModel')
    inOutStockModel: any;
    @ViewChild('updateModal')
    updateModal: any;
    infoDatas: any = {};
    quickMarkDatas: any = [];
    equipment: any = {};
    userProfile: any = {};
    typeDatas: any = [];
    supplierDatas: any = {};
    supplierForAllDatas: any = [];
    inOutStockData: any = {};
    equipmentNoData: any = {};

    constructor(private urlService: UrlService, private hyService: HYService) {

    }

    ngAfterViewInit(): void {
        let that = this;
        this.urlService.hy_req_get('api/profile').then((response: any) => {
            that.userProfile = response.json();

            // 获取所有设备列表
            this.urlService.hy_req_get(`api/equipment/${that.userProfile.schoolId}/1/10`).then((response: any) => {
                that.infoDatas = response.json();
            });
            // 获取供应商列表
            this.urlService.hy_req_get(`api/equipment-supplier/${that.userProfile.schoolId}/1/10`).then((response: any) => {
                that.supplierDatas = response.json();
            });
        });

        // 获取资产类型列表
        this.urlService.hy_req_get(`api/equipment-type-names`).then((response: any) => {
            that.typeDatas = response.json();
        });
    }

    handleInfoModal(): void {
        let that = this;
        // 获取所有供应商
        this.urlService.hy_req_get(`api/equipment-supplier-names/${that.userProfile.schoolId}`).then((response: any) => {
            that.supplierForAllDatas = response.json();
        });

        that.infoModal.show({inverted: true});
    }

    handleInOutStock(e: any): void {
        let that = this;
        let id = that.equipment.qrCode;
        // 获取设备次级记录
        this.urlService.hy_req_get(`api/equipment-specific/${id}`).then((response: any) => {
            that.inOutStockData = response.json();
        });

        that.inOutStockModel.show({inverted: true});
    }

    handleInOutStockSave(e: any): void {
        let data = this.hyService.urlEncode(this.equipment).substr(1);
        let that = this;

        this.urlService.hy_req_post(`api/equipment-specific?${data}`, this.equipment).then((response: any) => {
            that.inOutStockModel.hide();
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

    handleTypeModel(): void {
        let that = this;
        that.typeModel.show({inverted: true});

        setTimeout(() => {$('.checkbox').checkbox()}, 0);
    }

    handleCliAddTypeItem(): void {
        $(".addTypeItem").show();
    }

    handleSaveType(): void {
        let data = this.hyService.urlEncode(this.equipment).substr(1);
        let that = this;

        this.urlService.hy_req_post(`api/equipment-type?${data}`, this.equipment).then((response: any) => {
            that.typeDatas.push(response.json());
            setTimeout(() => {$('.checkbox').checkbox()}, 0);
        });

        $(".addTypeItem").empty().hide();
    }

    handleRemoveType(): void {
        let that = this;

        let id = null;

        for (var i = 0; i < $('.checkbox.checked').length; i++) {
            id = $('.checkbox.checked input')[i].id;

            // 删除资产类别
            this.urlService.hy_req_delete(`api/equipment-type/${id}`).then((response: any) => {
                that.typeDatas.delete(i, 1);
            });

        }
    }

    handleCliAddSupplierItem():void {
        $(".addSupplierItem").show();
    }

    handleSaveSupplier(): void {
        let data = this.hyService.urlEncode(this.equipment).substr(1);
        let that = this;

        this.urlService.hy_req_post(`api/equipment-supplier?${data}`, this.equipment).then((response: any) => {
            that.supplierDatas.entries.push(response.json());
            setTimeout(() => {$('.checkbox').checkbox()}, 0);
        });
        $(".addSupplierItem").empty().hide();
    }

    handleRemoveSupplier(): void {
        let that = this;
        let idList: any = [];
        let supplierDatasLen = that.supplierDatas.entries.length;
        for (var i = 0; i < $('.checkbox.checked').length; i++) {
            idList.push($('.checkbox.checked input')[i].id);
        }

        for (var j = 0; j < supplierDatasLen; j++) {
            if (-1 != idList.indexOf(that.supplierDatas.entries[j].id.toString())) {
                this.urlService.hy_req_delete(`api/equipment-supplier/${that.supplierDatas.entries[j].id}`).then((response: any) => {
                    that.supplierDatas.entries.splice(j, 1);
                });
            }
        }
    }


    handleSaveEquipmentNo(): void {
        let data = this.hyService.urlEncode(this.equipment).substr(1);
        let that = this;

        this.urlService.hy_req_post(`api/equipment-no?${data}`, this.equipment).then((response: any) => {
            that.equipmentNoData = response.json();

            that.equipmentNoModel.hide();
        });
    }

    // handleMake(): void {
    //     let that = this;
    //     that.quickMarkModal.show({inverted: true});
    //
    //     for (var i = 0; i < $('.checkbox.checked').length; i++) {
    //         let id = $('.checkbox.checked input').attr('id');
    //         let name = $('.checkbox.checked input').attr('name');
    //         that.quickMarkDatas.push({"id": id, "name": name});
    //     }
    //
    // }

    handleUpdateModel(e:any): void {
        let that = this;
        // 获取所有供应商
        this.urlService.hy_req_get(`api/equipment-supplier-names/${that.userProfile.schoolId}`).then((response: any) => {
            that.supplierForAllDatas = response.json();
        });

        that.equipment = e;
        that.equipment.purchaseDate = that.handleDateTimer(e.purchaseDate);

        that.updateModal.show({inverted: true});
    }

    // handleUpdate(): void {
    //     let data = this.hyService.urlEncode(this.equipment).substr(1);
    //     let that = this;
    //
    //     this.urlService.hy_req_post(`api/equipment?${data}`, this.equipment).then((response: any) => {
    //         that.updateModal.hide();
    //     });
    // }

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

    handleDateTimer(e: any): string {
        let datetime = new Date();
        datetime.setTime(e);

        if(isNaN(datetime.getFullYear())) {
            return e;
        }

        let year = datetime.getFullYear();
        let month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
        let date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
        // let hour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
        // let minute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
        // let second = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
        return year + "-" + month + "-" + date;
    }
}
