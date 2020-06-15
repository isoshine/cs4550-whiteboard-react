import {connect} from "react-redux";
import {addTopic, findTopicsForLesson, updateTopic} from "../services/TopicService";
import TopicPillsComponent from "../components/TopicPillsComponent";
import ModuleService from "../services/ModuleService";

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
        findTopicsForLesson: (lessonId) => {
            findTopicsForLesson(lessonId)
                .then(actualTopics => dispatch({
                    type: "FIND_TOPICS",
                    actualTopics
                }))
        },
        deleteTopic: (topicId) => {
            ModuleService.deleteModule(topicId)
                .then(status => dispatch({
                    type: "DELETE_LESSON",
                    topicId
                }))
        }
    }
};

const TopicPillsContainer = connect(
    stateToPropertyMapper, dispatchToPropertyMapper
)(
    TopicPillsComponent
);

export default TopicPillsContainer;