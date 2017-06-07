import {
	Component,
	ViewChild,
	
} from '@angular/core';
import { UrlService } from '../../../../appServiceModule/urlService.component';
import { HYService  } from '../../../../appServiceModule/HYService.component';

@Component({
  selector: 'hy-personal-psd-container',
  templateUrl:  `./index.html`,
})

export class HYPersonalPsdComponent {
	USER:any = {}
	constructor (private urlservice: UrlService, private hyService: HYService) {
		let that = this;
		this.urlservice.hy_req_get('api/profile').then((response:any) => {
            that.USER = response.json();
            
        });
	}
	handleSavePsd():void {
		let that = this;
		if ($("input.wd").val() == '') {
			toastr.error('请输入新密码');
			return
		} else if ($("input.confirmwd").val() == '') {
			toastr.error('请确认密码');
			return
		} else if ($("input.wd").val() != $("input.confirmwd").val()) {
			toastr.error('两次密码输入不一致');
			return
		} else {
			this.urlservice.hy_req_post(`/api/staff/modifyPasswd?id=${that.USER.id}&passwd=${$("input.wd").val()}`, {id:that.USER.id,passwd:$("input.wd").val()}).then((response:any) => {
            	toastr.info(response.json());
        	});
		}
		
	}
}
