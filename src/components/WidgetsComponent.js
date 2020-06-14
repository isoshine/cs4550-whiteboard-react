import React from "react";
import {connect} from "react-redux";
import {findWidgets} from "../services/WidgetService";

class WidgetsComponent extends React.Component {

    componentDidMount() {
        this.props.findWidgets("t1")
    }

    render() {
        return (
            <div>
                <h4>Widgets</h4>
                <ul>
                    {
                        this.props.widgets.map(widget =>
                            <li key={widget.id}>{widget.name}</li>)
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
            widgets: actualWidgets
        }))
});

export default connect(stateToPropertyMapper,
    dispatchToPropertyMapper
)(
    WidgetsComponent);