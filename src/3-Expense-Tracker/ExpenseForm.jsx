function ExpenseForm() {
  return (
    <form className="expense-form">
      <input type="text" placeholder="Description" />
      <input type="number" placeholder="Amount" />
      <select>
        <option>Food</option>
        <option>Transport</option>
        <option>Entertainment</option>
      </select>
      <input type="date" />
      <button>Add Expense</button>
    </form>
  );
}
export default ExpenseForm;
