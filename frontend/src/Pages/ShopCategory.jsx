import React from 'react';
import Product from './Product'; 
import { products } from './products'; 
import './ShopCategory.css';

const ShopCategory = ({ category }) => {
  const categoryProducts = products[category] || []; 
  console.log(category,categoryProducts)
  return (
    <div className="shop-category">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      <div className="product-list">
        {categoryProducts.map((product) => (
          <Product
            key={product.id}
            productId={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            addToCart={(product) => console.log('Add to cart:', product)}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
