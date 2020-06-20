import React from "react";

class HeadingWidgetComponent extends React.Component {
    state = {
        widgetType: 'HEADING',
        editWidget: {}
    };

    render() {
        return (
            <div>
                {
                    this.state.editWidget.id === this.props.widget.id &&
                    <form>
                        <div className="form-group">
                            <input className="form-control" onChange={
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
                        <div className="form-group">
                            <label for="size">Size</label>
                            <select id="size"
                                    className="form-control"
                                    onChange={(event) => {
                                        const newSize = event.target.value;
                                        this.setState(prevState => ({
                                            editWidget: {
                                                ...prevState.editWidget,
                                                size: parseInt(newSize)
                                            }
                                        }));
                                    }}>
                                <option value="1" className="form-control">Heading 1</option>
                                <option value="2" className="form-control">Heading 2</option>
                                <option value="3" className="form-control">Heading 3</option>
                                <option value="4" className="form-control">Heading 4</option>
                                <option value="5" className="form-control">Heading 5</option>
                                <option value="6" className="form-control">Heading 6</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <select id="type"
                                    className="form-control"
                                    onChange={(event) => {
                                        const newType = event.target.value;
                                        this.setState(prevState => ({
                                            editWidget: {
                                                ...prevState.editWidget,
                                                type: newType
                                            }
                                        }));
                                    }}>
                                <option value="PARAGRAPH" className="form-control">Paragraph</option>
                                <option value="HEADING" className="form-control">Heading</option>
                            </select>
                        </div>

                        <button onClick={() => {
                            this.props.updateWidget(this.state.editWidget.id,
                                this.state.editWidget);
                            this.setState({editWidget: {}})
                        }}
                                type="button"
                                className="btn btn-primary">
                            Save
                        </button>

                        <button onClick={() => this.props.deleteWidget(this.props.widget.id)}
                                type="button"
                                className="btn btn-danger">
                            Delete
                        </button>

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
                        {
                            this.props.widget.size === 1 &&
                            <h1>{this.props.widget.text}</h1>
                        }
                        {
                            this.props.widget.size === 2 &&
                            <h2>{this.props.widget.text}</h2>
                        }
                        {
                            this.props.widget.size === 3 &&
                            <h3>{this.props.widget.text}</h3>
                        }
                        {
                            this.props.widget.size === 4 &&
                            <h4>{this.props.widget.text}</h4>
                        }
                        {
                            this.props.widget.size === 5 &&
                            <h5>{this.props.widget.text}</h5>
                        }
                        {
                            this.props.widget.size === 6 &&
                            <h6>{this.props.widget.text}</h6>
                        }


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

export default HeadingWidgetComponent;