import React from 'react';
import { shape, func } from 'prop-types';
import { Switch, Route, Router } from 'react-router-dom';

import Signin from './components/Signin';
import Signup from './components/Signup';

import '../style/main.css';

export default function App({ history, onSignIn }) {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/auth/signin">
            <Signin onSignIn={onSignIn} />
          </Route>
          <Route path="/auth/signup">
            <Signup onSignIn={onSignIn} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

App.propTypes = {
  history: shape({}),
  onSignIn: func,
};
