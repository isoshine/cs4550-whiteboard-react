import React from "react";
import {connect} from "react-redux";
import {findWidgets} from "../services/WidgetService";
import HeadingWidgetComponent from "./widgets/HeadingWidgetComponent";
import ParagraphWidgetComponent from "./widgets/ParagraphWidgetComponent";

class WidgetsComponent extends React.Component {

    componentDidMount() {
        //TODO: MATCH.PARAMS
        const topicId = "t1";
        this.props.findWidgets(topicId)
    }

    render() {
        return (
            <div>
                <h4>Widgets</h4>
                <ul>
                    {
                        this.props.widgets.map(widget =>
                            <li key={widget.id}>
                                {widget.type}
                                {
                                    widget.type === "HEADING" &&
                                        <HeadingWidgetComponent/>
                                }
                                {
                                    widget.type === "PARAGRAPH" &&
                                    <ParagraphWidgetComponent/>
                                }
                            </li>)
                    }
                </ul>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    widgets: state.widgetReducer.widgets
});

const dispatchToPropertyMapper = (dispatcher) => ({
    findWidgets: (topicId) => findWidgets(topicId)
        .then(actualWidgets => dispatcher({
            type: "FIND_WIDGETS",
            widgetsFromServer: actualWidgets
        }))
});

export default connect(stateToPropertyMapper,
    dispatchToPropertyMapper
)(
    WidgetsComponent);