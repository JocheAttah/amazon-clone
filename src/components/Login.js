import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    //   fancy firebase login
    auth
    .signInWithEmailAndPassword(email, password)
    .then((auth) => {
      history.push('/');
    })
    .catch((error) => alert(error.message));
    
  };

  const register = (e) => {
    e.preventDefault();
    //   firebase stuff
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //   it successfully created a uuser with email and password
        // console.log(auth)
        if(auth) {
          history.push('/')
        }
      })
      .catch((error) => alert(error.message));
  };

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
          <input
            className="login__input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            className="login__input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={signIn}
            type="submit"
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p className="login__text">
          {" "}
          By continuing, you agree to the Amazon Clone's Conditions of Use and
          Privacy Notice.{" "}
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
