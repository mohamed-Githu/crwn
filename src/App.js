import React, { useEffect, lazy, Suspense } from 'react';
import './App.scss';

import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header.component';

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import Spinner from './components/spinner/spinner.component';

const Homepage = lazy(() => import('./pages/homepage/homepage.component'))
const Shop = lazy(() => import('./pages/shop/shop.component'))
const Singing = lazy(() => import('./pages/signing/signing.component'))
const Checkout = lazy(() => import('./pages/checkout/checkout.component'))

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <Header/>
      <div className="content-wrapper">
        <Switch>
          <ErrorBounday>
            <Suspense fallback={<Spinner />}>
              <Route exact path='/' component={Homepage} />
              <Route path='/shop' component={Shop} />
              <Route exact path='/signin' render={() => currentUser ? <Redirect to='/' /> : <Singing />} />
              <Route exact path='/checkout' component={Checkout} />
            </Suspense>
          </ErrorBounday>
          <Route><h1 style={{textAlign: 'center'}}>The Page You're Looking For Does Not Exict</h1></Route>
        </Switch>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);