import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" index element={<Home/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
