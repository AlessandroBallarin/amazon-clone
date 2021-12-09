import React from "react";
import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <div className="form">
          <h5>E-mail</h5>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Bottone per accedere */}
          <button className="login__signInButton" onClick={signIn}>
            Continue
          </button>
          <p>
            By signing-in you agree to Amazon's Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice and our Interest-Based
            Ads Notice.
          </p>
        </div>
      </div>
      <div className="login__newToAmazon">
        <hr className="left" />
        <span>New to Amazon?</span>
        <hr className="right" />
      </div>

      {/* Bottone per registrarsi */}
      <button className="login__registerButton" onClick={register}>
        Create your Amazon account
      </button>
    </div>
  );
}

export default Login;
