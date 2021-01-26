import React from 'react';
import { shape, func } from 'prop-types';
import { Switch, Route, Router } from 'react-router-dom';

import Dashboard from './components/Dashboard';

import '../style/main.css';

export default function App({ history }) {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

App.propTypes = {
  history: shape({}),
  onSignIn: func,
};
