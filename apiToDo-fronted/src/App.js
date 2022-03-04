import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import ToDosForm from "./Components/ToDosForm";
import ToDosList from "./Components/ToDosList";

function App() {
  const [isVisible, setIsVisible] = useState();
  const [toDo, setToDo] = useState([]);
  const [toDoSelected, setToDoSelected] = useState({});
  const [toDoSelectedIndex, setToDoSelectedIndex] = useState(-1);

  const getToDos = () => {
    axios
      .get(`http://localhost:4000/api/v1/toDos`)
      .then((res) => setToDo(res.data.data.toDos));
  };

  const addToDo = (toDo) => {
    axios
      .post(`http://localhost:4000/api/v1/toDos/`, toDo)
      .then(() => getToDos());
  };

  const deleteToDo = (id) => {
    axios
      .delete(`http://localhost:4000/api/v1/toDos/${id}`)
      .then(() => getToDos());
  };

  const selectedToDo = (toDo, index) => {
    setToDoSelected(toDo);
    setToDoSelectedIndex(index);
  };

  const deselectToDo = () => {
    setToDoSelected({});
  };

  const updateToDo = (editedToDo) => {
    axios
      .patch(
        `http://localhost:4000/api/v1/toDos/${toDoSelected.id}`,
        editedToDo
      )
      .then(() => getToDos());
  };

  useEffect(() => {
    getToDos();
  }, []);

  return (
    <div className="App">
      <button
        className="button-show-hide"
        onClick={() => setIsVisible(!isVisible)}
      >
        <strong>Create / hide</strong>
      </button>
      {isVisible ? (
        <ToDosForm
          addToDo={addToDo}
          toDoSelected={toDoSelected}
          deselectToDo={deselectToDo}
          updateToDo={updateToDo}
        />
      ) : null}

      <ToDosList
        className="toDosList"
        toDo={toDo}
        selectedToDo={selectedToDo}
        deleteToDo={deleteToDo}
      />
    </div>
  );
}

export default App;
