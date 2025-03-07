import { useState } from 'react';
import TodoList from './TodoList';
import './todo.css';
import AddTodo from './AddTodo';

function ToDoApp() {
  const [todos, setTodos ] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a To-Do App', completed: true },
    { id: 3, text: 'Deploy the App', completed: false },
  ]);


  function addTodo(){}
  

  return (
    <div className="app">
      <h1>Todo App</h1>
      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos}  />
    </div>
  );
}
export default ToDoApp;
