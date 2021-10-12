import React from "react";

import "../css/TodoForm.css";
import { TodoContext } from "../TodoContext";
function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const onCancel = () => {setOpenModal(false)};
  const onAdd = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  return (
    <form onSubmit={onAdd}>
      <label></label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="tarea..."
      />
      <div>
        <button onClick={onCancel} type="button">
          {" "}
          Cancelar
        </button>
        <button type="submit"> Añadir</button>
      </div>
    </form>
  );
}
export { TodoForm };
