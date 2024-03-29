import {Injectable} from '@angular/core';
import { Http,Headers,Response  } from '@angular/http';
import { urlDomain,urlDomainModule } from '../../config/config'; 
import { HYURLDOMAIN } from '../../config/HYCONFIG';


let HYHEADERS:any = new Headers({'Content-Type': 'application/json'})

@Injectable()
export class UrlService {
	constructor(private http: Http) {}
    req_get(url?:string): any {
		return this.http.get(urlDomain+url).toPromise();
    }
    req_get_module(url?:string): any {
		return this.http.get(urlDomainModule+url).toPromise();
    }

    hy_req_post(url?:string, reqData?:any): any {
		return this.http.post(HYURLDOMAIN + url,reqData,{headers: HYHEADERS}).toPromise()		
    }

    hy_req_get(url?:string): any {
    	return this.http.get(HYURLDOMAIN+url).toPromise();
    }

    hy_req_delete(url?:string, reqData?:any): any {
        return this.http.delete(HYURLDOMAIN+url).toPromise();
    }
	isEmail(str:string): boolean{ 
        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/; 
        return reg.test(str); 
    } 
    isPhone(str:string): boolean{ 
        var reg = /^1\d{10}$/; 
        return reg.test(str); 
    }
}