import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const loading = useSelector((state) => state.auth.status === 'loading');
  const error = useSelector((state) => state.auth.error);

  const handleLogin = () => {
    dispatch(login({ username, password, email }));
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Loading...' : 'Login'}
      </button>
      {error && <p>Error: {error}</p>}
    </div>
  );

}
export default Login;
