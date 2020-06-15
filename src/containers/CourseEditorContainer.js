import React from "react";
import {Link} from "react-router-dom";
import ModuleListContainer from "./ModuleListContainer";
import LessonTabsContainer from "./LessonTabsContainer";
import TopicPillsContainer from "./TopicPillsContainer";
import courseService from "../services/CourseService";
import WidgetsComponent from "../components/WidgetsComponent";


//if i need to maintain a state, then i must be a class
//if i do not need to maintain a state, then i can be a function

const CourseEditorContainer = ({match, history}) => {
    return (
        <div className="container">
            {/*{match.params.courseId}*/}

            <Link to="/table/courses">
                Back
            </Link>

            {/*{courseService.findCourseById(match.params.courseId).title}*/}

            <h2 className="wbdv-course-title">CS 4550</h2>
            <div>
                <div className="row">

                    <div className=" wbdv-module-list col-4 col-lg-3 col-md-4">
                        <ModuleListContainer match={match} history={history}/>
                    </div>

                    <div className="col-8 col-lg-9 col-md-8">
                        <div className="wbdv-lesson-tabs container horizontal-scrollable">
                            <div className="row text-center">
                                <LessonTabsContainer match={match} history={history}/>
                            </div>
                        </div>

                        <div className="wbdv-topic-pills container horizontal-scrollable">
                            <div className="row text-center">
                                <TopicPillsContainer match={match} history={history}/>
                            </div>
                        </div>

                        <WidgetsComponent/>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default CourseEditorContainer;