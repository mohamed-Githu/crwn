import React from 'react'

import './header.styles.scss'

import { Link } from 'react-router-dom'

import { ReactComponent as Logo} from '../../assets/crown-logo.svg'
import { auth } from '../../firebase/firebase.utils'

import { connect } from 'react-redux'

const Header = ({ user }) => (
  <header className='header'>
    <div className="header__logo-container">
      <Link to='/'>
        <Logo className='header__logo' />
      </Link>
    </div>
    <div className="header__options">
      <Link className="header__link" to='/shop'>
        shop
      </Link>
      <Link to='/' className="header__link">
        contact
      </Link>
      {
        user ? <div onClick={() => auth.signOut()} className='header__link'>
          sign out
        </div> : <Link to='/signin' className='header__link' >sign in</Link>
      }
    </div>
  </header>
)

const mapStateToProps = state => ({
  user: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
