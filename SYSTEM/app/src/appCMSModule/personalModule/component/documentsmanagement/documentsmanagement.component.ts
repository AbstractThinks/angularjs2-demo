import {Component} from '@angular/core';
import {BaseData} from '../../../../../../mockData/baseData';

@Component({
  selector: 'cms-personal-documentsmanagement-container',
  templateUrl:  `./documentsmanagement.html`,
  // directives: [],
})

export class CMSPersonalDocumentsManagementComponent {
	items:any = [
		{"title":"学生管理"}
	]
	cities:any = [

	]
	basedata:any = BaseData
}
