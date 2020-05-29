import React from "react";

const LessonTabsComponent = () => {
    return(
        <div className="tabbable">
            <ul className="wbdv-nav-tabs nav nav-tabs">
                <li className="wbdv-nav-item nav-item">
                    <a className="nav-link active" href="#">Lesson 1</a>
                </li>
                <li className="wbdv-nav-item nav-item">
                    <a className="nav-link" href="#">Lesson 2</a>
                </li>
                <li className="wbdv-nav-item nav-item">
                    <a className="nav-link" href="#">Lesson 3</a>
                </li>
                <li className="wbdv-nav-item nav-item">
                    <a className="nav-link" href="#">Lesson 4</a>
                </li>
                <li className="wbdv-nav-item nav-item">
                    <a className="nav-link" href="#">Lesson 5</a>
                </li>
                <li className="wbdv-nav-item nav-item">
                    <a className="nav-link" href="#">Lesson 6</a>
                </li>
                <li className="wbdv-nav-item nav-item">
                    <a className="nav-link" href="#">Add</a>
                </li>

            </ul>
        </div>
    )
};

export default LessonTabsComponent;