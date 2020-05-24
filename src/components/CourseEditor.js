import React from "react";
import LessonTabsComponent from "./LessonTabsComponent";
import ModuleListComponent from "./ModuleListComponent";
import {Link} from "react-router-dom";

//if i need to maintain a state, then i must be a class
//if i do not need to maintain a state, then i can be a function

//stateless component
const CourseEditor = () => {
    return (
        <div>
            <Link to="/courses">
                Back
            </Link>

            <h2>Course Editor</h2>
            <div className="row">
                <div className="col-4">
                    <ModuleListComponent/>
                </div>

                <div className="col-8">
                    <LessonTabsComponent/>
                    <h4>Topic Pills</h4>
                    <h4>Widget List</h4>
                </div>
            </div>

        </div>
    )
};


export default CourseEditor;