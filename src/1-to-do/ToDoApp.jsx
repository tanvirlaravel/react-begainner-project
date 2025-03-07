import TodoList from './TodoList';
import './todo.css';

function ToDoApp() {
  // Mock data
  const mockTodos = [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a To-Do App', completed: true },
    { id: 3, text: 'Deploy the App', completed: false },
  ];

  return (
    <div className="app">
      <h1>Todo App</h1>
      <TodoList todos={mockTodos} />
    </div>
  );
}
export default ToDoApp;
