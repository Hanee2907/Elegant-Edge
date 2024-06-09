import React from 'react';

const cartItems = [
  { id: 1, name: 'Stylish Jacket', price: 99.99, quantity: 1 },
  { id: 2, name: 'Elegant Dress', price: 79.99, quantity: 2 },
];

function Cart() {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price.toFixed(2)} x {item.quantity}
              </li>
            ))}
          </ul>
          <h2>Total: ${total.toFixed(2)}</h2>
          <button>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;

