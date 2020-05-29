import React from "react";

const TopicPillsComponent = () => {
    return (
        <div>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Topic 1</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Topic 2</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Topic 3</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Topic 4</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Add</a>
                </li>
            </ul>
        </div>
    )
};

export default TopicPillsComponent;