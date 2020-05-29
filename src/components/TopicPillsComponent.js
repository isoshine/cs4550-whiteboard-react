import React from "react";

const TopicPillsComponent = () => {
    return (
        <div>
            <ul className="wbdv-nav wbdv-nav-pills nav nav-pills">
                <li className="wbdv-nav-item nav-item">
                    <a className="nav-link active" href="#">Topic 1</a>
                </li>
                <li className="wbdv-nav-item nav-item">
                    <a className="nav-link" href="#">Topic 2</a>
                </li>
                <li className="wbdv-nav-item nav-item">
                    <a className="nav-link" href="#">Topic 3</a>
                </li>
            </ul>
        </div>
    )
};

export default TopicPillsComponent;