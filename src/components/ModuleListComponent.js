import React from "react";

class ModuleListComponent extends React.Component {
    state = {
        newModuleTitle: "",
        editModule: {}
    };

    componentDidMount() {
        this.props.findAllModules();
    }

    render() {
        return (
            <div>
                <h1>Modules </h1>
                <ul className="list-group">
                    {this.props.modules.map(module =>
                        <div key={module._id}>
                            <div key={module._id}
                                 className="wbdv-btn btn list-group-item list-group-item-action">

                                {
                                    this.state.editModule._id === module._id &&
                                    <span>
                                        <input onChange={
                                            (event) => {
                                                const newTitle = event.target.value;
                                                this.setState(prevState => ({
                                                    editModule: {
                                                        ...prevState.editModule,
                                                        title: newTitle
                                                    }
                                                }))
                                            }
                                        }
                                               value={this.state.editModule.title}/>

                                        <button onClick={() => {
                                            this.props.updateModule(this.state.editModule._id, this.state.editModule);
                                            this.setState({editModule: {}})}
                                        }
                                                type="button"
                                                className="btn btn-primary">
                                            Save
                                        </button>
                                        <button onClick={() => this.props.deleteModule(module._id)}
                                                type="button"
                                                className="btn btn-danger">
                                             Delete
                                        </button>
                                        </span>
                                }
                                {
                                    this.state.editModule._id !== module._id &&
                                    <span>
                                        {module.title}
                                        <button onClick={() => this.setState({editModule: module})}
                                                type="button"
                                                className="btn btn-primary">
                                                    Edit
                                        </button>
                                    </span>
                                }
                            </div>
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
                            title: this.state.newModuleTitle
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