
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './c.css';

const Product = ({ productId, category, name, image, price }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/category/${category}/product/${productId}`);
  };

  return (
    <div className="product" onClick={handleClick}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Price: ${price}</p>
    </div>
  );
};

export default Product;
