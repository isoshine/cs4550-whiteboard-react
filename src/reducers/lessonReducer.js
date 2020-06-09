
const initialState = {
    newLessonTitle: "",
    lessons: []
};

const lessonReducer = (state=initialState, action) => {
    switch(action.type) {
        case "UPDATE_LESSON":
            return {
                ...state,
                lessons: state.lessons.map(
                    lesson => lesson._id === action.newLesson._id ?
                        action.newLesson : lesson)
            };
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