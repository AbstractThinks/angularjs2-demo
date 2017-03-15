import {Component} from '@angular/core';
import { UrlService } from '../../../../appServiceModule/urlService.component';

@Component({
  selector: 'hy-resource-index-container',
  templateUrl:  `./index.html`,
})

export class HYResourceIndexComponent {
	RESOURCES:any={};
	SUBJECTSDICTIONARY:any=[];
	GRADESDICTIONARY:any={};
	TYPESDICTIONARY:any=[];

	constructor (private urlservice: UrlService) {
		let that = this;
		this.urlservice.hy_req_get("api/resources/queryByCondition?page=1&pageSize=10&resourceTypeId=3").then((response:any) => {
            that.RESOURCES = response.json();
            
        })
        this.urlservice.hy_req_get("api/subjects?page=1").then((response:any) => {
            that.SUBJECTSDICTIONARY = response.json();
            console.log(response.json())
        });
        this.urlservice.hy_req_get("api/dynamicenum/1028").then((response:any) => {
            that.GRADESDICTIONARY = response.json();
            console.log(response.json())
        });
        this.urlservice.hy_req_get("api/resources/listAllResourceTypes}").then((response:any) => {
            console.log(response.json())
        	let arr:Array<number> = response.json();
        	arr.pop();
            that.TYPESDICTIONARY = arr;
        });
	}
    handleChangeCondition(e:any):void {
        $("."+e[0]+" .item.active").removeClass('active');
        $("."+e[0]+" .item."+e[1]).addClass('active');
    }
}
