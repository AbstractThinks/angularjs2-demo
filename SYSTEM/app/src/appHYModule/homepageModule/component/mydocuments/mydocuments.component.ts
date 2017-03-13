import {Component} from '@angular/core';
import {BaseData} from '../../../../../../mockData/baseData';

@Component({
  selector: 'cms-personal-mydocuments-container',
  templateUrl:  `./mydocuments.html`,
  // directives: [],
})

export class CMSPersonalMyDocumentsComponent {
	items:any = [
		{"title":"学生管理"}
	]
	cities:any = [

	]
	basedata:any = BaseData
}
