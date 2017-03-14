import {Component} from '@angular/core';
import {BaseData} from '../../../../../../mockData/baseData';

@Component({
  selector: 'hy-resource-detail-container',
  templateUrl:  `./index.html`,
  // directives: [],
})

export class HYResourceDetailComponent {
	items:any = [
		{"title":"学生管理"}
	]
	cities:any = [

	]
	basedata:any = BaseData
}
