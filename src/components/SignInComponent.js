import React from "react";

const SignInComponent = () =>
    <div>
        <div className="mx-auto container">
            <h2>Sign-in</h2>

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

            <a href="#"
               className="btn btn-primary wbdv-button wbdv-login">
                Sign In
            </a>

            <br/>

            <a href="#"
               className="wbdv-link wbdv-forgot-password">Forgot Password?</a>

            <div className="float-right">Don't have an account?</div>
            <br/>
            <a href="#"
               className="float-right wbdv-link wbdv-register">
                Sign up
            </a>

            <a href="#">Cancel</a>


        </div>
    </div>;

export default SignInComponent;