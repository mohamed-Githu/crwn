import React from 'react'

import './header.styles.scss'

import { Link } from 'react-router-dom'

import { ReactComponent as Logo} from '../../assets/crown-logo.svg'
import { auth } from '../../firebase/firebase.utils'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CartIcon from '../cart-icon/CartIcon.component'
import CartDropdown from '../cart-dropdown/CartDropdown.component'

import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'

const Header = ({ currentUser, hidden }) => (
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
        currentUser ? <div onClick={() => auth.signOut()} className='header__link'>
          sign out
        </div> : <Link to='/signin' className='header__link' >sign in</Link>
      }
      <CartIcon />
    </div>
    {!hidden && <CartDropdown />}
  </header>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
