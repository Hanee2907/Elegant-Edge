import React, { useContext, useState } from "react";
import './ShopCategory.css';
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import ProductDetails from "../Components/ProductDetails/ProductDetails"; // Ensure correct path to ProductDetails

const ShopCategory = ({ category }) => {
  const { products } = useContext(ShopContext);
  const categoryProducts = products[category] || [];
  const [selectedItemId, setSelectedItemId] = useState(null); // State to track selected item

  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId); // Set the selected item id
  };

  const closeDetails = () => {
    setSelectedItemId(null); // Reset selected item id to close details component
  };

  return (
    <div className="shop-category">
      <h2 className="category-title">{category}</h2>
      <p>
        <span>
          Showing {categoryProducts.length > 0 ? `1-${Math.min(categoryProducts.length, 12)}` : 0}
        </span>
        out of {categoryProducts.length} products
      </p>
      {selectedItemId !== null ? (
        <ProductDetails
          productId={selectedItemId} // Ensure correct prop name
          onClose={closeDetails}
        />
      ) : (
        <div className="item-container">
          {categoryProducts.map((item) => (
            <Item 
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              oldPrice={item.Oldprice}
              newPrice={item.price}
              onClick={handleItemClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopCategory;
