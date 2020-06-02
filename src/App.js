import React from 'react'; 
import logo from './logo.svg';
import './App.css';
import {Link} from  'react-router-dom';
import {BrowserRouter as Router, Switch, Route } from  'react-router-dom';
import InterviewsPage from './InterviewsPage';
import InterviewsForm from './InterviewsForm';
import InterviewsShow from './InterviewsShow';
import InterviewsEdit from './InterviewsEdit';
import InterviewsDelete from './InterviewsDelete';


function App() {
  return (
    <Router>
    <div className="App">
        <Route path="/interviews" exact component={InterviewsPage} />
       	{ /* step -1 called the link interviews which is connected to component InterviewPage */ }
        <Route path="/interviews/new" exact component={InterviewsForm} />
        <Route path="/interviews/show/:id" exact component={InterviewsShow} />
        <Route path="/interviews/edit/:id" exact component={InterviewsEdit} />
        <Route path="/interviews/delete/:id" exact component={InterviewsDelete} />

    </div>
    </Router>
  );
}

export default App;
