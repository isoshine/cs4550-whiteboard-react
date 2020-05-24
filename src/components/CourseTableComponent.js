import React from "react";
import CourseRowComponent from "./CourseRowComponent";

export default class CourseTableComponent extends React.Component {
    render() {
        return (

            <div>
                <h3>Course Table {this.props.courses.length}</h3>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Owner</th>
                        <th>Last Modified</th>
                        <th>
                            <button className="btn btn-light">Sort</button>
                            <button className="btn btn-light">Grid</button>
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