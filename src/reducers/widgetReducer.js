const initialState = {
    widgets: [
        {id: 123, name: "A"},
        {id: 345, name: "B"},
        {id: 456, name: "C"}
    ]
};

const widgetReducer = (state=initialState, action) => {
    switch(action.type) {
        case "DELETE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            };
        case "CREATE_WIDGET":
            return {
                ...state,
                widgets: [...state.widgets, action.widget]
            };
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