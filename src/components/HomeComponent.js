import React from "react";
import {Link} from "react-router-dom";

const HomeComponent = () =>
    <div>
        <h1>Home</h1>

        <div className="list-group">

            <Link className="list-group-item"
                  to="/editor">
                Course Editor
            </Link>

            <Link className="list-group-item"
                  to="/table/courses">
                Course List
            </Link>

            <Link className="list-group-item"
                  to="/sign-in">
                Sign-in
            </Link>

            <Link className="list-group-item"
                  to="/sign-up">
                Sign-up
            </Link>

            <Link className="list-group-item"
                  to="/profile">
                Profile
            </Link>

        </div>


    </div>;

export default HomeComponent;

