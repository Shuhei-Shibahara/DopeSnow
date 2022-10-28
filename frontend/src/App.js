import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupFormPage from './components/SignupFormPage';
import LoginFormPage from './components/LoginFormPage';
import Navigation from './components/Navigation';
import ProfilePage from './components/ProfilePage';
function App() {
  return (
    <>
        <Navigation />
          <Switch>
             <Route path="/login" >
              <LoginFormPage />
            </Route> 

            <Route path="/signup">
              <SignupFormPage />
            </Route>

            <Route path="/profile">
              <ProfilePage />
            </Route>
          </Switch>
    </>
  );
}

export default App;
