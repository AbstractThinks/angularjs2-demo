import {Component} from '@angular/core';
import {BaseData} from '../../../../../../mockData/baseData';

@Component({
  selector: 'cms-personal-communication-container',
  templateUrl:  `./communication.html`,
  // directives: [],
})

export class CMSPersonalCommunicationComponent {
	items:any = [
		{"title":"学生管理"}
	]
	cities:any = [

	]
	basedata:any = BaseData
}
