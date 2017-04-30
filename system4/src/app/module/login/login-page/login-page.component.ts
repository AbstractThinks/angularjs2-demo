import { 
  Component, 
  OnInit,
  ViewChild, 
} from '@angular/core';
import {
  Router,
} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  username:string
  password:string
  @ViewChild('usernameinput')
  usernameinput;
  constructor(private _router: Router) { 
  }

  ngOnInit() {
  }
  submitLogin() {
    this._router.navigateByUrl('app/person/index');
  }
}
