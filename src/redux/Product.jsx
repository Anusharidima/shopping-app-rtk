import React,{ useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './slice'; 
import {fetchProducts} from './productSlice'

function Product() {
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(fetchProducts())
  }, [])

  const productselector = useSelector((state)=>state.products.items || [])
  console.log(productselector,"productselector");

  const cartSelector = useSelector((state) => state.addToCart.items);
  console.log("cartSelector", cartSelector);
    
  
  return (
    <div className="grid">
      {
        productselector.length > 0 ? (
          productselector.map((item) => (
            <div className="card"  key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <div className="content">
                <div className="title">{item.title}</div>
                <div className="brand">{item.brand}</div>
                <div className="price">{item.price}</div>
                <div className="rating">{item.rating}</div>
                <div className="button-row">
                {
                  cartSelector.find((cartItem) => cartItem.id === item.id) ? (
                    <button className="add-to-cart added" >Added</button>
                  ) : (
                    <button className="add-to-cart" onClick={() => dispatch(increment(item))}>Add</button>
                  )
                }
                <button className="remove-from-cart" onClick={() => dispatch(clear(item))}>Remove</button>
                </div>
                
              </div>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
    </div>
  );
}

export default Product;
