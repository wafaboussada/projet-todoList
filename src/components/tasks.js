import React from "react";
import Menu from './menu';
import "./todoList.css";
const Tasks = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");
  const isConnected = localStorage.getItem('is_connected');
  React.useEffect(() => {
    const json = localStorage.getItem("todos");
    git commit -m "mon premier commit"    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  React.useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setTodos([...todos].concat(newTodo));
    setTodo("");
  }

  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function submitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }

  return (
    <div>
      <Menu />
    <div id="todo-list">
      <h1>Liste des taches</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Ajouter la tâche</button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <div style={{display: "flex", justifyContent: 'space-between'}}>
            <div className="todo-text">
            <input
              type="checkbox"
              id="completed"
              checked={todo.completed}
              data-toggle="tooltip"
              data-placement="top"
              title="Cocher pour completer la tache"
              onChange={() => toggleComplete(todo.id)}
            />
            {todo.id === todoEditing ? (
              <input
                type="text"
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <div>{todo.text}</div>
            )}
            </div>
            <div style={{marginRight: '0'}}>{todo.completed ? <span className="badge badge-success">Complétée</span>
                : <span className="badge badge-danger">Non complétée</span>}</div>
          </div>
          <div className="todo-actions">
            {todo.id === todoEditing ? (
              <button onClick={() => submitEdits(todo.id)}>Submit Edits</button>
            ) : (
              <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
            )}

            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Tasks