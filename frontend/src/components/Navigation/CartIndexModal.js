import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import { fetchCartItems, getCartItems } from '../../store/cartItems';
import CartIndex from './CartIndex';
import basket from '../../images/shopping_basket.png'

function CartIndexModal({showModal, setShowModal}) {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems)
  
  
  
  useState(() => {
    dispatch(fetchCartItems())
  }, [dispatch])
  
  const quantity = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.quantity
    })
    return total * cartItems.length
  }
 

  return (
    <>
    <div>
      <button className="nav_button_cart" onClick={() => setShowModal(true)} >
          <img src={basket} width="26" height="26" />
      </button>
      {cartItems.length !== 0 &&
        <div className="cartItem_quantity">{quantity()}</div>
      }
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CartIndex />
        </Modal>
      )}
    </div>
    </>
  );
}

export default CartIndexModal;