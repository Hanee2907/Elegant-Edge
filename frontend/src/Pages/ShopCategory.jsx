import React from 'react';
import Product from './Product'; 
import { products } from './products'; 
import './ShopCategory.css';

const ShopCategory = ({ category }) => {
  const categoryProducts = products[category] || []; 
  return (
    <div className="shop-category">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      <div className="product-list">
        {categoryProducts.map((product) => (
          <Product
            key={product.id}
            productId={product.id}
            category={category}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
