import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import dope from "../../images/dope.png"
import CategoryDropDown from '../CategoryDropDown';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  const [isShown, setIsShown] = useState(false);

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
          <nav>
            <ol>
              <Link class="gender_link_men">Men</Link>
                < CategoryDropDown />
              <Link class="gender_link_women">Women</Link>
                < CategoryDropDown />
            </ol>
          </nav>
          <div className='right_side_nav_bar'>
            <button class="nav_button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            </button>            
            <button class="nav_button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g transform="translate(-178.000000, -15.000000)">
                    <g transform="translate(178.000000, -241.000000)">
                      <g transform="translate(0.000000, 256.000000)">
                        <g transform="translate(0.000000, 5.000000)">
                          </g>
                            <rect stroke="currentColor" stroke-width="2" x="1" y="6" width="18" height="13">
                            </rect>
                            <path d="M5.03403559,6 L14.9659644,6 C14.7190324,2.55483332 13.1230068,1 10,1 C6.87699319,1 5.2809676,2.55483332 5.03403559,6 Z" stroke="currentColor" stroke-width="2">
                            </path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
            </button>

          </div>
        </div>
    </header>
    </>

  );
}

export default Navigation;