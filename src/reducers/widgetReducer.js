const initialState = {
    widgets: []
};

const widgetReducer = (state=initialState, action) => {
    switch(action.type) {
        // case "MOVE_UP":
        //     return {
        //         ...state,
        //         widgets: state.widgets.map(
        //             widget => widget.widgetOrder === action.newWidget.widgetOrder ?
        //                 action.newWidget : widget
        //         )
        //     };
        case "UPDATE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.map(
                    widget => widget.id === action.newWidget.id ?
                        action.newWidget : widget)
            };
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