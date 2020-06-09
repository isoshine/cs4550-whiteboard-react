import {connect} from "react-redux";
import LessonTabsComponent from "../components/LessonTabsComponent";
import {addLesson, findLessons, deleteLesson, updateLesson} from "../services/LessonService";

//same as ModuleListContainer, more modern syntax
const stateToPropertyMapper = (state) => ({
    lessons: state.lessonReducer.lessons
});

const dispatchToPropertyMapper = (dispatch) => {
    return {
        updateLesson: (lessonId, newLesson) => {
            updateLesson(lessonId, newLesson)
                .then(actualLesson => dispatch({
                    type: "UPDATE_LESSON",
                    newLesson
                }))
        },
        addLesson: (moduleId, newLesson) => {
            addLesson(moduleId, newLesson)
                .then(actualLesson => dispatch({
                    type: "ADD_LESSON",
                    newLesson
                }))
        },
        findLessons: (moduleId) => {
            findLessons(moduleId)
                .then(actualLessons => dispatch({
                    type: "FIND_LESSONS",
                    actualLessons
                }))
        },
        deleteLesson: (lessonId) => {
            dispatch({
                type: "DELETE_LESSON",
                lessonId
            })
        }
    }
};

const LessonTabsContainer = connect(
    stateToPropertyMapper, dispatchToPropertyMapper
)(
    LessonTabsComponent
);

export default LessonTabsContainer;