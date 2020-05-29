import React from "react";
import {Link} from "react-router-dom";
import courseService from "../services/CourseService";

export default class CourseCardComponent extends React.Component {
    state = {
        edit: false,
        course: this.props.course
    };

    setEdit = (edit) =>
        this.setState({edit: edit});

    save = () => {
        courseService.updateCourse(
            this.state.course._id,
            this.state.course)
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

            <div className={this.state.edit ? "card border-secondary col mb-4" : "col mb-4"}
                 key={this.props.course._id}>

                <div className="card bg-light">
                    <h3 className="card-title text-center">

                        <div>
                            {!this.state.edit &&
                            <Link to={`/editor/${this.state.course._id}`}>
                                {this.state.course.title}
                            </Link>}
                        </div>
                        <div>
                            {this.state.edit &&
                            <input className="form-control"
                                   onChange={(event) => this.updateCourseTitle(event.target.value)}
                                   value={this.state.course.title}/>
                            }
                        </div>
                    </h3>

                    <div className="card-body">
                        <p className="card-text">Owner: {this.state.course.owner}</p>
                        <p className="card-text">
                            <small className="text-muted">
                                Last Modified: {this.state.course.modified}
                            </small>
                        </p>
                        <div>
                            {!this.state.edit &&
                            <button className="btn btn-secondary"
                                    onClick={() => this.setEdit(true)}>
                                Edit
                            </button>}
                            {this.state.edit &&
                            <span>
                                <button className="btn btn-primary"
                                        onClick={this.save}>
                                Save
                                </button>
                                <button className="btn btn-danger"
                                        onClick={() => this.props.deleteCourse(this.props.course)}>
                                Delete
                                </button>
                            </span>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}