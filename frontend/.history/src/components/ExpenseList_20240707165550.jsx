import React from 'react';

const ExpenseList = ({ expenses }) => {
  return (
    <table className="table-bordered">
        <thead>
            <tr>
                <th>Descrip</th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
        </thead>
    </table>
  );
};

export default ExpenseList;
