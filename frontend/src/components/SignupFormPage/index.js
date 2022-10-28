import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session"
import './SignupForm.css'

const SignupFormPage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);


  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, name, password }))
        .catch(async (res) => {
          let data;
          try {
            data = await res.clone().json();
          } catch {
            data = await res.text(); 
          }
          if (data?.errors) setErrors(data.errors);
          else if (data) setErrors([data]);
          else setErrors([res.statusText]);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  }


  return (
    <>
    <div className="outer_container">
      <div className='signup_div'>
        <header className="title_container">
          <h1 className="title">CREATE ACCOUNT</h1>
        </header>
        <form onSubmit={handleSubmit} className="signup_form">
          <ul>
            {errors.map(error => <li key={error}>{error}</li>)}
          </ul>
          <label id="signup_input">
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <label id="signup_input">
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br />
          <label id="signup_input">
            <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <label id="signup_input">
            <input type="password" value={confirmPassword} placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
          </label>
          <br />
          <button type="submit" className="signup_button">SIGN UP</button>
          <div className="login_link">
            <NavLink to="/login">ALREADY HAVE AN ACCOUNT?</NavLink>
          </div>
        </form>
      </div>
    </div>
    </>
  )

}

export default SignupFormPage