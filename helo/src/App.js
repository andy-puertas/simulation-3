import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import routes from './routes';
import './App.css';
//import {withRouter} from 'react-router-dom';

class App extends Component {
  render() {
  //console.log(this.props.location.pathname);
    return (
      <div className="App">
        <Nav />
        { routes }
      </div>
    );
  }
}

export default App;
