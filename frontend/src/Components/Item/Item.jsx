import React from "react";
import './Item.css';

const Item = ({ id, name, image, oldPrice, newPrice, onClick }) => {
  const handleClick = () => {
    // Call onClick function passed from parent component (e.g., ShopCategory)
    if (onClick) {
      onClick(id); // Pass the id of the item to identify which item was clicked
    }
  };

  return (
    <div className="item" onClick={handleClick}>
      <img src={image} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>Old Price: ${oldPrice}</p>
        <p>New Price: ${newPrice}</p>
      </div>
    </div>
  );
};

export default Item;
