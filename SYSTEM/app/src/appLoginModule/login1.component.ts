import {
	Component
} from '@angular/core';
import {Router} from '@angular/router';

import { UrlService } from '../appServiceModule/urlService.component';
import { HYService  } from '../appServiceModule/HYService.component';
@Component({
  selector: 'login1-form',
  templateUrl: './login1.html'
})
export class Login1Component {
	username:any = "";
	password:any = "";
	constructor (private urlservice: UrlService, private router: Router) {
		let that = this;
		
	}
	handleLogin() {
		this.urlservice.hy_req_post(`api/login?username=${this.username}&password=${this.password}`,{username:this.username,password:this.password}).then((response:any) => {
			let data = response.json();
			if (!data.error) {
				this.router.navigate(['/hy']);
			}
		}, (e)=> {
			// console.log(e._body.error.message)
			// let data = e.json();
			// console.log(data.error)
			toastr.error(e._body.error.message);
		});
	}
}
