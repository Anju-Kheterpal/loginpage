import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../firebase-config";
import logo from "../Assets/LOGO.png";
import { useAlert } from "react-alert";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const alert = useAlert();

  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    const authentication = getAuth(app);
    createUserWithEmailAndPassword(authentication, username, password).then(
      (response) => {
        alert.show("Account created")
        navigate("/signup");
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
      }
    );
  };

  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <br />
      <br />
      <img src={logo} alt="" />
      <h1 style={{color: "white"}}>Sign Up</h1>
      <form className="form" onSubmit={submit}>
        <input
          type="email"
          placeholder="email"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <br />
        <button type="submit">submit</button>

        <br />
        <br />
        <span>
          <Link to="/">Login to your Account</Link>
        </span>
        <br />
        <br />
      </form>
    </div>
  );
};

export default SignUp;
