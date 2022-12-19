import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { app } from "../firebase-config";

const Login = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const authentication = getAuth(app);
    signInWithEmailAndPassword(authentication, username, password).then(
      (response) => {
        navigate("/successful");
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
      }
    );
  };

  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <h3>Log In</h3>
      <form onSubmit={submit}>
        <label htmlFor="username">Email</label>
        <br />
        <br />
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <br />
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;
