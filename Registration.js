import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Registeration.css';

function Registration() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [users, setUsers] = useState([
    { username: 'Bavadharini', password: 'bava' },
    { username: 'Sakthi', password: 'sakthi08' },
    // Add more users as needed
  ]);

  const handleRegistration = () => {
    // Check if any of the input fields is empty
    if (!username || !password) {
      setError('Please fill in all the fields.');
      return;
    }

    // Check if the user is already registered
    const isRegistered = users.some((u) => u.username === username);

    if (isRegistered) {
      setError('Username is already registered. Please choose another username.');
    } else {
      // Register the user and redirect to login page
      setUsers([...users, { username, password }]);
      setError(''); // Clear previous error
      navigate('/login');
    }
  };

  return (
    <div>
      <h2>Registration Page</h2>
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
        <button type="button" onClick={handleRegistration}>
          Register
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}

export default Registration;
