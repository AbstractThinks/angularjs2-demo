import {Component} from '@angular/core';
import {BaseData} from '../../../../../../mockData/baseData';

@Component({
  selector: 'cms-personal-outbox-container',
  templateUrl:  `./outbox.html`,
  // directives: [],
})

export class CMSPersonalOutboxComponent {
	items:any = [
		{"title":"学生管理"}
	]
	cities:any = [

	]
	basedata:any = BaseData
}
