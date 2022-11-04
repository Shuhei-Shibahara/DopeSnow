import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems, getCartItems } from "../../store/cartItems";
import './CartIndex.css'
import { Link } from "react-router-dom";
function CartIndex() {
  const dispatch = useDispatch();
  const items = useSelector(getCartItems)
  
  useEffect(()=>{
    dispatch(fetchCartItems())
  },[dispatch])


  return (
    <>
      <div className="main_cart_index_container">
        <div className="main_cart_text_container">
          <button className="close_button"></button>
          <header className="inside_cart_text_container">
            <div className="shopping_bag_text">Shopping Bag</div>
            <div className="always_free_text">Shipping is always free</div>
            <div className="price_text">$0 USD</div>
          </header>
          <div className='main_cart_shopping_item_container'>
            <div>
              <div className='inner_shopping_item_container'>
                {items.map(item => 
                (<>
                  <div className="individual_shopping_item_container">
                    <div class="shopping_cart_main_photo_container">
                      <Link to={`/product/${item.id}`} className='link_back_to_product'>
                        <div className="inside_photo_container">
                          <img src="https://sick-snow.s3.us-west-2.amazonaws.com/Screen+Shot+2022-11-01+at+9.24.02+AM.png" className="cart_product_image" />
                        </div>
                      </Link>
                    </div>
                    <div className="shopping_cart_main_text_holder">
                      <div className="shopping_cart_text_container_styling">
                        <div className="shopping_cart_company_name">SICK</div>
                        <h1  className="shopping_cart_product_name" >{item.name}</h1>
                        <div className="shopping_cart_product_price"><span>{item.price} USD</span></div>
                        <div>
                          <div className="shopping_cart_size_quantity_container">
                            <div className="quantity_container">
                              <div className="shopping_cart_quantity">{item.quantity}</div>
                              <div className="shopping_cart_size">{item.size}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>)
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartIndex;