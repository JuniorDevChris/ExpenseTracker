import React from 'react';

const ExpenseList = ({ expenses, deleteExpense }) => {
  if(expenses.length ==== 0)
  {
    return (
      
    );
  }
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Category</th>
          <th>Description</th>
          <th>Amount</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.category}</td>
            <td>{expense.description}</td>
            <td>${parseFloat(expense.amount).toFixed(2)}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteExpense(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td></td>
          <td>
            $
            {expenses
              .reduce((acc, expense) => acc + parseFloat(expense.amount), 0)
              .toFixed(2)}
          </td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
