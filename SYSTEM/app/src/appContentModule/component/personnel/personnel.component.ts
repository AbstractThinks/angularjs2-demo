import {
	Component,
	ViewChild
} from '@angular/core';
import {BaseData} from '../../../../../mockData/baseData';
@Component({
  selector: 'personnel-component',
  templateUrl:  './personnel.component.html',
  // directives: [],
})
export class ContentPersonnelComponent {
  basedata:any = BaseData
	@ViewChild('addModal')
    addModal:any;

    handleRemove(e?:any):void {
      console.log(e) //{title1: "1", title2: "2"}
    	this.addModal.show()
    }

}
