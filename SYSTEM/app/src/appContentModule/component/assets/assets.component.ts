import {
	Component,
	ViewChild
} from '@angular/core';
import {BaseData} from '../../../../../mockData/baseData';
@Component({
  selector: 'assets-component',
  templateUrl:  './assets.component.html',
  // directives: [],
})
export class ContentAssetsComponent {
	basedata:any = BaseData
	@ViewChild('addModal')
  addModal:any;

    handleRemove(e?:any):void {
      console.log(e) //{title1: "1", title2: "2"}
    	this.addModal.hide()
    }
}
