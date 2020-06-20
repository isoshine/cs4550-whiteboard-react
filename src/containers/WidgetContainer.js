import {createWidget, deleteWidget, findWidgetsForTopic, updateWidget} from "../services/WidgetService";
import {connect} from "react-redux";
import WidgetComponent from "../components/WidgetComponent";

const stateToPropertyMapper = (state, ownProps) => ({
    widgets: state.widgetReducer.widgets,
    newWidgetText: state.widgetReducer.newWidgetText,
    newWidgetSize: state.widgetReducer.newWidgetSize,
    params: ownProps.params
});

const dispatchToPropertyMapper = (dispatcher) => ({
    updateWidget: (widgetId, newWidget) => {
        updateWidget(widgetId, newWidget)
            .then(actualTopic => dispatcher({
                type: "UPDATE_WIDGET",
                newWidget
            }))
    },
    deleteWidget: (widgetId) =>
        deleteWidget(widgetId)
            .then(status => dispatcher({
                type: "DELETE_WIDGET",
                widgetId: widgetId
            })),
    createWidget: (topicId, widget) =>
        createWidget(topicId, widget)
            .then(actualWidget => dispatcher({
                type: "CREATE_WIDGET",
                widget: actualWidget
            })),
    findWidgetsForTopic: (topicId) =>
        findWidgetsForTopic(topicId)
            .then(actualWidgets => dispatcher({
                type: "FIND_WIDGETS",
                widgetsFromServer: actualWidgets
            }))
});

const WidgetContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(
    WidgetComponent);

export default WidgetContainer;