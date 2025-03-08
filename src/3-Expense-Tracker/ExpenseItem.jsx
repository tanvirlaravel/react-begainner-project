function ExpenseItem({ expense }) {
  
  return (
    <div className="expense-item">
      <span>{expense.description}</span>
      <span>${expense.amount}</span>
      <span>{expense.category}</span>
      <span>{expense.date}</span>
    </div>
  );
}
export default ExpenseItem;
