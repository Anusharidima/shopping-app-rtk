import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Cart() {
  const cartSelector = useSelector((state) => state.addToCart.items);
  console.log("cartSelector", cartSelector);
   
  return (
    <div>
      <div className="cart">
        <Link to="/cart">
          <img
            src="https://cdn-icons-png.flaticon.com/512/833/833314.png"
            alt="cart"/>
          <span className="cart-count">{cartSelector ? cartSelector.length : 0}</span>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
