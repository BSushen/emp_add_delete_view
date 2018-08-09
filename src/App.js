import React, { Component } from 'react';
import EmpList from './components/employee/emp-list';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <EmpList /> 
      </div>
    );
  }
}

export default App;
