export const findTopics = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001479351/lessons/${lessonId}/topics`)
        .then(response => response.json());

export const addTopic = (lessonId, newTopic) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001479351/lessons/${lessonId}/topics`, {
        method: 'POST',
        body: JSON.stringify(newTopic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const deleteTopic = (topicId) => {
    return fetch(`http://wbdv-generic-server.herokuapp.com/api/001479351/topics/${topicId}`,{
        method: "DELETE"})
        .then(response => response.json())
};

export const updateTopic = (topicId, topic) => {
    return fetch(`http://wbdv-generic-server.herokuapp.com/api/001479351/topics/${topicId}`,{
        method: "PUT",
        body: JSON.stringify(topic),
        headers: {"content-type": "application/json"}})
        .then(response => response.json())
    };
