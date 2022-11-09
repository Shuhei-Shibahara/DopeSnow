import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { Link } from "react-router-dom";
import './Navigation.css'
import { fetchCartItems } from "../../store/cartItems";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    dispatch(fetchCartItems())
  };

  return (
    <>
      <div className="profile_bar">
          <Link className='profile_button' onClick={openMenu}>PROFILE</Link>
        {showMenu && (
          <div className="profile_dropdown">
            <Link to="/cart">CART</Link>
            <Link to="/" onClick={logout}>LOG OUT</Link>
          </div>
        )}
      </div>
    </>
  );
}

export default ProfileButton;
