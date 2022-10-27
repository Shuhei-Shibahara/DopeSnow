import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation';
function App() {
  return (
    <>
      <h1>Dope Snow</h1>
        <Navigation />
          <Switch>
            <Route path="/login">
              <h1>Dope Snow</h1>
              <LoginFormPage />
            </Route>

            <Route path="/signup">
              <h1>Dope Snow</h1>
              <SignupFormPage />
            </Route>
          </Switch>
    </>
  );
}

export default App;
