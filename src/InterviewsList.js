import React from 'react';
import PropTypes from 'prop-types';
import {Link} from  'react-router-dom';

// import InterviewCard from './InterviewCard';

function InterviewsList({ interviews }){
	// console.log(interviews[0]);
			{/* step 9 : this funtion is called from InterviewsPage Class and interviews contain the data*/}
	const emptyMessage = (
			<p> There are no interviews yet in you collection </p>
		);
	const interviewsList = (
		<div>
			{interviews.map(item => (
	     		<h1 key={item.id}>
	          <Link to={`/interviews/show/${item.id}`}>{item.id} {item.topic}</Link>
	        </h1>
	     	))}
		</div>
	)
		 		{/* step 6 - declaring two variables */}
	return (
		<div>
			{interviews.length == 0 ? emptyMessage : interviewsList}
					{/* applying ternary operator depending on condition */}
		</div>
	);

}


InterviewsList.propTypes = {
	interviews: PropTypes.array.isRequired
}

export default InterviewsList