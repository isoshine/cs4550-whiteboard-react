const findAllModules = () => {
    return fetch("http://wbdv-generic-server.herokuapp.com/api/shinekim/modules")
        .then(response => response.json())
};

const deleteModule = (moduleId) => {
    return fetch(`http://wbdv-generic-server.herokuapp.com/api/shinekim/modules/${moduleId}`,
        {method: "DELETE"})
        .then(response => response.json())
};

const addModule = (module) => {
    return fetch("http://wbdv-generic-server.herokuapp.com/api/shinekim/modules", {
        method: "POST",
        body: JSON.stringify(module),
        headers: {"content-type": "application/json"}})
        .then(response => response.json())
};

const updateModule = (moduleId, module) => {
    return fetch(`http://wbdv-generic-server.herokuapp.com/api/shinekim/modules/${moduleId}`, {
        method: "PUT",
        body: JSON.stringify(module),
        headers: {"content-type": "application/json"}})
        .then(response => response.json())
};

export default {
    //"findAllModules": findAllModules
    findAllModules,
    deleteModule,
    addModule,
    updateModule
}