import React from 'react';

const ExpenseList = ({ expenses }) => {
  return (
    <table className="table-bordered">
        <thead>
            <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {expenses.map((expense => <tr key={expense.id}>
                <td>{expense.description}</td>
                <td>{expense.amount}</td>
                <td>{expense.category}</td>
                <td>
                    <button className="btn-outline-danger">
                        
                    </button>
                </td>
            </tr>))}
        </tbody>
    </table>
  );
};

export default ExpenseList;
