function ExpenseFilter({ filter, dispatch }) {
  return (
    <select value={filter}>
      <option value='all'>All</option>
      <option value='food'>Food</option>
      <option value='transport'>Transport</option>
      <option value='entertainment'>Entertainment</option>
    </select>
  );
}
export default ExpenseFilter;
