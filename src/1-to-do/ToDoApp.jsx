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

  const [filter, setFilter] = useState('all');

  const filterTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });

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
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      <AddTodo onAdd={addTodo} />
      <TodoList
        todos={filterTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
}
export default ToDoApp;
