import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { RequestServiceService} from "../../../services/request-service.service";
import { Page } from '../../../classes/page';
import { UserInterface } from '../../../interfaces/user-interface';
import { UserClass } from '../../../classes/user';
@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
	rows = [];
  columns = [
    { name: 'id', prop:"id", sortable:false },
    { name: '编号', prop:"userId" , sortable:false},
    { name: '姓名', prop:"name", sortable:false },
    { name: '编码', prop:"staffNum" , sortable:false},
    { name: '学校', prop:"schoolId", sortable:false },
    { name: '地址', prop:"homeAddress", sortable:false},
    { name: '邮编', prop:"homeZipCode", sortable:false}
  ];
  page = new Page()
  constructor(
    public dialog: MdDialog,
    private _service: RequestServiceService
  ) { 
    this.page.pageNumber = 1;
    this.page.size = 5;

  }

  ngOnInit() {
     this.setPage({ offset: 0 });
  }
  setPage(pageInfo) {
    let that = this;

    this._service.getHttp(`api/resources/1/${pageInfo.offset+1}/${that.page.size}`).then(function (response) {
        let data = response.json();

        that.page.totalElements = data.totalCount;
        that.page.totalPages = data.totalPage;
        that.page.pageNumber = data.pageIndex;
        that._getRows(data, that.page.size);
        

      }, function (error) {
        console.log(error)
      });
  }

  _getRows(data, size) {
    var rowsData = new Array(data.totalCount);
   
    const start = (data.pageNumber-1) * size;
    for (let o = start,i = 0; i < data.entries.length; i++ ) {
      rowsData[start + i] = data.entries[i];
    }
    this.rows = rowsData;
    console.log(this.rows) 
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
  user:UserInterface = new UserClass();
  constructor(public dialogRef: MdDialogRef<PersonListModalComponent>) {}
}
