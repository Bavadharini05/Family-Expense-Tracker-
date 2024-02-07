import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <h1>EXPENSE TRACKER</h1>
      <p>Know Your Expenses Here!</p>
      
      {/* Add links to Login and Register */}
      <div>
        <Link to="/login">Login</Link>
        <span> | </span>
        <Link to="/registration">Register</Link>
      </div>
    </div>
  );
};

export default Home;
