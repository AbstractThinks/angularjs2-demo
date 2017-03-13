import {Component} from '@angular/core';
import {BaseData} from '../../../../../../mockData/baseData';

@Component({
  selector: 'cms-personal-documents-container',
  templateUrl:  `./documents.html`,
  // directives: [],
})

export class CMSPersonalDocumentsComponent {
	items:any = [
		{"title":"学生管理"}
	]
	cities:any = [

	]
	basedata:any = BaseData
}
