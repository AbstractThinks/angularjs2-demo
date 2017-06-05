import {
    Component,
    AfterViewInit,
    ViewChild
} from '@angular/core';
import { UrlService } from '../../../../appServiceModule/urlService.component';
import { HYService } from '../../../../appServiceModule/HYService.component';

@Component({
  selector: 'hy-school-subject-container',
  templateUrl:  `./index.html`,
})

export class HYSchoolSubjectComponent implements AfterViewInit{
	SCHOOLS:any=[];
	SCHOOLMODALDATA:any = {};
    @ViewChild('schoolModal')
    schoolModal:any;

	constructor (private urlservice: UrlService, private hyService: HYService) {
		let that = this;
		this.urlservice.hy_req_get("api/subjects?page=1").then((response:any) => {
            that.SCHOOLS = response.json();
        })
	}
    
    handleSaveSchool() {
        let that = this;
        if (this.SCHOOLMODALDATA.id) {
            let urlParam = this.hyService.urlEncode(this.SCHOOLMODALDATA).substring(1);
            let num =  this.SCHOOLMODALDATA._index;
            delete this.SCHOOLMODALDATA._index;
            this.urlservice.hy_req_post(`api/subject/${that.SCHOOLMODALDATA.id}?${urlParam}`, that.SCHOOLMODALDATA).then((response:any) => {
                that.SCHOOLS[num] = response.json();
                that.schoolModal.hide();
            });
        } else {
            let urlParam = this.hyService.urlEncode(this.SCHOOLMODALDATA).substring(1);
            this.urlservice.hy_req_post(`api/subject?${urlParam}`, that.SCHOOLMODALDATA).then((response:any) => {
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
        this.urlservice.hy_req_delete(`api/subject/${e}`).then((response:any) => {
            that.SCHOOLS.splice(i, 1);
        })
    }
    
}
