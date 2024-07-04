import React from 'react'

const Product = () => {
  return (
    <div className="product">
      
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>View Details</button>
    </div>
  )
}

export default Product
