
export const findWidgets = (topicId) => {
    return fetch(`http://localhost:8080/api/topics/${topicId}`)
        .then(response => response.json())
};

export const deleteWidget = (widgetId) => {
    fetch(`http://localhost:8080/api/widgets/${widgetId}`, {
        method: "DELETE"
    })
        .then(response => response.json())
};

export const createWidget = (topicId, widget) => {
    fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
        method: 'POST',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
};
