import React from "react";
import { useSelector, useDispatch,  } from "react-redux";
import { useNavigate } from "react-router-dom";
import { increment, decrement,removeItem,clear } from "./slice";

function CartList() {
  const dispatch = useDispatch();
  const cartTemp = useSelector((state) => state.addToCart.items);
  const navigate = useNavigate();

  // const handleQuantityChange = (id, qty) => {
  //   const quantity = parseInt(qty) || 1;
  //   dispatch(setQuantity({ id, quantity }));
  // };

  const handlePlaceOrder = () => {
    alert("Order Placed Successfully");
    localStorage.clear();
    dispatch(clear());
    navigate("/");
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Your Cart Items</h2>
        <span>
          <h3>{cartTemp.length} items</h3>
        </span>
      </div>

      {cartTemp.length > 0 ? (
        cartTemp.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-info">
              <img src={item.thumbnail} alt={item.title} />
              <div className="item-details">
                <h4>{item.title}</h4>
                <p>{item.brand}</p>
              </div>
            </div>
            <div className="item-actions">
              <div className="quantity-controls">
                <button className="quantity-btn" onClick={() => dispatch(decrement(item))}>−</button>
                <span className="quantity">{item.quantity}</span>
                <button className="quantity-btn" onClick={() => dispatch(increment(item))}>+</button>
                <div>
                  <span className="price">
                   
                    ${((Number(item.price) || 0) * (Number(item.quantity) || 1)).toFixed(2)}
                  </span>
                  <button onClick={() => dispatch(removeItem(item))} className="remove-from-cart">Remove</button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No items in cart</p>
      )}

      <div className="total-price">
        Total Price:{" "}
        <span>
          ${(cartTemp.reduce(
            (total, item) =>
              total + (Number(item.price) || 0) * (Number(item.quantity) || 1),
            0
          ).toFixed(2))}
        </span>
      </div>
      <div className="place-order-container">
      <button onClick={handlePlaceOrder} className="place-order">Place Order</button>
      </div>
      
    </div>
  );
}

export default CartList;
