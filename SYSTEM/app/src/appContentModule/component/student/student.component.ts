import {
	Component,
	ViewChild,
  AfterViewInit
} from '@angular/core';
import {Students} from '../../../../../mockData/student';
@Component({
  selector: 'student-component',
  templateUrl:  './student.component.html',
})
export class StudentComponent implements AfterViewInit {
  basedata:any = Students.data

  ngAfterViewInit(): void {

  }
}
