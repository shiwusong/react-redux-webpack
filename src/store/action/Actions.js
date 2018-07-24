import * as actionTypes from './actionTypes';

export const orderAction = (newState) => {
	return {
		type: actionTypes.ORDER,
		...newState,
	}
	
};