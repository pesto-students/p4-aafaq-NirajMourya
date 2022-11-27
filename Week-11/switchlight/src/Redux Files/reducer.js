const initialState = {
    isOn:true
}
function roomReducer(currentState = initialState,action)
{
    switch(action.type)
    {
        case 'flipSwitch' : return {...currentState, isOn : !currentState.isOn };
        default: return currentState;
    }
}

export default roomReducer;