import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React TODO App</h1>
        </header>
        <div className="todo-app">

            <input type="text"/>

            <div className="todo-list">
                <ul>
                    <li><input type="checkbox"/>Learn React</li>
                    <li><input type="checkbox"/>Learn Python</li>
                    <li><input type="checkbox"/>Deploy App</li>
                </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
