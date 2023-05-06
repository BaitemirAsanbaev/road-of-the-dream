// Login.js

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../action/authSlice";
import cl from "./Login.module.scss";
const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const loading = useSelector((state) => state.auth.status === "loading");
  const error = useSelector((state) => state.auth.error);

  const handleLogin = () => {
    dispatch(login({ username, password, email }));
  };

  return (
    <div className={cl.Login}>
      <div>
        <h2>Войти</h2>
        <input
          type="text"
          placeholder="имя пользователя"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
       
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
         <input
          type="password"
          placeholder="пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span>
          <button onClick={handleLogin} disabled={loading}>
            {loading ? "Загрузка..." : "Войти"}
          </button>
          <Link to='/signup'>Регистрация</Link>
        </span>
        {error && <p>Error: {error}</p>}
      </div>
    </div>
  );
};
export default Login;