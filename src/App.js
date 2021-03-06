import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from "./components/todo"

class App extends Component {
    constructor(){
        super()
        this.state = {
            todos: [
                {id: 1, name: "Learn React", completed: true},
                {id: 2, name: "Learn Python", completed: false},
                {id: 3, name: "Learn Big Data", completed: false}
            ],
            currentTodo: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event){
        this.setState({
            currentTodo: event.target.value
        })
    }

    render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React TODO App</h1>
            </header>
            <div className="todo-app">
                <TodoForm handleInputChange={this.handleInputChange} currentTodo={this.state.currentTodo}/>
                <TodoList todos={this.state.todos}/>
            </div>
          </div>
        );
    }
}

export default App;
