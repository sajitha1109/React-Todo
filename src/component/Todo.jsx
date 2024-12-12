import React, { useState } from "react";
import Form from "./Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState(null);
  const handleAddTodo = (newTodo) => {
    if (editIndex !== null) {
      const updatedTodos = todos.map((todo, index) =>
        index === editIndex ? newTodo : todo
      );
      setTodos(updatedTodos);
      setEditIndex(null);
      setEditValue(null);
    } else {
      setTodos((prev) => [...prev, newTodo]);
    }
  };

  const handleEditTodo = (index) => {
    setEditIndex(index);
    setEditValue(todos[index]);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <Form onAddTodo={handleAddTodo} initialValue={editValue} />
      <div style={{ textAlign: "left" }}>
        <h2
          style={{
            textAlign: "left",
            borderBottom: "2px solid black",
            marginInline: "10px",
            color: "black",
          }}
        >
          TODOLIST
        </h2>
        <div id="formBox">
          {todos.map((todo, index) => (
            <div key={index} style={{ position: "relative" }}>
              <p
                style={{
                  margin: "4px",
                  padding: "3px",
                  backgroundColor: "#f5f5f5",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                }}
              >
                {`${todo.title} - ${todo.estimatedHours} hrs - ${todo.description}`}
              </p>

              <FontAwesomeIcon
                icon={faPenToSquare}
                onClick={() => !editIndex && handleEditTodo(index)}
                id="edit"
              />

              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => !editIndex && handleDeleteTodo(index)}
                id="trash"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
