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
  selector: 'hy-assets-detail-container',
  templateUrl:  `./index.html`,

})
export class HYAssetsDetailComponent {
	infoDatas:any = {};
    borrowData:any = {};
    historys:any = {};
	inOutStockData:any = {};
	equipment: any = {};

    @ViewChild('libraryModal')
    libraryModal:any;
    @ViewChild('libraryHistoryModal')
	libraryHistoryModal:any;
	@ViewChild('inOutStockModel')
	inOutStockModel: any;
	constructor (
		private urlService: UrlService,
		private aRoute: ActivatedRoute
	) {
		let that = this;
		this.aRoute.params.subscribe((params) => {
			this.urlService.hy_req_get(`api/equipment-specific/${params.id}/1/10`).then((response:any) => {
				that.infoDatas = response.json();
			})
		});
		

	}
	ngAfterViewInit(): void {
		setTimeout(() => {$('.checkbox').checkbox()}, 0);
	}
	handleChange():void {

	}
	handleGetData():void {

	}
	borrowHandle(e:any):void {
		this.libraryModal.show({inverted: true});
        this.borrowData = {
            ...this.borrowData,
            ...e
        };   
	}
	inOutStockHandle(e:any):void {
		let that = this;
		// 获取主设备信息
		// this.urlService.hy_req_get(`api/equipment-specific/${e}`).then((response: any) => {
		// 	that.inOutStockData = response.json();
		// });

		// 获取设备次级记录
		this.urlService.hy_req_get(`api/equipment-specific/${e}`).then((response: any) => {
			that.inOutStockData = response.json();
		});

		that.inOutStockModel.show({inverted: true});
	}

	libraryHistoryHandle(e:any):void {
		this.libraryHistoryModal.show({inverted: true});
        let that = this;

        this.urlService.hy_req_get(`api/equipment-history/${e}/1/2`).then((response:any) => {
        	that.historys = response.json()
        });
	}
	handleLibrarySave(e:any):void {

	}
	onFirstHandler(e:any):void{
		let that = this;
		this.aRoute.params.subscribe((params) => {
			this.urlService.hy_req_get(`api/equipment-specific/${params.id}/1/2`).then((response:any) => {
				that.infoDatas = response.json();
			})
		});

    }
    onLastHandler(e:any):void{
		let that = this;
		this.aRoute.params.subscribe((params) => {
			this.urlService.hy_req_get(`api/equipment-specific/${params.id}/${that.infoDatas.totalPage}/2`).then((response:any) => {
				that.infoDatas = response.json();
			})
		});
    }
    onNextHandler(e:any):void{
    	let that = this;
		this.aRoute.params.subscribe((params) => {
			this.urlService.hy_req_get(`api/equipment-specific/${params.id}/${that.infoDatas.pageNumber+1}/2`).then((response:any) => {
				that.infoDatas = response.json();
			})
		});

    }
    onPreviousHandler(e:any):void{

		let that = this;
		this.aRoute.params.subscribe((params) => {
			this.urlService.hy_req_get(`api/equipment-specific/${params.id}/${that.infoDatas.pageNumber-1}/2`).then((response:any) => {
				that.infoDatas = response.json();
			})
		});

    }
}
