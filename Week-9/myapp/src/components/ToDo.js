import React, {useState, useRef, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function ToDo(props)
{
    const {id,name,completed,deleteTask,toggleTaskCompleted} = props;
   
    return (  
        <div className="todoItem">
        <input id={id} className="c-cb" type="checkbox" defaultChecked={completed} onChange={() => toggleTaskCompleted(id)}/>
            <p className={completed?"todoCompleted":"todoPending"}>
                {name}
            </p>
            <button type="button" className="btn btn-labeled btn-danger" onClick={() => deleteTask(id)}>
               {/* <FontAwesomeIcon icon="fa-solid fa-trash" /> */}
               <i className="fa-solid fa-trash"></i>
               Delete
            </button>
    </div>
    );
}

export default ToDo;