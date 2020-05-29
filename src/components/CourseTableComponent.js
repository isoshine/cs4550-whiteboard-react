import React from "react";
import CourseRowComponent from "./CourseRowComponent";

export default class CourseTableComponent extends React.Component {
    render() {
        return (

            <div>
                <h3></h3>

                <table className="wbdv-table table">
                    <thead>
                    <tr>
                        <th className="wbdv-course-title">Title</th>
                        <th className="wbdv-course-owner">Owner</th>
                        <th className="wbdv-course-modified">Last Modified</th>
                        <th>
                            <button className="wbdv-btn wbdv-sort btn btn-light">Sort</button>
                        </th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        //we want to iterate over the array
                        this.props.courses.map(course =>
                            <CourseRowComponent
                                deleteCourse={this.props.deleteCourse}
                                key={course._id}
                                course={course}/> )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}