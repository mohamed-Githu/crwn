import React from 'react'

import './collection-preview.styles.scss'

import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <div className="collection-preview__header">
      <h1 className="collection-preview__title">{title}</h1>
      <button className="collection-preview__button">See All <span>&rarr;</span></button>
    </div>
    <div className="collection-preview__items">
      {
        items
        .filter((item, i) => i < 4)
        .map(({ id, ...itemProps }) => <CollectionItem key={id} {...itemProps} /> )
      }
    </div>
  </div>
)

export default CollectionPreview
