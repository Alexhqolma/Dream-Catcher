import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/features/user/userSlice';

const LoginPopup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(setUser({ username, password }));
  };

  return (
    <div className="login-popup">
      <h2>Login</h2>
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
      <button onClick={handleLogin}>
        Log in
      </button>
    </div>
  );
};

export default LoginPopup;
