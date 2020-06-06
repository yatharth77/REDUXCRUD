import React, {useEffect, useState} from 'react';
import './App.css';
import {Link} from  'react-router-dom';
import {connect} from 'react-redux';
import {deleteInterview} from './actions'
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';

const InterviewsDelete = (match) =>{

	const interviews = useSelector(
        state => state.interviews
    );

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(deleteInterview(match.match.params.id))
    }, [])
    window.location = "/interviews";
    
    return (
        <div></div>
      );
}
export default InterviewsDelete;