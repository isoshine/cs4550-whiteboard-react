import {connect} from "react-redux";
import {addTopic, findTopics, updateTopic} from "../services/TopicService";
import TopicPillsComponent from "../components/TopicPillsComponent";

const stateToPropertyMapper = (state, ownProps) => ({
    topics: state.topicReducer.topics,
    newTopicTitle: state.topicReducer.newTopicTitle,
    params: ownProps.params
});

const dispatchToPropertyMapper = (dispatch) => {
    return {
        updateTopic: (topicId, newTopic) => {
            updateTopic(topicId, newTopic)
                .then(actualLesson => dispatch({
                    type: "UPDATE_TOPIC",
                    newTopic
                }))
        },
        addTopic: (lessonId, newTopic) => {
            addTopic(lessonId, newTopic)
                .then(actualTopic => dispatch({
                    type: "ADD_TOPIC",
                    newTopic
                }))
        },
        findTopics: (lessonId) => {
            findTopics(lessonId)
                .then(actualTopics => dispatch({
                    type: "FIND_TOPICS",
                    actualTopics
                }))
        },
        deleteTopic: (topicId) => {
            dispatch({
                type: "DELETE_TOPIC",
                topicId
            })
        }
    }
};

const TopicPillsContainer = connect(
    stateToPropertyMapper, dispatchToPropertyMapper
)(
    TopicPillsComponent
);

export default TopicPillsContainer;