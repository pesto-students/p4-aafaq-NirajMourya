import { connect } from 'react-redux'

function StepCounter(props)
{
   return (
        <div >
            <p className="DisplayText"><b>You've walked {props.count} today!</b></p>
            <button className="Add" onClick={() =>
                    { 
                        props.dispatch({
                        type: 'INCREMENT'
                        });
                    }}>
                Add a Step
            </button >
            <button onClick={() =>
                    { 
                        props.dispatch({
                        type: 'RESET'
                        });
                    }}>
                Reset Steps
            </button>
        </div>
   );
}
const mapStateToProps =(state) => ({ count: state.count })
const ConnectedStepCounter = connect(mapStateToProps)(StepCounter);   

export default ConnectedStepCounter;