import { useState } from 'react';

function ExpenseForm({ dispatch }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [date, setDate] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!description || !amount) return;

    const newExpense = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      category,
      date,
    };
    dispatch({ type: 'ADD_EXPENSE', payload: newExpense });
    // Reset Form
    setAmount('');
    setDescription('');
    setDate('');
    setCategory('');   
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        <option>Food</option>
        <option>Transport</option>
        <option>Entertainment</option>
      </select>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button>Add Expense</button>
    </form>
  );
}
export default ExpenseForm;
