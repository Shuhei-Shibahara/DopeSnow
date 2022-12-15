import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import "./LoginForm.css";
import { fetchCartItems } from "../../store/cartItems";

function LoginForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(()=>{
    if (sessionUser){
      dispatch(fetchCartItems(sessionUser.id))
    }
  },[sessionUser])
  
  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
   
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.loginUser({ email, password }))
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twiceL
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if, e.g., server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  };
  
  const handleDemo = (e) => {
    e.preventDefault();

    return dispatch(sessionActions.loginUser({ email: 'wipeout@mail.com', password: 'password' }))  
  }

  return (
    <>
      <div className="outer_container">
        <div className='signup_div'>
          <header className="title_container">
            <h1 className="title">CREATE ACCOUNT</h1>
          </header>
          <form onSubmit={handleSubmit} className="signup_form">
            <ul className="error_message">
              {errors.map(error => <li key={error}>{error}</li>)}
            </ul>
            <label id="signup_input">
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label id="signup_input">
              <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button type="submit" className="signup_button">LOG IN</button>
          </form>
            <button onClick={handleDemo} type="submit" className="signup_button">DEMO LOG IN</button>
            <div className="login_link">
              <NavLink to="/signup">CREATE ACCOUNT</NavLink>
            </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;