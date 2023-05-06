import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './pages/NotFound/NotFound';
import { useSelector } from 'react-redux';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

import Header from './pages/Header/Header';
import Map2 from './pages/Map2/Map2';
import Profile from './pages/Profile/Profile';

import './App.css';
import Home from './pages/Home/Home';

function App() {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <Header />
      {token ? (
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/map" element={<Map2 />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to={'/login'} />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
