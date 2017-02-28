import {Component, OnInit} from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'personal-favourite-component',
  templateUrl:  './favourite.component.html',
  // directives: [],
})
export class PersonalFavouriteComponent implements OnInit {
	infoDatas:any = {};
	constructor() {
		this.infoDatas = {
			"purchaseDate":""
		}
	}
	ngOnInit() {
		// let certainPassword = new FormControl('', CustomValidators.notEqualTo(password));

		// this.form = new FormGroup({
		// 	password: password,
		// 	certainPassword: certainPassword
		// });
	}

}
