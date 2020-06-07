import React from "react";

const ModuleListComponent = ({modules, deleteModule, addModule, newModuleTitle, updateModuleTitle}) =>
    <div>
        <h1>Modules</h1>
        <ul className="list-group">
            {modules.map(module =>
                <div>
                    <button type="button"
                            key={module._id}
                            className="wbdv-btn list-group-item list-group-item-action">
                        {module.title}
                        <button onClick={() => deleteModule(module._id)}
                                type="button"
                                className="btn btn-danger">
                            Delete
                        </button>
                    </button>
                </div>
            )}
        </ul>

        <div className="input-group">
            <input value={newModuleTitle}
                   onChange={(event) => updateModuleTitle(event.target.value)}
                   className="form-control"/>
            <div className="input-group-append">
                <button onClick={() => addModule({
                    title: newModuleTitle,
                    _id: (new Date()).getMilliseconds() + ""
                })}
                        type="button"
                        className="btn btn-primary">
                    Add
                </button>
            </div>
        </div>
    </div>
;

export default ModuleListComponent;