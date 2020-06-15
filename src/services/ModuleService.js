// const findAllModules = () => {
//     return fetch("http://wbdv-generic-server.herokuapp.com/api/001479351/modules")
//         .then(response => response.json())
// };

//restful services
const findModulesForCourse = (courseId) => {
    return fetch(`http://wbdv-generic-server.herokuapp.com/api/001479351/courses/${courseId}/modules`)
        .then(response => response.json())
};

const deleteModule = (moduleId) => {
    return fetch(`http://wbdv-generic-server.herokuapp.com/api/001479351/modules/${moduleId}`,
        {method: "DELETE"})
        .then(response => response.json())
};

const addModule = (courseId, module) => {
    return fetch(`http://wbdv-generic-server.herokuapp.com/api/001479351/courses/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify(module),
        headers: {"content-type": "application/json"}})
        .then(response => response.json())
};

const updateModule = (moduleId, module) => {
    return fetch(`http://wbdv-generic-server.herokuapp.com/api/001479351/modules/${moduleId}`, {
        method: "PUT",
        body: JSON.stringify(module),
        headers: {"content-type": "application/json"}})
        .then(response => response.json())
};

export default {
    //"findAllModules": findAllModules
    //findAllModules,
    deleteModule,
    addModule,
    updateModule,
    findModulesForCourse
}