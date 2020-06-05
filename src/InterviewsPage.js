import React, {useEffect, useState} from 'react';
import './App.css';
import {Link} from  'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import InterviewsList from './InterviewsList'
import {fetchInterviews} from './actions'
import PropTypes from 'prop-types';

const InterviewsPage = () => {

  const interviews = useSelector(
        state => state.interviews
    );
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchInterviews())
    }, [])


  return (
    <div>
     	<h1>
     		Interviews List
     		<InterviewsList interviews={interviews} />
     		
     		<Link to = "/interviews/new"><button>Create New Interview</button></Link>
     	</h1>
    </div>
  );
}


export default  InterviewsPage;