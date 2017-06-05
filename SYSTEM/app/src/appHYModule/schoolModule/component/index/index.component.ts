import {
    Component,
    AfterViewInit,
    ViewChild
} from '@angular/core';
import { UrlService } from '../../../../appServiceModule/urlService.component';
import { HYService } from '../../../../appServiceModule/HYService.component';

@Component({
  selector: 'hy-school-index-container',
  templateUrl:  `./index.html`,
})

export class HYSchoolIndexComponent implements AfterViewInit{
	SCHOOLS:any=[];
	SCHOOLMODALDATA:any = {};
    @ViewChild('schoolModal')
    schoolModal:any;

	constructor (private urlservice: UrlService, private hyService: HYService) {
		let that = this;
		this.urlservice.hy_req_get("api/schools?page=1").then((response:any) => {
            that.SCHOOLS = response.json();
        })
	}
    
    handleSaveSchool() {
        let that = this;
        if (this.SCHOOLMODALDATA.id) {
            let urlParam = this.hyService.urlEncode(this.SCHOOLMODALDATA).substring(1);
            let num =  this.SCHOOLMODALDATA._index;
            delete this.SCHOOLMODALDATA._index;
            this.urlservice.hy_req_post(`api/school/${that.SCHOOLMODALDATA.id}?${urlParam}`, that.SCHOOLMODALDATA).then((response:any) => {
                that.SCHOOLS[num] = response.json();
                that.schoolModal.hide();
            });
        } else {
            let urlParam = this.hyService.urlEncode(this.SCHOOLMODALDATA).substring(1);
            this.urlservice.hy_req_post(`api/school?${urlParam}`, that.SCHOOLMODALDATA).then((response:any) => {
                that.SCHOOLS.push(response.json());
                that.schoolModal.hide();
            });
        }
        
    }
    
    handleModifyAccount(e:any, i:any): void {
        this.SCHOOLMODALDATA = e;
        this.SCHOOLMODALDATA._index = i;
        this.schoolModal.show();
    }
    handleAddSchool(): void {
        this.SCHOOLMODALDATA = new Object()
        this.schoolModal.show();
    }
    ngAfterViewInit() :void {
       
    }
    handleRemoveAccount(e:any, i:any): void {
        let that = this;
        this.urlservice.hy_req_delete(`api/school/${e}`).then((response:any) => {
            that.SCHOOLS.splice(i, 1);
        })
    }
    
}
