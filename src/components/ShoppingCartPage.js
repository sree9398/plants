import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementItem, decrementItem, removeFromCart } from '../redux/actions';
import { Link } from 'react-router-dom';

const ShoppingCartPage = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => dispatch(incrementItem(item.id))}>+</button>
            <button onClick={() => dispatch(decrementItem(item.id))}>-</button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
          </li>
        ))}
      </ul>
      <p>Total: ${totalCost}</p>
      <button>Checkout (Coming Soon)</button>
      <Link to="/products">Continue Shopping</Link>
    </div>
  );
};

export default ShoppingCartPage;
