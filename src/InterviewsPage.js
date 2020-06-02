import React, {useEffect, useState} from 'react';
import './App.css';
import {Link} from  'react-router-dom';
import {connect} from 'react-redux';
import InterviewsList from './InterviewsList'
import {fetchInterviews} from './actions'
import PropTypes from 'prop-types';

class InterviewsPage extends React.Component{
  componentDidMount(){
  	this.props.fetchInterviews();
  			{/* step 3 - call fetchInterviews function {control passes to fetchInterviews in action.js} */}
  }
  render(){
  return (
    <div>
     	<h1>
     		Interviews List
     		<InterviewsList interviews={this.props.interviews} />
     		{/* step 8 - Calling InterviewList.js and passing local variable interviews*/}
     		
     		<Link to = "/interviews/new"><button>Create New Interview</button></Link>
     	</h1>
    </div>
  );
}
}


InterviewsPage.propType ={
	interviews: PropTypes.array.isRequired,
	fetchInterviews: PropTypes.func.isRequired
} 
{/* step 7 - Gives shape of array to local interviews variable */}

function mapStateToProps(state){
	// console.log(state.interviews);
	{/* step 6 - assign state[""the fetched data""](recived from reducer to local variable */}
	return{
		interviews: state.interviews
	}
}

export default connect(mapStateToProps, {fetchInterviews})(InterviewsPage);
{/* step 2 this statement mounts fetchInterviews(actions.js) to InterviewsPage Class and passes control in InterviewsPage Class */}