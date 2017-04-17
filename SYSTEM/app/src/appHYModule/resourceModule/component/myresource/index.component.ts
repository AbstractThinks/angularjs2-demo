import {Component} from '@angular/core';

import {
    Router,
    ActivatedRoute,
    Params
} from "@angular/router";
import { UrlService } from '../../../../appServiceModule/urlService.component';

@Component({
  selector: 'hy-resource-myresource-container',
  templateUrl:  `./index.html`,
})

export class HYResourceMyresourceComponent {
	RESOURCES:any={};
    userId:string

	constructor (private urlservice: UrlService, private router: Router) {
		let that = this;

        this.urlservice.hy_req_get("api/profile").then((response:any) => {
            this.urlservice.hy_req_get(`api/staff/${response.json().id}`).then((response:any) => {
                this.userId = response.json().userId;
                this.urlservice.hy_req_get(`api/resources/user/${response.json().userId}/1/10`).then((response:any) => {
                    that.RESOURCES = response.json();
                    console.log(response.json())
                });
            })
        })
        
	}
    articleDetail(e:any): void {
        this.router.navigateByUrl(`hy/resource/detail/${e}`)
    }
    deleteDetail(e:any, i:any) {
        let that = this;
        this.urlservice.hy_req_delete(`api/resources/delete/${e}`).then((response:any) => {
            that.RESOURCES.entries.splice(i, 1);
        })
    }
    onFirstHandler(e:any): void {
        this.urlservice.hy_req_get(`/api/resources/user/${this.userId}/1/10`).then((responselist:any) => {
            this.RESOURCES = responselist.json();
        });
    }
    onLastHandler(e:any): void {
        this.urlservice.hy_req_get(`/api/resources/user/${this.userId}/${this.RESOURCES.totalPage}/10`).then((responselist:any) => {
            this.RESOURCES = responselist.json();
        });
    }
    onNextHandler(e:any): void {
        this.urlservice.hy_req_get(`/api/resources/user/${this.userId}/${this.RESOURCES.pageNumber+1}/10`).then((responselist:any) => {
            this.RESOURCES = responselist.json();
        });
    }
    onPreviousHandler(e:any): void {
        this.urlservice.hy_req_get(`/api/resources/user/${this.userId}/${this.RESOURCES.pageNumber-1}/10`).then((responselist:any) => {
            this.RESOURCES = responselist.json();
        });
    }
}
