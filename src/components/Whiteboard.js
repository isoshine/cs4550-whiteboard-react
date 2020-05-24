import React from "react";
import CourseListContainer from "../containers/CourseListContainer";
import CourseEditor from "./CourseEditor";
import {BrowserRouter, Route} from "react-router-dom";

//"extends React.Component"- inheriting React's ES6
class Whiteboard extends React.Component {

    //we are overriding the render function
    render() {
        //render can only return one root element
        return (
            <BrowserRouter>
                <div>
                    <h1>Whiteboard</h1>

                    <Route path="/courses"
                           component={CourseListContainer}/>

                    {/* :layout is a variable */}
                    <Route path="/:layout/courses"
                           component={CourseListContainer}/>


                    <Route path="/editor"
                           component={CourseEditor}/>

                </div>
            </BrowserRouter>
        )
    }
}

//we are importing from CourseListContainer,
//by default we export to Whiteboard
export default Whiteboard;