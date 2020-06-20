import React from "react";

export default class ParagraphWidgetComponent extends React.Component {
    state = {
        widgetType: 'PARAGRAPH',
        editWidget: {}
    };

    render() {
        return (
            <div>
                {
                    this.state.editWidget.id === this.props.widget.id &&
                    <form>
                        <div className="form-group">
                            <textarea className="form-control"
                                      rows="3"
                                      onChange={
                                          (event) => {
                                              const newText = event.target.value;
                                              this.setState(prevState => ({
                                                  editWidget: {
                                                      ...prevState.editWidget,
                                                      text: newText
                                                  }
                                              }))
                                          }
                                      } value={this.state.editWidget.text}/>
                        </div>

                        {/*<div>*/}
                        <button onClick={() => {
                            this.props.updateWidget(this.state.editWidget.id,
                                this.state.editWidget);
                            this.setState({editWidget: {}})
                        }} type="button"
                                className="btn btn-primary">
                            Save
                        </button>

                        <button onClick={() => this.props.deleteWidget(this.props.widget.id)}
                                type="button"
                                className="btn btn-danger">
                            Delete
                        </button>
                        {/*</div>*/}

                        <button className="btn btn-light">
                            Up
                        </button>
                        <button className="btn btn-light">
                            Down
                        </button>

                    </form>
                }
                {
                    this.state.editWidget.id !== this.props.widget.id &&
                    <span>
            {this.props.widget.text}
                        <button onClick={() => this.setState({editWidget: this.props.widget})}
                                type="button"
                                className="btn btn-light">
                Edit
            </button>
            </span>
                }

            </div>
        )
    }
}