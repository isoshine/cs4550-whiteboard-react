import React from "react";

class LessonTabsComponent extends React.Component {
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
            <div className="tabbable">
                <ul className="wbdv-nav-tabs nav nav-tabs">
                    {
                        this.props.lessons.map(lesson =>
                            <li className="wbdv-nav-item nav-item"
                                key={lesson._id}>
                                {lesson.title}

                                <button
                                    onClick={() => this.props.deleteLesson(lesson._id)}>
                                    Delete
                                </button>
                            </li>
                        )
                    }
                </ul>
                <button onClick={() => this.props.addLesson(
                    this.props.params.moduleId,
                    {
                        title: 'New Lesson'
                    })}>
                    Add
                </button>
            </div>
        )
    }
}

export default LessonTabsComponent;