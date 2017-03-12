import {Component} from '@angular/core';
import {BaseData} from '../../../../../../mockData/baseData';

@Component({
  selector: 'cms-personal－news-container',
  templateUrl:  `./news.html`,
  // directives: [],
})

export class CMSPersonalNewsComponent {
	items:any = [
		{"title":"学生管理"}
	]
	cities:any = [

	]
	basedata:any = BaseData
}
