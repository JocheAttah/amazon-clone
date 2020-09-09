import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";


function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG24.png"
          alt="logo"
          className="login__logo"
        />
      </Link>
      <div className="login__container">
          <h1 className="login__heading">Sign-in</h1>
          <form action="">
              <h5>Email</h5>
              <input className="login__input" type="text"/>
              
              <h5>Password</h5>
              <input className="login__input" type="password"/>
              
              <button className="login__signInButton">Sign In</button>
          </form>
          <p className="login__text"> By continuing, you agree to the Amazon Clone's Conditions of Use and Privacy Notice. </p>
          <button className="login__registerButton"> Create your Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;
