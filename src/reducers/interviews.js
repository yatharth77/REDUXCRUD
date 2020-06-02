import {SET_INTERVIEWS} from '../actions';
		{/* step 5 : this function return response to mapStateToProps in InterviewsPage.js*/}
function interviews(state = [], action ={}){
	switch(action.type){
		case SET_INTERVIEWS:
			return action.interviews;
		default: return state;
	}
}

export default interviews;
