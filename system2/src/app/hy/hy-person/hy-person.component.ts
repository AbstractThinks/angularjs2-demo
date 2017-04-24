import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Store } from '@ngrx/store';

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-hy-person',
  templateUrl: './hy-person.component.html',
  styleUrls: ['./hy-person.component.css']
})
export class HyPersonComponent implements OnInit {
	counter: Observable<number>;
  constructor(private store: Store<AppState>)  { 
  	this.counter = store.select('counter');
  }

  ngOnInit() {
  }
  increment(){
		this.store.dispatch({ type: "COUNTER_INCREMENT" });
	}

	decrement(){
		this.store.dispatch({ type: "COUNTER_DECREMENT" });
	}


}
