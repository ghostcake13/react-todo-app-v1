import React, { useEffect, useState, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            name="text"
            placeholder="Update your item"
            value={input}
            className="todo-input edit"
            ref={inputRef}
            onChange={handleChange}
          />
          <button className="todo-button edit" onClick={handleSubmit}>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            name="text"
            placeholder="Add a todo"
            value={input}
            className="todo-input"
            ref={inputRef}
            onChange={handleChange}
          />{" "}
          <button className="todo-button" onClick={handleSubmit}>
            Add Todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
