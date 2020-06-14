
export const findWidgets = (topicId) => {
    return fetch(`http://localhost:8080/api/topics/${topicId}`)
        .then(response => response.json())
}