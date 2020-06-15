import React from "react";
import {Link} from "react-router-dom";

class TopicPillsComponent extends React.Component {
    state = {
        newTopicTitle: "",
        editTopic: {}
    };

    componentDidMount() {
        this.props.findTopicsForLesson(this.props.match.params.lessonId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.lessonId !== this.props.match.params.lessonId) {
            this.props.findTopicsForLesson(this.props.match.params.lessonId)
        }
    }

    render() {
        return (
            <div>

                <h6>Belongs to Lesson: {this.props.match.params.lessonId}</h6>

                <ul className="wbdv-nav-pills nav nav-pills nav-fill">
                    {this.props.topics.map(topic =>
                        <div>
                            <li key={topic._id}
                                className="wbdv-nav-item nav-item">
                                {
                                    this.state.editTopic._id === topic._id &&
                                    <span>
                                        <input onChange={
                                            (event) => {
                                                const newTitle = event.target.value;
                                                this.setState(prevState => ({
                                                    editTopic: {
                                                        ...prevState.editTopic,
                                                        title:newTitle
                                                    }
                                                }))
                                            }
                                        }
                                               value={this.state.editTopic.title}/>
                                        <button type="button"
                                           className="btn btn-primary"
                                           onClick={() => {
                                           this.props.updateTopic(this.state.editTopic._id,
                                               this.state.editTopic);
                                           this.setState({editTopic: {}})}}>
                                            Save
                                        </button>
                                        <button type="button"
                                           className="btn btn-danger"
                                           onClick={() => this.props.deleteTopic(topic._id)}>
                                            Delete
                                        </button>
                                    </span>
                                }
                                {
                                    this.state.editTopic._id !== topic._id &&
                                    <span>
                                        <Link to={`/editor/${this.props.match.params.lessonId}
                                                   /topics/${topic._id}`}>
                                            {topic.title}
                                        </Link>

                                        <button onClick={() => this.setState({editTopic:topic})}
                                                type="button"
                                                className="btn btn-light">
                                            Edit
                                        </button>
                                    </span>
                                }
                            </li>
                        </div>
                    )}
                </ul>

                <div className="input-group">
                    <input value={this.state.newTopicTitle}
                           className="form-control"
                           placeholder="New Topic Title"
                           onChange={(event) => this.setState({
                               newTopicTitle: event.target.value
                           })}/>
                    <div className="input-group-append">
                        <button type="button"
                                className="btn btn-primary"
                                onClick={() => this.props.addTopic(
                                    this.props.match.params.lessonId,
                                    {
                                        title: this.state.newTopicTitle
                                    })}>
                            Add
                        </button>
                    </div>
                </div>

            </div>
        )
    }
}

export default TopicPillsComponent;