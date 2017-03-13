import {Component} from '@angular/core';
import {BaseData} from '../../../../../../mockData/baseData';

@Component({
  selector: 'hy-reviewed-index-container',
  templateUrl:  `./index.html`,
  // directives: [],
})

export class HYReviewedIndexComponent {
	items:any = [
		{"title":"学生管理"}
	]
	cities:any = [

	]
	basedata:any = BaseData
}
