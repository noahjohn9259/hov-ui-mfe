import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Route, Switch, Router, Redirect } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';

// import Header from './components/Header';
import Progress from './components/Progress';

const AuthLazy = lazy(() => import('./components/AuthApp'))
const MarketingLazy = lazy(() => import('./components/MarketingApp'))
const DashboardLazy = lazy(() => import('./components/DashboardApp'))

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
})

const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard')
    }
  }, [isSignedIn])

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          {/* {
            isSignedIn &&
            <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
          } */}
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/dashboard">
                <div>
                  {
                    !isSignedIn && <Redirect to="/" />
                  }
                  <DashboardLazy onSignIn={() => setIsSignedIn(true)} />
                </div>
              </Route>
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  )
}