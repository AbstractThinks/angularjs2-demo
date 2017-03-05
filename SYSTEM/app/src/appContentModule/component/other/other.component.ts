import {
	Component,
  AfterViewInit
	
} from '@angular/core';
import {BaseData} from '../../../../../mockData/baseData';
@Component({
  selector: 'other-component',
  templateUrl:  './other.component.html',
})
export class ContentOtherComponent implements AfterViewInit{
  basedata:any = BaseData
  constructor() {

  }
  ngAfterViewInit():void {
    $('.ui.accordion.detail').accordion();
  }
}
