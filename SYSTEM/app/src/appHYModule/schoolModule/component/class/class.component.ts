import {
    Component,
    AfterViewInit,
    ViewChild
} from '@angular/core';
import { UrlService } from '../../../../appServiceModule/urlService.component';
import { HYService } from '../../../../appServiceModule/HYService.component';

@Component({
  selector: 'hy-school-class-container',
  templateUrl:  `./class.html`,
})

export class HYSchoolClassComponent implements AfterViewInit{
	STAFFUS:any={};
	SCHOOLSDICTIONARY:any=[];
	SUBJECTSDICTIONARY:any=[];
    STAFFMODALDATA:any = {};
    @ViewChild('staffModal')
    staffModal:any;

	constructor (private urlservice: UrlService, private hyService: HYService) {
		let that = this;
		this.urlservice.hy_req_get("api/staffs?page=1").then((response:any) => {
            that.STAFFUS = response.json();
        })
        this.urlservice.hy_req_get("api/schools?page=1").then((response:any) => {
            that.SCHOOLSDICTIONARY = response.json();
        })
        this.urlservice.hy_req_get("api/subjects?page=1").then((response:any) => {
            that.SUBJECTSDICTIONARY = response.json();
        });

	}
    
    handleSaveStaff() {
        let that = this;
        if (this.STAFFMODALDATA.id) {
            let urlParam = this.hyService.urlEncode(this.STAFFMODALDATA).substring(1);
            let num =  this.STAFFMODALDATA._index;
            delete this.STAFFMODALDATA._index;
            this.urlservice.hy_req_post(`api/staff/${that.STAFFMODALDATA.id}?${urlParam}`, that.STAFFMODALDATA).then((response:any) => {
                that.STAFFUS.entries[num] = response.json();
                that.staffModal.hide();
            });
        } else {
            this.STAFFMODALDATA.description = "简介";
            let urlParam = this.hyService.urlEncode(this.STAFFMODALDATA).substring(1);
            this.urlservice.hy_req_post(`api/staff?${urlParam}`, that.STAFFMODALDATA).then((response:any) => {
                that.STAFFUS.entries.push(response.json());
                that.staffModal.hide();
            });
        }
        
    }
    handleCreateAccount(e:any, i:any):void {
        let that = this;
        let reqData = new Object();
        reqData = {
            id : e,
            account : e,
            password : "123456"
        }
        this.urlservice.hy_req_post(`api/staff/${e}/account`, reqData).then((response:any) => {
            that.STAFFUS.entries[i] = response.json()
        })
    }
    handleModifyAccount(e:any, i:any): void {
        this.STAFFMODALDATA = e;
        this.STAFFMODALDATA._index = i;
        this.staffModal.show();
    }
    handleAddStaff(): void {
        this.STAFFMODALDATA = new Object()
        this.staffModal.show();
    }
    ngAfterViewInit() :void {
       
    }
    handleRemoveAccount(e:any, i:any): void {
        let that = this;
        this.urlservice.hy_req_delete(`api/staff/${e}`).then((response:any) => {
            that.STAFFUS.entries.splice(i, 1);
        })
    }
    // onFirstHandler(e:any): void {
    //     let that = this;
    //     this.urlservice.hy_req_get(`api/staffs?page=1`).then((response:any) => {
    //         that.collections = response.json();
    //     });
    // }
    // onLastHandler(e:any): void {
    //     let that = this;
    //     this.urlservice.hy_req_get('api/resources/favorite/0/1/1').then((response:any) => {
    //         that.collections = response.json();
    //     });
    // }
    // onNextHandler(e:any): void {
    //     let that = this;
    //     this.urlservice.hy_req_get(`api/resources/favorite/0/${that.collections.pageNumber+1}/1`).then((response:any) => {
    //         that.collections = response.json();
    //     });
    // }
    // onPreviousHandler(e:any): void {
    //     let that = this;
    //     this.urlservice.hy_req_get(`api/resources/favorite/0/${that.collections.pageNumber-1}/1`).then((response:any) => {
    //         that.collections = response.json();
    //     });
    // }
}
