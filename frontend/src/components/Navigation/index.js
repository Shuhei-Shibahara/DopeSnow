import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import dope from "../../images/dope.png"
import logo from "../../images/sick_logo.png"
import CategoryDropDown from './CategoryDropDown';
import CartIndexModal from './CartIndexModal';
import SearchBar from '../SearchBar';

function Navigation({showModal, setShowModal}) {
  const sessionUser = useSelector(state => state.session.user);


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
          <Link exact to="/" className="dope"><img className="logo" src={logo} alt=""/></Link>
          <nav className='gender_button_nav'>
            <ol>
              <div className='gender_link_wrapper'>
                <Link className="gender_link_men">Men</Link>
                <CategoryDropDown gender={'m'}/>
              </div>
              <div>
                <div className='gender_link_wrapper'>

                <Link className="gender_link_women">Women</Link>
                <CategoryDropDown gender={'w'}/>
                </div>

              </div>
            </ol>
          </nav>
          <div className='right_side_nav_bar'>
            <button className="nav_button">
             <SearchBar />
            </button>            
            <CartIndexModal showModal={showModal} setShowModal={setShowModal}/>

          </div>
        </div>
    </header>
    </>

  );
}

export default Navigation;