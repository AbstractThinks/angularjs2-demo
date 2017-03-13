import {Component} from '@angular/core';
import {BaseData} from '../../../../../../mockData/baseData';

@Component({
  selector: 'hy-personnel-index-container',
  templateUrl:  `./index.html`,
  // directives: [],
})

export class HYPersonnelIndexComponent {
	items:any = [
		{"title":"学生管理"}
	]
	cities:any = [

	]
	basedata:any = BaseData
}
