import { useState } from 'react';

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  function handleEdit() {
    onEdit(todo.id, editText);

    setIsEditing(!isEditing);
  }

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        readOnly
        checked={todo.completed}
        onChange={() => {
          onToggle(todo.id);
        }}
      />
      {isEditing && (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      )}
      {!isEditing && <span>{todo.text}</span>}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
    </div>
  );
}
export default TodoItem;
