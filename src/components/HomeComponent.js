import React from "react";
import {Link} from "react-router-dom";

const HomeComponent = () =>
    <div>
        <h1 className="wbdv-home wbdv-home-title">Home</h1>

        <div className="wbdv-list list-group">

            <Link className="wbdv-list-item list-group-item"
                  to="/table/courses">
                Course List
            </Link>

            <Link className="wbdv-list-item list-group-item"
                  to="/sign-in">
                Sign-in
            </Link>

            <Link className="wbdv-list-item list-group-item"
                  to="/sign-up">
                Sign-up
            </Link>

            <Link className="wbdv-list-item list-group-item"
                  to="/profile">
                Profile
            </Link>

        </div>

    </div>;

export default HomeComponent;

