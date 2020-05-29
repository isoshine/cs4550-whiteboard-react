import React from "react";
import {Link} from "react-router-dom";
import courseService from "../services/CourseService";

export default class CourseRowComponent extends React.Component {
    //the local state field will show whether an element is currently being "edited" or not
    state = {
        edit: false,

        //this is our own copy of course
        course: this.props.course
    };

    //function to set the local state editing to T/F
    setEdit = (edit) =>
        this.setState({edit: edit});


    save = () => {
        courseService.updateCourse(
            this.state.course._id,
            //our course should already have the new title
            this.state.course)
            //after status comes back as positive, we can set the setEdit to false
            .then(status => this.setEdit(false))
    };

    updateCourseTitle = (newTitle) =>
        this.setState(prevState => ({
            course: {
                ...prevState.course,
                title: newTitle
            }
        }));

    render() {
        return (
            //reminder: props are read only !!!
        <tr className={this.state.edit ? "table-secondary": ""} key={this.props.course._id}>
            <td>
                {/*Making the title and input field mutually exclusive to each other
                if the state is not in edit-mode, show title
                if the state is in edit-mode, show input field*/}
                {!this.state.edit &&
                    // below code = "/editor/"+ this.state.course._id
                    <Link to={`/editor/${this.state.course._id}`}>
                        {this.state.course.title}
                    </Link>
                        }


                {this.state.edit && <input
                    className="wbdv-form wbdv-input form-control"
                    onChange={(event) => this.updateCourseTitle(event.target.value)}
                    value={this.state.course.title}/>}
            </td>

            <td>{this.state.course.owner}</td>
            <td>{this.state.course.modified}</td>
            <td>
                {!this.state.edit &&
                <button
                    className="wbdv-btn wbdv-edit btn btn-secondary"
                    onClick={() => this.setEdit(true)}>Edit</button>
                }

                {this.state.edit &&
                <span>
                    <button
                        className="wbdv-btn wbdv-save btn btn-primary"
                        onClick={this.save}>Save</button>
                    <button
                        className="wbdv-btn wbdv-delete btn btn-danger"
                        onClick={() => this.props.deleteCourse(this.props.course)}>
                        Delete
                </button>
                </span> }
            </td>
        </tr>
        )
    }
}