import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <List />
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
