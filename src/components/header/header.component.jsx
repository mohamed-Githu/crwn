import React from 'react'

import { ReactComponent as Logo} from '../../assets/crown-logo.svg'
import { auth } from '../../firebase/firebase.utils'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CartIcon from '../cart-icon/CartIcon.component'
import CartDropdown from '../cart-dropdown/CartDropdown.component'

import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'

import {
  HeaderContainer,
  OptionLink,
  OptionsContainer,
  LogoContainer
} from './header.styles'

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer>
      <OptionLink to='/'>
        <Logo/>
      </OptionLink>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        shop
      </OptionLink>
      <OptionLink to='/'>
        contact
      </OptionLink>
      {
        currentUser ? <OptionLink as='div' onClick={() => auth.signOut()}>
          sign out
        </OptionLink> : <OptionLink to='/signin'>sign in</OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    {!hidden && <CartDropdown />}
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
