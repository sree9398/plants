import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const cart = useSelector(state => state.cart);
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header>
      <h1>Plant Store</h1>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cartItemCount})</Link>
      </nav>
    </header>
  );
};

export default Header;
