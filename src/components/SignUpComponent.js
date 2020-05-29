import React from "react";

const SignUpComponent = () =>
    <div className="mx-auto container">
        <h1>Sign-up</h1>

        <label htmlFor="username">Username</label>
        <input className="form-control wbdv-field wbdv-username"
               id="username"
               type="text"
               placeholder="joe123"/>

        <label htmlFor="password">Password</label>
        <input className="form-control wbdv-field wbdv-password"
               id="password"
               type="password"
               placeholder="********"
               title="passwords must be at least 8 characters"/>

        <label htmlFor="verify">Verify Password</label>
        <input className="form-control wbdv-field wbdv-password-verify"
               id="verify"
               type="password"
               placeholder="********"/>

        <a href="#"
           className="btn btn-primary wbdv-button wbdv-register">
            Sign Up
        </a>

        <br/>

        <div className="float-right">Already have an account?</div>
        <br/>
        <a className="float-right wbdv-link wbdv-login"
           href="#">
            Sign in
        </a>

        <a href="#">Cancel</a>

    </div>;

export default SignUpComponent;