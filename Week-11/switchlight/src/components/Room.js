//import { useState } from "react";
import { connect } from 'react-redux'

function Room(props)
{
    /*const [isOn,setOn] = useState(true);
    const lightedness = isOn ? "lit":"dark";
    function flipSwitch ()
    {
        setOn(!isOn);
    }*/
    function flipSwitch ()
    {
        props.dispatch({
            type:'flipSwitch'
        })
    }
    const lightedness = props.isOn ? "lit":"dark";
     return (
        <div className={`room ${lightedness}`}>
           The Room is {lightedness}
           <br/>
           <button onClick={flipSwitch}>Flip</button>
        </div>
     )
}

const mapStateToProps =(state) => ({ isOn: state.isOn })
const ConnectedRoom = connect(mapStateToProps)(Room);   

export default ConnectedRoom;