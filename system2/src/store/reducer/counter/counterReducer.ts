import { ActionReducer, Action } from '@ngrx/store';

export const counterReducer = (state:number = 0, action:Action) => {
	switch (action.type) {
		case 'COUNTER_INCREMENT':
			return state + 1;
		case 'COUNTER_DECREMENT':
		 	return state - 1;
        default:
            return state;
	}
}