import React, { useState, useEffect } from "react";
import { ToDo } from "../constant/todo";
const Form = ({ onAddTodo, initialValue }) => {
  const [value, setValue] = useState(ToDo);

  useEffect(() => {
    if (initialValue) {
      setValue(initialValue);
    }
  }, [initialValue]);

  const [errors, setErrors] = useState({});

  //to prevent from letter e ,E in number type
  const handleNumberInput = (event) => {
    if (event.key === "e" || event.key === "E") {
      event.preventDefault();
    }
  };

  const handleChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    const { title, estimatedHours, description } = value;

    const updatedErrors = {
      ToDo,
    };

    //Errors
    let formHasErrors = false;

    if (!title) {
      updatedErrors.title = "Title is required";
      formHasErrors = true;
    }
    if (!estimatedHours || estimatedHours <= 0) {
      updatedErrors.estimatedHours = "Estimation hour  is required ";
      formHasErrors = true;
    }
    if (!description) {
      updatedErrors.description = "Description is required";
      formHasErrors = true;
    }

    setErrors(updatedErrors);

    if (formHasErrors) {
      return;
    }
    onAddTodo(value);
    setValue(ToDo);
  };

  return (
    <div>
      <input
        className="textBox"
        type="text"
        placeholder="Title"
        name="title"
        value={value.title}
        onChange={handleChange}
        style={{ border: "none" }}
      />
      {errors.title && (
        <p style={{ color: "red", margin: 0 }}>{errors.title}</p>
      )}

      <input
        className="textBox"
        type="number"
        onKeyDown={handleNumberInput}
        placeholder="Estimation (hrs)"
        name="estimatedHours"
        value={value.estimatedHours}
        onChange={handleChange}
        style={{ border: "none" }}
      />
      {errors.estimatedHours && (
        <p style={{ color: "red", margin: 0 }}>{errors.estimatedHours}</p>
      )}

      <input
        className="textBox"
        type="text"
        placeholder="Description"
        name="description"
        value={value.description}
        onChange={handleChange}
        style={{ border: "none" }}
      />
      {errors.description && (
        <p style={{ color: "red", margin: 0 }}>{errors.description}</p>
      )}

      <button
        onClick={() => handleSubmit()}
        style={{
          paddingInline: "40px",
          marginTop: "20px",
          backgroundColor: "#00d7f3",
          // marginLeft: "114px",
        }}
      >
        {initialValue ? "UPDATE" : "ADD"}
      </button>
    </div>
  );
};

export default Form;
