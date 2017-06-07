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
    searchCondition:any={

    }
	constructor (private urlservice: UrlService) {
		let that = this;
		this.urlservice.hy_req_get("api/resources/queryByCondition?page=1&pageSize=10&resourceTypeId=0&subjectId=0&gradeId=0").then((response:any) => {
            that.RESOURCES = response.json();
            console.log(response.json())
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
        let that = this;
        $('#gloablInput').val("");
        $("."+e[0]+" .item.active").removeClass('active');
        $("."+e[0]+" .item."+e[1]).addClass('active');
        let subjectId = $(".menu.SUBJECTSDICTIONARY .item.active").attr('name');
        let gradeId = $(".menu.GRADESDICTIONARY .item.active").attr('name');
        let resourceTypeId = $(".menu.TYPESDICTIONARY .item.active").attr('name');
        let url = `api/resources/queryByCondition?page=1&pageSize=10&resourceTypeId=${resourceTypeId}&subjectId=${subjectId}&gradeId=${gradeId}`
        this.urlservice.hy_req_get(url).then((response:any) => {
            that.RESOURCES = response.json();
            console.log(response.json())
        })
    }
    onFirstHandler(e:any): void {
        let that = this;
        let subjectId = $(".menu.SUBJECTSDICTIONARY .item.active").attr('name');
        let gradeId = $(".menu.GRADESDICTIONARY .item.active").attr('name');
        let resourceTypeId = $(".menu.TYPESDICTIONARY .item.active").attr('name');
        let url;
        if ($('#gloablInput').val("")) {
            url = `api/resources/queryResource?condition=${$('#gloablInput').val()}&pageSize=10&page=1`
        } else {
            url = `api/resources/queryByCondition?page=1&pageSize=10&resourceTypeId=${resourceTypeId}&subjectId=${subjectId}&gradeId=${gradeId}`
        }
        
        this.urlservice.hy_req_get(url).then((response:any) => {
            that.RESOURCES = response.json();
        });
    }
    onLastHandler(e:any): void {
        let that = this;
        let subjectId = $(".menu.SUBJECTSDICTIONARY .item.active").attr('name');
        let gradeId = $(".menu.GRADESDICTIONARY .item.active").attr('name');
        let resourceTypeId = $(".menu.TYPESDICTIONARY .item.active").attr('name');
        let url;
        if ($('#gloablInput').val("")) {
            url = `api/resources/queryResource?condition=${$('#gloablInput').val()}&pageSize=10&page=${this.RESOURCES.totalPage}`
        } else {
            url = `api/resources/queryByCondition?page=${this.RESOURCES.totalPage}&pageSize=10&resourceTypeId=${resourceTypeId}&subjectId=${subjectId}&gradeId=${gradeId}`
        }
        this.urlservice.hy_req_get(url).then((response:any) => {
            that.RESOURCES = response.json();
        });
    }
    onNextHandler(e:any): void {
        let that = this;
        let subjectId = $(".menu.SUBJECTSDICTIONARY .item.active").attr('name');
        let gradeId = $(".menu.GRADESDICTIONARY .item.active").attr('name');
        let resourceTypeId = $(".menu.TYPESDICTIONARY .item.active").attr('name');
        let url;
        if ($('#gloablInput').val("")) {
            url = `api/resources/queryResource?condition=${$('#gloablInput').val()}&pageSize=10&page=${that.RESOURCES.pageNumber+1}`
        } else {
            url = `api/resources/queryByCondition?page=${that.RESOURCES.pageNumber+1}&pageSize=10&resourceTypeId=${resourceTypeId}&subjectId=${subjectId}&gradeId=${gradeId}`
        }
        this.urlservice.hy_req_get(url).then((response:any) => {
            that.RESOURCES = response.json();
        });
    }
    onPreviousHandler(e:any): void {
        let that = this;
        let subjectId = $(".menu.SUBJECTSDICTIONARY .item.active").attr('name');
        let gradeId = $(".menu.GRADESDICTIONARY .item.active").attr('name');
        let resourceTypeId = $(".menu.TYPESDICTIONARY .item.active").attr('name');
        let url;
        if ($('#gloablInput').val("")) {
            url = `api/resources/queryResource?condition=${$('#gloablInput').val()}&pageSize=10&page=${that.RESOURCES.pageNumber-1}`
        } else {
            url = `api/resources/queryByCondition?page=${that.RESOURCES.pageNumber-1}&pageSize=10&resourceTypeId=${resourceTypeId}&subjectId=${subjectId}&gradeId=${gradeId}`
        }
        this.urlservice.hy_req_get(url).then((response:any) => {
            that.RESOURCES = response.json();
        });
    }
    globalSearch(): void{
        let that = this;
        $(".menu.SUBJECTSDICTIONARY .item.active").removeClass('active');
        $(".menu.SUBJECTSDICTIONARY .item.0").addClass('active');
        $(".menu.GRADESDICTIONARY .item.active").removeClass('active');
        $(".menu.GRADESDICTIONARY .item.0").addClass('active');
        $(".menu.TYPESDICTIONARY .item.active").removeClass('active');
        $(".menu.TYPESDICTIONARY .item.0").addClass('active');
        let url = `api/resources/queryResource?condition=${$('#gloablInput').val()}&pageSize=10&page=1`;
        this.urlservice.hy_req_get(url).then((response:any) => {
            that.RESOURCES = response.json();
        });
    }
}
