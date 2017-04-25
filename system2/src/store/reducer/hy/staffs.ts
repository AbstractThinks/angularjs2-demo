import { ActionReducer, Action } from '@ngrx/store';
import * as actionTypes from '../../action/index';
import { hyStaff } from '../../../model/hy/staff';

export interface hyStaffsState {
	entries:hyStaff[] ;
}
export const initialState: hyStaffsState = {
  	entries: [],
};
export const hyStaffsReducer = (state:hyStaffsState = initialState, action:Action) => {
	switch (action.type) {
		case actionTypes.HY_STAFFS_REQUEST:
			return state;
		case actionTypes.HY_STAFFS_SUCCESS:
			const returnData = Object.assign({}, state, action.payload)
		 	return returnData;
		case actionTypes.HY_STAFFS_FAILED:
		 	return state;
        default:
            return state;
	}
}