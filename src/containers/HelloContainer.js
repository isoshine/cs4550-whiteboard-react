import React from "react";
import {connect} from "react-redux";


const HelloWorld = ({messageProperty, eventHandler}) =>
    <div>
    <h1>{messageProperty}</h1>
        <button onClick={() => eventHandler("hello 3")}>Hello</button>
    </div>;

const stateToPropertyMapper = (state) =>
    ({messageProperty: state.message});

export default connect(
    stateToPropertyMapper,
    //this function will map the property to whatever function we want
    (dispatcher) => {
        return {
            eventHandler: (message) => dispatcher({
                type: "HELLO",
                data: message
            })
        }
    }
)(HelloWorld);

