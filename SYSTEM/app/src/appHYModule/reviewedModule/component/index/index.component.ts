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
        $(`.menu-button.menu .item.active`).removeClass('active');
        $(`.menu-button.menu .item.${e}`).addClass('active');
        let value =  $(`.menu-button.menu .item.active`).attr('name');
        let url = `api/resources/${value}/1/10`;
        let that = this;
        this.urlservice.hy_req_get(url).then((response:any) => {
            that.RESOURCES = response.json();
        })
    }

    onFirstHandler(e:any): void {
        let that = this;
        let value =  $(`.menu-button.menu .item.active`).attr('name');
        let url = `api/resources/${value}/1/10`;
        
        this.urlservice.hy_req_get(url).then((response:any) => {
            that.RESOURCES = response.json();
        });
    }
    onLastHandler(e:any): void {
        let that = this;
        let value =  $(`.menu-button.menu .item.active`).attr('name');
        let url = `api/resources/${value}/${that.RESOURCES.totalPage}/10`;
        
        this.urlservice.hy_req_get(url).then((response:any) => {
            that.RESOURCES = response.json();
        });
    }
    onNextHandler(e:any): void {
        let that = this;
        let value =  $(`.menu-button.menu .item.active`).attr('name');
        let url = `api/resources/${value}/${that.RESOURCES.pageNumber+1}/10`;
        

        this.urlservice.hy_req_get(url).then((response:any) => {
            that.RESOURCES = response.json();
        });
    }
    onPreviousHandler(e:any): void {
        let that = this;
        let value =  $(`.menu-button.menu .item.active`).attr('name');
        let url = `api/resources/${value}/${that.RESOURCES.pageNumber-1}/10`;
        

        this.urlservice.hy_req_get(url).then((response:any) => {
            that.RESOURCES = response.json();
        });
    }
}
