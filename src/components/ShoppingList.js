import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items: initialItems }) {
  const [items, setItems] = useState(initialItems);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(term) {
    setSearchTerm(term.toLowerCase());
  }

  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }

  const itemsToDisplay = items.filter((item) => {
    // Category filter
    const categoryMatch = 
      selectedCategory === "All" || 
      item.category === selectedCategory;
    
    // Search term filter (case-insensitive partial match)
    const searchMatch = 
      searchTerm === "" ||
      item.name.toLowerCase().includes(searchTerm);
    
    return categoryMatch && searchMatch;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter 
        onCategoryChange={handleCategoryChange} 
        onSearchChange={handleSearchChange}
        search={searchTerm}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;