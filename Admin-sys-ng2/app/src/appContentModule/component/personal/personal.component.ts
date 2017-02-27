import {Component, OnInit} from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'personal-component',
  templateUrl:  './personal.component.html',
  // directives: [],
})
export class PersonalComponent implements OnInit {
	infoDatas:any = {};
	constructor() {
		this.infoDatas = {
			"purchaseDate":""
		}
	}
	ngOnInit() {
		let password = new FormControl('', Validators.required);
		// let certainPassword = new FormControl('', CustomValidators.notEqualTo(password));

		// this.form = new FormGroup({
		// 	password: password,
		// 	certainPassword: certainPassword
		// });
	}

}
