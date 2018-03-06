import React, { Component } from 'react';
import './app.css';
import {CLIENT_ORIGIN} from "../config"

class App extends Component {

  componentDidMount() {
    fetch(`api/user/${CLIENT_ORIGIN}`)
    .then(json => console.log(json))
    .catch( error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
    
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
      </div>
    );
  }
}

export default App;
