import {Injectable} from '@angular/core';
import { Http,Headers,Response  } from '@angular/http';
import { urlDomain,urlDomainModule } from '../../config/config'; 


@Injectable()
export class UrlService {
	constructor(private http: Http) {}
    req_get(url?:string, callback?:any): any {
		return this.http.get(urlDomain+url).toPromise();
    }
    req_get_module(url?:string, callback?:any): any {
		return this.http.get(urlDomainModule+url).toPromise();
    }
    
}