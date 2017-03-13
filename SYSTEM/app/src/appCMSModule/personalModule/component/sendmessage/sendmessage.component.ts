import {Component} from '@angular/core';
import {BaseData} from '../../../../../../mockData/baseData';

@Component({
  selector: 'cms-personal-sendmessage-container',
  templateUrl:  `./sendmessage.html`,
})
export class CMSPersonalSendMessageComponent{
	items:any = [
		{"title":"学生管理"}
	]
	cities:any = [

	]
	basedata:any = BaseData
}
