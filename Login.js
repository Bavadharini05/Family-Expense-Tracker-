import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [registeredUsers] = useState([
    { username: 'Bavadharini', password: 'bava' },
    { username: 'Sakthi', password: 'sakthi08'},
    // Add more users as needed
  ]);

  const handleLogin = () => {
    // Check if username and password are not empty
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    // Check if the entered credentials match a registered user
    const isRegistered = registeredUsers.some((u) => u.username === username && u.password === password);

    if (isRegistered) {
      // Navigate to the polling page
      navigate('/expensetraker');

      // Clear username and password fields
      setUsername('');
      setPassword('');
      setError('');
    } else {
      // Display an error if the entered credentials do not match any registered users
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/registration">Register here</Link>
      </p>
    </div>
  );
}

export default Login;
