import React, {useEffect, useState} from 'react';
import './App.css';
import {Link} from  'react-router-dom';
import {connect} from 'react-redux';
import {fetchInterviewById, updateInterview} from './actions'
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';


const InterviewsEdit = (match) =>{

   const interviews = useSelector(
        state => state.interviews
    );

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchInterviewById(match.match.params.id))
    }, [])


  const handleSubmit = (e) => {
    e.preventDefault(); 
    const data = new FormData(e.target);
      var json_object   = {}
      data.forEach((value, key) => {json_object[key] = value});
      dispatch(updateInterview(json_object, match.match.params.id));
      window.location = "/interviews";
  }
  return (
              <form className="section" onSubmit={handleSubmit}>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <label>User Name:</label>
                            <input className="input" name="user_name" type="text" defaultValue = {interviews.user_name}/>
                        </p>
                    </div>
                    <div className="field">
                        <p  className="control has-icons-left has-icons-right">
                            <label htmlFor="user_id">User Id:</label>
                            <input className="input" name="user_id" type="number" defaultValue = {interviews.user_id}/>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <label>Title:</label>
                            <input className="input" name="topic" type="text" defaultValue = {interviews.topic}/>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <label>Role:</label>
                            <input className="input" name="role" type="text" defaultValue = {interviews.role}/>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <label>Start Time:</label>
                            <input className="input" name="schedule_at" type="datetime-local" defaultValue = {interviews.schedule_at}/>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <label>End Time:</label>
                            <input className="input" name="end_time" type="datetime-local" defaultValue = {interviews.end_time}/>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <label>Meeting Link:</label>
                            <input className="input" name="meet_link" type="text" defaultValue = {interviews.meet_link}/>
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

export default InterviewsEdit;