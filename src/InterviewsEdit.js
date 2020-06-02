import React, {useEffect, useState} from 'react';
import './App.css';
import {Link} from  'react-router-dom';
import {connect} from 'react-redux';
import {fetchInterviewById, updateInterview} from './actions'
import PropTypes from 'prop-types';

class InterviewsEdit extends React.Component{
  componentDidMount(){
    this.props.fetchInterviewById(this.props.match.params.id);
  }

  handleSubmit = (e) => {
    e.preventDefault(); 
    const data = new FormData(e.target);
      var json_object   = {}
      data.forEach((value, key) => {json_object[key] = value});
      this.props.updateInterview(json_object, this.props.match.params.id);
      window.location = "/interviews";
  }
  render(){
  return (
              <form className="section" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <label>User Name:</label>
                            <input className="input" name="user_name" type="text" defaultValue = {this.props.interviews.user_name}/>
                        </p>
                    </div>
                    <div className="field">
                        <p  className="control has-icons-left has-icons-right">
                            <label htmlFor="user_id">User Id:</label>
                            <input className="input" name="user_id" type="number" defaultValue = {this.props.interviews.user_id}/>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <label>Title:</label>
                            <input className="input" name="topic" type="text" defaultValue = {this.props.interviews.topic}/>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <label>Role:</label>
                            <input className="input" name="role" type="text" defaultValue = {this.props.interviews.role}/>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <label>Start Time:</label>
                            <input className="input" name="schedule_at" type="datetime-local" defaultValue = {this.props.interviews.schedule_at}/>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <label>End Time:</label>
                            <input className="input" name="end_time" type="datetime-local" defaultValue = {this.props.interviews.end_time}/>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <label>Meeting Link:</label>
                            <input className="input" name="meet_link" type="text" defaultValue = {this.props.interviews.meet_link}/>
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
}

InterviewsEdit.propType ={
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
export default connect(mapStateToProps, {fetchInterviewById, updateInterview})(InterviewsEdit);