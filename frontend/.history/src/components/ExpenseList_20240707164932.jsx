import React from 'react'

interface Props {
    expense
}

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
        <tbody>

        </tbody>
    </table>
  )
}

export default ExpenseList