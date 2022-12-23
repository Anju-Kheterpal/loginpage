import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../firebase-config";
import logo from "../Assets/LOGO.png";

const Login = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const authentication = getAuth(app);
    signInWithEmailAndPassword(authentication, username, password).then(
      (response) => {
        navigate("/loginSuccessful");
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
      <h1 style={{color: "white"}}>Log In</h1>
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
          <Link to="/signup">Create Account</Link>
        </span>
        <br />
        <br />
      </form>
    </div>
  );
};

export default Login;
