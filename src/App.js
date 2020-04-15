import React from 'react';
import logo from './images/placeholderLogo.png';
import {Router, Route} from 'react-router-dom';
import history from './history';

import './App.css';
import EmailForm from './components/EmailForm';
import Thanks from './components/Thanks';
import Error from './components/Error';


class App extends React.Component {

    render () {
    return (
      <div className="main ui container center aligned">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
          <Router history={history}>
            <div className="container">
            <Route component={EmailForm} path="/" exact />
            <Route component={Thanks} path="/thanks" /> 
            <Route component={Error} path="/error" />
            </div>
          </Router>
        
          </div>
          <div className="copy ui container center aligned">
            &copy; 2020 
          </div>
      </div>
      );
    };
  };

export default App;
