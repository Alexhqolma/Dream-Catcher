import { useState } from 'react';
import { Button } from '../Button';
// import { useDispatch } from 'react-redux';
// import { getUser } from '../../store/features/user/userSlice';

export const LoginPopup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const dispatch = useDispatch();

  const handleLogin = () => {
  //   dispatch(getUser({ username, password }));
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
      <Button onClick={handleLogin}>
        Log in
      </Button>
    </div>
  );
};