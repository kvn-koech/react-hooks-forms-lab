// src/components/Item.js
import React from "react";

function Item({ name, category, onDelete, id }) {
  function handleDelete() {
    onDelete(id);
  }

  return (
    <li className={category}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

export default Item;