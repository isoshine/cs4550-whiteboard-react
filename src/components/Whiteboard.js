import React from "react";
import CourseListComponent from "./CourseListComponent";

//"extends React.Component"- inheriting React's ES6
class Whiteboard extends React.Component {

    //we are overriding the render function
    render() {
        //render can only return one root element
        return (
            <div>
                <h1>Whiteboard!!</h1>
                <CourseListComponent/>
            </div>
        )
    }
}

//we are importing from CourseListComponent,
//by default we export to Whiteboard
export default Whiteboard;