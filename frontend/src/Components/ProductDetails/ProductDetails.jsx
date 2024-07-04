// ProductDetails.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../Components/Images/products';
import './ProductDetails.css';
import star1 from '../Images/star1.png';
import star2 from '../Images/star2.png';

const ProductDetails = () => {
  const { category, productId } = useParams();
  const product = products[category]?.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details">
      <div className='product-detail-left'>
        <div className='image-list'>
          <img src={product.image} alt='img1'/>
          <img src={product.image}  alt='img2'/>
          <img src={product.image}  alt='img3'/>
        </div>
        <div className='display-img'>
          <img className='main-img' src={product.image} alt={product.name}/>
        </div>
      </div>
      <div className='product-details-right'>
        <h1>{product.name}</h1>
        <div className='rating'>
          <img src={star1} alt=''/>
          <img src={star1} alt=''/>
          <img src={star1} alt=''/>
          <img src={star1} alt=''/>
          <img src={star2} alt=''/>
          <p>(222)</p>
        </div>
        <div className='prices'>
          <div className='old-price'>${product.Oldprice}</div>
          <div className='new-price'>${product.price}</div>
        </div>
        <div className='description'>{product.desc}</div>
        <div className='size'>
          <h1>Select Size</h1>
          <div className='measure'>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
          </div>
        </div>
        <button>ADD TO CART</button>
        <p className='category'><span>Category :</span> {category}</p>
        <p className='category'><span>Tags :</span> Mens, jeans, Black Scratch</p>
      </div>
    </div>
  );
};

export default ProductDetails;
