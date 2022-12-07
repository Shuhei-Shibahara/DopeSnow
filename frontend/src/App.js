import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupFormPage from './components/SignupFormPage';
import LoginFormPage from './components/LoginFormPage';
import Navigation from './components/Navigation';
import ProfilePage from './components/ProfilePage';
import HomePage from './components/HomePage'
import ProductIndexPage from './components/ProductIndexPage'
import ProductPage from './components/ProductPage'
import { useState } from 'react';
import CheckOut from './components/Checkout';
import Footer from './components/Footer';
import SearchIndex from './components/SearchBar/SearchIndex';

function App() {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
        <Navigation showModal={showModal} setShowModal={setShowModal}/>
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

            <Route exact path="/product/:id">
              <ProductPage showModal={showModal} setShowModal={setShowModal} />
            </Route>

            <Route exact path="/products/:gender">
              <ProductIndexPage />
            </Route>

            <Route exact path="/products/:gender/:category">
              <ProductIndexPage />
            </Route>

            <Route path="/cart">
              <ProfilePage />
            </Route>

            <Route path="/checkout">
              <CheckOut />
            </Route>

            <Route exact path="/search">
              <SearchIndex />
            </Route>

          </Switch>
        <Footer />
    </>
  );
}

export default App;
