import { Component, OnInit } from '@angular/core';
import { MyNewServiceService } from '../../../services/my-new-service.service'
@Component({
  selector: 'app-person-index',
  templateUrl: './person-index.component.html',
  styleUrls: ['./person-index.component.css']
})
export class PersonIndexComponent implements OnInit {

  constructor(private mynewserviceservice:MyNewServiceService) { }

  ngOnInit() {
  	// console.log(this.mynewserviceservice)
  	// this.mynewserviceservice.getData();
  	this.getData();
  }
  getData(){
  	this.mynewserviceservice.getHttp();
  }

}
