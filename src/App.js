
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import { useSelector } from "react-redux";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";

import Nav from "./components/Nav/Nav";
import Header from "./pages/Header/Header";
import Map2 from "./pages/Map2/Map2";
import Profile from "./pages/Profile/Profile";

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Companies from './pages/Companies/Companies';
import NotFound from './pages/NotFound/NotFound';


function App() {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  return (
    <div>

      <Header/>
      {token ? (
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/map" index element={<Map2 />} />
          <Route path="/map" index element={<Profile />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to={"/login"} />} />
        </Routes>
      )}

    </div>
  );
}

export default App;
