import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';

function App() {
  return (
    <Switch>
      <Route path="/login">
      <h1>Dope Snow</h1>
        <LoginFormPage />
      </Route>
    </Switch>
  );
}

export default App;
