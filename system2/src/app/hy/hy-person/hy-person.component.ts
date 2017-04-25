import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Store } from '@ngrx/store';
import { Http,Headers,Response  } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { hyStaffsState } from '../../../store/reducer/hy/staffs'
import { State } from '../../../store/reducer/index';
import * as actionTypes from '../../../store/action/hy/actionsType';

@Component({
  selector: 'app-hy-person',
  templateUrl: './hy-person.component.html',
  styleUrls: ['./hy-person.component.css']
})
export class HyPersonComponent implements OnInit {
  hyStaffs:  Observable<hyStaffsState>;
  constructor (
    private http: Http,
    private store: Store<State>
  )  { 
  	this.hyStaffs = store.select('hyStaffs');
    this.http
        .get('http://k12.iyunbei.com/api/staffs?page=1')
        .toPromise()
        .then((response:any) => {
          // console.log(response.json());
          this.store.dispatch({ type: actionTypes.HY_STAFFS_SUCCESS, payload: response.json()});
        }, (error:any) => {
          console.log("error ")
          console.log(error)
        });
  }

  ngOnInit() {
  }
  increment(){
		this.store.dispatch({ type: actionTypes.HY_STAFFS_REQUEST });
	}



}
