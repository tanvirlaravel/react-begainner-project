function TodoItem({ todo }) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input type="checkbox" readOnly checked={todo.completed} />
      <span>{todo.text}</span>
      <button>Delete</button>
    </div>
  );
}
export default TodoItem;
