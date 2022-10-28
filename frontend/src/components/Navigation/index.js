import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import dope from "../../images/dope.png"
import { FaSnowboarding } from 'react-icons/fa'

function Navigation() {
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
          {/* <NavLink to="/login"><button class="nav_signup_button"><FaSnowboarding/></button></NavLink> */}
          <Link to="/login"><FaSnowboarding /></Link>
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
        <div className="Sick_Home">
          <Link exact to="/"><a href="" className="dope"><img className="logo" src={dope} alt=""/></a></Link>
        </div>
    </header>
    </>

  );
}

export default Navigation;