import { ActionReducer } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from "ngrx-store-logger";

import { counterReducer } from './counter/counterReducer';
import { hyStaffsReducer, hyStaffsState } from './hy/staffs';
const reducers = {
	counter: counterReducer,
	hyStaffs: hyStaffsReducer
}
export interface State {
  counter: number,
  hyStaffs: hyStaffsState
};

const developmentReducer: ActionReducer<State> = compose(storeLogger(), storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (false/*environment.production*/) {
    // return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}