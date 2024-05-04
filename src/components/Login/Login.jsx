import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { loginUser} from '../../redux/slices/authSlice';
import './Login.scss'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const {loading, error} = useSelector((state) => state.auth);

  const handleLogin = () => {
    dispatch(loginUser({username, password}));
  };

  return (
    <>
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
          <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
            <label>Username</label>
          </div>
          <div className="user-box">
          <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
            <label>Password</label>
          </div>
          {error && <div  className='text-danger'>{error}</div>}
          <a onClick={handleLogin} disabled={loading}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </>
  );
};

export default Login;
