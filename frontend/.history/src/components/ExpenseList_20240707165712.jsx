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
            {expenses.map((expense => <tr))}
        </tbody>
    </table>
  );
};

export default ExpenseList;
