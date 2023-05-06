import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Companies from './pages/Companies/Companies';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/companies" index element={<Companies />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
