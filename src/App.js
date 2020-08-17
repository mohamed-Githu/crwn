import React, { useState, useEffect } from 'react';

import './App.css';

import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Singing from './pages/signing/signing.component';
import { auth } from './firebase/firebase.utils';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <div>
      <Header user={currentUser} />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/signin' component={Singing} />
      </Switch>
    </div>
  )
}

export default App;
