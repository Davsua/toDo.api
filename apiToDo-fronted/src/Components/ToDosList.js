import React from "react";

const ToDosList = ({ toDo, selectedToDo, deleteToDo }) => {
  return (
    <ul className="todo-list-all">
      {toDo.map((todo, i) => (
        <div className="todo-list-container">
          <li key={todo.id}>
            <ul className="todo-list">
              <li>
                <strong>{todo.todo}</strong>
              </li>
              <li>{todo.user}</li>
              <li>{todo.status}</li>
            </ul>
            <button onClick={() => selectedToDo(todo, i)}>
              <strong>Edit</strong>
            </button>
            <button onClick={() => deleteToDo(todo.id)}>
              <strong>Delete</strong>
            </button>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default ToDosList;
