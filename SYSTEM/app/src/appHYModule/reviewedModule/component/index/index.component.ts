import {Component} from '@angular/core';
import { UrlService } from '../../../../appServiceModule/urlService.component';

@Component({
  selector: 'hy-reviewed-index-container',
  templateUrl:  `./index.html`,
})

export class HYReviewedIndexComponent {
	RESOURCES:any={};
	SUBJECTSDICTIONARY:any=[];
	GRADESDICTIONARY:any={};
	TYPESDICTIONARY:any=[];
	constructor (private urlservice: UrlService) {
		let that = this;
		this.urlservice.hy_req_get("api/resources/1/1/10").then((response:any) => {
            console.log(response.json())
            that.RESOURCES = response.json();
        })
        this.urlservice.hy_req_get("api/subjects?page=1").then((response:any) => {
            that.SUBJECTSDICTIONARY = response.json();
        });
        this.urlservice.hy_req_get("api/dynamicenum/1028").then((response:any) => {
            that.GRADESDICTIONARY = response.json();
        });
        this.urlservice.hy_req_get("api/resources/listAllResourceTypes}").then((response:any) => {
        	let arr:Array<number> = response.json();
        	arr.pop();
            that.TYPESDICTIONARY = arr;
        });
	}
    handleChangeCondition(e:any) {
        $(`.menu .item.active`).removeClass('active');
        $(`.menu .item.${e}`).addClass('active');
    }
}
