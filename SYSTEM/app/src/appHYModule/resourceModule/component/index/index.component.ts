import {Component} from '@angular/core';
import {BaseData} from '../../../../../../mockData/baseData';

@Component({
  selector: 'hy-resource-index-container',
  templateUrl:  `./index.html`,
  // directives: [],
})

export class HYResourceIndexComponent {
	items:any = [
		{"title":"学生管理"}
	]
	cities:any = [

	]
	basedata:any = BaseData
}
