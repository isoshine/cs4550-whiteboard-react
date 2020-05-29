import React from "react";
import CourseListContainer from "../containers/CourseListContainer";
import CourseEditor from "../containers/CourseEditorContainer";
import {BrowserRouter, Route} from "react-router-dom";
import HomeComponent from "./HomeComponent";
import SignInComponent from "./SignInComponent";
import SignUpComponent from "./SignUpComponent";
import ProfileComponent from "./ProfileComponent";

//"extends React.Component"- inheriting React's ES6
class Whiteboard extends React.Component {

    //we are overriding the render function
    render() {
        //render can only return one root element
        return (
            <BrowserRouter>
                <div>
                    <h1 className="wbdv-whiteboard whiteboard">Whiteboard</h1>
                    <Route path="/"
                           exact={true}
                           component={HomeComponent}/>

                    <Route path="/sign-in" exact={true} component={SignInComponent}/>
                    <Route path="/sign-up" exact={true} component={SignUpComponent}/>
                    <Route path="/profile" exact={true} component={ProfileComponent}/>


                    <Route path="/courses"
                           exact={true}
                           component={CourseListContainer}/>

                    {/* :layout is a variable */}
                    <Route path="/:layout/courses"
                           exact={true}
                           component={CourseListContainer}/>


                    <Route path="/editor"
                           //exact={true}
                           component={CourseEditor}/>

                </div>
            </BrowserRouter>
        )
    }
}

//we are importing from CourseListContainer,
//by default we export to Whiteboard
export default Whiteboard;