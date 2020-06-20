import React from "react";
import HeadingWidgetComponent from "./widgets/HeadingWidgetComponent";
import ParagraphWidgetComponent from "./widgets/ParagraphWidgetComponent";

class WidgetComponent extends React.Component {
    state = {
        editWidget: {}
    };

    componentDidMount() {
        //console.log(this.props);
        this.props.findWidgetsForTopic(this.props.match.params.topicId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.topicId !== this.props.match.params.topicId) {
            this.props.findWidgetsForTopic(this.props.match.params.topicId)
        }
    }

    render() {
        return (
            <div className="container">
                <ul className="list-group">
                    {
                        this.props.widgets.map(widget =>
                            <div>
                                <div key={widget.id}
                                     className="list-group-item">
                                    {
                                        widget.type === "HEADING" &&
                                        <HeadingWidgetComponent widget={widget}
                                                                updateWidget={this.props.updateWidget}
                                                                deleteWidget={this.props.deleteWidget}
                                        />
                                    }
                                    {
                                        widget.type === "PARAGRAPH" &&
                                        <ParagraphWidgetComponent widget={widget}
                                                                  updateWidget={this.props.updateWidget}
                                                                  deleteWidget={this.props.deleteWidget}
                                        />
                                    }

                                </div>
                            </div>
                        )
                    }
                </ul>
                <button className="btn btn-light"
                        onClick={() => this.props.createWidget(this.props.match.params.topicId,{
                    type: "HEADING", text: "New Heading"
                })}>
                    New Heading
                </button>
                <button className="btn btn-light"
                        onClick={() => this.props.createWidget(this.props.match.params.topicId,{
                            type: "PARAGRAPH", text: "I am a new paragraph."
                        })}>
                    New Paragraph
                </button>
            </div>
        )
    }
}


export default WidgetComponent;