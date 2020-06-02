import React, {useEffect, useState} from 'react';
import './App.css';
import {Link} from  'react-router-dom';
import {connect} from 'react-redux';
import {deleteInterview} from './actions'
import PropTypes from 'prop-types';

class InterviewsDelete extends React.Component{
  componentDidMount(){
    this.props.deleteInterview(this.props.match.params.id);
    window.location = "/interviews";
  }
  render(){
    return (
        <div></div>
      );
}
}
export default connect(null, {deleteInterview})(InterviewsDelete);