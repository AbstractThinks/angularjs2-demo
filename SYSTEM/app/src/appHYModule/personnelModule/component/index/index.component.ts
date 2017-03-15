import {
    Component,
    ViewChild
} from '@angular/core';
import { UrlService } from '../../../../appServiceModule/urlService.component';

@Component({
  selector: 'hy-personnel-index-container',
  templateUrl:  `./index.html`,
})

export class HYPersonnelIndexComponent {
	STAFFUS:any={};
	SCHOOLSDICTIONARY:any=[];
	SUBJECTSDICTIONARY:any=[];
    STAFFMODALDATA:any={};
    @ViewChild('staffModal')
    staffModal:any;

	constructor (private urlservice: UrlService) {
		let that = this;
		this.urlservice.hy_req_get("api/staffs?page=1").then((response:any) => {
            that.STAFFUS = response.json();
        })
        this.urlservice.hy_req_get("api/schools?page=1").then((response:any) => {
            that.SCHOOLSDICTIONARY = response.json();
            setTimeout(() => {$('.ui.dropdown.SCHOOLSDICTIONARY').dropdown()}, 0);
        })
        this.urlservice.hy_req_get("api/subjects?page=1").then((response:any) => {
            that.SUBJECTSDICTIONARY = response.json();
            setTimeout(() => {$('.ui.dropdown.SUBJECTSDICTIONARY').dropdown()}, 0);
        });
	}
    handleCreateAccount(e:any):void {
        let reqData = new Object();
        reqData = {
            id : e,
            account : e,
            password : "123456"
        }
        this.urlservice.hy_req_post(`api/staff/${e}/account`, reqData).then((response:any) => {
        })
    }
    handleModifyInfo(e:any): void {
        this.staffModal.show();
        this.STAFFMODALDATA = e;
    }
    handleRemoveAccount(e:any): void {
        this.urlservice.hy_req_delete(`api/staff/${e}`).then((response:any) => {
        })
        // $.ajax({
        //     url: urlReq,
        //     type: 'delete',
        //     data: data,
        //     dataType: "json",
        //     cache: false,
        //     success: function(data) {
        //         if (data.error) {

        //         } else {
        //             $.ajax({
        //                 url: 'http://k12.iyunbei.com/api/staffs?page=1',
        //                 type: 'get',
        //                 cache: false,
        //                 success: function(data) {
        //                     if (data.error) {

        //                     } else {
        //                         data.entries = data.entries.reverse();
        //                         that.staff = data;
        //                     }
        //                 },
        //                 error: function(e) {
        //                 }
        //             });
        //         }
        //     },
        //     error: function(e) {
        //     }
        // });
    }
}
