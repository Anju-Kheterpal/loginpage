import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { app } from "../firebase-config";

const SignUp = () => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    const authentication = getAuth(app);
    createUserWithEmailAndPassword(authentication, username, password).then(
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
      <h3>Sign Up</h3>
      <form onSubmit={submit}>
        <label htmlFor="username">Email</label>
        <br />
        <br />
        <input
          type="email"
          placeholder="email"
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
      </form>
    </div>
  );
};

export default SignUp;
