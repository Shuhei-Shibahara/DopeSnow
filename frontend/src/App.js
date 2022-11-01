import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupFormPage from './components/SignupFormPage';
import LoginFormPage from './components/LoginFormPage';
import Navigation from './components/Navigation';
import ProfilePage from './components/ProfilePage';
import HomePage from './components/HomePage'
import ProductIndexPage from './components/ProductIndexPage'
function App() {
  return (
    <>
        <Navigation />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route path="/login" >
              <LoginFormPage />
            </Route> 

            <Route path="/signup">
              <SignupFormPage />
            </Route>

            <Route exact path="/products">
              <ProductIndexPage />
            </Route>

            <Route exact path="/products/:gender">
              <ProductIndexPage />
            </Route>

            <Route path="/products/:gender/:category">
              <ProductIndexPage />
            </Route>

            <Route path="/cart">
              <ProfilePage />
            </Route>
          </Switch>
    </>
  );
}

export default App;
