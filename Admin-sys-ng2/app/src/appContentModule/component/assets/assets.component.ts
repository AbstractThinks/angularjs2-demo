import {Component} from '@angular/core';

@Component({
  selector: 'assets-component',
  templateUrl:  './assets.component.html',
  // directives: [],
})
export class AssetsComponent {
	data = {
		titles:[{
			order:"1",
			name:"产品名称"
		},{
			order:"2",
			name:"产品单价"
		},{
			order:"3",
			name:"管理人"
		},{
			order:"4",
			name:"状态"
		},{
			order:"5",
			name:"购置日期"
		}],
		resources:[{
			"name":"12",
			"price":"12",
			"person":"12",
			"status":"12",
			"date":"12"
		}]
	}
}
