import {Component} from '@angular/core';
import {BaseData} from '../../../../../../mockData/baseData';

@Component({
  selector: 'cms-personal-message-container',
  templateUrl:  `./message.html`,
})
export class CMSPersonalMessageComponent {
	items:any = [
		{"title":"学生管理"}
	]
	cities:any = [

	]
	basedata:any = BaseData
}
