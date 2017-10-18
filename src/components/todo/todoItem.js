/**
 * Created by aamish on 18/10/2017.
 */
import React from "react"

export const TodoItem = (props) => (
    <li>
        <input type="checkbox" defaultChecked={props.completed}/>
        {props.name}
    </li>
)
