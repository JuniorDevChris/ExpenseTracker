import React from 'react';

const ExpenseList = ({ expenses }) => {
  return (
    <ul className="list-group">
      {expenses.map((expense, index) => (
        <li key={index} className="list-group-item">
          {expense.title}: ${expense.amount}
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
