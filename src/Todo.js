import React from 'react'
import './style.css'
function ToDo(props)
{
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    return(
        <div className="todo-item">
            <input type="checkbox" 
                checked={props.item.completed} 
                onChange={()=> props.handleChange(props.item.id)}></input>
            <p style={props.item.completed? completedStyle: null}>{props.item.text}</p>
            <hr></hr>
            
        </div>
        
    )
}
export default ToDo