import {Component} from '@angular/core';
import {BaseData} from '../../../../../../mockData/baseData';

@Component({
  selector: 'cms-personal-sendtext-container',
  templateUrl:  `./sendtext.html`,
  // directives: [],
})

export class CMSPersonalSendTextComponent {
	items:any = [
		{"title":"学生管理"}
	]
	cities:any = [

	]
	basedata:any = BaseData
}
