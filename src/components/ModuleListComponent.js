import React from "react";

class ModuleListComponent extends React.Component {
    state = {
        newModuleTitle: ""
    };

    render() {
        return(
            <div>
                <h1>Modules</h1>
                <ul className="list-group">
                    {this.props.modules.map(module =>
                        <div>
                            <button type="button"
                                    key={module._id}
                                    className="wbdv-btn list-group-item list-group-item-action">
                                {module.title}
                                <button onClick={() => this.props.deleteModule(module._id)}
                                        type="button"
                                        className="btn btn-danger">
                                    Delete
                                </button>
                            </button>
                        </div>
                    )}
                </ul>

                <div className="input-group">
                    <input value={this.state.newModuleTitle}
                           placeholder="New Module Title"
                           onChange={(event) => this.setState({
                               newModuleTitle: event.target.value
                           })}
                           className="form-control"/>
                    <div className="input-group-append">
                        <button onClick={() => this.props.addModule({
                            title: this.state.newModuleTitle,
                            _id: (new Date()).getMilliseconds() + ""
                        })}
                                type="button"
                                className="btn btn-primary">
                            Add
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModuleListComponent;