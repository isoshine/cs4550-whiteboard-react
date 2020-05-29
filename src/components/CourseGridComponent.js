import React from "react";
import CourseCardComponent from "./CourseCardComponent";

export default class CourseGridComponent extends React.Component {
    render() {
        return (
            <div>
                <h3></h3>

                <div className="wbdv-grid row row-cols-1 row-cols-xs-1 row-cols-sm-2
                                row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
                    {
                        this.props.courses.map(course =>
                            <CourseCardComponent
                                deleteCourse={this.props.deleteCourse}
                                key={course._id}
                                course={course}/>)
                    }
                </div>
            </div>
        );
    }
}