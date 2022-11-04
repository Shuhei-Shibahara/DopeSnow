import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import dope from "../../images/dope.png"
import CategoryDropDown from './CategoryDropDown';
import CartIndexModal from './CartIndexModal';

function Navigation({showModal, setShowModal}) {
  const sessionUser = useSelector(state => state.session.user);
  // const [isShown, setIsShown] = useState(false);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <div>
          <Link to="/login" className='login_button'>LOG IN</Link>
        </div>
      </>
    );
  }

  return (
    <>
    <header className="main_header">
        <div className="top_level">
          <div className="upper_top">
            <div className="shipping">
              <span className="free">Free shipping. Free Return.</span>
              <span> All the time on all the orders.</span>
            </div>
            {sessionLinks}
          </div>
          <div className='header_space'></div>
        </div>
        <div className="sick_home">
          <Link exact to="/" className="dope"><img className="logo" src={dope} alt=""/></Link>
          <nav className='gender_button_nav'>
            <ol>
              <div className='gender_link_wrapper'>
                <Link className="gender_link_men">Men</Link>
                <CategoryDropDown />
              </div>
              <div>
                <Link className="gender_link_women">Women</Link>
                <CategoryDropDown />
              </div>
            </ol>
          </nav>
          <div className='right_side_nav_bar'>
            <button className="nav_button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            </button>            
            <CartIndexModal showModal={showModal} setShowModal={setShowModal}/>

          </div>
        </div>
    </header>
    </>

  );
}

export default Navigation;