import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {CLIENT_ORIGIN} from "./config"

class App extends Component {

  componentDidMount() {
    fetch(`api/${CLIENT_ORIGIN}`)
    // .then(res => res.json())
    .then(json => console.log(json))
    .catch( error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
