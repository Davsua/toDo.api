import React, { useEffect, useState } from "react";

const ToDosForm = ({ addToDo, toDoSelected, updateToDo, deselectToDo }) => {
  const [toDos, setToDos] = useState("");
  const [user, setUser] = useState("");
  const [status, setStatus] = useState("to do");

  useEffect(() => {
    if (toDoSelected.todo) {
      setToDos(toDoSelected.todo);
      setUser(toDoSelected.user);
    } else {
      reset();
    }
  }, [toDoSelected]);

  const submit = async (e) => {
    e.preventDefault();

    const newToDo = {
      todo: toDos,
      user,
    };

    if (toDoSelected.todo) {
      updateToDo(newToDo);
    } else {
      addToDo(newToDo);
    }
    reset();
  };

  const reset = () => {
    setToDos("");
    setUser("");
  };

  return (
    <>
      <form onSubmit={submit} className="toDo-form">
        <div className="input-container">
          <label htmlFor="toDo" className="label-todo">
            To do
          </label>
          <input
            className="input-todo"
            type="text"
            id="todo-title"
            onChange={(e) => setToDos(e.target.value)}
            value={toDos}
          />
        </div>

        <div className="input-container">
          <label htmlFor="user" className="label-todo">
            User
          </label>
          <input
            className="input-todo"
            type="text"
            id="todo-user"
            onChange={(e) => setUser(e.target.value)}
            value={user}
          />
        </div>

        <div>
          <label htmlFor="isComplete">isComplete</label>
          <input
            type="checkbox"
            id="todo-isComplete"
            onChange={(e) => setStatus(e.target.value)}
            value={status}
          />
        </div>

        <div className="button-form">
          <button>
            <strong>Submit</strong>
          </button>
          <button type="button" onClick={deselectToDo}>
            <strong>Cancel</strong>
          </button>
        </div>
      </form>
    </>
  );
};

export default ToDosForm;
