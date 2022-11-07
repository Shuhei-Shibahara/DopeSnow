import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem, fetchCartItems, getCartItems } from "../../store/cartItems";
import './CartIndex.css'
import CartItem from "./CartItem";
function CartIndex() {
  const dispatch = useDispatch();
  const items = useSelector(getCartItems)
  const user = useSelector(state => state.session.user)

  useEffect(()=>{
    dispatch(fetchCartItems())
  },[dispatch])
  
  const getTotal = () => {
    let priceArr = Object.values(items).map(item => parseFloat(item.price) * item.quantity)
    let total = 0;
    for (let price of priceArr){
      total += price
    }
    return total
  }

  const handleCheckout = () => {
    while (items.length > 0){
      let item = items.pop()
      dispatch(deleteCartItem(item.id))

    }
  }




  return (
    <>
      <div className="main_cart_index_container">
        <div className="main_cart_text_container">
          <button className="close_button"></button>
          <header className="inside_cart_text_container">
            <div className="shopping_bag_text">Shopping Bag</div>
            <div className="always_free_text">Shipping is always free</div>
            <div className="price_text">${getTotal()} USD</div>

          </header>
          <div className='main_cart_shopping_item_container'>
            <div>
              <div className='inner_shopping_item_container'>
                {items.map(cartItem => 
                (<>
                  <CartItem cartItem={cartItem}/>
                </>)
                  )}
              </div>
            </div>
          </div>
          <div className='checkout_container'>
            <button onClick={handleCheckout} className="checkout_button">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartIndex;