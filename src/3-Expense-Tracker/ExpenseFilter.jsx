function ExpenseFilter({ filter, setFilter }) {
  return (
    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
      <option>All</option>
      <option>Food</option>
      <option>Transport</option>
      <option>Entertainment</option>
    </select>
  );
}
export default ExpenseFilter;
