import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Stylish Jacket', price: 99.99, image: '/images/jacket.jpg' },
  { id: 2, name: 'Elegant Dress', price: 79.99, image: '/images/dress.jpg' },
  { id: 3, name: 'Casual Shirt', price: 39.99, image: '/images/shirt.jpg' },
];

function Shop() {
  return (
    <div className="shop">
      <h1>Shop Our Collection</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
