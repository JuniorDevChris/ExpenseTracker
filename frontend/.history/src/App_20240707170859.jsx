import React, { useState } from 'react';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import './App.css';

function App() {
  const ex = {
    {id: 1, description: 'aaa', amount: 10, category: 'Utilities'},
    {id: 1, description: 'aaa', amount: 10, category: 'Utilities'},
    {id: 1, description: 'aaa', amount: 10, category: 'Utilities'},
    {id: 1, description: 'aaa', amount: 10, category: 'Utilities'},
    {id: , description: 'aaa', amount: 10, category: 'Utilities'},
  }
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="App container">
      <Header />
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
}

export default App;
