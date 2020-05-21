import React from "react";
import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "./CourseGridComponent";
import Whiteboard from "./Whiteboard";

class CourseListComponent extends React.Component {
    state = {
        layout: "list"
    };

    //new syntax for ES6; this code is === to
    //function setLayout() {}
    setLayout = (layout) => {
        //dont do: this.state.layout = layout;
        this.setState({layout:layout})
    };

    render() {
        return (
            <div>
                <h2>Course List</h2>

                <button onClick={() => this.setLayout("grid")}>
                    Grid
                </button>
                <button onClick={() => this.setLayout("table")}>
                    Table
                </button>

                {this.state.layout === "table" &&
                <CourseTableComponent/>}

                {this.state.layout === "grid" &&
                <CourseGridComponent/>}

            </div>
        )
    }
}

export default CourseListComponent;
