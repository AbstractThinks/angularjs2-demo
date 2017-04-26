
import { Injectable  } from '@angular/core';
import { Http  } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class HttpEffects {
	constructor(
		private http: Http,
		private actions$: Actions
	) {}

	// @Effect() 
	// login$ = this.actions$
 //    .ofType('HY_STAFFS_REQUEST')
 //    .map(
 //    	action => JSON.stringify(action.payload)
 //    )
 //    .switchMap(
 //    	payload => this.http.get('https://emobossemo.github.io/data/demo/staffs.json', payload)
 //    						.map(res => ({type: 'HY_STAFFS_SUCCESS', payload: res.json()}))
 //    						.catch(() => Observable.of({type: 'HY_STAFFS_FAILED'}))
 //    )



    @Effect() 
    getStaffs() {
        return this.actions$
                .ofType('HY_STAFFS_REQUEST')
                .map(
                    action => JSON.stringify(action.payload)
                )
                .switchMap(
                    payload => this.http.get('https://emobossemo.github.io/data/demo/staffs.json', payload)
                                        .map(
                                            // res => {
                                            //     return {type: 'HY_STAFFS_SUCCESS', payload: res.json()} 
                                            // }  
                                            // ==>>
                                            res => ({type: 'HY_STAFFS_SUCCESS', payload: res.json()} )
                                               
                                        )
                                        .catch(() => Observable.of({type: 'HY_STAFFS_FAILED'}))
                )
    }


}

