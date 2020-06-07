import {connect} from "react-redux";
import ModuleListComponent from "../components/ModuleListComponent";

//will receive the state form the store (via connect)
const stateToPropertyMapper = (state) => {
    return {
        modules: state.modules,
        newModuleTitle: state.newModuleTitle
    }
};

//the callback function we are fed- the callback function that we can invoke to alert what is going on
const dispatchToPropertyMapper = (dispatch) => {
    return {
        updateModuleTitle: (newModuleTitle) => {
            dispatch({
                type: "MODULE_TITLE",
                newModuleTitle:newModuleTitle
            })
        },
        addModule: (newModule) => {
            dispatch({
                type: "ADD_MODULE",
                newModule: newModule
            })
        },
        deleteModule: (moduleId) => {
            dispatch({
                type: "DELETE_MODULE",
                moduleId: moduleId
            })
        }
    }
};

const ModuleListContainer = connect(
    stateToPropertyMapper, dispatchToPropertyMapper
)(
    ModuleListComponent);

export default ModuleListContainer;