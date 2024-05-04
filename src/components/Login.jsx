import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, loginUser } from '../redux/slices/authSlice';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleLogin = () => {
    dispatch(loginUser({ username, password }));
  };

  return (
    <div>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin} disabled={loading}>Login</button>
      {error && <div>{error}</div>}
    </div>
  );
};

export default Login;