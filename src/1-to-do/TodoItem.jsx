function TodoItem({ todo, onToggle }) {
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
      <span>{todo.text}</span>
      <button>Delete</button>
    </div>
  );
}
export default TodoItem;
