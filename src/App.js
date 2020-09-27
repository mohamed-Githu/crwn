import React, {  useEffect } from 'react';

import './App.css';

import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Singing from './pages/signing/signing.component';
import { auth, createUserDocumentProfile } from './firebase/firebase.utils';

import { connect } from 'react-redux'

import { setCurrentUser } from './redux/user/user.actions'

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
  }, [])

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shop} />
        {!currentUser && <Route exact path='/signin' component={Singing} />}
        <Route><h1 style={{textAlign: 'center'}}>The Page You're Looking For Does Not Exict</h1></Route>
      </Switch>
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);