import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import { useSelector } from "react-redux";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";

function App() {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      {token ? (
        <Routes>
          <Route path="/" index element={<Home />} />
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
