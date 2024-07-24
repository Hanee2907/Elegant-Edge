import React, { useState, useContext } from 'react';
import './ProductDetails.css';
import star1 from "../Images/star1.png";
import star2 from "../Images/star2.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDetails = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = async () => {
    if (!selectedSize) {
      alert('Please select a size.');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: product.id,
          size: selectedSize,
        }),
        credentials: 'include',
      });
      const data = await response.json();
      console.log(data);
      if (data.success) {
        addToCart(product.id);
      } else {
        alert('Error adding to cart');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
        </div>
        <div className='productdisplay-img'>
          <img className='productdisplay-main-img' src={product.image} alt='' />
        </div>
      </div>
      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className='productdisplay-right-star'>
          <img src={star1} alt='' />
          <img src={star1} alt='' />
          <img src={star1} alt='' />
          <img src={star1} alt='' />
          <img src={star2} alt='' />
          <p>(122)</p>
        </div>
        <div className='productdisplay-right-prices'>
          <div className='productdisplay-right-price-old'>${product.old_price}</div>
          <div className='productdisplay-right-price-new'>${product.new_price}</div>
        </div>
        <div className='productdisplay-right-size'>
          <h1>Select Size</h1>
          <div className='productdisplay-right-sizes'>
            {['S', 'M', 'L', 'XL'].map((size) => (
              <div
                key={size}
                className={selectedSize === size ? 'selected' : ''}
                onClick={() => handleSizeSelection(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleAddToCart}>Add to Cart</button>
        <p className='productdisplay-right-category'><span>Category:</span> Women, Tshirt</p>
        <p className='productdisplay-right-category'><span>Category:</span> Modern, Tshirt</p>
      </div>
    </div>
  );
};

export default ProductDetails;