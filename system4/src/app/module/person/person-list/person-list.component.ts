import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
	rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King',company1: 'Burger King',company2: 'Burger King',company3: 'Burger King' },
  ];
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' },
    { name: 'Company1' },
    { name: 'Company2' },
    { name: 'Company3' }
  ];
  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(PersonListModalComponent, {
      width:"60%"
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}


@Component({
  selector: 'app-person-list-modal',
  templateUrl: './person-list-modal.component.html',
  styleUrls: ['./person-list-modal.component.css']
})
export class PersonListModalComponent {
  constructor(public dialogRef: MdDialogRef<PersonListModalComponent>) {}
}
