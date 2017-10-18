/**
 * Created by aamish on 18/10/2017.
 */
import React from "react"
import {TodoItem} from "./todoItem"


export const TodoList = (props) => (
    <div className="todo-list">
        <ul>
            {props.todos.map(todo => <TodoItem key={todo.id} {...todo}/>)}
        </ul>
    </div>
)
