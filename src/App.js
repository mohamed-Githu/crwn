import React, {  useEffect } from 'react';

import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Singing from './pages/signing/signing.component';
import Checkout from './pages/checkout/checkout.component'
import { auth, createUserDocumentProfile } from './firebase/firebase.utils';

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors';

const App = ({ setCurrentUser, currentUser }) => {
  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserDocumentProfile(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      } else {
        setCurrentUser(null);
      }
    })

    return () => unsubcribe()
    // eslint-disable-next-line
  }, [setCurrentUser])

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
        <Route exact path='/signin' render={() => currentUser ? <Redirect to='/' /> : <Singing />} />
        <Route exact path='/checkout' component={Checkout} />
        <Route><h1 style={{textAlign: 'center'}}>The Page You're Looking For Does Not Exict</h1></Route>
      </Switch>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);