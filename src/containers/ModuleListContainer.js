import {connect} from "react-redux";
import ModuleListComponent from "../components/ModuleListComponent";
import ModuleService from "../services/ModuleService";

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
        findAllModules: () => {
            ModuleService.findAllModules()
                .then(actualModules => dispatch({
                    type: "FIND_ALL_MODULES",
                    modules: actualModules
                }))
        },
        updateModule: (moduleId, newModule) => {
            ModuleService.updateModule(moduleId, newModule)
                .then(status => dispatch({
                    type: "UPDATE_MODULE",
                    updatedModule: newModule
                }))
        },
        addModule: (newModule) => {
            ModuleService.addModule(newModule)
                .then(actualNewModule => dispatch({
                    type: "ADD_MODULE",
                    newModule: newModule
            }))
        },
        deleteModule: (moduleId) => {
            ModuleService.deleteModule(moduleId)
                .then(status => dispatch({
                    type: "DELETE_MODULE",
                    moduleId: moduleId
                }))
        }
    }
};

const ModuleListContainer = connect(
    stateToPropertyMapper, dispatchToPropertyMapper
)(
    ModuleListComponent);

export default ModuleListContainer;