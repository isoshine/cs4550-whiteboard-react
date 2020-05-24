import React from "react";
import {Link} from "react-router-dom";

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

    updateCourseTitle = (newTitle) =>
        this.setState(prevState => ({
            course:
                {...prevState.course, title: newTitle}
        }));

    render() {
        return (
            //reminder: props are read only !!!
        <tr key={this.props.course._id}>
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
                    className="form-control"
                    onChange={(event) => this.updateCourseTitle(event.target.value)}
                    value={this.state.course.title}/>}
            </td>

            <td>{this.state.course.owner}</td>
            <td>{this.state.course.modified}</td>
            <td>
                {!this.state.edit &&
                <button
                    className="btn btn-secondary"
                    onClick={() => this.setEdit(true)}>Edit</button>
                }

                {this.state.edit &&
                <span>
                    <button
                        className="btn btn-primary"
                        onClick={() => this.setEdit(false)}>Save</button>
                    <button
                        className="btn btn-danger"
                        onClick={() => this.props.deleteCourse(this.props.course)}>
                        Delete
                </button>
                </span> }
            </td>
        </tr>
        )
    }
}