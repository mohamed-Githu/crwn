import React from 'react'

import './header.styles.scss'

import { Link } from 'react-router-dom'

import { ReactComponent as Logo} from '../../assets/crown-logo.svg'

const Header = () => (
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
      <Link className="header__link">
        contact
      </Link>
    </div>
  </header>
)

export default Header
