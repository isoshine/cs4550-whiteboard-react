import React from "react";

const ProfileComponent = () =>
    <div className="container">
        <div className="alert alert-primary" role="alert">
            Your updates have been saved.
        </div>
        <h2>Profile</h2>

        <div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label"
                       htmlFor="username">Username</label>
                <div className="col-sm-10">
                    <input
                        readOnly
                        className="form-control wbdv-field wbdv-username"
                        id="username"
                        type="text"
                        placeholder="joe123"/>
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label"
                       htmlFor="password">Password</label>
                <div className="col-sm-10">
                    <input
                        className="form-control wbdv-field wbdv-password"
                        id="password"
                        type="password"
                        placeholder="********"
                        title="passwords must be at least 8 characters"/>
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label"
                       htmlFor="email">Email</label>
                <div className="col-sm-10">
                    <input
                        placeholder="joe@northeastern.edu"
                        className="form-control wbdv-field wbdv-email"
                        id="email"
                        type="text"/>
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label"
                       htmlFor="number">Phone Number</label>
                <div className="col-sm-10">
                    <input
                        placeholder="(123)456-7890"
                        className="form-control wbdv-field wbdv-phone"
                        id="number"
                        type="tel"/>
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label"
                       htmlFor="dob">Date of Birth</label>
                <div className="col-sm-10">
                    <input
                        className="form-control wbdv-field wbdv-dob"
                        id="dob"
                        type="date"
                        value="yyyy-mm-dd"/>
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                    Role</label>
                <div className="col-sm-10">
                    <select className="wbdv-field wbdv-role">
                        <option value="FAC">Faculty</option>
                        <option value="STU">Student</option>
                        <option value="ADMIN">Admin</option>
                    </select>
                </div>
            </div>

            <a className="btn btn-success btn-block wbdv-button wbdv-update">
                Update
            </a>

            <a className="btn btn-danger btn-block wbdv-button wbdv-logout">
                Sign out
            </a>

        </div>



    </div>

export default ProfileComponent;