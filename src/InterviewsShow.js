import React, {useEffect, useState} from 'react';
import './App.css';
import {Link} from  'react-router-dom';
import {connect} from 'react-redux';
import {fetchInterviewById} from './actions'
import PropTypes from 'prop-types';

class InterviewShow extends React.Component{
  componentDidMount(){
    this.props.fetchInterviewById(this.props.match.params.id);
  }
  render(){
  console.log(this.props.match.params.id);
  return (
        <div>
          <h1><u>Topic: </u></h1> <h1>{this.props.interviews.topic}</h1>
          <h2><u>Start time: </u></h2> <h2>{this.props.interviews.schedule_at}</h2>
          <h2><u>End time: </u></h2> <h2>{this.props.interviews.end_time}</h2>
          <h2><u>Role: </u></h2> <h2>{this.props.interviews.role}</h2>
          <h2><u>Meeting Link: </u></h2> <h2>{this.props.interviews.meet_link}</h2>
          <h2><u>Interviewer: </u></h2> <h2>{this.props.interviews.user_name}</h2>

          <Link to={`/interviews/edit/${this.props.interviews.id}`}><button>Edit</button></Link>
          <Link to={`/interviews/delete/${this.props.interviews.id}`}><button>Delete</button></Link>
        </div>
  );
}
}

InterviewShow.propType ={
  interviews: PropTypes.array.isRequired,
  fetchInterviews: PropTypes.func.isRequired
} 

function mapStateToProps(state){
  console.log("Inside mapStateToProps");
  console.log(state.interviews);
  return{
    interviews: state.interviews
  }
}
export default connect(mapStateToProps, {fetchInterviewById})(InterviewShow);