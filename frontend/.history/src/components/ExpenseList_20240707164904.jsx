import React from 'react'

const ExpenseList = () => {
  return (
    <table className="table-border">
        <thead>
            <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
                <th></th>
            </tr>
        </thead>
    </table>
  )
}

export default ExpenseList