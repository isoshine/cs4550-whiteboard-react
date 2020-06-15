import React from "react";
import {Link} from "react-router-dom";

class LessonTabsComponent extends React.Component {
    state = {
        newLessonTitle: "",
        editLesson: {}
    };

    componentDidMount() {
        console.log(this.props);
        this.props.findLessonsForModule(this.props.match.params.moduleId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.moduleId !== this.props.match.params.moduleId) {
            this.props.findLessonsForModule(this.props.match.params.moduleId)
        }
    }

    render() {
        return (
            <div>

                <h6>Belongs to Module: {this.props.match.params.moduleId}</h6>

                <ul className="wbdv-nav-tabs nav nav-tabs">
                    <li className="wbdv-nav-dropdown nav-item dropdown">

                        <a className="nav-link dropdown-toggle"
                              data-toggle="dropdown" role="button">
                            Lessons
                        </a>
                        {/*<div className="dropdown-menu">*/}
                        {
                            this.props.lessons.map(lesson =>
                            <div>
                                <a className="dropdown-item"
                                   key={lesson._id}>
                                    {
                                        this.state.editLesson._id === lesson._id &&
                                        <span>
                                            <input onChange={
                                                (event) => {
                                                    const newTitle = event.target.value;
                                                    this.setState(prevState => ({
                                                        editLesson: {
                                                            ...prevState.editLesson,
                                                            title: newTitle
                                                        }
                                                    }))
                                                }
                                            }
                                                   value={this.state.editLesson.title}/>

                                                   <button onClick={() => {
                                                       this.props.updateLesson(this.state.editLesson._id, this.state.editLesson);
                                                       this.setState({editLesson: {}})
                                                   }}
                                                           type="button"
                                                           className="btn btn-primary">Save
                                                   </button>
                                                    <button onClick={() => this.props.deleteLesson(lesson._id)}
                                                            type="button"
                                                            className="btn btn-danger">
                                                        Delete
                                                    </button>
                                        </span>
                                    }{
                                    this.state.editLesson._id !== lesson._id &&
                                    <span>
                                            <Link to={`/editor/${this.props.match.params.moduleId}
                                                       /lessons/${lesson._id}`}>
                                                {lesson.title}
                                            </Link>
                                        <button onClick={() => this.setState({editLesson: lesson})}
                                                type="button"
                                                className="btn btn-light">
                                                    Edit
                                        </button>
                                        </span>
                                }
                                </a>
                            </div>
                            )}
                        {/*</div>*/}
                    </li>
                    <li>
                        <div className="input-group">
                            <input value={this.state.newLessonTitle}
                                   className="form-control"
                                   placeholder="New Lesson Title"
                                   onChange={(event) => this.setState({
                                       newLessonTitle: event.target.value
                                   })}/>
                            <div className="input-group-append">
                                <button type="button"
                                        className="btn btn-primary"
                                        onClick={() => this.props.addLesson(
                                            this.props.match.params.moduleId,
                                            {
                                                title: this.state.newLessonTitle
                                            })}>
                                    Add
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>

            </div>
        )
    }
}

export default LessonTabsComponent;