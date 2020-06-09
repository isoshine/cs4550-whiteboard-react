export const findLessons = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/shinekim/modules/${moduleId}/lessons`)
        .then(response => response.json());

export const addLesson = (moduleId, newLesson) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/shinekim/modules/${moduleId}/lessons`, {
        method: 'POST',
        body: JSON.stringify(newLesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const deleteLesson = (lessonId) => {};