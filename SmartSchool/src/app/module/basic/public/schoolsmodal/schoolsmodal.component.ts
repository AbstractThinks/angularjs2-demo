import { Component, OnInit, Inject  } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-schoolsmodal',
  templateUrl: './schoolsmodal.component.html',
  styleUrls: ['./schoolsmodal.component.css']
})
export class SchoolsmodalComponent implements OnInit {
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ]
  constructor(
  	@Inject(MD_DIALOG_DATA) groups: any, 
  	private dialogRef: MdDialogRef<SchoolsmodalComponent>
  ) { 
  	console.log(groups);
  }

  ngOnInit() {
  }

}
