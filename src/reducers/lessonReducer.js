
const initialState = {
    lessons: [
        {_id: "123", title: "lesson 1"},
        {_id: "234", title: "lesson 2"},
        {_id: "345", title: "lesson 3"}
    ]
};

const lessonReducer = (state=initialState, action) => {
    switch(action.type) {
        case "DELETE_LESSON":
            return {
                ...state,
                lessons: state.lessons.filter(lesson => lesson._id !== action.lessonId)
            };
        case "FIND_LESSONS":
            return {
                ...state,
                lessons: action.actualLessons
            };
        case "ADD_LESSON":
            return {
                ...state,
                lessons: [...state.lessons, action.newLesson]
            };
        default:
            return state;
    }
};

export default lessonReducer;