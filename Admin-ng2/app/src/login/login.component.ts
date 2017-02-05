import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  templateUrl: './login.html',
})
export class LoginComponent {

    username:string = "";
    password:string = "";

    constructor(private router: Router) {
    }

    loginHandle():void {
        if (this.username == 'admin' && this.password == "123456") {
            alert(true);
            this.router.navigate(['/']);
        } else {
            alert(false);

        }
    }
}
