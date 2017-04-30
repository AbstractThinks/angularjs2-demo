import { Component, OnInit } from '@angular/core';
import { schools, sex, comfire, educations, natives} from '../../../api/menu';
import { UserInterface } from '../../../interfaces/user-interface';
let initUser:UserInterface = {
	name: "",
	code: "",
	phone: "",
	email: "",
	sex: "",
	married: "",
	education: "",
	politics: "",
	native: "",
	birthday: "",
	subject: "",
	description: "",
	educationExperience: "",
	trainExperience: "",
	achievement: ""

}

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
	user:UserInterface = initUser;
	constructor() {}
	ngOnInit() {}

}
