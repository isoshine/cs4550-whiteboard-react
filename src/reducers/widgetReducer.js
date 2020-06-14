const initialState = {
    widgets: [
        {id: 123, name: "A Widget"},
        {id: 345, name: "B Widget"},
        {id: 456, name: "C Widget"}
    ]
};

const widgetReducer = (state=initialState, action) => {
    switch(action.type) {
        case "FIND_WIDGETS":
            return {
                ...state,
                widgets: action.widgetsFromServer
            };
        default:
            return state;
    }
};

export default widgetReducer;