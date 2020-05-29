import React from "react";
import LessonTabsComponent from "../components/LessonTabsComponent";
import ModuleListComponent from "../components/ModuleListComponent";
import {Link} from "react-router-dom";
import TopicPillsComponent from "../components/TopicPillsComponent";

//if i need to maintain a state, then i must be a class
//if i do not need to maintain a state, then i can be a function

const CourseEditorContainer = () => {
    return (
        <div className="container">
            <Link to="/table/courses">
                Back
            </Link>

            <h2 className="wbdv-course-title">CS1234</h2>
            <div>
                <div className="row">

                    <div className=" wbdv-module-list col-4 col-lg-3 col-md-4">
                        <ModuleListComponent/>
                    </div>

                    <div className="col-8 col-lg-9 col-md-8">
                        <br/>

                        <div className="wbdv-lesson-tabs container horizontal-scrollable">
                            <div className="row text-center">
                                <LessonTabsComponent/>
                            </div>
                        </div>

                        <br/>
                        <div className="wbdv-topic-pills container horizontal-scrollable">
                            <div className="row text-center">
                                <TopicPillsComponent/>
                            </div>
                        </div>
                        <br/>

                    </div>
                </div>
            </div>
        </div>
    )
};


export default CourseEditorContainer;