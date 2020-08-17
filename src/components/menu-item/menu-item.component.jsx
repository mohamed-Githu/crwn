import React from 'react'

import './menu-item.styles.scss'

import { withRouter } from 'react-router-dom'

const MenuItem = ({ title, size, imgUrl, history }) => (
  <div className={`menu-item ${size}`} onClick={() => history.push(`/shop/${title}`)} >
    <div className="background" style={{backgroundImage: `url(${imgUrl})`}}></div>
    <div className="content">
    <h1 className="title">{title}</h1>
    <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
)

export default withRouter(MenuItem)
