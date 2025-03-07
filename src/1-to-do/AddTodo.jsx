function AddTodo({ onAdd }) {
  return (
    <form className="add-todo">
      <input type="text" placeholder="Add a new task..." />
      <button>Add</button>
    </form>
  );
}
export default AddTodo;
