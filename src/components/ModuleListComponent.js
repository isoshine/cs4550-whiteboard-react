import React from "react";

const ModuleListComponent = () =>
    <div>
        <ul className="list-group">
            <button type="button" className="list-group-item list-group-item-action active">Module A</button>
            <button type="button" className="list-group-item list-group-item-action">Module B</button>
            <button type="button" className="list-group-item list-group-item-action">Module C</button>
            <button type="button" className="list-group-item list-group-item-action">Module D</button>
            <button type="button" className="list-group-item list-group-item-action">Add</button>
        </ul>
    </div>
;

export default ModuleListComponent;