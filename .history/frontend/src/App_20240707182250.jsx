import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const response = await fetch('http://localhost:8000/api/expenses/');
      const data = await response.json();
      setExpenses(data);
    };
    fetchExpenses();
  }, []);

  const addExpense = async (expense) => {
    const response = await fetch('http://localhost:8000/api/expenses/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(expense),
    });
    const data = await response.json();
    setExpenses([...expenses, data]);
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:8000/api/expenses/${id}/`, {
      method: 'DELETE',
    });
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="App container">
      <Header />
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
};

export default App;
