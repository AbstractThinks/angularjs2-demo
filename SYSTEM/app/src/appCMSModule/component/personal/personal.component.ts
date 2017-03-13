import {Component} from '@angular/core';
import {BaseData} from '../../../../../mockData/baseData';

@Component({
  selector: 'cms-personal-container',
  templateUrl:  `./personal.html`,
  // directives: [],
})

export class CMSPersonalComponent {
	items:any = [
		{"title":"学生管理"}
	]
	cities:any = [

	]
	basedata:any = BaseData
}
