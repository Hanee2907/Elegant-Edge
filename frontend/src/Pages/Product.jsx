import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Stylish Jacket', price: 99.99, image: '/images/jacket.jpg', description: 'A stylish jacket perfect for any occasion.' },
  { id: 2, name: 'Elegant Dress', price: 79.99, image: '/images/dress.jpg', description: 'An elegant dress for your special events.' },
  { id: 3, name: 'Casual Shirt', price: 39.99, image: '/images/shirt.jpg', description: 'A casual shirt for everyday wear.' },
];

function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;

