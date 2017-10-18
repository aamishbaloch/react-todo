import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(){
        super()
        this.state = {
            todos: [
                {id: 1, name: "Learn React", completed: true},
                {id: 2, name: "Learn Python", completed: false},
                {id: 3, name: "Learn Big Data", completed: false}
            ]
        }
    }
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
                        {this.state.todos.map(todo =>
                            <li key={todo.id}>
                                <input type="checkbox" defaultChecked={todo.completed}/>{todo.name}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
          </div>
        );
    }
}

export default App;
