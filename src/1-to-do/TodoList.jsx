import TodoItem from './TodoItem';

function TodoList({ todos, onToggle }) {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </div>
  );
}
export default TodoList;
