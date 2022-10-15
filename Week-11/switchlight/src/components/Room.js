import { useState } from "react";

function Room()
{
    const [isOn,setOn] = useState(true);
    const lightedness = isOn ? "lit":"dark";
    function flipSwitch ()
    {
        setOn(!isOn);
    }
     return (
        <div class={`room ${lightedness}`}>
           The Room is {lightedness}
           <br/>
           <button onClick={flipSwitch}>Flip</button>
        </div>
     )
}

export default Room;