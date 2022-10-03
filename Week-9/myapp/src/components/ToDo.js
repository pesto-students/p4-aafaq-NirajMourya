import React, {useState, useRef, useEffect} from "react";
import classes from './ToDo.css'

function ToDo(props)
{
    const {id,name,completed,deleteTask,toggleTaskCompleted} = props;
    const handleSubmit = (e) => {
        e.preventDefault();
      }
   
    return (
        <div >
        <input id={id} type="checkbox" defaultChecked={completed} onChange={() => toggleTaskCompleted(id)}/>
        <div >
            <p >
                {name}
            </p>
        </div>
        <div >
            <button type="button" onClick={() => deleteTask(id)}>
                Delete </button>
        </div>
    </div>
    );
}

export default ToDo;