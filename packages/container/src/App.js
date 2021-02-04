import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Switch, Router, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Header from './components/Header';
import Progress from './components/Progress';

import '../style/main.css';

const AuthLazy = lazy(() => import('./components/AuthApp'));
const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const history = createBrowserHistory();

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard');
    }
  }, [isSignedIn]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsSignedIn(true);
    }
  }, []);

  const onSignIn = ({ jwt: token, user }) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    setIsSignedIn(true);
  };

  return (
    <Router history={history}>
      <div>
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth">
              <AuthLazy onSignIn={onSignIn} />
            </Route>
            <Route path="/dashboard">
              <div>
                {!isSignedIn && <Redirect to="/" />}
                <DashboardLazy onSignIn={() => setIsSignedIn(true)} />
              </div>
            </Route>
            <Route path="/">
              <div>
                <Header />
                <MarketingLazy></MarketingLazy>
              </div>
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}
