import React from "react";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import courseService from "../services/CourseService";

//the course list is playing the role of a container

class CourseListContainer extends React.Component {
    state = {
        layout: this.props.match.params.layout,
        //empty array, placeholder to replace with fetched data from server
        courses: [],
        newCourseTitle: ""
    };

    componentDidMount() {
        //playing the role of the controller
        courseService.findAllCourses()
            //then we set the state
            .then(actualArrayOfCourses => this.setState({courses: actualArrayOfCourses}))
    };

    //function that gets notified when any of the properties changes because of some outside information change
    componentDidUpdate(prevProp, prevState, snapshot) {
        if(prevProp.match.params.layout !== this.props.match.params.layout) {
            this.setState({
                layout:this.props.match.params.layout
            })
        }
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
            //we dont need this anymore bc the service will create this for us
            //_id: (new Date()).getMilliseconds() + "",
            title: title,
            owner: "me",
            modified: (new Date()).toDateString()
        };

        courseService.createCourse(newCourse).then(theActualNewCourse =>
            this.setState((prevState) => {
                return {
                    //new syntax: adding a new course onto an array of previous courses
                    courses: [
                        ...prevState.courses,
                        theActualNewCourse]
                }
            }))
    };

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status => this.setState((prevState) => {
                return ({
                    courses: prevState.courses.filter(course => {
                        return course !== courseToDelete
                    })
                })
            }))
    };

    render() {
        return (
            <div>
                <h2>My Courses</h2>

                <div className="wbdv-input wbdv-form input-group mb-3">
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
                            className="wbdv-btn wbdv-add btn btn-primary"
                            onClick={() => this.addCourse(" " + this.state.newCourseTitle)}>
                            Add Course
                        </button>
                    </div>
                </div>

                {this.state.layout === "table" &&
                <div>
                    <button
                        className="wbdv-btn wbdv-grid btn btn-light"
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
                        className="wbdv-btn wbdv-table btn btn-light"
                        onClick={() => this.setLayout("table")}>
                        Table
                    </button>
                    <CourseGridComponent
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </div>
                }
            </div>
        )
    }
}

export default CourseListContainer;
