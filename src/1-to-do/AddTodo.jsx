import { useState } from 'react';

function AddTodo({ onAdd }) {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  }
  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
export default AddTodo;
