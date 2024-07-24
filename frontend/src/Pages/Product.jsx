
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './c.css';

const Product = ({ productId, category, name, image, price }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/category/${category}/product/${productId}`);
  };

  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDetails product={product}/>
    </div>
  )
}

export default Product
