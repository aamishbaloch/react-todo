/**
 * Created by aamish on 18/10/2017.
 */
import React from "react"

export const TodoForm = (props) => (
    <form>
        <input type="text"
               value={props.currentTodo}
               onChange={props.handleInputChange}/>
    </form>
)
