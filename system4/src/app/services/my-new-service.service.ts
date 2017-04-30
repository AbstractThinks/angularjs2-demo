import { Injectable } from '@angular/core';
import { Http,Headers  } from '@angular/http';

const headers:any = new Headers({'Content-Type': 'application/json'})
@Injectable()
export class MyNewServiceService {

  constructor(private http: Http) { }
  getHttp(url?:string) {
  	console.log("getData")
  	// return this.http.get(url).toPromise();
  }
  postData(url?:string, postData?:any) {
  	console.log("postData")
  	// return this.http.post(url,postData,{headers: headers}).toPromise()
  }

}
