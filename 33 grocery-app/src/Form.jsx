import React, { useState } from "react";

const Form = ({ addItem }) => {
  const [newItemName, setnewItemName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newItemName) return;
    addItem(newItemName);
    setnewItemName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(event) => {
            setnewItemName(event.target.value);
          }}
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
};

export default Form;
