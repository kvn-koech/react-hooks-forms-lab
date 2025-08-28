// src/components/ItemList.js
import React from "react";
import Item from "./Item";

function ItemList({ items, onItemDelete }) {
  return (
    <ul className="Items">
      {items.map((item) => (
        <Item 
          key={item.id} 
          id={item.id}
          name={item.name}
          category={item.category}
          onDelete={onItemDelete}
        />
      ))}
    </ul>
  );
}

export default ItemList;