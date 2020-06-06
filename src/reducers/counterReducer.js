const counterReducer = (state, action) => {
    if(action.type === "INCREMENT") {
        return {
            counter: state.counter + action.valueInc
        }
    }
    else if(action.type === "DECREMENT") {
        return {
            counter: state.counter - action.valueDec
        }
    }
    else if(action.type === "INC_CHANGED") {
        return {
            ...state,
            incValue: parseInt(action.value)
        }
    }
    else {
        return {
            counter: 0
        }
    }
};

export default counterReducer;