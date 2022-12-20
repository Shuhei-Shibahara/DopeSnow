import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import { fetchCartItems, getCartItems } from '../../store/cartItems';
import CartIndex from './CartIndex';
import basket from '../../images/shopping_basket.png'
import { useHistory } from 'react-router-dom';

function CartIndexModal({showModal, setShowModal, user}) {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems)
  const history = useHistory();
  
  
  const quantity = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.quantity
    })
    return total 
  }
  
  const checkUser = (e) => (user) ? (
    setShowModal(true)
  ) : (
    history.push('/login')
  )

  return (
    <>
    <div>
      <button className="nav_button_cart" onClick={checkUser} >
          <img src={basket} width="26" height="26" />
      </button>
      {cartItems.length !== 0 &&
        <div className="cartItem_quantity">{quantity()}</div>
      }
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CartIndex setShowModal={setShowModal}/>
        </Modal>
      )}
    </div>
    </>
  );
}

export default CartIndexModal;