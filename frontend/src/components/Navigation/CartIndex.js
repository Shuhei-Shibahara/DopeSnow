import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './CartIndex.css'

function CartIndex() {
  const dispatch = useDispatch();


  return (
    <>
      <div className="main_cart_index_container">
        <div className="main_cart_text_container">
          <button className="close_button"></button>
          <header class="inside_cart_text_container">
            <div class="shopping_bag_text">Shopping Bag</div>
            <div class="always_free_text">Shipping is always free</div>
            <div class="price_text">$0 USD</div>
          </header>
        </div>
      </div>
    </>
  );
}

export default CartIndex;