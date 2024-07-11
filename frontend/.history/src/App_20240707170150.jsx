import React, { useState } from 'react';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="App container">
      <Header />
      <ExpenseForm addExpense={addExpense} {deleteExpenses} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
