//Finite State Machine
//(S1) --e1 --> (S2)
//(S2) --e2 --> (S3)

const initialState = {
    newModuleTitle: "",
    modules: []
};

//a reducer is a finite state machine that takes 2 arguments: current state, action
const moduleReducer = (state=initialState, event) => {
    switch (event.type) {
        case "FIND_MODULES":
            return {
                ...state,
                modules: event.modules
            };
            break;
        case "UPDATE_MODULE":
            return {
                ...state,
                modules: state.modules.map(
                    module => module._id === event.updatedModule._id ?
                            event.updatedModule : module)
            };
            break;
        case "FIND_ALL_MODULES":
            return {
                ...state,
                modules: event.modules
            };
            break;
        case "ADD_MODULE":
            return {
                modules: [
                    ...state.modules,
                    event.newModule
                ]
            };
            break;
        case "DELETE_MODULE":
            return {
                modules: state.modules.filter(module => module._id !== event.moduleId)
            };
            break;
        default:
            return state;
    }
};

export default moduleReducer;
