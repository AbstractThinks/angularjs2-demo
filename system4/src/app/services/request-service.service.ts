import { Injectable } from '@angular/core';
import { Http,Headers  } from '@angular/http';
import { domain } from '../api/domain';

const headers:any = new Headers({'Content-Type': 'application/json'})
@Injectable()
export class RequestServiceService {

  constructor(private _http: Http) { }

  getHttp(url?:string) {
  	return this._http.get(domain+url).toPromise();
  }

  postHttp(url?:string, postData?:any) {
  	console.log("postData")
  	return this._http.post(domain+url,postData,{headers: headers}).toPromise()
  }
}
