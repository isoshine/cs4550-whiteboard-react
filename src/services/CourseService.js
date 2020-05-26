const createCourse = (course) => {
    //first fetch, !! by default fetch is a GET request
    return fetch("https://wbdv-generic-server.herokuapp.com/api/shinekim/courses", {
        //change the default GET request to POST request
        method: "POST",
        //embed data that we want to create inside of the body as a JSON file
        body: JSON.stringify(course),
        //how is this data encoded? what is the data type for this?
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())
};


const deleteCourse = (courseId) => {
    return fetch("https://wbdv-generic-server.herokuapp.com/api/shinekim/courses/" + courseId, {
        method: "DELETE",
    })
        .then(response => response.json())
};

const updateCourse = (courseId, course) => {
    return fetch("https://wbdv-generic-server.herokuapp.com/api/shinekim/courses/" + courseId, {
        //change the default GET request to PUT request
        method: "PUT",
        body: JSON.stringify(course),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())
};


const findCourseById = (courseId) => {};

const findAllCourses = () => {
    //first we fetch the data from remote server
    return fetch("https://wbdv-generic-server.herokuapp.com/api/shinekim/courses")
    //then we handle the response (convert to JSON)
        .then(response => response.json())
};


//we can export individually or we can export as one big object
export default {
    //"createCourse": createCourse,
    //"deleteCourse": deleteCourse,
    //"findCourseById": findCourseById,
    //"findAllCourses": findAllCourses
    createCourse,
    deleteCourse,
    findCourseById,
    findAllCourses,
    updateCourse
}