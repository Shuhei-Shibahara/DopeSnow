import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateCartItem } from "../../store/cartItems";
import { useState } from "react";

export default function CartItem({cartItem}){
  const dispatch = useDispatch();
  
  

  const handleIncrease = () => {
    const updateItem = {
      ...cartItem, quantity: cartItem.quantity + 1
    }
    dispatch(updateCartItem(updateItem))
  } 

  return(
    <div className="individual_shopping_item_container">
      <div className="shopping_cart_main_photo_container">
        <Link to={`/product/${cartItem.id}`} className='link_back_to_product'>
          <div className="inside_photo_container">
            <img src="https://sick-snow.s3.us-west-2.amazonaws.com/Screen+Shot+2022-11-01+at+9.24.02+AM.png" className="cart_product_image" />
          </div>
        </Link>
      </div>
      <div className="shopping_cart_main_text_holder">
        <div className="shopping_cart_text_container_styling">
          <div className="shopping_cart_company_name">SICK</div>
          <h1 className="shopping_cart_product_name" >{cartItem.name}</h1>
          <div className="shopping_cart_product_price"><span>{cartItem.price} USD</span></div>
          <div>
            <div className="shopping_cart_size_quantity_container">
              <div className="quantity_container">
                <button className="subtract_quantity">-</button>

                <div className="shopping_cart_quantity">{cartItem.quantity}</div>
                <button onClick={handleIncrease} className="add_quantity">+</button>
              </div>
              <div className="shopping_cart_size">{cartItem.size}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

