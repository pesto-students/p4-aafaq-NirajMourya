//import { useState } from "react";
//import { connect } from 'react-redux'
import { useSelector,useDispatch } from 'react-redux'

function Room(props)
{
    //Using State
    /*const [isOn,setOn] = useState(true);
    const lightedness = isOn ? "lit":"dark";
    function flipSwitch ()
    {
        setOn(!isOn);
    }*/
    //Using Connect
    /*function flipSwitch ()
    {
        props.dispatch({
            type:'flipSwitch'
        })
    }
    const lightedness = props.isOn ? "lit":"dark";*/
    //Using Hooks
    const isOn = useSelector((state) => state.isOn);
    const dispatch = useDispatch();
    function flipSwitch ()
    {
       dispatch({
            type:'flipSwitch'
        })
    }
    const lightedness = isOn ? "lit":"dark";
     return (
        <div className={`room ${lightedness}`}>
           The Room is {lightedness}
           <br/>
           <button onClick={flipSwitch}>Flip</button>
        </div>
     )
}

/*const mapStateToProps =(state) => ({ isOn: state.isOn })
const ConnectedRoom = connect(mapStateToProps)(Room);   

export default ConnectedRoom;*/
export default Room;