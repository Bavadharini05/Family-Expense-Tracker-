import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Registration from './Components/Registration';
import ExpenseTraker from './Components/ExpenseTraker';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/expensetraker" element={<ExpenseTraker/>} />
      </Routes>
    </Router>
  );
}

export default App;
