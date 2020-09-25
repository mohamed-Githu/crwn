import React, { useState, useEffect } from 'react';

import './App.css';

import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Singing from './pages/signing/signing.component';
import { auth, createUserDocumentProfile } from './firebase/firebase.utils';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)

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

  console.log(currentUser);

  return (
    <div>
      <Header user={currentUser} />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shop} />
        {!currentUser && <Route exact path='/signin' component={Singing} />}
      </Switch>
    </div>
  )
}

export default App;
