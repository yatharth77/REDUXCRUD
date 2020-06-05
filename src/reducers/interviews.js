import {SET_INTERVIEWS, DELETE_INTERVIEW, UPDATE_INTERVIEWS, GET_INTERVIEWS, SAVE_INTERVIEWS} from '../actions';
		{/* step 5 : this function return response to mapStateToProps in InterviewsPage.js*/}
function interviews(state = [], action ={}){
	switch(action.type){
		case SET_INTERVIEWS:
			return action.interviews;
			
		case DELETE_INTERVIEW:
			return action.interviews;

		case UPDATE_INTERVIEWS:
			return action.interviews;

		case GET_INTERVIEWS:
			return action.interviews;

		case SAVE_INTERVIEWS:
			return action.interviews;

		default: return state;
	}
}

export default interviews;
