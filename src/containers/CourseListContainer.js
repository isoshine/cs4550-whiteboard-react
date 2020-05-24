import React from "react";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";

//the course list is playing the role of a container

class CourseListContainer extends React.Component {
    state = {
        layout: this.props.match.params.layout,
        //there is an expectation that this static data will eventually be dynamic
        courses: [
            {_id: "1", title: "cs4550", owner: "me", modified: "1/1/2020"},
            {_id: "2", title: "cs4500", owner: "john", modified: "1/1/2020"},
            {_id: "3", title: "cs3000", owner: "abby", modified: "1/1/2020"},
            {_id: "4", title: "cs3500", owner: "jose", modified: "1/1/2020"},
        ],
        newCourseTitle: "New Title"
    };

    //new syntax for ES6; this code is === to
    //function setLayout() {}
    setLayout = (layout) => {
        //dont do: this.state.layout = layout;

        //this.setState({
        //    layout:layout
        //})
        //instead of changing the state, we want to change the URL

        this.props.history.push(`/${layout}/courses`)
    };

    addCourse = (title) => {
        const newCourse = {
            _id: (new Date()).getMilliseconds() + "",
            title: title,
            owner: "me",
            modified: (new Date()).toDateString()
        };

        this.setState((prevState) => {
            return {
                //new syntax: adding a new course onto an array of previous courses
                courses: [
                    ...prevState.courses,
                    newCourse]
            }
        })
    };

    deleteCourse = (courseToDelete) => {
        this.setState((prevState) => {
            return ({
                courses: prevState.courses.filter(course => {
                    return course !== courseToDelete
                })
            })
        })
    };


    render() {
        return (
            <div>
                <h2>Course List</h2>

                <div className="input-group mb-3">
                    <input
                        className="form-control"
                        type="text"
                        onChange={(event) => this.setState({
                            newCourseTitle: event.target.value
                        })}
                        value={this.state.newCourseTitle}
                        placeholder="Course Title"/>
                    <div className="input-group-append">
                        <button
                            className="btn btn-primary"
                            onClick={() => this.addCourse(" " + this.state.newCourseTitle)}>
                            Add Course
                        </button>
                    </div>
                </div>

                {this.state.layout === "table" &&
                <div>
                    <button
                        className="btn btn-light"
                        onClick={() => this.setLayout("grid")}>
                        Grid
                    </button>
                    <CourseTableComponent
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </div>
                }
                {this.state.layout === "grid" &&
                <div>
                    <button
                        className="btn btn-light"
                        onClick={() => this.setLayout("table")}>
                        Table
                    </button>
                    <CourseGridComponent courses={this.state.courses}/>
                </div>
                }
            </div>
        )
    }
}

export default CourseListContainer;
