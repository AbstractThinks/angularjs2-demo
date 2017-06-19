import {
	Component,
	ViewChild,
  AfterViewInit
} from '@angular/core';
import { UrlService } from '../../../../appServiceModule/urlService.component';
import { HYService } from '../../../../appServiceModule/HYService.component';
declare var dragula:any;
@Component({
  selector: 'hy-shedule-index-container',
  templateUrl:  `./index.html`,
  // directives: [],
})

export class HYSheduleIndexComponent {
	@ViewChild('addGradeModal')
    addGradeModal:any;
    @ViewChild('addClassModal')
    addClassModal:any;
    @ViewChild('addDomainSubjectModal')
    addDomainSubjectModal:any;
    @ViewChild('addTargetTargetValueModal')
    addTargetTargetValueModal:any;

    gradeList: any = [];
    subjectList: any = [];
    domainSubjecList: any = [];
    clazzSubjectStaffList: any = [];
    staffList: object = {};
    targetTargetValueList: any = [];
    addGradeModalData:object = {"name": ""};
    addClassModalData:object = {"name": ""};
    addDomainSubjectModalData:object = {"domainid":0,"subjectid":0,"num":0}
	constructor (private urlService: UrlService, private hyService: HYService) {

	}
	handleCreateGrade() {
		this.addGradeModalData = {"name": ""};
		this.addGradeModal.show();
	}
	handleCreateClass() {
		let that = this;
		this.urlService.hy_req_get(`api/domain/list}`).then((response:any) => {
            that.gradeList = response.json();
        })
		this.addClassModal.show();
	}
	handleSaveGrade() {
		this.urlService.hy_req_post(`api/domain/create`, this.addGradeModalData).then((response:any) => {
			
			this.addGradeModal.hide();
			toastr.success('新增成功');
        })
	}
	handleSaveClass() {
		let urlParam = this.hyService.urlEncode(this.addClassModalData).substring(1);
		this.urlService.hy_req_post(`api/clazz/create?${urlParam}`, this.addClassModalData).then((response:any) => {
			
			this.addClassModal.hide();
			toastr.success('新增成功');
        })
	}
	handleCreateDomainSubject() {
		let that = this;
		this.urlService.hy_req_get(`api/domain/list}`).then((response:any) => {
            that.gradeList = response.json();
        })
        this.urlService.hy_req_get(`api/subjects?page=1`).then((response:any) => {
            that.subjectList = response.json();
        })
		this.addDomainSubjectModal.show();
	}
	handleSaveDomainSubject() {
		let urlParam = this.hyService.urlEncode(this.addDomainSubjectModalData).substring(1);
		this.urlService.hy_req_post(`api/clazz/create?${urlParam}`, this.addDomainSubjectModalData).then((response:any) => {
			
			this.addDomainSubjectModal.hide();
			toastr.success('新增成功');
        })
	}
	handleCreateTargetTargetValue() {
		let that = this;
		// this.urlService.hy_req_get(`api/subjects?page=1`).then((response:any) => {
  //           that.subjectList = response.json();
  //       })
  //       this.urlService.hy_req_get(`api/domain/list}`).then((response:any) => {
  //           that.gradeList = response.json();
  //       })
        this.addTargetTargetValueModal.show();
	}
	ngAfterViewInit(): void {
		let that = this;
		// dragula([
		// 	$('#monday').get(0), 
		// 	$('#tuesday').get(0),
		// 	$('#wednesday').get(0),
		// 	$('#thursday').get(0),
		// 	$('#friday').get(0),
		// 	$('#saturday').get(0),
		// 	$('#sunday').get(0)]);
		// setTimeout( () => {$('.tabular.menu .item').tab();}, 100)
		$('.sheduleTab .tabular.menu .item').on('click', function (e:any) {
			
			if ($(e.target).data("tab") == "third") {
				that.urlService.hy_req_get(`api/domainsubjectrelation/list}`).then((response:any) => {
		            that.domainSubjecList = response.json();
		        })
			}
			if ($(e.target).data("tab") == "forth") {
				that.urlService.hy_req_get(`api/staffs?page=1`).then((response:any) => {
		            that.staffList = response.json();
		        })
			}
			if ($(e.target).data("tab") == "fivth") {
				that.urlService.hy_req_get(`api/clazzsubjectstaffrelation/list}`).then((response:any) => {
		            that.clazzSubjectStaffList = response.json();
		        })
			}
			if ($(e.target).data("tab") == "sixth") {
				that.urlService.hy_req_get(`api/targettargetvaluerelation/list}`).then((response:any) => {
		            that.targetTargetValueList = response.json();
		        })
			}
			$('.sheduleTab .item.active').removeClass('active');
			$(`.sheduleTab .item.${$(e.target).data("tab")}`).addClass('active');
		});
		$('.ui.accordion').accordion({
			'exclusive': false
		});
		
	}
}
