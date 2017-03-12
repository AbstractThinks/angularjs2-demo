import {Component} from '@angular/core';
import {BaseData} from '../../../../../../mockData/baseData';

@Component({
  selector: 'cms-personal-inbox-container',
  templateUrl:  `./inbox.html`,
  // directives: [],
})

export class CMSPersonalInboxComponent {
	items:any = [
		{"title":"学生管理"}
	]
	cities:any = [

	]
	basedata:any = BaseData
}
