import React from 'react';
import {connect} from 'react-redux';
import {saveInterview} from './actions';
import {useSelector, useDispatch} from 'react-redux';

const InterviewsForm = (match) =>{
    const dispatch = useDispatch()
	const handleSubmit = (e) => {
		e.preventDefault(); 
		const data = new FormData(e.target);
    	var json_object   = {}
    	data.forEach((value, key) => {json_object[key] = value});

    	dispatch(saveInterview(json_object, match.match.params.id));

    	window.location = "/interviews";
	}

		return (
			<form className="section" onSubmit={handleSubmit}>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <label>User Name:</label>
                            <input className="input" name="user_name" type="text" />
                        </p>
                    </div>
                    <div className="field">
                        <p  className="control has-icons-left has-icons-right">
                            <label htmlFor="user_id">User Id:</label>
                            <input className="input" name="user_id" type="number" />
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <label>Title:</label>
                            <input className="input" name="topic" type="text" />
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <label>Role:</label>
                            <input className="input" name="role" type="text" />
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <label>Start Time:</label>
                            <input className="input" name="schedule_at" type="datetime-local" />
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <label>End Time:</label>
                            <input className="input" name="end_time" type="datetime-local" />
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <label>Meeting Link:</label>
                            <input className="input" name="meet_link" type="text" />
                        </p>
                    </div>

                    <div className="field">
                        <p className="control">
                            <input className="input" type="submit" />
                        </p>
                    </div>
            </form>
		);
	}

export default InterviewsForm;