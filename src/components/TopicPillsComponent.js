import React from "react";
import {Link} from "react-router-dom";

class TopicPillsComponent extends React.Component {
    state = {
        newTopicTitle: "",
        editTopic: {}
    };

    componentDidMount() {
        this.props.findTopics(this.props.params.lessonId)
    }

    render() {
        return (
            <div>
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
                                           className="btn"
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
                                        <Link to={`/editor/${this.props.params.courseId}/modules/
                                                   ${this.props.params.moduleId}/lessons/
                                                   ${this.props.params.lessonId}/topics`}>
                                            {topic.title}
                                        </Link>

                                        <button onClick={() => this.setState({editTopic:topic})}
                                                type="button"
                                                className="btn btn-primary">
                                            Edit
                                        </button>
                                    </span>
                                }
                            </li>
                        </div>
                    )}
                </ul>
            </div>
        )
    }
}

export default TopicPillsComponent;