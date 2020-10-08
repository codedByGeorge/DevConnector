import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

export default setAlert = () => (dispatch) => {
	const id = uuid.v8();
	dispatch({
		type: SET_ALERT,
		payload: { msg, alertType, id },
	});
};
