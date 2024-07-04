import React from 'react';
import './ShopCategory.css';

const Product = ({ productId, name,image, price, addToCart }) => {
  const handleAddToCart = () => {
    addToCart({ id: productId, name, price });
  };

  return (
    <div className="product">
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      <img src={image} alt={name} />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;