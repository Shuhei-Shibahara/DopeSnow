import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CartIndex from './CartIndex';

function CartIndexModal({showModal, setShowModal}) {

  return (
    <>
      <button className="nav_button_cart" onClick={() => setShowModal(true)} >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-178.000000, -15.000000)">
              <g transform="translate(178.000000, -241.000000)">
                <g transform="translate(0.000000, 256.000000)">
                  <g transform="translate(0.000000, 5.000000)">
                  </g>
                  <rect stroke="currentColor" strokeWidth="2" x="1" y="6" width="18" height="13">
                  </rect>
                  <path d="M5.03403559,6 L14.9659644,6 C14.7190324,2.55483332 13.1230068,1 10,1 C6.87699319,1 5.2809676,2.55483332 5.03403559,6 Z" stroke="currentColor" strokeWidth="2">
                  </path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CartIndex />
        </Modal>
      )}
    </>
  );
}

export default CartIndexModal;