import React from 'react'

import './collection-item.styles.scss'

const CollectionItem = ({ price, imgUrl, name }) => (
  <div className='collection-item'>
    <div className="collection-item__image"
      style={{backgroundImage: `url(${imgUrl})`}}
    ></div>
    <div className="collection-item__footer">
      <span className="collection-item__name">{name}</span>
      <span className="collection-item__price">${price}</span>
    </div>
  </div>
)

export default CollectionItem
