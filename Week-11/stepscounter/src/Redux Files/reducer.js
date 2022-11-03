const initialState = {
    count:0
}
function counterReducer(currentState = initialState,action)
{
    switch(action.type)
    {
        case 'INCREMENT' : return {...currentState, count : currentState.count + 1 };
        case 'RESET' : return {...currentState, count : 0 };
        default: return currentState;
    }
}

export default counterReducer;