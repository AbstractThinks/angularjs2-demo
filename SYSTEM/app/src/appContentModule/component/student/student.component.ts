import {
	Component,
	ViewChild,
  AfterViewInit
} from '@angular/core';
import { UrlService } from '../../../appServiceModule/urlService.component';


@Component({
  selector: 'student-component',
  templateUrl:  './student.component.html',
})
export class StudentComponent implements AfterViewInit {
  
  students:any = {};
  parents:any = {};
  statistics:any = {};

  constructor (private urlService: UrlService) {
  	let that = this;
  	this.urlService.req_get('student.json').then((response:any) => {
    	that.students = response.json().data;
    	that.parents = response.json().data;
    	that.statistics = response.json().data;
    });
  }
  ngAfterViewInit(): void {

  }
}
