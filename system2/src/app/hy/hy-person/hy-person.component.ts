import { Component, OnInit } from '@angular/core';
import { CounterState } from '../../store/hy/counter/counter.store';
import { Observable } from 'rxjs/observable';
import { Store } from '@ngrx/store';
import { DECREMENT, INCREMENT, RESET } from '../../store/hy/counter/counter.action';


@Component({
  selector: 'app-hy-person',
  templateUrl: './hy-person.component.html',
  styleUrls: ['./hy-person.component.css']
})
export class HyPersonComponent implements OnInit {
  counters: Observable<number>;
  constructor( private store: Store<CounterState> )  { 
  	// console.log(store)
  	this.counters = store.select("counter");
  	// console.log(this.counters)
  }

  ngOnInit() {
  }
  increment() {
  	console.log("increment")
    this.store.dispatch({
      type: INCREMENT,
      payload: {
        value: 1
      }
    });
  }

  decrement() {
    this.store.dispatch({
      type: DECREMENT,
      payload: {
        value: 1
      }
    });
  }

  reset() {
    this.store.dispatch({type: RESET});
  }

}
