import React from 'react';

const ExpenseList = ({ expenses }) => {
  return (
    <table className="table-bordered">
        <thead>
            <tr>
                <th>Description</th>
                <th>Amount</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
    </table>
  );
};

export default ExpenseList;
