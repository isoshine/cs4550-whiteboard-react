import React from "react";
import {connect} from "react-redux";

const CounterComponent = ({counterValue=10, increment, decrement, incValueChanged, incValue}) =>
    <div>
        <h1>Count: {counterValue}</h1>

        <input placeholder="Increment Value" onChange={incValueChanged}/>
        {incValue}

        <button onClick={() => increment(incValue)}>Increment</button>
        <button onClick={() => decrement(30)}>Decrement</button>
    </div>;


const stateToPropertyMapper = (state) => ({
    counterValue: state.counter,
    incValue: state.incValue
});

//dispatch must take in at least one json object with type detailing the type of function
const dispatchToPropertyMapper = (dispatch) => ({
        increment: (incValue) => {dispatch({type: "INCREMENT", valueInc: incValue})},
        decrement: (decValue) => {dispatch({type: "DECREMENT", valueDec: decValue})},
        incValueChanged: (event) => {dispatch({type:"INC_CHANGED", value: event.target.value})}
    }
);


//we want to grab things from the store and connect it to the CounterComponent
export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)(CounterComponent);


//export default CounterComponent;
