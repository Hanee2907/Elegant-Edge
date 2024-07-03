import React from 'react';
import ShopCategory from './ShopCategory'; // Adjust import path as per your structure

const ProductsPage = () => {
  return (
    <div className="products-page">
      <ShopCategory category="men" />
      <ShopCategory category="women" />
      <ShopCategory category="kids" />
    </div>
  );
};

export default ProductsPage;
