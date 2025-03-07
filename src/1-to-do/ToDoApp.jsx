import { useState } from 'react';
import TodoList from './TodoList';
import './todo.css';
import AddTodo from './AddTodo';

function ToDoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a To-Do App', completed: true },
    { id: 3, text: 'Deploy the App', completed: false },
  ]);

  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(delId) {
    setTodos(todos.filter((todo) => todo.id !== delId));
  }

  return (
    <div className="app">
      <h1>Todo App</h1>
      <div className="filters">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
}
export default ToDoApp;
