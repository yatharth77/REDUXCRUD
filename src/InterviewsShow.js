import React, {useEffect, useState} from 'react';
import './App.css';
import {Link} from  'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {connect} from 'react-redux';
import {fetchInterviewById} from './actions'
import PropTypes from 'prop-types';

const InterviewShow = (match) =>{

    const interviews = useSelector(
        state => state.interviews
    );
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchInterviewById(match.match.params.id))
    }, [])

  return (
        <div>
          <h1><u>Topic: </u></h1> <h1>{interviews.topic}</h1>
          <h2><u>Start time: </u></h2> <h2>{interviews.schedule_at}</h2>
          <h2><u>End time: </u></h2> <h2>{interviews.end_time}</h2>
          <h2><u>Role: </u></h2> <h2>{interviews.role}</h2>
          <h2><u>Meeting Link: </u></h2> <h2>{interviews.meet_link}</h2>
          <h2><u>Interviewer: </u></h2> <h2>{interviews.user_name}</h2>

          <Link to={`/interviews/edit/${interviews.id}`}><button>Edit</button></Link>
          <Link to={`/interviews/delete/${interviews.id}`}><button>Delete</button></Link>
        </div>
  );
}

export default InterviewShow;