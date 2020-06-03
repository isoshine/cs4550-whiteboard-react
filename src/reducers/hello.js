//reducer takes 2 arguments: 1. current state and 2. action
const hello = (state, action) => {
    //alert("Hello from Reducer " + action.type);
    if (action.type === "HELLO") {
        return {message: action.data}
    }
    else {
        return {message: "hello 2"}
    }
};

export default hello;