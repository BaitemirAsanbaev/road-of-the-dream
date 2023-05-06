// Signup.js

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signup } from "../action/authSlice";
import cl from "./Signup.module.scss";

const Signup = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const loading = useSelector((state) => state.auth.status === "loading");
  const error = useSelector((state) => state.auth.error);
  const token = useSelector((state) => state.auth.token);
  const [redirect, setRedirect] = useState(false);

  const handleSignup = () => {
    dispatch(signup({ username, password, email }));
  };

  if (token) {
    return null;
  }

  return (
    <div className={cl.Signup}>
      <div>
        <h2>Signup</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={() => {
            handleSignup();
            setRedirect(true);
          }}
          disabled={loading}
        >
          {loading ? "Loading..." : "Signup"}
        </button>

        {error && <p>Error: {error}</p>}
      </div>
    </div>
  );
};

export default Signup;