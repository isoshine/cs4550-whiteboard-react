
const initialState = {
    newTopicTitle: "",
    topics: []
};

const topicReducer = (state=initialState, action) => {
    switch(action.type) {
        case "UPDATE_TOPIC":
            return {
                ...state,
                topics: state.topics.map(
                    topic => topic._id === action.newTopic._id ?
                        action.newTopic : topic)
            };
        case "DELETE_TOPIC":
            return {
                ...state,
                topics: state.topics.filter(topic => topic._id !== action.topicId)
            };
        case "FIND_TOPICS":
            return {
                ...state,
                topics: action.actualTopics
            };
        case "ADD_TOPIC":
            return {
                ...state,
                topics: [...state.topics, action.newTopic]
            };
        default:
            return state;
    }
};

export default topicReducer;