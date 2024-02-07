import React, { useState, useEffect } from 'react';
import './ExpenseTracker.css'; // Import CSS file

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [allDescriptions, setAllDescriptions] = useState([]); // State for all expense descriptions

  // Add expense to the list
  const addExpense = () => {
    if (!description || !amount) {
      alert('Please enter both description and amount.');
      return;
    }
    const newExpense = {
      id: new Date().getTime(),
      description,
      amount: parseFloat(amount)
    };
    setExpenses([...expenses, newExpense]);
    setDescription('');
    setAmount('');
    setSearchTerm('');
    setAllDescriptions([...allDescriptions, description]); // Add new description to allDescriptions state
  };

  // Delete expense from the list
  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  // Filter expenses based on search term
  useEffect(() => {
    const filtered = expenses.filter(expense =>
      expense.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredExpenses(filtered);
  }, [searchTerm, expenses]);

  // Calculate total expenses
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="container">
      <h1>Family Expense Tracker</h1>
      <div>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={addExpense}>Add Expense</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search expenses"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={() => setSearchTerm(searchTerm)}>Search</button> {/* This button triggers the search */}
      </div>
      <div>
        <h2>Expenses</h2>
        <ul>
          {filteredExpenses.map(expense => (
            <li key={expense.id}>
              {expense.description} - ${expense.amount}
              <button onClick={() => deleteExpense(expense.id)} className="delete-button">Delete</button>
            </li>
          ))}
        </ul>
        <h3>Total Expenses: ${totalExpenses}</h3>
      </div>
      <div>
        <h2>All Expense Descriptions</h2>
        <ul>
          {allDescriptions.map((description, index) => (
            <li key={index}>{description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExpenseTracker;
