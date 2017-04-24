import * as actionTypes from '../../action/index';

export interface State {
  ids: string[];
  entities: object;

};


export const initialState: State = {
  ids: [],
  entities: {},
};

export function reducer(state = initialState, action: any): State {
	switch (action.type) {
		case actionTypes.HY_PERSON_REQUEST: 
			return state
		case actionTypes.HY_PERSON_SUCCESS: 
			return state
		case actionTypes.HY_PERSON_FAILED:
			return state 	
		default :			
			return state
		
	}
	
};