import React from "react";
import {Link} from "react-router-dom";
import ModuleListContainer from "./ModuleListContainer";
import LessonTabsContainer from "./LessonTabsContainer";
import TopicPillsContainer from "./TopicPillsContainer";
import courseService from "../services/CourseService";


//if i need to maintain a state, then i must be a class
//if i do not need to maintain a state, then i can be a function

const CourseEditorContainer = ({match}) => {
    return (
        <div className="container">
            {/*{match.params.courseId}*/}
            {/*match.params.moduleId*/}

            <Link to="/table/courses">
                Back
            </Link>

            {courseService.findCourseById(match.params.courseId).title}

            <h2 className="wbdv-course-title">CS 4550</h2>
            <div>
                <div className="row">

                    <div className=" wbdv-module-list col-4 col-lg-3 col-md-4">
                        <ModuleListContainer {...match}/>
                    </div>

                    <div className="col-8 col-lg-9 col-md-8">
                        <br/>

                        <div className="wbdv-lesson-tabs container horizontal-scrollable">
                            <div className="row text-center">
                                <LessonTabsContainer {...match}/>
                            </div>
                        </div>

                        <br/>
                        <div className="wbdv-topic-pills container horizontal-scrollable">
                            <div className="row text-center">
                                <TopicPillsContainer {...match}/>
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