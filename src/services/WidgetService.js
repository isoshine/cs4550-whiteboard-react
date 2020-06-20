
export const findWidgetsForTopic = (topicId) => {
    return fetch(`https://cs4550-whiteboard-a5.herokuapp.com/api/topics/${topicId}/widgets`)
        .then(response => response.json())
};

export const deleteWidget = (widgetId) => {
    return fetch(`https://cs4550-whiteboard-a5.herokuapp.com/api/widgets/${widgetId}`, {
        method: "DELETE"
    })
        .then(response => response.json())
};

export const updateWidget = (widgetId, widget) => {
    return fetch(`https://cs4550-whiteboard-a5.herokuapp.com/api/widgets/${widgetId}`, {
        method: 'PUT',
        body: JSON.stringify(widget),
        headers: {"content-type": "application/json"
        }
    })
        .then(response => response.json())
};

export const createWidget = (topicId, widget) => {
    return fetch(`https://cs4550-whiteboard-a5.herokuapp.com/api/topics/${topicId}/widgets`, {
        method: 'POST',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
};
