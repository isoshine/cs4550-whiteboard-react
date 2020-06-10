import React from "react";
import {Link} from "react-router-dom";

class LessonTabsComponent extends React.Component {
    state = {
        newLessonTitle: "",
        editLesson: {}
    };

    componentDidMount() {
        this.props.findLessons(this.props.params.moduleId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.params.moduleId !== this.props.params.moduleId) {
            this.props.findLessons(this.props.params.moduleId)
        }
    }

    render() {
        return(
            <div>
                <ul className="wbdv-nav-tabs nav nav-pills nav-fill">
                    {
                        this.props.lessons.map(lesson =>
                            <li className="wbdv-nav-item nav-item"
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
                                }
                                {
                                    this.state.editLesson._id !== lesson._id &&
                                    <span>
                                        <Link to={`/editor/${this.props.params.courseId}/modules/
                                                   ${this.props.params.moduleId}/lessons/${lesson._id}`}>
                                            {lesson.title}
                                         </Link>

                                        <button onClick={() => this.setState({editLesson: lesson})}
                                                type="button"
                                                className="btn btn-primary">
                                            Edit
                                        </button>
                                    </span>

                                }
                            </li>
                        )
                    }
                </ul>

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
                            this.props.params.moduleId,
                            {
                                title: this.state.newLessonTitle
                            })}>
                            Add
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default LessonTabsComponent;